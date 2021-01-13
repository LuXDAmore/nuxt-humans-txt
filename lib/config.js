export default {
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
};
