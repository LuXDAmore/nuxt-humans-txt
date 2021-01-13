// Node
import { resolve } from 'path';

// Third party
import { writeFile } from 'fs-extra';

// Configs
import * as PACKAGE from '../package.json';
import defaultConfig from './config';

// Log
import log from './logger';

// Options
const moduleName = 'nuxt-humans-txt'
    , logger = log(
        `nuxt:${ moduleName }`,
    )
;

// Module
export default async function nuxtHumansTxt(
    moduleOptions,
) {

    // Merge with user-config
    const configuration = {
        ... defaultConfig || {},
        hideGenericMessagesInConsole: ! this.options.dev,
        ... moduleOptions || {},
        ... this.options[ moduleName ] || {},
        ... this.options.humansTxt || {},
    };

    // Check if everything is ok, part 1
    if( ! configuration.enabled || ! configuration.fileName ) {

        configuration.enabled && ! configuration.hideErrorsInConsole && logger.error(
            '\x1B[31m%s\x1B[0m',
            moduleName,
            'a `fileName` key with a value must be present in the configuration object',
            configuration
        );

        return;

    }

    // Module start
    const data = [
        ... ( configuration.thanksTo || [] ),
        ... ( configuration.site || [] ),
    ];

    // Check if everything is ok, part 2
    if( ! data.length ) {

        configuration.enabled && ! configuration.hideErrorsInConsole && logger.error(
            '\x1B[31m%s\x1B[0m',
            moduleName,
            '`thanksTo` and `site` keys cannot be empty',
            configuration
        );

        return;

    }

    // Add developers info
    configuration.keepDevelopersInformations && data.push(
        false,
        'BACKSTAGE',
        {
            key: 'HumansTxt Plugin developer',
            value: 'Luca Iaconelli',
        },
        {
            key: 'From',
            value: 'Faenza, Italy',
        },
        {
            key: 'Twitter',
            value: '@luxdamore',
        },
        {
            key: 'Instagram',
            value: 'https://www.instagram.com/luxdamore',
        },
    );

    // Static folder path
    const filepath = resolve(
        this.options.srcDir,
        this.options.dir.static,
        configuration.fileName
    );

    // Content
    try {

        // Final string
        const output = data.reduce(
            (
                accumulator,
                row
            ) => {

                 // String manipulation
                let string = '';

                if( row ) {

                    if( typeof row === 'string' )
                        string += `/* ${ row } */`;
                    else if( row.key && row.value )
                        string += `${ row.key }: ${ typeof row.value === 'string' ? row.value : row.value.join( ', ' ) }`;

                }

                // Append rows
                accumulator += string;
                accumulator += '\n';

                return accumulator;

            },
            ''
        );

        // Check everything ok, part 3
        if( ! output ) {

            ! configuration.hideErrorsInConsole && logger.error(
                '\x1B[31m%s\x1B[0m',
                moduleName,
                'an error has occurred while checking the file-content',
                data
            );

            return;

        }

        // Write the file
        await writeFile(
            filepath,
            output,
            configuration.fileEncoding
        );

        // Head
        // Inject link in head
        configuration.link && this.options.head.link.push(
            {
                once: true,
                type: 'text/plain',
                hid: configuration.link.hid || 'humans-txt',
                rel: configuration.link.rel || 'author',
                href: ( configuration.link.href || '' ) + configuration.fileName,
            }
        );

        ! configuration.hideGenericMessagesInConsole && logger.info(
            '\x1B[32m%s\x1B[0m',
            moduleName,
            '`link` correctly ' + ( configuration.link ? 'injected' : 'skipped' ) + ' in head',
        );

    } catch( error ) {

        ! configuration.hideErrorsInConsole && logger.error(
            '\x1B[31m%s\x1B[0m',
            moduleName,
            'an error has occurred while manipulating the file',
            error
        );

    }

}

// Exports
const meta = PACKAGE;

export { meta };

// REQUIRED if publishing the module as npm package
module.exports.meta = require(
    '../package.json'
);
