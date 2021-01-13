(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{189:function(n,e,t){var content=t(196);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(39).default)("2b8397ba",content,!0,{sourceMap:!1})},195:function(n,e,t){"use strict";t(189)},196:function(n,e,t){(e=t(38)(!1)).push([n.i,".readme[data-v-df24f1ea] >section>p:nth-child(2){font-size:0}.readme[data-v-df24f1ea]  a{display:inline-block;margin:2px 1px}",""]),n.exports=e},197:function(n,e,t){"use strict";t.r(e);t(13),t(50),t(19);var l=t(4),o=t(190),r=t.n(o),h=t(191),c=t.n(h),d=t(192),m=t.n(d),f='<section><h1>🔌 Nuxt Humans Txt</h1>\n<p><a href="https://luxdamore.github.io/generative-art/"><img src="https://img.shields.io/badge/code%20quality-A-informational?style=flat" alt="Code Quality"></a>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-humans-txt"><img src="https://img.shields.io/badge/dependencies-up%20to%20date-darkgreen.svg?style=flat" alt="Dependencies"></a>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-humans-txt"><img src="https://img.shields.io/npm/v/@luxdamore/nuxt-humans-txt/latest.svg?style=flat" alt="npm version"></a>\n<a href="https://npmjs.com/package/@luxdamore/nuxt-humans-txt"><img src="https://img.shields.io/npm/dt/@luxdamore/nuxt-humans-txt.svg?style=flat" alt="npm downloads"></a>\n<a href="https://circleci.com/gh/LuXDAmore/nuxt-humans-txt"><img src="https://img.shields.io/circleci/project/github/LuXDAmore/nuxt-humans-txt.svg?style=flat" alt="Circle CI"></a>\n<a href="https://www.paypal.com/paypalme2/luxdamore"><img src="https://img.shields.io/badge/paypal-donate-black.svg?style=flat" alt="Donate"></a></p>\n<blockquote>\n<p>\'We are people, not machines\'. An initiative to know the creators of a website. Contains the information about humans to the web building - A Nuxt Module to statically integrate and generate a humans.txt author file - Based on the HumansTxt Project.</p>\n</blockquote>\n<h2>💘 Motivation</h2>\n<h3>What is humans.txt?</h3>\n<p>It\'s an initiative for knowing the people behind a website. It\'s a TXT file that contains information about the different people who have contributed to building the website.</p>\n<h3>Why a TXT?</h3>\n<p>Because it\'s something fast to create. Because it\'s not intrusive with the code. More often than not, the owners of the site don\'t like the authors signing it; they claim that doing so may make the site less efficient. By adding a txt file, you can prove your authorship (not your property) in an external and accessible way.</p>\n<h3>Who should I mention</h3>\n<p>Whoever you want to, provided they wish you to do so. You can mention the developer, the designer, the copywriter, the webmaster, the SEO, SEM or SMO...\nAs you can see, the number of people who may take part of the creation of a site can be big, so the list is almost endless.</p>\n<p><strong>Humans.txt</strong>\nYou can read more about it, on the <a href="http://humanstxt.org/">HumansTxt project page</a>.</p>\n<hr>\n<h4>💡 Lighthouse</h4>\n<p>No changes on audits.</p>\n<p><img src="./src/static/lighthouse/before.jpg" alt="Lighthouse Audit before">\n<img src="./src/static/lighthouse/after.jpg" alt="Lighthouse Audit after"></p>\n<hr>\n<h2>Setup</h2>\n<ul>\n<li>Add <code>@luxdamore/nuxt-humans-txt</code> dependency to your project;</li>\n<li>Setup <code>@luxdamore/nuxt-humans-txt</code> as a <code>buildModules</code> in your <code>nuxt.config.js</code> file;</li>\n</ul>\n<p><em>N.B.: for <code>nuxt &lt; v2.9</code>, you must use <code>modules</code> instead of <code>buildModules</code>.</em></p>\n<pre><code class="language-bash">\n    <span class="hljs-comment"># cmd</span>\n    yarn add @luxdamore/nuxt-humans-txt <span class="hljs-comment"># or npm install --save @luxdamore/nuxt-humans-txt</span>\n\n</code></pre>\n<h2>Configuration</h2>\n<p><em>N.B.: It\'s recommended to append <code>static/humans.txt</code> (depending on <code>your-static folder-path</code>) to the <code>.gitignore</code> file.</em></p>\n<pre><code class="language-js">\n    <span class="hljs-comment">// nuxt.config.js</span>\n    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n        <span class="hljs-comment">// Default config</span>\n        <span class="hljs-attr">humansTxt</span>: {\n            <span class="hljs-attr">enabled</span>: <span class="hljs-literal">true</span>,\n            <span class="hljs-attr">hideGenericMessagesInConsole</span>: <span class="hljs-literal">false</span>, <span class="hljs-comment">// Disabled in production</span>\n            <span class="hljs-attr">hideErrorsInConsole</span>: <span class="hljs-literal">false</span>,\n            <span class="hljs-attr">fileName</span>: <span class="hljs-string">\'humans.txt\'</span>,\n            <span class="hljs-attr">fileEncoding</span>: <span class="hljs-string">\'utf8\'</span>,\n            <span class="hljs-attr">link</span>: {\n                <span class="hljs-comment">// Inject `&lt;link type="text/plain" rel="&lt;link.rel&gt;" href="&lt;link.href&gt;&lt;filename&gt;" /&gt;` inside the `head`</span>\n                <span class="hljs-comment">// Set to `link: false` to disable this behavior</span>\n                <span class="hljs-attr">rel</span>: <span class="hljs-string">\'author\'</span>,\n                <span class="hljs-attr">href</span>: <span class="hljs-string">\'\'</span>,\n                <span class="hljs-attr">hid</span>: <span class="hljs-string">\'humans-txt\'</span>,\n            },\n            <span class="hljs-attr">keepDevelopersInformations</span>: <span class="hljs-literal">true</span>, <span class="hljs-comment">// Keep info of my work in your `humans.txt` file 😍</span>\n            <span class="hljs-comment">// "The internet is for humans"</span>\n            <span class="hljs-attr">thanksTo</span>: [],\n            <span class="hljs-attr">site</span>: [\n                <span class="hljs-string">\'SITE\'</span>,\n                {\n                    <span class="hljs-attr">key</span>: <span class="hljs-string">\'Last update\'</span>,\n                    <span class="hljs-attr">value</span>: <span class="hljs-keyword">new</span> <span class="hljs-built_in">Date</span>().toLocaleDateString(\n                        <span class="hljs-string">\'en-US\'</span>,\n                        {\n                            <span class="hljs-attr">month</span>: <span class="hljs-string">\'2-digit\'</span>,\n                            <span class="hljs-attr">day</span>: <span class="hljs-string">\'2-digit\'</span>,\n                            <span class="hljs-attr">year</span>: <span class="hljs-string">\'numeric\'</span>,\n                        }\n                    ),\n                },\n                {\n                    <span class="hljs-attr">key</span>: <span class="hljs-string">\'Standards\'</span>,\n                    <span class="hljs-attr">value</span>: [\n                        <span class="hljs-string">\'HTML5\'</span>,\n                        <span class="hljs-string">\'CSS3\'</span>,\n                        <span class="hljs-string">\'Javascript\'</span>,\n                    ],\n                },\n                {\n                    <span class="hljs-attr">key</span>: <span class="hljs-string">\'Components\'</span>,\n                    <span class="hljs-attr">value</span>: <span class="hljs-string">\'VueJs\'</span>,\n                },\n                {\n                    <span class="hljs-attr">key</span>: <span class="hljs-string">\'Software\'</span>,\n                    <span class="hljs-attr">value</span>: <span class="hljs-string">\'NuxtJs\'</span>,\n                },\n                {\n                    <span class="hljs-attr">key</span>: <span class="hljs-string">\'Language\'</span>,\n                    <span class="hljs-attr">value</span>: <span class="hljs-string">\'English\'</span>,\n                },\n                {\n                    <span class="hljs-attr">key</span>: <span class="hljs-string">\'Doctype\'</span>,\n                    <span class="hljs-attr">value</span>: <span class="hljs-string">\'HTML5\'</span>,\n                },\n            ],\n        },\n    };\n\n</code></pre>\n<hr>\n<p><em>Ex. of config:</em></p>\n<pre><code class="language-js">\n    <span class="hljs-comment">// nuxt.config.js</span>\n    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n        <span class="hljs-attr">humansTxt</span>: {\n            <span class="hljs-attr">thanksTo</span>: [\n                <span class="hljs-comment">// Simple string can be added for comments rows</span>\n                <span class="hljs-string">\'BACKSTAGE\'</span>,\n                <span class="hljs-comment">// Objects { key: \'foo\', value: \'bar\' } for rows with different values</span>\n                {\n                    <span class="hljs-attr">key</span>: <span class="hljs-string">\'HumansTxt Plugin developer\'</span>,\n                    <span class="hljs-attr">value</span>: <span class="hljs-string">\'Luca Iaconelli\'</span>,\n                },\n                {\n                    <span class="hljs-attr">key</span>: <span class="hljs-string">\'From\'</span>,\n                    <span class="hljs-attr">value</span>: <span class="hljs-string">\'Faenza, Italy\'</span>,\n                },\n                {\n                    <span class="hljs-attr">key</span>: <span class="hljs-string">\'Twitter\'</span>,\n                    <span class="hljs-attr">value</span>: <span class="hljs-string">\'@luxdamore\'</span>,\n                },\n                {\n                    <span class="hljs-attr">key</span>: <span class="hljs-string">\'Instagram\'</span>,\n                    <span class="hljs-attr">value</span>: <span class="hljs-string">\'https://www.instagram.com/luxdamore\'</span>,\n                },\n                <span class="hljs-comment">// Falsy values for empty-lines</span>\n                <span class="hljs-literal">false</span>,\n            ],\n            <span class="hljs-comment">// Remove extra greets 😢</span>\n            <span class="hljs-attr">keepDevelopersInformations</span>: <span class="hljs-literal">false</span>,\n        },\n    };\n\n</code></pre>\n<p><em>Ex. of generated txt:</em></p>\n<pre><code class="language-txt">\n    /* BACKSTAGE */\n    HumansTxt Plugin developer: Luca Iaconelli\n    From: Faenza, Italy\n    Twitter: @luxdamore\n    Instagram: https://www.instagram.com/luxdamore\n\n    /* SITE */\n    Last update: 01/13/2021\n    Standards: HTML5, CSS3, Javascript\n    Components: VueJs\n    Software: NuxtJs\n    Language: English\n    Doctype: HTML5\n\n</code></pre>\n<hr>\n<h2>👨🏻‍💻 Development</h2>\n<ol>\n<li>Clone this repository;</li>\n<li>Install dependencies using <code>yarn install</code> or <code>npm install</code>;</li>\n<li>Start development server using <code>yarn dev</code> or <code>npm run dev</code>.</li>\n</ol>\n<h2>🐞 Issues</h2>\n<p>Please make sure to read the <a href="/.github/ISSUE_TEMPLATE/bug_report.md">Issue Reporting Checklist</a> before opening an issue. Issues not conforming to the guidelines may be closed immediately.</p>\n<h2>👥 Contribution</h2>\n<p>Please make sure to read the <a href="/.github/ISSUE_TEMPLATE/feature_request.md">Contributing Guide</a> before making a pull request.</p>\n<h2>📖 Changelog</h2>\n<p>Details changes for each release are documented in the <a href="./CHANGELOG.md"><strong>release notes</strong></a>.</p>\n<h3>📃 License</h3>\n<p><a href="./LICENSE">MIT License</a> // Copyright (©) 2021-present <a href="https://lucaiaconelli.it">Luca Iaconelli</a></p>\n<h4>💼 Hire me</h4>\n<p><a href="https://lucaiaconelli.it"><img src="https://img.shields.io/badge/Contact%20Me-Let\'s%20Talk-informational?style=social&amp;logo=minutemailer" alt="Contacts"></a></p>\n<h4>💸 Are you feeling generous today?</h4>\n<p>If You want to share a beer, we can be really good friends</p>\n<p><strong><a href="https://www.paypal.com/paypalme/luxdamore">Paypal</a> // <a href="https://www.patreon.com/luxdamore">Patreon</a> // <a href="https://ko-fi.com/luxdamore">Ko-fi</a></strong></p>\n<blockquote>\n<p>☀ <em>It\'s always a good day to be magnanimous</em> - cit.</p>\n</blockquote>\n</section>\n'.split("./src/static/").join("");r.a.registerLanguage("bash",c.a),r.a.registerLanguage("javascript",m.a);var j={name:"homepage",computed:{readme:()=>f},mounted(){var n=this;return Object(l.a)((function*(){yield n.$nextTick(),n.initHighlight(),n.initReadmeLinks()}))()},methods:{initHighlight(){var n=document.querySelectorAll(".readme pre code");for(var e of n)r.a.highlightBlock(e)},initReadmeLinks(){var n=document.querySelectorAll(".readme a");for(var link of n)link.setAttribute("target","_blank"),link.setAttribute("rel","noopener"),link.setAttribute("title",link.textContent)}}},y=(t(193),t(195),t(27)),component=Object(y.a)(j,(function(){var n=this.$createElement,e=this._self._c||n;return this.readme?e("article",{staticClass:"readme markdown-body",domProps:{innerHTML:this._s(this.readme)}}):this._e()}),[],!1,null,"df24f1ea",null);e.default=component.exports}}]);