/*
*   * Test utils
*/
import { setup, get } from '@nuxtjs/module-test-utils';

/*
*   * Requirements
*/
import * as PACKAGE from '../package.json';

/*
*   * Nuxt configuration
*/
import config from '../src/nuxt.config';

delete config.server;
config.dev = false;

/*
*   * Get url for the generated website
*/
const BASE_URL = PACKAGE.homepage.replace(
    'https://luxdamore.github.io/',
    '/'
);

/*
*   * Module testing suite
*/
describe(
    'module',
    () => {

        /*
        *   * Nuxt
        */
        let nuxt;

        beforeAll(
            async() => {

                (
                    { nuxt } = (
                        await setup(
                            config
                        )
                    )
                );

            },
            90000
        );

        afterAll(
            async() => {

                await nuxt.close();

            },
            90000
        );

        /*
        *   * Tests
        */
        test(
            'render',
            async() => {

                const html = await get(
                    BASE_URL
                );

                expect(
                    html
                ).toContain(
                    'humans.txt'
                );

            },
            90000
        );

    }
);
