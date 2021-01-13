# 🔌 Nuxt Humans Txt

[![Code Quality][quality-src]][quality-href]
[![Dependencies][dependencies-src]][dependencies-href]
[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Donate][donate-src]][donate-href]

[npm-version-src]: https://img.shields.io/npm/v/@luxdamore/nuxt-humans-txt/latest.svg?style=flat
[npm-version-href]: https://npmjs.com/package/@luxdamore/nuxt-humans-txt

[quality-src]: https://img.shields.io/badge/code%20quality-A-informational?style=flat
[quality-href]: https://luxdamore.github.io/generative-art/

[npm-downloads-src]: https://img.shields.io/npm/dt/@luxdamore/nuxt-humans-txt.svg?style=flat
[npm-downloads-href]: https://npmjs.com/package/@luxdamore/nuxt-humans-txt

[circle-ci-src]: https://img.shields.io/circleci/project/github/LuXDAmore/nuxt-humans-txt.svg?style=flat
[circle-ci-href]: https://circleci.com/gh/LuXDAmore/nuxt-humans-txt

[dependencies-src]: https://img.shields.io/badge/dependencies-up%20to%20date-darkgreen.svg?style=flat
[dependencies-href]: https://npmjs.com/package/@luxdamore/nuxt-humans-txt

[license-src]: https://img.shields.io/npm/l/@luxdamore/nuxt-humans-txt.svg?style=flat
[license-href]: https://npmjs.com/package/@luxdamore/nuxt-humans-txt

[donate-src]: https://img.shields.io/badge/paypal-donate-black.svg?style=flat
[donate-href]: https://www.paypal.com/paypalme2/luxdamore

> 'We are people, not machines'. An initiative to know the creators of a website. Contains the information about humans to the web building - A Nuxt Module to statically integrate and generate a humans.txt author file - Based on the HumansTxt Project.

## 💘 Motivation

### What is humans.txt?

It's an initiative for knowing the people behind a website. It's a TXT file that contains information about the different people who have contributed to building the website.

### Why a TXT?

Because it's something fast to create. Because it's not intrusive with the code. More often than not, the owners of the site don't like the authors signing it; they claim that doing so may make the site less efficient. By adding a txt file, you can prove your authorship (not your property) in an external and accessible way.

### Who should I mention

Whoever you want to, provided they wish you to do so. You can mention the developer, the designer, the copywriter, the webmaster, the SEO, SEM or SMO...
As you can see, the number of people who may take part of the creation of a site can be big, so the list is almost endless.

> **Humans.txt Project**: You can read more about it, on the [website](http://humanstxt.org/).

___

#### 💡 Lighthouse

No changes on audits.

![Lighthouse Audit before](./src/static/lighthouse/before.jpg)
![Lighthouse Audit after](./src/static/lighthouse/after.jpg)

___

## Setup

- Add `@luxdamore/nuxt-humans-txt` dependency to your project;
- Setup `@luxdamore/nuxt-humans-txt` as a `buildModules` in your `nuxt.config.js` file;

*N.B.: for `nuxt < v2.9`, you must use `modules` instead of `buildModules`.*

```bash

    # cmd
    yarn add @luxdamore/nuxt-humans-txt # or npm install --save @luxdamore/nuxt-humans-txt

```

## Configuration

*N.B.: It's recommended to append `static/humans.txt` (depending on `your-static folder-path`) to the `.gitignore` file.*

```js

    // nuxt.config.js
    export default {
        // Default config
        humansTxt: {
            enabled: true,
            hideGenericMessagesInConsole: false, // Disabled in production
            hideErrorsInConsole: false,
            fileName: 'humans.txt',
            fileEncoding: 'utf8',
            link: {
                // Inject `<link type="text/plain" rel="<link.rel>" href="<link.href><filename>" />` inside the `head`
                // Set to `link: false` to disable this behavior
                rel: 'author',
                href: '',
                hid: 'humans-txt',
            },
            keepDevelopersInformations: true, // Keep info of my work in your `humans.txt` file 😍
            // "The internet is for humans"
            thanksTo: [],
            site: [
                'SITE',
                {
                    key: 'Last update',
                    value: new Date().toLocaleDateString(
                        'en-US',
                        {
                            month: '2-digit',
                            day: '2-digit',
                            year: 'numeric',
                        }
                    ),
                },
                {
                    key: 'Standards',
                    value: [
                        'HTML5',
                        'CSS3',
                        'Javascript',
                    ],
                },
                {
                    key: 'Components',
                    value: 'VueJs',
                },
                {
                    key: 'Software',
                    value: 'NuxtJs',
                },
                {
                    key: 'Language',
                    value: 'English',
                },
                {
                    key: 'Doctype',
                    value: 'HTML5',
                },
            ],
        },
    };

```

___

*Ex. of config:*

```js

    // nuxt.config.js
    export default {
        humansTxt: {
            thanksTo: [
                // Simple string can be added for comments rows
                'BACKSTAGE',
                // Objects { key: 'foo', value: 'bar' } for rows with different values
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
                // Falsy values for empty-lines
                false,
            ],
            // Remove extra greets 😢
            keepDevelopersInformations: false,
        },
    };

```

*Ex. of generated txt:*

```txt

    /* BACKSTAGE */
    HumansTxt Plugin developer: Luca Iaconelli
    From: Faenza, Italy
    Twitter: @luxdamore
    Instagram: https://www.instagram.com/luxdamore

    /* SITE */
    Last update: 01/13/2021
    Standards: HTML5, CSS3, Javascript
    Components: VueJs
    Software: NuxtJs
    Language: English
    Doctype: HTML5

```

___

## 👨🏻‍💻 Development

1. Clone this repository;
2. Install dependencies using `yarn install` or `npm install`;
3. Start development server using `yarn dev` or `npm run dev`.

## 🐞 Issues

Please make sure to read the [Issue Reporting Checklist](/.github/ISSUE_TEMPLATE/bug_report.md) before opening an issue. Issues not conforming to the guidelines may be closed immediately.

## 👥 Contribution

Please make sure to read the [Contributing Guide](/.github/ISSUE_TEMPLATE/feature_request.md) before making a pull request.

## 📖 Changelog

Details changes for each release are documented in the [**release notes**](./CHANGELOG.md).

### 📃 License

[MIT License](./LICENSE) // Copyright (©) 2021-present [Luca Iaconelli](https://lucaiaconelli.it)

#### 💼 Hire me

[![Contacts](https://img.shields.io/badge/Contact%20Me-Let's%20Talk-informational?style=social&logo=minutemailer)](https://lucaiaconelli.it)

#### 💸 Are you feeling generous today?

If You want to share a beer, we can be really good friends

__[Paypal](https://www.paypal.com/paypalme/luxdamore) // [Patreon](https://www.patreon.com/luxdamore) // [Ko-fi](https://ko-fi.com/luxdamore)__

> ☀ _It's always a good day to be magnanimous_ - cit.
