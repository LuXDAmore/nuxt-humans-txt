(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{217:function(e,n,t){var content=t(223);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(56).default)("b2d98574",content,!0,{sourceMap:!1})},219:function(e,n){function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var r=e[n];"object"!=typeof r||Object.isFrozen(r)||t(r)})),e}var r=t,o=t;r.default=o;class l{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data}ignoreMatch(){this.ignore=!0}}function c(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function d(e,...n){const t=Object.create(null);for(const n in e)t[n]=e[n];return n.forEach((function(e){for(const n in e)t[n]=e[n]})),t}const h=e=>!!e.kind;class f{constructor(e,n){this.buffer="",this.classPrefix=n.classPrefix,e.walk(this)}addText(text){this.buffer+=c(text)}openNode(e){if(!h(e))return;let n=e.kind;e.sublanguage||(n=`${this.classPrefix}${n}`),this.span(n)}closeNode(e){h(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class m{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const n={kind:e,children:[]};this.add(n),this.stack.push(n)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,n){return"string"==typeof n?e.addText(n):n.children&&(e.openNode(n),n.children.forEach(n=>this._walk(e,n)),e.closeNode(n)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every(e=>"string"==typeof e)?e.children=[e.children.join("")]:e.children.forEach(e=>{m._collapse(e)}))}}class E extends m{constructor(e){super(),this.options=e}addKeyword(text,e){""!==text&&(this.openNode(e),this.addText(text),this.closeNode())}addText(text){""!==text&&this.add(text)}addSublanguage(e,n){const t=e.root;t.kind=n,t.sublanguage=!0,this.add(t)}toHTML(){return new f(this,this.options).value()}finalize(){return!0}}function source(e){return e?"string"==typeof e?e:e.source:null}const w="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",x={begin:"\\\\[\\s\\S]",relevance:0},_={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[x]},y={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[x]},N={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},v=function(e,n,t={}){const r=d({className:"comment",begin:e,end:n,contains:[]},t);return r.contains.push(N),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},R=v("//","$"),A=v("/\\*","\\*/"),k=v("#","$"),O={className:"number",begin:"\\b\\d+(\\.\\d+)?",relevance:0},M={className:"number",begin:w,relevance:0},j={className:"number",begin:"\\b(0b[01]+)",relevance:0},S={className:"number",begin:"\\b\\d+(\\.\\d+)?(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},T={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[x,{begin:/\[/,end:/\]/,relevance:0,contains:[x]}]}]},I={className:"title",begin:"[a-zA-Z]\\w*",relevance:0},B={className:"title",begin:"[a-zA-Z_]\\w*",relevance:0},L={begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0};var D=Object.freeze({__proto__:null,IDENT_RE:"[a-zA-Z]\\w*",UNDERSCORE_IDENT_RE:"[a-zA-Z_]\\w*",NUMBER_RE:"\\b\\d+(\\.\\d+)?",C_NUMBER_RE:w,BINARY_NUMBER_RE:"\\b(0b[01]+)",RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map(e=>source(e)).join("")}(n,/.*\b/,e.binary,/\b.*/)),d({className:"meta",begin:n,end:/$/,relevance:0,"on:begin":(e,n)=>{0!==e.index&&n.ignoreMatch()}},e)},BACKSLASH_ESCAPE:x,APOS_STRING_MODE:_,QUOTE_STRING_MODE:y,PHRASAL_WORDS_MODE:N,COMMENT:v,C_LINE_COMMENT_MODE:R,C_BLOCK_COMMENT_MODE:A,HASH_COMMENT_MODE:k,NUMBER_MODE:O,C_NUMBER_MODE:M,BINARY_NUMBER_MODE:j,CSS_NUMBER_MODE:S,REGEXP_MODE:T,TITLE_MODE:I,UNDERSCORE_TITLE_MODE:B,METHOD_GUARD:L,END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,n)=>{n.data._beginMatch=e[1]},"on:end":(e,n)=>{n.data._beginMatch!==e[1]&&n.ignoreMatch()}})}});function C(e,n){"."===e.input[e.index-1]&&n.ignoreMatch()}function P(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=C,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords)}function $(e,n){Array.isArray(e.illegal)&&(e.illegal=function(...e){return"("+e.map(e=>source(e)).join("|")+")"}(...e.illegal))}function z(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function H(e,n){void 0===e.relevance&&(e.relevance=1)}const U=["of","and","for","in","not","or","if","then","parent","list","value"];function K(e,n){return n?Number(n):function(e){return U.includes(e.toLowerCase())}(e)?0:1}function G(e,{plugins:n}){function t(n,t){return new RegExp(source(n),"m"+(e.case_insensitive?"i":"")+(t?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,n){n.position=this.position++,this.matchIndexes[this.matchAt]=n,this.regexes.push([n,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map(e=>e[1]);this.matcherRe=t(function(e,n="|"){const t=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;let r=0,o="";for(let i=0;i<e.length;i++){r+=1;const l=r;let c=source(e[i]);for(i>0&&(o+=n),o+="(";c.length>0;){const e=t.exec(c);if(null==e){o+=c;break}o+=c.substring(0,e.index),c=c.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?o+="\\"+String(Number(e[1])+l):(o+=e[0],"("===e[0]&&r++)}o+=")"}return o}(e),!0),this.lastIndex=0}exec(s){this.matcherRe.lastIndex=this.lastIndex;const e=this.matcherRe.exec(s);if(!e)return null;const i=e.findIndex((e,i)=>i>0&&void 0!==e),n=this.matchIndexes[i];return e.splice(0,i),Object.assign(e,n)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const n=new r;return this.rules.slice(e).forEach(([e,t])=>n.addRule(e,t)),n.compile(),this.multiRegexes[e]=n,n}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,n){this.rules.push([e,n]),"begin"===n.type&&this.count++}exec(s){const e=this.getMatcher(this.regexIndex);e.lastIndex=this.lastIndex;let n=e.exec(s);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const e=this.getMatcher(0);e.lastIndex=this.lastIndex+1,n=e.exec(s)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=d(e.classNameAliases||{}),function n(r,l){const c=r;if(r.compiled)return c;[z].forEach(e=>e(r,l)),e.compilerExtensions.forEach(e=>e(r,l)),r.__beforeBegin=null,[P,$,H].forEach(e=>e(r,l)),r.compiled=!0;let h=null;if("object"==typeof r.keywords&&(h=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=function(e,n){const t={};return"string"==typeof e?r("keyword",e):Object.keys(e).forEach((function(n){r(n,e[n])})),t;function r(e,r){n&&(r=r.toLowerCase()),r.split(" ").forEach((function(n){const r=n.split("|");t[r[0]]=[e,K(r[0],r[1])]}))}}(r.keywords,e.case_insensitive)),r.lexemes&&h)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return h=h||r.lexemes||/\w+/,c.keywordPatternRe=t(h,!0),l&&(r.begin||(r.begin=/\B|\b/),c.beginRe=t(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(c.endRe=t(r.end)),c.terminatorEnd=source(r.end)||"",r.endsWithParent&&l.terminatorEnd&&(c.terminatorEnd+=(r.end?"|":"")+l.terminatorEnd)),r.illegal&&(c.illegalRe=t(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(n){return d(e,{variants:null},n)})));if(e.cachedVariants)return e.cachedVariants;if(function e(n){return!!n&&(n.endsWithParent||e(n.starts))}(e))return d(e,{starts:e.starts?d(e.starts):null});if(Object.isFrozen(e))return d(e);return e}("self"===e?r:e)}))),r.contains.forEach((function(e){n(e,c)})),r.starts&&n(r.starts,l),c.matcher=function(e){const n=new o;return e.contains.forEach(e=>n.addRule(e.begin,{rule:e,type:"begin"})),e.terminatorEnd&&n.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&n.addRule(e.illegal,{type:"illegal"}),n}(c),c}(e)}function Z(e){const n={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,c(this.code);let n={};return this.autoDetect?(n=e.highlightAuto(this.code),this.detectedLanguage=n.language):(n=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),n.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:n,VuePlugin:{install(e){e.component("highlightjs",n)}}}}const F={"after:highlightBlock":({block:e,result:n,text:text})=>{const t=V(e);if(!t.length)return;const r=document.createElement("div");r.innerHTML=n.value,n.value=function(e,n,t){let r=0,o="";const l=[];function d(){return e.length&&n.length?e[0].offset!==n[0].offset?e[0].offset<n[0].offset?e:n:"start"===n[0].event?e:n:e.length?e:n}function h(e){o+="<"+X(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+c(e.value)+'"'})).join("")+">"}function f(e){o+="</"+X(e)+">"}function m(e){("start"===e.event?h:f)(e.node)}for(;e.length||n.length;){let n=d();if(o+=c(t.substring(r,n[0].offset)),r=n[0].offset,n===e){l.reverse().forEach(f);do{m(n.splice(0,1)[0]),n=d()}while(n===e&&n.length&&n[0].offset===r);l.reverse().forEach(h)}else"start"===n[0].event?l.push(n[0].node):l.pop(),m(n.splice(0,1)[0])}return o+c(t.substr(r))}(t,V(r),text)}};function X(e){return e.nodeName.toLowerCase()}function V(e){const n=[];return function e(t,r){for(let o=t.firstChild;o;o=o.nextSibling)3===o.nodeType?r+=o.nodeValue.length:1===o.nodeType&&(n.push({event:"start",offset:r,node:o}),r=e(o,r),X(o).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:o}));return r}(e,0),n}const W=e=>{console.error(e)},J=(e,...n)=>{console.log("WARN: "+e,...n)},Q=(e,n)=>{console.log(`Deprecated as of ${e}. ${n}`)},Y=c,ee=d,ne=Symbol("nomatch");var te=function(e){const n=Object.create(null),t=Object.create(null),o=[];let c=!0;const d=/(^(<[^>]+>|\t|)+|\n)/gm,h="Could not find the language '{}', did you forget to load/include a language module?",f={disableAutodetect:!0,name:"Plain text",contains:[]};let m={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:E};function w(e){return m.noHighlightRe.test(e)}function x(e,code,n,t){const r={code:code,language:e};S("before:highlight",r);const o=r.result?r.result:_(r.language,r.code,n,t);return o.code=r.code,S("after:highlight",o),o}function _(e,code,t,r){const d=code;function f(e,n){const t=k.case_insensitive?n[0].toLowerCase():n[0];return Object.prototype.hasOwnProperty.call(e.keywords,t)&&e.keywords[t]}function E(){null!=S.subLanguage?function(){if(""===B)return;let e=null;if("string"==typeof S.subLanguage){if(!n[S.subLanguage])return void I.addText(B);e=_(S.subLanguage,B,!0,T[S.subLanguage]),T[S.subLanguage]=e.top}else e=y(B,S.subLanguage.length?S.subLanguage:null);S.relevance>0&&(L+=e.relevance),I.addSublanguage(e.emitter,e.language)}():function(){if(!S.keywords)return void I.addText(B);let e=0;S.keywordPatternRe.lastIndex=0;let n=S.keywordPatternRe.exec(B),t="";for(;n;){t+=B.substring(e,n.index);const data=f(S,n);if(data){const[e,r]=data;I.addText(t),t="",L+=r;const o=k.classNameAliases[e]||e;I.addKeyword(n[0],o)}else t+=n[0];e=S.keywordPatternRe.lastIndex,n=S.keywordPatternRe.exec(B)}t+=B.substr(e),I.addText(t)}(),B=""}function w(e){return e.className&&I.openNode(k.classNameAliases[e.className]||e.className),S=Object.create(e,{parent:{value:S}}),S}function x(e){return 0===S.matcher.regexIndex?(B+=e[0],1):(P=!0,0)}function N(e){const n=e[0],t=e.rule,r=new l(t),o=[t.__beforeBegin,t["on:begin"]];for(const t of o)if(t&&(t(e,r),r.ignore))return x(n);return t&&t.endSameAsBegin&&(t.endRe=new RegExp(n.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),t.skip?B+=n:(t.excludeBegin&&(B+=n),E(),t.returnBegin||t.excludeBegin||(B=n)),w(t),t.returnBegin?0:n.length}function v(e){const n=e[0],t=d.substr(e.index),r=function e(n,t,r){let o=function(e,n){const t=e&&e.exec(n);return t&&0===t.index}(n.endRe,r);if(o){if(n["on:end"]){const e=new l(n);n["on:end"](t,e),e.ignore&&(o=!1)}if(o){for(;n.endsParent&&n.parent;)n=n.parent;return n}}if(n.endsWithParent)return e(n.parent,t,r)}(S,e,t);if(!r)return ne;const o=S;o.skip?B+=n:(o.returnEnd||o.excludeEnd||(B+=n),E(),o.excludeEnd&&(B=n));do{S.className&&I.closeNode(),S.skip||S.subLanguage||(L+=S.relevance),S=S.parent}while(S!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.endRe=r.endRe),w(r.starts)),o.returnEnd?0:n.length}let R={};function A(n,r){const o=r&&r[0];if(B+=n,null==o)return E(),0;if("begin"===R.type&&"end"===r.type&&R.index===r.index&&""===o){if(B+=d.slice(r.index,r.index+1),!c){const n=new Error("0 width match regex");throw n.languageName=e,n.badRule=R.rule,n}return 1}if(R=r,"begin"===r.type)return N(r);if("illegal"===r.type&&!t){const e=new Error('Illegal lexeme "'+o+'" for mode "'+(S.className||"<unnamed>")+'"');throw e.mode=S,e}if("end"===r.type){const e=v(r);if(e!==ne)return e}if("illegal"===r.type&&""===o)return 1;if(C>1e5&&C>3*r.index){throw new Error("potential infinite loop, way more iterations than matches")}return B+=o,o.length}const k=O(e);if(!k)throw W(h.replace("{}",e)),new Error('Unknown language: "'+e+'"');const M=G(k,{plugins:o});let j="",S=r||M;const T={},I=new m.__emitter(m);!function(){const e=[];for(let n=S;n!==k;n=n.parent)n.className&&e.unshift(n.className);e.forEach(e=>I.openNode(e))}();let B="",L=0,D=0,C=0,P=!1;try{for(S.matcher.considerAll();;){C++,P?P=!1:S.matcher.considerAll(),S.matcher.lastIndex=D;const e=S.matcher.exec(d);if(!e)break;const n=A(d.substring(D,e.index),e);D=e.index+n}return A(d.substr(D)),I.closeAllNodes(),I.finalize(),j=I.toHTML(),{relevance:L,value:j,language:e,illegal:!1,emitter:I,top:S}}catch(n){if(n.message&&n.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:n.message,context:d.slice(D-100,D+100),mode:n.mode},sofar:j,relevance:0,value:Y(d),emitter:I};if(c)return{illegal:!1,relevance:0,value:Y(d),emitter:I,language:e,top:S,errorRaised:n};throw n}}function y(code,e){e=e||m.languages||Object.keys(n);const t=function(code){const e={relevance:0,emitter:new m.__emitter(m),value:Y(code),illegal:!1,top:f};return e.emitter.addText(code),e}(code),r=e.filter(O).filter(j).map(e=>_(e,code,!1));r.unshift(t);const o=r.sort((a,b)=>{if(a.relevance!==b.relevance)return b.relevance-a.relevance;if(a.language&&b.language){if(O(a.language).supersetOf===b.language)return 1;if(O(b.language).supersetOf===a.language)return-1}return 0}),[l,c]=o,d=l;return d.second_best=c,d}const N={"before:highlightBlock":({block:e})=>{m.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightBlock":({result:e})=>{m.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},v=/^(<[^>]+>|\t)+/gm,R={"after:highlightBlock":({result:e})=>{m.tabReplace&&(e.value=e.value.replace(v,e=>e.replace(/\t/g,m.tabReplace)))}};function A(element){let e=null;const n=function(e){let n=e.className+" ";n+=e.parentNode?e.parentNode.className:"";const t=m.languageDetectRe.exec(n);if(t){const n=O(t[1]);return n||(J(h.replace("{}",t[1])),J("Falling back to no-highlight mode for this block.",e)),n?t[1]:"no-highlight"}return n.split(/\s+/).find(e=>w(e)||O(e))}(element);if(w(n))return;S("before:highlightBlock",{block:element,language:n}),e=element;const text=e.textContent,r=n?x(n,text,!0):y(text);S("after:highlightBlock",{block:element,result:r,text:text}),element.innerHTML=r.value,function(element,e,n){const r=e?t[e]:n;element.classList.add("hljs"),r&&element.classList.add(r)}(element,n,r.language),element.result={language:r.language,re:r.relevance,relavance:r.relevance},r.second_best&&(element.second_best={language:r.second_best.language,re:r.second_best.relevance,relavance:r.second_best.relevance})}const k=()=>{if(k.called)return;k.called=!0;document.querySelectorAll("pre code").forEach(A)};function O(e){return e=(e||"").toLowerCase(),n[e]||n[t[e]]}function M(e,{languageName:n}){"string"==typeof e&&(e=[e]),e.forEach(e=>{t[e]=n})}function j(e){const n=O(e);return n&&!n.disableAutodetect}function S(e,n){const t=e;o.forEach((function(e){e[t]&&e[t](n)}))}Object.assign(e,{highlight:x,highlightAuto:y,fixMarkup:function(e){return Q("10.2.0","fixMarkup will be removed entirely in v11.0"),Q("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),html=e,m.tabReplace||m.useBR?html.replace(d,e=>"\n"===e?m.useBR?"<br>":e:m.tabReplace?e.replace(/\t/g,m.tabReplace):e):html;var html},highlightBlock:A,configure:function(e){e.useBR&&(Q("10.3.0","'useBR' will be removed entirely in v11.0"),Q("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),m=ee(m,e)},initHighlighting:k,initHighlightingOnLoad:function(){window.addEventListener("DOMContentLoaded",k,!1)},registerLanguage:function(t,r){let o=null;try{o=r(e)}catch(e){if(W("Language definition for '{}' could not be registered.".replace("{}",t)),!c)throw e;W(e),o=f}o.name||(o.name=t),n[t]=o,o.rawDefinition=r.bind(null,e),o.aliases&&M(o.aliases,{languageName:t})},listLanguages:function(){return Object.keys(n)},getLanguage:O,registerAliases:M,requireLanguage:function(e){Q("10.4.0","requireLanguage will be removed entirely in v11."),Q("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const n=O(e);if(n)return n;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:j,inherit:ee,addPlugin:function(e){o.push(e)},vuePlugin:Z(e).VuePlugin}),e.debugMode=function(){c=!1},e.safeMode=function(){c=!0},e.versionString="10.5.0";for(const e in D)"object"==typeof D[e]&&r(D[e]);return Object.assign(e,D),e.addPlugin(N),e.addPlugin(F),e.addPlugin(R),e}({});e.exports=te},220:function(e,n){function t(...e){return e.map(e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n}).join("")}e.exports=function(e){const n={},r={begin:/\$\{/,end:/\}/,contains:["self",{begin:/:-/,contains:[n]}]};Object.assign(n,{className:"variable",variants:[{begin:t(/\$[\w\d#@][\w\d_]*/,"(?![\\w\\d])(?![$])")},r]});const o={className:"subst",begin:/\$\(/,end:/\)/,contains:[e.BACKSLASH_ESCAPE]},l={begin:/<<-?\s*(?=\w+)/,starts:{contains:[e.END_SAME_AS_BEGIN({begin:/(\w+)/,end:/(\w+)/,className:"string"})]}},c={className:"string",begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,n,o]};o.contains.push(c);const d={begin:/\$\(\(/,end:/\)\)/,contains:[{begin:/\d+#[0-9a-f]+/,className:"number"},e.NUMBER_MODE,n]},h=e.SHEBANG({binary:`(${["fish","bash","zsh","sh","csh","ksh","tcsh","dash","scsh"].join("|")})`,relevance:10}),f={className:"function",begin:/\w[\w\d_]*\s*\(\s*\)\s*\{/,returnBegin:!0,contains:[e.inherit(e.TITLE_MODE,{begin:/\w[\w\d_]*/})],relevance:0};return{name:"Bash",aliases:["sh","zsh"],keywords:{$pattern:/\b[a-z._-]+\b/,keyword:"if then else elif fi for while in do done case esac function",literal:"true false",built_in:"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp"},contains:[h,e.SHEBANG(),f,d,e.HASH_COMMENT_MODE,l,c,{className:"",begin:/\\"/},{className:"string",begin:/'/,end:/'/},n]}}},221:function(e,n){const t=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],r=["true","false","null","undefined","NaN","Infinity"],o=[].concat(["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],["arguments","this","super","console","window","document","localStorage","module","global"],["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer"],["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"]);function l(e){return c("(?=",e,")")}function c(...e){return e.map(e=>{return(n=e)?"string"==typeof n?n:n.source:null;var n}).join("")}e.exports=function(e){const n="[A-Za-z$_][0-9A-Za-z$_]*",d="<>",h="</>",f={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(e,n)=>{const t=e[0].length+e.index,r=e.input[t];"<"!==r?">"===r&&(((e,{after:n})=>{const t="</"+e[0].slice(1);return-1!==e.input.indexOf(t,n)})(e,{after:t})||n.ignoreMatch()):n.ignoreMatch()}},m={$pattern:"[A-Za-z$_][0-9A-Za-z$_]*",keyword:t.join(" "),literal:r.join(" "),built_in:o.join(" ")},E="\\.([0-9](_?[0-9])*)",w={className:"number",variants:[{begin:`(\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)((${E})|\\.)?|(${E}))[eE][+-]?([0-9](_?[0-9])*)\\b`},{begin:`\\b(0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*)\\b((${E})\\b|\\.)?|(${E})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},x={className:"subst",begin:"\\$\\{",end:"\\}",keywords:m,contains:[]},_={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,x],subLanguage:"xml"}},y={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,x],subLanguage:"css"}},N={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,x]},v={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+",contains:[{className:"type",begin:"\\{",end:"\\}",relevance:0},{className:"variable",begin:n+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},R=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,_,y,N,w,e.REGEXP_MODE];x.contains=R.concat({begin:/\{/,end:/\}/,keywords:m,contains:["self"].concat(R)});const A=[].concat(v,x.contains),k=A.concat([{begin:/\(/,end:/\)/,keywords:m,contains:["self"].concat(A)}]),O={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:m,contains:k};return{name:"Javascript",aliases:["js","jsx","mjs","cjs"],keywords:m,exports:{PARAMS_CONTAINS:k},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),{label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,_,y,N,v,w,{begin:c(/[{,\n]\s*/,l(c(/(((\/\/.*$)|(\/\*(\*[^/]|[^*])*\*\/))\s*)*/,n+"\\s*:"))),relevance:0,contains:[{className:"attr",begin:n+l("\\s*:"),relevance:0}]},{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[v,e.REGEXP_MODE,{className:"function",begin:"(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:m,contains:k}]}]},{begin:/,/,relevance:0},{className:"",begin:/\s/,end:/\s*/,skip:!0},{variants:[{begin:d,end:h},{begin:f.begin,"on:begin":f.isTrulyOpeningTag,end:f.end}],subLanguage:"xml",contains:[{begin:f.begin,end:f.end,skip:!0,contains:["self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/[{;]/,excludeEnd:!0,keywords:m,contains:["self",e.inherit(e.TITLE_MODE,{begin:n}),O],illegal:/%/},{beginKeywords:"while if switch catch for"},{className:"function",begin:e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,contains:[O,e.inherit(e.TITLE_MODE,{begin:n})]},{variants:[{begin:"\\."+n},{begin:"\\$"+n}],relevance:0},{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"[\]]/,contains:[{beginKeywords:"extends"},e.UNDERSCORE_TITLE_MODE]},{begin:/\b(?=constructor)/,end:/[{;]/,excludeEnd:!0,contains:[e.inherit(e.TITLE_MODE,{begin:n}),"self",O]},{begin:"(get|set)\\s+(?="+n+"\\()",end:/\{/,keywords:"get set",contains:[e.inherit(e.TITLE_MODE,{begin:n}),{begin:/\(\)/},O]},{begin:/\$[(.]/}]}}},222:function(e,n,t){"use strict";t(217)},223:function(e,n,t){(n=t(55)(!1)).push([e.i,".hljs{display:block;overflow-x:auto;padding:.5em;color:#333;background:#f8f8f8}.hljs-comment,.hljs-quote{color:#998;font-style:italic}.hljs-keyword,.hljs-selector-tag,.hljs-subst{color:#333;font-weight:700}.hljs-literal,.hljs-number,.hljs-tag .hljs-attr,.hljs-template-variable,.hljs-variable{color:teal}.hljs-doctag,.hljs-string{color:#d14}.hljs-section,.hljs-selector-id,.hljs-title{color:#900;font-weight:700}.hljs-subst{font-weight:400}.hljs-class .hljs-title,.hljs-type{color:#458;font-weight:700}.hljs-attribute,.hljs-name,.hljs-tag{color:navy;font-weight:400}.hljs-link,.hljs-regexp{color:#009926}.hljs-bullet,.hljs-symbol{color:#990073}.hljs-built_in,.hljs-builtin-name{color:#0086b3}.hljs-meta{color:#999;font-weight:700}.hljs-deletion{background:#fdd}.hljs-addition{background:#dfd}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}",""]),e.exports=n}}]);