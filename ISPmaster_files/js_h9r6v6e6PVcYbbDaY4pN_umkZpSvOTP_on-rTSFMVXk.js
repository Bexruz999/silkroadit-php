/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},S=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||S).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.3",E=function(e,t){return new E.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}E.fn=E.prototype={jquery:f,constructor:E,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=E.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return E.each(this,e)},map:function(n){return this.pushStack(E.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(E.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(E.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},E.extend=E.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(E.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||E.isPlainObject(n)?n:{},i=!1,a[t]=E.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},E.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?E.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(E.fn[Symbol.iterator]=t[Symbol.iterator]),E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,S,y,s,c,v,E="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,S)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=E)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{if(d.cssSupportsSelector&&!CSS.supports("selector(:is("+c+"))"))throw new Error;return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===E&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[E]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,S=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.cssSupportsSelector=ce(function(){return CSS.supports("selector(*)")&&C.querySelectorAll(":is(:jqfake)")&&!CSS.supports("selector(:is(*,:jqfake))")}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=E,!C.getElementsByName||!C.getElementsByName(E).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&S){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&S)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+E+"'></a><select id='"+E+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+E+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+E+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),d.cssSupportsSelector||y.push(":has"),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType&&e.documentElement||e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&S&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==r?r:d.attributes||!S?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[E]||(a[E]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[E]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[E]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[E]||(e[E]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[E]&&(y=Ce(y)),v&&!v[E]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Se(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[E]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Se(e.slice(s,n)),n<r&&Se(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Se(t[n]))[E]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!S);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&S&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!S,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=E.split("").sort(j).join("")===E,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);E.find=d,E.expr=d.selectors,E.expr[":"]=E.expr.pseudos,E.uniqueSort=E.unique=d.uniqueSort,E.text=d.getText,E.isXMLDoc=d.isXML,E.contains=d.contains,E.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&E(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=E.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?E.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?E.grep(e,function(e){return e===n!==r}):"string"!=typeof n?E.grep(e,function(e){return-1<i.call(n,e)!==r}):E.filter(n,e,r)}E.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?E.find.matchesSelector(r,e)?[r]:[]:E.find.matches(e,E.grep(t,function(e){return 1===e.nodeType}))},E.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(E(e).filter(function(){for(t=0;t<r;t++)if(E.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)E.find(e,i[t],n);return 1<r?E.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?E(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(E.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof E?t[0]:t,E.merge(this,E.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),N.test(r[1])&&E.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=S.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(E):E.makeArray(e,this)}).prototype=E.fn,D=E(S);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}E.fn.extend({has:function(e){var t=E(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(E.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&E(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&E.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?E.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(E(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(E.uniqueSort(E.merge(this.get(),E(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),E.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),E.merge([],e.childNodes))}},function(r,i){E.fn[r]=function(e,t){var n=E.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=E.filter(t,n)),1<this.length&&(H[r]||E.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}E.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},E.each(e.match(P)||[],function(e,t){n[t]=!0}),n):E.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){E.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return E.each(arguments,function(e,t){var n;while(-1<(n=E.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<E.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},E.extend({Deferred:function(e){var o=[["notify","progress",E.Callbacks("memory"),E.Callbacks("memory"),2],["resolve","done",E.Callbacks("once memory"),E.Callbacks("once memory"),0,"resolved"],["reject","fail",E.Callbacks("once memory"),E.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return E.Deferred(function(r){E.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){E.Deferred.exceptionHook&&E.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(E.Deferred.getStackHook&&(t.stackTrace=E.Deferred.getStackHook()),C.setTimeout(t))}}return E.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?E.extend(e,a):a}},s={};return E.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=E.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;E.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},E.readyException=function(e){C.setTimeout(function(){throw e})};var F=E.Deferred();function $(){S.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),E.ready()}E.fn.ready=function(e){return F.then(e)["catch"](function(e){E.readyException(e)}),this},E.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--E.readyWait:E.isReady)||(E.isReady=!0)!==e&&0<--E.readyWait||F.resolveWith(S,[E])}}),E.ready.then=F.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?C.setTimeout(E.ready):(S.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(E(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=E.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||E.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!E.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}E.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),E.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),E.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,E.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=E.queue(e,t),r=n.length,i=n.shift(),o=E._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){E.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:E.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),E.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?E.queue(this[0],t):void 0===n?this:this.each(function(){var e=E.queue(this,t,n);E._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&E.dequeue(this,t)})},dequeue:function(e){return this.each(function(){E.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=E.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=S.documentElement,ie=function(e){return E.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return E.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===E.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return E.css(e,t,"")},u=s(),l=n&&n[3]||(E.cssNumber[t]?"":"px"),c=e.nodeType&&(E.cssNumber[t]||"px"!==l&&+u)&&te.exec(E.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)E.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,E.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=E.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}E.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?E(this).show():E(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=S.createDocumentFragment().appendChild(S.createElement("div")),(fe=S.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?E.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))E.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+E.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;E.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<E.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return S.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return E().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=E.guid++)),e.each(function(){E.event.add(this,t,i,r,n)})}function Ee(e,i,o){o?(Y.set(e,i,!1),E.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(E.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:E.event.trigger(E.extend(r[0],E.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&E.event.add(e,i,we)}E.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&E.find.matchesSelector(re,i),n.guid||(n.guid=E.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof E&&E.event.triggered!==e.type?E.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=E.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=E.event.special[d]||{},c=E.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&E.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),E.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=E.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||E.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)E.event.remove(e,d+t[l],n,r,!0);E.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=E.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=E.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=E.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((E.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<E(i,this).index(l):E.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(E.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[E.expando]?e:new E.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Ee(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},E.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},E.Event=function(e,t){if(!(this instanceof E.Event))return new E.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&E.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[E.expando]=!0},E.Event.prototype={constructor:E.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},E.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},E.event.addProp),E.each({focus:"focusin",blur:"focusout"},function(t,e){E.event.special[t]={setup:function(){return Ee(this,t,Ce),!1},trigger:function(){return Ee(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),E.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){E.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||E.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),E.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,E(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){E.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&E(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)E.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=E.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=E.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=E.clone(u,!0,!0),s&&E.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,E.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&E.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?E._evalUrl&&!u.noModule&&E._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?E.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||E.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}E.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||E.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=E.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?E.event.remove(n,r):E.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),E.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?E.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(E.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return E.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=E.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(E.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;E.inArray(this,n)<0&&(E.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),E.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){E.fn[e]=function(e){for(var t,n=[],r=E(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),E(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&a&&(a=a.replace($e,"$1")||void 0),""!==a||ie(e)||(a=E.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=S.createElement("div"),l=S.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,E.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=S.createElement("table"),t=S.createElement("tr"),n=S.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=S.createElement("div").style,Xe={};function Ve(e){var t=E.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=E.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=E.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=E.css(e,"border"+ne[a]+"Width",!0,i))):(u+=E.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=E.css(e,"border"+ne[a]+"Width",!0,i):s+=E.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===E.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===E.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===E.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}E.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=E.cssHooks[t]||E.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(E.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=E.cssHooks[t]||E.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),E.each(["height","width"],function(e,u){E.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(E.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===E.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=E.css(e,u)),Je(0,t,s)}}}),E.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),E.each({margin:"",padding:"",border:"Width"},function(i,o){E.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(E.cssHooks[i+o].set=Je)}),E.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=E.css(e,t[a],!1,r);return o}return void 0!==n?E.style(e,t,n):E.css(e,t)},e,t,1<arguments.length)}}),((E.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||E.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(E.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=E.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=E.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){E.fx.step[e.prop]?E.fx.step[e.prop](e):1!==e.elem.nodeType||!E.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:E.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},E.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},E.fx=et.prototype.init,E.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===S.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,E.fx.interval),E.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=E.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:E.extend({},e),opts:E.extend(!0,{specialEasing:{},easing:E.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=E.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=E.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(E._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return E.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),E.fx.timer(E.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}E.Animation=E.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=E._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,E.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||E.style(e,r)}if((u=!E.isEmptyObject(t))||!E.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=E.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=E.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===E.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)E.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),E.speed=function(e,t,n){var r=e&&"object"==typeof e?E.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return E.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in E.fx.speeds?r.duration=E.fx.speeds[r.duration]:r.duration=E.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&E.dequeue(this,r.queue)},r},E.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=E.isEmptyObject(t),o=E.speed(e,n,r),a=function(){var e=ft(this,E.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=E.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||E.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=E.timers,o=n?n.length:0;for(t.finish=!0,E.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),E.each(["toggle","show","hide"],function(e,r){var i=E.fn[r];E.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),E.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){E.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),E.timers=[],E.fx.tick=function(){var e,t=0,n=E.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||E.fx.stop(),tt=void 0},E.fx.timer=function(e){E.timers.push(e),E.fx.start()},E.fx.interval=13,E.fx.start=function(){nt||(nt=!0,st())},E.fx.stop=function(){nt=null},E.fx.speeds={slow:600,fast:200,_default:400},E.fn.delay=function(r,e){return r=E.fx&&E.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=S.createElement("input"),it=S.createElement("select").appendChild(S.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=S.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=E.expr.attrHandle;E.fn.extend({attr:function(e,t){return B(this,E.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){E.removeAttr(this,e)})}}),E.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?E.prop(e,t,n):(1===o&&E.isXMLDoc(e)||(i=E.attrHooks[t.toLowerCase()]||(E.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void E.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=E.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?E.removeAttr(e,n):e.setAttribute(n,n),n}},E.each(E.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||E.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}E.fn.extend({prop:function(e,t){return B(this,E.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[E.propFix[e]||e]})}}),E.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&E.isXMLDoc(e)||(t=E.propFix[t]||t,i=E.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=E.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(E.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),E.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){E.propFix[this.toLowerCase()]=this}),E.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){E(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){E(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=E(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;E.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,E(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=E.map(t,function(e){return null==e?"":e+""})),(r=E.valHooks[this.type]||E.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=E.valHooks[t.type]||E.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),E.extend({valHooks:{option:{get:function(e){var t=E.find.attr(e,"value");return null!=t?t:yt(E.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=E(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=E.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<E.inArray(E.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),E.each(["radio","checkbox"],function(){E.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<E.inArray(E(e).val(),t)}},v.checkOn||(E.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};E.extend(E.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||S],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||S,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+E.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[E.expando]?e:new E.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:E.makeArray(t,[e]),c=E.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||S)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),E.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),E.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=E.extend(new E.Event,n,{type:e,isSimulated:!0});E.event.trigger(r,null,t)}}),E.fn.extend({trigger:function(e,t){return this.each(function(){E.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return E.event.trigger(e,t,n,!0)}}),v.focusin||E.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){E.event.simulate(r,e.target,E.event.fix(e))};E.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},St=/\?/;E.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||E.error("Invalid XML: "+(n?E.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Et=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))E.each(e,function(e,t){r||Et.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}E.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!E.isPlainObject(e))E.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},E.fn.extend({serialize:function(){return E.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=E.prop(this,"elements");return e?E.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!E(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=E(this).val();return null==n?null:Array.isArray(n)?E.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=S.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,E.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=E.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&E.extend(!0,e,r),e}Wt.href=Tt.href,E.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":E.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,E.ajaxSettings),t):Bt(E.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=E.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?E(v):E.event,x=E.Deferred(),b=E.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=S.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=E.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=E.event&&y.global)&&0==E.active++&&E.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(St.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(St.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(E.lastModified[f]&&T.setRequestHeader("If-Modified-Since",E.lastModified[f]),E.etag[f]&&T.setRequestHeader("If-None-Match",E.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<E.inArray("script",y.dataTypes)&&E.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(E.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(E.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--E.active||E.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return E.get(e,t,n,"json")},getScript:function(e,t){return E.get(e,void 0,t,"script")}}),E.each(["get","post"],function(e,i){E[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),E.ajax(E.extend({url:e,type:i,dataType:r,data:t,success:n},E.isPlainObject(e)&&e))}}),E.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),E._evalUrl=function(e,t,n){return E.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){E.globalEval(e,t,n)}})},E.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=E(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){E(this).wrapInner(n.call(this,e))}):this.each(function(){var e=E(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){E(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){E(this).replaceWith(this.childNodes)}),this}}),E.expr.pseudos.hidden=function(e){return!E.expr.pseudos.visible(e)},E.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},E.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=E.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,E.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),E.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),E.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return E.globalEval(e),e}}}),E.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),E.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=E("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;E.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||E.expando+"_"+Ct.guid++;return this[e]=!0,e}}),E.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||E.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?E(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),E.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(r)):t=S),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&E(o).remove(),E.merge([],i.childNodes)));var r,i,o},E.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&E.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?E("<div>").append(E.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},E.expr.pseudos.animated=function(t){return E.grep(E.timers,function(e){return t===e.elem}).length},E.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=E.css(e,"position"),c=E(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=E.css(e,"top"),u=E.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,E.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},E.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){E.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===E.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===E.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=E(e).offset()).top+=E.css(e,"borderTopWidth",!0),i.left+=E.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-E.css(r,"marginTop",!0),left:t.left-i.left-E.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===E.css(e,"position"))e=e.offsetParent;return e||re})}}),E.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;E.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),E.each(["top","left"],function(e,n){E.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?E(e).position()[n]+"px":t})}),E.each({Height:"height",Width:"width"},function(a,s){E.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){E.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?E.css(e,t,i):E.style(e,t,n,i)},s,n?e:void 0,n)}})}),E.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){E.fn[t]=function(e){return this.on(t,e)}}),E.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){E.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;E.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||E.guid++,i},E.holdReady=function(e){e?E.readyWait++:E.ready(!0)},E.isArray=Array.isArray,E.parseJSON=JSON.parse,E.nodeName=A,E.isFunction=m,E.isWindow=x,E.camelCase=X,E.type=w,E.now=Date.now,E.isNumeric=function(e){var t=E.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},E.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return E});var Yt=C.jQuery,Qt=C.$;return E.noConflict=function(e){return C.$===E&&(C.$=Qt),e&&C.jQuery===E&&(C.jQuery=Yt),E},"undefined"==typeof e&&(C.jQuery=C.$=E),E});
;
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
/**
 * @file
 * Parse inline JSON and initialize the drupalSettings global object.
 */

(function () {
  // Use direct child elements to harden against XSS exploits when CSP is on.
  const settingsElement = document.querySelector(
    'head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]',
  );

  /**
   * Variable generated by Drupal with all the configuration created from PHP.
   *
   * @global
   *
   * @type {object}
   */
  window.drupalSettings = {};

  if (settingsElement !== null) {
    window.drupalSettings = JSON.parse(settingsElement.textContent);
  }
})();
;
window.drupalTranslations = {"strings":{"":{"An AJAX HTTP error occurred.":"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 AJAX HTTP \u043e\u0448\u0438\u0431\u043a\u0430.","HTTP Result Code: !status":"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u0434 HTTP: !status","An AJAX HTTP request terminated abnormally.":"AJAX HTTP-\u0437\u0430\u043f\u0440\u043e\u0441 \u043d\u0435\u043e\u0436\u0438\u0434\u0430\u043d\u043d\u043e \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043d.","Debugging information follows.":"\u0421\u043b\u0435\u0434\u0443\u0435\u0442 \u043e\u0442\u043b\u0430\u0434\u043e\u0447\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f.","Path: !uri":"\u041f\u0443\u0442\u044c: !uri","StatusText: !statusText":"\u0422\u0435\u043a\u0441\u0442 \u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u044f: !statusText","ResponseText: !responseText":"\u0422\u0435\u043a\u0441\u0442 \u041e\u0442\u0432\u0435\u0442\u0430: !responseText","ReadyState: !readyState":"ReadyState: !readyState","CustomMessage: !customMessage":"\u0421\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435: !customMessage","Please wait...":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435...","The response failed verification so will not be processed.":"\u041e\u0442\u0432\u0435\u0442 \u043d\u0435 \u043f\u0440\u043e\u0448\u0435\u043b \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0443 \u043f\u043e\u044d\u0442\u043e\u043c\u0443 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0435 \u0431\u0443\u0434\u0435\u0442.","The callback URL is not local and not trusted: !url":"URL-\u0430\u0434\u0440\u0435\u0441 \u043e\u0431\u0440\u0430\u0442\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u0438 \u0434\u043e\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u043c: !url","Changed":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435","Home":"\u0413\u043b\u0430\u0432\u043d\u0430\u044f","Delete":"Delete","closed":"\u0437\u0430\u043a\u0440\u044b\u0442\u043e","Cancel":"\u041e\u0442\u043c\u0435\u043d\u0430","Disabled":"\u041e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u043e","Enabled":"\u0412\u043a\u043b\u044e\u0447\u0435\u043d\u043e","File":"\u0424\u0430\u0439\u043b","Edit":"Edit","Date":"Date","Size":"Size","Link":"\u0421\u0441\u044b\u043b\u043a\u0430","Image":"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435","root":"\u043a\u043e\u0440\u0435\u043d\u044c","Name":"Name","Add":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c","Refresh":"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c","Upload":"\u0417\u0430\u043a\u0430\u0447\u0430\u0442\u044c","Continue":"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c","Create":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c","Width":"\u0428\u0438\u0440\u0438\u043d\u0430","Height":"\u0412\u044b\u0441\u043e\u0442\u0430","Add group":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443","Show":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c","1 item\u0003@count items":"@count \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0003@count \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430\u0003@count[2] \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432","Select all rows in this table":"\u041e\u0442\u043c\u0435\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Deselect all rows in this table":"\u0421\u043d\u044f\u0442\u044c \u043e\u0442\u043c\u0435\u0442\u043a\u0443 \u0441\u043e \u0432\u0441\u0435\u0445 \u043a\u043e\u043b\u043e\u043d\u043e\u043a \u0442\u0430\u0431\u043b\u0438\u0446\u044b","Caption":"\u041f\u043e\u0434\u043f\u0438\u0441\u044c","Extend":"\u0420\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f","Not published":"\u041d\u0435 \u043e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u043d\u043e","Loading...":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430...","Apply":"Apply","Select":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c","Hide":"\u0421\u043a\u0440\u044b\u0442\u044c","Unlink":"\u041e\u0442\u0432\u044f\u0437\u0430\u0442\u044c","Resize":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0440\u0430\u0437\u043c\u0435\u0440\u0430","Not promoted":"\u041d\u0435 \u0432\u044b\u0432\u0435\u0434\u0435\u043d\u043e \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e","Error message":"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043e\u0431 \u043e\u0448\u0438\u0431\u043a\u0435","button":"\u043a\u043d\u043e\u043f\u043a\u0430","Warning message":"\u041f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0436\u0434\u0435\u043d\u0438\u0435","Only files with the following extensions are allowed: %files-allowed.":"\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u043b\u044f\u0442\u044c \u043c\u043e\u0436\u043d\u043e \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u044b \u0441 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %files-allowed.","Edit Link":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443","Remove group":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443","By @name on @date":"@name, @date","By @name":"@name","Alias: @alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c: @alias","No alias":"\u0421\u0438\u043d\u043e\u043d\u0438\u043c \u043d\u0435 \u0437\u0430\u0434\u0430\u043d","@label":"@label","New revision":"\u041d\u043e\u0432\u0430\u044f \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u044f","Drag to re-order":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u043c\u043e\u0436\u043d\u043e, \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0432 \u043f\u0443\u043d\u043a\u0442 \u043c\u044b\u0448\u043a\u043e\u0439.","1 byte\u0003@count bytes":"@count \u0431\u0430\u0439\u0442\u0003@count \u0431\u0430\u0439\u0442\u0430\u0003@count[2] \u0431\u0430\u0439\u0442","@size KB":"@size \u041a\u0411","@size MB":"@size \u041c\u0411","New group":"\u041d\u043e\u0432\u0430\u044f \u0433\u0440\u0443\u043f\u043f\u0430","Lock":"\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c","This permission is inherited from the authenticated user role.":"\u042d\u0442\u043e \u043f\u0440\u0430\u0432\u043e \u043d\u0430\u0441\u043b\u0435\u0434\u0443\u0435\u0442\u0441\u044f \u043e\u0442 \u0440\u043e\u043b\u0438 \u00ab\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u00bb.","No revision":"\u041d\u0435\u0442 \u0440\u0435\u0434\u0430\u043a\u0446\u0438\u0438","Requires a title":"\u0422\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a","Not restricted":"\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439","(active tab)":"(\u0430\u043a\u0442\u0438\u0432\u043d\u0430\u044f \u0432\u043a\u043b\u0430\u0434\u043a\u0430)","Status message":"\u0421\u0442\u0430\u0442\u0443\u0441","Restricted to certain pages":"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0442\u0440\u0430\u043d\u0438\u0446","The block cannot be placed in this region.":"\u0411\u043b\u043e\u043a \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0449\u0451\u043d \u0432 \u0434\u0430\u043d\u043d\u043e\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u0438.","Hide summary":"\u0421\u043a\u0440\u044b\u0442\u044c \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435","Edit summary":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u0435","Don\u0027t display post information":"\u041d\u0435 \u043f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043e \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438","Unlock":"\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c","Collapse":"\u0421\u0432\u0435\u0440\u043d\u0443\u0442\u044c","The selected file %filename cannot be uploaded. Only files with the following extensions are allowed: %extensions.":"\u0412\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b %filename \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d. \u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u0442\u043e\u043b\u044c\u043a\u043e \u0441\u043e \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u043c\u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u0438\u044f\u043c\u0438: %extensions.","Show row weights":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Hide row weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u0441\u0442\u0440\u043e\u043a","Apply (all displays)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u0432\u0441\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f)","Apply (this display)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u0434\u0430\u043d\u043d\u043e\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)","Revert to default":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c \u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","Needs to be updated":"\u041d\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","Does not need to be updated":"\u041d\u0435 \u043d\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044f \u0432 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0438","Show all columns":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b","Show table cells that were hidden to make the table fit within a small screen.":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u044f\u0447\u0435\u0439\u043a\u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0431\u044b\u043b\u0438 \u0441\u043a\u0440\u044b\u0442\u044b, \u0447\u0442\u043e\u0431\u044b \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \u043d\u0430 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0435.","List additional actions":"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439","Flag other translations as outdated":"\u041f\u043e\u043c\u0435\u0442\u0438\u0442\u044c \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u043a\u0430\u043a \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435","Do not flag other translations as outdated":"\u041d\u0435 \u043f\u043e\u043c\u0435\u0447\u0430\u0439\u0442\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u044b \u043a\u0430\u043a \u0443\u0441\u0442\u0430\u0440\u0435\u0432\u0448\u0438\u0435","opened":"\u041e\u0442\u043a\u0440\u044b\u0442\u043e","Horizontal orientation":"\u0413\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f","Vertical orientation":"\u0412\u0435\u0440\u0442\u0438\u043a\u0430\u043b\u044c\u043d\u0430\u044f \u043e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f","Tray orientation changed to @orientation.":"\u041e\u0440\u0438\u0435\u043d\u0442\u0430\u0446\u0438\u044f \u043f\u0430\u043d\u0435\u043b\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0430 \u043d\u0430 @orientation.","You have unsaved changes.":"\u0415\u0441\u0442\u044c \u043d\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f.","No styles configured":"\u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044e\u0442 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u0441\u0442\u0438\u043b\u0438","@count styles configured":"\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043e @count \u0441\u0442\u0438\u043b\u044c\r\n\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043e @count \u0441\u0442\u0438\u043b\u044f\r\n\u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043e @count[2] \u0441\u0442\u0438\u043b\u0435\u0439","Based on the text editor configuration, these tags have automatically been added: \u003Cstrong\u003E@tag-list\u003C\/strong\u003E.":"\u041d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0440\u0435\u0434\u0430\u043a\u0442\u043e\u0440\u0430, \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0435 \u0442\u0435\u0433\u0438 \u0431\u044b\u043b\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u044b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u003Cstrong\u003E@tag-list\u003C\/strong\u003E.","Uploads disabled":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u044b","Uploads enabled, max size: @size @dimensions":"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0438 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b, \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440: @size @dimensions","The toolbar cannot be set to a horizontal orientation when it is locked.":"\u041f\u0430\u043d\u0435\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0430 \u0432 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043a\u043e\u0433\u0434\u0430 \u043e\u043d\u0430 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0430.","Enter caption here":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0434\u043f\u0438\u0441\u044c \u0437\u0434\u0435\u0441\u044c","Hide group names":"\u0421\u043a\u0440\u044b\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0433\u0440\u0443\u043f\u043f","Show group names":"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0433\u0440\u0443\u043f\u043f","@groupName button group in position @position of @positionCount in row @row of @rowCount.":"\u0413\u0440\u0443\u043f\u043f\u0430 \u043a\u043d\u043e\u043f\u043e\u043a @groupName \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 @position \u0438\u0437 @positionCount \u0432 \u0441\u0442\u0440\u043e\u043a\u0435 @row \u0438\u0437 @rowCount.","Press the down arrow key to create a new row.":"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022.","@name @type.":"@name @type.","Press the down arrow key to activate.":"\u0414\u043b\u044f \u0430\u043a\u0442\u0438\u0432\u0430\u0446\u0438\u0438 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022.","@name @type in position @position of @positionCount in @groupName button group in row @row of @rowCount.":"@type @name \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u043d\u0430 \u043f\u043e\u0437\u0438\u0446\u0438\u0438 @position \u0438\u0437 @positionCount \u0432 \u0433\u0440\u0443\u043f\u043f\u0435 \u043a\u043d\u043e\u043f\u043e\u043a @groupName \u0432 \u0441\u0442\u0440\u043e\u043a\u0435 @row \u0438\u0437 @rowCount.","Press the down arrow key to create a new button group in a new row.":"\u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a \u043d\u0430 \u043d\u043e\u0432\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0435 \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022.","This is the last group. Move the button forward to create a new group.":"\u042d\u0442\u043e \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0433\u0440\u0443\u043f\u043f\u0430. \u0414\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0432\u043f\u0435\u0440\u0451\u0434.","The \u0022@name\u0022 button is currently enabled.":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0022@name\u0022 \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u0430.","Use the keyboard arrow keys to change the position of this button.":"\u0414\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u044d\u0442\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0438 \u0441\u043e \u0441\u0442\u0440\u0435\u043b\u043a\u0430\u043c\u0438 \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435.","Press the up arrow key on the top row to disable the button.":"\u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u0432\u0435\u0440\u0445\u0022 \u043d\u0430 \u0432\u0435\u0440\u0445\u043d\u0435\u0439 \u0441\u0442\u0440\u043e\u043a\u0435.","The \u0022@name\u0022 button is currently disabled.":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0022@name\u0022 \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0430.","Use the down arrow key to move this button into the active toolbar.":"\u0427\u0442\u043e\u0431\u044b \u043e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443, \u043d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022 \u043d\u0430 \u043d\u0430 \u0430\u043a\u0442\u0438\u0432\u043d\u043e\u0439 \u043f\u0430\u043d\u0435\u043b\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432.","This @name is currently enabled.":"@name \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e.","Use the keyboard arrow keys to change the position of this separator.":"\u0414\u043b\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0438 \u0441\u043e \u0441\u0442\u0440\u0435\u043b\u043a\u0430\u043c\u0438 \u043d\u0430 \u043a\u043b\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0435.","Separators are used to visually split individual buttons.":"\u0420\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u043a\u043d\u043e\u043f\u043e\u043a.","This @name is currently disabled.":"@name \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e.","Use the down arrow key to move this separator into the active toolbar.":"\u0427\u0442\u043e\u0431\u044b \u043f\u0435\u0440\u0435\u043c\u0435\u0441\u0442\u0438\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0439 \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u044c \u0432 \u0430\u043a\u0442\u0438\u0432\u043d\u0443\u044e \u043f\u0430\u043d\u0435\u043b\u044c, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u043a\u043b\u0430\u0432\u0438\u0448\u0443 \u0022\u0421\u0442\u0440\u0435\u043b\u043a\u0430 \u0432\u043d\u0438\u0437\u0022","You may add multiple separators to each button group.":"\u041a \u043a\u0430\u0436\u0434\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u0435 \u043a\u043d\u043e\u043f\u043e\u043a \u043c\u043e\u0436\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437\u0434\u0435\u043b\u0438\u0442\u0435\u043b\u0435\u0439.","Please provide a name for the button group.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043b\u044f \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a.","Button group name":"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a","Editing the name of the new button group in a dialog.":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a \u0432 \u0434\u0438\u0430\u043b\u043e\u0433\u0435.","Editing the name of the \u0022@groupName\u0022 button group in a dialog.":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0433\u0440\u0443\u043f\u043f\u044b \u043a\u043d\u043e\u043f\u043e\u043a \u0022@groupName\u0022 \u0432 \u0434\u0438\u0430\u043b\u043e\u0433\u0435.","Place a button to create a new button group.":"\u0427\u0442\u043e\u0431\u044b \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0433\u0440\u0443\u043f\u043f\u0443 \u043a\u043d\u043e\u043f\u043e\u043a \u0440\u0430\u0437\u043c\u0435\u0441\u0442\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443.","Add a CKEditor button group to the end of this row.":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0443 \u043a\u043d\u043e\u043f\u043e\u043a CKEditor \u0432 \u043a\u043e\u043d\u0435\u0446 \u0434\u0430\u043d\u043d\u043e\u0439 \u0441\u0442\u0440\u043e\u043a\u0438.","Changing the text format to %text_format will permanently remove content that is not allowed in that text format.\u003Cbr\u003E\u003Cbr\u003ESave your changes before switching the text format to avoid losing data.":"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 \u043d\u0430 %text_format \u0431\u0435\u0437\u0432\u043e\u0437\u0432\u0440\u0430\u0442\u043d\u043e \u0443\u0434\u0430\u043b\u0438\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435, \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0435 \u0432 \u043d\u043e\u0432\u043e\u043c \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435.\u003Cbr\u003E\u003Cbr\u003E\u0414\u043b\u044f \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u043f\u043e\u0442\u0435\u0440\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043f\u0435\u0440\u0435\u0434 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0430.","Change text format?":"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442 \u0442\u0435\u043a\u0441\u0442\u0430?","Rich Text Editor, !label field":"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440 \u0444\u043e\u0440\u043c\u0430\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430, \u043f\u043e\u043b\u0435 !label","Leave preview?":"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440?","Leave preview":"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440","Leaving the preview will cause unsaved changes to be lost. Are you sure you want to leave the preview?":"\u0412\u044b\u0445\u043e\u0434 \u0438\u0437 \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u043f\u043e\u0442\u0435\u0440\u0435 \u043d\u0435\u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u043d\u044b\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439. \u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440?","CTRL+Left click will prevent this dialog from showing and proceed to the clicked link.":"CTRL+\u0449\u0435\u043b\u0447\u043e\u043a \u043b\u0435\u0432\u043e\u0439 \u043a\u043d\u043e\u043f\u043a\u043e\u0439 \u043c\u044b\u0448\u0438 \u043d\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u0438\u0442 \u043e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u044d\u0442\u043e \u0434\u0438\u0430\u043b\u043e\u0433\u043e\u0432\u043e\u0435 \u043e\u043a\u043d\u043e \u0438 \u043f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043d\u0430\u0436\u0430\u0442\u043e\u0439 \u0441\u0441\u044b\u043b\u043a\u0435.","Tray \u0022@tray\u0022 @action.":"\u041f\u0430\u043d\u0435\u043b\u044c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0022@tray\u0022 @action.","Tray @action.":"\u041f\u0430\u043d\u0435\u043b\u044c \u0437\u0430\u0434\u0430\u0447 @action.","Hide lower priority columns":"\u0421\u043a\u0440\u044b\u0442\u044c \u0441\u0442\u043e\u043b\u0431\u0446\u044b \u0441 \u043d\u0438\u0437\u043a\u0438\u043c \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c","!modules modules are available in the modified list.":"\u041c\u043e\u0434\u0443\u043b\u0438 !modules \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0432 \u043c\u043e\u0434\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435.","Authored on @date":"\u0421\u043e\u0437\u0434\u0430\u043d\u043e \u0432 @date","1 block is available in the modified list.\u0003@count blocks are available in the modified list.":"\u0412 \u0438\u0437\u043c\u0435\u043d\u0451\u043d\u043d\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d 1 \u0431\u043b\u043e\u043a.\u0003\u0412 \u0438\u0437\u043c\u0435\u043d\u0451\u043d\u043d\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e @count \u0431\u043b\u043e\u043a\u0430.\u0003\u0412 \u0438\u0437\u043c\u0435\u043d\u0451\u043d\u043d\u043e\u043c \u0441\u043f\u0438\u0441\u043a\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e @count \u0431\u043b\u043e\u043a\u043e\u0432.","Zero items selected":"\u041d\u043e\u043b\u044c \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0432\u044b\u0431\u0440\u0430\u043d\u043e","All @count items selected":"\u0412\u0441\u0435 @count \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b \u0432\u044b\u0431\u0440\u0430\u043d\u044b","Select all media":"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0432\u0441\u0435 \u043c\u0435\u0434\u0438\u0430","Show media item weights":"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u0435\u0441 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0435\u0434\u0438\u0430","Hide media item weights":"\u0421\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0441 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u043c\u0435\u0434\u0438\u0430","Embedded media":"\u0412\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u044b\u0435 \u043c\u0435\u0434\u0438\u0430","Insert from Media Library":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u043c\u0435\u0434\u0438\u0430","Insert this token into your form":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0442\u043e\u043a\u0435\u043d \u0432 \u0432\u0430\u0448\u0443 \u0444\u043e\u0440\u043c\u0443","First click a text field to insert your tokens into.":"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u043a\u0435\u043d\u044b.","Automatic alias":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0438\u043d\u043e\u043d\u0438\u043c","New folder":"\u041d\u043e\u0432\u0430\u044f \u043f\u0430\u043f\u043a\u0430","Folder name":"\u0418\u043c\u044f \u043f\u0430\u043f\u043a\u0438","Add file":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b","Create a copy":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043a\u043e\u043f\u0438\u044e","Please select a file.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b.","Open File Browser":"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u0444\u0430\u0439\u043b\u043e\u0432","Use the selected file.":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u0444\u0430\u0439\u043b.","%path is a predefined path and can not be modified.":"%path \u043f\u0440\u0435\u0434\u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0439 \u043f\u0443\u0442\u044c \u0438 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d.","%filename is not allowed.":"%filename \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f.","%filename contains invalid characters. Use only alphanumeric characters for better portability.":"%filename \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u0431\u0443\u043a\u0432\u0435\u043d\u043d\u043e-\u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0435 \u0441\u0438\u043c\u0432\u043e\u043b\u044b \u0434\u043b\u044f \u043b\u0443\u0447\u0448\u0435\u0439 \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u043c\u043e\u0441\u0442\u0438.","Image dimensions must be smaller than %dimensions pixels.":"\u0420\u0430\u0437\u043c\u0435\u0440\u044b \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u044b \u0431\u044b\u0442\u044c \u043c\u0435\u043d\u044c\u0448\u0435 \u0447\u0435\u043c %dimensions \u043f\u0438\u043a\u0441\u0435\u043b\u0435\u0439.","%name is not an image.":"%name \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c.","Delete !filename?\u0003Delete the selected @count items?":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c !filename?\u0003\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 @count \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432?","%filename already exists.":"%filename \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442.","%filename is %filesize exceeding the maximum file size of %maxsize.":"%filename \u0440\u0430\u0437\u043c\u0435\u0440\u043e\u043c %filesize \u043f\u0440\u0435\u0432\u044b\u0448\u0430\u0435\u0442 \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0444\u0430\u0439\u043b\u0430 %maxsize.","Invalid response received from the server.":"\u041e\u0442 \u0441\u0435\u0440\u0432\u0435\u0440\u0430 \u043f\u043e\u043b\u0443\u0447\u0435\u043d \u043d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043e\u0442\u0432\u0435\u0442.","Insert images using Imce File Manager":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0444\u0430\u0439\u043b\u043e\u0432 Imce","Insert file links using Imce File Manager":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044f \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0444\u0430\u0439\u043b\u043e\u0432 Imce"}},"pluralFormula":{"1":0,"2":1,"3":1,"4":1,"21":0,"22":1,"23":1,"24":1,"31":0,"32":1,"33":1,"34":1,"41":0,"42":1,"43":1,"44":1,"51":0,"52":1,"53":1,"54":1,"61":0,"62":1,"63":1,"64":1,"71":0,"72":1,"73":1,"74":1,"81":0,"82":1,"83":1,"84":1,"91":0,"92":1,"93":1,"94":1,"101":0,"102":1,"103":1,"104":1,"121":0,"122":1,"123":1,"124":1,"131":0,"132":1,"133":1,"134":1,"141":0,"142":1,"143":1,"144":1,"151":0,"152":1,"153":1,"154":1,"161":0,"162":1,"163":1,"164":1,"171":0,"172":1,"173":1,"174":1,"181":0,"182":1,"183":1,"184":1,"191":0,"192":1,"193":1,"194":1,"default":2}};;
/**
 * @file
 * Defines the Drupal JavaScript API.
 */

/**
 * A jQuery object, typically the return value from a `$(selector)` call.
 *
 * Holds an HTMLElement or a collection of HTMLElements.
 *
 * @typedef {object} jQuery
 *
 * @prop {number} length=0
 *   Number of elements contained in the jQuery object.
 */

/**
 * Variable generated by Drupal that holds all translated strings from PHP.
 *
 * Content of this variable is automatically created by Drupal when using the
 * Interface Translation module. It holds the translation of strings used on
 * the page.
 *
 * This variable is used to pass data from the backend to the frontend. Data
 * contained in `drupalSettings` is used during behavior initialization.
 *
 * @global
 *
 * @var {object} drupalTranslations
 */

/**
 * Global Drupal object.
 *
 * All Drupal JavaScript APIs are contained in this namespace.
 *
 * @global
 *
 * @namespace
 */
window.Drupal = { behaviors: {}, locale: {} };

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (
  Drupal,
  drupalSettings,
  drupalTranslations,
  console,
  Proxy,
  Reflect,
) {
  /**
   * Helper to rethrow errors asynchronously.
   *
   * This way Errors bubbles up outside of the original callstack, making it
   * easier to debug errors in the browser.
   *
   * @param {Error|string} error
   *   The error to be thrown.
   */
  Drupal.throwError = function (error) {
    setTimeout(() => {
      throw error;
    }, 0);
  };

  /**
   * Custom error thrown after attach/detach if one or more behaviors failed.
   * Initializes the JavaScript behaviors for page loads and Ajax requests.
   *
   * @callback Drupal~behaviorAttach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to detach behaviors from.
   * @param {?object} settings
   *   An object containing settings for the current context. It is rarely used.
   *
   * @see Drupal.attachBehaviors
   */

  /**
   * Reverts and cleans up JavaScript behavior initialization.
   *
   * @callback Drupal~behaviorDetach
   *
   * @param {HTMLDocument|HTMLElement} context
   *   An element to attach behaviors to.
   * @param {object} settings
   *   An object containing settings for the current context.
   * @param {string} trigger
   *   One of `'unload'`, `'move'`, or `'serialize'`.
   *
   * @see Drupal.detachBehaviors
   */

  /**
   * @typedef {object} Drupal~behavior
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Function run on page load and after an Ajax call.
   * @prop {Drupal~behaviorDetach} [detach]
   *   Function run when content is serialized or removed from the page.
   */

  /**
   * Holds all initialization methods.
   *
   * @namespace Drupal.behaviors
   *
   * @type {Object.<string, Drupal~behavior>}
   */

  /**
   * Defines a behavior to be run during attach and detach phases.
   *
   * Attaches all registered behaviors to a page element.
   *
   * Behaviors are event-triggered actions that attach to page elements,
   * enhancing default non-JavaScript UIs. Behaviors are registered in the
   * {@link Drupal.behaviors} object using the method 'attach' and optionally
   * also 'detach'.
   *
   * {@link Drupal.attachBehaviors} is added below to the `jQuery.ready` event
   * and therefore runs on initial page load. Developers implementing Ajax in
   * their solutions should also call this function after new page content has
   * been loaded, feeding in an element to be processed, in order to attach all
   * behaviors to the new content.
   *
   * Behaviors should use `var elements =
   * once('behavior-name', selector, context);` to ensure the behavior is
   * attached only once to a given element. (Doing so enables the reprocessing
   * of given elements, which may be needed on occasion despite the ability to
   * limit behavior attachment to a particular element.)
   *
   * @example
   * Drupal.behaviors.behaviorName = {
   *   attach: function (context, settings) {
   *     // ...
   *   },
   *   detach: function (context, settings, trigger) {
   *     // ...
   *   }
   * };
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to attach behaviors to.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none is given,
   *   the global {@link drupalSettings} object is used.
   *
   * @see Drupal~behaviorAttach
   * @see Drupal.detachBehaviors
   *
   * @throws {Drupal~DrupalBehaviorError}
   */
  Drupal.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || drupalSettings;
    const behaviors = Drupal.behaviors;
    // Execute all of them.
    Object.keys(behaviors || {}).forEach((i) => {
      if (typeof behaviors[i].attach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].attach(context, settings);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  /**
   * Detaches registered behaviors from a page element.
   *
   * Developers implementing Ajax in their solutions should call this function
   * before page content is about to be removed, feeding in an element to be
   * processed, in order to allow special behaviors to detach from the content.
   *
   * Such implementations should use `once.filter()` and `once.remove()` to find
   * elements with their corresponding `Drupal.behaviors.behaviorName.attach`
   * implementation, i.e. `once.remove('behaviorName', selector, context)`,
   * to ensure the behavior is detached only from previously processed elements.
   *
   * @param {HTMLDocument|HTMLElement} [context=document]
   *   An element to detach behaviors from.
   * @param {object} [settings=drupalSettings]
   *   An object containing settings for the current context. If none given,
   *   the global {@link drupalSettings} object is used.
   * @param {string} [trigger='unload']
   *   A string containing what's causing the behaviors to be detached. The
   *   possible triggers are:
   *   - `'unload'`: The context element is being removed from the DOM.
   *   - `'move'`: The element is about to be moved within the DOM (for example,
   *     during a tabledrag row swap). After the move is completed,
   *     {@link Drupal.attachBehaviors} is called, so that the behavior can undo
   *     whatever it did in response to the move. Many behaviors won't need to
   *     do anything simply in response to the element being moved, but because
   *     IFRAME elements reload their "src" when being moved within the DOM,
   *     behaviors bound to IFRAME elements (like WYSIWYG editors) may need to
   *     take some action.
   *   - `'serialize'`: When an Ajax form is submitted, this is called with the
   *     form as the context. This provides every behavior within the form an
   *     opportunity to ensure that the field elements have correct content
   *     in them before the form is serialized. The canonical use-case is so
   *     that WYSIWYG editors can update the hidden textarea to which they are
   *     bound.
   *
   * @throws {Drupal~DrupalBehaviorError}
   *
   * @see Drupal~behaviorDetach
   * @see Drupal.attachBehaviors
   */
  Drupal.detachBehaviors = function (context, settings, trigger) {
    context = context || document;
    settings = settings || drupalSettings;
    trigger = trigger || 'unload';
    const behaviors = Drupal.behaviors;
    // Execute all of them.
    Object.keys(behaviors || {}).forEach((i) => {
      if (typeof behaviors[i].detach === 'function') {
        // Don't stop the execution of behaviors in case of an error.
        try {
          behaviors[i].detach(context, settings, trigger);
        } catch (e) {
          Drupal.throwError(e);
        }
      }
    });
  };

  /**
   * Encodes special characters in a plain-text string for display as HTML.
   *
   * @param {string} str
   *   The string to be encoded.
   *
   * @return {string}
   *   The encoded string.
   *
   * @ingroup sanitization
   */
  Drupal.checkPlain = function (str) {
    str = str
      .toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
    return str;
  };

  /**
   * Replaces placeholders with sanitized values in a string.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   An object of replacements pairs to make. Incidences of any key in this
   *   array are replaced with the corresponding value. Based on the first
   *   character of the key, the value is escaped and/or themed:
   *    - `'!variable'`: inserted as is.
   *    - `'@variable'`: escape plain text to HTML ({@link Drupal.checkPlain}).
   *    - `'%variable'`: escape text and theme as a placeholder for user-
   *      submitted content ({@link Drupal.checkPlain} +
   *      `{@link Drupal.theme}('placeholder')`).
   *
   * @return {string}
   *   The formatted string.
   *
   * @see Drupal.t
   */
  Drupal.formatString = function (str, args) {
    // Keep args intact.
    const processedArgs = {};
    // Transform arguments before inserting them.
    Object.keys(args || {}).forEach((key) => {
      switch (key.charAt(0)) {
        // Escaped only.
        case '@':
          processedArgs[key] = Drupal.checkPlain(args[key]);
          break;

        // Pass-through.
        case '!':
          processedArgs[key] = args[key];
          break;

        // Escaped and placeholder.
        default:
          processedArgs[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
    });

    return Drupal.stringReplace(str, processedArgs, null);
  };

  /**
   * Replaces substring.
   *
   * The longest keys will be tried first. Once a substring has been replaced,
   * its new value will not be searched again.
   *
   * @param {string} str
   *   A string with placeholders.
   * @param {object} args
   *   Key-value pairs.
   * @param {Array|null} keys
   *   Array of keys from `args`. Internal use only.
   *
   * @return {string}
   *   The replaced string.
   */
  Drupal.stringReplace = function (str, args, keys) {
    if (str.length === 0) {
      return str;
    }

    // If the array of keys is not passed then collect the keys from the args.
    if (!Array.isArray(keys)) {
      keys = Object.keys(args || {});

      // Order the keys by the character length. The shortest one is the first.
      keys.sort((a, b) => a.length - b.length);
    }

    if (keys.length === 0) {
      return str;
    }

    // Take next longest one from the end.
    const key = keys.pop();
    const fragments = str.split(key);

    if (keys.length) {
      for (let i = 0; i < fragments.length; i++) {
        // Process each fragment with a copy of remaining keys.
        fragments[i] = Drupal.stringReplace(fragments[i], args, keys.slice(0));
      }
    }

    return fragments.join(args[key]);
  };

  /**
   * Translates strings to the page language, or a given language.
   *
   * See the documentation of the server-side t() function for further details.
   *
   * @param {string} str
   *   A string containing the English text to translate.
   * @param {Object.<string, string>} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   * @param {object} [options]
   *   Additional options for translation.
   * @param {string} [options.context='']
   *   The context the source string belongs to.
   *
   * @return {string}
   *   The formatted string.
   *   The translated string.
   */
  Drupal.t = function (str, args, options) {
    options = options || {};
    options.context = options.context || '';

    // Fetch the localized version of the string.
    if (
      typeof drupalTranslations !== 'undefined' &&
      drupalTranslations.strings &&
      drupalTranslations.strings[options.context] &&
      drupalTranslations.strings[options.context][str]
    ) {
      str = drupalTranslations.strings[options.context][str];
    }

    if (args) {
      str = Drupal.formatString(str, args);
    }
    return str;
  };

  /**
   * Returns the URL to a Drupal page.
   *
   * @param {string} path
   *   Drupal path to transform to URL.
   *
   * @return {string}
   *   The full URL.
   */
  Drupal.url = function (path) {
    return drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + path;
  };

  /**
   * Returns the passed in URL as an absolute URL.
   *
   * @param {string} url
   *   The URL string to be normalized to an absolute URL.
   *
   * @return {string}
   *   The normalized, absolute URL.
   *
   * @see https://github.com/angular/angular.js/blob/v1.4.4/src/ng/urlUtils.js
   * @see https://grack.com/blog/2009/11/17/absolutizing-url-in-javascript
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L53
   */
  Drupal.url.toAbsolute = function (url) {
    const urlParsingNode = document.createElement('a');

    // Decode the URL first; this is required by IE <= 6. Decoding non-UTF-8
    // strings may throw an exception.
    try {
      url = decodeURIComponent(url);
    } catch (e) {
      // Empty.
    }

    urlParsingNode.setAttribute('href', url);

    // IE <= 7 normalizes the URL when assigned to the anchor node similar to
    // the other browsers.
    return urlParsingNode.cloneNode(false).href;
  };

  /**
   * Returns true if the URL is within Drupal's base path.
   *
   * @param {string} url
   *   The URL string to be tested.
   *
   * @return {boolean}
   *   `true` if local.
   *
   * @see https://github.com/jquery/jquery-ui/blob/1.11.4/ui/tabs.js#L58
   */
  Drupal.url.isLocal = function (url) {
    // Always use browser-derived absolute URLs in the comparison, to avoid
    // attempts to break out of the base path using directory traversal.
    let absoluteUrl = Drupal.url.toAbsolute(url);
    let { protocol } = window.location;

    // Consider URLs that match this site's base URL but use HTTPS instead of HTTP
    // as local as well.
    if (protocol === 'http:' && absoluteUrl.indexOf('https:') === 0) {
      protocol = 'https:';
    }
    let baseUrl = `${protocol}//${
      window.location.host
    }${drupalSettings.path.baseUrl.slice(0, -1)}`;

    // Decoding non-UTF-8 strings may throw an exception.
    try {
      absoluteUrl = decodeURIComponent(absoluteUrl);
    } catch (e) {
      // Empty.
    }
    try {
      baseUrl = decodeURIComponent(baseUrl);
    } catch (e) {
      // Empty.
    }

    // The given URL matches the site's base URL, or has a path under the site's
    // base URL.
    return absoluteUrl === baseUrl || absoluteUrl.indexOf(`${baseUrl}/`) === 0;
  };

  /**
   * Formats a string containing a count of items.
   *
   * This function ensures that the string is pluralized correctly. Since
   * {@link Drupal.t} is called by this function, make sure not to pass
   * already-localized strings to it.
   *
   * See the documentation of the server-side
   * \Drupal\Core\StringTranslation\TranslationInterface::formatPlural()
   * function for more details.
   *
   * @param {number} count
   *   The item count to display.
   * @param {string} singular
   *   The string for the singular case. Please make sure it is clear this is
   *   singular, to ease translation (e.g. use "1 new comment" instead of "1
   *   new"). Do not use @count in the singular string.
   * @param {string} plural
   *   The string for the plural case. Please make sure it is clear this is
   *   plural, to ease translation. Use @count in place of the item count, as in
   *   "@count new comments".
   * @param {object} [args]
   *   An object of replacements pairs to make after translation. Incidences
   *   of any key in this array are replaced with the corresponding value.
   *   See {@link Drupal.formatString}.
   *   Note that you do not need to include @count in this array.
   *   This replacement is done automatically for the plural case.
   * @param {object} [options]
   *   The options to pass to the {@link Drupal.t} function.
   *
   * @return {string}
   *   A translated string.
   */
  Drupal.formatPlural = function (count, singular, plural, args, options) {
    args = args || {};
    args['@count'] = count;

    const pluralDelimiter = drupalSettings.pluralDelimiter;
    const translations = Drupal.t(
      singular + pluralDelimiter + plural,
      args,
      options,
    ).split(pluralDelimiter);
    let index = 0;

    // Determine the index of the plural form.
    if (
      typeof drupalTranslations !== 'undefined' &&
      drupalTranslations.pluralFormula
    ) {
      index =
        count in drupalTranslations.pluralFormula
          ? drupalTranslations.pluralFormula[count]
          : drupalTranslations.pluralFormula.default;
    } else if (args['@count'] !== 1) {
      index = 1;
    }

    return translations[index];
  };

  /**
   * Encodes a Drupal path for use in a URL.
   *
   * For aesthetic reasons slashes are not escaped.
   *
   * @param {string} item
   *   Unencoded path.
   *
   * @return {string}
   *   The encoded path.
   */
  Drupal.encodePath = function (item) {
    return window.encodeURIComponent(item).replace(/%2F/g, '/');
  };

  /**
   * Triggers deprecation error.
   *
   * Deprecation errors are only triggered if deprecation errors haven't
   * been suppressed.
   *
   * @param {Object} deprecation
   *   The deprecation options.
   * @param {string} deprecation.message
   *   The deprecation message.
   *
   * @see https://www.drupal.org/core/deprecation#javascript
   */
  Drupal.deprecationError = ({ message }) => {
    if (
      drupalSettings.suppressDeprecationErrors === false &&
      typeof console !== 'undefined' &&
      console.warn
    ) {
      console.warn(`[Deprecation] ${message}`);
    }
  };

  /**
   * Triggers deprecation error when object property is being used.
   *
   * @param {Object} deprecation
   *   The deprecation options.
   * @param {Object} deprecation.target
   *   The targeted object.
   * @param {string} deprecation.deprecatedProperty
   *   A key of the deprecated property.
   * @param {string} deprecation.message
   *   The deprecation message.
   * @returns {Object}
   *
   * @see https://www.drupal.org/core/deprecation#javascript
   */
  Drupal.deprecatedProperty = ({ target, deprecatedProperty, message }) => {
    // Proxy and Reflect are not supported by all browsers. Unsupported browsers
    // are ignored since this is a development feature.
    if (!Proxy || !Reflect) {
      return target;
    }

    return new Proxy(target, {
      get: (target, key, ...rest) => {
        if (key === deprecatedProperty) {
          Drupal.deprecationError({ message });
        }
        return Reflect.get(target, key, ...rest);
      },
    });
  };

  /**
   * Generates the themed representation of a Drupal object.
   *
   * All requests for themed output must go through this function. It examines
   * the request and routes it to the appropriate theme function. If the current
   * theme does not provide an override function, the generic theme function is
   * called.
   *
   * @example
   * <caption>To retrieve the HTML for text that should be emphasized and
   * displayed as a placeholder inside a sentence.</caption>
   * Drupal.theme('placeholder', text);
   *
   * @namespace
   *
   * @param {function} func
   *   The name of the theme function to call.
   * @param {...args}
   *   Additional arguments to pass along to the theme function.
   *
   * @return {string|object|HTMLElement|jQuery}
   *   Any data the theme function returns. This could be a plain HTML string,
   *   but also a complex object.
   */
  Drupal.theme = function (func, ...args) {
    if (func in Drupal.theme) {
      return Drupal.theme[func](...args);
    }
  };

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param {string} str
   *   The text to format (plain-text).
   *
   * @return {string}
   *   The formatted text (html).
   */
  Drupal.theme.placeholder = function (str) {
    return `<em class="placeholder">${Drupal.checkPlain(str)}</em>`;
  };
})(
  Drupal,
  window.drupalSettings,
  window.drupalTranslations,
  window.console,
  window.Proxy,
  window.Reflect,
);
;
// Allow other JavaScript libraries to use $.
if (window.jQuery) {
  jQuery.noConflict();
}

// Class indicating that JS is enabled; used for styling purpose.
document.documentElement.className += ' js';

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it in an anonymous closure.
(function (Drupal, drupalSettings) {
  /**
   * Calls callback when document ready.
   *
   * @param {function} callback
   *   The function to be called on document ready.
   */
  const domReady = (callback) => {
    const listener = () => {
      callback();
      document.removeEventListener('DOMContentLoaded', listener);
    };
    if (document.readyState !== 'loading') {
      setTimeout(callback, 0);
    } else {
      document.addEventListener('DOMContentLoaded', listener);
    }
  };

  // Attach all behaviors.
  domReady(() => {
    Drupal.attachBehaviors(document, drupalSettings);
  });
})(Drupal, window.drupalSettings);
;
/*!
* tabbable 6.0.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):(e="undefined"!=typeof globalThis?globalThis:e||self,function(){var n=e.tabbable,o=e.tabbable={};t(o),o.noConflict=function(){return e.tabbable=n,o}}())}(this,(function(e){"use strict";var t=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],n=t.join(","),o="undefined"==typeof Element,r=o?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,a=!o&&Element.prototype.getRootNode?function(e){return e.getRootNode()}:function(e){return e.ownerDocument},i=function(e,t,o){var a=Array.prototype.slice.apply(e.querySelectorAll(n));return t&&r.call(e,n)&&a.unshift(e),a=a.filter(o)},l=function e(t,o,a){for(var i=[],l=Array.from(t);l.length;){var u=l.shift();if("SLOT"===u.tagName){var c=u.assignedElements(),d=e(c.length?c:u.children,!0,a);a.flatten?i.push.apply(i,d):i.push({scopeParent:u,candidates:d})}else{r.call(u,n)&&a.filter(u)&&(o||!t.includes(u))&&i.push(u);var f=u.shadowRoot||"function"==typeof a.getShadowRoot&&a.getShadowRoot(u),s=!a.shadowRootFilter||a.shadowRootFilter(u);if(f&&s){var p=e(!0===f?u.children:f.children,!0,a);a.flatten?i.push.apply(i,p):i.push({scopeParent:u,candidates:p})}else l.unshift.apply(l,u.children)}}return i},u=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},c=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},d=function(e){return"INPUT"===e.tagName},f=function(e){return function(e){return d(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t,n=e.form||a(e),o=function(e){return n.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("undefined"!=typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var r=function(e,t){for(var n=0;n<e.length;n++)if(e[n].checked&&e[n].form===t)return e[n]}(t,e.form);return!r||r===e}(e)},s=function(e){var t=e.getBoundingClientRect(),n=t.width,o=t.height;return 0===n&&0===o},p=function(e,t){var n=t.displayCheck,o=t.getShadowRoot;if("hidden"===getComputedStyle(e).visibility)return!0;var i=r.call(e,"details>summary:first-of-type")?e.parentElement:e;if(r.call(i,"details:not([open]) *"))return!0;if(n&&"full"!==n&&"legacy-full"!==n){if("non-zero-area"===n)return s(e)}else{if("function"==typeof o){for(var l=e;e;){var u=e.parentElement,c=a(e);if(u&&!u.shadowRoot&&!0===o(u))return s(e);e=e.assignedSlot?e.assignedSlot:u||c===e.ownerDocument?u:c.host}e=l}if(function(e){for(var t,n=a(e).host,o=!!(null!==(t=n)&&void 0!==t&&t.ownerDocument.contains(n)||e.ownerDocument.contains(e));!o&&n;){var r;o=!(null===(r=n=a(n).host)||void 0===r||!r.ownerDocument.contains(n))}return o}(e))return!e.getClientRects().length;if("legacy-full"!==n)return!0}return!1},h=function(e,t){return!(t.disabled||function(e){return d(e)&&"hidden"===e.type}(t)||p(t,e)||function(e){return"DETAILS"===e.tagName&&Array.prototype.slice.apply(e.children).some((function(e){return"SUMMARY"===e.tagName}))}(t)||function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var n=0;n<t.children.length;n++){var o=t.children.item(n);if("LEGEND"===o.tagName)return!!r.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1}(t))},m=function(e,t){return!(f(t)||u(t)<0||!h(e,t))},b=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},y=function e(t){var n=[],o=[];return t.forEach((function(t,r){var a=!!t.scopeParent,i=a?t.scopeParent:t,l=u(i,a),c=a?e(t.candidates):i;0===l?a?n.push.apply(n,c):n.push(i):o.push({documentOrder:r,tabIndex:l,item:t,isScope:a,content:c})})),o.sort(c).reduce((function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e}),[]).concat(n)},g=t.concat("iframe").join(",");e.focusable=function(e,t){return(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:h.bind(null,t),flatten:!0,getShadowRoot:t.getShadowRoot}):i(e,t.includeContainer,h.bind(null,t))},e.isFocusable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,g)&&h(t,e)},e.isTabbable=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return!1!==r.call(e,n)&&m(t,e)},e.tabbable=function(e,t){var n;return n=(t=t||{}).getShadowRoot?l([e],t.includeContainer,{filter:m.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:b}):i(e,t.includeContainer,m.bind(null,t)),y(n)},Object.defineProperty(e,"__esModule",{value:!0})}));

;
/*!
	Colorbox 1.6.4
	license: MIT
	http://www.jacklmoore.com/colorbox
*/
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in x[0]&&!x[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),x.focus())}function c(t){c.str!==t&&(x.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!U){U=$=!0,c(_.get("className")),x.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=Math.max((l!==!1?Math.min(h,a(l,"x")):h)-z-D,0),_.h=Math.max((f!==!1?Math.min(s,a(f,"y")):s)-N-j,0),I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(F).hide(),x.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){x||(V=!1,E=t(i),x=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),L=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),y=n(se,"Wrapper"),b=n(se,"Content").append(F=n(se,"Title"),R=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),S=t('<button type="button"/>').attr({id:Z+"Slideshow"}),L),B=t('<button type="button"/>').attr({id:Z+"Close"}),y.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),M=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(R).add(S)),e.body&&!x.parent().length&&t(e.body).append(v,x.append(y,M))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return x?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;U&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),U&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if($=!0,q=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){L.show()},100),_.get("inline")){var c=t(e).eq(0);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),q=_.get("createImg"),t(q).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(q.height=q.height/i.devicePixelRatio,q.width=q.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){q.height-=q.height*e,q.width-=q.width*e},_.mw&&q.width>_.mw&&(e=(q.width-_.mw)/q.width,o()),_.mh&&q.height>_.mh&&(e=(q.height-_.mh)/q.height,o())),_.h&&(q.style.marginTop=Math.max(_.mh-q.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(q.style.cursor="pointer",t(q).bind("click."+Z,function(){J.next()})),q.style.width=q.width+"px",q.style.height=q.height+"px",h(q)},1)}),q.src=e):e&&M.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,x,y,b,T,C,H,k,W,E,I,M,L,F,R,S,K,P,B,O,_,j,D,N,z,A,q,U,$,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullscreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){S.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),x.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),S.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),x.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,S.hide(),t(),ae.unbind(ne,e).unbind(ie,t),x.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),S.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(x[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(x[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=x.offset();if(E.unbind("resize."+Z),x.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,x.css({position:"fixed"})):(l=h,d=s,x.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),x.css({top:c.top,left:c.left,visibility:"visible"}),y[0].style.width=y[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||x.css(r),x.dequeue().animate(r,{duration:e||0,complete:function(){n(),$=!1,y[0].style.width=_.w+z+D+"px",y[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;U&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(U){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(M.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),M.hide(),t(q).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&x[0].style.removeAttribute("filter")}var n,o,a=W.length;U&&(o=function(){clearTimeout(Q),L.hide(),u(ne),_.get("onComplete")},F.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&R.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?x.fadeTo(g,1,i):i())},"fade"===_.get("transition")?x.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!$&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!$&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){U&&!G&&(G=!0,U=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),x.stop().fadeTo(_.get("fadeOut")||0,0,function(){x.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){x&&(x.stop(),t[Y].close(),x.stop(!1,!0).remove(),v.remove(),G=!1,x=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);;
/**
 * @file
 * Colorbox JS.
 */

(function ($, Drupal, drupalSettings, once) {

  'use strict';

  Drupal.behaviors.initColorbox = {
    attach: function (context, settings) {
      if (!$.isFunction($.colorbox) || typeof settings.colorbox === 'undefined') {
        return;
      }

      if (settings.colorbox.mobiledetect && window.matchMedia) {
        // Disable Colorbox for small screens.
        var mq = window.matchMedia('(max-device-width: ' + settings.colorbox.mobiledevicewidth + ')');
        if (mq.matches) {
          $.colorbox.remove();
          return;
        }
      }

      settings.colorbox.rel = function () {
        return $(this).data('colorbox-gallery')
      };

      $(once('init-colorbox', '.colorbox', context))
        .each(function() {
        // Only images are supported for the "colorbox" class.
        // The "photo" setting forces the href attribute to be treated as an image.
        var extendParams = {
          photo: true
        };
        // If a title attribute is supplied, sanitize it.
        var title = $(this).attr('title');
        if (title) {
          extendParams.title = Drupal.colorbox.sanitizeMarkup(title);
        }
        $(this).colorbox($.extend({}, settings.colorbox, extendParams));
      });

      $('.colorbox', context).colorbox({
        onComplete: function (e) {
          var focus = $('#cboxContent').find('#cboxPrevious').css('display') !== 'none' ? $('#cboxContent').find('#cboxPrevious') : $('#cboxContent').find('#cboxClose');
          focus.focus();

          $('#cboxContent').on('keydown', function (e) {
            var keyCode = e.keyCode || e.which;
            var firstElement = $('#cboxContent').find('#cboxPrevious').last().is(':focus');
            var lastElement = $('#cboxContent').find('#cboxClose').first().is(':focus');
            if (keyCode === 9 && !e.shiftKey && lastElement) {
              e.preventDefault();
              $('#cboxContent').find('#cboxPrevious').first().focus();
            }
            else if (keyCode === 9 && e.shiftKey && firstElement) {
              e.preventDefault();
              $('#cboxContent').find('#cboxClose').first().focus();
            }
          });
        }
      });
    }
  };

  // Create colorbox namespace if it doesn't exist.
  if (!Drupal.hasOwnProperty('colorbox')) {
    Drupal.colorbox = {};
  }

  /**
   * Global function to allow sanitizing captions and control strings.
   *
   * @param markup
   *   String containing potential markup.
   * @return @string
   *  Sanitized string with potentially dangerous markup removed.
   */
  Drupal.colorbox.sanitizeMarkup = function(markup) {
    // If DOMPurify installed, allow some HTML. Otherwise, treat as plain text.
    if (typeof DOMPurify !== 'undefined') {
      var purifyConfig = {
        ALLOWED_TAGS: [
          'a',
          'b',
          'strong',
          'i',
          'em',
          'u',
          'cite',
          'code',
          'br'
        ],
        ALLOWED_ATTR: [
          'href',
          'hreflang',
          'title',
          'target'
        ]
      }
      if (drupalSettings.hasOwnProperty('dompurify_custom_config')) {
        purifyConfig = drupalSettings.dompurify_custom_config;
      }
      return DOMPurify.sanitize(markup, purifyConfig);
    }
    else {
      return Drupal.checkPlain(markup);
    }
  }

})(jQuery, Drupal, drupalSettings, once);
;
/**
 * @file
 * Colorbox Style JS.
 */

(function ($) {

Drupal.behaviors.initColorboxDefaultStyle = {
  attach: function (context, settings) {
    $(context).bind('cbox_complete', function () {
      // Only run if there is a title.
      if ($('#cboxTitle:empty', context).length == false) {
        $('#cboxLoadedContent img', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideDown();
        });
        $('#cboxOverlay', context).bind('mouseover', function () {
          $('#cboxTitle', context).slideUp();
        });
      }
      else {
        $('#cboxTitle', context).hide();
      }
    });
  }
};

})(jQuery);
;
/*!
 * jQuery Once v2.2.3 - http://github.com/robloach/jquery-once
 * @license MIT, GPL-2.0
 *   http://opensource.org/licenses/MIT
 *   http://opensource.org/licenses/GPL-2.0
 */

/**
 * Universal Module Definition
 *
 * jQuery Once has a dependency on jQuery, so we wrap the code with a UMD
 * pattern in order to allow loading jQuery and jQuery Once through a module
 * definition like CommonJS, AMD, or through a global object.
 *
 * @see {@link http://github.com/umdjs/umd}
 */
(function (factory) {
  'use strict';

  if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    // CommonJS
    factory(require('jquery'));
  } else if (typeof define === 'function' && define.amd) {
    // AMD
    /* globals define */
    define(['jquery'], factory);
  } else {
    // Global object
    /* globals jQuery */
    factory(jQuery);
  }
})(function ($) {
  'use strict';

  /**
   * Ensures that the given ID is valid, returning 'once' if one is not given.
   *
   * @param {string} [id=once]
   *   A string representing the ID to check. Defaults to `'once'`.
   *
   * @returns {number} The valid ID name.
   *
   * @throws TypeError when an ID is provided, but not a string.
   * @private
   */
  var checkId = function (id) {
    id = id || 'once';
    if (typeof id !== 'string') {
      throw new TypeError('The jQuery Once id parameter must be a string');
    }

    return id;
  };

  /**
   * Filter elements that have yet to be processed by the given data ID.
   *
   * @param {string} [id=once]
   *   The data ID used to determine whether the given elements have already
   *   been processed or not. Defaults to `'once'`.
   *
   * @returns {jQuery} jQuery collection of elements that have now run once by
   *   the given ID.
   *
   * @example
   * ``` javascript
   * // The following will change the color of each paragraph to red, just once
   * // for the 'changecolor' key.
   * $('p').once('changecolor').css('color', 'red');
   *
   * // .once() will return a set of elements that yet to have the once ID
   * // associated with them. You can return to the original collection set by
   * // using .end().
   * $('p')
   *   .once('changecolorblue')
   *     .css('color', 'blue')
   *   .end()
   *   .css('color', 'red');
   *
   * // To execute a function on the once set, you can use jQuery's each().
   * $('div.calendar').once().each(function () {
   *   // Since there is no once ID provided here, the key will be 'once'.
   * });
   * ```
   *
   * @see removeOnce
   * @see findOnce
   * @this jQuery
   *
   * @global
   * @public
   */
  $.fn.once = function (id) {
    // Build the jQuery Once data name from the provided ID.
    var name = 'jquery-once-' + checkId(id);

    // Find elements that don't have the jQuery Once data applied to them yet.
    return this.filter(function () {
      return $(this).data(name) !== true;
    }).data(name, true);
  };

  /**
   * Removes the once data from elements, based on the given ID.
   *
   * @param {string} [id=once]
   *   A string representing the name of the data ID which should be used when
   *   filtering the elements. This only filters elements that have already been
   *   processed by the once function. The ID should be the same ID that was
   *   originally passed to the once() function. Defaults to `'once'`.
   *
   * @returns {jQuery} jQuery collection of elements that were acted upon to remove their
   *    once data.
   *
   * @example
   * ``` javascript
   * // Remove once data with the 'changecolor' ID. The result set is the
   * // elements that had their once data removed.
   * $('p').removeOnce('changecolor').css('color', '');
   *
   * // Any jQuery function can be performed on the result set.
   * $('div.calendar').removeOnce().each(function () {
   *   // Remove the calendar behavior.
   * });
   * ```
   *
   * @see once
   * @this jQuery
   *
   * @global
   * @public
   */
  $.fn.removeOnce = function (id) {
    // Filter through the elements to find the once'd elements.
    return this.findOnce(id).removeData('jquery-once-' + checkId(id));
  };

  /**
   * Filters elements that have already been processed once.
   *
   * @param {string} [id=once]
   *   A string representing the name of the data id which should be used when
   *   filtering the elements. This only filters elements that have already
   *   been processed by the once function. The id should be the same id that
   *   was originally passed to the once() function. Defaults to 'once'.
   *
   * @returns {jQuery} jQuery collection of elements that have been run once.
   *
   * @example
   * ``` javascript
   * // Find all elements that have been changecolor'ed once.
   * $('p').findOnce('changecolor').each(function () {
   *   // This function is called for all elements that has already once'd.
   * });
   *
   * // Find all elements that have been acted on with the default 'once' key.
   * $('p').findOnce().each(function () {
   *   // This function is called for all elements that have been acted on with
   *   // a 'once' action.
   * });
   * ```
   *
   * @see once
   * @this jQuery
   *
   * @global
   * @public
   */
  $.fn.findOnce = function (id) {
    // Filter the elements by which do have the data.
    var name = 'jquery-once-' + checkId(id);

    return this.filter(function () {
      return $(this).data(name) === true;
    });
  };
});
;
(function(global,factory){typeof exports==="object"&&typeof module!=="undefined"?module.exports=factory():typeof define==="function"&&define.amd?define(factory):(global=typeof globalThis!=="undefined"?globalThis:global||self,global.bootstrap=factory())})(this,function(){"use strict";const NODE_TEXT=3;const SelectorEngine={find(selector,element=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(element,selector))},findOne(selector,element=document.documentElement){return Element.prototype.querySelector.call(element,selector)},children(element,selector){return[].concat(...element.children).filter(child=>child.matches(selector))},parents(element,selector){const parents=[];let ancestor=element.parentNode;while(ancestor&&ancestor.nodeType===Node.ELEMENT_NODE&&ancestor.nodeType!==NODE_TEXT){if(ancestor.matches(selector)){parents.push(ancestor)}ancestor=ancestor.parentNode}return parents},prev(element,selector){let previous=element.previousElementSibling;while(previous){if(previous.matches(selector)){return[previous]}previous=previous.previousElementSibling}return[]},next(element,selector){let next=element.nextElementSibling;while(next){if(next.matches(selector)){return[next]}next=next.nextElementSibling}return[]}};const MAX_UID=1e6;const MILLISECONDS_MULTIPLIER=1e3;const TRANSITION_END="transitionend";const toType=obj=>{if(obj===null||obj===undefined){return`${obj}`}return{}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase()};const getUID=prefix=>{do{prefix+=Math.floor(Math.random()*MAX_UID)}while(document.getElementById(prefix));return prefix};const getSelector=element=>{let selector=element.getAttribute("data-bs-target");if(!selector||selector==="#"){let hrefAttr=element.getAttribute("href");if(!hrefAttr||!hrefAttr.includes("#")&&!hrefAttr.startsWith(".")){return null}if(hrefAttr.includes("#")&&!hrefAttr.startsWith("#")){hrefAttr=`#${hrefAttr.split("#")[1]}`}selector=hrefAttr&&hrefAttr!=="#"?hrefAttr.trim():null}return selector};const getSelectorFromElement=element=>{const selector=getSelector(element);if(selector){return document.querySelector(selector)?selector:null}return null};const getElementFromSelector=element=>{const selector=getSelector(element);return selector?document.querySelector(selector):null};const getTransitionDurationFromElement=element=>{if(!element){return 0}let{transitionDuration,transitionDelay}=window.getComputedStyle(element);const floatTransitionDuration=Number.parseFloat(transitionDuration);const floatTransitionDelay=Number.parseFloat(transitionDelay);if(!floatTransitionDuration&&!floatTransitionDelay){return 0}transitionDuration=transitionDuration.split(",")[0];transitionDelay=transitionDelay.split(",")[0];return(Number.parseFloat(transitionDuration)+Number.parseFloat(transitionDelay))*MILLISECONDS_MULTIPLIER};const triggerTransitionEnd=element=>{element.dispatchEvent(new Event(TRANSITION_END))};const isElement$1=obj=>{if(!obj||typeof obj!=="object"){return false}if(typeof obj.jquery!=="undefined"){obj=obj[0]}return typeof obj.nodeType!=="undefined"};const getElement=obj=>{if(isElement$1(obj)){return obj.jquery?obj[0]:obj}if(typeof obj==="string"&&obj.length>0){return SelectorEngine.findOne(obj)}return null};const emulateTransitionEnd=(element,duration)=>{let called=false;const durationPadding=5;const emulatedDuration=duration+durationPadding;function listener(){called=true;element.removeEventListener(TRANSITION_END,listener)}element.addEventListener(TRANSITION_END,listener);setTimeout(()=>{if(!called){triggerTransitionEnd(element)}},emulatedDuration)};const typeCheckConfig=(componentName,config,configTypes)=>{Object.keys(configTypes).forEach(property=>{const expectedTypes=configTypes[property];const value=config[property];const valueType=value&&isElement$1(value)?"element":toType(value);if(!new RegExp(expectedTypes).test(valueType)){throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`)}})};const isVisible=element=>{if(!element){return false}if(element.style&&element.parentNode&&element.parentNode.style){const elementStyle=getComputedStyle(element);const parentNodeStyle=getComputedStyle(element.parentNode);return elementStyle.display!=="none"&&parentNodeStyle.display!=="none"&&elementStyle.visibility!=="hidden"}return false};const isDisabled=element=>{if(!element||element.nodeType!==Node.ELEMENT_NODE){return true}if(element.classList.contains("disabled")){return true}if(typeof element.disabled!=="undefined"){return element.disabled}return element.hasAttribute("disabled")&&element.getAttribute("disabled")!=="false"};const findShadowRoot=element=>{if(!document.documentElement.attachShadow){return null}if(typeof element.getRootNode==="function"){const root=element.getRootNode();return root instanceof ShadowRoot?root:null}if(element instanceof ShadowRoot){return element}if(!element.parentNode){return null}return findShadowRoot(element.parentNode)};const noop=()=>{};const reflow=element=>element.offsetHeight;const getjQuery=()=>{const{jQuery}=window;if(jQuery&&!document.body.hasAttribute("data-bs-no-jquery")){return jQuery}return null};const onDOMContentLoaded=callback=>{if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",callback)}else{callback()}};const isRTL=()=>document.documentElement.dir==="rtl";const defineJQueryPlugin=plugin=>{onDOMContentLoaded(()=>{const $=getjQuery();if($){const name=plugin.NAME;const JQUERY_NO_CONFLICT=$.fn[name];$.fn[name]=plugin.jQueryInterface;$.fn[name].Constructor=plugin;$.fn[name].noConflict=()=>{$.fn[name]=JQUERY_NO_CONFLICT;return plugin.jQueryInterface}}})};const execute=callback=>{if(typeof callback==="function"){callback()}};const elementMap=new Map;var Data={set(element,key,instance){if(!elementMap.has(element)){elementMap.set(element,new Map)}const instanceMap=elementMap.get(element);if(!instanceMap.has(key)&&instanceMap.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);return}instanceMap.set(key,instance)},get(element,key){if(elementMap.has(element)){return elementMap.get(element).get(key)||null}return null},remove(element,key){if(!elementMap.has(element)){return}const instanceMap=elementMap.get(element);instanceMap.delete(key);if(instanceMap.size===0){elementMap.delete(element)}}};const namespaceRegex=/[^.]*(?=\..*)\.|.*/;const stripNameRegex=/\..*/;const stripUidRegex=/::\d+$/;const eventRegistry={};let uidEvent=1;const customEvents={mouseenter:"mouseover",mouseleave:"mouseout"};const customEventsRegex=/^(mouseenter|mouseleave)/i;const nativeEvents=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function getUidEvent(element,uid){return uid&&`${uid}::${uidEvent++}`||element.uidEvent||uidEvent++}function getEvent(element){const uid=getUidEvent(element);element.uidEvent=uid;eventRegistry[uid]=eventRegistry[uid]||{};return eventRegistry[uid]}function bootstrapHandler(element,fn){return function handler(event){event.delegateTarget=element;if(handler.oneOff){EventHandler.off(element,event.type,fn)}return fn.apply(element,[event])}}function bootstrapDelegationHandler(element,selector,fn){return function handler(event){const domElements=element.querySelectorAll(selector);for(let{target}=event;target&&target!==this;target=target.parentNode){for(let i=domElements.length;i--;){if(domElements[i]===target){event.delegateTarget=target;if(handler.oneOff){EventHandler.off(element,event.type,selector,fn)}return fn.apply(target,[event])}}}return null}}function findHandler(events,handler,delegationSelector=null){const uidEventList=Object.keys(events);for(let i=0,len=uidEventList.length;i<len;i++){const event=events[uidEventList[i]];if(event.originalHandler===handler&&event.delegationSelector===delegationSelector){return event}}return null}function normalizeParams(originalTypeEvent,handler,delegationFn){const delegation=typeof handler==="string";const originalHandler=delegation?delegationFn:handler;let typeEvent=getTypeEvent(originalTypeEvent);const isNative=nativeEvents.has(typeEvent);if(!isNative){typeEvent=originalTypeEvent}return[delegation,originalHandler,typeEvent]}function addHandler(element,originalTypeEvent,handler,delegationFn,oneOff){if(typeof originalTypeEvent!=="string"||!element){return}if(!handler){handler=delegationFn;delegationFn=null}if(customEventsRegex.test(originalTypeEvent)){const wrapFn=fn=>{return function(event){if(!event.relatedTarget||event.relatedTarget!==event.delegateTarget&&!event.delegateTarget.contains(event.relatedTarget)){return fn.call(this,event)}}};if(delegationFn){delegationFn=wrapFn(delegationFn)}else{handler=wrapFn(handler)}}const[delegation,originalHandler,typeEvent]=normalizeParams(originalTypeEvent,handler,delegationFn);const events=getEvent(element);const handlers=events[typeEvent]||(events[typeEvent]={});const previousFn=findHandler(handlers,originalHandler,delegation?handler:null);if(previousFn){previousFn.oneOff=previousFn.oneOff&&oneOff;return}const uid=getUidEvent(originalHandler,originalTypeEvent.replace(namespaceRegex,""));const fn=delegation?bootstrapDelegationHandler(element,handler,delegationFn):bootstrapHandler(element,handler);fn.delegationSelector=delegation?handler:null;fn.originalHandler=originalHandler;fn.oneOff=oneOff;fn.uidEvent=uid;handlers[uid]=fn;element.addEventListener(typeEvent,fn,delegation)}function removeHandler(element,events,typeEvent,handler,delegationSelector){const fn=findHandler(events[typeEvent],handler,delegationSelector);if(!fn){return}element.removeEventListener(typeEvent,fn,Boolean(delegationSelector));delete events[typeEvent][fn.uidEvent]}function removeNamespacedHandlers(element,events,typeEvent,namespace){const storeElementEvent=events[typeEvent]||{};Object.keys(storeElementEvent).forEach(handlerKey=>{if(handlerKey.includes(namespace)){const event=storeElementEvent[handlerKey];removeHandler(element,events,typeEvent,event.originalHandler,event.delegationSelector)}})}function getTypeEvent(event){event=event.replace(stripNameRegex,"");return customEvents[event]||event}const EventHandler={on(element,event,handler,delegationFn){addHandler(element,event,handler,delegationFn,false)},one(element,event,handler,delegationFn){addHandler(element,event,handler,delegationFn,true)},off(element,originalTypeEvent,handler,delegationFn){if(typeof originalTypeEvent!=="string"||!element){return}const[delegation,originalHandler,typeEvent]=normalizeParams(originalTypeEvent,handler,delegationFn);const inNamespace=typeEvent!==originalTypeEvent;const events=getEvent(element);const isNamespace=originalTypeEvent.startsWith(".");if(typeof originalHandler!=="undefined"){if(!events||!events[typeEvent]){return}removeHandler(element,events,typeEvent,originalHandler,delegation?handler:null);return}if(isNamespace){Object.keys(events).forEach(elementEvent=>{removeNamespacedHandlers(element,events,elementEvent,originalTypeEvent.slice(1))})}const storeElementEvent=events[typeEvent]||{};Object.keys(storeElementEvent).forEach(keyHandlers=>{const handlerKey=keyHandlers.replace(stripUidRegex,"");if(!inNamespace||originalTypeEvent.includes(handlerKey)){const event=storeElementEvent[keyHandlers];removeHandler(element,events,typeEvent,event.originalHandler,event.delegationSelector)}})},trigger(element,event,args){if(typeof event!=="string"||!element){return null}const $=getjQuery();const typeEvent=getTypeEvent(event);const inNamespace=event!==typeEvent;const isNative=nativeEvents.has(typeEvent);let jQueryEvent;let bubbles=true;let nativeDispatch=true;let defaultPrevented=false;let evt=null;if(inNamespace&&$){jQueryEvent=$.Event(event,args);$(element).trigger(jQueryEvent);bubbles=!jQueryEvent.isPropagationStopped();nativeDispatch=!jQueryEvent.isImmediatePropagationStopped();defaultPrevented=jQueryEvent.isDefaultPrevented()}if(isNative){evt=document.createEvent("HTMLEvents");evt.initEvent(typeEvent,bubbles,true)}else{evt=new CustomEvent(event,{bubbles:bubbles,cancelable:true})}if(typeof args!=="undefined"){Object.keys(args).forEach(key=>{Object.defineProperty(evt,key,{get(){return args[key]}})})}if(defaultPrevented){evt.preventDefault()}if(nativeDispatch){element.dispatchEvent(evt)}if(evt.defaultPrevented&&typeof jQueryEvent!=="undefined"){jQueryEvent.preventDefault()}return evt}};const VERSION="5.0.1";class BaseComponent{constructor(element){element=getElement(element);if(!element){return}this._element=element;Data.set(this._element,this.constructor.DATA_KEY,this)}dispose(){Data.remove(this._element,this.constructor.DATA_KEY);EventHandler.off(this._element,this.constructor.EVENT_KEY);Object.getOwnPropertyNames(this).forEach(propertyName=>{this[propertyName]=null})}_queueCallback(callback,element,isAnimated=true){if(!isAnimated){execute(callback);return}const transitionDuration=getTransitionDurationFromElement(element);EventHandler.one(element,"transitionend",()=>execute(callback));emulateTransitionEnd(element,transitionDuration)}static getInstance(element){return Data.get(element,this.DATA_KEY)}static get VERSION(){return VERSION}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}}const NAME$c="alert";const DATA_KEY$b="bs.alert";const EVENT_KEY$b=`.${DATA_KEY$b}`;const DATA_API_KEY$8=".data-api";const SELECTOR_DISMISS='[data-bs-dismiss="alert"]';const EVENT_CLOSE=`close${EVENT_KEY$b}`;const EVENT_CLOSED=`closed${EVENT_KEY$b}`;const EVENT_CLICK_DATA_API$7=`click${EVENT_KEY$b}${DATA_API_KEY$8}`;const CLASS_NAME_ALERT="alert";const CLASS_NAME_FADE$6="fade";const CLASS_NAME_SHOW$9="show";class Alert extends BaseComponent{static get NAME(){return NAME$c}close(element){const rootElement=element?this._getRootElement(element):this._element;const customEvent=this._triggerCloseEvent(rootElement);if(customEvent===null||customEvent.defaultPrevented){return}this._removeElement(rootElement)}_getRootElement(element){return getElementFromSelector(element)||element.closest(`.${CLASS_NAME_ALERT}`)}_triggerCloseEvent(element){return EventHandler.trigger(element,EVENT_CLOSE)}_removeElement(element){element.classList.remove(CLASS_NAME_SHOW$9);const isAnimated=element.classList.contains(CLASS_NAME_FADE$6);this._queueCallback(()=>this._destroyElement(element),element,isAnimated)}_destroyElement(element){if(element.parentNode){element.parentNode.removeChild(element)}EventHandler.trigger(element,EVENT_CLOSED)}static jQueryInterface(config){return this.each(function(){let data=Data.get(this,DATA_KEY$b);if(!data){data=new Alert(this)}if(config==="close"){data[config](this)}})}static handleDismiss(alertInstance){return function(event){if(event){event.preventDefault()}alertInstance.close(this)}}}EventHandler.on(document,EVENT_CLICK_DATA_API$7,SELECTOR_DISMISS,Alert.handleDismiss(new Alert));defineJQueryPlugin(Alert);const NAME$b="button";const DATA_KEY$a="bs.button";const EVENT_KEY$a=`.${DATA_KEY$a}`;const DATA_API_KEY$7=".data-api";const CLASS_NAME_ACTIVE$3="active";const SELECTOR_DATA_TOGGLE$5='[data-bs-toggle="button"]';const EVENT_CLICK_DATA_API$6=`click${EVENT_KEY$a}${DATA_API_KEY$7}`;class Button extends BaseComponent{static get NAME(){return NAME$b}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(CLASS_NAME_ACTIVE$3))}static jQueryInterface(config){return this.each(function(){let data=Data.get(this,DATA_KEY$a);if(!data){data=new Button(this)}if(config==="toggle"){data[config]()}})}}EventHandler.on(document,EVENT_CLICK_DATA_API$6,SELECTOR_DATA_TOGGLE$5,event=>{event.preventDefault();const button=event.target.closest(SELECTOR_DATA_TOGGLE$5);let data=Data.get(button,DATA_KEY$a);if(!data){data=new Button(button)}data.toggle()});defineJQueryPlugin(Button);function normalizeData(val){if(val==="true"){return true}if(val==="false"){return false}if(val===Number(val).toString()){return Number(val)}if(val===""||val==="null"){return null}return val}function normalizeDataKey(key){return key.replace(/[A-Z]/g,chr=>`-${chr.toLowerCase()}`)}const Manipulator={setDataAttribute(element,key,value){element.setAttribute(`data-bs-${normalizeDataKey(key)}`,value)},removeDataAttribute(element,key){element.removeAttribute(`data-bs-${normalizeDataKey(key)}`)},getDataAttributes(element){if(!element){return{}}const attributes={};Object.keys(element.dataset).filter(key=>key.startsWith("bs")).forEach(key=>{let pureKey=key.replace(/^bs/,"");pureKey=pureKey.charAt(0).toLowerCase()+pureKey.slice(1,pureKey.length);attributes[pureKey]=normalizeData(element.dataset[key])});return attributes},getDataAttribute(element,key){return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`))},offset(element){const rect=element.getBoundingClientRect();return{top:rect.top+document.body.scrollTop,left:rect.left+document.body.scrollLeft}},position(element){return{top:element.offsetTop,left:element.offsetLeft}}};const NAME$a="carousel";const DATA_KEY$9="bs.carousel";const EVENT_KEY$9=`.${DATA_KEY$9}`;const DATA_API_KEY$6=".data-api";const ARROW_LEFT_KEY="ArrowLeft";const ARROW_RIGHT_KEY="ArrowRight";const TOUCHEVENT_COMPAT_WAIT=500;const SWIPE_THRESHOLD=40;const Default$9={interval:5e3,keyboard:true,slide:false,pause:"hover",wrap:true,touch:true};const DefaultType$9={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"};const ORDER_NEXT="next";const ORDER_PREV="prev";const DIRECTION_LEFT="left";const DIRECTION_RIGHT="right";const EVENT_SLIDE=`slide${EVENT_KEY$9}`;const EVENT_SLID=`slid${EVENT_KEY$9}`;const EVENT_KEYDOWN=`keydown${EVENT_KEY$9}`;const EVENT_MOUSEENTER=`mouseenter${EVENT_KEY$9}`;const EVENT_MOUSELEAVE=`mouseleave${EVENT_KEY$9}`;const EVENT_TOUCHSTART=`touchstart${EVENT_KEY$9}`;const EVENT_TOUCHMOVE=`touchmove${EVENT_KEY$9}`;const EVENT_TOUCHEND=`touchend${EVENT_KEY$9}`;const EVENT_POINTERDOWN=`pointerdown${EVENT_KEY$9}`;const EVENT_POINTERUP=`pointerup${EVENT_KEY$9}`;const EVENT_DRAG_START=`dragstart${EVENT_KEY$9}`;const EVENT_LOAD_DATA_API$2=`load${EVENT_KEY$9}${DATA_API_KEY$6}`;const EVENT_CLICK_DATA_API$5=`click${EVENT_KEY$9}${DATA_API_KEY$6}`;const CLASS_NAME_CAROUSEL="carousel";const CLASS_NAME_ACTIVE$2="active";const CLASS_NAME_SLIDE="slide";const CLASS_NAME_END="carousel-item-end";const CLASS_NAME_START="carousel-item-start";const CLASS_NAME_NEXT="carousel-item-next";const CLASS_NAME_PREV="carousel-item-prev";const CLASS_NAME_POINTER_EVENT="pointer-event";const SELECTOR_ACTIVE$1=".active";const SELECTOR_ACTIVE_ITEM=".active.carousel-item";const SELECTOR_ITEM=".carousel-item";const SELECTOR_ITEM_IMG=".carousel-item img";const SELECTOR_NEXT_PREV=".carousel-item-next, .carousel-item-prev";const SELECTOR_INDICATORS=".carousel-indicators";const SELECTOR_INDICATOR="[data-bs-target]";const SELECTOR_DATA_SLIDE="[data-bs-slide], [data-bs-slide-to]";const SELECTOR_DATA_RIDE='[data-bs-ride="carousel"]';const POINTER_TYPE_TOUCH="touch";const POINTER_TYPE_PEN="pen";class Carousel extends BaseComponent{constructor(element,config){super(element);this._items=null;this._interval=null;this._activeElement=null;this._isPaused=false;this._isSliding=false;this.touchTimeout=null;this.touchStartX=0;this.touchDeltaX=0;this._config=this._getConfig(config);this._indicatorsElement=SelectorEngine.findOne(SELECTOR_INDICATORS,this._element);this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0;this._pointerEvent=Boolean(window.PointerEvent);this._addEventListeners()}static get Default(){return Default$9}static get NAME(){return NAME$a}next(){if(!this._isSliding){this._slide(ORDER_NEXT)}}nextWhenVisible(){if(!document.hidden&&isVisible(this._element)){this.next()}}prev(){if(!this._isSliding){this._slide(ORDER_PREV)}}pause(event){if(!event){this._isPaused=true}if(SelectorEngine.findOne(SELECTOR_NEXT_PREV,this._element)){triggerTransitionEnd(this._element);this.cycle(true)}clearInterval(this._interval);this._interval=null}cycle(event){if(!event){this._isPaused=false}if(this._interval){clearInterval(this._interval);this._interval=null}if(this._config&&this._config.interval&&!this._isPaused){this._updateInterval();this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval)}}to(index){this._activeElement=SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM,this._element);const activeIndex=this._getItemIndex(this._activeElement);if(index>this._items.length-1||index<0){return}if(this._isSliding){EventHandler.one(this._element,EVENT_SLID,()=>this.to(index));return}if(activeIndex===index){this.pause();this.cycle();return}const order=index>activeIndex?ORDER_NEXT:ORDER_PREV;this._slide(order,this._items[index])}_getConfig(config){config={...Default$9,...config};typeCheckConfig(NAME$a,config,DefaultType$9);return config}_handleSwipe(){const absDeltax=Math.abs(this.touchDeltaX);if(absDeltax<=SWIPE_THRESHOLD){return}const direction=absDeltax/this.touchDeltaX;this.touchDeltaX=0;if(!direction){return}this._slide(direction>0?DIRECTION_RIGHT:DIRECTION_LEFT)}_addEventListeners(){if(this._config.keyboard){EventHandler.on(this._element,EVENT_KEYDOWN,event=>this._keydown(event))}if(this._config.pause==="hover"){EventHandler.on(this._element,EVENT_MOUSEENTER,event=>this.pause(event));EventHandler.on(this._element,EVENT_MOUSELEAVE,event=>this.cycle(event))}if(this._config.touch&&this._touchSupported){this._addTouchEventListeners()}}_addTouchEventListeners(){const start=event=>{if(this._pointerEvent&&(event.pointerType===POINTER_TYPE_PEN||event.pointerType===POINTER_TYPE_TOUCH)){this.touchStartX=event.clientX}else if(!this._pointerEvent){this.touchStartX=event.touches[0].clientX}};const move=event=>{this.touchDeltaX=event.touches&&event.touches.length>1?0:event.touches[0].clientX-this.touchStartX};const end=event=>{if(this._pointerEvent&&(event.pointerType===POINTER_TYPE_PEN||event.pointerType===POINTER_TYPE_TOUCH)){this.touchDeltaX=event.clientX-this.touchStartX}this._handleSwipe();if(this._config.pause==="hover"){this.pause();if(this.touchTimeout){clearTimeout(this.touchTimeout)}this.touchTimeout=setTimeout(event=>this.cycle(event),TOUCHEVENT_COMPAT_WAIT+this._config.interval)}};SelectorEngine.find(SELECTOR_ITEM_IMG,this._element).forEach(itemImg=>{EventHandler.on(itemImg,EVENT_DRAG_START,e=>e.preventDefault())});if(this._pointerEvent){EventHandler.on(this._element,EVENT_POINTERDOWN,event=>start(event));EventHandler.on(this._element,EVENT_POINTERUP,event=>end(event));this._element.classList.add(CLASS_NAME_POINTER_EVENT)}else{EventHandler.on(this._element,EVENT_TOUCHSTART,event=>start(event));EventHandler.on(this._element,EVENT_TOUCHMOVE,event=>move(event));EventHandler.on(this._element,EVENT_TOUCHEND,event=>end(event))}}_keydown(event){if(/input|textarea/i.test(event.target.tagName)){return}if(event.key===ARROW_LEFT_KEY){event.preventDefault();this._slide(DIRECTION_RIGHT)}else if(event.key===ARROW_RIGHT_KEY){event.preventDefault();this._slide(DIRECTION_LEFT)}}_getItemIndex(element){this._items=element&&element.parentNode?SelectorEngine.find(SELECTOR_ITEM,element.parentNode):[];return this._items.indexOf(element)}_getItemByOrder(order,activeElement){const isNext=order===ORDER_NEXT;const isPrev=order===ORDER_PREV;const activeIndex=this._getItemIndex(activeElement);const lastItemIndex=this._items.length-1;const isGoingToWrap=isPrev&&activeIndex===0||isNext&&activeIndex===lastItemIndex;if(isGoingToWrap&&!this._config.wrap){return activeElement}const delta=isPrev?-1:1;const itemIndex=(activeIndex+delta)%this._items.length;return itemIndex===-1?this._items[this._items.length-1]:this._items[itemIndex]}_triggerSlideEvent(relatedTarget,eventDirectionName){const targetIndex=this._getItemIndex(relatedTarget);const fromIndex=this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM,this._element));return EventHandler.trigger(this._element,EVENT_SLIDE,{relatedTarget:relatedTarget,direction:eventDirectionName,from:fromIndex,to:targetIndex})}_setActiveIndicatorElement(element){if(this._indicatorsElement){const activeIndicator=SelectorEngine.findOne(SELECTOR_ACTIVE$1,this._indicatorsElement);activeIndicator.classList.remove(CLASS_NAME_ACTIVE$2);activeIndicator.removeAttribute("aria-current");const indicators=SelectorEngine.find(SELECTOR_INDICATOR,this._indicatorsElement);for(let i=0;i<indicators.length;i++){if(Number.parseInt(indicators[i].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(element)){indicators[i].classList.add(CLASS_NAME_ACTIVE$2);indicators[i].setAttribute("aria-current","true");break}}}}_updateInterval(){const element=this._activeElement||SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM,this._element);if(!element){return}const elementInterval=Number.parseInt(element.getAttribute("data-bs-interval"),10);if(elementInterval){this._config.defaultInterval=this._config.defaultInterval||this._config.interval;this._config.interval=elementInterval}else{this._config.interval=this._config.defaultInterval||this._config.interval}}_slide(directionOrOrder,element){const order=this._directionToOrder(directionOrOrder);const activeElement=SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM,this._element);const activeElementIndex=this._getItemIndex(activeElement);const nextElement=element||this._getItemByOrder(order,activeElement);const nextElementIndex=this._getItemIndex(nextElement);const isCycling=Boolean(this._interval);const isNext=order===ORDER_NEXT;const directionalClassName=isNext?CLASS_NAME_START:CLASS_NAME_END;const orderClassName=isNext?CLASS_NAME_NEXT:CLASS_NAME_PREV;const eventDirectionName=this._orderToDirection(order);if(nextElement&&nextElement.classList.contains(CLASS_NAME_ACTIVE$2)){this._isSliding=false;return}const slideEvent=this._triggerSlideEvent(nextElement,eventDirectionName);if(slideEvent.defaultPrevented){return}if(!activeElement||!nextElement){return}this._isSliding=true;if(isCycling){this.pause()}this._setActiveIndicatorElement(nextElement);this._activeElement=nextElement;const triggerSlidEvent=()=>{EventHandler.trigger(this._element,EVENT_SLID,{relatedTarget:nextElement,direction:eventDirectionName,from:activeElementIndex,to:nextElementIndex})};if(this._element.classList.contains(CLASS_NAME_SLIDE)){nextElement.classList.add(orderClassName);reflow(nextElement);activeElement.classList.add(directionalClassName);nextElement.classList.add(directionalClassName);const completeCallBack=()=>{nextElement.classList.remove(directionalClassName,orderClassName);nextElement.classList.add(CLASS_NAME_ACTIVE$2);activeElement.classList.remove(CLASS_NAME_ACTIVE$2,orderClassName,directionalClassName);this._isSliding=false;setTimeout(triggerSlidEvent,0)};this._queueCallback(completeCallBack,activeElement,true)}else{activeElement.classList.remove(CLASS_NAME_ACTIVE$2);nextElement.classList.add(CLASS_NAME_ACTIVE$2);this._isSliding=false;triggerSlidEvent()}if(isCycling){this.cycle()}}_directionToOrder(direction){if(![DIRECTION_RIGHT,DIRECTION_LEFT].includes(direction)){return direction}if(isRTL()){return direction===DIRECTION_LEFT?ORDER_PREV:ORDER_NEXT}return direction===DIRECTION_LEFT?ORDER_NEXT:ORDER_PREV}_orderToDirection(order){if(![ORDER_NEXT,ORDER_PREV].includes(order)){return order}if(isRTL()){return order===ORDER_PREV?DIRECTION_LEFT:DIRECTION_RIGHT}return order===ORDER_PREV?DIRECTION_RIGHT:DIRECTION_LEFT}static carouselInterface(element,config){let data=Data.get(element,DATA_KEY$9);let _config={...Default$9,...Manipulator.getDataAttributes(element)};if(typeof config==="object"){_config={..._config,...config}}const action=typeof config==="string"?config:_config.slide;if(!data){data=new Carousel(element,_config)}if(typeof config==="number"){data.to(config)}else if(typeof action==="string"){if(typeof data[action]==="undefined"){throw new TypeError(`No method named "${action}"`)}data[action]()}else if(_config.interval&&_config.ride){data.pause();data.cycle()}}static jQueryInterface(config){return this.each(function(){Carousel.carouselInterface(this,config)})}static dataApiClickHandler(event){const target=getElementFromSelector(this);if(!target||!target.classList.contains(CLASS_NAME_CAROUSEL)){return}const config={...Manipulator.getDataAttributes(target),...Manipulator.getDataAttributes(this)};const slideIndex=this.getAttribute("data-bs-slide-to");if(slideIndex){config.interval=false}Carousel.carouselInterface(target,config);if(slideIndex){Data.get(target,DATA_KEY$9).to(slideIndex)}event.preventDefault()}}EventHandler.on(document,EVENT_CLICK_DATA_API$5,SELECTOR_DATA_SLIDE,Carousel.dataApiClickHandler);EventHandler.on(window,EVENT_LOAD_DATA_API$2,()=>{const carousels=SelectorEngine.find(SELECTOR_DATA_RIDE);for(let i=0,len=carousels.length;i<len;i++){Carousel.carouselInterface(carousels[i],Data.get(carousels[i],DATA_KEY$9))}});defineJQueryPlugin(Carousel);const NAME$9="collapse";const DATA_KEY$8="bs.collapse";const EVENT_KEY$8=`.${DATA_KEY$8}`;const DATA_API_KEY$5=".data-api";const Default$8={toggle:true,parent:""};const DefaultType$8={toggle:"boolean",parent:"(string|element)"};const EVENT_SHOW$5=`show${EVENT_KEY$8}`;const EVENT_SHOWN$5=`shown${EVENT_KEY$8}`;const EVENT_HIDE$5=`hide${EVENT_KEY$8}`;const EVENT_HIDDEN$5=`hidden${EVENT_KEY$8}`;const EVENT_CLICK_DATA_API$4=`click${EVENT_KEY$8}${DATA_API_KEY$5}`;const CLASS_NAME_SHOW$8="show";const CLASS_NAME_COLLAPSE="collapse";const CLASS_NAME_COLLAPSING="collapsing";const CLASS_NAME_COLLAPSED="collapsed";const WIDTH="width";const HEIGHT="height";const SELECTOR_ACTIVES=".show, .collapsing";const SELECTOR_DATA_TOGGLE$4='[data-bs-toggle="collapse"]';class Collapse extends BaseComponent{constructor(element,config){super(element);this._isTransitioning=false;this._config=this._getConfig(config);this._triggerArray=SelectorEngine.find(`${SELECTOR_DATA_TOGGLE$4}[href="#${this._element.id}"],`+`${SELECTOR_DATA_TOGGLE$4}[data-bs-target="#${this._element.id}"]`);const toggleList=SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);for(let i=0,len=toggleList.length;i<len;i++){const elem=toggleList[i];const selector=getSelectorFromElement(elem);const filterElement=SelectorEngine.find(selector).filter(foundElem=>foundElem===this._element);if(selector!==null&&filterElement.length){this._selector=selector;this._triggerArray.push(elem)}}this._parent=this._config.parent?this._getParent():null;if(!this._config.parent){this._addAriaAndCollapsedClass(this._element,this._triggerArray)}if(this._config.toggle){this.toggle()}}static get Default(){return Default$8}static get NAME(){return NAME$9}toggle(){if(this._element.classList.contains(CLASS_NAME_SHOW$8)){this.hide()}else{this.show()}}show(){if(this._isTransitioning||this._element.classList.contains(CLASS_NAME_SHOW$8)){return}let actives;let activesData;if(this._parent){actives=SelectorEngine.find(SELECTOR_ACTIVES,this._parent).filter(elem=>{if(typeof this._config.parent==="string"){return elem.getAttribute("data-bs-parent")===this._config.parent}return elem.classList.contains(CLASS_NAME_COLLAPSE)});if(actives.length===0){actives=null}}const container=SelectorEngine.findOne(this._selector);if(actives){const tempActiveData=actives.find(elem=>container!==elem);activesData=tempActiveData?Data.get(tempActiveData,DATA_KEY$8):null;if(activesData&&activesData._isTransitioning){return}}const startEvent=EventHandler.trigger(this._element,EVENT_SHOW$5);if(startEvent.defaultPrevented){return}if(actives){actives.forEach(elemActive=>{if(container!==elemActive){Collapse.collapseInterface(elemActive,"hide")}if(!activesData){Data.set(elemActive,DATA_KEY$8,null)}})}const dimension=this._getDimension();this._element.classList.remove(CLASS_NAME_COLLAPSE);this._element.classList.add(CLASS_NAME_COLLAPSING);this._element.style[dimension]=0;if(this._triggerArray.length){this._triggerArray.forEach(element=>{element.classList.remove(CLASS_NAME_COLLAPSED);element.setAttribute("aria-expanded",true)})}this.setTransitioning(true);const complete=()=>{this._element.classList.remove(CLASS_NAME_COLLAPSING);this._element.classList.add(CLASS_NAME_COLLAPSE,CLASS_NAME_SHOW$8);this._element.style[dimension]="";this.setTransitioning(false);EventHandler.trigger(this._element,EVENT_SHOWN$5)};const capitalizedDimension=dimension[0].toUpperCase()+dimension.slice(1);const scrollSize=`scroll${capitalizedDimension}`;this._queueCallback(complete,this._element,true);this._element.style[dimension]=`${this._element[scrollSize]}px`}hide(){if(this._isTransitioning||!this._element.classList.contains(CLASS_NAME_SHOW$8)){return}const startEvent=EventHandler.trigger(this._element,EVENT_HIDE$5);if(startEvent.defaultPrevented){return}const dimension=this._getDimension();this._element.style[dimension]=`${this._element.getBoundingClientRect()[dimension]}px`;reflow(this._element);this._element.classList.add(CLASS_NAME_COLLAPSING);this._element.classList.remove(CLASS_NAME_COLLAPSE,CLASS_NAME_SHOW$8);const triggerArrayLength=this._triggerArray.length;if(triggerArrayLength>0){for(let i=0;i<triggerArrayLength;i++){const trigger=this._triggerArray[i];const elem=getElementFromSelector(trigger);if(elem&&!elem.classList.contains(CLASS_NAME_SHOW$8)){trigger.classList.add(CLASS_NAME_COLLAPSED);trigger.setAttribute("aria-expanded",false)}}}this.setTransitioning(true);const complete=()=>{this.setTransitioning(false);this._element.classList.remove(CLASS_NAME_COLLAPSING);this._element.classList.add(CLASS_NAME_COLLAPSE);EventHandler.trigger(this._element,EVENT_HIDDEN$5)};this._element.style[dimension]="";this._queueCallback(complete,this._element,true)}setTransitioning(isTransitioning){this._isTransitioning=isTransitioning}_getConfig(config){config={...Default$8,...config};config.toggle=Boolean(config.toggle);typeCheckConfig(NAME$9,config,DefaultType$8);return config}_getDimension(){return this._element.classList.contains(WIDTH)?WIDTH:HEIGHT}_getParent(){let{parent}=this._config;parent=getElement(parent);const selector=`${SELECTOR_DATA_TOGGLE$4}[data-bs-parent="${parent}"]`;SelectorEngine.find(selector,parent).forEach(element=>{const selected=getElementFromSelector(element);this._addAriaAndCollapsedClass(selected,[element])});return parent}_addAriaAndCollapsedClass(element,triggerArray){if(!element||!triggerArray.length){return}const isOpen=element.classList.contains(CLASS_NAME_SHOW$8);triggerArray.forEach(elem=>{if(isOpen){elem.classList.remove(CLASS_NAME_COLLAPSED)}else{elem.classList.add(CLASS_NAME_COLLAPSED)}elem.setAttribute("aria-expanded",isOpen)})}static collapseInterface(element,config){let data=Data.get(element,DATA_KEY$8);const _config={...Default$8,...Manipulator.getDataAttributes(element),...typeof config==="object"&&config?config:{}};if(!data&&_config.toggle&&typeof config==="string"&&/show|hide/.test(config)){_config.toggle=false}if(!data){data=new Collapse(element,_config)}if(typeof config==="string"){if(typeof data[config]==="undefined"){throw new TypeError(`No method named "${config}"`)}data[config]()}}static jQueryInterface(config){return this.each(function(){Collapse.collapseInterface(this,config)})}}EventHandler.on(document,EVENT_CLICK_DATA_API$4,SELECTOR_DATA_TOGGLE$4,function(event){if(event.target.tagName==="A"||event.delegateTarget&&event.delegateTarget.tagName==="A"){event.preventDefault()}const triggerData=Manipulator.getDataAttributes(this);const selector=getSelectorFromElement(this);const selectorElements=SelectorEngine.find(selector);selectorElements.forEach(element=>{const data=Data.get(element,DATA_KEY$8);let config;if(data){if(data._parent===null&&typeof triggerData.parent==="string"){data._config.parent=triggerData.parent;data._parent=data._getParent()}config="toggle"}else{config=triggerData}Collapse.collapseInterface(element,config)})});defineJQueryPlugin(Collapse);var top="top";var bottom="bottom";var right="right";var left="left";var auto="auto";var basePlacements=[top,bottom,right,left];var start="start";var end="end";var clippingParents="clippingParents";var viewport="viewport";var popper="popper";var reference="reference";var variationPlacements=basePlacements.reduce(function(acc,placement){return acc.concat([placement+"-"+start,placement+"-"+end])},[]);var placements=[].concat(basePlacements,[auto]).reduce(function(acc,placement){return acc.concat([placement,placement+"-"+start,placement+"-"+end])},[]);var beforeRead="beforeRead";var read="read";var afterRead="afterRead";var beforeMain="beforeMain";var main="main";var afterMain="afterMain";var beforeWrite="beforeWrite";var write="write";var afterWrite="afterWrite";var modifierPhases=[beforeRead,read,afterRead,beforeMain,main,afterMain,beforeWrite,write,afterWrite];function getNodeName(element){return element?(element.nodeName||"").toLowerCase():null}function getWindow(node){if(node==null){return window}if(node.toString()!=="[object Window]"){var ownerDocument=node.ownerDocument;return ownerDocument?ownerDocument.defaultView||window:window}return node}function isElement(node){var OwnElement=getWindow(node).Element;return node instanceof OwnElement||node instanceof Element}function isHTMLElement(node){var OwnElement=getWindow(node).HTMLElement;return node instanceof OwnElement||node instanceof HTMLElement}function isShadowRoot(node){if(typeof ShadowRoot==="undefined"){return false}var OwnElement=getWindow(node).ShadowRoot;return node instanceof OwnElement||node instanceof ShadowRoot}function applyStyles(_ref){var state=_ref.state;Object.keys(state.elements).forEach(function(name){var style=state.styles[name]||{};var attributes=state.attributes[name]||{};var element=state.elements[name];if(!isHTMLElement(element)||!getNodeName(element)){return}Object.assign(element.style,style);Object.keys(attributes).forEach(function(name){var value=attributes[name];if(value===false){element.removeAttribute(name)}else{element.setAttribute(name,value===true?"":value)}})})}function effect$2(_ref2){var state=_ref2.state;var initialStyles={popper:{position:state.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(state.elements.popper.style,initialStyles.popper);state.styles=initialStyles;if(state.elements.arrow){Object.assign(state.elements.arrow.style,initialStyles.arrow)}return function(){Object.keys(state.elements).forEach(function(name){var element=state.elements[name];var attributes=state.attributes[name]||{};var styleProperties=Object.keys(state.styles.hasOwnProperty(name)?state.styles[name]:initialStyles[name]);var style=styleProperties.reduce(function(style,property){style[property]="";return style},{});if(!isHTMLElement(element)||!getNodeName(element)){return}Object.assign(element.style,style);Object.keys(attributes).forEach(function(attribute){element.removeAttribute(attribute)})})}}var applyStyles$1={name:"applyStyles",enabled:true,phase:"write",fn:applyStyles,effect:effect$2,requires:["computeStyles"]};function getBasePlacement(placement){return placement.split("-")[0]}function getBoundingClientRect(element){var rect=element.getBoundingClientRect();return{width:rect.width,height:rect.height,top:rect.top,right:rect.right,bottom:rect.bottom,left:rect.left,x:rect.left,y:rect.top}}function getLayoutRect(element){var clientRect=getBoundingClientRect(element);var width=element.offsetWidth;var height=element.offsetHeight;if(Math.abs(clientRect.width-width)<=1){width=clientRect.width}if(Math.abs(clientRect.height-height)<=1){height=clientRect.height}return{x:element.offsetLeft,y:element.offsetTop,width:width,height:height}}function contains(parent,child){var rootNode=child.getRootNode&&child.getRootNode();if(parent.contains(child)){return true}else if(rootNode&&isShadowRoot(rootNode)){var next=child;do{if(next&&parent.isSameNode(next)){return true}next=next.parentNode||next.host}while(next)}return false}function getComputedStyle$1(element){return getWindow(element).getComputedStyle(element)}function isTableElement(element){return["table","td","th"].indexOf(getNodeName(element))>=0}function getDocumentElement(element){return((isElement(element)?element.ownerDocument:element.document)||window.document).documentElement}function getParentNode(element){if(getNodeName(element)==="html"){return element}return element.assignedSlot||element.parentNode||(isShadowRoot(element)?element.host:null)||getDocumentElement(element)}function getTrueOffsetParent(element){if(!isHTMLElement(element)||getComputedStyle$1(element).position==="fixed"){return null}return element.offsetParent}function getContainingBlock(element){var isFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1;var isIE=navigator.userAgent.indexOf("Trident")!==-1;if(isIE&&isHTMLElement(element)){var elementCss=getComputedStyle$1(element);if(elementCss.position==="fixed"){return null}}var currentNode=getParentNode(element);while(isHTMLElement(currentNode)&&["html","body"].indexOf(getNodeName(currentNode))<0){var css=getComputedStyle$1(currentNode);if(css.transform!=="none"||css.perspective!=="none"||css.contain==="paint"||["transform","perspective"].indexOf(css.willChange)!==-1||isFirefox&&css.willChange==="filter"||isFirefox&&css.filter&&css.filter!=="none"){return currentNode}else{currentNode=currentNode.parentNode}}return null}function getOffsetParent(element){var window=getWindow(element);var offsetParent=getTrueOffsetParent(element);while(offsetParent&&isTableElement(offsetParent)&&getComputedStyle$1(offsetParent).position==="static"){offsetParent=getTrueOffsetParent(offsetParent)}if(offsetParent&&(getNodeName(offsetParent)==="html"||getNodeName(offsetParent)==="body"&&getComputedStyle$1(offsetParent).position==="static")){return window}return offsetParent||getContainingBlock(element)||window}function getMainAxisFromPlacement(placement){return["top","bottom"].indexOf(placement)>=0?"x":"y"}var max=Math.max;var min=Math.min;var round=Math.round;function within(min$1,value,max$1){return max(min$1,min(value,max$1))}function getFreshSideObject(){return{top:0,right:0,bottom:0,left:0}}function mergePaddingObject(paddingObject){return Object.assign({},getFreshSideObject(),paddingObject)}function expandToHashMap(value,keys){return keys.reduce(function(hashMap,key){hashMap[key]=value;return hashMap},{})}var toPaddingObject=function toPaddingObject(padding,state){padding=typeof padding==="function"?padding(Object.assign({},state.rects,{placement:state.placement})):padding;return mergePaddingObject(typeof padding!=="number"?padding:expandToHashMap(padding,basePlacements))};function arrow(_ref){var _state$modifiersData$;var state=_ref.state,name=_ref.name,options=_ref.options;var arrowElement=state.elements.arrow;var popperOffsets=state.modifiersData.popperOffsets;var basePlacement=getBasePlacement(state.placement);var axis=getMainAxisFromPlacement(basePlacement);var isVertical=[left,right].indexOf(basePlacement)>=0;var len=isVertical?"height":"width";if(!arrowElement||!popperOffsets){return}var paddingObject=toPaddingObject(options.padding,state);var arrowRect=getLayoutRect(arrowElement);var minProp=axis==="y"?top:left;var maxProp=axis==="y"?bottom:right;var endDiff=state.rects.reference[len]+state.rects.reference[axis]-popperOffsets[axis]-state.rects.popper[len];var startDiff=popperOffsets[axis]-state.rects.reference[axis];var arrowOffsetParent=getOffsetParent(arrowElement);var clientSize=arrowOffsetParent?axis==="y"?arrowOffsetParent.clientHeight||0:arrowOffsetParent.clientWidth||0:0;var centerToReference=endDiff/2-startDiff/2;var min=paddingObject[minProp];var max=clientSize-arrowRect[len]-paddingObject[maxProp];var center=clientSize/2-arrowRect[len]/2+centerToReference;var offset=within(min,center,max);var axisProp=axis;state.modifiersData[name]=(_state$modifiersData$={},_state$modifiersData$[axisProp]=offset,_state$modifiersData$.centerOffset=offset-center,_state$modifiersData$)}function effect$1(_ref2){var state=_ref2.state,options=_ref2.options;var _options$element=options.element,arrowElement=_options$element===void 0?"[data-popper-arrow]":_options$element;if(arrowElement==null){return}if(typeof arrowElement==="string"){arrowElement=state.elements.popper.querySelector(arrowElement);if(!arrowElement){return}}if(!contains(state.elements.popper,arrowElement)){return}state.elements.arrow=arrowElement}var arrow$1={name:"arrow",enabled:true,phase:"main",fn:arrow,effect:effect$1,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};var unsetSides={top:"auto",right:"auto",bottom:"auto",left:"auto"};function roundOffsetsByDPR(_ref){var x=_ref.x,y=_ref.y;var win=window;var dpr=win.devicePixelRatio||1;return{x:round(round(x*dpr)/dpr)||0,y:round(round(y*dpr)/dpr)||0}}function mapToStyles(_ref2){var _Object$assign2;var popper=_ref2.popper,popperRect=_ref2.popperRect,placement=_ref2.placement,offsets=_ref2.offsets,position=_ref2.position,gpuAcceleration=_ref2.gpuAcceleration,adaptive=_ref2.adaptive,roundOffsets=_ref2.roundOffsets;var _ref3=roundOffsets===true?roundOffsetsByDPR(offsets):typeof roundOffsets==="function"?roundOffsets(offsets):offsets,_ref3$x=_ref3.x,x=_ref3$x===void 0?0:_ref3$x,_ref3$y=_ref3.y,y=_ref3$y===void 0?0:_ref3$y;var hasX=offsets.hasOwnProperty("x");var hasY=offsets.hasOwnProperty("y");var sideX=left;var sideY=top;var win=window;if(adaptive){var offsetParent=getOffsetParent(popper);var heightProp="clientHeight";var widthProp="clientWidth";if(offsetParent===getWindow(popper)){offsetParent=getDocumentElement(popper);if(getComputedStyle$1(offsetParent).position!=="static"){heightProp="scrollHeight";widthProp="scrollWidth"}}offsetParent=offsetParent;if(placement===top){sideY=bottom;y-=offsetParent[heightProp]-popperRect.height;y*=gpuAcceleration?1:-1}if(placement===left){sideX=right;x-=offsetParent[widthProp]-popperRect.width;x*=gpuAcceleration?1:-1}}var commonStyles=Object.assign({position:position},adaptive&&unsetSides);if(gpuAcceleration){var _Object$assign;return Object.assign({},commonStyles,(_Object$assign={},_Object$assign[sideY]=hasY?"0":"",_Object$assign[sideX]=hasX?"0":"",_Object$assign.transform=(win.devicePixelRatio||1)<2?"translate("+x+"px, "+y+"px)":"translate3d("+x+"px, "+y+"px, 0)",_Object$assign))}return Object.assign({},commonStyles,(_Object$assign2={},_Object$assign2[sideY]=hasY?y+"px":"",_Object$assign2[sideX]=hasX?x+"px":"",_Object$assign2.transform="",_Object$assign2))}function computeStyles(_ref4){var state=_ref4.state,options=_ref4.options;var _options$gpuAccelerat=options.gpuAcceleration,gpuAcceleration=_options$gpuAccelerat===void 0?true:_options$gpuAccelerat,_options$adaptive=options.adaptive,adaptive=_options$adaptive===void 0?true:_options$adaptive,_options$roundOffsets=options.roundOffsets,roundOffsets=_options$roundOffsets===void 0?true:_options$roundOffsets;var commonStyles={placement:getBasePlacement(state.placement),popper:state.elements.popper,popperRect:state.rects.popper,gpuAcceleration:gpuAcceleration};if(state.modifiersData.popperOffsets!=null){state.styles.popper=Object.assign({},state.styles.popper,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.popperOffsets,position:state.options.strategy,adaptive:adaptive,roundOffsets:roundOffsets})))}if(state.modifiersData.arrow!=null){state.styles.arrow=Object.assign({},state.styles.arrow,mapToStyles(Object.assign({},commonStyles,{offsets:state.modifiersData.arrow,position:"absolute",adaptive:false,roundOffsets:roundOffsets})))}state.attributes.popper=Object.assign({},state.attributes.popper,{"data-popper-placement":state.placement})}var computeStyles$1={name:"computeStyles",enabled:true,phase:"beforeWrite",fn:computeStyles,data:{}};var passive={passive:true};function effect(_ref){var state=_ref.state,instance=_ref.instance,options=_ref.options;var _options$scroll=options.scroll,scroll=_options$scroll===void 0?true:_options$scroll,_options$resize=options.resize,resize=_options$resize===void 0?true:_options$resize;var window=getWindow(state.elements.popper);var scrollParents=[].concat(state.scrollParents.reference,state.scrollParents.popper);if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.addEventListener("scroll",instance.update,passive)})}if(resize){window.addEventListener("resize",instance.update,passive)}return function(){if(scroll){scrollParents.forEach(function(scrollParent){scrollParent.removeEventListener("scroll",instance.update,passive)})}if(resize){window.removeEventListener("resize",instance.update,passive)}}}var eventListeners={name:"eventListeners",enabled:true,phase:"write",fn:function fn(){},effect:effect,data:{}};var hash$1={left:"right",right:"left",bottom:"top",top:"bottom"};function getOppositePlacement(placement){return placement.replace(/left|right|bottom|top/g,function(matched){return hash$1[matched]})}var hash={start:"end",end:"start"};function getOppositeVariationPlacement(placement){return placement.replace(/start|end/g,function(matched){return hash[matched]})}function getWindowScroll(node){var win=getWindow(node);var scrollLeft=win.pageXOffset;var scrollTop=win.pageYOffset;return{scrollLeft:scrollLeft,scrollTop:scrollTop}}function getWindowScrollBarX(element){return getBoundingClientRect(getDocumentElement(element)).left+getWindowScroll(element).scrollLeft}function getViewportRect(element){var win=getWindow(element);var html=getDocumentElement(element);var visualViewport=win.visualViewport;var width=html.clientWidth;var height=html.clientHeight;var x=0;var y=0;if(visualViewport){width=visualViewport.width;height=visualViewport.height;if(!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){x=visualViewport.offsetLeft;y=visualViewport.offsetTop}}return{width:width,height:height,x:x+getWindowScrollBarX(element),y:y}}function getDocumentRect(element){var _element$ownerDocumen;var html=getDocumentElement(element);var winScroll=getWindowScroll(element);var body=(_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body;var width=max(html.scrollWidth,html.clientWidth,body?body.scrollWidth:0,body?body.clientWidth:0);var height=max(html.scrollHeight,html.clientHeight,body?body.scrollHeight:0,body?body.clientHeight:0);var x=-winScroll.scrollLeft+getWindowScrollBarX(element);var y=-winScroll.scrollTop;if(getComputedStyle$1(body||html).direction==="rtl"){x+=max(html.clientWidth,body?body.clientWidth:0)-width}return{width:width,height:height,x:x,y:y}}function isScrollParent(element){var _getComputedStyle=getComputedStyle$1(element),overflow=_getComputedStyle.overflow,overflowX=_getComputedStyle.overflowX,overflowY=_getComputedStyle.overflowY;return/auto|scroll|overlay|hidden/.test(overflow+overflowY+overflowX)}function getScrollParent(node){if(["html","body","#document"].indexOf(getNodeName(node))>=0){return node.ownerDocument.body}if(isHTMLElement(node)&&isScrollParent(node)){return node}return getScrollParent(getParentNode(node))}function listScrollParents(element,list){var _element$ownerDocumen;if(list===void 0){list=[]}var scrollParent=getScrollParent(element);var isBody=scrollParent===((_element$ownerDocumen=element.ownerDocument)==null?void 0:_element$ownerDocumen.body);var win=getWindow(scrollParent);var target=isBody?[win].concat(win.visualViewport||[],isScrollParent(scrollParent)?scrollParent:[]):scrollParent;var updatedList=list.concat(target);return isBody?updatedList:updatedList.concat(listScrollParents(getParentNode(target)))}function rectToClientRect(rect){return Object.assign({},rect,{left:rect.x,top:rect.y,right:rect.x+rect.width,bottom:rect.y+rect.height})}function getInnerBoundingClientRect(element){var rect=getBoundingClientRect(element);rect.top=rect.top+element.clientTop;rect.left=rect.left+element.clientLeft;rect.bottom=rect.top+element.clientHeight;rect.right=rect.left+element.clientWidth;rect.width=element.clientWidth;rect.height=element.clientHeight;rect.x=rect.left;rect.y=rect.top;return rect}function getClientRectFromMixedType(element,clippingParent){return clippingParent===viewport?rectToClientRect(getViewportRect(element)):isHTMLElement(clippingParent)?getInnerBoundingClientRect(clippingParent):rectToClientRect(getDocumentRect(getDocumentElement(element)))}function getClippingParents(element){var clippingParents=listScrollParents(getParentNode(element));var canEscapeClipping=["absolute","fixed"].indexOf(getComputedStyle$1(element).position)>=0;var clipperElement=canEscapeClipping&&isHTMLElement(element)?getOffsetParent(element):element;if(!isElement(clipperElement)){return[]}return clippingParents.filter(function(clippingParent){return isElement(clippingParent)&&contains(clippingParent,clipperElement)&&getNodeName(clippingParent)!=="body"})}function getClippingRect(element,boundary,rootBoundary){var mainClippingParents=boundary==="clippingParents"?getClippingParents(element):[].concat(boundary);var clippingParents=[].concat(mainClippingParents,[rootBoundary]);var firstClippingParent=clippingParents[0];var clippingRect=clippingParents.reduce(function(accRect,clippingParent){var rect=getClientRectFromMixedType(element,clippingParent);accRect.top=max(rect.top,accRect.top);accRect.right=min(rect.right,accRect.right);accRect.bottom=min(rect.bottom,accRect.bottom);accRect.left=max(rect.left,accRect.left);return accRect},getClientRectFromMixedType(element,firstClippingParent));clippingRect.width=clippingRect.right-clippingRect.left;clippingRect.height=clippingRect.bottom-clippingRect.top;clippingRect.x=clippingRect.left;clippingRect.y=clippingRect.top;return clippingRect}function getVariation(placement){return placement.split("-")[1]}function computeOffsets(_ref){var reference=_ref.reference,element=_ref.element,placement=_ref.placement;var basePlacement=placement?getBasePlacement(placement):null;var variation=placement?getVariation(placement):null;var commonX=reference.x+reference.width/2-element.width/2;var commonY=reference.y+reference.height/2-element.height/2;var offsets;switch(basePlacement){case top:offsets={x:commonX,y:reference.y-element.height};break;case bottom:offsets={x:commonX,y:reference.y+reference.height};break;case right:offsets={x:reference.x+reference.width,y:commonY};break;case left:offsets={x:reference.x-element.width,y:commonY};break;default:offsets={x:reference.x,y:reference.y}}var mainAxis=basePlacement?getMainAxisFromPlacement(basePlacement):null;if(mainAxis!=null){var len=mainAxis==="y"?"height":"width";switch(variation){case start:offsets[mainAxis]=offsets[mainAxis]-(reference[len]/2-element[len]/2);break;case end:offsets[mainAxis]=offsets[mainAxis]+(reference[len]/2-element[len]/2);break}}return offsets}function detectOverflow(state,options){if(options===void 0){options={}}var _options=options,_options$placement=_options.placement,placement=_options$placement===void 0?state.placement:_options$placement,_options$boundary=_options.boundary,boundary=_options$boundary===void 0?clippingParents:_options$boundary,_options$rootBoundary=_options.rootBoundary,rootBoundary=_options$rootBoundary===void 0?viewport:_options$rootBoundary,_options$elementConte=_options.elementContext,elementContext=_options$elementConte===void 0?popper:_options$elementConte,_options$altBoundary=_options.altBoundary,altBoundary=_options$altBoundary===void 0?false:_options$altBoundary,_options$padding=_options.padding,padding=_options$padding===void 0?0:_options$padding;var paddingObject=mergePaddingObject(typeof padding!=="number"?padding:expandToHashMap(padding,basePlacements));var altContext=elementContext===popper?reference:popper;var referenceElement=state.elements.reference;var popperRect=state.rects.popper;var element=state.elements[altBoundary?altContext:elementContext];var clippingClientRect=getClippingRect(isElement(element)?element:element.contextElement||getDocumentElement(state.elements.popper),boundary,rootBoundary);var referenceClientRect=getBoundingClientRect(referenceElement);var popperOffsets=computeOffsets({reference:referenceClientRect,element:popperRect,strategy:"absolute",placement:placement});var popperClientRect=rectToClientRect(Object.assign({},popperRect,popperOffsets));var elementClientRect=elementContext===popper?popperClientRect:referenceClientRect;var overflowOffsets={top:clippingClientRect.top-elementClientRect.top+paddingObject.top,bottom:elementClientRect.bottom-clippingClientRect.bottom+paddingObject.bottom,left:clippingClientRect.left-elementClientRect.left+paddingObject.left,right:elementClientRect.right-clippingClientRect.right+paddingObject.right};var offsetData=state.modifiersData.offset;if(elementContext===popper&&offsetData){var offset=offsetData[placement];Object.keys(overflowOffsets).forEach(function(key){var multiply=[right,bottom].indexOf(key)>=0?1:-1;var axis=[top,bottom].indexOf(key)>=0?"y":"x";overflowOffsets[key]+=offset[axis]*multiply})}return overflowOffsets}function computeAutoPlacement(state,options){if(options===void 0){options={}}var _options=options,placement=_options.placement,boundary=_options.boundary,rootBoundary=_options.rootBoundary,padding=_options.padding,flipVariations=_options.flipVariations,_options$allowedAutoP=_options.allowedAutoPlacements,allowedAutoPlacements=_options$allowedAutoP===void 0?placements:_options$allowedAutoP;var variation=getVariation(placement);var placements$1=variation?flipVariations?variationPlacements:variationPlacements.filter(function(placement){return getVariation(placement)===variation}):basePlacements;var allowedPlacements=placements$1.filter(function(placement){return allowedAutoPlacements.indexOf(placement)>=0});if(allowedPlacements.length===0){allowedPlacements=placements$1}var overflows=allowedPlacements.reduce(function(acc,placement){acc[placement]=detectOverflow(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding})[getBasePlacement(placement)];return acc},{});return Object.keys(overflows).sort(function(a,b){return overflows[a]-overflows[b]})}function getExpandedFallbackPlacements(placement){if(getBasePlacement(placement)===auto){return[]}var oppositePlacement=getOppositePlacement(placement);return[getOppositeVariationPlacement(placement),oppositePlacement,getOppositeVariationPlacement(oppositePlacement)]}function flip(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;if(state.modifiersData[name]._skip){return}var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?true:_options$altAxis,specifiedFallbackPlacements=options.fallbackPlacements,padding=options.padding,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,_options$flipVariatio=options.flipVariations,flipVariations=_options$flipVariatio===void 0?true:_options$flipVariatio,allowedAutoPlacements=options.allowedAutoPlacements;var preferredPlacement=state.options.placement;var basePlacement=getBasePlacement(preferredPlacement);var isBasePlacement=basePlacement===preferredPlacement;var fallbackPlacements=specifiedFallbackPlacements||(isBasePlacement||!flipVariations?[getOppositePlacement(preferredPlacement)]:getExpandedFallbackPlacements(preferredPlacement));var placements=[preferredPlacement].concat(fallbackPlacements).reduce(function(acc,placement){return acc.concat(getBasePlacement(placement)===auto?computeAutoPlacement(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,padding:padding,flipVariations:flipVariations,allowedAutoPlacements:allowedAutoPlacements}):placement)},[]);var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var checksMap=new Map;var makeFallbackChecks=true;var firstFittingPlacement=placements[0];for(var i=0;i<placements.length;i++){var placement=placements[i];var _basePlacement=getBasePlacement(placement);var isStartVariation=getVariation(placement)===start;var isVertical=[top,bottom].indexOf(_basePlacement)>=0;var len=isVertical?"width":"height";var overflow=detectOverflow(state,{placement:placement,boundary:boundary,rootBoundary:rootBoundary,altBoundary:altBoundary,padding:padding});var mainVariationSide=isVertical?isStartVariation?right:left:isStartVariation?bottom:top;if(referenceRect[len]>popperRect[len]){mainVariationSide=getOppositePlacement(mainVariationSide)}var altVariationSide=getOppositePlacement(mainVariationSide);var checks=[];if(checkMainAxis){checks.push(overflow[_basePlacement]<=0)}if(checkAltAxis){checks.push(overflow[mainVariationSide]<=0,overflow[altVariationSide]<=0)}if(checks.every(function(check){return check})){firstFittingPlacement=placement;makeFallbackChecks=false;break}checksMap.set(placement,checks)}if(makeFallbackChecks){var numberOfChecks=flipVariations?3:1;var _loop=function _loop(_i){var fittingPlacement=placements.find(function(placement){var checks=checksMap.get(placement);if(checks){return checks.slice(0,_i).every(function(check){return check})}});if(fittingPlacement){firstFittingPlacement=fittingPlacement;return"break"}};for(var _i=numberOfChecks;_i>0;_i--){var _ret=_loop(_i);if(_ret==="break")break}}if(state.placement!==firstFittingPlacement){state.modifiersData[name]._skip=true;state.placement=firstFittingPlacement;state.reset=true}}var flip$1={name:"flip",enabled:true,phase:"main",fn:flip,requiresIfExists:["offset"],data:{_skip:false}};function getSideOffsets(overflow,rect,preventedOffsets){if(preventedOffsets===void 0){preventedOffsets={x:0,y:0}}return{top:overflow.top-rect.height-preventedOffsets.y,right:overflow.right-rect.width+preventedOffsets.x,bottom:overflow.bottom-rect.height+preventedOffsets.y,left:overflow.left-rect.width-preventedOffsets.x}}function isAnySideFullyClipped(overflow){return[top,right,bottom,left].some(function(side){return overflow[side]>=0})}function hide$1(_ref){var state=_ref.state,name=_ref.name;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var preventedOffsets=state.modifiersData.preventOverflow;var referenceOverflow=detectOverflow(state,{elementContext:"reference"});var popperAltOverflow=detectOverflow(state,{altBoundary:true});var referenceClippingOffsets=getSideOffsets(referenceOverflow,referenceRect);var popperEscapeOffsets=getSideOffsets(popperAltOverflow,popperRect,preventedOffsets);var isReferenceHidden=isAnySideFullyClipped(referenceClippingOffsets);var hasPopperEscaped=isAnySideFullyClipped(popperEscapeOffsets);state.modifiersData[name]={referenceClippingOffsets:referenceClippingOffsets,popperEscapeOffsets:popperEscapeOffsets,isReferenceHidden:isReferenceHidden,hasPopperEscaped:hasPopperEscaped};state.attributes.popper=Object.assign({},state.attributes.popper,{"data-popper-reference-hidden":isReferenceHidden,"data-popper-escaped":hasPopperEscaped})}var hide$2={name:"hide",enabled:true,phase:"main",requiresIfExists:["preventOverflow"],fn:hide$1};function distanceAndSkiddingToXY(placement,rects,offset){var basePlacement=getBasePlacement(placement);var invertDistance=[left,top].indexOf(basePlacement)>=0?-1:1;var _ref=typeof offset==="function"?offset(Object.assign({},rects,{placement:placement})):offset,skidding=_ref[0],distance=_ref[1];skidding=skidding||0;distance=(distance||0)*invertDistance;return[left,right].indexOf(basePlacement)>=0?{x:distance,y:skidding}:{x:skidding,y:distance}}function offset(_ref2){var state=_ref2.state,options=_ref2.options,name=_ref2.name;var _options$offset=options.offset,offset=_options$offset===void 0?[0,0]:_options$offset;var data=placements.reduce(function(acc,placement){acc[placement]=distanceAndSkiddingToXY(placement,state.rects,offset);return acc},{});var _data$state$placement=data[state.placement],x=_data$state$placement.x,y=_data$state$placement.y;if(state.modifiersData.popperOffsets!=null){state.modifiersData.popperOffsets.x+=x;state.modifiersData.popperOffsets.y+=y}state.modifiersData[name]=data}var offset$1={name:"offset",enabled:true,phase:"main",requires:["popperOffsets"],fn:offset};function popperOffsets(_ref){var state=_ref.state,name=_ref.name;state.modifiersData[name]=computeOffsets({reference:state.rects.reference,element:state.rects.popper,strategy:"absolute",placement:state.placement})}var popperOffsets$1={name:"popperOffsets",enabled:true,phase:"read",fn:popperOffsets,data:{}};function getAltAxis(axis){return axis==="x"?"y":"x"}function preventOverflow(_ref){var state=_ref.state,options=_ref.options,name=_ref.name;var _options$mainAxis=options.mainAxis,checkMainAxis=_options$mainAxis===void 0?true:_options$mainAxis,_options$altAxis=options.altAxis,checkAltAxis=_options$altAxis===void 0?false:_options$altAxis,boundary=options.boundary,rootBoundary=options.rootBoundary,altBoundary=options.altBoundary,padding=options.padding,_options$tether=options.tether,tether=_options$tether===void 0?true:_options$tether,_options$tetherOffset=options.tetherOffset,tetherOffset=_options$tetherOffset===void 0?0:_options$tetherOffset;var overflow=detectOverflow(state,{boundary:boundary,rootBoundary:rootBoundary,padding:padding,altBoundary:altBoundary});var basePlacement=getBasePlacement(state.placement);var variation=getVariation(state.placement);var isBasePlacement=!variation;var mainAxis=getMainAxisFromPlacement(basePlacement);var altAxis=getAltAxis(mainAxis);var popperOffsets=state.modifiersData.popperOffsets;var referenceRect=state.rects.reference;var popperRect=state.rects.popper;var tetherOffsetValue=typeof tetherOffset==="function"?tetherOffset(Object.assign({},state.rects,{placement:state.placement})):tetherOffset;var data={x:0,y:0};if(!popperOffsets){return}if(checkMainAxis||checkAltAxis){var mainSide=mainAxis==="y"?top:left;var altSide=mainAxis==="y"?bottom:right;var len=mainAxis==="y"?"height":"width";var offset=popperOffsets[mainAxis];var min$1=popperOffsets[mainAxis]+overflow[mainSide];var max$1=popperOffsets[mainAxis]-overflow[altSide];var additive=tether?-popperRect[len]/2:0;var minLen=variation===start?referenceRect[len]:popperRect[len];var maxLen=variation===start?-popperRect[len]:-referenceRect[len];var arrowElement=state.elements.arrow;var arrowRect=tether&&arrowElement?getLayoutRect(arrowElement):{width:0,height:0};var arrowPaddingObject=state.modifiersData["arrow#persistent"]?state.modifiersData["arrow#persistent"].padding:getFreshSideObject();var arrowPaddingMin=arrowPaddingObject[mainSide];var arrowPaddingMax=arrowPaddingObject[altSide];var arrowLen=within(0,referenceRect[len],arrowRect[len]);var minOffset=isBasePlacement?referenceRect[len]/2-additive-arrowLen-arrowPaddingMin-tetherOffsetValue:minLen-arrowLen-arrowPaddingMin-tetherOffsetValue;var maxOffset=isBasePlacement?-referenceRect[len]/2+additive+arrowLen+arrowPaddingMax+tetherOffsetValue:maxLen+arrowLen+arrowPaddingMax+tetherOffsetValue;var arrowOffsetParent=state.elements.arrow&&getOffsetParent(state.elements.arrow);var clientOffset=arrowOffsetParent?mainAxis==="y"?arrowOffsetParent.clientTop||0:arrowOffsetParent.clientLeft||0:0;var offsetModifierValue=state.modifiersData.offset?state.modifiersData.offset[state.placement][mainAxis]:0;var tetherMin=popperOffsets[mainAxis]+minOffset-offsetModifierValue-clientOffset;var tetherMax=popperOffsets[mainAxis]+maxOffset-offsetModifierValue;if(checkMainAxis){var preventedOffset=within(tether?min(min$1,tetherMin):min$1,offset,tether?max(max$1,tetherMax):max$1);popperOffsets[mainAxis]=preventedOffset;data[mainAxis]=preventedOffset-offset}if(checkAltAxis){var _mainSide=mainAxis==="x"?top:left;var _altSide=mainAxis==="x"?bottom:right;var _offset=popperOffsets[altAxis];var _min=_offset+overflow[_mainSide];var _max=_offset-overflow[_altSide];var _preventedOffset=within(tether?min(_min,tetherMin):_min,_offset,tether?max(_max,tetherMax):_max);popperOffsets[altAxis]=_preventedOffset;data[altAxis]=_preventedOffset-_offset}}state.modifiersData[name]=data}var preventOverflow$1={name:"preventOverflow",enabled:true,phase:"main",fn:preventOverflow,requiresIfExists:["offset"]};function getHTMLElementScroll(element){return{scrollLeft:element.scrollLeft,scrollTop:element.scrollTop}}function getNodeScroll(node){if(node===getWindow(node)||!isHTMLElement(node)){return getWindowScroll(node)}else{return getHTMLElementScroll(node)}}function getCompositeRect(elementOrVirtualElement,offsetParent,isFixed){if(isFixed===void 0){isFixed=false}var documentElement=getDocumentElement(offsetParent);var rect=getBoundingClientRect(elementOrVirtualElement);var isOffsetParentAnElement=isHTMLElement(offsetParent);var scroll={scrollLeft:0,scrollTop:0};var offsets={x:0,y:0};if(isOffsetParentAnElement||!isOffsetParentAnElement&&!isFixed){if(getNodeName(offsetParent)!=="body"||isScrollParent(documentElement)){scroll=getNodeScroll(offsetParent)}if(isHTMLElement(offsetParent)){offsets=getBoundingClientRect(offsetParent);offsets.x+=offsetParent.clientLeft;offsets.y+=offsetParent.clientTop}else if(documentElement){offsets.x=getWindowScrollBarX(documentElement)}}return{x:rect.left+scroll.scrollLeft-offsets.x,y:rect.top+scroll.scrollTop-offsets.y,width:rect.width,height:rect.height}}function order(modifiers){var map=new Map;var visited=new Set;var result=[];modifiers.forEach(function(modifier){map.set(modifier.name,modifier)});function sort(modifier){visited.add(modifier.name);var requires=[].concat(modifier.requires||[],modifier.requiresIfExists||[]);requires.forEach(function(dep){if(!visited.has(dep)){var depModifier=map.get(dep);if(depModifier){sort(depModifier)}}});result.push(modifier)}modifiers.forEach(function(modifier){if(!visited.has(modifier.name)){sort(modifier)}});return result}function orderModifiers(modifiers){var orderedModifiers=order(modifiers);return modifierPhases.reduce(function(acc,phase){return acc.concat(orderedModifiers.filter(function(modifier){return modifier.phase===phase}))},[])}function debounce(fn){var pending;return function(){if(!pending){pending=new Promise(function(resolve){Promise.resolve().then(function(){pending=undefined;resolve(fn())})})}return pending}}function mergeByName(modifiers){var merged=modifiers.reduce(function(merged,current){var existing=merged[current.name];merged[current.name]=existing?Object.assign({},existing,current,{options:Object.assign({},existing.options,current.options),data:Object.assign({},existing.data,current.data)}):current;return merged},{});return Object.keys(merged).map(function(key){return merged[key]})}var DEFAULT_OPTIONS={placement:"bottom",modifiers:[],strategy:"absolute"};function areValidElements(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}return!args.some(function(element){return!(element&&typeof element.getBoundingClientRect==="function")})}function popperGenerator(generatorOptions){if(generatorOptions===void 0){generatorOptions={}}var _generatorOptions=generatorOptions,_generatorOptions$def=_generatorOptions.defaultModifiers,defaultModifiers=_generatorOptions$def===void 0?[]:_generatorOptions$def,_generatorOptions$def2=_generatorOptions.defaultOptions,defaultOptions=_generatorOptions$def2===void 0?DEFAULT_OPTIONS:_generatorOptions$def2;return function createPopper(reference,popper,options){if(options===void 0){options=defaultOptions}var state={placement:"bottom",orderedModifiers:[],options:Object.assign({},DEFAULT_OPTIONS,defaultOptions),modifiersData:{},elements:{reference:reference,popper:popper},attributes:{},styles:{}};var effectCleanupFns=[];var isDestroyed=false;var instance={state:state,setOptions:function setOptions(options){cleanupModifierEffects();state.options=Object.assign({},defaultOptions,state.options,options);state.scrollParents={reference:isElement(reference)?listScrollParents(reference):reference.contextElement?listScrollParents(reference.contextElement):[],popper:listScrollParents(popper)};var orderedModifiers=orderModifiers(mergeByName([].concat(defaultModifiers,state.options.modifiers)));state.orderedModifiers=orderedModifiers.filter(function(m){return m.enabled});runModifierEffects();return instance.update()},forceUpdate:function forceUpdate(){if(isDestroyed){return}var _state$elements=state.elements,reference=_state$elements.reference,popper=_state$elements.popper;if(!areValidElements(reference,popper)){return}state.rects={reference:getCompositeRect(reference,getOffsetParent(popper),state.options.strategy==="fixed"),popper:getLayoutRect(popper)};state.reset=false;state.placement=state.options.placement;state.orderedModifiers.forEach(function(modifier){return state.modifiersData[modifier.name]=Object.assign({},modifier.data)});for(var index=0;index<state.orderedModifiers.length;index++){if(state.reset===true){state.reset=false;index=-1;continue}var _state$orderedModifie=state.orderedModifiers[index],fn=_state$orderedModifie.fn,_state$orderedModifie2=_state$orderedModifie.options,_options=_state$orderedModifie2===void 0?{}:_state$orderedModifie2,name=_state$orderedModifie.name;if(typeof fn==="function"){state=fn({state:state,options:_options,name:name,instance:instance})||state}}},update:debounce(function(){return new Promise(function(resolve){instance.forceUpdate();resolve(state)})}),destroy:function destroy(){cleanupModifierEffects();isDestroyed=true}};if(!areValidElements(reference,popper)){return instance}instance.setOptions(options).then(function(state){if(!isDestroyed&&options.onFirstUpdate){options.onFirstUpdate(state)}});function runModifierEffects(){state.orderedModifiers.forEach(function(_ref3){var name=_ref3.name,_ref3$options=_ref3.options,options=_ref3$options===void 0?{}:_ref3$options,effect=_ref3.effect;if(typeof effect==="function"){var cleanupFn=effect({state:state,name:name,instance:instance,options:options});var noopFn=function noopFn(){};effectCleanupFns.push(cleanupFn||noopFn)}})}function cleanupModifierEffects(){effectCleanupFns.forEach(function(fn){return fn()});effectCleanupFns=[]}return instance}}var createPopper$2=popperGenerator();var defaultModifiers$1=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1];var createPopper$1=popperGenerator({defaultModifiers:defaultModifiers$1});var defaultModifiers=[eventListeners,popperOffsets$1,computeStyles$1,applyStyles$1,offset$1,flip$1,preventOverflow$1,arrow$1,hide$2];var createPopper=popperGenerator({defaultModifiers:defaultModifiers});var Popper=Object.freeze({__proto__:null,popperGenerator:popperGenerator,detectOverflow:detectOverflow,createPopperBase:createPopper$2,createPopper:createPopper,createPopperLite:createPopper$1,top:top,bottom:bottom,right:right,left:left,auto:auto,basePlacements:basePlacements,start:start,end:end,clippingParents:clippingParents,viewport:viewport,popper:popper,reference:reference,variationPlacements:variationPlacements,placements:placements,beforeRead:beforeRead,read:read,afterRead:afterRead,beforeMain:beforeMain,main:main,afterMain:afterMain,beforeWrite:beforeWrite,write:write,afterWrite:afterWrite,modifierPhases:modifierPhases,applyStyles:applyStyles$1,arrow:arrow$1,computeStyles:computeStyles$1,eventListeners:eventListeners,flip:flip$1,hide:hide$2,offset:offset$1,popperOffsets:popperOffsets$1,preventOverflow:preventOverflow$1});const NAME$8="dropdown";const DATA_KEY$7="bs.dropdown";const EVENT_KEY$7=`.${DATA_KEY$7}`;const DATA_API_KEY$4=".data-api";const ESCAPE_KEY$2="Escape";const SPACE_KEY="Space";const TAB_KEY="Tab";const ARROW_UP_KEY="ArrowUp";const ARROW_DOWN_KEY="ArrowDown";const RIGHT_MOUSE_BUTTON=2;const REGEXP_KEYDOWN=new RegExp(`${ARROW_UP_KEY}|${ARROW_DOWN_KEY}|${ESCAPE_KEY$2}`);const EVENT_HIDE$4=`hide${EVENT_KEY$7}`;const EVENT_HIDDEN$4=`hidden${EVENT_KEY$7}`;const EVENT_SHOW$4=`show${EVENT_KEY$7}`;const EVENT_SHOWN$4=`shown${EVENT_KEY$7}`;const EVENT_CLICK=`click${EVENT_KEY$7}`;const EVENT_CLICK_DATA_API$3=`click${EVENT_KEY$7}${DATA_API_KEY$4}`;const EVENT_KEYDOWN_DATA_API=`keydown${EVENT_KEY$7}${DATA_API_KEY$4}`;const EVENT_KEYUP_DATA_API=`keyup${EVENT_KEY$7}${DATA_API_KEY$4}`;const CLASS_NAME_SHOW$7="show";const CLASS_NAME_DROPUP="dropup";const CLASS_NAME_DROPEND="dropend";const CLASS_NAME_DROPSTART="dropstart";const CLASS_NAME_NAVBAR="navbar";const SELECTOR_DATA_TOGGLE$3='[data-bs-toggle="dropdown"]';const SELECTOR_MENU=".dropdown-menu";const SELECTOR_NAVBAR_NAV=".navbar-nav";const SELECTOR_VISIBLE_ITEMS=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";const PLACEMENT_TOP=isRTL()?"top-end":"top-start";const PLACEMENT_TOPEND=isRTL()?"top-start":"top-end";const PLACEMENT_BOTTOM=isRTL()?"bottom-end":"bottom-start";const PLACEMENT_BOTTOMEND=isRTL()?"bottom-start":"bottom-end";const PLACEMENT_RIGHT=isRTL()?"left-start":"right-start";const PLACEMENT_LEFT=isRTL()?"right-start":"left-start";const Default$7={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:true};const DefaultType$7={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Dropdown extends BaseComponent{constructor(element,config){super(element);this._popper=null;this._config=this._getConfig(config);this._menu=this._getMenuElement();this._inNavbar=this._detectNavbar();this._addEventListeners()}static get Default(){return Default$7}static get DefaultType(){return DefaultType$7}static get NAME(){return NAME$8}toggle(){if(isDisabled(this._element)){return}const isActive=this._element.classList.contains(CLASS_NAME_SHOW$7);if(isActive){this.hide();return}this.show()}show(){if(isDisabled(this._element)||this._menu.classList.contains(CLASS_NAME_SHOW$7)){return}const parent=Dropdown.getParentFromElement(this._element);const relatedTarget={relatedTarget:this._element};const showEvent=EventHandler.trigger(this._element,EVENT_SHOW$4,relatedTarget);if(showEvent.defaultPrevented){return}if(this._inNavbar){Manipulator.setDataAttribute(this._menu,"popper","none")}else{if(typeof Popper==="undefined"){throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)")}let referenceElement=this._element;if(this._config.reference==="parent"){referenceElement=parent}else if(isElement$1(this._config.reference)){referenceElement=getElement(this._config.reference)}else if(typeof this._config.reference==="object"){referenceElement=this._config.reference}const popperConfig=this._getPopperConfig();const isDisplayStatic=popperConfig.modifiers.find(modifier=>modifier.name==="applyStyles"&&modifier.enabled===false);this._popper=createPopper(referenceElement,this._menu,popperConfig);if(isDisplayStatic){Manipulator.setDataAttribute(this._menu,"popper","static")}}if("ontouchstart"in document.documentElement&&!parent.closest(SELECTOR_NAVBAR_NAV)){[].concat(...document.body.children).forEach(elem=>EventHandler.on(elem,"mouseover",noop))}this._element.focus();this._element.setAttribute("aria-expanded",true);this._menu.classList.toggle(CLASS_NAME_SHOW$7);this._element.classList.toggle(CLASS_NAME_SHOW$7);EventHandler.trigger(this._element,EVENT_SHOWN$4,relatedTarget)}hide(){if(isDisabled(this._element)||!this._menu.classList.contains(CLASS_NAME_SHOW$7)){return}const relatedTarget={relatedTarget:this._element};this._completeHide(relatedTarget)}dispose(){if(this._popper){this._popper.destroy()}super.dispose()}update(){this._inNavbar=this._detectNavbar();if(this._popper){this._popper.update()}}_addEventListeners(){EventHandler.on(this._element,EVENT_CLICK,event=>{event.preventDefault();this.toggle()})}_completeHide(relatedTarget){const hideEvent=EventHandler.trigger(this._element,EVENT_HIDE$4,relatedTarget);if(hideEvent.defaultPrevented){return}if("ontouchstart"in document.documentElement){[].concat(...document.body.children).forEach(elem=>EventHandler.off(elem,"mouseover",noop))}if(this._popper){this._popper.destroy()}this._menu.classList.remove(CLASS_NAME_SHOW$7);this._element.classList.remove(CLASS_NAME_SHOW$7);this._element.setAttribute("aria-expanded","false");Manipulator.removeDataAttribute(this._menu,"popper");EventHandler.trigger(this._element,EVENT_HIDDEN$4,relatedTarget)}_getConfig(config){config={...this.constructor.Default,...Manipulator.getDataAttributes(this._element),...config};typeCheckConfig(NAME$8,config,this.constructor.DefaultType);if(typeof config.reference==="object"&&!isElement$1(config.reference)&&typeof config.reference.getBoundingClientRect!=="function"){throw new TypeError(`${NAME$8.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`)}return config}_getMenuElement(){return SelectorEngine.next(this._element,SELECTOR_MENU)[0]}_getPlacement(){const parentDropdown=this._element.parentNode;if(parentDropdown.classList.contains(CLASS_NAME_DROPEND)){return PLACEMENT_RIGHT}if(parentDropdown.classList.contains(CLASS_NAME_DROPSTART)){return PLACEMENT_LEFT}const isEnd=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";if(parentDropdown.classList.contains(CLASS_NAME_DROPUP)){return isEnd?PLACEMENT_TOPEND:PLACEMENT_TOP}return isEnd?PLACEMENT_BOTTOMEND:PLACEMENT_BOTTOM}_detectNavbar(){return this._element.closest(`.${CLASS_NAME_NAVBAR}`)!==null}_getOffset(){const{offset}=this._config;if(typeof offset==="string"){return offset.split(",").map(val=>Number.parseInt(val,10))}if(typeof offset==="function"){return popperData=>offset(popperData,this._element)}return offset}_getPopperConfig(){const defaultBsPopperConfig={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};if(this._config.display==="static"){defaultBsPopperConfig.modifiers=[{name:"applyStyles",enabled:false}]}return{...defaultBsPopperConfig,...typeof this._config.popperConfig==="function"?this._config.popperConfig(defaultBsPopperConfig):this._config.popperConfig}}_selectMenuItem(event){const items=SelectorEngine.find(SELECTOR_VISIBLE_ITEMS,this._menu).filter(isVisible);if(!items.length){return}let index=items.indexOf(event.target);if(event.key===ARROW_UP_KEY&&index>0){index--}if(event.key===ARROW_DOWN_KEY&&index<items.length-1){index++}index=index===-1?0:index;items[index].focus()}static dropdownInterface(element,config){let data=Data.get(element,DATA_KEY$7);const _config=typeof config==="object"?config:null;if(!data){data=new Dropdown(element,_config)}if(typeof config==="string"){if(typeof data[config]==="undefined"){throw new TypeError(`No method named "${config}"`)}data[config]()}}static jQueryInterface(config){return this.each(function(){Dropdown.dropdownInterface(this,config)})}static clearMenus(event){if(event&&(event.button===RIGHT_MOUSE_BUTTON||event.type==="keyup"&&event.key!==TAB_KEY)){return}const toggles=SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);for(let i=0,len=toggles.length;i<len;i++){const context=Data.get(toggles[i],DATA_KEY$7);if(!context||context._config.autoClose===false){continue}if(!context._element.classList.contains(CLASS_NAME_SHOW$7)){continue}const relatedTarget={relatedTarget:context._element};if(event){const composedPath=event.composedPath();const isMenuTarget=composedPath.includes(context._menu);if(composedPath.includes(context._element)||context._config.autoClose==="inside"&&!isMenuTarget||context._config.autoClose==="outside"&&isMenuTarget){continue}if(context._menu.contains(event.target)&&(event.type==="keyup"&&event.key===TAB_KEY||/input|select|option|textarea|form/i.test(event.target.tagName))){continue}if(event.type==="click"){relatedTarget.clickEvent=event}}context._completeHide(relatedTarget)}}static getParentFromElement(element){return getElementFromSelector(element)||element.parentNode}static dataApiKeydownHandler(event){if(/input|textarea/i.test(event.target.tagName)?event.key===SPACE_KEY||event.key!==ESCAPE_KEY$2&&(event.key!==ARROW_DOWN_KEY&&event.key!==ARROW_UP_KEY||event.target.closest(SELECTOR_MENU)):!REGEXP_KEYDOWN.test(event.key)){return}const isActive=this.classList.contains(CLASS_NAME_SHOW$7);if(!isActive&&event.key===ESCAPE_KEY$2){return}event.preventDefault();event.stopPropagation();if(isDisabled(this)){return}const getToggleButton=()=>this.matches(SELECTOR_DATA_TOGGLE$3)?this:SelectorEngine.prev(this,SELECTOR_DATA_TOGGLE$3)[0];if(event.key===ESCAPE_KEY$2){getToggleButton().focus();Dropdown.clearMenus();return}if(!isActive&&(event.key===ARROW_UP_KEY||event.key===ARROW_DOWN_KEY)){getToggleButton().click();return}if(!isActive||event.key===SPACE_KEY){Dropdown.clearMenus();return}Dropdown.getInstance(getToggleButton())._selectMenuItem(event)}}EventHandler.on(document,EVENT_KEYDOWN_DATA_API,SELECTOR_DATA_TOGGLE$3,Dropdown.dataApiKeydownHandler);EventHandler.on(document,EVENT_KEYDOWN_DATA_API,SELECTOR_MENU,Dropdown.dataApiKeydownHandler);EventHandler.on(document,EVENT_CLICK_DATA_API$3,Dropdown.clearMenus);EventHandler.on(document,EVENT_KEYUP_DATA_API,Dropdown.clearMenus);EventHandler.on(document,EVENT_CLICK_DATA_API$3,SELECTOR_DATA_TOGGLE$3,function(event){event.preventDefault();Dropdown.dropdownInterface(this)});defineJQueryPlugin(Dropdown);const SELECTOR_FIXED_CONTENT=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";const SELECTOR_STICKY_CONTENT=".sticky-top";const getWidth=()=>{const documentWidth=document.documentElement.clientWidth;return Math.abs(window.innerWidth-documentWidth)};const hide=(width=getWidth())=>{_disableOverFlow();_setElementAttributes("body","paddingRight",calculatedValue=>calculatedValue+width);_setElementAttributes(SELECTOR_FIXED_CONTENT,"paddingRight",calculatedValue=>calculatedValue+width);_setElementAttributes(SELECTOR_STICKY_CONTENT,"marginRight",calculatedValue=>calculatedValue-width)};const _disableOverFlow=()=>{const actualValue=document.body.style.overflow;if(actualValue){Manipulator.setDataAttribute(document.body,"overflow",actualValue)}document.body.style.overflow="hidden"};const _setElementAttributes=(selector,styleProp,callback)=>{const scrollbarWidth=getWidth();SelectorEngine.find(selector).forEach(element=>{if(element!==document.body&&window.innerWidth>element.clientWidth+scrollbarWidth){return}const actualValue=element.style[styleProp];const calculatedValue=window.getComputedStyle(element)[styleProp];Manipulator.setDataAttribute(element,styleProp,actualValue);element.style[styleProp]=`${callback(Number.parseFloat(calculatedValue))}px`})};const reset=()=>{_resetElementAttributes("body","overflow");_resetElementAttributes("body","paddingRight");_resetElementAttributes(SELECTOR_FIXED_CONTENT,"paddingRight");_resetElementAttributes(SELECTOR_STICKY_CONTENT,"marginRight")};const _resetElementAttributes=(selector,styleProp)=>{SelectorEngine.find(selector).forEach(element=>{const value=Manipulator.getDataAttribute(element,styleProp);if(typeof value==="undefined"){element.style.removeProperty(styleProp)}else{Manipulator.removeDataAttribute(element,styleProp);element.style[styleProp]=value}})};const Default$6={isVisible:true,isAnimated:false,rootElement:document.body,clickCallback:null};const DefaultType$6={isVisible:"boolean",isAnimated:"boolean",rootElement:"element",clickCallback:"(function|null)"};const NAME$7="backdrop";const CLASS_NAME_BACKDROP="modal-backdrop";const CLASS_NAME_FADE$5="fade";const CLASS_NAME_SHOW$6="show";const EVENT_MOUSEDOWN=`mousedown.bs.${NAME$7}`;class Backdrop{constructor(config){this._config=this._getConfig(config);this._isAppended=false;this._element=null}show(callback){if(!this._config.isVisible){execute(callback);return}this._append();if(this._config.isAnimated){reflow(this._getElement())}this._getElement().classList.add(CLASS_NAME_SHOW$6);this._emulateAnimation(()=>{execute(callback)})}hide(callback){if(!this._config.isVisible){execute(callback);return}this._getElement().classList.remove(CLASS_NAME_SHOW$6);this._emulateAnimation(()=>{this.dispose();execute(callback)})}_getElement(){if(!this._element){const backdrop=document.createElement("div");backdrop.className=CLASS_NAME_BACKDROP;if(this._config.isAnimated){backdrop.classList.add(CLASS_NAME_FADE$5)}this._element=backdrop}return this._element}_getConfig(config){config={...Default$6,...typeof config==="object"?config:{}};config.rootElement=config.rootElement||document.body;typeCheckConfig(NAME$7,config,DefaultType$6);return config}_append(){if(this._isAppended){return}this._config.rootElement.appendChild(this._getElement());EventHandler.on(this._getElement(),EVENT_MOUSEDOWN,()=>{execute(this._config.clickCallback)});this._isAppended=true}dispose(){if(!this._isAppended){return}EventHandler.off(this._element,EVENT_MOUSEDOWN);this._getElement().parentNode.removeChild(this._element);this._isAppended=false}_emulateAnimation(callback){if(!this._config.isAnimated){execute(callback);return}const backdropTransitionDuration=getTransitionDurationFromElement(this._getElement());EventHandler.one(this._getElement(),"transitionend",()=>execute(callback));emulateTransitionEnd(this._getElement(),backdropTransitionDuration)}}const NAME$6="modal";const DATA_KEY$6="bs.modal";const EVENT_KEY$6=`.${DATA_KEY$6}`;const DATA_API_KEY$3=".data-api";const ESCAPE_KEY$1="Escape";const Default$5={backdrop:true,keyboard:true,focus:true};const DefaultType$5={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};const EVENT_HIDE$3=`hide${EVENT_KEY$6}`;const EVENT_HIDE_PREVENTED=`hidePrevented${EVENT_KEY$6}`;const EVENT_HIDDEN$3=`hidden${EVENT_KEY$6}`;const EVENT_SHOW$3=`show${EVENT_KEY$6}`;const EVENT_SHOWN$3=`shown${EVENT_KEY$6}`;const EVENT_FOCUSIN$2=`focusin${EVENT_KEY$6}`;const EVENT_RESIZE=`resize${EVENT_KEY$6}`;const EVENT_CLICK_DISMISS$2=`click.dismiss${EVENT_KEY$6}`;const EVENT_KEYDOWN_DISMISS$1=`keydown.dismiss${EVENT_KEY$6}`;const EVENT_MOUSEUP_DISMISS=`mouseup.dismiss${EVENT_KEY$6}`;const EVENT_MOUSEDOWN_DISMISS=`mousedown.dismiss${EVENT_KEY$6}`;const EVENT_CLICK_DATA_API$2=`click${EVENT_KEY$6}${DATA_API_KEY$3}`;const CLASS_NAME_OPEN="modal-open";const CLASS_NAME_FADE$4="fade";const CLASS_NAME_SHOW$5="show";const CLASS_NAME_STATIC="modal-static";const SELECTOR_DIALOG=".modal-dialog";const SELECTOR_MODAL_BODY=".modal-body";const SELECTOR_DATA_TOGGLE$2='[data-bs-toggle="modal"]';const SELECTOR_DATA_DISMISS$2='[data-bs-dismiss="modal"]';class Modal extends BaseComponent{constructor(element,config){super(element);this._config=this._getConfig(config);this._dialog=SelectorEngine.findOne(SELECTOR_DIALOG,this._element);this._backdrop=this._initializeBackDrop();this._isShown=false;this._ignoreBackdropClick=false;this._isTransitioning=false}static get Default(){return Default$5}static get NAME(){return NAME$6}toggle(relatedTarget){return this._isShown?this.hide():this.show(relatedTarget)}show(relatedTarget){if(this._isShown||this._isTransitioning){return}if(this._isAnimated()){this._isTransitioning=true}const showEvent=EventHandler.trigger(this._element,EVENT_SHOW$3,{relatedTarget:relatedTarget});if(this._isShown||showEvent.defaultPrevented){return}this._isShown=true;hide();document.body.classList.add(CLASS_NAME_OPEN);this._adjustDialog();this._setEscapeEvent();this._setResizeEvent();EventHandler.on(this._element,EVENT_CLICK_DISMISS$2,SELECTOR_DATA_DISMISS$2,event=>this.hide(event));EventHandler.on(this._dialog,EVENT_MOUSEDOWN_DISMISS,()=>{EventHandler.one(this._element,EVENT_MOUSEUP_DISMISS,event=>{if(event.target===this._element){this._ignoreBackdropClick=true}})});this._showBackdrop(()=>this._showElement(relatedTarget))}hide(event){if(event){event.preventDefault()}if(!this._isShown||this._isTransitioning){return}const hideEvent=EventHandler.trigger(this._element,EVENT_HIDE$3);if(hideEvent.defaultPrevented){return}this._isShown=false;const isAnimated=this._isAnimated();if(isAnimated){this._isTransitioning=true}this._setEscapeEvent();this._setResizeEvent();EventHandler.off(document,EVENT_FOCUSIN$2);this._element.classList.remove(CLASS_NAME_SHOW$5);EventHandler.off(this._element,EVENT_CLICK_DISMISS$2);EventHandler.off(this._dialog,EVENT_MOUSEDOWN_DISMISS);this._queueCallback(()=>this._hideModal(),this._element,isAnimated)}dispose(){[window,this._dialog].forEach(htmlElement=>EventHandler.off(htmlElement,EVENT_KEY$6));this._backdrop.dispose();super.dispose();EventHandler.off(document,EVENT_FOCUSIN$2)}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Backdrop({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_getConfig(config){config={...Default$5,...Manipulator.getDataAttributes(this._element),...config};typeCheckConfig(NAME$6,config,DefaultType$5);return config}_showElement(relatedTarget){const isAnimated=this._isAnimated();const modalBody=SelectorEngine.findOne(SELECTOR_MODAL_BODY,this._dialog);if(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE){document.body.appendChild(this._element)}this._element.style.display="block";this._element.removeAttribute("aria-hidden");this._element.setAttribute("aria-modal",true);this._element.setAttribute("role","dialog");this._element.scrollTop=0;if(modalBody){modalBody.scrollTop=0}if(isAnimated){reflow(this._element)}this._element.classList.add(CLASS_NAME_SHOW$5);if(this._config.focus){this._enforceFocus()}const transitionComplete=()=>{if(this._config.focus){this._element.focus()}this._isTransitioning=false;EventHandler.trigger(this._element,EVENT_SHOWN$3,{relatedTarget:relatedTarget})};this._queueCallback(transitionComplete,this._dialog,isAnimated)}_enforceFocus(){EventHandler.off(document,EVENT_FOCUSIN$2);EventHandler.on(document,EVENT_FOCUSIN$2,event=>{if(document!==event.target&&this._element!==event.target&&!this._element.contains(event.target)){this._element.focus()}})}_setEscapeEvent(){if(this._isShown){EventHandler.on(this._element,EVENT_KEYDOWN_DISMISS$1,event=>{if(this._config.keyboard&&event.key===ESCAPE_KEY$1){event.preventDefault();this.hide()}else if(!this._config.keyboard&&event.key===ESCAPE_KEY$1){this._triggerBackdropTransition()}})}else{EventHandler.off(this._element,EVENT_KEYDOWN_DISMISS$1)}}_setResizeEvent(){if(this._isShown){EventHandler.on(window,EVENT_RESIZE,()=>this._adjustDialog())}else{EventHandler.off(window,EVENT_RESIZE)}}_hideModal(){this._element.style.display="none";this._element.setAttribute("aria-hidden",true);this._element.removeAttribute("aria-modal");this._element.removeAttribute("role");this._isTransitioning=false;this._backdrop.hide(()=>{document.body.classList.remove(CLASS_NAME_OPEN);this._resetAdjustments();reset();EventHandler.trigger(this._element,EVENT_HIDDEN$3)})}_showBackdrop(callback){EventHandler.on(this._element,EVENT_CLICK_DISMISS$2,event=>{if(this._ignoreBackdropClick){this._ignoreBackdropClick=false;return}if(event.target!==event.currentTarget){return}if(this._config.backdrop===true){this.hide()}else if(this._config.backdrop==="static"){this._triggerBackdropTransition()}});this._backdrop.show(callback)}_isAnimated(){return this._element.classList.contains(CLASS_NAME_FADE$4)}_triggerBackdropTransition(){const hideEvent=EventHandler.trigger(this._element,EVENT_HIDE_PREVENTED);if(hideEvent.defaultPrevented){return}const isModalOverflowing=this._element.scrollHeight>document.documentElement.clientHeight;if(!isModalOverflowing){this._element.style.overflowY="hidden"}this._element.classList.add(CLASS_NAME_STATIC);const modalTransitionDuration=getTransitionDurationFromElement(this._dialog);EventHandler.off(this._element,"transitionend");EventHandler.one(this._element,"transitionend",()=>{this._element.classList.remove(CLASS_NAME_STATIC);if(!isModalOverflowing){EventHandler.one(this._element,"transitionend",()=>{this._element.style.overflowY=""});emulateTransitionEnd(this._element,modalTransitionDuration)}});emulateTransitionEnd(this._element,modalTransitionDuration);this._element.focus()}_adjustDialog(){const isModalOverflowing=this._element.scrollHeight>document.documentElement.clientHeight;const scrollbarWidth=getWidth();const isBodyOverflowing=scrollbarWidth>0;if(!isBodyOverflowing&&isModalOverflowing&&!isRTL()||isBodyOverflowing&&!isModalOverflowing&&isRTL()){this._element.style.paddingLeft=`${scrollbarWidth}px`}if(isBodyOverflowing&&!isModalOverflowing&&!isRTL()||!isBodyOverflowing&&isModalOverflowing&&isRTL()){this._element.style.paddingRight=`${scrollbarWidth}px`}}_resetAdjustments(){this._element.style.paddingLeft="";this._element.style.paddingRight=""}static jQueryInterface(config,relatedTarget){return this.each(function(){const data=Modal.getInstance(this)||new Modal(this,typeof config==="object"?config:{});if(typeof config!=="string"){return}if(typeof data[config]==="undefined"){throw new TypeError(`No method named "${config}"`)}data[config](relatedTarget)})}}EventHandler.on(document,EVENT_CLICK_DATA_API$2,SELECTOR_DATA_TOGGLE$2,function(event){const target=getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)){event.preventDefault()}EventHandler.one(target,EVENT_SHOW$3,showEvent=>{if(showEvent.defaultPrevented){return}EventHandler.one(target,EVENT_HIDDEN$3,()=>{if(isVisible(this)){this.focus()}})});const data=Modal.getInstance(target)||new Modal(target);data.toggle(this)});defineJQueryPlugin(Modal);const NAME$5="offcanvas";const DATA_KEY$5="bs.offcanvas";const EVENT_KEY$5=`.${DATA_KEY$5}`;const DATA_API_KEY$2=".data-api";const EVENT_LOAD_DATA_API$1=`load${EVENT_KEY$5}${DATA_API_KEY$2}`;const ESCAPE_KEY="Escape";const Default$4={backdrop:true,keyboard:true,scroll:false};const DefaultType$4={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"};const CLASS_NAME_SHOW$4="show";const OPEN_SELECTOR=".offcanvas.show";const EVENT_SHOW$2=`show${EVENT_KEY$5}`;const EVENT_SHOWN$2=`shown${EVENT_KEY$5}`;const EVENT_HIDE$2=`hide${EVENT_KEY$5}`;const EVENT_HIDDEN$2=`hidden${EVENT_KEY$5}`;const EVENT_FOCUSIN$1=`focusin${EVENT_KEY$5}`;const EVENT_CLICK_DATA_API$1=`click${EVENT_KEY$5}${DATA_API_KEY$2}`;const EVENT_CLICK_DISMISS$1=`click.dismiss${EVENT_KEY$5}`;const EVENT_KEYDOWN_DISMISS=`keydown.dismiss${EVENT_KEY$5}`;const SELECTOR_DATA_DISMISS$1='[data-bs-dismiss="offcanvas"]';const SELECTOR_DATA_TOGGLE$1='[data-bs-toggle="offcanvas"]';class Offcanvas extends BaseComponent{constructor(element,config){super(element);this._config=this._getConfig(config);this._isShown=false;this._backdrop=this._initializeBackDrop();this._addEventListeners()}static get NAME(){return NAME$5}static get Default(){return Default$4}toggle(relatedTarget){return this._isShown?this.hide():this.show(relatedTarget)}show(relatedTarget){if(this._isShown){return}const showEvent=EventHandler.trigger(this._element,EVENT_SHOW$2,{relatedTarget:relatedTarget});if(showEvent.defaultPrevented){return}this._isShown=true;this._element.style.visibility="visible";this._backdrop.show();if(!this._config.scroll){hide();this._enforceFocusOnElement(this._element)}this._element.removeAttribute("aria-hidden");this._element.setAttribute("aria-modal",true);this._element.setAttribute("role","dialog");this._element.classList.add(CLASS_NAME_SHOW$4);const completeCallBack=()=>{EventHandler.trigger(this._element,EVENT_SHOWN$2,{relatedTarget:relatedTarget})};this._queueCallback(completeCallBack,this._element,true)}hide(){if(!this._isShown){return}const hideEvent=EventHandler.trigger(this._element,EVENT_HIDE$2);if(hideEvent.defaultPrevented){return}EventHandler.off(document,EVENT_FOCUSIN$1);this._element.blur();this._isShown=false;this._element.classList.remove(CLASS_NAME_SHOW$4);this._backdrop.hide();const completeCallback=()=>{this._element.setAttribute("aria-hidden",true);this._element.removeAttribute("aria-modal");this._element.removeAttribute("role");this._element.style.visibility="hidden";if(!this._config.scroll){reset()}EventHandler.trigger(this._element,EVENT_HIDDEN$2)};this._queueCallback(completeCallback,this._element,true)}dispose(){this._backdrop.dispose();super.dispose();EventHandler.off(document,EVENT_FOCUSIN$1)}_getConfig(config){config={...Default$4,...Manipulator.getDataAttributes(this._element),...typeof config==="object"?config:{}};typeCheckConfig(NAME$5,config,DefaultType$4);return config}_initializeBackDrop(){return new Backdrop({isVisible:this._config.backdrop,isAnimated:true,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_enforceFocusOnElement(element){EventHandler.off(document,EVENT_FOCUSIN$1);EventHandler.on(document,EVENT_FOCUSIN$1,event=>{if(document!==event.target&&element!==event.target&&!element.contains(event.target)){element.focus()}});element.focus()}_addEventListeners(){EventHandler.on(this._element,EVENT_CLICK_DISMISS$1,SELECTOR_DATA_DISMISS$1,()=>this.hide());EventHandler.on(this._element,EVENT_KEYDOWN_DISMISS,event=>{if(this._config.keyboard&&event.key===ESCAPE_KEY){this.hide()}})}static jQueryInterface(config){return this.each(function(){const data=Data.get(this,DATA_KEY$5)||new Offcanvas(this,typeof config==="object"?config:{});if(typeof config!=="string"){return}if(data[config]===undefined||config.startsWith("_")||config==="constructor"){throw new TypeError(`No method named "${config}"`)}data[config](this)})}}EventHandler.on(document,EVENT_CLICK_DATA_API$1,SELECTOR_DATA_TOGGLE$1,function(event){const target=getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)){event.preventDefault()}if(isDisabled(this)){return}EventHandler.one(target,EVENT_HIDDEN$2,()=>{if(isVisible(this)){this.focus()}});const allReadyOpen=SelectorEngine.findOne(OPEN_SELECTOR);if(allReadyOpen&&allReadyOpen!==target){Offcanvas.getInstance(allReadyOpen).hide()}const data=Data.get(target,DATA_KEY$5)||new Offcanvas(target);data.toggle(this)});EventHandler.on(window,EVENT_LOAD_DATA_API$1,()=>{SelectorEngine.find(OPEN_SELECTOR).forEach(el=>(Data.get(el,DATA_KEY$5)||new Offcanvas(el)).show())});defineJQueryPlugin(Offcanvas);const uriAttrs=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]);const ARIA_ATTRIBUTE_PATTERN=/^aria-[\w-]*$/i;const SAFE_URL_PATTERN=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i;const DATA_URL_PATTERN=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;const allowedAttribute=(attr,allowedAttributeList)=>{const attrName=attr.nodeName.toLowerCase();if(allowedAttributeList.includes(attrName)){if(uriAttrs.has(attrName)){return Boolean(SAFE_URL_PATTERN.test(attr.nodeValue)||DATA_URL_PATTERN.test(attr.nodeValue))}return true}const regExp=allowedAttributeList.filter(attrRegex=>attrRegex instanceof RegExp);for(let i=0,len=regExp.length;i<len;i++){if(regExp[i].test(attrName)){return true}}return false};const DefaultAllowlist={"*":["class","dir","id","lang","role",ARIA_ATTRIBUTE_PATTERN],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function sanitizeHtml(unsafeHtml,allowList,sanitizeFn){if(!unsafeHtml.length){return unsafeHtml}if(sanitizeFn&&typeof sanitizeFn==="function"){return sanitizeFn(unsafeHtml)}const domParser=new window.DOMParser;const createdDocument=domParser.parseFromString(unsafeHtml,"text/html");const allowlistKeys=Object.keys(allowList);const elements=[].concat(...createdDocument.body.querySelectorAll("*"));for(let i=0,len=elements.length;i<len;i++){const el=elements[i];const elName=el.nodeName.toLowerCase();if(!allowlistKeys.includes(elName)){el.parentNode.removeChild(el);continue}const attributeList=[].concat(...el.attributes);const allowedAttributes=[].concat(allowList["*"]||[],allowList[elName]||[]);attributeList.forEach(attr=>{if(!allowedAttribute(attr,allowedAttributes)){el.removeAttribute(attr.nodeName)}})}return createdDocument.body.innerHTML}const NAME$4="tooltip";const DATA_KEY$4="bs.tooltip";const EVENT_KEY$4=`.${DATA_KEY$4}`;const CLASS_PREFIX$1="bs-tooltip";const BSCLS_PREFIX_REGEX$1=new RegExp(`(^|\\s)${CLASS_PREFIX$1}\\S+`,"g");const DISALLOWED_ATTRIBUTES=new Set(["sanitize","allowList","sanitizeFn"]);const DefaultType$3={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"};const AttachmentMap={AUTO:"auto",TOP:"top",RIGHT:isRTL()?"left":"right",BOTTOM:"bottom",LEFT:isRTL()?"right":"left"};const Default$3={animation:true,template:'<div class="tooltip" role="tooltip">'+'<div class="tooltip-arrow"></div>'+'<div class="tooltip-inner"></div>'+"</div>",trigger:"hover focus",title:"",delay:0,html:false,selector:false,placement:"top",offset:[0,0],container:false,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:true,sanitizeFn:null,allowList:DefaultAllowlist,popperConfig:null};const Event$2={HIDE:`hide${EVENT_KEY$4}`,HIDDEN:`hidden${EVENT_KEY$4}`,SHOW:`show${EVENT_KEY$4}`,SHOWN:`shown${EVENT_KEY$4}`,INSERTED:`inserted${EVENT_KEY$4}`,CLICK:`click${EVENT_KEY$4}`,FOCUSIN:`focusin${EVENT_KEY$4}`,FOCUSOUT:`focusout${EVENT_KEY$4}`,MOUSEENTER:`mouseenter${EVENT_KEY$4}`,MOUSELEAVE:`mouseleave${EVENT_KEY$4}`};const CLASS_NAME_FADE$3="fade";const CLASS_NAME_MODAL="modal";const CLASS_NAME_SHOW$3="show";const HOVER_STATE_SHOW="show";const HOVER_STATE_OUT="out";const SELECTOR_TOOLTIP_INNER=".tooltip-inner";const TRIGGER_HOVER="hover";const TRIGGER_FOCUS="focus";const TRIGGER_CLICK="click";const TRIGGER_MANUAL="manual";class Tooltip extends BaseComponent{constructor(element,config){if(typeof Popper==="undefined"){throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)")}super(element);this._isEnabled=true;this._timeout=0;this._hoverState="";this._activeTrigger={};this._popper=null;this._config=this._getConfig(config);this.tip=null;this._setListeners()}static get Default(){return Default$3}static get NAME(){return NAME$4}static get Event(){return Event$2}static get DefaultType(){return DefaultType$3}enable(){this._isEnabled=true}disable(){this._isEnabled=false}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(event){if(!this._isEnabled){return}if(event){const context=this._initializeOnDelegatedTarget(event);context._activeTrigger.click=!context._activeTrigger.click;if(context._isWithActiveTrigger()){context._enter(null,context)}else{context._leave(null,context)}}else{if(this.getTipElement().classList.contains(CLASS_NAME_SHOW$3)){this._leave(null,this);return}this._enter(null,this)}}dispose(){clearTimeout(this._timeout);EventHandler.off(this._element.closest(`.${CLASS_NAME_MODAL}`),"hide.bs.modal",this._hideModalHandler);if(this.tip&&this.tip.parentNode){this.tip.parentNode.removeChild(this.tip)}if(this._popper){this._popper.destroy()}super.dispose()}show(){if(this._element.style.display==="none"){throw new Error("Please use show on visible elements")}if(!(this.isWithContent()&&this._isEnabled)){return}const showEvent=EventHandler.trigger(this._element,this.constructor.Event.SHOW);const shadowRoot=findShadowRoot(this._element);const isInTheDom=shadowRoot===null?this._element.ownerDocument.documentElement.contains(this._element):shadowRoot.contains(this._element);if(showEvent.defaultPrevented||!isInTheDom){return}const tip=this.getTipElement();const tipId=getUID(this.constructor.NAME);tip.setAttribute("id",tipId);this._element.setAttribute("aria-describedby",tipId);this.setContent();if(this._config.animation){tip.classList.add(CLASS_NAME_FADE$3)}const placement=typeof this._config.placement==="function"?this._config.placement.call(this,tip,this._element):this._config.placement;const attachment=this._getAttachment(placement);this._addAttachmentClass(attachment);const{container}=this._config;Data.set(tip,this.constructor.DATA_KEY,this);if(!this._element.ownerDocument.documentElement.contains(this.tip)){container.appendChild(tip);EventHandler.trigger(this._element,this.constructor.Event.INSERTED)}if(this._popper){this._popper.update()}else{this._popper=createPopper(this._element,tip,this._getPopperConfig(attachment))}tip.classList.add(CLASS_NAME_SHOW$3);const customClass=typeof this._config.customClass==="function"?this._config.customClass():this._config.customClass;if(customClass){tip.classList.add(...customClass.split(" "))}if("ontouchstart"in document.documentElement){[].concat(...document.body.children).forEach(element=>{EventHandler.on(element,"mouseover",noop)})}const complete=()=>{const prevHoverState=this._hoverState;this._hoverState=null;EventHandler.trigger(this._element,this.constructor.Event.SHOWN);if(prevHoverState===HOVER_STATE_OUT){this._leave(null,this)}};const isAnimated=this.tip.classList.contains(CLASS_NAME_FADE$3);this._queueCallback(complete,this.tip,isAnimated)}hide(){if(!this._popper){return}const tip=this.getTipElement();const complete=()=>{if(this._isWithActiveTrigger()){return}if(this._hoverState!==HOVER_STATE_SHOW&&tip.parentNode){tip.parentNode.removeChild(tip)}this._cleanTipClass();this._element.removeAttribute("aria-describedby");EventHandler.trigger(this._element,this.constructor.Event.HIDDEN);if(this._popper){this._popper.destroy();this._popper=null}};const hideEvent=EventHandler.trigger(this._element,this.constructor.Event.HIDE);if(hideEvent.defaultPrevented){return}tip.classList.remove(CLASS_NAME_SHOW$3);if("ontouchstart"in document.documentElement){[].concat(...document.body.children).forEach(element=>EventHandler.off(element,"mouseover",noop))}this._activeTrigger[TRIGGER_CLICK]=false;this._activeTrigger[TRIGGER_FOCUS]=false;this._activeTrigger[TRIGGER_HOVER]=false;const isAnimated=this.tip.classList.contains(CLASS_NAME_FADE$3);this._queueCallback(complete,this.tip,isAnimated);this._hoverState=""}update(){if(this._popper!==null){this._popper.update()}}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip){return this.tip}const element=document.createElement("div");element.innerHTML=this._config.template;this.tip=element.children[0];return this.tip}setContent(){const tip=this.getTipElement();this.setElementContent(SelectorEngine.findOne(SELECTOR_TOOLTIP_INNER,tip),this.getTitle());tip.classList.remove(CLASS_NAME_FADE$3,CLASS_NAME_SHOW$3)}setElementContent(element,content){if(element===null){return}if(isElement$1(content)){content=getElement(content);if(this._config.html){if(content.parentNode!==element){element.innerHTML="";element.appendChild(content)}}else{element.textContent=content.textContent}return}if(this._config.html){if(this._config.sanitize){content=sanitizeHtml(content,this._config.allowList,this._config.sanitizeFn)}element.innerHTML=content}else{element.textContent=content}}getTitle(){let title=this._element.getAttribute("data-bs-original-title");if(!title){title=typeof this._config.title==="function"?this._config.title.call(this._element):this._config.title}return title}updateAttachment(attachment){if(attachment==="right"){return"end"}if(attachment==="left"){return"start"}return attachment}_initializeOnDelegatedTarget(event,context){const dataKey=this.constructor.DATA_KEY;context=context||Data.get(event.delegateTarget,dataKey);if(!context){context=new this.constructor(event.delegateTarget,this._getDelegateConfig());Data.set(event.delegateTarget,dataKey,context)}return context}_getOffset(){const{offset}=this._config;if(typeof offset==="string"){return offset.split(",").map(val=>Number.parseInt(val,10))}if(typeof offset==="function"){return popperData=>offset(popperData,this._element)}return offset}_getPopperConfig(attachment){const defaultBsPopperConfig={placement:attachment,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:true,phase:"afterWrite",fn:data=>this._handlePopperPlacementChange(data)}],onFirstUpdate:data=>{if(data.options.placement!==data.placement){this._handlePopperPlacementChange(data)}}};return{...defaultBsPopperConfig,...typeof this._config.popperConfig==="function"?this._config.popperConfig(defaultBsPopperConfig):this._config.popperConfig}}_addAttachmentClass(attachment){this.getTipElement().classList.add(`${CLASS_PREFIX$1}-${this.updateAttachment(attachment)}`)}_getAttachment(placement){return AttachmentMap[placement.toUpperCase()]}_setListeners(){const triggers=this._config.trigger.split(" ");triggers.forEach(trigger=>{if(trigger==="click"){EventHandler.on(this._element,this.constructor.Event.CLICK,this._config.selector,event=>this.toggle(event))}else if(trigger!==TRIGGER_MANUAL){const eventIn=trigger===TRIGGER_HOVER?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN;const eventOut=trigger===TRIGGER_HOVER?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;EventHandler.on(this._element,eventIn,this._config.selector,event=>this._enter(event));EventHandler.on(this._element,eventOut,this._config.selector,event=>this._leave(event))}});this._hideModalHandler=()=>{if(this._element){this.hide()}};EventHandler.on(this._element.closest(`.${CLASS_NAME_MODAL}`),"hide.bs.modal",this._hideModalHandler);if(this._config.selector){this._config={...this._config,trigger:"manual",selector:""}}else{this._fixTitle()}}_fixTitle(){const title=this._element.getAttribute("title");const originalTitleType=typeof this._element.getAttribute("data-bs-original-title");if(title||originalTitleType!=="string"){this._element.setAttribute("data-bs-original-title",title||"");if(title&&!this._element.getAttribute("aria-label")&&!this._element.textContent){this._element.setAttribute("aria-label",title)}this._element.setAttribute("title","")}}_enter(event,context){context=this._initializeOnDelegatedTarget(event,context);if(event){context._activeTrigger[event.type==="focusin"?TRIGGER_FOCUS:TRIGGER_HOVER]=true}if(context.getTipElement().classList.contains(CLASS_NAME_SHOW$3)||context._hoverState===HOVER_STATE_SHOW){context._hoverState=HOVER_STATE_SHOW;return}clearTimeout(context._timeout);context._hoverState=HOVER_STATE_SHOW;if(!context._config.delay||!context._config.delay.show){context.show();return}context._timeout=setTimeout(()=>{if(context._hoverState===HOVER_STATE_SHOW){context.show()}},context._config.delay.show)}_leave(event,context){context=this._initializeOnDelegatedTarget(event,context);if(event){context._activeTrigger[event.type==="focusout"?TRIGGER_FOCUS:TRIGGER_HOVER]=context._element.contains(event.relatedTarget)}if(context._isWithActiveTrigger()){return}clearTimeout(context._timeout);context._hoverState=HOVER_STATE_OUT;if(!context._config.delay||!context._config.delay.hide){context.hide();return}context._timeout=setTimeout(()=>{if(context._hoverState===HOVER_STATE_OUT){context.hide()}},context._config.delay.hide)}_isWithActiveTrigger(){for(const trigger in this._activeTrigger){if(this._activeTrigger[trigger]){return true}}return false}_getConfig(config){const dataAttributes=Manipulator.getDataAttributes(this._element);Object.keys(dataAttributes).forEach(dataAttr=>{if(DISALLOWED_ATTRIBUTES.has(dataAttr)){delete dataAttributes[dataAttr]}});config={...this.constructor.Default,...dataAttributes,...typeof config==="object"&&config?config:{}};config.container=config.container===false?document.body:getElement(config.container);if(typeof config.delay==="number"){config.delay={show:config.delay,hide:config.delay}}if(typeof config.title==="number"){config.title=config.title.toString()}if(typeof config.content==="number"){config.content=config.content.toString()}typeCheckConfig(NAME$4,config,this.constructor.DefaultType);if(config.sanitize){config.template=sanitizeHtml(config.template,config.allowList,config.sanitizeFn)}return config}_getDelegateConfig(){const config={};if(this._config){for(const key in this._config){if(this.constructor.Default[key]!==this._config[key]){config[key]=this._config[key]}}}return config}_cleanTipClass(){const tip=this.getTipElement();const tabClass=tip.getAttribute("class").match(BSCLS_PREFIX_REGEX$1);if(tabClass!==null&&tabClass.length>0){tabClass.map(token=>token.trim()).forEach(tClass=>tip.classList.remove(tClass))}}_handlePopperPlacementChange(popperData){const{state}=popperData;if(!state){return}this.tip=state.elements.popper;this._cleanTipClass();this._addAttachmentClass(this._getAttachment(state.placement))}static jQueryInterface(config){return this.each(function(){let data=Data.get(this,DATA_KEY$4);const _config=typeof config==="object"&&config;if(!data&&/dispose|hide/.test(config)){return}if(!data){data=new Tooltip(this,_config)}if(typeof config==="string"){if(typeof data[config]==="undefined"){throw new TypeError(`No method named "${config}"`)}data[config]()}})}}defineJQueryPlugin(Tooltip);const NAME$3="popover";const DATA_KEY$3="bs.popover";const EVENT_KEY$3=`.${DATA_KEY$3}`;const CLASS_PREFIX="bs-popover";const BSCLS_PREFIX_REGEX=new RegExp(`(^|\\s)${CLASS_PREFIX}\\S+`,"g");const Default$2={...Tooltip.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip">'+'<div class="popover-arrow"></div>'+'<h3 class="popover-header"></h3>'+'<div class="popover-body"></div>'+"</div>"};const DefaultType$2={...Tooltip.DefaultType,content:"(string|element|function)"};const Event$1={HIDE:`hide${EVENT_KEY$3}`,HIDDEN:`hidden${EVENT_KEY$3}`,SHOW:`show${EVENT_KEY$3}`,SHOWN:`shown${EVENT_KEY$3}`,INSERTED:`inserted${EVENT_KEY$3}`,CLICK:`click${EVENT_KEY$3}`,FOCUSIN:`focusin${EVENT_KEY$3}`,FOCUSOUT:`focusout${EVENT_KEY$3}`,MOUSEENTER:`mouseenter${EVENT_KEY$3}`,MOUSELEAVE:`mouseleave${EVENT_KEY$3}`};const CLASS_NAME_FADE$2="fade";const CLASS_NAME_SHOW$2="show";const SELECTOR_TITLE=".popover-header";const SELECTOR_CONTENT=".popover-body";class Popover extends Tooltip{static get Default(){return Default$2}static get NAME(){return NAME$3}static get Event(){return Event$1}static get DefaultType(){return DefaultType$2}isWithContent(){return this.getTitle()||this._getContent()}setContent(){const tip=this.getTipElement();this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE,tip),this.getTitle());let content=this._getContent();if(typeof content==="function"){content=content.call(this._element)}this.setElementContent(SelectorEngine.findOne(SELECTOR_CONTENT,tip),content);tip.classList.remove(CLASS_NAME_FADE$2,CLASS_NAME_SHOW$2)}_addAttachmentClass(attachment){this.getTipElement().classList.add(`${CLASS_PREFIX}-${this.updateAttachment(attachment)}`)}_getContent(){return this._element.getAttribute("data-bs-content")||this._config.content}_cleanTipClass(){const tip=this.getTipElement();const tabClass=tip.getAttribute("class").match(BSCLS_PREFIX_REGEX);if(tabClass!==null&&tabClass.length>0){tabClass.map(token=>token.trim()).forEach(tClass=>tip.classList.remove(tClass))}}static jQueryInterface(config){return this.each(function(){let data=Data.get(this,DATA_KEY$3);const _config=typeof config==="object"?config:null;if(!data&&/dispose|hide/.test(config)){return}if(!data){data=new Popover(this,_config);Data.set(this,DATA_KEY$3,data)}if(typeof config==="string"){if(typeof data[config]==="undefined"){throw new TypeError(`No method named "${config}"`)}data[config]()}})}}defineJQueryPlugin(Popover);const NAME$2="scrollspy";const DATA_KEY$2="bs.scrollspy";const EVENT_KEY$2=`.${DATA_KEY$2}`;const DATA_API_KEY$1=".data-api";const Default$1={offset:10,method:"auto",target:""};const DefaultType$1={offset:"number",method:"string",target:"(string|element)"};const EVENT_ACTIVATE=`activate${EVENT_KEY$2}`;const EVENT_SCROLL=`scroll${EVENT_KEY$2}`;const EVENT_LOAD_DATA_API=`load${EVENT_KEY$2}${DATA_API_KEY$1}`;const CLASS_NAME_DROPDOWN_ITEM="dropdown-item";const CLASS_NAME_ACTIVE$1="active";const SELECTOR_DATA_SPY='[data-bs-spy="scroll"]';const SELECTOR_NAV_LIST_GROUP$1=".nav, .list-group";const SELECTOR_NAV_LINKS=".nav-link";const SELECTOR_NAV_ITEMS=".nav-item";const SELECTOR_LIST_ITEMS=".list-group-item";const SELECTOR_DROPDOWN$1=".dropdown";const SELECTOR_DROPDOWN_TOGGLE$1=".dropdown-toggle";const METHOD_OFFSET="offset";const METHOD_POSITION="position";class ScrollSpy extends BaseComponent{constructor(element,config){super(element);this._scrollElement=this._element.tagName==="BODY"?window:this._element;this._config=this._getConfig(config);this._selector=`${this._config.target} ${SELECTOR_NAV_LINKS}, ${this._config.target} ${SELECTOR_LIST_ITEMS}, ${this._config.target} .${CLASS_NAME_DROPDOWN_ITEM}`;this._offsets=[];this._targets=[];this._activeTarget=null;this._scrollHeight=0;EventHandler.on(this._scrollElement,EVENT_SCROLL,()=>this._process());this.refresh();this._process()}static get Default(){return Default$1}static get NAME(){return NAME$2}refresh(){const autoMethod=this._scrollElement===this._scrollElement.window?METHOD_OFFSET:METHOD_POSITION;const offsetMethod=this._config.method==="auto"?autoMethod:this._config.method;const offsetBase=offsetMethod===METHOD_POSITION?this._getScrollTop():0;this._offsets=[];this._targets=[];this._scrollHeight=this._getScrollHeight();const targets=SelectorEngine.find(this._selector);targets.map(element=>{const targetSelector=getSelectorFromElement(element);const target=targetSelector?SelectorEngine.findOne(targetSelector):null;if(target){const targetBCR=target.getBoundingClientRect();if(targetBCR.width||targetBCR.height){return[Manipulator[offsetMethod](target).top+offsetBase,targetSelector]}}return null}).filter(item=>item).sort((a,b)=>a[0]-b[0]).forEach(item=>{this._offsets.push(item[0]);this._targets.push(item[1])})}dispose(){EventHandler.off(this._scrollElement,EVENT_KEY$2);super.dispose()}_getConfig(config){config={...Default$1,...Manipulator.getDataAttributes(this._element),...typeof config==="object"&&config?config:{}};if(typeof config.target!=="string"&&isElement$1(config.target)){let{id}=config.target;if(!id){id=getUID(NAME$2);config.target.id=id}config.target=`#${id}`}typeCheckConfig(NAME$2,config,DefaultType$1);return config}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const scrollTop=this._getScrollTop()+this._config.offset;const scrollHeight=this._getScrollHeight();const maxScroll=this._config.offset+scrollHeight-this._getOffsetHeight();if(this._scrollHeight!==scrollHeight){this.refresh()}if(scrollTop>=maxScroll){const target=this._targets[this._targets.length-1];if(this._activeTarget!==target){this._activate(target)}return}if(this._activeTarget&&scrollTop<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null;this._clear();return}for(let i=this._offsets.length;i--;){const isActiveTarget=this._activeTarget!==this._targets[i]&&scrollTop>=this._offsets[i]&&(typeof this._offsets[i+1]==="undefined"||scrollTop<this._offsets[i+1]);if(isActiveTarget){this._activate(this._targets[i])}}}_activate(target){this._activeTarget=target;this._clear();const queries=this._selector.split(",").map(selector=>`${selector}[data-bs-target="${target}"],${selector}[href="${target}"]`);const link=SelectorEngine.findOne(queries.join(","));if(link.classList.contains(CLASS_NAME_DROPDOWN_ITEM)){SelectorEngine.findOne(SELECTOR_DROPDOWN_TOGGLE$1,link.closest(SELECTOR_DROPDOWN$1)).classList.add(CLASS_NAME_ACTIVE$1);link.classList.add(CLASS_NAME_ACTIVE$1)}else{link.classList.add(CLASS_NAME_ACTIVE$1);SelectorEngine.parents(link,SELECTOR_NAV_LIST_GROUP$1).forEach(listGroup=>{SelectorEngine.prev(listGroup,`${SELECTOR_NAV_LINKS}, ${SELECTOR_LIST_ITEMS}`).forEach(item=>item.classList.add(CLASS_NAME_ACTIVE$1));SelectorEngine.prev(listGroup,SELECTOR_NAV_ITEMS).forEach(navItem=>{SelectorEngine.children(navItem,SELECTOR_NAV_LINKS).forEach(item=>item.classList.add(CLASS_NAME_ACTIVE$1))})})}EventHandler.trigger(this._scrollElement,EVENT_ACTIVATE,{relatedTarget:target})}_clear(){SelectorEngine.find(this._selector).filter(node=>node.classList.contains(CLASS_NAME_ACTIVE$1)).forEach(node=>node.classList.remove(CLASS_NAME_ACTIVE$1))}static jQueryInterface(config){return this.each(function(){const data=ScrollSpy.getInstance(this)||new ScrollSpy(this,typeof config==="object"?config:{});if(typeof config!=="string"){return}if(typeof data[config]==="undefined"){throw new TypeError(`No method named "${config}"`)}data[config]()})}}EventHandler.on(window,EVENT_LOAD_DATA_API,()=>{SelectorEngine.find(SELECTOR_DATA_SPY).forEach(spy=>new ScrollSpy(spy))});defineJQueryPlugin(ScrollSpy);const NAME$1="tab";const DATA_KEY$1="bs.tab";const EVENT_KEY$1=`.${DATA_KEY$1}`;const DATA_API_KEY=".data-api";const EVENT_HIDE$1=`hide${EVENT_KEY$1}`;const EVENT_HIDDEN$1=`hidden${EVENT_KEY$1}`;const EVENT_SHOW$1=`show${EVENT_KEY$1}`;const EVENT_SHOWN$1=`shown${EVENT_KEY$1}`;const EVENT_CLICK_DATA_API=`click${EVENT_KEY$1}${DATA_API_KEY}`;const CLASS_NAME_DROPDOWN_MENU="dropdown-menu";const CLASS_NAME_ACTIVE="active";const CLASS_NAME_FADE$1="fade";const CLASS_NAME_SHOW$1="show";const SELECTOR_DROPDOWN=".dropdown";const SELECTOR_NAV_LIST_GROUP=".nav, .list-group";const SELECTOR_ACTIVE=".active";const SELECTOR_ACTIVE_UL=":scope > li > .active";const SELECTOR_DATA_TOGGLE='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';const SELECTOR_DROPDOWN_TOGGLE=".dropdown-toggle";const SELECTOR_DROPDOWN_ACTIVE_CHILD=":scope > .dropdown-menu .active";class Tab extends BaseComponent{static get NAME(){return NAME$1}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(CLASS_NAME_ACTIVE)){return}let previous;const target=getElementFromSelector(this._element);const listElement=this._element.closest(SELECTOR_NAV_LIST_GROUP);if(listElement){const itemSelector=listElement.nodeName==="UL"||listElement.nodeName==="OL"?SELECTOR_ACTIVE_UL:SELECTOR_ACTIVE;previous=SelectorEngine.find(itemSelector,listElement);previous=previous[previous.length-1]}const hideEvent=previous?EventHandler.trigger(previous,EVENT_HIDE$1,{relatedTarget:this._element}):null;const showEvent=EventHandler.trigger(this._element,EVENT_SHOW$1,{relatedTarget:previous});if(showEvent.defaultPrevented||hideEvent!==null&&hideEvent.defaultPrevented){return}this._activate(this._element,listElement);const complete=()=>{EventHandler.trigger(previous,EVENT_HIDDEN$1,{relatedTarget:this._element});EventHandler.trigger(this._element,EVENT_SHOWN$1,{relatedTarget:previous})};if(target){this._activate(target,target.parentNode,complete)}else{complete()}}_activate(element,container,callback){const activeElements=container&&(container.nodeName==="UL"||container.nodeName==="OL")?SelectorEngine.find(SELECTOR_ACTIVE_UL,container):SelectorEngine.children(container,SELECTOR_ACTIVE);const active=activeElements[0];const isTransitioning=callback&&active&&active.classList.contains(CLASS_NAME_FADE$1);const complete=()=>this._transitionComplete(element,active,callback);if(active&&isTransitioning){active.classList.remove(CLASS_NAME_SHOW$1);this._queueCallback(complete,element,true)}else{complete()}}_transitionComplete(element,active,callback){if(active){active.classList.remove(CLASS_NAME_ACTIVE);const dropdownChild=SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD,active.parentNode);if(dropdownChild){dropdownChild.classList.remove(CLASS_NAME_ACTIVE)}if(active.getAttribute("role")==="tab"){active.setAttribute("aria-selected",false)}}element.classList.add(CLASS_NAME_ACTIVE);if(element.getAttribute("role")==="tab"){element.setAttribute("aria-selected",true)}reflow(element);if(element.classList.contains(CLASS_NAME_FADE$1)){element.classList.add(CLASS_NAME_SHOW$1)}let parent=element.parentNode;if(parent&&parent.nodeName==="LI"){parent=parent.parentNode}if(parent&&parent.classList.contains(CLASS_NAME_DROPDOWN_MENU)){const dropdownElement=element.closest(SELECTOR_DROPDOWN);if(dropdownElement){SelectorEngine.find(SELECTOR_DROPDOWN_TOGGLE,dropdownElement).forEach(dropdown=>dropdown.classList.add(CLASS_NAME_ACTIVE))}element.setAttribute("aria-expanded",true)}if(callback){callback()}}static jQueryInterface(config){return this.each(function(){const data=Data.get(this,DATA_KEY$1)||new Tab(this);if(typeof config==="string"){if(typeof data[config]==="undefined"){throw new TypeError(`No method named "${config}"`)}data[config]()}})}}EventHandler.on(document,EVENT_CLICK_DATA_API,SELECTOR_DATA_TOGGLE,function(event){if(["A","AREA"].includes(this.tagName)){event.preventDefault()}if(isDisabled(this)){return}const data=Data.get(this,DATA_KEY$1)||new Tab(this);data.show()});defineJQueryPlugin(Tab);const NAME="toast";const DATA_KEY="bs.toast";const EVENT_KEY=`.${DATA_KEY}`;const EVENT_CLICK_DISMISS=`click.dismiss${EVENT_KEY}`;const EVENT_MOUSEOVER=`mouseover${EVENT_KEY}`;const EVENT_MOUSEOUT=`mouseout${EVENT_KEY}`;const EVENT_FOCUSIN=`focusin${EVENT_KEY}`;const EVENT_FOCUSOUT=`focusout${EVENT_KEY}`;const EVENT_HIDE=`hide${EVENT_KEY}`;const EVENT_HIDDEN=`hidden${EVENT_KEY}`;const EVENT_SHOW=`show${EVENT_KEY}`;const EVENT_SHOWN=`shown${EVENT_KEY}`;const CLASS_NAME_FADE="fade";const CLASS_NAME_HIDE="hide";const CLASS_NAME_SHOW="show";const CLASS_NAME_SHOWING="showing";const DefaultType={animation:"boolean",autohide:"boolean",delay:"number"};const Default={animation:true,autohide:true,delay:5e3};const SELECTOR_DATA_DISMISS='[data-bs-dismiss="toast"]';class Toast extends BaseComponent{constructor(element,config){super(element);this._config=this._getConfig(config);this._timeout=null;this._hasMouseInteraction=false;this._hasKeyboardInteraction=false;this._setListeners()}static get DefaultType(){return DefaultType}static get Default(){return Default}static get NAME(){return NAME}show(){const showEvent=EventHandler.trigger(this._element,EVENT_SHOW);if(showEvent.defaultPrevented){return}this._clearTimeout();if(this._config.animation){this._element.classList.add(CLASS_NAME_FADE)}const complete=()=>{this._element.classList.remove(CLASS_NAME_SHOWING);this._element.classList.add(CLASS_NAME_SHOW);EventHandler.trigger(this._element,EVENT_SHOWN);this._maybeScheduleHide()};this._element.classList.remove(CLASS_NAME_HIDE);reflow(this._element);this._element.classList.add(CLASS_NAME_SHOWING);this._queueCallback(complete,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(CLASS_NAME_SHOW)){return}const hideEvent=EventHandler.trigger(this._element,EVENT_HIDE);if(hideEvent.defaultPrevented){return}const complete=()=>{this._element.classList.add(CLASS_NAME_HIDE);EventHandler.trigger(this._element,EVENT_HIDDEN)};this._element.classList.remove(CLASS_NAME_SHOW);this._queueCallback(complete,this._element,this._config.animation)}dispose(){this._clearTimeout();if(this._element.classList.contains(CLASS_NAME_SHOW)){this._element.classList.remove(CLASS_NAME_SHOW)}super.dispose()}_getConfig(config){config={...Default,...Manipulator.getDataAttributes(this._element),...typeof config==="object"&&config?config:{}};typeCheckConfig(NAME,config,this.constructor.DefaultType);return config}_maybeScheduleHide(){if(!this._config.autohide){return}if(this._hasMouseInteraction||this._hasKeyboardInteraction){return}this._timeout=setTimeout(()=>{this.hide()},this._config.delay)}_onInteraction(event,isInteracting){switch(event.type){case"mouseover":case"mouseout":this._hasMouseInteraction=isInteracting;break;case"focusin":case"focusout":this._hasKeyboardInteraction=isInteracting;break}if(isInteracting){this._clearTimeout();return}const nextElement=event.relatedTarget;if(this._element===nextElement||this._element.contains(nextElement)){return}this._maybeScheduleHide()}_setListeners(){EventHandler.on(this._element,EVENT_CLICK_DISMISS,SELECTOR_DATA_DISMISS,()=>this.hide());EventHandler.on(this._element,EVENT_MOUSEOVER,event=>this._onInteraction(event,true));EventHandler.on(this._element,EVENT_MOUSEOUT,event=>this._onInteraction(event,false));EventHandler.on(this._element,EVENT_FOCUSIN,event=>this._onInteraction(event,true));EventHandler.on(this._element,EVENT_FOCUSOUT,event=>this._onInteraction(event,false))}_clearTimeout(){clearTimeout(this._timeout);this._timeout=null}static jQueryInterface(config){return this.each(function(){let data=Data.get(this,DATA_KEY);const _config=typeof config==="object"&&config;if(!data){data=new Toast(this,_config)}if(typeof config==="string"){if(typeof data[config]==="undefined"){throw new TypeError(`No method named "${config}"`)}data[config](this)}})}}defineJQueryPlugin(Toast);var index_umd={Alert:Alert,Button:Button,Carousel:Carousel,Collapse:Collapse,Dropdown:Dropdown,Modal:Modal,Offcanvas:Offcanvas,Popover:Popover,ScrollSpy:ScrollSpy,Tab:Tab,Toast:Toast,Tooltip:Tooltip};return index_umd});;
function GetURLParameter (sParam) {
  const sPageURL = window.location.search.substring(1);
  const sURLVariables = sPageURL.split('&');
  for (let i = 0; i < sURLVariables.length; i++) {
    const sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] === sParam) {
      return sParameterName[1];
    }
  }
}

jQuery(document).ready(function ($) {
  const referral_id = GetURLParameter('from');
  if (referral_id !== undefined && parseInt(referral_id) > 0) {
    document.cookie = 'referral_id=' + parseInt(referral_id).toString() + '; max-age=604800';
  }

  let billmgrCounter = $('#billmgr-counter');
  if (billmgrCounter.length) {
    billmgrCounter.on('load', function () {
      const domain = (LANG === 'ru') ? 'ru' : 'com';
      $('body').append('<script id="billmgr-sesid" src="https://my.ispserver.' + domain + '/mancgi/getmysesid" async=""></script>');
      setTimeout(function () {
        if (typeof getSesId === 'function') {
          document.cookie = 'referral_sesid=' + getSesId() + '; max-age=604800';
        }
      }, 2000);
    });
  }
});
;
/*! URI.js v1.19.7 http://medialize.github.io/URI.js/ */
/* build contains: URI.js */
/*
 URI.js - Mutating URLs

 Version: 1.19.7

 Author: Rodney Rehm
 Web: http://medialize.github.io/URI.js/

 Licensed under
   MIT License http://www.opensource.org/licenses/mit-license

*/
(function(q,A){"object"===typeof module&&module.exports?module.exports=A(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],A):q.URI=A(q.punycode,q.IPv6,q.SecondLevelDomains,q)})(this,function(q,A,y,n){function d(a,b){var c=1<=arguments.length,e=2<=arguments.length;if(!(this instanceof d))return c?e?new d(a,b):new d(a):new d;if(void 0===a){if(c)throw new TypeError("undefined is not a valid argument for URI");
a="undefined"!==typeof location?location.href+"":""}if(null===a&&c)throw new TypeError("null is not a valid argument for URI");this.href(a);return void 0!==b?this.absoluteTo(b):this}function w(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function z(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function l(a){return"Array"===z(a)}function I(a,b){var c={},e;if("RegExp"===z(b))c=null;else if(l(b)){var f=0;for(e=b.length;f<e;f++)c[b[f]]=!0}else c[b]=
!0;f=0;for(e=a.length;f<e;f++)if(c&&void 0!==c[a[f]]||!c&&b.test(a[f]))a.splice(f,1),e--,f--;return a}function B(a,b){var c;if(l(b)){var e=0;for(c=b.length;e<c;e++)if(!B(a,b[e]))return!1;return!0}var f=z(b);e=0;for(c=a.length;e<c;e++)if("RegExp"===f){if("string"===typeof a[e]&&a[e].match(b))return!0}else if(a[e]===b)return!0;return!1}function J(a,b){if(!l(a)||!l(b)||a.length!==b.length)return!1;a.sort();b.sort();for(var c=0,e=a.length;c<e;c++)if(a[c]!==b[c])return!1;return!0}function E(a){return a.replace(/^\/+|\/+$/g,
"")}function L(a){return escape(a)}function F(a){return encodeURIComponent(a).replace(/[!'()*]/g,L).replace(/\*/g,"%2A")}function C(a){return function(b,c){if(void 0===b)return this._parts[a]||"";this._parts[a]=b||null;this.build(!c);return this}}function K(a,b){return function(c,e){if(void 0===c)return this._parts[a]||"";null!==c&&(c+="",c.charAt(0)===b&&(c=c.substring(1)));this._parts[a]=c;this.build(!e);return this}}var M=n&&n.URI;d.version="1.19.7";var g=d.prototype,t=Object.prototype.hasOwnProperty;
d._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,preventInvalidHostname:d.preventInvalidHostname,duplicateQueryParameters:d.duplicateQueryParameters,escapeQuerySpace:d.escapeQuerySpace}};d.preventInvalidHostname=!1;d.duplicateQueryParameters=!1;d.escapeQuerySpace=!0;d.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;d.idn_expression=/[^a-z0-9\._-]/i;d.punycode_expression=/(xn--)/i;d.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
d.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
d.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;d.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/,parens:/(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g};d.defaultPorts={http:"80",https:"443",ftp:"21",
gopher:"70",ws:"80",wss:"443"};d.hostProtocols=["http","https"];d.invalid_hostname_characters=/[^a-zA-Z0-9\.\-:_]/;d.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};d.getDomAttribute=function(a){if(a&&a.nodeName){var b=a.nodeName.toLowerCase();if("input"!==b||"image"===a.type)return d.domAttributes[b]}};d.encode=F;d.decode=decodeURIComponent;d.iso8859=
function(){d.encode=escape;d.decode=unescape};d.unicode=function(){d.encode=F;d.decode=decodeURIComponent};d.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@",
"%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};d.encodeQuery=function(a,b){var c=d.encode(a+"");void 0===b&&(b=d.escapeQuerySpace);return b?c.replace(/%20/g,"+"):c};d.decodeQuery=
function(a,b){a+="";void 0===b&&(b=d.escapeQuerySpace);try{return d.decode(b?a.replace(/\+/g,"%20"):a)}catch(c){return a}};var x={encode:"encode",decode:"decode"},D,G=function(a,b){return function(c){try{return d[b](c+"").replace(d.characters[a][b].expression,function(e){return d.characters[a][b].map[e]})}catch(e){return c}}};for(D in x)d[D+"PathSegment"]=G("pathname",x[D]),d[D+"UrnPathSegment"]=G("urnpath",x[D]);x=function(a,b,c){return function(e){var f=c?function(m){return d[b](d[c](m))}:d[b];
e=(e+"").split(a);for(var h=0,k=e.length;h<k;h++)e[h]=f(e[h]);return e.join(a)}};d.decodePath=x("/","decodePathSegment");d.decodeUrnPath=x(":","decodeUrnPathSegment");d.recodePath=x("/","encodePathSegment","decode");d.recodeUrnPath=x(":","encodeUrnPathSegment","decode");d.encodeReserved=G("reserved","encode");d.parse=function(a,b){b||(b={preventInvalidHostname:d.preventInvalidHostname});var c=a.indexOf("#");-1<c&&(b.fragment=a.substring(c+1)||null,a=a.substring(0,c));c=a.indexOf("?");-1<c&&(b.query=
a.substring(c+1)||null,a=a.substring(0,c));a=a.replace(/^(https?|ftp|wss?)?:[/\\]*/,"$1://");"//"===a.substring(0,2)?(b.protocol=null,a=a.substring(2),a=d.parseAuthority(a,b)):(c=a.indexOf(":"),-1<c&&(b.protocol=a.substring(0,c)||null,b.protocol&&!b.protocol.match(d.protocol_expression)?b.protocol=void 0:"//"===a.substring(c+1,c+3).replace(/\\/g,"/")?(a=a.substring(c+3),a=d.parseAuthority(a,b)):(a=a.substring(c+1),b.urn=!0)));b.path=a;return b};d.parseHost=function(a,b){a||(a="");a=a.replace(/\\/g,
"/");var c=a.indexOf("/");-1===c&&(c=a.length);if("["===a.charAt(0)){var e=a.indexOf("]");b.hostname=a.substring(1,e)||null;b.port=a.substring(e+2,c)||null;"/"===b.port&&(b.port=null)}else{var f=a.indexOf(":");e=a.indexOf("/");f=a.indexOf(":",f+1);-1!==f&&(-1===e||f<e)?(b.hostname=a.substring(0,c)||null,b.port=null):(e=a.substring(0,c).split(":"),b.hostname=e[0]||null,b.port=e[1]||null)}b.hostname&&"/"!==a.substring(c).charAt(0)&&(c++,a="/"+a);b.preventInvalidHostname&&d.ensureValidHostname(b.hostname,
b.protocol);b.port&&d.ensureValidPort(b.port);return a.substring(c)||"/"};d.parseAuthority=function(a,b){a=d.parseUserinfo(a,b);return d.parseHost(a,b)};d.parseUserinfo=function(a,b){var c=a;-1!==a.indexOf("\\")&&(a=a.replace(/\\/g,"/"));var e=a.indexOf("/"),f=a.lastIndexOf("@",-1<e?e:a.length-1);-1<f&&(-1===e||f<e)?(e=a.substring(0,f).split(":"),b.username=e[0]?d.decode(e[0]):null,e.shift(),b.password=e[0]?d.decode(e.join(":")):null,a=c.substring(f+1)):(b.username=null,b.password=null);return a};
d.parseQuery=function(a,b){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var c={},e=a.split("&"),f=e.length,h,k,m=0;m<f;m++)if(h=e[m].split("="),k=d.decodeQuery(h.shift(),b),h=h.length?d.decodeQuery(h.join("="),b):null,"__proto__"!==k)if(t.call(c,k)){if("string"===typeof c[k]||null===c[k])c[k]=[c[k]];c[k].push(h)}else c[k]=h;return c};d.build=function(a){var b="",c=!1;a.protocol&&(b+=a.protocol+":");a.urn||!b&&!a.hostname||(b+="//",c=!0);b+=d.buildAuthority(a)||
"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&c&&(b+="/"),b+=a.path);"string"===typeof a.query&&a.query&&(b+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};d.buildHost=function(a){var b="";if(a.hostname)b=d.ip6_expression.test(a.hostname)?b+("["+a.hostname+"]"):b+a.hostname;else return"";a.port&&(b+=":"+a.port);return b};d.buildAuthority=function(a){return d.buildUserinfo(a)+d.buildHost(a)};d.buildUserinfo=function(a){var b="";a.username&&(b+=d.encode(a.username));
a.password&&(b+=":"+d.encode(a.password));b&&(b+="@");return b};d.buildQuery=function(a,b,c){var e="",f,h;for(f in a)if("__proto__"!==f&&t.call(a,f))if(l(a[f])){var k={};var m=0;for(h=a[f].length;m<h;m++)void 0!==a[f][m]&&void 0===k[a[f][m]+""]&&(e+="&"+d.buildQueryParameter(f,a[f][m],c),!0!==b&&(k[a[f][m]+""]=!0))}else void 0!==a[f]&&(e+="&"+d.buildQueryParameter(f,a[f],c));return e.substring(1)};d.buildQueryParameter=function(a,b,c){return d.encodeQuery(a,c)+(null!==b?"="+d.encodeQuery(b,c):"")};
d.addQuery=function(a,b,c){if("object"===typeof b)for(var e in b)t.call(b,e)&&d.addQuery(a,e,b[e]);else if("string"===typeof b)void 0===a[b]?a[b]=c:("string"===typeof a[b]&&(a[b]=[a[b]]),l(c)||(c=[c]),a[b]=(a[b]||[]).concat(c));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};d.setQuery=function(a,b,c){if("object"===typeof b)for(var e in b)t.call(b,e)&&d.setQuery(a,e,b[e]);else if("string"===typeof b)a[b]=void 0===c?null:c;else throw new TypeError("URI.setQuery() accepts an object, string as the name parameter");
};d.removeQuery=function(a,b,c){var e;if(l(b))for(c=0,e=b.length;c<e;c++)a[b[c]]=void 0;else if("RegExp"===z(b))for(e in a)b.test(e)&&(a[e]=void 0);else if("object"===typeof b)for(e in b)t.call(b,e)&&d.removeQuery(a,e,b[e]);else if("string"===typeof b)void 0!==c?"RegExp"===z(c)?!l(a[b])&&c.test(a[b])?a[b]=void 0:a[b]=I(a[b],c):a[b]!==String(c)||l(c)&&1!==c.length?l(a[b])&&(a[b]=I(a[b],c)):a[b]=void 0:a[b]=void 0;else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");
};d.hasQuery=function(a,b,c,e){switch(z(b)){case "String":break;case "RegExp":for(var f in a)if(t.call(a,f)&&b.test(f)&&(void 0===c||d.hasQuery(a,f,c)))return!0;return!1;case "Object":for(var h in b)if(t.call(b,h)&&!d.hasQuery(a,h,b[h]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter");}switch(z(c)){case "Undefined":return b in a;case "Boolean":return a=!(l(a[b])?!a[b].length:!a[b]),c===a;case "Function":return!!c(a[b],
b,a);case "Array":return l(a[b])?(e?B:J)(a[b],c):!1;case "RegExp":return l(a[b])?e?B(a[b],c):!1:!(!a[b]||!a[b].match(c));case "Number":c=String(c);case "String":return l(a[b])?e?B(a[b],c):!1:a[b]===c;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};d.joinPaths=function(){for(var a=[],b=[],c=0,e=0;e<arguments.length;e++){var f=new d(arguments[e]);a.push(f);f=f.segment();for(var h=0;h<f.length;h++)"string"===typeof f[h]&&
b.push(f[h]),f[h]&&c++}if(!b.length||!c)return new d("");b=(new d("")).segment(b);""!==a[0].path()&&"/"!==a[0].path().slice(0,1)||b.path("/"+b.path());return b.normalize()};d.commonPath=function(a,b){var c=Math.min(a.length,b.length),e;for(e=0;e<c;e++)if(a.charAt(e)!==b.charAt(e)){e--;break}if(1>e)return a.charAt(0)===b.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(e)||"/"!==b.charAt(e))e=a.substring(0,e).lastIndexOf("/");return a.substring(0,e+1)};d.withinString=function(a,b,c){c||(c={});
var e=c.start||d.findUri.start,f=c.end||d.findUri.end,h=c.trim||d.findUri.trim,k=c.parens||d.findUri.parens,m=/[a-z0-9-]=["']?$/i;for(e.lastIndex=0;;){var p=e.exec(a);if(!p)break;var v=p.index;if(c.ignoreHtml){var r=a.slice(Math.max(v-3,0),v);if(r&&m.test(r))continue}var u=v+a.slice(v).search(f);r=a.slice(v,u);for(u=-1;;){var H=k.exec(r);if(!H)break;u=Math.max(u,H.index+H[0].length)}r=-1<u?r.slice(0,u)+r.slice(u).replace(h,""):r.replace(h,"");r.length<=p[0].length||c.ignore&&c.ignore.test(r)||(u=
v+r.length,p=b(r,v,u,a),void 0===p?e.lastIndex=u:(p=String(p),a=a.slice(0,v)+p+a.slice(u),e.lastIndex=v+p.length))}e.lastIndex=0;return a};d.ensureValidHostname=function(a,b){var c=!!a,e=!1;b&&(e=B(d.hostProtocols,b));if(e&&!c)throw new TypeError("Hostname cannot be empty, if protocol is "+b);if(a&&a.match(d.invalid_hostname_characters)){if(!q)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-:_] and Punycode.js is not available');if(q.toASCII(a).match(d.invalid_hostname_characters))throw new TypeError('Hostname "'+
a+'" contains characters other than [A-Z0-9.-:_]');}};d.ensureValidPort=function(a){if(a){var b=Number(a);if(!(/^[0-9]+$/.test(b)&&0<b&&65536>b))throw new TypeError('Port "'+a+'" is not a valid port');}};d.noConflict=function(a){if(a)return a={URI:this.noConflict()},n.URITemplate&&"function"===typeof n.URITemplate.noConflict&&(a.URITemplate=n.URITemplate.noConflict()),n.IPv6&&"function"===typeof n.IPv6.noConflict&&(a.IPv6=n.IPv6.noConflict()),n.SecondLevelDomains&&"function"===typeof n.SecondLevelDomains.noConflict&&
(a.SecondLevelDomains=n.SecondLevelDomains.noConflict()),a;n.URI===this&&(n.URI=M);return this};g.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=d.build(this._parts),this._deferred_build=!1;return this};g.clone=function(){return new d(this)};g.valueOf=g.toString=function(){return this.build(!1)._string};g.protocol=C("protocol");g.username=C("username");g.password=C("password");g.hostname=C("hostname");g.port=C("port");g.query=K("query","?");
g.fragment=K("fragment","#");g.search=function(a,b){var c=this.query(a,b);return"string"===typeof c&&c.length?"?"+c:c};g.hash=function(a,b){var c=this.fragment(a,b);return"string"===typeof c&&c.length?"#"+c:c};g.pathname=function(a,b){if(void 0===a||!0===a){var c=this._parts.path||(this._parts.hostname?"/":"");return a?(this._parts.urn?d.decodeUrnPath:d.decodePath)(c):c}this._parts.path=this._parts.urn?a?d.recodeUrnPath(a):"":a?d.recodePath(a):"/";this.build(!b);return this};g.path=g.pathname;g.href=
function(a,b){var c;if(void 0===a)return this.toString();this._string="";this._parts=d._parts();var e=a instanceof d,f="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(f=d.getDomAttribute(a),a=a[f]||"",f=!1);!e&&f&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a||a instanceof String)this._parts=d.parse(String(a),this._parts);else if(e||f){e=e?a._parts:a;for(c in e)"query"!==c&&t.call(this._parts,c)&&(this._parts[c]=e[c]);e.query&&this.query(e.query,!1)}else throw new TypeError("invalid input");
this.build(!b);return this};g.is=function(a){var b=!1,c=!1,e=!1,f=!1,h=!1,k=!1,m=!1,p=!this._parts.urn;this._parts.hostname&&(p=!1,c=d.ip4_expression.test(this._parts.hostname),e=d.ip6_expression.test(this._parts.hostname),b=c||e,h=(f=!b)&&y&&y.has(this._parts.hostname),k=f&&d.idn_expression.test(this._parts.hostname),m=f&&d.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return p;case "absolute":return!p;case "domain":case "name":return f;case "sld":return h;
case "ip":return b;case "ip4":case "ipv4":case "inet4":return c;case "ip6":case "ipv6":case "inet6":return e;case "idn":return k;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return m}return null};var N=g.protocol,O=g.port,P=g.hostname;g.protocol=function(a,b){if(a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(d.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return N.call(this,a,
b)};g.scheme=g.protocol;g.port=function(a,b){if(this._parts.urn)return void 0===a?"":this;void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),d.ensureValidPort(a)));return O.call(this,a,b)};g.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var c={preventInvalidHostname:this._parts.preventInvalidHostname};if("/"!==d.parseHost(a,c))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');a=c.hostname;this._parts.preventInvalidHostname&&
d.ensureValidHostname(a,this._parts.protocol)}return P.call(this,a,b)};g.origin=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var c=this.protocol();return this.authority()?(c?c+"://":"")+this.authority():""}c=d(a);this.protocol(c.protocol()).authority(c.authority()).build(!b);return this};g.host=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?d.buildHost(this._parts):"";if("/"!==d.parseHost(a,this._parts))throw new TypeError('Hostname "'+
a+'" contains characters other than [A-Z0-9.-]');this.build(!b);return this};g.authority=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?d.buildAuthority(this._parts):"";if("/"!==d.parseAuthority(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');this.build(!b);return this};g.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var c=d.buildUserinfo(this._parts);return c?
c.substring(0,c.length-1):c}"@"!==a[a.length-1]&&(a+="@");d.parseUserinfo(a,this._parts);this.build(!b);return this};g.resource=function(a,b){if(void 0===a)return this.path()+this.search()+this.hash();var c=d.parse(a);this._parts.path=c.path;this._parts.query=c.query;this._parts.fragment=c.fragment;this.build(!b);return this};g.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.length-this.domain().length-
1;return this._parts.hostname.substring(0,c)||""}c=this._parts.hostname.length-this.domain().length;c=this._parts.hostname.substring(0,c);c=new RegExp("^"+w(c));a&&"."!==a.charAt(a.length-1)&&(a+=".");if(-1!==a.indexOf(":"))throw new TypeError("Domains cannot contain colons");a&&d.ensureValidHostname(a,this._parts.protocol);this._parts.hostname=this._parts.hostname.replace(c,a);this.build(!b);return this};g.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=
a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.match(/\./g);if(c&&2>c.length)return this._parts.hostname;c=this._parts.hostname.length-this.tld(b).length-1;c=this._parts.hostname.lastIndexOf(".",c-1)+1;return this._parts.hostname.substring(c)||""}if(!a)throw new TypeError("cannot set domain empty");if(-1!==a.indexOf(":"))throw new TypeError("Domains cannot contain colons");d.ensureValidHostname(a,this._parts.protocol);!this._parts.hostname||
this.is("IP")?this._parts.hostname=a:(c=new RegExp(w(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a));this.build(!b);return this};g.tld=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.lastIndexOf(".");c=this._parts.hostname.substring(c+1);return!0!==b&&y&&y.list[c.toLowerCase()]?y.get(this._parts.hostname)||c:c}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(y&&
y.is(a))c=new RegExp(w(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");c=new RegExp(w(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(c,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};g.directory=function(a,b){if(this._parts.urn)return void 0===
a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var c=this._parts.path.length-this.filename().length-1;c=this._parts.path.substring(0,c)||(this._parts.hostname?"/":"");return a?d.decodePath(c):c}c=this._parts.path.length-this.filename().length;c=this._parts.path.substring(0,c);c=new RegExp("^"+w(c));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=d.recodePath(a);this._parts.path=
this._parts.path.replace(c,a);this.build(!b);return this};g.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if("string"!==typeof a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this._parts.path.lastIndexOf("/");c=this._parts.path.substring(c+1);return a?d.decodePathSegment(c):c}c=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(c=!0);var e=new RegExp(w(this.filename())+"$");a=d.recodePath(a);this._parts.path=this._parts.path.replace(e,a);c?this.normalizePath(b):
this.build(!b);return this};g.suffix=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this.filename(),e=c.lastIndexOf(".");if(-1===e)return"";c=c.substring(e+1);c=/^[a-z0-9%]+$/i.test(c)?c:"";return a?d.decodePathSegment(c):c}"."===a.charAt(0)&&(a=a.substring(1));if(c=this.suffix())e=a?new RegExp(w(c)+"$"):new RegExp(w("."+c)+"$");else{if(!a)return this;this._parts.path+="."+d.recodePath(a)}e&&(a=d.recodePath(a),
this._parts.path=this._parts.path.replace(e,a));this.build(!b);return this};g.segment=function(a,b,c){var e=this._parts.urn?":":"/",f=this.path(),h="/"===f.substring(0,1);f=f.split(e);void 0!==a&&"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');h&&f.shift();0>a&&(a=Math.max(f.length+a,0));if(void 0===b)return void 0===a?f:f[a];if(null===a||void 0===f[a])if(l(b)){f=[];a=0;for(var k=b.length;a<k;a++)if(b[a].length||
f.length&&f[f.length-1].length)f.length&&!f[f.length-1].length&&f.pop(),f.push(E(b[a]))}else{if(b||"string"===typeof b)b=E(b),""===f[f.length-1]?f[f.length-1]=b:f.push(b)}else b?f[a]=E(b):f.splice(a,1);h&&f.unshift("");return this.path(f.join(e),c)};g.segmentCoded=function(a,b,c){var e;"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0===b){a=this.segment(a,b,c);if(l(a)){var f=0;for(e=a.length;f<e;f++)a[f]=d.decode(a[f])}else a=void 0!==a?d.decode(a):void 0;return a}if(l(b))for(f=0,e=b.length;f<e;f++)b[f]=
d.encode(b[f]);else b="string"===typeof b||b instanceof String?d.encode(b):b;return this.segment(a,b,c)};var Q=g.query;g.query=function(a,b){if(!0===a)return d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var c=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace),e=a.call(this,c);this._parts.query=d.buildQuery(e||c,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!b);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=
d.buildQuery(a,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!b),this):Q.call(this,a,b)};g.setQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"===typeof a||a instanceof String)e[a]=void 0!==b?b:null;else if("object"===typeof a)for(var f in a)t.call(a,f)&&(e[f]=a[f]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};g.addQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);d.addQuery(e,a,void 0===b?null:b);this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};g.removeQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);d.removeQuery(e,a,b);this._parts.query=
d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};g.hasQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return d.hasQuery(e,a,b,c)};g.setSearch=g.setQuery;g.addSearch=g.addQuery;g.removeSearch=g.removeQuery;g.hasSearch=g.hasQuery;g.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};
g.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};g.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&q?this._parts.hostname=q.toASCII(this._parts.hostname):this.is("IPv6")&&A&&(this._parts.hostname=A.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};g.normalizePort=function(a){"string"===typeof this._parts.protocol&&
this._parts.port===d.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};g.normalizePath=function(a){var b=this._parts.path;if(!b)return this;if(this._parts.urn)return this._parts.path=d.recodeUrnPath(this._parts.path),this.build(!a),this;if("/"===this._parts.path)return this;b=d.recodePath(b);var c="";if("/"!==b.charAt(0)){var e=!0;b="/"+b}if("/.."===b.slice(-3)||"/."===b.slice(-2))b+="/";b=b.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");e&&(c=b.substring(1).match(/^(\.\.\/)+/)||
"")&&(c=c[0]);for(;;){var f=b.search(/\/\.\.(\/|$)/);if(-1===f)break;else if(0===f){b=b.substring(3);continue}var h=b.substring(0,f).lastIndexOf("/");-1===h&&(h=f);b=b.substring(0,h)+b.substring(f+3)}e&&this.is("relative")&&(b=c+b.substring(1));this._parts.path=b;this.build(!a);return this};g.normalizePathname=g.normalizePath;g.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(d.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=
null,this.build(!a));return this};g.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};g.normalizeSearch=g.normalizeQuery;g.normalizeHash=g.normalizeFragment;g.iso8859=function(){var a=d.encode,b=d.decode;d.encode=escape;d.decode=decodeURIComponent;try{this.normalize()}finally{d.encode=a,d.decode=b}return this};g.unicode=function(){var a=d.encode,b=d.decode;d.encode=F;d.decode=unescape;try{this.normalize()}finally{d.encode=a,d.decode=b}return this};
g.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&q?(b+=q.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var c="",e=0,f=a._parts.query.split("&"),h=f.length;e<h;e++){var k=(f[e]||"").split("=");c+="&"+d.decodeQuery(k[0],this._parts.escapeQuerySpace).replace(/&/g,
"%26");void 0!==k[1]&&(c+="="+d.decodeQuery(k[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}b+="?"+c.substring(1)}return b+=d.decodeQuery(a.hash(),!0)};g.absoluteTo=function(a){var b=this.clone(),c=["protocol","username","password","hostname","port"],e,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof d||(a=new d(a));if(b._parts.protocol)return b;b._parts.protocol=a._parts.protocol;if(this._parts.hostname)return b;for(e=0;f=c[e];e++)b._parts[f]=
a._parts[f];b._parts.path?(".."===b._parts.path.substring(-2)&&(b._parts.path+="/"),"/"!==b.path().charAt(0)&&(c=(c=a.directory())?c:0===a.path().indexOf("/")?"/":"",b._parts.path=(c?c+"/":"")+b._parts.path,b.normalizePath())):(b._parts.path=a._parts.path,b._parts.query||(b._parts.query=a._parts.query));b.build();return b};g.relativeTo=function(a){var b=this.clone().normalize();if(b._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new d(a)).normalize();var c=
b._parts;var e=a._parts;var f=b.path();a=a.path();if("/"!==f.charAt(0))throw Error("URI is already relative");if("/"!==a.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");c.protocol===e.protocol&&(c.protocol=null);if(c.username===e.username&&c.password===e.password&&null===c.protocol&&null===c.username&&null===c.password&&c.hostname===e.hostname&&c.port===e.port)c.hostname=null,c.port=null;else return b.build();if(f===a)return c.path="",b.build();f=d.commonPath(f,a);
if(!f)return b.build();e=e.path.substring(f.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");c.path=e+c.path.substring(f.length)||"./";return b.build()};g.equals=function(a){var b=this.clone(),c=new d(a);a={};var e;b.normalize();c.normalize();if(b.toString()===c.toString())return!0;var f=b.query();var h=c.query();b.query("");c.query("");if(b.toString()!==c.toString()||f.length!==h.length)return!1;b=d.parseQuery(f,this._parts.escapeQuerySpace);h=d.parseQuery(h,this._parts.escapeQuerySpace);for(e in b)if(t.call(b,
e)){if(!l(b[e])){if(b[e]!==h[e])return!1}else if(!J(b[e],h[e]))return!1;a[e]=!0}for(e in h)if(t.call(h,e)&&!a[e])return!1;return!0};g.preventInvalidHostname=function(a){this._parts.preventInvalidHostname=!!a;return this};g.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};g.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return d});
;
(function ($) {
  $.fn.extend({
    isp_menu: function () {
      var obj,
        o = {
          opened_sub_object: null,
          screen_size: $('body').attr('data-screen')
        },
        methods = {
          init: function (instance) {
            o.menu_block = $(obj).find('.block-menu');
            o.expanded_links = $(obj).find('li.expanded');
            o.main_simple = $(obj).find('.content > ul > li:not(.expanded)');
            o.nav_button = $(obj).find('.isp-custom__navbutton');
          },

          show_sub: function (expanded) {
            methods.hide_sub();

            var new_sub = expanded.find('.isp-custom__submenu');
            o.opened_sub_object = new_sub;
            new_sub.show().addClass('active');
          },

          hide_sub: function () {
            if (o.opened_sub_object != null) {
              o.opened_sub_object.hide().removeClass('active');
              o.opened_sub_object = null;
            }
          },

          toggle_sub: function (expanded) {
            var new_sub = expanded.find('.isp-custom__submenu');

            if (o.opened_sub_object != null && o.opened_sub_object.is(new_sub)) {
              setTimeout(methods.hide_sub, 300);
            }
            else {
              methods.show_sub(expanded);
            }
          },

          mobile_menu: function (button) {
            if (button.hasClass('menu_open')) {
              methods.mobile_hide(button);
            }
            else {
              methods.mobile_show(button);
            }
          },

          mobile_show: function (button) {
            button.addClass('menu_open');
            o.menu_block.show();
          },

          mobile_hide: function (button) {
            button.removeClass('menu_open');
            o.menu_block.hide();
            methods.hide_sub();
          },

          mobile_toggle: function () {
            var mobile_menu_opened = o.nav_button.hasClass('menu_open');

            if (o.screen_size == 'md' || o.screen_size == 'lg') {
              if (!mobile_menu_opened) {
                methods.mobile_show(o.nav_button);
              }
            }
            else {
              if (mobile_menu_opened) {
                methods.mobile_hide(o.nav_button);
              }
            }
          }
        };

      return this.each(function () {
        obj = $(this);

        {
          // TODO DONT WORK
          // NOTE и какого хуя оно вообще в isp_menu лежит
          $('.customvps__explanation').popover({}).on('click', function (e) {
            var self = $(this);
            self.popover('toggle');
            e.stopPropagation();
            $('.popover-close').on('click', function (e) {
              $(this).closest('.customvps__line_check').find('.customvps__explanation').popover('hide');
            });
            $('body').on('click', function (e) {
              if (!((e.target.classList.contains('popover-title')) ||
                (e.target.classList.contains('popover-content')) ||
                (e.target.classList.contains('popover')) ||
                ((e.target.tagName === 'A') && (e.target.closest('div').className === 'popover-content')))) {
                self.closest('.customvps__line_check').find('.customvps__explanation').popover('hide');
              }
            });
          });
        }

        methods.init();

        /* Enable mouseleave event only on the big screens */
        $('#header').mouseleave(function () {
          if (o.screen_size == 'md' || o.screen_size == 'lg') {
            methods.hide_sub();
          }
        });

        /* Enable mouseenter event only on the big screens */
        o.expanded_links.mouseenter(function (e) {
          if (o.screen_size == 'md' || o.screen_size == 'lg') {
            methods.hide_sub();
            methods.show_sub($(this));
          }
        });

        /* Enable click event only on the small screens */
        o.expanded_links.click(function () {
          if (o.screen_size == 'xs' || o.screen_size == 'sm') {
            methods.toggle_sub($(this));
          }
        });

        /* Enable mouseenter event only on the big screens */
        o.main_simple.mouseenter(function () {
          if (o.screen_size == 'md' || o.screen_size == 'lg') {
            methods.hide_sub();
          }
        });

        o.nav_button.click(function () {
          methods.mobile_menu($(this));
        });

        $(window).bind('resize', function () {
          o.screen_size = $('body').attr('data-screen');
          methods.mobile_toggle();
        });

      });
    }
  });

  $(function () {
    $('body').each(function () {

      // https://stackoverflow.com/questions/19462672/jquery-detect-bootstrap-3-state
      function findBootstrapEnvironment () {
        var envs = ['sm', 'md', 'lg'];
        var env = '';

        var $el = $('<div>');
        $el.appendTo($('body'));
        $el.addClass('d-block');
        for (var i = envs.length - 1; i >= 0; i--) {
          env = envs[i];
          $el.addClass('d-' + env + '-none');
          if ($el.is(':hidden')) {
            $el.remove();
            return env;
          }
        }
        $el.remove();
        return 'xs'; // extra small
      }

      $('body').attr('data-screen', findBootstrapEnvironment());

      $(window).resize(function () {
        $('body').attr('data-screen', findBootstrapEnvironment());
        checkScrollButton();
      });

      $('.MenuHeaderBlock').isp_menu();

      $('a[href*="#"]:not([href="#"]):not([role="tab"]):not([data-bs-toggle]):not([data-slide])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 400);

            if (!$(this).hasClass('js-auth-modal-show')) {
              return false;
            }
          }
        }
      });

      $(window).scroll(checkScrollButton);

      function checkScrollButton () {
        var scrollOffset = $(window).scrollTop(),
          windowHeight = $(window).height();

        if (scrollOffset > windowHeight) {
          $('.to_top_button').addClass('visible');
        }
        else {
          $('.to_top_button').removeClass('visible');
        }
      }

      $('.to_top_button').click(function () {
        // TODO: убрана timing function easeInOutCirc, не работает без jQuery UI
        $('html, body').animate({
          scrollTop: 0
        }, 0);
      });
    });
  });
})(jQuery);

function getCookie (name) {

  var matches = document.cookie.match(new RegExp(
    '(?:^|; )' + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie (name, value, props) {

  props = props || {};
  var exp = props.expires;
  if (typeof exp === 'number' && exp) {
    var d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) { props.expires = exp.toUTCString(); }
  value = encodeURIComponent(value);
  var updatedCookie = name + '=' + value;
  for (var propName in props) {
    updatedCookie += '; ' + propName;
    var propValue = props[propName];
    if (propValue !== true) { updatedCookie += '=' + propValue; }
  }
  document.cookie = updatedCookie;
}

function deleteCookie (name) {
  setCookie(name, null, { expires: -1 });
}

function slider__show_ticks ($slider) {
  var min = $slider.slider('option', 'min');
  var max = $slider.slider('option', 'max');
  var step = $slider.slider('option', 'step');

  var steps = (max - min) / step;

  var spacing = 100 / steps;

  $slider.find('.ui-slider-tick-mark').remove();
  for (var i = 0; i < steps; i++) {
    jQuery('<span class="ui-slider-tick-mark"></span>').css('left', (spacing * i) + '%').appendTo($slider);
  }
}

function initAllPopovers (context) {
  jQuery(context).find('[data-bs-toggle="popover"]').each(function () {
    new bootstrap.Popover(this);
  });
}

Drupal.behaviors.common = {
  attach: function (context, settings) {
    initAllPopovers(context);
  }
};
;
/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,checkVisibility:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",slideTransition:"",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g>0;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i,g-=1;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.$stage.children(".center").removeClass("center"),this.settings.center&&this.$stage.children().eq(this.current()).addClass("center")}}],e.prototype.initializeStage=function(){this.$stage=this.$element.find("."+this.settings.stageClass),this.$stage.length||(this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+">",{class:this.settings.stageClass}).wrap(a("<div/>",{class:this.settings.stageOuterClass})),this.$element.append(this.$stage.parent()))},e.prototype.initializeItems=function(){var b=this.$element.find(".owl-item");if(b.length)return this._items=b.get().map(function(b){return a(b)}),this._mergers=this._items.map(function(){return 1}),void this.refresh();this.replace(this.$element.children().not(this.$stage.parent())),this.isVisible()?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)},e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var a,b,c;a=this.$element.find("img"),b=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,c=this.$element.children(b).width(),a.length&&c<=0&&this.preloadAutoWidthImages(a)}this.initializeStage(),this.initializeItems(),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.isVisible=function(){return!this.settings.checkVisibility||this.$element.is(":visible")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.isVisible()&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),!1!==this.settings.responsive&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var e=-1,f=30,g=this.width(),h=this.coordinates();return this.settings.freeDrag||a.each(h,a.proxy(function(a,i){return"left"===c&&b>i-f&&b<i+f?e=a:"right"===c&&b>i-g-f&&b<i-g+f?e=a+1:this.op(b,"<",i)&&this.op(b,">",h[a+1]!==d?h[a+1]:i-g)&&(e="left"===c?a+1:a),-1===e},this)),this.settings.loop||(this.op(b,">",h[this.minimum()])?e=b=this.minimum():this.op(b,"<",h[this.maximum()])&&(e=b=this.maximum())),e},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"+(this.settings.slideTransition?" "+this.settings.slideTransition:"")}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){(a=this.normalize(a))!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){if(b=this._items.length)for(c=this._items[--b].width(),d=this.$element.width();b--&&!((c+=this._items[b].width()+this.settings.margin)>d););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2==0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=-1*f*g),a=c+e,(d=((a-h)%g+g)%g+h)!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.isVisible()&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){(a=this.normalize(a,!0))!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),!1!==this.settings.responsive&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.remove(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&-1!==a.namespace.indexOf("owl")?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.isVisible(),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.isVisible()!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type)){var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&-1*e||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);for(c.lazyLoadEager>0&&(e+=c.lazyLoadEager,c.loop&&(g-=c.lazyLoadEager,e++));f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1,lazyLoadEager:0},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src")||f.attr("data-srcset");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):f.is("source")?f.one("load.owl.lazy",a.proxy(function(){this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("srcset",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(c){this._core=c,this._previousHeight=null,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"===a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._intervalId=null;var d=this;a(b).on("load",function(){d._core.settings.autoHeight&&d.update()}),a(b).resize(function(){d._core.settings.autoHeight&&(null!=d._intervalId&&clearTimeout(d._intervalId),d._intervalId=setTimeout(function(){d.update()},250))})};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.settings.lazyLoad,e=this._core.$stage.children().toArray().slice(b,c),f=[],g=0;a.each(e,function(b,c){f.push(a(c).height())}),g=Math.max.apply(null,f),g<=1&&d&&this._previousHeight&&(g=this._previousHeight),this._previousHeight=g,this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?"width:"+c.width+"px;height:"+c.height+"px;":"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(c){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?a("<div/>",{class:"owl-video-tn "+j,srcType:c}):a("<div/>",{class:"owl-video-tn",style:"opacity:1;background-image:url("+c+")"}),b.after(d),b.after(e)};if(b.wrap(a("<div/>",{class:"owl-video-wrapper",style:g})),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),c=a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'),c.attr("height",h),c.attr("width",g),"youtube"===f.type?c.attr("src","//www.youtube.com/embed/"+f.id+"?autoplay=1&rel=0&v="+f.id):"vimeo"===f.type?c.attr("src","//player.vimeo.com/video/"+f.id+"?autoplay=1"):"vzaar"===f.type&&c.attr("src","//view.vzaar.com/"+f.id+"/player?autoplay=true"),a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,
animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._call=null,this._time=0,this._timeout=0,this._paused=!0,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._paused&&(this._time=0)},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype._next=function(d){this._call=b.setTimeout(a.proxy(this._next,this,d),this._timeout*(Math.round(this.read()/this._timeout)+1)-this.read()),this._core.is("interacting")||c.hidden||this._core.next(d||this._core.settings.autoplaySpeed)},e.prototype.read=function(){return(new Date).getTime()-this._time},e.prototype.play=function(c,d){var e;this._core.is("rotating")||this._core.enter("rotating"),c=c||this._core.settings.autoplayTimeout,e=Math.min(this._time%(this._timeout||c),c),this._paused?(this._time=this.read(),this._paused=!1):b.clearTimeout(this._call),this._time+=this.read()%c-e,this._timeout=c,this._call=b.setTimeout(a.proxy(this._next,this,d),c-e)},e.prototype.stop=function(){this._core.is("rotating")&&(this._time=0,this._paused=!0,b.clearTimeout(this._call),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&!this._paused&&(this._time=this.read(),this._paused=!0,b.clearTimeout(this._call))},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:['<span aria-label="Previous">&#x2039;</span>','<span aria-label="Next">&#x203a;</span>'],navSpeed:!1,navElement:'button type="button" role="presentation"',navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a('<button role="button">').addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","button",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d,e;e=this._core.settings;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)"$relative"===b&&e.navContainer?this._controls[b].html(""):this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);;
(function ($) {
  function initJsCarousel ($sliderWrapper) {
    var $slider = $sliderWrapper.find('.owl-carousel'),
      $extendedNavigation,
      $prevPreview,
      $nextPreview,
      extendedNavigationTemplate =
        '<div class="carousel-ext-nav">' +
        '  <div class="carousel-ext-nav__item  js-cen__item" data-direction="prev">' +
        '    <div class="carousel-ext-nav__preview  js-cen__preview">' +
        '      <div class="carousel-ext-nav__preview-img  js-cen-img"></div>' +
        '      <div class="carousel-ext-nav__preview-text  js-cen-text"></div>' +
        '    </div>' +
        '  </div>' +
        '  <div class="carousel-ext-nav__item  js-cen__item" data-direction="next">' +
        '    <div class="carousel-ext-nav__preview  js-cen__preview">' +
        '      <div class="carousel-ext-nav__preview-img  js-cen-img"></div>' +
        '      <div class="carousel-ext-nav__preview-text  js-cen-text"></div>' +
        '    </div>' +
        '  </div>' +
        '</div>',
      pathToMiniSlides = 'modules/custom/front_page_slider/';

    if ($slider.find('.item').length > 1) {
      initSlider();
    }

    function initSlider () {
      $slider.owlCarousel({
        center: true,
        startPosition: 0,
        items: 1,
        loop: true,
        dots: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 10 * 1000,
        smartSpeed: 750,
        mouseDrag: false,
        touchDrag: true,
        pullDrag: false
      });

      $extendedNavigation = $(extendedNavigationTemplate);

      // Note: добавляем свою собственную навигацию
      $sliderWrapper.prepend($extendedNavigation);

      var $extendedNavigationItems = $('.js-cen__item', $extendedNavigation);
      $prevPreview = $extendedNavigationItems.filter('[data-direction="prev"]').find('.js-cen__preview');
      $nextPreview = $extendedNavigationItems.filter('[data-direction="next"]').find('.js-cen__preview');

      updatePreviews();

      $extendedNavigationItems.on('click', function () {
        $slider.trigger($(this).data('direction') + '.owl.carousel');
        // вызов prev/next .owl.carousel не сбрасывает таймер автоматического переключения слайда,
        //    поэтому передергиваем autoplay, чтобы сбросить таймер
        $slider.trigger('stop.owl.autoplay');
        $slider.trigger('play.owl.autoplay');
      });

      $slider.on('translated.owl.carousel', function () {
        updatePreviews();
      });
    }

    function updatePreviews () {
      var $owlItems = $slider.find('.owl-item');

      var $current = $owlItems.filter('.active'),
        // note: предыдущий и следующий итем всегда есть, этим занимается owl
        $prev = $current.prev('.owl-item'),
        $next = $current.next('.owl-item');

      updatePreviewBySlider($prevPreview, $prev.find('.item'));
      updatePreviewBySlider($nextPreview, $next.find('.item'));
    }

    function updatePreviewBySlider ($preview, $slider) {
      var $miniSlideImg = $preview.find('.js-cen-img');
      var $miniSlideText = $preview.find('.js-cen-text');

      if ($miniSlideImg.length && $slider.data('img') !== undefined) {
        $miniSlideImg.html('<img class="img-responsive" src="' + pathToMiniSlides + $slider.data('img') + '" width="180" height="110" alt="">');
      }

      if ($miniSlideText.length && $slider.data('text') !== undefined) {
        $miniSlideText.html('<p>' + $slider.data('text') + '</p>');
      }
    }
  }

  $(function () {
    var $sliderWrapper = $('.front-page-slider-wrapper');
    if ($sliderWrapper.length > 0) {
      setTimeout(function () {
        initJsCarousel($sliderWrapper);
      }, 3 * 1000);
    }
  });
})(jQuery);
;
(function ($) {
  $(function () {
    $('body').each(function () {

      (function ($opinionsCarousel) {
        $opinionsCarousel.addClass('owl-carousel');
        $opinionsCarousel.owlCarousel({
          center: true,
          items: 1,
          loop: true,
          dots: false,
          autoplay: false,
          smartSpeed: 750,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true
        });

        $('.front-opinions__button_prev').click(function () {
          $opinionsCarousel.trigger('prev.owl.carousel');
        });

        $('.front-opinions__button_next').click(function () {
          $opinionsCarousel.trigger('next.owl.carousel');
        });
      })($('#front-opinions .js-front-opinions-slider'));

      (function ($partnersCarousel) {
        $partnersCarousel.addClass('owl-carousel');
        $partnersCarousel.owlCarousel({
          center: false,
          items: 1,
          loop: true,
          dots: false,
          autoplay: false,
          smartSpeed: 750,
          mouseDrag: true,
          touchDrag: true,
          pullDrag: true,

          responsive: {
            475: {
              items: 2,
            },
            600: {
              items: 3,
            },
            1000: {
              items: 5,
            }
          },
        });

        $('.front-partners__button_prev').click(function () {
          $partnersCarousel.trigger('prev.owl.carousel');
        });

        $('.front-partners__button_next').click(function () {
          $partnersCarousel.trigger('next.owl.carousel');
        });
      })($('.front-partners__slider'));

      $('[data-toggle="tooltip"]').tooltip({
        template: '<div class="tooltip front-page__tooltip" role="tooltip"><div class="tooltip-arrow front-page__tooltip__arrow"></div><div class="tooltip-inner front-page__tooltip__inner"></div><div class="front-page__tooltip__title">Домен в подарок</div></div>'
      });

      $('.front-services__item').click(function (event) {
        if (!$(event.target).hasClass('front-services__item-link')) {
          var $link = $(this).find('.front-services__item-link');
          $link.click(); // не происходит перехода по ссылке (ml: не знаю почему)
          window.location = $link.attr('href');
        }
      });
    });
  })
})(jQuery);
;
/**
 * @file
 * Progress bar.
 */

(function ($, Drupal) {
  /**
   * Theme function for the progress bar.
   *
   * @param {string} id
   *   The id for the progress bar.
   *
   * @return {string}
   *   The HTML for the progress bar.
   */
  Drupal.theme.progressBar = function (id) {
    return (
      `<div id="${id}" class="progress" aria-live="polite">` +
      '<div class="progress__label">&nbsp;</div>' +
      '<div class="progress__track"><div class="progress__bar"></div></div>' +
      '<div class="progress__percentage"></div>' +
      '<div class="progress__description">&nbsp;</div>' +
      '</div>'
    );
  };

  /**
   * A progressbar object. Initialized with the given id. Must be inserted into
   * the DOM afterwards through progressBar.element.
   *
   * Method is the function which will perform the HTTP request to get the
   * progress bar state. Either "GET" or "POST".
   *
   * @example
   * pb = new Drupal.ProgressBar('myProgressBar');
   * some_element.appendChild(pb.element);
   *
   * @constructor
   *
   * @param {string} id
   *   The id for the progressbar.
   * @param {function} updateCallback
   *   Callback to run on update.
   * @param {string} method
   *   HTTP method to use.
   * @param {function} errorCallback
   *   Callback to call on error.
   */
  Drupal.ProgressBar = function (id, updateCallback, method, errorCallback) {
    this.id = id;
    this.method = method || 'GET';
    this.updateCallback = updateCallback;
    this.errorCallback = errorCallback;

    // The WAI-ARIA setting aria-live="polite" will announce changes after
    // users
    // have completed their current activity and not interrupt the screen
    // reader.
    this.element = $(Drupal.theme('progressBar', id));
  };

  $.extend(
    Drupal.ProgressBar.prototype,
    /** @lends Drupal.ProgressBar# */ {
      /**
       * Set the percentage and status message for the progressbar.
       *
       * @param {number} percentage
       *   The progress percentage.
       * @param {string} message
       *   The message to show the user.
       * @param {string} label
       *   The text for the progressbar label.
       */
      setProgress(percentage, message, label) {
        if (percentage >= 0 && percentage <= 100) {
          $(this.element)
            .find('div.progress__bar')
            .css('width', `${percentage}%`);
          $(this.element)
            .find('div.progress__percentage')
            .html(`${percentage}%`);
        }
        $('div.progress__description', this.element).html(message);
        $('div.progress__label', this.element).html(label);
        if (this.updateCallback) {
          this.updateCallback(percentage, message, this);
        }
      },

      /**
       * Start monitoring progress via Ajax.
       *
       * @param {string} uri
       *   The URI to use for monitoring.
       * @param {number} delay
       *   The delay for calling the monitoring URI.
       */
      startMonitoring(uri, delay) {
        this.delay = delay;
        this.uri = uri;
        this.sendPing();
      },

      /**
       * Stop monitoring progress via Ajax.
       */
      stopMonitoring() {
        clearTimeout(this.timer);
        // This allows monitoring to be stopped from within the callback.
        this.uri = null;
      },

      /**
       * Request progress data from server.
       */
      sendPing() {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        if (this.uri) {
          const pb = this;
          // When doing a post request, you need non-null data. Otherwise a
          // HTTP 411 or HTTP 406 (with Apache mod_security) error may result.
          let uri = this.uri;
          if (uri.indexOf('?') === -1) {
            uri += '?';
          } else {
            uri += '&';
          }
          uri += '_format=json';
          $.ajax({
            type: this.method,
            url: uri,
            data: '',
            dataType: 'json',
            success(progress) {
              // Display errors.
              if (progress.status === 0) {
                pb.displayError(progress.data);
                return;
              }
              // Update display.
              pb.setProgress(
                progress.percentage,
                progress.message,
                progress.label,
              );
              // Schedule next timer.
              pb.timer = setTimeout(() => {
                pb.sendPing();
              }, pb.delay);
            },
            error(xmlhttp) {
              const e = new Drupal.AjaxError(xmlhttp, pb.uri);
              pb.displayError(`<pre>${e.message}</pre>`);
            },
          });
        }
      },

      /**
       * Display errors on the page.
       *
       * @param {string} string
       *   The error message to show the user.
       */
      displayError(string) {
        const error = $('<div class="messages messages--error"></div>').html(
          string,
        );
        $(this.element).before(error).hide();

        if (this.errorCallback) {
          this.errorCallback(this);
        }
      },
    },
  );
})(jQuery, Drupal);
;
loadjs=function(){var h=function(){},c={},u={},f={};function o(e,n){if(e){var r=f[e];if(u[e]=n,r)for(;r.length;)r[0](e,n),r.splice(0,1)}}function l(e,n){e.call&&(e={success:e}),n.length?(e.error||h)(n):(e.success||h)(e)}function d(r,t,s,i){var c,o,e=document,n=s.async,u=(s.numRetries||0)+1,f=s.before||h,l=r.replace(/[\?|#].*$/,""),a=r.replace(/^(css|img)!/,"");i=i||0,/(^css!|\.css$)/.test(l)?((o=e.createElement("link")).rel="stylesheet",o.href=a,(c="hideFocus"in o)&&o.relList&&(c=0,o.rel="preload",o.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l)?(o=e.createElement("img")).src=a:((o=e.createElement("script")).src=r,o.async=void 0===n||n),!(o.onload=o.onerror=o.onbeforeload=function(e){var n=e.type[0];if(c)try{o.sheet.cssText.length||(n="e")}catch(e){18!=e.code&&(n="e")}if("e"==n){if((i+=1)<u)return d(r,t,s,i)}else if("preload"==o.rel&&"style"==o.as)return o.rel="stylesheet";t(r,n,e.defaultPrevented)})!==f(r,o)&&e.head.appendChild(o)}function r(e,n,r){var t,s;if(n&&n.trim&&(t=n),s=(t?r:n)||{},t){if(t in c)throw"LoadJS";c[t]=!0}function i(n,r){!function(e,t,n){var r,s,i=(e=e.push?e:[e]).length,c=i,o=[];for(r=function(e,n,r){if("e"==n&&o.push(e),"b"==n){if(!r)return;o.push(e)}--i||t(o)},s=0;s<c;s++)d(e[s],r,n)}(e,function(e){l(s,e),n&&l({success:n,error:r},e),o(t,e)},s)}if(s.returnPromise)return new Promise(i);i()}return r.ready=function(e,n){return function(e,r){e=e.push?e:[e];var n,t,s,i=[],c=e.length,o=c;for(n=function(e,n){n.length&&i.push(e),--o||r(i)};c--;)t=e[c],(s=u[t])?n(t,s):(f[t]=f[t]||[]).push(n)}(e,function(e){l(n,e)}),r},r.done=function(e){o(e,[])},r.reset=function(){c={},u={},f={}},r.isDefined=function(e){return e in c},r}();;
/**
 * @file
 * Provides Ajax page updating via jQuery $.ajax.
 *
 * Ajax is a method of making a request via JavaScript while viewing an HTML
 * page. The request returns an array of commands encoded in JSON, which is
 * then executed to make any changes that are necessary to the page.
 *
 * Drupal uses this file to enhance form elements with `#ajax['url']` and
 * `#ajax['wrapper']` properties. If set, this file will automatically be
 * included to provide Ajax capabilities.
 */

(function (
  $,
  window,
  Drupal,
  drupalSettings,
  loadjs,
  { isFocusable, tabbable },
) {
  /**
   * Attaches the Ajax behavior to each Ajax form element.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Initialize all {@link Drupal.Ajax} objects declared in
   *   `drupalSettings.ajax` or initialize {@link Drupal.Ajax} objects from
   *   DOM elements having the `use-ajax-submit` or `use-ajax` css class.
   * @prop {Drupal~behaviorDetach} detach
   *   During `unload` remove all {@link Drupal.Ajax} objects related to
   *   the removed content.
   */
  Drupal.behaviors.AJAX = {
    attach(context, settings) {
      function loadAjaxBehavior(base) {
        const elementSettings = settings.ajax[base];
        if (typeof elementSettings.selector === 'undefined') {
          elementSettings.selector = `#${base}`;
        }
        // Use jQuery selector instead of a native selector for
        // backwards compatibility.
        once('drupal-ajax', $(elementSettings.selector)).forEach((el) => {
          elementSettings.element = el;
          elementSettings.base = base;
          Drupal.ajax(elementSettings);
        });
      }

      // Load all Ajax behaviors specified in the settings.
      Object.keys(settings.ajax || {}).forEach(loadAjaxBehavior);

      Drupal.ajax.bindAjaxLinks(document.body);

      // This class means to submit the form to the action using Ajax.
      once('ajax', '.use-ajax-submit').forEach((el) => {
        const elementSettings = {};

        // Ajax submits specified in this manner automatically submit to the
        // normal form action.
        elementSettings.url = $(el.form).attr('action');
        // Form submit button clicks need to tell the form what was clicked so
        // it gets passed in the POST request.
        elementSettings.setClick = true;
        // Form buttons use the 'click' event rather than mousedown.
        elementSettings.event = 'click';
        // Clicked form buttons look better with the throbber than the progress
        // bar.
        elementSettings.progress = { type: 'throbber' };
        elementSettings.base = el.id;
        elementSettings.element = el;

        Drupal.ajax(elementSettings);
      });
    },

    detach(context, settings, trigger) {
      if (trigger === 'unload') {
        Drupal.ajax.expired().forEach((instance) => {
          // Set this to null and allow garbage collection to reclaim
          // the memory.
          Drupal.ajax.instances[instance.instanceIndex] = null;
        });
      }
    },
  };

  /**
   * Extends Error to provide handling for Errors in Ajax.
   *
   * @constructor
   *
   * @augments Error
   *
   * @param {XMLHttpRequest} xmlhttp
   *   XMLHttpRequest object used for the failed request.
   * @param {string} uri
   *   The URI where the error occurred.
   * @param {string} customMessage
   *   The custom message.
   */
  Drupal.AjaxError = function (xmlhttp, uri, customMessage) {
    let statusCode;
    let statusText;
    let responseText;
    if (xmlhttp.status) {
      statusCode = `\n${Drupal.t('An AJAX HTTP error occurred.')}\n${Drupal.t(
        'HTTP Result Code: !status',
        {
          '!status': xmlhttp.status,
        },
      )}`;
    } else {
      statusCode = `\n${Drupal.t(
        'An AJAX HTTP request terminated abnormally.',
      )}`;
    }
    statusCode += `\n${Drupal.t('Debugging information follows.')}`;
    const pathText = `\n${Drupal.t('Path: !uri', { '!uri': uri })}`;
    statusText = '';
    // In some cases, when statusCode === 0, xmlhttp.statusText may not be
    // defined. Unfortunately, testing for it with typeof, etc, doesn't seem to
    // catch that and the test causes an exception. So we need to catch the
    // exception here.
    try {
      statusText = `\n${Drupal.t('StatusText: !statusText', {
        '!statusText': xmlhttp.statusText.trim(),
      })}`;
    } catch (e) {
      // Empty.
    }

    responseText = '';
    // Again, we don't have a way to know for sure whether accessing
    // xmlhttp.responseText is going to throw an exception. So we'll catch it.
    try {
      responseText = `\n${Drupal.t('ResponseText: !responseText', {
        '!responseText': xmlhttp.responseText.trim(),
      })}`;
    } catch (e) {
      // Empty.
    }

    // Make the responseText more readable by stripping HTML tags and newlines.
    responseText = responseText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/gi, '');
    responseText = responseText.replace(/[\n]+\s+/g, '\n');

    // We don't need readyState except for status == 0.
    const readyStateText =
      xmlhttp.status === 0
        ? `\n${Drupal.t('ReadyState: !readyState', {
            '!readyState': xmlhttp.readyState,
          })}`
        : '';

    customMessage = customMessage
      ? `\n${Drupal.t('CustomMessage: !customMessage', {
          '!customMessage': customMessage,
        })}`
      : '';

    /**
     * Formatted and translated error message.
     *
     * @type {string}
     */
    this.message =
      statusCode +
      pathText +
      statusText +
      customMessage +
      responseText +
      readyStateText;

    /**
     * Used by some browsers to display a more accurate stack trace.
     *
     * @type {string}
     */
    this.name = 'AjaxError';
  };

  Drupal.AjaxError.prototype = new Error();
  Drupal.AjaxError.prototype.constructor = Drupal.AjaxError;

  /**
   * Provides Ajax page updating via jQuery $.ajax.
   *
   * This function is designed to improve developer experience by wrapping the
   * initialization of {@link Drupal.Ajax} objects and storing all created
   * objects in the {@link Drupal.ajax.instances} array.
   *
   * @example
   * Drupal.behaviors.myCustomAJAXStuff = {
   *   attach: function (context, settings) {
   *
   *     var ajaxSettings = {
   *       url: 'my/url/path',
   *       // If the old version of Drupal.ajax() needs to be used those
   *       // properties can be added
   *       base: 'myBase',
   *       element: $(context).find('.someElement')
   *     };
   *
   *     var myAjaxObject = Drupal.ajax(ajaxSettings);
   *
   *     // Declare a new Ajax command specifically for this Ajax object.
   *     myAjaxObject.commands.insert = function (ajax, response, status) {
   *       $('#my-wrapper').append(response.data);
   *       alert('New content was appended to #my-wrapper');
   *     };
   *
   *     // This command will remove this Ajax object from the page.
   *     myAjaxObject.commands.destroyObject = function (ajax, response, status) {
   *       Drupal.ajax.instances[this.instanceIndex] = null;
   *     };
   *
   *     // Programmatically trigger the Ajax request.
   *     myAjaxObject.execute();
   *   }
   * };
   *
   * @param {object} settings
   *   The settings object passed to {@link Drupal.Ajax} constructor.
   * @param {string} [settings.base]
   *   Base is passed to {@link Drupal.Ajax} constructor as the 'base'
   *   parameter.
   * @param {HTMLElement} [settings.element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   *
   * @return {Drupal.Ajax}
   *   The created Ajax object.
   *
   * @see Drupal.AjaxCommands
   */
  Drupal.ajax = function (settings) {
    if (arguments.length !== 1) {
      throw new Error(
        'Drupal.ajax() function must be called with one configuration object only',
      );
    }
    // Map those config keys to variables for the old Drupal.ajax function.
    const base = settings.base || false;
    const element = settings.element || false;
    delete settings.base;
    delete settings.element;

    // By default do not display progress for ajax calls without an element.
    if (!settings.progress && !element) {
      settings.progress = false;
    }

    const ajax = new Drupal.Ajax(base, element, settings);
    ajax.instanceIndex = Drupal.ajax.instances.length;
    Drupal.ajax.instances.push(ajax);

    return ajax;
  };

  /**
   * Contains all created Ajax objects.
   *
   * @type {Array.<Drupal.Ajax|null>}
   */
  Drupal.ajax.instances = [];

  /**
   * List all objects where the associated element is not in the DOM
   *
   * This method ignores {@link Drupal.Ajax} objects not bound to DOM elements
   * when created with {@link Drupal.ajax}.
   *
   * @return {Array.<Drupal.Ajax>}
   *   The list of expired {@link Drupal.Ajax} objects.
   */
  Drupal.ajax.expired = function () {
    return Drupal.ajax.instances.filter(
      (instance) =>
        instance &&
        instance.element !== false &&
        !document.body.contains(instance.element),
    );
  };

  /**
   * Bind Ajax functionality to links that use the 'use-ajax' class.
   *
   * @param {HTMLElement} element
   *   Element to enable Ajax functionality for.
   */
  Drupal.ajax.bindAjaxLinks = (element) => {
    // Bind Ajax behaviors to all items showing the class.
    once('ajax', '.use-ajax', element).forEach((ajaxLink) => {
      const $linkElement = $(ajaxLink);

      const elementSettings = {
        // Clicked links look better with the throbber than the progress bar.
        progress: { type: 'throbber' },
        dialogType: $linkElement.data('dialog-type'),
        dialog: $linkElement.data('dialog-options'),
        dialogRenderer: $linkElement.data('dialog-renderer'),
        base: $linkElement.attr('id'),
        element: ajaxLink,
      };
      const href = $linkElement.attr('href');
      /**
       * For anchor tags, these will go to the target of the anchor rather than
       * the usual location.
       */
      if (href) {
        elementSettings.url = href;
        elementSettings.event = 'click';
      }
      Drupal.ajax(elementSettings);
    });
  };

  /**
   * Settings for an Ajax object.
   *
   * @typedef {object} Drupal.Ajax~elementSettings
   *
   * @prop {string} url
   *   Target of the Ajax request.
   * @prop {?string} [event]
   *   Event bound to settings.element which will trigger the Ajax request.
   * @prop {boolean} [keypress=true]
   *   Triggers a request on keypress events.
   * @prop {?string} selector
   *   jQuery selector targeting the element to bind events to or used with
   *   {@link Drupal.AjaxCommands}.
   * @prop {string} [effect='none']
   *   Name of the jQuery method to use for displaying new Ajax content.
   * @prop {string|number} [speed='none']
   *   Speed with which to apply the effect.
   * @prop {string} [method]
   *   Name of the jQuery method used to insert new content in the targeted
   *   element.
   * @prop {object} [progress]
   *   Settings for the display of a user-friendly loader.
   * @prop {string} [progress.type='throbber']
   *   Type of progress element, core provides `'bar'`, `'throbber'` and
   *   `'fullscreen'`.
   * @prop {string} [progress.message=Drupal.t('Please wait...')]
   *   Custom message to be used with the bar indicator.
   * @prop {object} [submit]
   *   Extra data to be sent with the Ajax request.
   * @prop {boolean} [submit.js=true]
   *   Allows the PHP side to know this comes from an Ajax request.
   * @prop {object} [dialog]
   *   Options for {@link Drupal.dialog}.
   * @prop {string} [dialogType]
   *   One of `'modal'` or `'dialog'`.
   * @prop {string} [prevent]
   *   List of events on which to stop default action and stop propagation.
   */

  /**
   * Ajax constructor.
   *
   * The Ajax request returns an array of commands encoded in JSON, which is
   * then executed to make any changes that are necessary to the page.
   *
   * Drupal uses this file to enhance form elements with `#ajax['url']` and
   * `#ajax['wrapper']` properties. If set, this file will automatically be
   * included to provide Ajax capabilities.
   *
   * @constructor
   *
   * @param {string} [base]
   *   Base parameter of {@link Drupal.Ajax} constructor
   * @param {HTMLElement} [element]
   *   Element parameter of {@link Drupal.Ajax} constructor, element on which
   *   event listeners will be bound.
   * @param {Drupal.Ajax~elementSettings} elementSettings
   *   Settings for this Ajax object.
   */
  Drupal.Ajax = function (base, element, elementSettings) {
    const defaults = {
      event: element ? 'mousedown' : null,
      keypress: true,
      selector: base ? `#${base}` : null,
      effect: 'none',
      speed: 'none',
      method: 'replaceWith',
      progress: {
        type: 'throbber',
        message: Drupal.t('Please wait...'),
      },
      submit: {
        js: true,
      },
    };

    $.extend(this, defaults, elementSettings);

    /**
     * @type {Drupal.AjaxCommands}
     */
    this.commands = new Drupal.AjaxCommands();

    /**
     * @type {boolean|number}
     */
    this.instanceIndex = false;

    // @todo Remove this after refactoring the PHP code to:
    //   - Call this 'selector'.
    //   - Include the '#' for ID-based selectors.
    //   - Support non-ID-based selectors.
    if (this.wrapper) {
      /**
       * @type {string}
       */
      this.wrapper = `#${this.wrapper}`;
    }

    /**
     * @type {HTMLElement}
     */
    this.element = element;

    /**
     * @type {Drupal.Ajax~elementSettings}
     */
    this.elementSettings = elementSettings;

    // If there isn't a form, jQuery.ajax() will be used instead, allowing us to
    // bind Ajax to links as well.
    if (this.element && this.element.form) {
      /**
       * @type {jQuery}
       */
      this.$form = $(this.element.form);
    }

    // If no Ajax callback URL was given, use the link href or form action.
    if (!this.url) {
      const $element = $(this.element);
      if ($element.is('a')) {
        this.url = $element.attr('href');
      } else if (this.element && element.form) {
        this.url = this.$form.attr('action');
      }
    }

    // Replacing 'nojs' with 'ajax' in the URL allows for an easy method to let
    // the server detect when it needs to degrade gracefully.
    // There are four scenarios to check for:
    // 1. /nojs/
    // 2. /nojs$ - The end of a URL string.
    // 3. /nojs? - Followed by a query (e.g. path/nojs?destination=foobar).
    // 4. /nojs# - Followed by a fragment (e.g.: path/nojs#my-fragment).
    const originalUrl = this.url;

    /**
     * Processed Ajax URL.
     *
     * @type {string}
     */
    this.url = this.url.replace(/\/nojs(\/|$|\?|#)/, '/ajax$1');
    // If the 'nojs' version of the URL is trusted, also trust the 'ajax'
    // version.
    if (drupalSettings.ajaxTrustedUrl[originalUrl]) {
      drupalSettings.ajaxTrustedUrl[this.url] = true;
    }

    // Set the options for the ajaxSubmit function.
    // The 'this' variable will not persist inside of the options object.
    const ajax = this;

    /**
     * Options for the jQuery.ajax function.
     *
     * @name Drupal.Ajax#options
     *
     * @type {object}
     *
     * @prop {string} url
     *   Ajax URL to be called.
     * @prop {object} data
     *   Ajax payload.
     * @prop {function} beforeSerialize
     *   Implement jQuery beforeSerialize function to call
     *   {@link Drupal.Ajax#beforeSerialize}.
     * @prop {function} beforeSubmit
     *   Implement jQuery beforeSubmit function to call
     *   {@link Drupal.Ajax#beforeSubmit}.
     * @prop {function} beforeSend
     *   Implement jQuery beforeSend function to call
     *   {@link Drupal.Ajax#beforeSend}.
     * @prop {function} success
     *   Implement jQuery success function to call
     *   {@link Drupal.Ajax#success}.
     * @prop {function} complete
     *   Implement jQuery success function to clean up ajax state and trigger an
     *   error if needed.
     * @prop {string} dataType='json'
     *   Type of the response expected.
     * @prop {string} type='POST'
     *   HTTP method to use for the Ajax request.
     */
    ajax.options = {
      url: ajax.url,
      data: ajax.submit,
      isInProgress() {
        return ajax.ajaxing;
      },
      beforeSerialize(elementSettings, options) {
        return ajax.beforeSerialize(elementSettings, options);
      },
      beforeSubmit(formValues, elementSettings, options) {
        ajax.ajaxing = true;
        return ajax.beforeSubmit(formValues, elementSettings, options);
      },
      beforeSend(xmlhttprequest, options) {
        ajax.ajaxing = true;
        return ajax.beforeSend(xmlhttprequest, options);
      },
      success(response, status, xmlhttprequest) {
        // Sanity check for browser support (object expected).
        // When using iFrame uploads, responses must be returned as a string.
        if (typeof response === 'string') {
          response = $.parseJSON(response);
        }

        // Prior to invoking the response's commands, verify that they can be
        // trusted by checking for a response header. See
        // \Drupal\Core\EventSubscriber\AjaxResponseSubscriber for details.
        // - Empty responses are harmless so can bypass verification. This
        //   avoids an alert message for server-generated no-op responses that
        //   skip Ajax rendering.
        // - Ajax objects with trusted URLs (e.g., ones defined server-side via
        //   #ajax) can bypass header verification. This is especially useful
        //   for Ajax with multipart forms. Because IFRAME transport is used,
        //   the response headers cannot be accessed for verification.
        if (response !== null && !drupalSettings.ajaxTrustedUrl[ajax.url]) {
          if (xmlhttprequest.getResponseHeader('X-Drupal-Ajax-Token') !== '1') {
            const customMessage = Drupal.t(
              'The response failed verification so will not be processed.',
            );
            return ajax.error(xmlhttprequest, ajax.url, customMessage);
          }
        }

        return (
          // Ensure that the return of the success callback is a Promise.
          // When the return is a Promise, using resolve will unwrap it, and
          // when the return is not a Promise we make sure it can be used as
          // one. This is useful for code that overrides the success method.
          Promise.resolve(ajax.success(response, status))
            // Ajaxing status is back to false when all the AJAX commands have
            // finished executing.
            .then(() => {
              ajax.ajaxing = false;
              // jQuery normally triggers the ajaxSuccess, ajaxComplete, and
              // ajaxStop events after the "success" function passed to $.ajax()
              // returns, but we prevented that via
              // $.event.special[EVENT_NAME].trigger in order to wait for the
              // commands to finish executing. Now that they have, re-trigger
              // those events.
              $(document).trigger('ajaxSuccess', [xmlhttprequest, this]);
              $(document).trigger('ajaxComplete', [xmlhttprequest, this]);
              if (--$.active === 0) {
                $(document).trigger('ajaxStop');
              }
            })
        );
      },
      error(xmlhttprequest, status, error) {
        ajax.ajaxing = false;
      },
      complete(xmlhttprequest, status) {
        if (status === 'error' || status === 'parsererror') {
          return ajax.error(xmlhttprequest, ajax.url);
        }
      },
      dataType: 'json',
      jsonp: false,
      type: 'POST',
    };

    if (elementSettings.dialog) {
      ajax.options.data.dialogOptions = elementSettings.dialog;
    }

    // Ensure that we have a valid URL by adding ? when no query parameter is
    // yet available, otherwise append using &.
    if (ajax.options.url.indexOf('?') === -1) {
      ajax.options.url += '?';
    } else {
      ajax.options.url += '&';
    }
    // If this element has a dialog type use if for the wrapper if not use 'ajax'.
    let wrapper = `drupal_${elementSettings.dialogType || 'ajax'}`;
    if (elementSettings.dialogRenderer) {
      wrapper += `.${elementSettings.dialogRenderer}`;
    }
    ajax.options.url += `${Drupal.ajax.WRAPPER_FORMAT}=${wrapper}`;

    // Bind the ajaxSubmit function to the element event.
    $(ajax.element).on(elementSettings.event, function (event) {
      if (
        !drupalSettings.ajaxTrustedUrl[ajax.url] &&
        !Drupal.url.isLocal(ajax.url)
      ) {
        throw new Error(
          Drupal.t('The callback URL is not local and not trusted: !url', {
            '!url': ajax.url,
          }),
        );
      }
      return ajax.eventResponse(this, event);
    });

    // If necessary, enable keyboard submission so that Ajax behaviors
    // can be triggered through keyboard input as well as e.g. a mousedown
    // action.
    if (elementSettings.keypress) {
      $(ajax.element).on('keypress', function (event) {
        return ajax.keypressResponse(this, event);
      });
    }

    // If necessary, prevent the browser default action of an additional event.
    // For example, prevent the browser default action of a click, even if the
    // Ajax behavior binds to mousedown.
    if (elementSettings.prevent) {
      $(ajax.element).on(elementSettings.prevent, false);
    }
  };

  /**
   * URL query attribute to indicate the wrapper used to render a request.
   *
   * The wrapper format determines how the HTML is wrapped, for example in a
   * modal dialog.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.ajax.WRAPPER_FORMAT = '_wrapper_format';

  /**
   * Request parameter to indicate that a request is a Drupal Ajax request.
   *
   * @const {string}
   *
   * @default
   */
  Drupal.Ajax.AJAX_REQUEST_PARAMETER = '_drupal_ajax';

  /**
   * Execute the ajax request.
   *
   * Allows developers to execute an Ajax request manually without specifying
   * an event to respond to.
   *
   * @return {object}
   *   Returns the jQuery.Deferred object underlying the Ajax request. If
   *   pre-serialization fails, the Deferred will be returned in the rejected
   *   state.
   */
  Drupal.Ajax.prototype.execute = function () {
    // Do not perform another ajax command if one is already in progress.
    if (this.ajaxing) {
      return;
    }

    try {
      this.beforeSerialize(this.element, this.options);
      // Return the jqXHR so that external code can hook into the Deferred API.
      return $.ajax(this.options);
    } catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      this.ajaxing = false;
      window.alert(
        `An error occurred while attempting to process ${this.options.url}: ${e.message}`,
      );
      // For consistency, return a rejected Deferred (i.e., jqXHR's superclass)
      // so that calling code can take appropriate action.
      return $.Deferred().reject();
    }
  };

  /**
   * Handle a key press.
   *
   * The Ajax object will, if instructed, bind to a key press response. This
   * will test to see if the key press is valid to trigger this event and
   * if it is, trigger it for us and prevent other keypresses from triggering.
   * In this case we're handling RETURN and SPACEBAR keypresses (event codes 13
   * and 32. RETURN is often used to submit a form when in a textfield, and
   * SPACE is often used to activate an element without submitting.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.keypressResponse = function (element, event) {
    // Create a synonym for this to reduce code confusion.
    const ajax = this;

    // Detect enter key and space bar and allow the standard response for them,
    // except for form elements of type 'text', 'tel', 'number' and 'textarea',
    // where the spacebar activation causes inappropriate activation if
    // #ajax['keypress'] is TRUE. On a text-type widget a space should always
    // be a space.
    if (
      event.which === 13 ||
      (event.which === 32 &&
        element.type !== 'text' &&
        element.type !== 'textarea' &&
        element.type !== 'tel' &&
        element.type !== 'number')
    ) {
      event.preventDefault();
      event.stopPropagation();
      $(element).trigger(ajax.elementSettings.event);
    }
  };

  /**
   * Handle an event that triggers an Ajax response.
   *
   * When an event that triggers an Ajax response happens, this method will
   * perform the actual Ajax call. It is bound to the event using
   * bind() in the constructor, and it uses the options specified on the
   * Ajax object.
   *
   * @param {HTMLElement} element
   *   Element the event was triggered on.
   * @param {jQuery.Event} event
   *   Triggered event.
   */
  Drupal.Ajax.prototype.eventResponse = function (element, event) {
    event.preventDefault();
    event.stopPropagation();

    // Create a synonym for this to reduce code confusion.
    const ajax = this;

    // Do not perform another Ajax command if one is already in progress.
    if (ajax.ajaxing) {
      return;
    }

    try {
      if (ajax.$form) {
        // If setClick is set, we must set this to ensure that the button's
        // value is passed.
        if (ajax.setClick) {
          // Mark the clicked button. 'form.clk' is a special variable for
          // ajaxSubmit that tells the system which element got clicked to
          // trigger the submit. Without it there would be no 'op' or
          // equivalent.
          element.form.clk = element;
        }

        ajax.$form.ajaxSubmit(ajax.options);
      } else {
        ajax.beforeSerialize(ajax.element, ajax.options);
        $.ajax(ajax.options);
      }
    } catch (e) {
      // Unset the ajax.ajaxing flag here because it won't be unset during
      // the complete response.
      ajax.ajaxing = false;
      window.alert(
        `An error occurred while attempting to process ${ajax.options.url}: ${e.message}`,
      );
    }
  };

  /**
   * Handler for the form serialization.
   *
   * Runs before the beforeSend() handler (see below), and unlike that one, runs
   * before field data is collected.
   *
   * @param {object} [element]
   *   Ajax object's `elementSettings`.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSerialize = function (element, options) {
    // Allow detaching behaviors to update field values before collecting them.
    // This is only needed when field values are added to the POST data, so only
    // when there is a form such that this.$form.ajaxSubmit() is used instead of
    // $.ajax(). When there is no form and $.ajax() is used, beforeSerialize()
    // isn't called, but don't rely on that: explicitly check this.$form.
    if (this.$form && document.body.contains(this.$form.get(0))) {
      const settings = this.settings || drupalSettings;
      Drupal.detachBehaviors(this.$form.get(0), settings, 'serialize');
    }

    // Inform Drupal that this is an AJAX request.
    options.data[Drupal.Ajax.AJAX_REQUEST_PARAMETER] = 1;

    // Allow Drupal to return new JavaScript and CSS files to load without
    // returning the ones already loaded.
    // @see \Drupal\Core\Theme\AjaxBasePageNegotiator
    // @see \Drupal\Core\Asset\LibraryDependencyResolverInterface::getMinimalRepresentativeSubset()
    // @see system_js_settings_alter()
    const pageState = drupalSettings.ajaxPageState;
    options.data['ajax_page_state[theme]'] = pageState.theme;
    options.data['ajax_page_state[theme_token]'] = pageState.theme_token;
    options.data['ajax_page_state[libraries]'] = pageState.libraries;
  };

  /**
   * Modify form values prior to form submission.
   *
   * @param {Array.<object>} formValues
   *   Processed form values.
   * @param {jQuery} element
   *   The form node as a jQuery object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSubmit = function (formValues, element, options) {
    // This function is left empty to make it simple to override for modules
    // that wish to add functionality here.
  };

  /**
   * Prepare the Ajax request before it is sent.
   *
   * @param {XMLHttpRequest} xmlhttprequest
   *   Native Ajax object.
   * @param {object} options
   *   jQuery.ajax options.
   */
  Drupal.Ajax.prototype.beforeSend = function (xmlhttprequest, options) {
    // For forms without file inputs, the jQuery Form plugin serializes the
    // form values, and then calls jQuery's $.ajax() function, which invokes
    // this handler. In this circumstance, options.extraData is never used. For
    // forms with file inputs, the jQuery Form plugin uses the browser's normal
    // form submission mechanism, but captures the response in a hidden IFRAME.
    // In this circumstance, it calls this handler first, and then appends
    // hidden fields to the form to submit the values in options.extraData.
    // There is no simple way to know which submission mechanism will be used,
    // so we add to extraData regardless, and allow it to be ignored in the
    // former case.
    if (this.$form) {
      options.extraData = options.extraData || {};

      // Let the server know when the IFRAME submission mechanism is used. The
      // server can use this information to wrap the JSON response in a
      // TEXTAREA, as per http://jquery.malsup.com/form/#file-upload.
      options.extraData.ajax_iframe_upload = '1';

      // The triggering element is about to be disabled (see below), but if it
      // contains a value (e.g., a checkbox, textfield, select, etc.), ensure
      // that value is included in the submission. As per above, submissions
      // that use $.ajax() are already serialized prior to the element being
      // disabled, so this is only needed for IFRAME submissions.
      const v = $.fieldValue(this.element);
      if (v !== null) {
        options.extraData[this.element.name] = v;
      }
    }

    // Disable the element that received the change to prevent user interface
    // interaction while the Ajax request is in progress. ajax.ajaxing prevents
    // the element from triggering a new request, but does not prevent the user
    // from changing its value.
    $(this.element).prop('disabled', true);

    if (!this.progress || !this.progress.type) {
      return;
    }

    // Insert progress indicator.
    const progressIndicatorMethod = `setProgressIndicator${this.progress.type
      .slice(0, 1)
      .toUpperCase()}${this.progress.type.slice(1).toLowerCase()}`;
    if (
      progressIndicatorMethod in this &&
      typeof this[progressIndicatorMethod] === 'function'
    ) {
      this[progressIndicatorMethod].call(this);
    }
  };

  /**
   * An animated progress throbber and container element for AJAX operations.
   *
   * @param {string} [message]
   *   (optional) The message shown on the UI.
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressThrobber = (message) => {
    // Build markup without adding extra white space since it affects rendering.
    const messageMarkup =
      typeof message === 'string'
        ? Drupal.theme('ajaxProgressMessage', message)
        : '';
    const throbber = '<div class="throbber">&nbsp;</div>';

    return `<div class="ajax-progress ajax-progress-throbber">${throbber}${messageMarkup}</div>`;
  };

  /**
   * An animated progress throbber and container element for AJAX operations.
   *
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressIndicatorFullscreen = () =>
    '<div class="ajax-progress ajax-progress-fullscreen">&nbsp;</div>';

  /**
   * Formats text accompanying the AJAX progress throbber.
   *
   * @param {string} message
   *   The message shown on the UI.
   * @return {string}
   *   The HTML markup for the throbber.
   */
  Drupal.theme.ajaxProgressMessage = (message) =>
    `<div class="message">${message}</div>`;

  /**
   * Provide a wrapper for the AJAX progress bar element.
   *
   * @param {jQuery} $element
   *   Progress bar element.
   * @return {string}
   *   The HTML markup for the progress bar.
   */
  Drupal.theme.ajaxProgressBar = ($element) =>
    $('<div class="ajax-progress ajax-progress-bar"></div>').append($element);

  /**
   * Sets the progress bar progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorBar = function () {
    const progressBar = new Drupal.ProgressBar(
      `ajax-progress-${this.element.id}`,
      $.noop,
      this.progress.method,
      $.noop,
    );
    if (this.progress.message) {
      progressBar.setProgress(-1, this.progress.message);
    }
    if (this.progress.url) {
      progressBar.startMonitoring(
        this.progress.url,
        this.progress.interval || 1500,
      );
    }
    this.progress.element = $(
      Drupal.theme('ajaxProgressBar', progressBar.element),
    );
    this.progress.object = progressBar;
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the throbber progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorThrobber = function () {
    this.progress.element = $(
      Drupal.theme('ajaxProgressThrobber', this.progress.message),
    );
    $(this.element).after(this.progress.element);
  };

  /**
   * Sets the fullscreen progress indicator.
   */
  Drupal.Ajax.prototype.setProgressIndicatorFullscreen = function () {
    this.progress.element = $(Drupal.theme('ajaxProgressIndicatorFullscreen'));
    $('body').append(this.progress.element);
  };

  /**
   * Helper method to make sure commands are executed in sequence.
   *
   * @param {Array.<Drupal.AjaxCommands~commandDefinition>} response
   *   Drupal Ajax response.
   * @param {number} status
   *   XMLHttpRequest status.
   *
   * @return {Promise}
   *  The promise that will resolve once all commands have finished executing.
   */
  Drupal.Ajax.prototype.commandExecutionQueue = function (response, status) {
    const ajaxCommands = this.commands;
    return Object.keys(response || {}).reduce(
      // Add all commands to a single execution queue.
      (executionQueue, key) =>
        executionQueue.then(() => {
          const { command } = response[key];
          if (command && ajaxCommands[command]) {
            // When a command returns a promise, the remaining commands will not
            // execute until that promise has been fulfilled. This is typically
            // used to ensure JavaScript files added via the 'add_js' command
            // have loaded before subsequent commands execute.
            return ajaxCommands[command](this, response[key], status);
          }
        }),
      Promise.resolve(),
    );
  };

  /**
   * Handler for the form redirection completion.
   *
   * @param {Array.<Drupal.AjaxCommands~commandDefinition>} response
   *   Drupal Ajax response.
   * @param {number} status
   *   XMLHttpRequest status.
   *
   * @return {Promise}
   * The promise that will resolve once all commands have finished executing.
   */
  Drupal.Ajax.prototype.success = function (response, status) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    $(this.element).prop('disabled', false);

    // Save element's ancestors tree so if the element is removed from the dom
    // we can try to refocus one of its parents. Using addBack reverse the
    // result array, meaning that index 0 is the highest parent in the hierarchy
    // in this situation it is usually a <form> element.
    const elementParents = $(this.element)
      .parents('[data-drupal-selector]')
      .addBack()
      .toArray();

    // Track if any command is altering the focus so we can avoid changing the
    // focus set by the Ajax command.
    const focusChanged = Object.keys(response || {}).some((key) => {
      const { command, method } = response[key];
      return (
        command === 'focusFirst' || (command === 'invoke' && method === 'focus')
      );
    });

    return (
      this.commandExecutionQueue(response, status)
        // If the focus hasn't been changed by the AJAX commands, try to refocus
        // the triggering element or one of its parents if that element does not
        // exist anymore.
        .then(() => {
          if (
            !focusChanged &&
            this.element &&
            !$(this.element).data('disable-refocus')
          ) {
            let target = false;

            for (let n = elementParents.length - 1; !target && n >= 0; n--) {
              target = document.querySelector(
                `[data-drupal-selector="${elementParents[n].getAttribute(
                  'data-drupal-selector',
                )}"]`,
              );
            }
            if (target) {
              $(target).trigger('focus');
            }
          }
          // Reattach behaviors, if they were detached in beforeSerialize(). The
          // attachBehaviors() called on the new content from processing the
          // response commands is not sufficient, because behaviors from the
          // entire form need to be reattached.
          if (this.$form && document.body.contains(this.$form.get(0))) {
            const settings = this.settings || drupalSettings;
            Drupal.attachBehaviors(this.$form.get(0), settings);
          }
          // Remove any response-specific settings so they don't get used on the
          // next call by mistake.
          this.settings = null;
        })
        .catch((error) =>
          // eslint-disable-next-line no-console
          console.error(
            Drupal.t(
              'An error occurred during the execution of the Ajax response: !error',
              {
                '!error': error,
              },
            ),
          ),
        )
    );
  };

  /**
   * Build an effect object to apply an effect when adding new HTML.
   *
   * @param {object} response
   *   Drupal Ajax response.
   * @param {string} [response.effect]
   *   Override the default value of {@link Drupal.Ajax#elementSettings}.
   * @param {string|number} [response.speed]
   *   Override the default value of {@link Drupal.Ajax#elementSettings}.
   *
   * @return {object}
   *   Returns an object with `showEffect`, `hideEffect` and `showSpeed`
   *   properties.
   */
  Drupal.Ajax.prototype.getEffect = function (response) {
    const type = response.effect || this.effect;
    const speed = response.speed || this.speed;

    const effect = {};
    if (type === 'none') {
      effect.showEffect = 'show';
      effect.hideEffect = 'hide';
      effect.showSpeed = '';
    } else if (type === 'fade') {
      effect.showEffect = 'fadeIn';
      effect.hideEffect = 'fadeOut';
      effect.showSpeed = speed;
    } else {
      effect.showEffect = `${type}Toggle`;
      effect.hideEffect = `${type}Toggle`;
      effect.showSpeed = speed;
    }

    return effect;
  };

  /**
   * Handler for the form redirection error.
   *
   * @param {object} xmlhttprequest
   *   Native XMLHttpRequest object.
   * @param {string} uri
   *   Ajax Request URI.
   * @param {string} [customMessage]
   *   Extra message to print with the Ajax error.
   */
  Drupal.Ajax.prototype.error = function (xmlhttprequest, uri, customMessage) {
    // Remove the progress element.
    if (this.progress.element) {
      $(this.progress.element).remove();
    }
    if (this.progress.object) {
      this.progress.object.stopMonitoring();
    }
    // Undo hide.
    $(this.wrapper).show();
    // Re-enable the element.
    $(this.element).prop('disabled', false);
    // Reattach behaviors, if they were detached in beforeSerialize(), and the
    // form is still part of the document.
    if (this.$form && document.body.contains(this.$form.get(0))) {
      const settings = this.settings || drupalSettings;
      Drupal.attachBehaviors(this.$form.get(0), settings);
    }
    throw new Drupal.AjaxError(xmlhttprequest, uri, customMessage);
  };

  /**
   * Provide a wrapper for new content via Ajax.
   *
   * Wrap the inserted markup when inserting multiple root elements with an
   * ajax effect.
   *
   * @param {jQuery} $newContent
   *   Response elements after parsing.
   * @param {Drupal.Ajax} ajax
   *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
   * @param {object} response
   *   The response from the Ajax request.
   *
   * @deprecated in drupal:8.6.0 and is removed from drupal:10.0.0.
   *   Use data with desired wrapper.
   *
   * @see https://www.drupal.org/node/2940704
   *
   * @todo Add deprecation warning after it is possible. For more information
   *   see: https://www.drupal.org/project/drupal/issues/2973400
   */
  Drupal.theme.ajaxWrapperNewContent = ($newContent, ajax, response) =>
    (response.effect || ajax.effect) !== 'none' &&
    $newContent.filter(
      (i) =>
        !(
          // We can not consider HTML comments or whitespace text as separate
          // roots, since they do not cause visual regression with effect.
          (
            $newContent[i].nodeName === '#comment' ||
            ($newContent[i].nodeName === '#text' &&
              /^(\s|\n|\r)*$/.test($newContent[i].textContent))
          )
        ),
    ).length > 1
      ? Drupal.theme('ajaxWrapperMultipleRootElements', $newContent)
      : $newContent;

  /**
   * Provide a wrapper for multiple root elements via Ajax.
   *
   * @param {jQuery} $elements
   *   Response elements after parsing.
   *
   * @deprecated in drupal:8.6.0 and is removed from drupal:10.0.0.
   *   Use data with desired wrapper.
   *
   * @see https://www.drupal.org/node/2940704
   *
   * @todo Add deprecation warning after it is possible. For more information
   *   see: https://www.drupal.org/project/drupal/issues/2973400
   */
  Drupal.theme.ajaxWrapperMultipleRootElements = ($elements) =>
    $('<div></div>').append($elements);

  /**
   * @typedef {object} Drupal.AjaxCommands~commandDefinition
   *
   * @prop {string} command
   * @prop {string} [method]
   * @prop {string} [selector]
   * @prop {string} [data]
   * @prop {object} [settings]
   * @prop {boolean} [asterisk]
   * @prop {string} [text]
   * @prop {string} [title]
   * @prop {string} [url]
   * @prop {object} [argument]
   * @prop {string} [name]
   * @prop {string} [value]
   * @prop {string} [old]
   * @prop {string} [new]
   * @prop {boolean} [merge]
   * @prop {Array} [args]
   *
   * @see Drupal.AjaxCommands
   */

  /**
   * Provide a series of commands that the client will perform.
   *
   * @constructor
   */
  Drupal.AjaxCommands = function () {};
  Drupal.AjaxCommands.prototype = {
    /**
     * Command to insert new content into the DOM.
     *
     * @param {Drupal.Ajax} ajax
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   The data to use with the jQuery method.
     * @param {string} [response.method]
     *   The jQuery DOM manipulation method to be used.
     * @param {string} [response.selector]
     *   An optional jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     */
    insert(ajax, response) {
      // Get information from the response. If it is not there, default to
      // our presets.
      const $wrapper = response.selector
        ? $(response.selector)
        : $(ajax.wrapper);
      const method = response.method || ajax.method;
      const effect = ajax.getEffect(response);

      // Apply any settings from the returned JSON if available.
      const settings = response.settings || ajax.settings || drupalSettings;

      // Parse response.data into an element collection.
      let $newContent = $($.parseHTML(response.data, document, true));
      // For backward compatibility, in some cases a wrapper will be added. This
      // behavior will be removed before Drupal 9.0.0. If different behavior is
      // needed, the theme functions can be overridden.
      // @see https://www.drupal.org/node/2940704
      $newContent = Drupal.theme(
        'ajaxWrapperNewContent',
        $newContent,
        ajax,
        response,
      );

      // If removing content from the wrapper, detach behaviors first.
      switch (method) {
        case 'html':
        case 'replaceWith':
        case 'replaceAll':
        case 'empty':
        case 'remove':
          Drupal.detachBehaviors($wrapper.get(0), settings);
          break;
        default:
          break;
      }

      // Add the new content to the page.
      $wrapper[method]($newContent);

      // Immediately hide the new content if we're using any effects.
      if (effect.showEffect !== 'show') {
        $newContent.hide();
      }

      // Determine which effect to use and what content will receive the
      // effect, then show the new content.
      const $ajaxNewContent = $newContent.find('.ajax-new-content');
      if ($ajaxNewContent.length) {
        $ajaxNewContent.hide();
        $newContent.show();
        $ajaxNewContent[effect.showEffect](effect.showSpeed);
      } else if (effect.showEffect !== 'show') {
        $newContent[effect.showEffect](effect.showSpeed);
      }

      // Attach all JavaScript behaviors to the new content, if it was
      // successfully added to the page, this if statement allows
      // `#ajax['wrapper']` to be optional.
      if ($newContent.parents('html').length) {
        // Attach behaviors to all element nodes.
        $newContent.each((index, element) => {
          if (element.nodeType === Node.ELEMENT_NODE) {
            Drupal.attachBehaviors(element, settings);
          }
        });
      }
    },

    /**
     * Command to remove a chunk from the page.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} [response.settings]
     *   An optional array of settings that will be used.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    remove(ajax, response, status) {
      const settings = response.settings || ajax.settings || drupalSettings;
      $(response.selector)
        .each(function () {
          Drupal.detachBehaviors(this, settings);
        })
        .remove();
    },

    /**
     * Command to mark a chunk changed.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response object from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {boolean} [response.asterisk]
     *   An optional CSS selector. If specified, an asterisk will be
     *   appended to the HTML inside the provided selector.
     * @param {number} [status]
     *   The request status.
     */
    changed(ajax, response, status) {
      const $element = $(response.selector);
      if (!$element.hasClass('ajax-changed')) {
        $element.addClass('ajax-changed');
        if (response.asterisk) {
          $element
            .find(response.asterisk)
            .append(
              ` <abbr class="ajax-changed" title="${Drupal.t(
                'Changed',
              )}">*</abbr> `,
            );
        }
      }
    },

    /**
     * Command to provide an alert.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response from the Ajax request.
     * @param {string} response.text
     *   The text that will be displayed in an alert dialog.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    alert(ajax, response, status) {
      window.alert(response.text);
    },

    /**
     * Command to provide triggers audio UAs to read the supplied text.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The JSON response from the Ajax request.
     * @param {string} [response.text]
     *   The text that will be read.
     * @param {string} [response.priority]
     *   An optional priority that will be used for the announcement.
     */
    announce(ajax, response) {
      if (response.priority) {
        Drupal.announce(response.text, response.priority);
      } else {
        Drupal.announce(response.text);
      }
    },

    /**
     * Command to set the window.location, redirecting the browser.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.url
     *   The URL to redirect to.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    redirect(ajax, response, status) {
      window.location = response.url;
    },

    /**
     * Command to provide the jQuery css() function.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {object} response.argument
     *   An array of key/value pairs to set in the CSS for the selector.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    css(ajax, response, status) {
      $(response.selector).css(response.argument);
    },

    /**
     * Command to set the settings used for other commands in this response.
     *
     * This method will also remove expired `drupalSettings.ajax` settings.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {boolean} response.merge
     *   Determines whether the additional settings should be merged to the
     *   global settings.
     * @param {object} response.settings
     *   Contains additional settings to add to the global settings.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    settings(ajax, response, status) {
      const ajaxSettings = drupalSettings.ajax;

      // Clean up drupalSettings.ajax.
      if (ajaxSettings) {
        Drupal.ajax.expired().forEach((instance) => {
          // If the Ajax object has been created through drupalSettings.ajax
          // it will have a selector. When there is no selector the object
          // has been initialized with a special class name picked up by the
          // Ajax behavior.

          if (instance.selector) {
            const selector = instance.selector.replace('#', '');
            if (selector in ajaxSettings) {
              delete ajaxSettings[selector];
            }
          }
        });
      }

      if (response.merge) {
        $.extend(true, drupalSettings, response.settings);
      } else {
        ajax.settings = response.settings;
      }
    },

    /**
     * Command to attach data using jQuery's data API.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.name
     *   The name or key (in the key value pair) of the data attached to this
     *   selector.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {string|object} response.value
     *   The value of to be attached.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    data(ajax, response, status) {
      $(response.selector).data(response.name, response.value);
    },

    /**
     * Command to focus the first tabbable element within a container.
     *
     * If no tabbable elements are found and the container is focusable, then
     * focus will move to that container.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A query selector string of the container to focus within.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    focusFirst(ajax, response, status) {
      let focusChanged = false;
      const container = document.querySelector(response.selector);
      if (container) {
        // Find all tabbable elements within the container.
        const tabbableElements = tabbable(container);

        // Move focus to the first tabbable item found.
        if (tabbableElements.length) {
          tabbableElements[0].focus();
          focusChanged = true;
        } else if (isFocusable(container)) {
          // If no tabbable elements are found, but the container is focusable,
          // move focus to the container.
          container.focus();
          focusChanged = true;
        }
      }

      // If no items were available to receive focus, return focus to the
      // triggering element.
      if (ajax.hasOwnProperty('element') && !focusChanged) {
        ajax.element.focus();
      }
    },

    /**
     * Command to apply a jQuery method.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {Array} response.args
     *   An array of arguments to the jQuery method, if any.
     * @param {string} response.method
     *   The jQuery method to invoke.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    invoke(ajax, response, status) {
      const $element = $(response.selector);
      $element[response.method](...response.args);
    },

    /**
     * Command to restripe a table.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.selector
     *   A jQuery selector string.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    restripe(ajax, response, status) {
      // :even and :odd are reversed because jQuery counts from 0 and
      // we count from 1, so we're out of sync.
      // Match immediate children of the parent element to allow nesting.
      $(response.selector)
        .find('> tbody > tr:visible, > tr:visible')
        .removeClass('odd even')
        .filter(':even')
        .addClass('odd')
        .end()
        .filter(':odd')
        .addClass('even');
    },

    /**
     * Command to update a form's build ID.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.old
     *   The old form build ID.
     * @param {string} response.new
     *   The new form build ID.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    update_build_id(ajax, response, status) {
      document
        .querySelectorAll(
          `input[name="form_build_id"][value="${response.old}"]`,
        )
        .forEach((item) => {
          item.value = response.new;
        });
    },

    /**
     * Command to add css.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.data
     *   A string that contains the styles to be added.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    add_css(ajax, response, status) {
      $('head').prepend(response.data);
    },

    /**
     * Command to add a message to the message area.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {string} response.messageWrapperQuerySelector
     *   The zone where to add the message. If null, the default will be used.
     * @param {string} response.message
     *   The message text.
     * @param {string} response.messageOptions
     *   The options argument for Drupal.Message().add().
     * @param {boolean} response.clearPrevious
     *   If true, clear previous messages.
     */
    message(ajax, response) {
      const messages = new Drupal.Message(
        document.querySelector(response.messageWrapperQuerySelector),
      );
      if (response.clearPrevious) {
        messages.clear();
      }
      messages.add(response.message, response.messageOptions);
    },

    /**
     * Command to add JS.
     *
     * @param {Drupal.Ajax} [ajax]
     *   {@link Drupal.Ajax} object created by {@link Drupal.ajax}.
     * @param {object} response
     *   The response from the Ajax request.
     * @param {Array} response.data
     *   An array of objects of script attributes.
     * @param {number} [status]
     *   The XMLHttpRequest status.
     */
    add_js(ajax, response, status) {
      const parentEl = document.querySelector(response.selector || 'body');
      const settings = ajax.settings || drupalSettings;
      const allUniqueBundleIds = response.data.map((script) => {
        // loadjs requires a unique ID, and an AJAX instance's `instanceIndex`
        // is guaranteed to be unique.
        // @see Drupal.behaviors.AJAX.detach
        const uniqueBundleId = script.src + ajax.instanceIndex;
        loadjs(script.src, uniqueBundleId, {
          // The default loadjs behavior is to load script with async, in Drupal
          // we need to explicitly tell scripts to load async, this is set in
          // the before callback below if necessary.
          async: false,
          before(path, scriptEl) {
            // This allows all attributes to be added, like defer, async and
            // crossorigin.
            Object.keys(script).forEach((attributeKey) => {
              scriptEl.setAttribute(attributeKey, script[attributeKey]);
            });

            // By default, loadjs appends the script to the head. When scripts
            // are loaded via AJAX, their location has no impact on
            // functionality. But, since non-AJAX loaded scripts can choose
            // their parent element, we provide that option here for the sake of
            // consistency.
            parentEl.appendChild(scriptEl);
            // Return false to bypass loadjs' default DOM insertion mechanism.
            return false;
          },
        });
        return uniqueBundleId;
      });
      // Returns the promise so that the next AJAX command waits on the
      // completion of this one to execute, ensuring the JS is loaded before
      // executing.
      return new Promise((resolve, reject) => {
        loadjs.ready(allUniqueBundleIds, {
          success() {
            Drupal.attachBehaviors(parentEl, settings);
            // All JS files were loaded and new and old behaviors have
            // been attached. Resolve the promise and let the remaining
            // commands execute.
            resolve();
          },
          error(depsNotFound) {
            const message = Drupal.t(
              `The following files could not be loaded: @dependencies`,
              { '@dependencies': depsNotFound.join(', ') },
            );
            reject(message);
          },
        });
      });
    },
  };

  /**
   * Delay jQuery's global completion events until after commands have executed.
   *
   * jQuery triggers the ajaxSuccess, ajaxComplete, and ajaxStop events after
   * a successful response is returned and local success and complete events
   * are triggered. However, Drupal Ajax responses contain commands that run
   * asynchronously in a queue, so the following stops these events from getting
   * triggered until after the Promise that executes the command queue is
   * resolved.
   */
  const stopEvent = (xhr, settings) => {
    return (
      // Only interfere with Drupal's Ajax responses.
      xhr.getResponseHeader('X-Drupal-Ajax-Token') === '1' &&
      // The isInProgress() function might not be defined if the Ajax request
      // was initiated without Drupal.ajax() or new Drupal.Ajax().
      settings.isInProgress &&
      // Until this is false, the Ajax request isn't completely done (the
      // response's commands might still be running).
      settings.isInProgress()
    );
  };
  $.extend(true, $.event.special, {
    ajaxSuccess: {
      trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          return false;
        }
      },
    },
    ajaxComplete: {
      trigger(event, xhr, settings) {
        if (stopEvent(xhr, settings)) {
          // jQuery decrements its internal active ajax counter even when we
          // stop the ajaxComplete event, but we don't want that counter
          // decremented, because for our purposes this request is still active
          // while commands are executing. By incrementing it here, the net
          // effect is that it remains unchanged. By remaining above 0, the
          // ajaxStop event is also prevented.
          $.active++;
          return false;
        }
      },
    },
  });
})(jQuery, window, Drupal, drupalSettings, loadjs, window.tabbable);
;
(function ($) {
  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      var selectedText = window.getSelection ? window.getSelection().toString() : '';
      if (selectedText.length > 0) {
        var modal = $('#myModal');
        if (modal) {
          $('.send-form__mistake').html('&laquo;&hellip;' + selectedText + '&hellip;&raquo;<p />');
          $('input[name=mistake]').val(selectedText);
          $('input[name=page]').val(window.location.href);
          $('#typo-description').val('');
          $('.send-form__button--send').removeClass('hidden');
          $('#modal-body').removeClass('hidden');
          $('#modal-status').html('');
          modal.modal('show');
        }
      }
    }
  });
  $('.send-form__button--close').click(function(e) {
    e.preventDefault();
    $('#myModal').modal('hide');
  });
})(jQuery);;
/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function(r){"function"==typeof define&&define.amd?define(["jquery"],r):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),r(t),t}:r(jQuery)}(function(q){"use strict";var m=/\r?\n/g,S={};S.fileapi=void 0!==q('<input type="file">').get(0).files,S.formdata=void 0!==window.FormData;var _=!!q.fn.prop;function o(e){var t=e.data;e.isDefaultPrevented()||(e.preventDefault(),q(e.target).closest("form").ajaxSubmit(t))}function i(e){var t=e.target,r=q(t);if(!r.is("[type=submit],[type=image]")){var a=r.closest("[type=submit]");if(0===a.length)return;t=a[0]}var n,o=t.form;"image"===(o.clk=t).type&&(void 0!==e.offsetX?(o.clk_x=e.offsetX,o.clk_y=e.offsetY):"function"==typeof q.fn.offset?(n=r.offset(),o.clk_x=e.pageX-n.left,o.clk_y=e.pageY-n.top):(o.clk_x=e.pageX-t.offsetLeft,o.clk_y=e.pageY-t.offsetTop)),setTimeout(function(){o.clk=o.clk_x=o.clk_y=null},100)}function N(){var e;q.fn.ajaxSubmit.debug&&(e="[jquery.form] "+Array.prototype.join.call(arguments,""),window.console&&window.console.log?window.console.log(e):window.opera&&window.opera.postError&&window.opera.postError(e))}q.fn.attr2=function(){if(!_)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},q.fn.ajaxSubmit=function(M,e,t,r){if(!this.length)return N("ajaxSubmit: skipping submit process - no element selected"),this;var O,a,n,o,X=this;"function"==typeof M?M={success:M}:"string"==typeof M||!1===M&&0<arguments.length?(M={url:M,data:e,dataType:t},"function"==typeof r&&(M.success=r)):void 0===M&&(M={}),O=M.method||M.type||this.attr2("method"),n=(n=(n="string"==typeof(a=M.url||this.attr2("action"))?q.trim(a):"")||window.location.href||"")&&(n.match(/^([^#]+)/)||[])[1],o=/(MSIE|Trident)/.test(navigator.userAgent||"")&&/^https/i.test(window.location.href||"")?"javascript:false":"about:blank",M=q.extend(!0,{url:n,success:q.ajaxSettings.success,type:O||q.ajaxSettings.type,iframeSrc:o},M);var i={};if(this.trigger("form-pre-serialize",[this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(M.beforeSerialize&&!1===M.beforeSerialize(this,M))return N("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var s=M.traditional;void 0===s&&(s=q.ajaxSettings.traditional);var u,c,C=[],l=this.formToArray(M.semantic,C,M.filtering);if(M.data&&(c=q.isFunction(M.data)?M.data(l):M.data,M.extraData=c,u=q.param(c,s)),M.beforeSubmit&&!1===M.beforeSubmit(l,this,M))return N("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[l,this,M,i]),i.veto)return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var f=q.param(l,s);u&&(f=f?f+"&"+u:u),"GET"===M.type.toUpperCase()?(M.url+=(0<=M.url.indexOf("?")?"&":"?")+f,M.data=null):M.data=f;var d,m,p,h=[];M.resetForm&&h.push(function(){X.resetForm()}),M.clearForm&&h.push(function(){X.clearForm(M.includeHidden)}),!M.dataType&&M.target?(d=M.success||function(){},h.push(function(e,t,r){var a=arguments,n=M.replaceTarget?"replaceWith":"html";q(M.target)[n](e).each(function(){d.apply(this,a)})})):M.success&&(q.isArray(M.success)?q.merge(h,M.success):h.push(M.success)),M.success=function(e,t,r){for(var a=M.context||this,n=0,o=h.length;n<o;n++)h[n].apply(a,[e,t,r||X,X])},M.error&&(m=M.error,M.error=function(e,t,r){var a=M.context||this;m.apply(a,[e,t,r,X])}),M.complete&&(p=M.complete,M.complete=function(e,t){var r=M.context||this;p.apply(r,[e,t,X])});var v=0<q("input[type=file]:enabled",this).filter(function(){return""!==q(this).val()}).length,g="multipart/form-data",x=X.attr("enctype")===g||X.attr("encoding")===g,y=S.fileapi&&S.formdata;N("fileAPI :"+y);var b,T=(v||x)&&!y;!1!==M.iframe&&(M.iframe||T)?M.closeKeepAlive?q.get(M.closeKeepAlive,function(){b=w(l)}):b=w(l):b=(v||x)&&y?function(e){for(var r=new FormData,t=0;t<e.length;t++)r.append(e[t].name,e[t].value);if(M.extraData){var a=function(e){var t,r,a=q.param(e,M.traditional).split("&"),n=a.length,o=[];for(t=0;t<n;t++)a[t]=a[t].replace(/\+/g," "),r=a[t].split("="),o.push([decodeURIComponent(r[0]),decodeURIComponent(r[1])]);return o}(M.extraData);for(t=0;t<a.length;t++)a[t]&&r.append(a[t][0],a[t][1])}M.data=null;var n=q.extend(!0,{},q.ajaxSettings,M,{contentType:!1,processData:!1,cache:!1,type:O||"POST"});M.uploadProgress&&(n.xhr=function(){var e=q.ajaxSettings.xhr();return e.upload&&e.upload.addEventListener("progress",function(e){var t=0,r=e.loaded||e.position,a=e.total;e.lengthComputable&&(t=Math.ceil(r/a*100)),M.uploadProgress(e,r,a,t)},!1),e});n.data=null;var o=n.beforeSend;return n.beforeSend=function(e,t){M.formData?t.data=M.formData:t.data=r,o&&o.call(this,e,t)},q.ajax(n)}(l):q.ajax(M),X.removeData("jqxhr").data("jqxhr",b);for(var j=0;j<C.length;j++)C[j]=null;return this.trigger("form-submit-notify",[this,M]),this;function w(e){var t,r,l,f,o,d,m,p,a,n,h,v,i=X[0],g=q.Deferred();if(g.abort=function(e){p.abort(e)},e)for(r=0;r<C.length;r++)t=q(C[r]),_?t.prop("disabled",!1):t.removeAttr("disabled");(l=q.extend(!0,{},q.ajaxSettings,M)).context=l.context||l,o="jqFormIO"+(new Date).getTime();var s=i.ownerDocument,u=X.closest("body");if(l.iframeTarget?(n=(d=q(l.iframeTarget,s)).attr2("name"))?o=n:d.attr2("name",o):(d=q('<iframe name="'+o+'" src="'+l.iframeSrc+'" />',s)).css({position:"absolute",top:"-1000px",left:"-1000px"}),m=d[0],p={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(e){var t="timeout"===e?"timeout":"aborted";N("aborting upload... "+t),this.aborted=1;try{m.contentWindow.document.execCommand&&m.contentWindow.document.execCommand("Stop")}catch(e){}d.attr("src",l.iframeSrc),p.error=t,l.error&&l.error.call(l.context,p,t,e),f&&q.event.trigger("ajaxError",[p,l,t]),l.complete&&l.complete.call(l.context,p,t)}},(f=l.global)&&0==q.active++&&q.event.trigger("ajaxStart"),f&&q.event.trigger("ajaxSend",[p,l]),l.beforeSend&&!1===l.beforeSend.call(l.context,p,l))return l.global&&q.active--,g.reject(),g;if(p.aborted)return g.reject(),g;(a=i.clk)&&(n=a.name)&&!a.disabled&&(l.extraData=l.extraData||{},l.extraData[n]=a.value,"image"===a.type&&(l.extraData[n+".x"]=i.clk_x,l.extraData[n+".y"]=i.clk_y));var x=1,y=2;function b(t){var r=null;try{t.contentWindow&&(r=t.contentWindow.document)}catch(e){N("cannot get iframe.contentWindow document: "+e)}if(r)return r;try{r=t.contentDocument?t.contentDocument:t.document}catch(e){N("cannot get iframe.contentDocument: "+e),r=t.document}return r}var c=q("meta[name=csrf-token]").attr("content"),T=q("meta[name=csrf-param]").attr("content");function j(){var e=X.attr2("target"),t=X.attr2("action"),r=X.attr("enctype")||X.attr("encoding")||"multipart/form-data";i.setAttribute("target",o),O&&!/post/i.test(O)||i.setAttribute("method","POST"),t!==l.url&&i.setAttribute("action",l.url),l.skipEncodingOverride||O&&!/post/i.test(O)||X.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),l.timeout&&(v=setTimeout(function(){h=!0,A(x)},l.timeout));var a=[];try{if(l.extraData)for(var n in l.extraData)l.extraData.hasOwnProperty(n)&&(q.isPlainObject(l.extraData[n])&&l.extraData[n].hasOwnProperty("name")&&l.extraData[n].hasOwnProperty("value")?a.push(q('<input type="hidden" name="'+l.extraData[n].name+'">',s).val(l.extraData[n].value).appendTo(i)[0]):a.push(q('<input type="hidden" name="'+n+'">',s).val(l.extraData[n]).appendTo(i)[0]));l.iframeTarget||d.appendTo(u),m.attachEvent?m.attachEvent("onload",A):m.addEventListener("load",A,!1),setTimeout(function e(){try{var t=b(m).readyState;N("state = "+t),t&&"uninitialized"===t.toLowerCase()&&setTimeout(e,50)}catch(e){N("Server abort: ",e," (",e.name,")"),A(y),v&&clearTimeout(v),v=void 0}},15);try{i.submit()}catch(e){document.createElement("form").submit.apply(i)}}finally{i.setAttribute("action",t),i.setAttribute("enctype",r),e?i.setAttribute("target",e):X.removeAttr("target"),q(a).remove()}}T&&c&&(l.extraData=l.extraData||{},l.extraData[T]=c),l.forceSync?j():setTimeout(j,10);var w,S,k,D=50;function A(e){if(!p.aborted&&!k){if((S=b(m))||(N("cannot access response document"),e=y),e===x&&p)return p.abort("timeout"),void g.reject(p,"timeout");if(e===y&&p)return p.abort("server abort"),void g.reject(p,"error","server abort");if(S&&S.location.href!==l.iframeSrc||h){m.detachEvent?m.detachEvent("onload",A):m.removeEventListener("load",A,!1);var t,r="success";try{if(h)throw"timeout";var a="xml"===l.dataType||S.XMLDocument||q.isXMLDoc(S);if(N("isXml="+a),!a&&window.opera&&(null===S.body||!S.body.innerHTML)&&--D)return N("requeing onLoad callback, DOM not available"),void setTimeout(A,250);var n=S.body?S.body:S.documentElement;p.responseText=n?n.innerHTML:null,p.responseXML=S.XMLDocument?S.XMLDocument:S,a&&(l.dataType="xml"),p.getResponseHeader=function(e){return{"content-type":l.dataType}[e.toLowerCase()]},n&&(p.status=Number(n.getAttribute("status"))||p.status,p.statusText=n.getAttribute("statusText")||p.statusText);var o,i,s,u=(l.dataType||"").toLowerCase(),c=/(json|script|text)/.test(u);c||l.textarea?(o=S.getElementsByTagName("textarea")[0])?(p.responseText=o.value,p.status=Number(o.getAttribute("status"))||p.status,p.statusText=o.getAttribute("statusText")||p.statusText):c&&(i=S.getElementsByTagName("pre")[0],s=S.getElementsByTagName("body")[0],i?p.responseText=i.textContent?i.textContent:i.innerText:s&&(p.responseText=s.textContent?s.textContent:s.innerText)):"xml"===u&&!p.responseXML&&p.responseText&&(p.responseXML=F(p.responseText));try{w=E(p,u,l)}catch(e){r="parsererror",p.error=t=e||r}}catch(e){N("error caught: ",e),r="error",p.error=t=e||r}p.aborted&&(N("upload aborted"),r=null),p.status&&(r=200<=p.status&&p.status<300||304===p.status?"success":"error"),"success"===r?(l.success&&l.success.call(l.context,w,"success",p),g.resolve(p.responseText,"success",p),f&&q.event.trigger("ajaxSuccess",[p,l])):r&&(void 0===t&&(t=p.statusText),l.error&&l.error.call(l.context,p,r,t),g.reject(p,"error",t),f&&q.event.trigger("ajaxError",[p,l,t])),f&&q.event.trigger("ajaxComplete",[p,l]),f&&!--q.active&&q.event.trigger("ajaxStop"),l.complete&&l.complete.call(l.context,p,r),k=!0,l.timeout&&clearTimeout(v),setTimeout(function(){l.iframeTarget?d.attr("src",l.iframeSrc):d.remove(),p.responseXML=null},100)}}}var F=q.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!==t.documentElement.nodeName?t:null},L=q.parseJSON||function(e){return window.eval("("+e+")")},E=function(e,t,r){var a=e.getResponseHeader("content-type")||"",n=("xml"===t||!t)&&0<=a.indexOf("xml"),o=n?e.responseXML:e.responseText;return n&&"parsererror"===o.documentElement.nodeName&&q.error&&q.error("parsererror"),r&&r.dataFilter&&(o=r.dataFilter(o,t)),"string"==typeof o&&(("json"===t||!t)&&0<=a.indexOf("json")?o=L(o):("script"===t||!t)&&0<=a.indexOf("javascript")&&q.globalEval(o)),o};return g}},q.fn.ajaxForm=function(e,t,r,a){if(("string"==typeof e||!1===e&&0<arguments.length)&&(e={url:e,data:t,dataType:r},"function"==typeof a&&(e.success=a)),(e=e||{}).delegation=e.delegation&&q.isFunction(q.fn.on),e.delegation||0!==this.length)return e.delegation?(q(document).off("submit.form-plugin",this.selector,o).off("click.form-plugin",this.selector,i).on("submit.form-plugin",this.selector,e,o).on("click.form-plugin",this.selector,e,i),this):(e.beforeFormUnbind&&e.beforeFormUnbind(this,e),this.ajaxFormUnbind().on("submit.form-plugin",e,o).on("click.form-plugin",e,i));var n={s:this.selector,c:this.context};return!q.isReady&&n.s?(N("DOM not ready, queuing ajaxForm"),q(function(){q(n.s,n.c).ajaxForm(e)})):N("terminating; zero elements found by selector"+(q.isReady?"":" (DOM not ready)")),this},q.fn.ajaxFormUnbind=function(){return this.off("submit.form-plugin click.form-plugin")},q.fn.formToArray=function(e,t,r){var a=[];if(0===this.length)return a;var n,o,i,s,u,c,l,f,d,m,p=this[0],h=this.attr("id"),v=(v=e||void 0===p.elements?p.getElementsByTagName("*"):p.elements)&&q.makeArray(v);if(h&&(e||/(Edge|Trident)\//.test(navigator.userAgent))&&(n=q(':input[form="'+h+'"]').get()).length&&(v=(v||[]).concat(n)),!v||!v.length)return a;for(q.isFunction(r)&&(v=q.map(v,r)),o=0,c=v.length;o<c;o++)if((m=(u=v[o]).name)&&!u.disabled)if(e&&p.clk&&"image"===u.type)p.clk===u&&(a.push({name:m,value:q(u).val(),type:u.type}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y}));else if((s=q.fieldValue(u,!0))&&s.constructor===Array)for(t&&t.push(u),i=0,l=s.length;i<l;i++)a.push({name:m,value:s[i]});else if(S.fileapi&&"file"===u.type){t&&t.push(u);var g=u.files;if(g.length)for(i=0;i<g.length;i++)a.push({name:m,value:g[i],type:u.type});else a.push({name:m,value:"",type:u.type})}else null!=s&&(t&&t.push(u),a.push({name:m,value:s,type:u.type,required:u.required}));return e||!p.clk||(m=(d=(f=q(p.clk))[0]).name)&&!d.disabled&&"image"===d.type&&(a.push({name:m,value:f.val()}),a.push({name:m+".x",value:p.clk_x},{name:m+".y",value:p.clk_y})),a},q.fn.formSerialize=function(e){return q.param(this.formToArray(e))},q.fn.fieldSerialize=function(n){var o=[];return this.each(function(){var e=this.name;if(e){var t=q.fieldValue(this,n);if(t&&t.constructor===Array)for(var r=0,a=t.length;r<a;r++)o.push({name:e,value:t[r]});else null!=t&&o.push({name:this.name,value:t})}}),q.param(o)},q.fn.fieldValue=function(e){for(var t=[],r=0,a=this.length;r<a;r++){var n=this[r],o=q.fieldValue(n,e);null==o||o.constructor===Array&&!o.length||(o.constructor===Array?q.merge(t,o):t.push(o))}return t},q.fieldValue=function(e,t){var r=e.name,a=e.type,n=e.tagName.toLowerCase();if(void 0===t&&(t=!0),t&&(!r||e.disabled||"reset"===a||"button"===a||("checkbox"===a||"radio"===a)&&!e.checked||("submit"===a||"image"===a)&&e.form&&e.form.clk!==e||"select"===n&&-1===e.selectedIndex))return null;if("select"!==n)return q(e).val().replace(m,"\r\n");var o=e.selectedIndex;if(o<0)return null;for(var i=[],s=e.options,u="select-one"===a,c=u?o+1:s.length,l=u?o:0;l<c;l++){var f=s[l];if(f.selected&&!f.disabled){var d=(d=f.value)||(f.attributes&&f.attributes.value&&!f.attributes.value.specified?f.text:f.value);if(u)return d;i.push(d)}}return i},q.fn.clearForm=function(e){return this.each(function(){q("input,select,textarea",this).clearFields(e)})},q.fn.clearFields=q.fn.clearInputs=function(r){var a=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var e=this.type,t=this.tagName.toLowerCase();a.test(e)||"textarea"===t?this.value="":"checkbox"===e||"radio"===e?this.checked=!1:"select"===t?this.selectedIndex=-1:"file"===e?/MSIE/.test(navigator.userAgent)?q(this).replaceWith(q(this).clone(!0)):q(this).val(""):r&&(!0===r&&/hidden/.test(e)||"string"==typeof r&&q(this).is(r))&&(this.value="")})},q.fn.resetForm=function(){return this.each(function(){var t=q(this),e=this.tagName.toLowerCase();switch(e){case"input":this.checked=this.defaultChecked;case"textarea":return this.value=this.defaultValue,!0;case"option":case"optgroup":var r=t.parents("select");return r.length&&r[0].multiple?"option"===e?this.selected=this.defaultSelected:t.find("option").resetForm():r.resetForm(),!0;case"select":return t.find("option").each(function(e){if(this.selected=this.defaultSelected,this.defaultSelected&&!t[0].multiple)return t[0].selectedIndex=e,!1}),!0;case"label":var a=q(t.attr("for")),n=t.find("input,select,textarea");return a[0]&&n.unshift(a[0]),n.resetForm(),!0;case"form":return"function"!=typeof this.reset&&("object"!=typeof this.reset||this.reset.nodeType)||this.reset(),!0;default:return t.find("form,input,label,select,textarea").resetForm(),!0}})},q.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},q.fn.selected=function(r){return void 0===r&&(r=!0),this.each(function(){var e,t=this.type;"checkbox"===t||"radio"===t?this.checked=r:"option"===this.tagName.toLowerCase()&&(e=q(this).parent("select"),r&&e[0]&&"select-one"===e[0].type&&e.find("option").selected(!1),this.selected=r)})},q.fn.ajaxSubmit.debug=!1});

;
/*! For license information please see auth-forms.js.LICENSE.txt */
!function(){var t={9591:function(t,e,r){var n=r(8).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},r=Object.prototype,i=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new O(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=k(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=l(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d={};function h(){}function v(){}function y(){}var m={};f(m,u,(function(){return this}));var g=Object.getPrototypeOf,x=g&&g(g(S([])));x&&x!==r&&i.call(x,u)&&(m=x);var b=y.prototype=h.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(t,e){function r(o,a,u,c){var s=l(t[o],t,a);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"==n(p)&&i.call(p,"__await")?e.resolve(p.__await).then((function(t){r("next",t,u,c)}),(function(t){r("throw",t,u,c)})):e.resolve(p).then((function(t){f.value=t,u(f)}),(function(t){return r("throw",t,u,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function S(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:R}}function R(){return{value:void 0,done:!0}}return v.prototype=y,f(b,"constructor",y),f(y,"constructor",v),v.displayName=f(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,f(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(j.prototype),f(j.prototype,c,(function(){return this})),e.AsyncIterator=j,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new j(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),f(b,s,"Generator"),f(b,u,(function(){return this})),f(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var u=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},8:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},7757:function(t,e,r){var n=r(9591)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},9662:function(t,e,r){var n=r(7854),o=r(614),i=r(6330),a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a function")}},9483:function(t,e,r){var n=r(7854),o=r(4411),i=r(6330),a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a constructor")}},6077:function(t,e,r){var n=r(7854),o=r(614),i=n.String,a=n.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw a("Can't set "+i(t)+" as a prototype")}},1223:function(t,e,r){var n=r(5112),o=r(30),i=r(3070).f,a=n("unscopables"),u=Array.prototype;null==u[a]&&i(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},1530:function(t,e,r){"use strict";var n=r(8710).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},5787:function(t,e,r){var n=r(7854),o=r(7976),i=n.TypeError;t.exports=function(t,e){if(o(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,r){var n=r(7854),o=r(111),i=n.String,a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not an object")}},1318:function(t,e,r){var n=r(5656),o=r(1400),i=r(6244),a=function(t){return function(e,r,a){var u,c=n(e),s=i(c),f=o(a,s);if(t&&r!=r){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:function(t,e,r){var n=r(9974),o=r(1702),i=r(8361),a=r(7908),u=r(6244),c=r(5417),s=o([].push),f=function(t){var e=1==t,r=2==t,o=3==t,f=4==t,p=6==t,l=7==t,d=5==t||p;return function(h,v,y,m){for(var g,x,b=a(h),w=i(b),j=n(v,y),k=u(w),E=0,_=m||c,O=e?_(h,k):r||l?_(h,0):void 0;k>E;E++)if((d||E in w)&&(x=j(g=w[E],E,b),t))if(e)O[E]=x;else if(x)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:s(O,g)}else switch(t){case 4:return!1;case 7:s(O,g)}return p?-1:o||f?f:O}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},1194:function(t,e,r){var n=r(7293),o=r(5112),i=r(7392),a=o("species");t.exports=function(t){return i>=51||!n((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},1589:function(t,e,r){var n=r(7854),o=r(1400),i=r(6244),a=r(6135),u=n.Array,c=Math.max;t.exports=function(t,e,r){for(var n=i(t),s=o(e,n),f=o(void 0===r?n:r,n),p=u(c(f-s,0)),l=0;s<f;s++,l++)a(p,l,t[s]);return p.length=l,p}},206:function(t,e,r){var n=r(1702);t.exports=n([].slice)},7475:function(t,e,r){var n=r(7854),o=r(3157),i=r(4411),a=r(111),u=r(5112)("species"),c=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,(i(e)&&(e===c||o(e.prototype))||a(e)&&null===(e=e[u]))&&(e=void 0)),void 0===e?c:e}},5417:function(t,e,r){var n=r(7475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},7072:function(t,e,r){var n=r(5112)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[n]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var r=!1;try{var i={};i[n]=function(){return{next:function(){return{done:r=!0}}}},t(i)}catch(t){}return r}},4326:function(t,e,r){var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:function(t,e,r){var n=r(7854),o=r(1694),i=r(614),a=r(4326),u=r(5112)("toStringTag"),c=n.Object,s="Arguments"==a(function(){return arguments}());t.exports=o?a:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=c(t),u))?r:s?a(e):"Object"==(n=a(e))&&i(e.callee)?"Arguments":n}},9920:function(t,e,r){var n=r(2597),o=r(3887),i=r(1236),a=r(3070);t.exports=function(t,e,r){for(var u=o(e),c=a.f,s=i.f,f=0;f<u.length;f++){var p=u[f];n(t,p)||r&&n(r,p)||c(t,p,s(e,p))}}},8880:function(t,e,r){var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},6135:function(t,e,r){"use strict";var n=r(4948),o=r(3070),i=r(9114);t.exports=function(t,e,r){var a=n(e);a in t?o.f(t,a,i(0,r)):t[a]=r}},8052:function(t,e,r){var n=r(614),o=r(8880),i=r(6339),a=r(3072);t.exports=function(t,e,r,u){u||(u={});var c=u.enumerable,s=void 0!==u.name?u.name:e;return n(r)&&i(r,s,u),u.global?c?t[e]=r:a(e,r):(u.unsafe?t[e]&&(c=!0):delete t[e],c?t[e]=r:o(t,e,r)),t}},3072:function(t,e,r){var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},9781:function(t,e,r){var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,e,r){var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},7871:function(t){t.exports="object"==typeof window&&"object"!=typeof Deno},1528:function(t,e,r){var n=r(8113),o=r(7854);t.exports=/ipad|iphone|ipod/i.test(n)&&void 0!==o.Pebble},6833:function(t,e,r){var n=r(8113);t.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(n)},5268:function(t,e,r){var n=r(4326),o=r(7854);t.exports="process"==n(o.process)},1036:function(t,e,r){var n=r(8113);t.exports=/web0s(?!.*chrome)/i.test(n)},8113:function(t,e,r){var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:function(t,e,r){var n,o,i=r(7854),a=r(8113),u=i.process,c=i.Deno,s=u&&u.versions||c&&c.version,f=s&&s.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,e,r){var n=r(7854),o=r(1236).f,i=r(8880),a=r(8052),u=r(3072),c=r(9920),s=r(4705);t.exports=function(t,e){var r,f,p,l,d,h=t.target,v=t.global,y=t.stat;if(r=v?n:y?n[h]||u(h,{}):(n[h]||{}).prototype)for(f in e){if(l=e[f],p=t.dontCallGetSet?(d=o(r,f))&&d.value:r[f],!s(v?f:h+(y?".":"#")+f,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;c(l,p)}(t.sham||p&&p.sham)&&i(l,"sham",!0),a(r,f,l,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(t){return!0}}},7007:function(t,e,r){"use strict";r(4916);var n=r(1702),o=r(8052),i=r(2261),a=r(7293),u=r(5112),c=r(8880),s=u("species"),f=RegExp.prototype;t.exports=function(t,e,r,p){var l=u(t),d=!a((function(){var e={};return e[l]=function(){return 7},7!=""[t](e)})),h=d&&!a((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[s]=function(){return r},r.flags="",r[l]=/./[l]),r.exec=function(){return e=!0,null},r[l](""),!e}));if(!d||!h||r){var v=n(/./[l]),y=e(l,""[t],(function(t,e,r,o,a){var u=n(t),c=e.exec;return c===i||c===f.exec?d&&!a?{done:!0,value:v(e,r,o)}:{done:!0,value:u(r,e,o)}:{done:!1}}));o(String.prototype,t,y[0]),o(f,l,y[1])}p&&c(f[l],"sham",!0)}},2104:function(t,e,r){var n=r(4374),o=Function.prototype,i=o.apply,a=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?a.bind(i):function(){return a.apply(i,arguments)})},9974:function(t,e,r){var n=r(1702),o=r(9662),i=r(4374),a=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?a(t,e):function(){return t.apply(e,arguments)}}},4374:function(t,e,r){var n=r(7293);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},7065:function(t,e,r){"use strict";var n=r(7854),o=r(1702),i=r(9662),a=r(111),u=r(2597),c=r(206),s=r(4374),f=n.Function,p=o([].concat),l=o([].join),d={},h=function(t,e,r){if(!u(d,e)){for(var n=[],o=0;o<e;o++)n[o]="a["+o+"]";d[e]=f("C,a","return new C("+l(n,",")+")")}return d[e](t,r)};t.exports=s?f.bind:function(t){var e=i(this),r=e.prototype,n=c(arguments,1),o=function(){var r=p(n,c(arguments));return this instanceof o?h(e,r.length,r):e.apply(t,r)};return a(r)&&(o.prototype=r),o}},6916:function(t,e,r){var n=r(4374),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,e,r){var n=r(9781),o=r(2597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,s=u&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},1702:function(t,e,r){var n=r(4374),o=Function.prototype,i=o.bind,a=o.call,u=n&&i.bind(a,a);t.exports=n?function(t){return t&&u(t)}:function(t){return t&&function(){return a.apply(t,arguments)}}},5005:function(t,e,r){var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},1246:function(t,e,r){var n=r(648),o=r(8173),i=r(7497),a=r(5112)("iterator");t.exports=function(t){if(null!=t)return o(t,a)||o(t,"@@iterator")||i[n(t)]}},8554:function(t,e,r){var n=r(7854),o=r(6916),i=r(9662),a=r(9670),u=r(6330),c=r(1246),s=n.TypeError;t.exports=function(t,e){var r=arguments.length<2?c(t):e;if(i(r))return a(o(r,t));throw s(u(t)+" is not iterable")}},8173:function(t,e,r){var n=r(9662);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},647:function(t,e,r){var n=r(1702),o=r(7908),i=Math.floor,a=n("".charAt),u=n("".replace),c=n("".slice),s=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,f=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,n,p,l){var d=r+t.length,h=n.length,v=f;return void 0!==p&&(p=o(p),v=s),u(l,v,(function(o,u){var s;switch(a(u,0)){case"$":return"$";case"&":return t;case"`":return c(e,0,r);case"'":return c(e,d);case"<":s=p[c(u,1,-1)];break;default:var f=+u;if(0===f)return o;if(f>h){var l=i(f/10);return 0===l?o:l<=h?void 0===n[l-1]?a(u,1):n[l-1]+a(u,1):o}s=n[f-1]}return void 0===s?"":s}))}},7854:function(t,e,r){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:function(t,e,r){var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:function(t){t.exports={}},842:function(t,e,r){var n=r(7854);t.exports=function(t,e){var r=n.console;r&&r.error&&(1==arguments.length?r.error(t):r.error(t,e))}},490:function(t,e,r){var n=r(5005);t.exports=n("document","documentElement")},4664:function(t,e,r){var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,r){var n=r(7854),o=r(1702),i=r(7293),a=r(4326),u=n.Object,c=o("".split);t.exports=i((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?c(t,""):u(t)}:u},2788:function(t,e,r){var n=r(1702),o=r(614),i=r(5465),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:function(t,e,r){var n,o,i,a=r(8536),u=r(7854),c=r(1702),s=r(111),f=r(8880),p=r(2597),l=r(5465),d=r(6200),h=r(3501),v="Object already initialized",y=u.TypeError,m=u.WeakMap;if(a||l.state){var g=l.state||(l.state=new m),x=c(g.get),b=c(g.has),w=c(g.set);n=function(t,e){if(b(g,t))throw new y(v);return e.facade=t,w(g,t,e),e},o=function(t){return x(g,t)||{}},i=function(t){return b(g,t)}}else{var j=d("state");h[j]=!0,n=function(t,e){if(p(t,j))throw new y(v);return e.facade=t,f(t,j,e),e},o=function(t){return p(t,j)?t[j]:{}},i=function(t){return p(t,j)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!s(e)||(r=o(e)).type!==t)throw y("Incompatible receiver, "+t+" required");return r}}}},7659:function(t,e,r){var n=r(5112),o=r(7497),i=n("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},3157:function(t,e,r){var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:function(t){t.exports=function(t){return"function"==typeof t}},4411:function(t,e,r){var n=r(1702),o=r(7293),i=r(614),a=r(648),u=r(5005),c=r(2788),s=function(){},f=[],p=u("Reflect","construct"),l=/^\s*(?:class|function)\b/,d=n(l.exec),h=!l.exec(s),v=function(t){if(!i(t))return!1;try{return p(s,f,t),!0}catch(t){return!1}},y=function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return h||!!d(l,c(t))}catch(t){return!0}};y.sham=!0,t.exports=!p||o((function(){var t;return v(v.call)||!v(Object)||!v((function(){t=!0}))||t}))?y:v},4705:function(t,e,r){var n=r(7293),o=r(614),i=/#|\.prototype\./,a=function(t,e){var r=c[u(t)];return r==f||r!=s&&(o(e)?n(e):!!e)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},111:function(t,e,r){var n=r(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:function(t){t.exports=!1},7850:function(t,e,r){var n=r(111),o=r(4326),i=r(5112)("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==o(t))}},2190:function(t,e,r){var n=r(7854),o=r(5005),i=r(614),a=r(7976),u=r(3307),c=n.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&a(e.prototype,c(t))}},408:function(t,e,r){var n=r(7854),o=r(9974),i=r(6916),a=r(9670),u=r(6330),c=r(7659),s=r(6244),f=r(7976),p=r(8554),l=r(1246),d=r(9212),h=n.TypeError,v=function(t,e){this.stopped=t,this.result=e},y=v.prototype;t.exports=function(t,e,r){var n,m,g,x,b,w,j,k=r&&r.that,E=!(!r||!r.AS_ENTRIES),_=!(!r||!r.IS_ITERATOR),O=!(!r||!r.INTERRUPTED),S=o(e,k),R=function(t){return n&&d(n,"normal",t),new v(!0,t)},T=function(t){return E?(a(t),O?S(t[0],t[1],R):S(t[0],t[1])):O?S(t,R):S(t)};if(_)n=t;else{if(!(m=l(t)))throw h(u(t)+" is not iterable");if(c(m)){for(g=0,x=s(t);x>g;g++)if((b=T(t[g]))&&f(y,b))return b;return new v(!1)}n=p(t,m)}for(w=n.next;!(j=i(w,n)).done;){try{b=T(j.value)}catch(t){d(n,"throw",t)}if("object"==typeof b&&b&&f(y,b))return b}return new v(!1)}},9212:function(t,e,r){var n=r(6916),o=r(9670),i=r(8173);t.exports=function(t,e,r){var a,u;o(t);try{if(!(a=i(t,"return"))){if("throw"===e)throw r;return r}a=n(a,t)}catch(t){u=!0,a=t}if("throw"===e)throw r;if(u)throw a;return o(a),r}},7497:function(t){t.exports={}},6244:function(t,e,r){var n=r(7466);t.exports=function(t){return n(t.length)}},6339:function(t,e,r){var n=r(7293),o=r(614),i=r(2597),a=r(9781),u=r(6530).CONFIGURABLE,c=r(2788),s=r(9909),f=s.enforce,p=s.get,l=Object.defineProperty,d=a&&!n((function(){return 8!==l((function(){}),"length",{value:8}).length})),h=String(String).split("String"),v=t.exports=function(t,e,r){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!i(t,"name")||u&&t.name!==e)&&l(t,"name",{value:e,configurable:!0}),d&&r&&i(r,"arity")&&t.length!==r.arity&&l(t,"length",{value:r.arity});try{r&&i(r,"constructor")&&r.constructor?a&&l(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=f(t);return i(n,"source")||(n.source=h.join("string"==typeof e?e:"")),t};Function.prototype.toString=v((function(){return o(this)&&p(this).source||c(this)}),"toString")},4758:function(t){var e=Math.ceil,r=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?r:e)(n)}},5948:function(t,e,r){var n,o,i,a,u,c,s,f,p=r(7854),l=r(9974),d=r(1236).f,h=r(261).set,v=r(6833),y=r(1528),m=r(1036),g=r(5268),x=p.MutationObserver||p.WebKitMutationObserver,b=p.document,w=p.process,j=p.Promise,k=d(p,"queueMicrotask"),E=k&&k.value;E||(n=function(){var t,e;for(g&&(t=w.domain)&&t.exit();o;){e=o.fn,o=o.next;try{e()}catch(t){throw o?a():i=void 0,t}}i=void 0,t&&t.enter()},v||g||m||!x||!b?!y&&j&&j.resolve?((s=j.resolve(void 0)).constructor=j,f=l(s.then,s),a=function(){f(n)}):g?a=function(){w.nextTick(n)}:(h=l(h,p),a=function(){h(n)}):(u=!0,c=b.createTextNode(""),new x(n).observe(c,{characterData:!0}),a=function(){c.data=u=!u})),t.exports=E||function(t){var e={fn:t,next:void 0};i&&(i.next=e),o||(o=e,a()),i=e}},133:function(t,e,r){var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:function(t,e,r){var n=r(7854),o=r(614),i=r(2788),a=n.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},8523:function(t,e,r){"use strict";var n=r(9662),o=function(t){var e,r;this.promise=new t((function(t,n){if(void 0!==e||void 0!==r)throw TypeError("Bad Promise constructor");e=t,r=n})),this.resolve=n(e),this.reject=n(r)};t.exports.f=function(t){return new o(t)}},30:function(t,e,r){var n,o=r(9670),i=r(6048),a=r(748),u=r(3501),c=r(490),s=r(317),f=r(6200)("IE_PROTO"),p=function(){},l=function(t){return"<script>"+t+"<\/script>"},d=function(t){t.write(l("")),t.close();var e=t.parentWindow.Object;return t=null,e},h=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}var t,e;h="undefined"!=typeof document?document.domain&&n?d(n):((e=s("iframe")).style.display="none",c.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(l("document.F=Object")),t.close(),t.F):d(n);for(var r=a.length;r--;)delete h.prototype[a[r]];return h()};u[f]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[f]=t):r=h(),void 0===e?r:i.f(r,e)}},6048:function(t,e,r){var n=r(9781),o=r(3353),i=r(3070),a=r(9670),u=r(5656),c=r(1956);e.f=n&&!o?Object.defineProperties:function(t,e){a(t);for(var r,n=u(e),o=c(e),s=o.length,f=0;s>f;)i.f(t,r=o[f++],n[r]);return t}},3070:function(t,e,r){var n=r(7854),o=r(9781),i=r(4664),a=r(3353),u=r(9670),c=r(4948),s=n.TypeError,f=Object.defineProperty,p=Object.getOwnPropertyDescriptor;e.f=o?a?function(t,e,r){if(u(t),e=c(e),u(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=p(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return f(t,e,r)}:f:function(t,e,r){if(u(t),e=c(e),u(r),i)try{return f(t,e,r)}catch(t){}if("get"in r||"set"in r)throw s("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:function(t,e,r){var n=r(9781),o=r(6916),i=r(5296),a=r(9114),u=r(5656),c=r(4948),s=r(2597),f=r(4664),p=Object.getOwnPropertyDescriptor;e.f=n?p:function(t,e){if(t=u(t),e=c(e),f)try{return p(t,e)}catch(t){}if(s(t,e))return a(!o(i.f,t,e),t[e])}},8006:function(t,e,r){var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},7976:function(t,e,r){var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:function(t,e,r){var n=r(1702),o=r(2597),i=r(5656),a=r(1318).indexOf,u=r(3501),c=n([].push);t.exports=function(t,e){var r,n=i(t),s=0,f=[];for(r in n)!o(u,r)&&o(n,r)&&c(f,r);for(;e.length>s;)o(n,r=e[s++])&&(~a(f,r)||c(f,r));return f}},1956:function(t,e,r){var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:function(t,e){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},7674:function(t,e,r){var n=r(1702),o=r(9670),i=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return o(r),i(n),e?t(r,n):r.__proto__=n,r}}():void 0)},288:function(t,e,r){"use strict";var n=r(1694),o=r(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2140:function(t,e,r){var n=r(7854),o=r(6916),i=r(614),a=r(111),u=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&i(r=t.toString)&&!a(n=o(r,t)))return n;if(i(r=t.valueOf)&&!a(n=o(r,t)))return n;if("string"!==e&&i(r=t.toString)&&!a(n=o(r,t)))return n;throw u("Can't convert object to primitive value")}},3887:function(t,e,r){var n=r(5005),o=r(1702),i=r(8006),a=r(5181),u=r(9670),c=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(u(t)),r=a.f;return r?c(e,r(t)):e}},2534:function(t){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},3702:function(t,e,r){var n=r(7854),o=r(2492),i=r(614),a=r(4705),u=r(2788),c=r(5112),s=r(7871),f=r(1913),p=r(7392),l=o&&o.prototype,d=c("species"),h=!1,v=i(n.PromiseRejectionEvent),y=a("Promise",(function(){var t=u(o),e=t!==String(o);if(!e&&66===p)return!0;if(f&&(!l.catch||!l.finally))return!0;if(p>=51&&/native code/.test(t))return!1;var r=new o((function(t){t(1)})),n=function(t){t((function(){}),(function(){}))};return(r.constructor={})[d]=n,!(h=r.then((function(){}))instanceof n)||!e&&s&&!v}));t.exports={CONSTRUCTOR:y,REJECTION_EVENT:v,SUBCLASSING:h}},2492:function(t,e,r){var n=r(7854);t.exports=n.Promise},9478:function(t,e,r){var n=r(9670),o=r(111),i=r(8523);t.exports=function(t,e){if(n(t),o(e)&&e.constructor===t)return e;var r=i.f(t);return(0,r.resolve)(e),r.promise}},612:function(t,e,r){var n=r(2492),o=r(7072),i=r(3702).CONSTRUCTOR;t.exports=i||!o((function(t){n.all(t).then(void 0,(function(){}))}))},8572:function(t){var e=function(){this.head=null,this.tail=null};e.prototype={add:function(t){var e={item:t,next:null};this.head?this.tail.next=e:this.head=e,this.tail=e},get:function(){var t=this.head;if(t)return this.head=t.next,this.tail===t&&(this.tail=null),t.item}},t.exports=e},7651:function(t,e,r){var n=r(7854),o=r(6916),i=r(9670),a=r(614),u=r(4326),c=r(2261),s=n.TypeError;t.exports=function(t,e){var r=t.exec;if(a(r)){var n=o(r,t,e);return null!==n&&i(n),n}if("RegExp"===u(t))return o(c,t,e);throw s("RegExp#exec called on incompatible receiver")}},2261:function(t,e,r){"use strict";var n,o,i=r(6916),a=r(1702),u=r(1340),c=r(7066),s=r(2999),f=r(2309),p=r(30),l=r(9909).get,d=r(9441),h=r(7168),v=f("native-string-replace",String.prototype.replace),y=RegExp.prototype.exec,m=y,g=a("".charAt),x=a("".indexOf),b=a("".replace),w=a("".slice),j=(o=/b*/g,i(y,n=/a/,"a"),i(y,o,"a"),0!==n.lastIndex||0!==o.lastIndex),k=s.BROKEN_CARET,E=void 0!==/()??/.exec("")[1];(j||E||k||d||h)&&(m=function(t){var e,r,n,o,a,s,f,d=this,h=l(d),_=u(t),O=h.raw;if(O)return O.lastIndex=d.lastIndex,e=i(m,O,_),d.lastIndex=O.lastIndex,e;var S=h.groups,R=k&&d.sticky,T=i(c,d),P=d.source,A=0,$=_;if(R&&(T=b(T,"y",""),-1===x(T,"g")&&(T+="g"),$=w(_,d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==g(_,d.lastIndex-1))&&(P="(?: "+P+")",$=" "+$,A++),r=new RegExp("^(?:"+P+")",T)),E&&(r=new RegExp("^"+P+"$(?!\\s)",T)),j&&(n=d.lastIndex),o=i(y,R?r:d,$),R?o?(o.input=w(o.input,A),o[0]=w(o[0],A),o.index=d.lastIndex,d.lastIndex+=o[0].length):d.lastIndex=0:j&&o&&(d.lastIndex=d.global?o.index+o[0].length:n),E&&o&&o.length>1&&i(v,o[0],r,(function(){for(a=1;a<arguments.length-2;a++)void 0===arguments[a]&&(o[a]=void 0)})),o&&S)for(o.groups=s=p(null),a=0;a<S.length;a++)s[(f=S[a])[0]]=o[f[1]];return o}),t.exports=m},7066:function(t,e,r){"use strict";var n=r(9670);t.exports=function(){var t=n(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2999:function(t,e,r){var n=r(7293),o=r(7854).RegExp,i=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a=i||n((function(){return!o("a","y").sticky})),u=i||n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:u,MISSED_STICKY:a,UNSUPPORTED_Y:i}},9441:function(t,e,r){var n=r(7293),o=r(7854).RegExp;t.exports=n((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},7168:function(t,e,r){var n=r(7293),o=r(7854).RegExp;t.exports=n((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},4488:function(t,e,r){var n=r(7854).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},6340:function(t,e,r){"use strict";var n=r(5005),o=r(3070),i=r(5112),a=r(9781),u=i("species");t.exports=function(t){var e=n(t),r=o.f;a&&e&&!e[u]&&r(e,u,{configurable:!0,get:function(){return this}})}},8003:function(t,e,r){var n=r(3070).f,o=r(2597),i=r(5112)("toStringTag");t.exports=function(t,e,r){t&&!r&&(t=t.prototype),t&&!o(t,i)&&n(t,i,{configurable:!0,value:e})}},6200:function(t,e,r){var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,e,r){var n=r(7854),o=r(3072),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:function(t,e,r){var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.22.7",mode:n?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.7/LICENSE",source:"https://github.com/zloirock/core-js"})},6707:function(t,e,r){var n=r(9670),o=r(9483),i=r(5112)("species");t.exports=function(t,e){var r,a=n(t).constructor;return void 0===a||null==(r=n(a)[i])?e:o(r)}},8710:function(t,e,r){var n=r(1702),o=r(9303),i=r(1340),a=r(4488),u=n("".charAt),c=n("".charCodeAt),s=n("".slice),f=function(t){return function(e,r){var n,f,p=i(a(e)),l=o(r),d=p.length;return l<0||l>=d?t?"":void 0:(n=c(p,l))<55296||n>56319||l+1===d||(f=c(p,l+1))<56320||f>57343?t?u(p,l):n:t?s(p,l,l+2):f-56320+(n-55296<<10)+65536}};t.exports={codeAt:f(!1),charAt:f(!0)}},6091:function(t,e,r){var n=r(6530).PROPER,o=r(7293),i=r(1361);t.exports=function(t){return o((function(){return!!i[t]()||"​᠎"!=="​᠎"[t]()||n&&i[t].name!==t}))}},3111:function(t,e,r){var n=r(1702),o=r(4488),i=r(1340),a=r(1361),u=n("".replace),c="["+a+"]",s=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),p=function(t){return function(e){var r=i(o(e));return 1&t&&(r=u(r,s,"")),2&t&&(r=u(r,f,"")),r}};t.exports={start:p(1),end:p(2),trim:p(3)}},261:function(t,e,r){var n,o,i,a,u=r(7854),c=r(2104),s=r(9974),f=r(614),p=r(2597),l=r(7293),d=r(490),h=r(206),v=r(317),y=r(8053),m=r(6833),g=r(5268),x=u.setImmediate,b=u.clearImmediate,w=u.process,j=u.Dispatch,k=u.Function,E=u.MessageChannel,_=u.String,O=0,S={};try{n=u.location}catch(t){}var R=function(t){if(p(S,t)){var e=S[t];delete S[t],e()}},T=function(t){return function(){R(t)}},P=function(t){R(t.data)},A=function(t){u.postMessage(_(t),n.protocol+"//"+n.host)};x&&b||(x=function(t){y(arguments.length,1);var e=f(t)?t:k(t),r=h(arguments,1);return S[++O]=function(){c(e,void 0,r)},o(O),O},b=function(t){delete S[t]},g?o=function(t){w.nextTick(T(t))}:j&&j.now?o=function(t){j.now(T(t))}:E&&!m?(a=(i=new E).port2,i.port1.onmessage=P,o=s(a.postMessage,a)):u.addEventListener&&f(u.postMessage)&&!u.importScripts&&n&&"file:"!==n.protocol&&!l(A)?(o=A,u.addEventListener("message",P,!1)):o="onreadystatechange"in v("script")?function(t){d.appendChild(v("script")).onreadystatechange=function(){d.removeChild(this),R(t)}}:function(t){setTimeout(T(t),0)}),t.exports={set:x,clear:b}},1400:function(t,e,r){var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:function(t,e,r){var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:function(t,e,r){var n=r(4758);t.exports=function(t){var e=+t;return e!=e||0===e?0:n(e)}},7466:function(t,e,r){var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:function(t,e,r){var n=r(7854),o=r(4488),i=n.Object;t.exports=function(t){return i(o(t))}},7593:function(t,e,r){var n=r(7854),o=r(6916),i=r(111),a=r(2190),u=r(8173),c=r(2140),s=r(5112),f=n.TypeError,p=s("toPrimitive");t.exports=function(t,e){if(!i(t)||a(t))return t;var r,n=u(t,p);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!i(r)||a(r))return r;throw f("Can't convert object to primitive value")}return void 0===e&&(e="number"),c(t,e)}},4948:function(t,e,r){var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:function(t,e,r){var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:function(t,e,r){var n=r(7854),o=r(648),i=n.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t,e,r){var n=r(7854).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:function(t,e,r){var n=r(1702),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:function(t,e,r){var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,r){var n=r(9781),o=r(7293);t.exports=n&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t,e,r){var n=r(7854).TypeError;t.exports=function(t,e){if(t<e)throw n("Not enough arguments");return t}},5112:function(t,e,r){var n=r(7854),o=r(2309),i=r(2597),a=r(9711),u=r(133),c=r(3307),s=o("wks"),f=n.Symbol,p=f&&f.for,l=c?f:f&&f.withoutSetter||a;t.exports=function(t){if(!i(s,t)||!u&&"string"!=typeof s[t]){var e="Symbol."+t;u&&i(f,t)?s[t]=f[t]:s[t]=c&&p?p(e):l(e)}return s[t]}},1361:function(t){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},7327:function(t,e,r){"use strict";var n=r(2109),o=r(2092).filter;n({target:"Array",proto:!0,forced:!r(1194)("filter")},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},9826:function(t,e,r){"use strict";var n=r(2109),o=r(2092).find,i=r(1223),a="find",u=!0;a in[]&&Array(1).find((function(){u=!1})),n({target:"Array",proto:!0,forced:u},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(a)},1539:function(t,e,r){var n=r(1694),o=r(8052),i=r(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},821:function(t,e,r){"use strict";var n=r(2109),o=r(6916),i=r(9662),a=r(8523),u=r(2534),c=r(408);n({target:"Promise",stat:!0,forced:r(612)},{all:function(t){var e=this,r=a.f(e),n=r.resolve,s=r.reject,f=u((function(){var r=i(e.resolve),a=[],u=0,f=1;c(t,(function(t){var i=u++,c=!1;f++,o(r,e,t).then((function(t){c||(c=!0,a[i]=t,--f||n(a))}),s)})),--f||n(a)}));return f.error&&s(f.value),r.promise}})},4164:function(t,e,r){"use strict";var n=r(2109),o=r(1913),i=r(3702).CONSTRUCTOR,a=r(2492),u=r(5005),c=r(614),s=r(8052),f=a&&a.prototype;if(n({target:"Promise",proto:!0,forced:i,real:!0},{catch:function(t){return this.then(void 0,t)}}),!o&&c(a)){var p=u("Promise").prototype.catch;f.catch!==p&&s(f,"catch",p,{unsafe:!0})}},3401:function(t,e,r){"use strict";var n,o,i,a=r(2109),u=r(1913),c=r(5268),s=r(7854),f=r(6916),p=r(8052),l=r(7674),d=r(8003),h=r(6340),v=r(9662),y=r(614),m=r(111),g=r(5787),x=r(6707),b=r(261).set,w=r(5948),j=r(842),k=r(2534),E=r(8572),_=r(9909),O=r(2492),S=r(3702),R=r(8523),T="Promise",P=S.CONSTRUCTOR,A=S.REJECTION_EVENT,$=S.SUBCLASSING,C=_.getterFor(T),I=_.set,L=O&&O.prototype,D=O,U=L,N=s.TypeError,F=s.document,B=s.process,M=R.f,q=M,G=!!(F&&F.createEvent&&s.dispatchEvent),z="unhandledrejection",K=function(t){var e;return!(!m(t)||!y(e=t.then))&&e},W=function(t,e){var r,n,o,i=e.value,a=1==e.state,u=a?t.ok:t.fail,c=t.resolve,s=t.reject,p=t.domain;try{u?(a||(2===e.rejection&&X(e),e.rejection=1),!0===u?r=i:(p&&p.enter(),r=u(i),p&&(p.exit(),o=!0)),r===t.promise?s(N("Promise-chain cycle")):(n=K(r))?f(n,r,c,s):c(r)):s(i)}catch(t){p&&!o&&p.exit(),s(t)}},Y=function(t,e){t.notified||(t.notified=!0,w((function(){for(var r,n=t.reactions;r=n.get();)W(r,t);t.notified=!1,e&&!t.rejection&&Q(t)})))},V=function(t,e,r){var n,o;G?((n=F.createEvent("Event")).promise=e,n.reason=r,n.initEvent(t,!1,!0),s.dispatchEvent(n)):n={promise:e,reason:r},!A&&(o=s["on"+t])?o(n):t===z&&j("Unhandled promise rejection",r)},Q=function(t){f(b,s,(function(){var e,r=t.facade,n=t.value;if(J(t)&&(e=k((function(){c?B.emit("unhandledRejection",n,r):V(z,r,n)})),t.rejection=c||J(t)?2:1,e.error))throw e.value}))},J=function(t){return 1!==t.rejection&&!t.parent},X=function(t){f(b,s,(function(){var e=t.facade;c?B.emit("rejectionHandled",e):V("rejectionhandled",e,t.value)}))},H=function(t,e,r){return function(n){t(e,n,r)}},Z=function(t,e,r){t.done||(t.done=!0,r&&(t=r),t.value=e,t.state=2,Y(t,!0))},tt=function(t,e,r){if(!t.done){t.done=!0,r&&(t=r);try{if(t.facade===e)throw N("Promise can't be resolved itself");var n=K(e);n?w((function(){var r={done:!1};try{f(n,e,H(tt,r,t),H(Z,r,t))}catch(e){Z(r,e,t)}})):(t.value=e,t.state=1,Y(t,!1))}catch(e){Z({done:!1},e,t)}}};if(P&&(U=(D=function(t){g(this,U),v(t),f(n,this);var e=C(this);try{t(H(tt,e),H(Z,e))}catch(t){Z(e,t)}}).prototype,(n=function(t){I(this,{type:T,done:!1,notified:!1,parent:!1,reactions:new E,rejection:!1,state:0,value:void 0})}).prototype=p(U,"then",(function(t,e){var r=C(this),n=M(x(this,D));return r.parent=!0,n.ok=!y(t)||t,n.fail=y(e)&&e,n.domain=c?B.domain:void 0,0==r.state?r.reactions.add(n):w((function(){W(n,r)})),n.promise})),o=function(){var t=new n,e=C(t);this.promise=t,this.resolve=H(tt,e),this.reject=H(Z,e)},R.f=M=function(t){return t===D||void 0===t?new o(t):q(t)},!u&&y(O)&&L!==Object.prototype)){i=L.then,$||p(L,"then",(function(t,e){var r=this;return new D((function(t,e){f(i,r,t,e)})).then(t,e)}),{unsafe:!0});try{delete L.constructor}catch(t){}l&&l(L,U)}a({global:!0,constructor:!0,wrap:!0,forced:P},{Promise:D}),d(D,T,!1,!0),h(T)},8674:function(t,e,r){r(3401),r(821),r(4164),r(6027),r(683),r(6294)},6027:function(t,e,r){"use strict";var n=r(2109),o=r(6916),i=r(9662),a=r(8523),u=r(2534),c=r(408);n({target:"Promise",stat:!0,forced:r(612)},{race:function(t){var e=this,r=a.f(e),n=r.reject,s=u((function(){var a=i(e.resolve);c(t,(function(t){o(a,e,t).then(r.resolve,n)}))}));return s.error&&n(s.value),r.promise}})},683:function(t,e,r){"use strict";var n=r(2109),o=r(6916),i=r(8523);n({target:"Promise",stat:!0,forced:r(3702).CONSTRUCTOR},{reject:function(t){var e=i.f(this);return o(e.reject,void 0,t),e.promise}})},6294:function(t,e,r){"use strict";var n=r(2109),o=r(5005),i=r(1913),a=r(2492),u=r(3702).CONSTRUCTOR,c=r(9478),s=o("Promise"),f=i&&!u;n({target:"Promise",stat:!0,forced:i||u},{resolve:function(t){return c(f&&this===s?a:this,t)}})},2419:function(t,e,r){var n=r(2109),o=r(5005),i=r(2104),a=r(7065),u=r(9483),c=r(9670),s=r(111),f=r(30),p=r(7293),l=o("Reflect","construct"),d=Object.prototype,h=[].push,v=p((function(){function t(){}return!(l((function(){}),[],t)instanceof t)})),y=!p((function(){l((function(){}))})),m=v||y;n({target:"Reflect",stat:!0,forced:m,sham:m},{construct:function(t,e){u(t),c(e);var r=arguments.length<3?t:u(arguments[2]);if(y&&!v)return l(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return i(h,n,e),new(i(a,t,n))}var o=r.prototype,p=f(s(o)?o:d),m=i(t,p,e);return s(m)?m:p}})},1299:function(t,e,r){var n=r(2109),o=r(7854),i=r(8003);n({global:!0},{Reflect:{}}),i(o.Reflect,"Reflect",!0)},4916:function(t,e,r){"use strict";var n=r(2109),o=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},7601:function(t,e,r){"use strict";r(4916);var n,o,i=r(2109),a=r(7854),u=r(6916),c=r(1702),s=r(614),f=r(111),p=(n=!1,(o=/[ac]/).exec=function(){return n=!0,/./.exec.apply(this,arguments)},!0===o.test("abc")&&n),l=a.Error,d=c(/./.test);i({target:"RegExp",proto:!0,forced:!p},{test:function(t){var e=this.exec;if(!s(e))return d(this,t);var r=u(e,this,t);if(null!==r&&!f(r))throw new l("RegExp exec method returned something other than an Object or null");return!!r}})},4723:function(t,e,r){"use strict";var n=r(6916),o=r(7007),i=r(9670),a=r(7466),u=r(1340),c=r(4488),s=r(8173),f=r(1530),p=r(7651);o("match",(function(t,e,r){return[function(e){var r=c(this),o=null==e?void 0:s(e,t);return o?n(o,e,r):new RegExp(e)[t](u(r))},function(t){var n=i(this),o=u(t),c=r(e,n,o);if(c.done)return c.value;if(!n.global)return p(n,o);var s=n.unicode;n.lastIndex=0;for(var l,d=[],h=0;null!==(l=p(n,o));){var v=u(l[0]);d[h]=v,""===v&&(n.lastIndex=f(o,a(n.lastIndex),s)),h++}return 0===h?null:d}]}))},5306:function(t,e,r){"use strict";var n=r(2104),o=r(6916),i=r(1702),a=r(7007),u=r(7293),c=r(9670),s=r(614),f=r(9303),p=r(7466),l=r(1340),d=r(4488),h=r(1530),v=r(8173),y=r(647),m=r(7651),g=r(5112)("replace"),x=Math.max,b=Math.min,w=i([].concat),j=i([].push),k=i("".indexOf),E=i("".slice),_="$0"==="a".replace(/./,"$0"),O=!!/./[g]&&""===/./[g]("a","$0");a("replace",(function(t,e,r){var i=O?"$":"$0";return[function(t,r){var n=d(this),i=null==t?void 0:v(t,g);return i?o(i,t,n,r):o(e,l(n),t,r)},function(t,o){var a=c(this),u=l(t);if("string"==typeof o&&-1===k(o,i)&&-1===k(o,"$<")){var d=r(e,a,u,o);if(d.done)return d.value}var v=s(o);v||(o=l(o));var g=a.global;if(g){var _=a.unicode;a.lastIndex=0}for(var O=[];;){var S=m(a,u);if(null===S)break;if(j(O,S),!g)break;""===l(S[0])&&(a.lastIndex=h(u,p(a.lastIndex),_))}for(var R,T="",P=0,A=0;A<O.length;A++){for(var $=l((S=O[A])[0]),C=x(b(f(S.index),u.length),0),I=[],L=1;L<S.length;L++)j(I,void 0===(R=S[L])?R:String(R));var D=S.groups;if(v){var U=w([$],I,C,u);void 0!==D&&j(U,D);var N=l(n(o,void 0,U))}else N=y($,u,C,I,D,o);C>=P&&(T+=E(u,P,C)+N,P=C+$.length)}return T+E(u,P)}]}),!!u((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!_||O)},3123:function(t,e,r){"use strict";var n=r(2104),o=r(6916),i=r(1702),a=r(7007),u=r(7850),c=r(9670),s=r(4488),f=r(6707),p=r(1530),l=r(7466),d=r(1340),h=r(8173),v=r(1589),y=r(7651),m=r(2261),g=r(2999),x=r(7293),b=g.UNSUPPORTED_Y,w=4294967295,j=Math.min,k=[].push,E=i(/./.exec),_=i(k),O=i("".slice);a("split",(function(t,e,r){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var i=d(s(this)),a=void 0===r?w:r>>>0;if(0===a)return[];if(void 0===t)return[i];if(!u(t))return o(e,i,t,a);for(var c,f,p,l=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),y=0,g=new RegExp(t.source,h+"g");(c=o(m,g,i))&&!((f=g.lastIndex)>y&&(_(l,O(i,y,c.index)),c.length>1&&c.index<i.length&&n(k,l,v(c,1)),p=c[0].length,y=f,l.length>=a));)g.lastIndex===c.index&&g.lastIndex++;return y===i.length?!p&&E(g,"")||_(l,""):_(l,O(i,y)),l.length>a?v(l,0,a):l}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:o(e,this,t,r)}:e,[function(e,r){var n=s(this),a=null==e?void 0:h(e,t);return a?o(a,e,n,r):o(i,d(n),e,r)},function(t,n){var o=c(this),a=d(t),u=r(i,o,a,n,i!==e);if(u.done)return u.value;var s=f(o,RegExp),h=o.unicode,v=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(b?"g":"y"),m=new s(b?"^(?:"+o.source+")":o,v),g=void 0===n?w:n>>>0;if(0===g)return[];if(0===a.length)return null===y(m,a)?[a]:[];for(var x=0,k=0,E=[];k<a.length;){m.lastIndex=b?0:k;var S,R=y(m,b?O(a,k):a);if(null===R||(S=j(l(m.lastIndex+(b?k:0)),a.length))===x)k=p(a,k,h);else{if(_(E,O(a,x,k)),E.length===g)return E;for(var T=1;T<=R.length-1;T++)if(_(E,R[T]),E.length===g)return E;k=x=S}}return _(E,O(a,x)),E}]}),!!x((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),b)},3210:function(t,e,r){"use strict";var n=r(2109),o=r(3111).trim;n({target:"String",proto:!0,forced:r(6091)("trim")},{trim:function(){return o(this)}})}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},function(){"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function e(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void r(t)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var r=this,n=arguments;return new Promise((function(o,i){var a=t.apply(r,n);function u(t){e(a,o,i,u,c,"next",t)}function c(t){e(a,o,i,u,c,"throw",t)}u(void 0)}))}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var i=r(7757),a=r.n(i);function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,r){return e&&c(t.prototype,e),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function p(t,e){return(p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function l(t,e){if(e&&("object"===o(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function v(t,e,r){return(v=h()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);var o=new(Function.bind.apply(t,n));return r&&p(o,r.prototype),o}).apply(null,arguments)}function y(t){var e="function"==typeof Map?new Map:void 0;return(y=function(t){if(null===t||(r=t,-1===Function.toString.call(r).indexOf("[native code]")))return t;var r;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,n)}function n(){return v(t,arguments,d(this).constructor)}return n.prototype=Object.create(t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),p(n,t)})(t)}r(9826),r(1539),r(7327),r(4916),r(7601),r(5306),r(3123),r(4723),r(3210),r(8674),r(1299),r(2419);var m,g,x,b=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(o,t);var e,r,n=(e=o,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,n=d(e);if(r){var o=d(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return l(this,t)});function o(t,e){var r;return u(this,o),(r=n.call(this,t)).response=e,r}return s(o)}(y(Error)),w=function(){function t(e){u(this,t),f(this,"host",void 0),f(this,"authData",null),f(this,"singleUseKeyForRedirect",null),f(this,"timeout",8e3),f(this,"number_of_repetitions",3),this.host=e}var e,r,o,i,c;return s(t,[{key:"request",value:(c=n(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.url=this.host,"_query"in e&&(this.url+="?"+e._query,delete e._query),this.authData&&(e.username=this.authData.username,e.auth=this.authData.auth),this.data=e,t.abrupt("return",this._debugLogDecorator(this._catchBillingError(this._doRequest())));case 5:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"setUsernameAuth",value:function(t,e){this.authData={username:t,auth:e}}},{key:"setSingleUseKeyForRedirect",value:function(t){this.singleUseKeyForRedirect=t}},{key:"getRedirectUrl",value:function(t){return this.host+"?func=auth&username="+encodeURIComponent(this.authData.username)+"&key="+encodeURIComponent(this.singleUseKeyForRedirect)+"&redirect="+encodeURIComponent(t)}},{key:"_debugLogDecorator",value:(i=n(a().mark((function t(e){var r=this;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.DEBUG){t.next=2;break}return t.abrupt("return",new Promise(function(){var t=n(a().mark((function t(n,o){var i;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e;case 3:i=t.sent,console.log("BillingApi: SUCCESS","Request data: ",r.data,"Response: ",i),n(i),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("BillingApi: ERROR","Request data: ",r.data,"Response: ",t.t0),o(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e,r){return t.apply(this,arguments)}}()));case 2:return t.abrupt("return",e);case 3:case"end":return t.stop()}}),t)}))),function(t){return i.apply(this,arguments)})},{key:"_catchBillingError",value:(o=n(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,r){e.then((function(e){if(e.doc.error){var n=void 0;e.doc.error.msg.$&&(n=e.doc.error.msg.$),r(new b(n),e)}else t(e)}),(function(t){r(t)}))})));case 1:case"end":return t.stop()}}),t)}))),function(t){return o.apply(this,arguments)})},{key:"_doRequest",value:(r=n(a().mark((function t(){var e,r=this;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(){var t=n(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",jQuery.ajax({url:r.url,data:r.data,timeout:r.timeout,crossDomain:!0,dataType:"jsonp"}));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.abrupt("return",this._repeatOnReject(e,this.number_of_repetitions));case 2:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"_repeatOnReject",value:(e=n(a().mark((function t(e,r){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e();case 3:return t.abrupt("return",t.sent);case 6:if(t.prev=6,t.t0=t.catch(0),1!==r){t.next=14;break}return t.next=11,this._repeatOnReject(e,r-1);case 11:return t.abrupt("return",t.sent);case 14:throw t.t0;case 15:case"end":return t.stop()}}),t,this,[[0,6]])}))),function(t,r){return e.apply(this,arguments)})}]),t}(),j=function(){function t(e,r){u(this,t),f(this,"billingApi",void 0),f(this,"_defaults",void 0),this.billingApi=e,this._defaults=r}var e,r,o,i,c,p,l,d,h,v,y,m,g,x;return s(t,[{key:"sendPromocode",value:(x=n(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=4;break}return t.next=3,this._request(this._applyDefaults({func:"basket",promocode:e,clicked_button:"setpromocode"}),!0);case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return x.apply(this,arguments)})},{key:"orderBackup",value:(g=n(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,this._request(this._applyDefaults({_query:e,func:"storage.order.param",datacenter:6}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t,this)}))),function(t){return g.apply(this,arguments)})},{key:"orderDedic",value:(m=n(a().mark((function t(e,r){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._request(this._applyDefaults({_query:e,func:"dedic.order.param",datacenter:r||6}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t,e){return m.apply(this,arguments)})},{key:"orderAnything",value:(y=n(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._request(this._applyDefaults({licence_agreement:"on",_query:e}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return y.apply(this,arguments)})},{key:"doRegistration",value:(v=n(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.func="register",e.sok="ok",e.conditions_agree="on",t.next=5,this._request(this._applyDefaults(e));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)}))),function(t){return v.apply(this,arguments)})},{key:"doLogin",value:(h=n(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.func="auth",t.next=3,this._request(this._applyDefaults(e));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t){return h.apply(this,arguments)})},{key:"check2faCode",value:(d=n(a().mark((function t(e,r){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n={func:"totp.confirm",qrcode:e,auth:r},t.next=3,this._request(this._applyDefaults(n));case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t,this)}))),function(t,e){return d.apply(this,arguments)})},{key:"setNewSessionKey",value:(l=n(a().mark((function t(e,r){var n,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="secretSessionKey"+Math.random(),this.billingApi.setSingleUseKeyForRedirect(n),delete(o=this._applyDefaults({username:e,auth:r,key:n,func:"session.newkey"})).sok,t.next=6,this._request(o);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)}))),function(t,e){return l.apply(this,arguments)})},{key:"applyBasket",value:(p=n(a().mark((function t(){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._hasBasket();case 2:if(t.sent){t.next=5;break}return t.abrupt("return",[!1,null]);case 5:return t.next=7,this._buyBasket();case 7:if(e=t.sent,null===(r=e.doc.ok.$.match(/billorder=(\d+)/))||!(1 in r)){t.next=11;break}return t.abrupt("return",[!0,r[1]]);case 11:case"end":return t.stop()}}),t,this)}))),function(){return p.apply(this,arguments)})},{key:"checkCaptchaOn",value:(c=n(a().mark((function t(e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=jQuery.Deferred(),this._request({func:e?"register":"logon",out:"json",project:this._defaults.project}).then((function(t){t&&t.doc&&t.doc.recaptcha_field?r.resolve(!0):r.resolve(!1)}),(function(){r.resolve(!0)})),t.abrupt("return",r.promise());case 3:case"end":return t.stop()}}),t,this)}))),function(t){return c.apply(this,arguments)})},{key:"redirectToBilling",value:function(t){var e=this.billingApi.getRedirectUrl(t),r=!0;window.DEBUG&&(r=confirm("Перейти в биллинг?"),console.log("DEBUG: redirect",e)),r&&(window.top.location=e)}},{key:"saveAuth",value:function(t,e){this.billingApi.setUsernameAuth(t,e)}},{key:"_request",value:(i=n(a().mark((function t(e,r){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.billingApi.request(e);case 3:return t.abrupt("return",t.sent);case 6:if(t.prev=6,t.t0=t.catch(0),!(r&&t.t0 instanceof b)){t.next=12;break}return t.abrupt("return",t.t0);case 12:throw t.t0;case 13:case"end":return t.stop()}}),t,this,[[0,6]])}))),function(t,e){return i.apply(this,arguments)})},{key:"_applyDefaults",value:function(t){for(var e in this._defaults)e in t||(t[e]=this._defaults[e]);for(var r in t)t.hasOwnProperty(r)&&null===t[r]&&delete t[r];return t}},{key:"_hasBasket",value:(o=n(a().mark((function t(){var e,r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this._applyDefaults({func:"basket",sok:null}),t.prev=1,t.next=4,this._request(e);case 4:if(!((r=t.sent).doc.list&&r.doc.list[0]&&r.doc.list[0].elem&&r.doc.list[0].elem[r.doc.list[0].elem.length-1]&&r.doc.list[0].elem[r.doc.list[0].elem.length-1].price&&r.doc.list[0].elem[r.doc.list[0].elem.length-1].price.$)){t.next=8;break}return n=r.doc.list[0].elem[r.doc.list[0].elem.length-1].price.$.match(/(\d+)/),t.abrupt("return",null!==n&&1 in n&&n[1]>0);case 8:t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",!1);case 13:case"end":return t.stop()}}),t,this,[[1,10]])}))),function(){return o.apply(this,arguments)})},{key:"_buyBasket",value:(r=n(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._request(this._applyDefaults({func:"basket",clicked_button:"bay"}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"orderAcronis",value:(e=n(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this._request(this._applyDefaults({licence_agreement:"on",func:"backupservice.order.param"}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})}]),t}();window.DEBUG=!1,m=jQuery,g=!0,x=!0,m.fn.extend({authModal:function(e){var r=parseInt("object"===o(e)&&"datacenter"in e&&e.datacenter),i="object"===o(e)&&"product-type"in e?e["product-type"]:void 0,u="object"===o(e)&&"project"in e&&e.project,c="my.ispserver"+("ru"===LANG?".ru":".com");"Выделенный сервер"===i&&7===r&&(c="my.ispserver.com",u=5);var s,f,p,l,d,h,v,y=function(t,e,r){var n=new w("https://"+t+"/billmgr");return new j(n,{project:r,lang:e,out:"json",sok:"ok"})}(c,LANG,u),k={lang:LANG,project:u,validationError:!1,orderURL:e.order,redirect:"object"===o(e)&&"redirect"in e&&e.redirect,action:"object"===o(e)&&"action"in e&&e.action,billAction:"object"===o(e)&&"bill-action"in e?e["bill-action"]:"payment",productType:i,productName:"object"===o(e)&&"product-name"in e?e["product-name"]:void 0,periodOrder:"object"===o(e)&&"period-order"in e?e["period-order"]:void 0,promocode:null},E={init:function(){k.defaultErrorText="ru"===k.lang?"Неизвестная ошибка, повторите запрос":"You've entered an incorrect email address",k.modalType=s.data("type"),k.$modalSwitcher=s.find(".js-auth-modal-switch-form"),k.$message=s.find(".js-auth-modal-message"),k.$form=s.find(".js-auth-modal-form"),k.$inputs=k.$form.find(".js-auth-modal-form-input, #g-recaptcha-response"),k.$eye=k.$form.find(".js-auth-modal-form-eye"),k.$errors=k.$form.find(".js-auth-modal-error"),k.$submitButton=k.$form.find(".js-auth-modal-form-submit"),k.$inputs.filter('[data-type="country"]').change((function(){"233"==m(this).val()?m(".state-group-233").show():m(".state-group-233").hide(),"108"==m(this).val()?m(".state-group-108").show():m(".state-group-108").hide(),"14"==m(this).val()?m(".state-group-14").show():m(".state-group-14").hide()}));var t="register"===k.modalType||"registration"===k.modalType;y.checkCaptchaOn(t).then((function(e){t?x=e:g=e,m(".js-g-recaptcha-wrapper").toggle(e)}),(function(t){console.log(t)})),E.clearForm(!0),s.modal("show"),s.on("shown.bs.modal",(function(){k.$inputs.first().focus(),"registration"===k.modalType&&E.initPhoneNumberInput()})),E.initModalEvents(),E.initPrivacyPolicyInput()},initModalEvents:function(){k.$submitButton.on("click",function(){var t=n(a().mark((function t(e){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),k.$submitButton.hasClass("ajax")){t.next=11;break}if(k.$submitButton.addClass("ajax").html('<i class="fa fa-cog fa-spin"></i>'),E.clearForm(),E.formValidation(),k.validationError){t.next=10;break}return t.next=8,n(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.doAuth(k.modalType);case 3:return t.next=5,E.processPayload();case 5:e=t.sent,y.redirectToBilling(e),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),E.finishFormWithError(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))();case 8:t.next=11;break;case 10:E.clearAjaxState();case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),k.$eye.on("click",(function(){var t=k.$inputs.filter('[data-type="password"]');k.$eye.toggleClass("active"),k.$eye.hasClass("active")?t.attr("type","text"):t.attr("type","password")})),k.$modalSwitcher.on("click",(function(t){t.preventDefault();var r=m(k.$modalSwitcher.attr("href"));r.length&&(s.modal("hide"),s.on("hidden.bs.modal",(function(t){r.authModal(e),s.unbind("hidden.bs.modal")})))}))},initPrivacyPolicyInput:function(){k.$form.find(".js-auth-modal-form-input--privacy-policy").change((function(){var t=m(this).is(":checked");k.$submitButton.attr("disabled",!t)}))},initPhoneNumberInput:function(){var t=m('input[data-type="phone"]');t.once("init-phone-number-input-once").each((function(){var e=/[^0-9()+ -]/gm;t.keypress((function(t){var r=String.fromCharCode(t.which);if(e.test(r))return t.preventDefault(),!1})),t.on("input",(function(){m(this).val(m(this).val().replace(e,""))})),t.intlTelInput({preferredCountries:["ru","by","kz","ua"],separateDialCode:!0,initialCountry:"ru"===k.lang?"RU":"GB",utilsScript:"/modules/custom/customlib/libraries/intl-tel-input/js/utils.js"})}))},clearForm:function(t){k.$inputs.removeClass("error"),k.$errors.removeClass("error active").text(""),k.$message.text(""),!0===t&&k.$inputs.val("")},formValidation:function(){m("#g-recaptcha-response").data("type","g-recaptcha-response"),k.validationError=!1,k.$inputs.each((function(t,e){var r=m(e),n=r.data("type"),o=r.val();if("checkbox"===r.attr("type")&&(o=r.is(":checked")),o)switch(n){case"email":null==/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.exec(o)&&E.setError(r,n,"ru"===k.lang?"Введён не корректный e-mail адрес":"You've entered an incorrect email address");break;case"phone":var i=r.intlTelInput("getNumber");r.intlTelInput("isValidNumber")||E.setError(r,n,("ru"===k.lang?"Введён некорректный номер телефона":"Invalid phone number")+"("+i+")")}else switch(n){case"login":case"name":case"password":case"email":case"country":case"privacy-policy":o||E.setError(r,n,"ru"===k.lang?"Поле не должно быть пустым":"The field should not be empty");break;case"g-recaptcha-response":("register"===k.modalType||"registration"===k.modalType?x:g)&&!o&&E.setError(r,n,"ru"===k.lang?"Не пройдена проверка на робота":"Recaptcha does not verified")}}))},setError:function(t,e,r){k.validationError=!0,t.addClass("error"),k.$errors.filter('[data-type="'+e+'"]').addClass("active").text(r)},clearAjaxState:function(){k.$submitButton.removeClass("ajax").html(k.$submitButton.data("text"))},doAuth:(v=n(a().mark((function t(e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=null,"registration"!==e){t.next=5;break}return t.next=4,E.doRegistration();case 4:r=t.sent;case 5:return t.next=7,E.doLogin(r);case 7:return n=t.sent,t.next=10,y.setNewSessionKey(E.getUsername(),n);case 10:if("func=totp.confirm"!==t.sent.doc.ok.$){t.next=17;break}return t.next=14,E.do2fa(y,n);case 14:return n=t.sent,t.next=17,y.setNewSessionKey(E.getUsername(),n);case 17:y.saveAuth(E.getUsername(),n),"registration"===e?E.sendAnalytics("Авторизация","Регистрация"):E.sendAnalytics("Авторизация","Авторизация");case 19:case"end":return t.stop()}}),t)}))),function(t){return v.apply(this,arguments)}),doLogin:(h=n(a().mark((function t(e){var r,n,o;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=E.getUsername(),n={func:"auth",username:r},e?n.key=e:n.password=k.$inputs.filter('[data-type="password"]').val(),g&&(n.force_recaptcha="on",n["g-recaptcha-response"]=m(".g-recaptcha-response",k.$form).val()),t.next=6,y.doLogin(n);case 6:return o=t.sent,t.abrupt("return",o.doc.auth.$);case 8:case"end":return t.stop()}}),t)}))),function(t){return h.apply(this,arguments)}),doRegistration:(d=n(a().mark((function t(){var e,r,n,o,i,u;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=function(t){return t.replace("?","").split("&").reduce((function(t,e){var r=e.split("=");return t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]),t}),{})},r={email:k.$inputs.filter('[data-type="email"]').val(),passwd:k.$inputs.filter('[data-type="password"]').val(),realname:k.$inputs.filter('[data-type="name"]').val(),country:k.$inputs.filter('[data-type="country"]').val(),phone:k.$inputs.filter('[data-type="phone"]').intlTelInput("getNumber"),partner:void 0!==Cookies.get("referral_id")?Cookies.get("referral_id"):"",sesid:void 0!==Cookies.get("referral_sesid")?Cookies.get("referral_sesid"):""},(n=k.$inputs.filter('[data-type="privacy-policy"]')).length&&(r.field_8=n.is(":checked")?"on":"off"),(o=k.$inputs.filter('[data-type="mailing"]')).length&&(r.field_9=o.is(":checked")?"on":"off"),"233"==r.country&&(r.state=k.$inputs.filter('[data-type="state"]').val()),x&&(r.force_recaptcha="on",r["g-recaptcha-response"]=m(".g-recaptcha-response",k.$form).val()),t.next=10,y.doRegistration(r);case 10:return i=t.sent,u=e(i.doc.ok.$),t.abrupt("return",u.key);case 13:case"end":return t.stop()}}),t)}))),function(){return d.apply(this,arguments)}),getUsername:function(){var t=k.$inputs.filter('[data-type="login"]').val();return void 0===t&&(t=k.$inputs.filter('[data-type="email"]').val()),t},processPayload:(l=n(a().mark((function t(){var e,r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e="startform=basket","order"!==k.action||!k.orderURL){t.next=16;break}return t.next=4,y.orderAnything(k.orderURL);case 4:return r=t.sent,E.sendAnalytics(k.productType,k.productName,"Второй шаг"+(void 0!==k.periodOrder?" - "+k.periodOrder:"")),E.authlogAddWithProduct(r),n=E.getPromocode(k.orderURL),t.next=10,y.sendPromocode(n);case 10:if("cart"===k.billAction){t.next=14;break}return t.next=13,E.applyBillingCart();case 13:e=t.sent;case 14:t.next=18;break;case 16:E.authlogAddWithoutProducts(),k.redirect&&(e=k.redirect);case 18:return t.abrupt("return",e);case 19:case"end":return t.stop()}}),t)}))),function(){return l.apply(this,arguments)}),authlogAddWithProduct:function(t){var e=E.getUsername();"authorization"!==k.modalType&&"registration"!==k.modalType||void 0===t||void 0===t.doc||void 0===t.doc.tparams||void 0===t.doc.tparams.pricelist||void 0===t.doc.tparams.pricelist.$||void 0===t.doc.tparams.func||void 0===t.doc.tparams.func.$||m.post("/admin/authlog/add",{login:e,product_type:t.doc.tparams.func.$,product_id:t.doc.tparams.pricelist.$,action:k.modalType,project:9==k.project?".ru":".com"})},authlogAddWithoutProducts:function(){var t=E.getUsername();"authorization"!==k.modalType&&"registration"!==k.modalType||m.post("/admin/authlog/add",{login:t,product_type:void 0!==k.productType?k.productType:"",product_id:0,action:k.modalType,project:9==k.project?".ru":".com"})},applyBillingCart:(p=n(a().mark((function e(){var r,n,o,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.applyBasket();case 2:return r=e.sent,u=2,n=function(t){if(Array.isArray(t))return t}(a=r)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(t){u=!0,o=t}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}}(a,u)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(a,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=n[0],i=n[1],e.abrupt("return",o?"startform=payment.add&billorder=".concat(i):"startform=basket");case 7:case"end":return e.stop()}var a,u}),e)}))),function(){return p.apply(this,arguments)}),showAnswer:function(t,e){0!=e&&E.clearAjaxState(),k.$message.html(t).slideDown()},finishFormWithError:function(t){window.DEBUG&&console.log("finishFormWithError: ERROR",t),grecaptcha.reset(window.recaptchaLogin),grecaptcha.reset(window.recaptchaRegistration);var e=!1;t instanceof b&&t.message&&(e=t.message);var r=e||k.defaultErrorText;E.showAnswer(r)},getPromocode:function(t){var e=null;return m.each(t.split("&"),(function(t,r){if((e=r.match(/^promocode=(.*)$/i))&&1 in e)return e=e[1],!1})),e},sendAnalytics:function(t,e,r){"function"==typeof ga&&void 0!==t&&void 0!==e&&ga("send","event",t,e,void 0!==r?r:"")},do2fa:(f=n(a().mark((function t(r,o){var i,u;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=jQuery.Deferred(),(u=E.init2FAForm()).on("completed",function(){var t=n(a().mark((function t(n,c){var s;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,r.check2faCode(c,o);case 3:s=t.sent,i.resolve(s.doc.auth.$id),t.next=17;break;case 7:if(t.prev=7,t.t0=t.catch(0),window.DEBUG&&console.log("finish2FaFormWithError: ERROR",t.t0),!(t.t0 instanceof b)){t.next=16;break}return E.showAnswer(e.doc.error.msg.$,!1),u.removeClass("disables").prop("disabled",!1),t.abrupt("return",!1);case 16:i.reject(t.t0);case 17:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e,r){return t.apply(this,arguments)}}()),t.abrupt("return",i.promise());case 4:case"end":return t.stop()}}),t)}))),function(t,e){return f.apply(this,arguments)}),init2FAForm:function(){var t=m("#auth-modal--authorization_2fa-key"),e=m("#auth-modal--authorization_login"),r=m("#auth-modal--authorization_password");return E.showAnswer("Введите 6-значный числовой пароль, сгенерированный приложением Google Authenticator",!1),t.closest(".auth-modal__form__group").show(),e.addClass("disables").prop("disabled",!0),r.addClass("disables").prop("disabled",!0),t.on("keyup",n(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:6===(r=m(this)).val().trim().length&&(t.addClass("disables").prop("disabled",!0),t.trigger("completed",[r.val()]));case 2:case"end":return e.stop()}}),e,this)})))),t}};return this.each((function(t,e){s=m(e),E.init()}))}}),Drupal.behaviors.auth={attach:function(t,e){m("body").once("auth-behavior-once").each((function(){m("body",t).on("click",".js-auth-modal-show",(function(t){t.preventDefault();var r=m(this),n=r.data("auth-modal-type");if(n){var o=m('.js-auth-modal[data-type="'+n+'"]');if(o.length){var i=[];i.project=e.project,r.data("order")&&(i.order=r.attr("data-order")),r.data("datacenter")&&(i.datacenter=parseInt(r.attr("data-datacenter"))),r.data("redirect")&&(i.redirect=r.attr("data-redirect")),r.data("action")&&(i.action=r.data("action")),r.data("bill-action")&&(i["bill-action"]=r.data("bill-action")),r.data("product-type")&&(i["product-type"]=r.data("product-type")),r.data("product-name")&&(i["product-name"]=r.data("product-name")),r.attr("data-period-order")&&(i["period-order"]=r.attr("data-period-order")),o.authModal(i)}}}))}))}}}()}();;
(function(factory){if(typeof define==="function"&&define.amd){define(factory)}else if(typeof exports==="object"){module.exports=factory()}else{var _OldCookies=window.Cookies;var api=window.Cookies=factory();api.noConflict=function(){window.Cookies=_OldCookies;return api}}})(function(){function extend(){var i=0;var result={};for(;i<arguments.length;i++){var attributes=arguments[i];for(var key in attributes){result[key]=attributes[key]}}return result}function init(converter){function api(key,value,attributes){var result;if(arguments.length>1){attributes=extend({path:"/"},api.defaults,attributes);if(typeof attributes.expires==="number"){var expires=new Date;expires.setMilliseconds(expires.getMilliseconds()+attributes.expires*864e5);attributes.expires=expires}try{result=JSON.stringify(value);if(/^[\{\[]/.test(result)){value=result}}catch(e){}value=encodeURIComponent(String(value));value=value.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent);key=encodeURIComponent(String(key));key=key.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent);key=key.replace(/[\(\)]/g,escape);return document.cookie=[key,"=",value,attributes.expires&&"; expires="+attributes.expires.toUTCString(),attributes.path&&"; path="+attributes.path,attributes.domain&&"; domain="+attributes.domain,attributes.secure?"; secure":""].join("")}if(!key){result={}}var cookies=document.cookie?document.cookie.split("; "):[];var rdecode=/(%[0-9A-Z]{2})+/g;var i=0;for(;i<cookies.length;i++){var parts=cookies[i].split("=");var name=parts[0].replace(rdecode,decodeURIComponent);var cookie=parts.slice(1).join("=");if(cookie.charAt(0)==='"'){cookie=cookie.slice(1,-1)}try{cookie=converter&&converter(cookie,name)||cookie.replace(rdecode,decodeURIComponent);if(this.json){try{cookie=JSON.parse(cookie)}catch(e){}}if(key===name){result=cookie;break}if(!key){result[name]=cookie}}catch(e){}}return result}api.get=api.set=api;api.getJSON=function(){return api.apply({json:true},[].slice.call(arguments))};api.defaults={};api.remove=function(key,attributes){api(key,"",extend(attributes,{expires:-1}))};api.withConverter=init;return api}return init()});;
/*
 * International Telephone Input v15.1.0
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */

!function(a){"object"==typeof module&&module.exports?module.exports=a(require("jquery"),window,document):"function"==typeof define&&define.amd?define(["jquery"],function(b){a(b,window,document)}):a(jQuery,window,document)}(function(a,b,c,d){"use strict";function e(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function f(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function g(a,b,c){return b&&f(a.prototype,b),c&&f(a,c),a}for(var h=[["Afghanistan (‫افغانستان‬‎)","af","93"],["Albania (Shqipëri)","al","355"],["Algeria (‫الجزائر‬‎)","dz","213"],["American Samoa","as","1684"],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1264"],["Antigua and Barbuda","ag","1268"],["Argentina","ar","54"],["Armenia (Հայաստան)","am","374"],["Aruba","aw","297"],["Australia","au","61",0],["Austria (Österreich)","at","43"],["Azerbaijan (Azərbaycan)","az","994"],["Bahamas","bs","1242"],["Bahrain (‫البحرين‬‎)","bh","973"],["Bangladesh (বাংলাদেশ)","bd","880"],["Barbados","bb","1246"],["Belarus (Беларусь)","by","375"],["Belgium (België)","be","32"],["Belize","bz","501"],["Benin (Bénin)","bj","229"],["Bermuda","bm","1441"],["Bhutan (འབྲུག)","bt","975"],["Bolivia","bo","591"],["Bosnia and Herzegovina (Босна и Херцеговина)","ba","387"],["Botswana","bw","267"],["Brazil (Brasil)","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1284"],["Brunei","bn","673"],["Bulgaria (България)","bg","359"],["Burkina Faso","bf","226"],["Burundi (Uburundi)","bi","257"],["Cambodia (កម្ពុជា)","kh","855"],["Cameroon (Cameroun)","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","289","306","343","365","387","403","416","418","431","437","438","450","506","514","519","548","579","581","587","604","613","639","647","672","705","709","742","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde (Kabu Verdi)","cv","238"],["Caribbean Netherlands","bq","599",1],["Cayman Islands","ky","1345"],["Central African Republic (République centrafricaine)","cf","236"],["Chad (Tchad)","td","235"],["Chile","cl","56"],["China (中国)","cn","86"],["Christmas Island","cx","61",2],["Cocos (Keeling) Islands","cc","61",1],["Colombia","co","57"],["Comoros (‫جزر القمر‬‎)","km","269"],["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","cd","243"],["Congo (Republic) (Congo-Brazzaville)","cg","242"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["Côte d’Ivoire","ci","225"],["Croatia (Hrvatska)","hr","385"],["Cuba","cu","53"],["Curaçao","cw","599",0],["Cyprus (Κύπρος)","cy","357"],["Czech Republic (Česká republika)","cz","420"],["Denmark (Danmark)","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1767"],["Dominican Republic (República Dominicana)","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt (‫مصر‬‎)","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea (Guinea Ecuatorial)","gq","240"],["Eritrea","er","291"],["Estonia (Eesti)","ee","372"],["Ethiopia","et","251"],["Falkland Islands (Islas Malvinas)","fk","500"],["Faroe Islands (Føroyar)","fo","298"],["Fiji","fj","679"],["Finland (Suomi)","fi","358",0],["France","fr","33"],["French Guiana (Guyane française)","gf","594"],["French Polynesia (Polynésie française)","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia (საქართველო)","ge","995"],["Germany (Deutschland)","de","49"],["Ghana (Gaana)","gh","233"],["Gibraltar","gi","350"],["Greece (Ελλάδα)","gr","30"],["Greenland (Kalaallit Nunaat)","gl","299"],["Grenada","gd","1473"],["Guadeloupe","gp","590",0],["Guam","gu","1671"],["Guatemala","gt","502"],["Guernsey","gg","44",1],["Guinea (Guinée)","gn","224"],["Guinea-Bissau (Guiné Bissau)","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong (香港)","hk","852"],["Hungary (Magyarország)","hu","36"],["Iceland (Ísland)","is","354"],["India (भारत)","in","91"],["Indonesia","id","62"],["Iran (‫ایران‬‎)","ir","98"],["Iraq (‫العراق‬‎)","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2],["Israel (‫ישראל‬‎)","il","972"],["Italy (Italia)","it","39",0],["Jamaica","jm","1",4,["876","658"]],["Japan (日本)","jp","81"],["Jersey","je","44",3],["Jordan (‫الأردن‬‎)","jo","962"],["Kazakhstan (Казахстан)","kz","7",1],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait (‫الكويت‬‎)","kw","965"],["Kyrgyzstan (Кыргызстан)","kg","996"],["Laos (ລາວ)","la","856"],["Latvia (Latvija)","lv","371"],["Lebanon (‫لبنان‬‎)","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya (‫ليبيا‬‎)","ly","218"],["Liechtenstein","li","423"],["Lithuania (Lietuva)","lt","370"],["Luxembourg","lu","352"],["Macau (澳門)","mo","853"],["Macedonia (FYROM) (Македонија)","mk","389"],["Madagascar (Madagasikara)","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania (‫موريتانيا‬‎)","mr","222"],["Mauritius (Moris)","mu","230"],["Mayotte","yt","262",1],["Mexico (México)","mx","52"],["Micronesia","fm","691"],["Moldova (Republica Moldova)","md","373"],["Monaco","mc","377"],["Mongolia (Монгол)","mn","976"],["Montenegro (Crna Gora)","me","382"],["Montserrat","ms","1664"],["Morocco (‫المغرب‬‎)","ma","212",0],["Mozambique (Moçambique)","mz","258"],["Myanmar (Burma) (မြန်မာ)","mm","95"],["Namibia (Namibië)","na","264"],["Nauru","nr","674"],["Nepal (नेपाल)","np","977"],["Netherlands (Nederland)","nl","31"],["New Caledonia (Nouvelle-Calédonie)","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger (Nijar)","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea (조선 민주주의 인민 공화국)","kp","850"],["Northern Mariana Islands","mp","1670"],["Norway (Norge)","no","47",0],["Oman (‫عُمان‬‎)","om","968"],["Pakistan (‫پاکستان‬‎)","pk","92"],["Palau","pw","680"],["Palestine (‫فلسطين‬‎)","ps","970"],["Panama (Panamá)","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru (Perú)","pe","51"],["Philippines","ph","63"],["Poland (Polska)","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar (‫قطر‬‎)","qa","974"],["Réunion (La Réunion)","re","262",0],["Romania (România)","ro","40"],["Russia (Россия)","ru","7",0],["Rwanda","rw","250"],["Saint Barthélemy","bl","590",1],["Saint Helena","sh","290"],["Saint Kitts and Nevis","kn","1869"],["Saint Lucia","lc","1758"],["Saint Martin (Saint-Martin (partie française))","mf","590",2],["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","pm","508"],["Saint Vincent and the Grenadines","vc","1784"],["Samoa","ws","685"],["San Marino","sm","378"],["São Tomé and Príncipe (São Tomé e Príncipe)","st","239"],["Saudi Arabia (‫المملكة العربية السعودية‬‎)","sa","966"],["Senegal (Sénégal)","sn","221"],["Serbia (Србија)","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1721"],["Slovakia (Slovensko)","sk","421"],["Slovenia (Slovenija)","si","386"],["Solomon Islands","sb","677"],["Somalia (Soomaaliya)","so","252"],["South Africa","za","27"],["South Korea (대한민국)","kr","82"],["South Sudan (‫جنوب السودان‬‎)","ss","211"],["Spain (España)","es","34"],["Sri Lanka (ශ්‍රී ලංකාව)","lk","94"],["Sudan (‫السودان‬‎)","sd","249"],["Suriname","sr","597"],["Svalbard and Jan Mayen","sj","47",1],["Swaziland","sz","268"],["Sweden (Sverige)","se","46"],["Switzerland (Schweiz)","ch","41"],["Syria (‫سوريا‬‎)","sy","963"],["Taiwan (台灣)","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand (ไทย)","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad and Tobago","tt","1868"],["Tunisia (‫تونس‬‎)","tn","216"],["Turkey (Türkiye)","tr","90"],["Turkmenistan","tm","993"],["Turks and Caicos Islands","tc","1649"],["Tuvalu","tv","688"],["U.S. Virgin Islands","vi","1340"],["Uganda","ug","256"],["Ukraine (Україна)","ua","380"],["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["Uzbekistan (Oʻzbekiston)","uz","998"],["Vanuatu","vu","678"],["Vatican City (Città del Vaticano)","va","39",1],["Venezuela","ve","58"],["Vietnam (Việt Nam)","vn","84"],["Wallis and Futuna (Wallis-et-Futuna)","wf","681"],["Western Sahara (‫الصحراء الغربية‬‎)","eh","212",1],["Yemen (‫اليمن‬‎)","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["Åland Islands","ax","358",1]],i=0;i<h.length;i++){var j=h[i];h[i]={name:j[0],iso2:j[1],dialCode:j[2],priority:j[3]||0,areaCodes:j[4]||null}}b.intlTelInputGlobals={getInstance:function(a){var c=a.getAttribute("data-intl-tel-input-id");return b.intlTelInputGlobals.instances[c]},instances:{}};var k=0,l={allowDropdown:!0,autoHideDialCode:!0,autoPlaceholder:"polite",customContainer:"",customPlaceholder:null,dropdownContainer:null,excludeCountries:[],formatOnDisplay:!0,geoIpLookup:null,hiddenInput:"",initialCountry:"",localizedCountries:null,nationalMode:!0,onlyCountries:[],placeholderNumberType:"MOBILE",preferredCountries:["us","gb"],separateDialCode:!1,utilsScript:""},m=["800","822","833","844","855","866","877","880","881","882","883","884","885","886","887","888","889"];b.addEventListener("load",function(){b.intlTelInputGlobals.windowLoaded=!0});var n=function(a,b){for(var c=Object.keys(a),d=0;d<c.length;d++)b(c[d],a[c[d]])},o=function(a){n(b.intlTelInputGlobals.instances,function(c){b.intlTelInputGlobals.instances[c][a]()})},p=function(){function a(b,c){var d=this;e(this,a),this.id=k++,this.a=b,this.b=null,this.c=null;var f=c||{};this.d={},n(l,function(a,b){d.d[a]=f.hasOwnProperty(a)?f[a]:b}),this.e=Boolean(b.getAttribute("placeholder"))}return g(a,[{key:"_init",value:function(){var a=this;if(this.d.nationalMode&&(this.d.autoHideDialCode=!1),this.d.separateDialCode&&(this.d.autoHideDialCode=this.d.nationalMode=!1),this.g=/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),this.g&&(c.body.classList.add("iti-mobile"),this.d.dropdownContainer||(this.d.dropdownContainer=c.body)),"undefined"!=typeof Promise){var b=new Promise(function(b,c){a.h=b,a.i=c}),d=new Promise(function(b,c){a.i0=b,a.i1=c});this.promise=Promise.all([b,d])}else this.h=this.i=function(){},this.i0=this.i1=function(){};this.s={},this._b(),this._f(),this._h(),this._i(),this._i3()}},{key:"_b",value:function(){this._d(),this._d2(),this._e(),this.d.localizedCountries&&this._d0(),(this.d.onlyCountries.length||this.d.localizedCountries)&&this.p.sort(this._d1)}},{key:"_c",value:function(a,b,c){this.q.hasOwnProperty(b)||(this.q[b]=[]);var d=c||0;this.q[b][d]=a}},{key:"_d",value:function(){if(this.d.onlyCountries.length){var a=this.d.onlyCountries.map(function(a){return a.toLowerCase()});this.p=h.filter(function(b){return a.indexOf(b.iso2)>-1})}else if(this.d.excludeCountries.length){var b=this.d.excludeCountries.map(function(a){return a.toLowerCase()});this.p=h.filter(function(a){return-1===b.indexOf(a.iso2)})}else this.p=h}},{key:"_d0",value:function(){for(var a=0;a<this.p.length;a++){var b=this.p[a].iso2.toLowerCase();this.d.localizedCountries.hasOwnProperty(b)&&(this.p[a].name=this.d.localizedCountries[b])}}},{key:"_d1",value:function(a,b){return a.name.localeCompare(b.name)}},{key:"_d2",value:function(){this.q={};for(var a=0;a<this.p.length;a++){var b=this.p[a];if(this._c(b.iso2,b.dialCode,b.priority),b.areaCodes)for(var c=0;c<b.areaCodes.length;c++)this._c(b.iso2,b.dialCode+b.areaCodes[c])}}},{key:"_e",value:function(){this.preferredCountries=[];for(var a=0;a<this.d.preferredCountries.length;a++){var b=this.d.preferredCountries[a].toLowerCase(),c=this._y(b,!1,!0);c&&this.preferredCountries.push(c)}}},{key:"_e2",value:function(a,b,d){var e=c.createElement(a);return b&&n(b,function(a,b){return e.setAttribute(a,b)}),d&&d.appendChild(e),e}},{key:"_f",value:function(){this.a.setAttribute("autocomplete","off");var a="intl-tel-input";this.d.allowDropdown&&(a+=" allow-dropdown"),this.d.separateDialCode&&(a+=" separate-dial-code"),this.d.customContainer&&(a+=" ",a+=this.d.customContainer);var b=this._e2("div",{"class":a});if(this.a.parentNode.insertBefore(b,this.a),this.k=this._e2("div",{"class":"flag-container"},b),b.appendChild(this.a),this.selectedFlag=this._e2("div",{"class":"selected-flag",role:"combobox","aria-owns":"country-listbox"},this.k),this.l=this._e2("div",{"class":"iti-flag"},this.selectedFlag),this.d.separateDialCode&&(this.t=this._e2("div",{"class":"selected-dial-code"},this.selectedFlag)),this.d.allowDropdown&&(this.selectedFlag.setAttribute("tabindex","0"),this.u=this._e2("div",{"class":"iti-arrow"},this.selectedFlag),this.m=this._e2("ul",{"class":"country-list hide",id:"country-listbox","aria-expanded":"false",role:"listbox"}),this.preferredCountries.length&&(this._g(this.preferredCountries,"preferred"),this._e2("li",{"class":"divider",role:"separator","aria-disabled":"true"},this.m)),this._g(this.p,"standard"),this.d.dropdownContainer?(this.dropdown=this._e2("div",{"class":"intl-tel-input iti-container"}),this.dropdown.appendChild(this.m)):this.k.appendChild(this.m)),this.d.hiddenInput){var c=this.d.hiddenInput,d=this.a.getAttribute("name");if(d){var e=d.lastIndexOf("[");-1!==e&&(c="".concat(d.substr(0,e),"[").concat(c,"]"))}this.hiddenInput=this._e2("input",{type:"hidden",name:c}),b.appendChild(this.hiddenInput)}}},{key:"_g",value:function(a,b){for(var c="",d=0;d<a.length;d++){var e=a[d];c+="<li class='country ".concat(b,"' tabIndex='-1' id='iti-item-").concat(e.iso2,"' role='option' data-dial-code='").concat(e.dialCode,"' data-country-code='").concat(e.iso2,"'>"),c+="<div class='flag-box'><div class='iti-flag ".concat(e.iso2,"'></div></div>"),c+="<span class='country-name'>".concat(e.name,"</span>"),c+="<span class='dial-code'>+".concat(e.dialCode,"</span>"),c+="</li>"}this.m.insertAdjacentHTML("beforeend",c)}},{key:"_h",value:function(){var a=this.a.value,b=this._5(a),c=this._w(a),d=this.d,e=d.initialCountry,f=d.nationalMode,g=d.autoHideDialCode,h=d.separateDialCode;b&&!c?this._v(a):"auto"!==e&&(e?this._z(e.toLowerCase()):b&&c?this._z("us"):(this.j=this.preferredCountries.length?this.preferredCountries[0].iso2:this.p[0].iso2,a||this._z(this.j)),a||f||g||h||(this.a.value="+".concat(this.s.dialCode))),a&&this._u(a)}},{key:"_i",value:function(){this._j(),this.d.autoHideDialCode&&this._l(),this.d.allowDropdown&&this._i2(),this.hiddenInput&&this._i0()}},{key:"_i0",value:function(){var a=this;this._a14=function(){a.hiddenInput.value=a.getNumber()},this.a.form&&this.a.form.addEventListener("submit",this._a14)}},{key:"_i1",value:function(){for(var a=this.a;a&&"LABEL"!==a.tagName;)a=a.parentNode;return a}},{key:"_i2",value:function(){var a=this;this._a9=function(b){a.m.classList.contains("hide")?a.a.focus():b.preventDefault()};var b=this._i1();b&&b.addEventListener("click",this._a9),this._a10=function(){!a.m.classList.contains("hide")||a.a.disabled||a.a.readOnly||a._n()},this.selectedFlag.addEventListener("click",this._a10),this._a11=function(b){a.m.classList.contains("hide")&&-1!==["ArrowUp","ArrowDown"," ","Enter"].indexOf(b.key)&&(b.preventDefault(),b.stopPropagation(),a._n()),"Tab"===b.key&&a._2()},this.k.addEventListener("keydown",this._a11)}},{key:"_i3",value:function(){var a=this;this.d.utilsScript&&!b.intlTelInputUtils?b.intlTelInputGlobals.windowLoaded?b.intlTelInputGlobals.loadUtils(this.d.utilsScript):b.addEventListener("load",function(){b.intlTelInputGlobals.loadUtils(a.d.utilsScript)}):this.i0(),"auto"===this.d.initialCountry?this._i4():this.h()}},{key:"_i4",value:function(){b.intlTelInputGlobals.autoCountry?this.handleAutoCountry():b.intlTelInputGlobals.startedLoadingAutoCountry||(b.intlTelInputGlobals.startedLoadingAutoCountry=!0,"function"==typeof this.d.geoIpLookup&&this.d.geoIpLookup(function(a){b.intlTelInputGlobals.autoCountry=a.toLowerCase(),setTimeout(function(){return o("handleAutoCountry")})},function(){return o("rejectAutoCountryPromise")}))}},{key:"_j",value:function(){var a=this;this._a12=function(){a._v(a.a.value)&&a._8()},this.a.addEventListener("keyup",this._a12),this._a13=function(){setTimeout(a._a12)},this.a.addEventListener("cut",this._a13),this.a.addEventListener("paste",this._a13)}},{key:"_j2",value:function(a){var b=this.a.getAttribute("maxlength");return b&&a.length>b?a.substr(0,b):a}},{key:"_l",value:function(){var a=this;this._a8=function(){a._l2()},this.a.form&&this.a.form.addEventListener("submit",this._a8),this.a.addEventListener("blur",this._a8)}},{key:"_l2",value:function(){if("+"===this.a.value.charAt(0)){var a=this._m(this.a.value);a&&this.s.dialCode!==a||(this.a.value="")}}},{key:"_m",value:function(a){return a.replace(/\D/g,"")}},{key:"_m2",value:function(a){var b=c.createEvent("Event");b.initEvent(a,!0,!0),this.a.dispatchEvent(b)}},{key:"_n",value:function(){this.m.classList.remove("hide"),this.m.setAttribute("aria-expanded","true"),this._o(),this.b&&(this._x(this.b,!1),this._3(this.b,!0)),this._p(),this.u.classList.add("up"),this._m2("open:countrydropdown")}},{key:"_n2",value:function(a,b,c){c&&!a.classList.contains(b)?a.classList.add(b):!c&&a.classList.contains(b)&&a.classList.remove(b)}},{key:"_o",value:function(){var a=this;if(this.d.dropdownContainer&&this.d.dropdownContainer.appendChild(this.dropdown),!this.g){var d=this.a.getBoundingClientRect(),e=b.pageYOffset||c.documentElement.scrollTop,f=d.top+e,g=this.m.offsetHeight,h=f+this.a.offsetHeight+g<e+b.innerHeight,i=f-g>e;if(this._n2(this.m,"dropup",!h&&i),this.d.dropdownContainer){var j=!h&&i?0:this.a.offsetHeight;this.dropdown.style.top="".concat(f+j,"px"),this.dropdown.style.left="".concat(d.left+c.body.scrollLeft,"px"),this._a4=function(){return a._2()},b.addEventListener("scroll",this._a4)}}}},{key:"_o2",value:function(a){for(var b=a;b&&b!==this.m&&!b.classList.contains("country");)b=b.parentNode;return b===this.m?null:b}},{key:"_p",value:function(){var a=this;this._a0=function(b){var c=a._o2(b.target);c&&a._x(c,!1)},this.m.addEventListener("mouseover",this._a0),this._a1=function(b){var c=a._o2(b.target);c&&a._1(c)},this.m.addEventListener("click",this._a1);var b=!0;this._a2=function(){b||a._2(),b=!1},c.documentElement.addEventListener("click",this._a2);var d="",e=null;this._a3=function(b){b.preventDefault(),"ArrowUp"===b.key||"ArrowDown"===b.key?a._q(b.key):"Enter"===b.key?a._r():"Escape"===b.key?a._2():/^[a-zA-ZÀ-ÿ ]$/.test(b.key)&&(e&&clearTimeout(e),d+=b.key.toLowerCase(),a._s(d),e=setTimeout(function(){d=""},1e3))},c.addEventListener("keydown",this._a3)}},{key:"_q",value:function(a){var b="ArrowUp"===a?this.c.previousElementSibling:this.c.nextElementSibling;b&&(b.classList.contains("divider")&&(b="ArrowUp"===a?b.previousElementSibling:b.nextElementSibling),this._x(b,!0))}},{key:"_r",value:function(){this.c&&this._1(this.c)}},{key:"_s",value:function(a){for(var b=0;b<this.p.length;b++)if(this._t(this.p[b].name,a)){var c=this.m.querySelector("#iti-item-".concat(this.p[b].iso2));this._x(c,!1),this._3(c,!0);break}}},{key:"_t",value:function(a,b){return a.substr(0,b.length).toLowerCase()===b}},{key:"_u",value:function(a){var c=a;if(this.d.formatOnDisplay&&b.intlTelInputUtils&&this.s){var d=!this.d.separateDialCode&&(this.d.nationalMode||"+"!==c.charAt(0)),e=intlTelInputUtils.numberFormat,f=e.NATIONAL,g=e.INTERNATIONAL,h=d?f:g;c=intlTelInputUtils.formatNumber(c,this.s.iso2,h)}c=this._7(c),this.a.value=c}},{key:"_v",value:function(a){var b=a,c="1"===this.s.dialCode;b&&this.d.nationalMode&&c&&"+"!==b.charAt(0)&&("1"!==b.charAt(0)&&(b="1".concat(b)),b="+".concat(b));var d=this._5(b),e=this._m(b),f=null;if(d){var g=this.q[this._m(d)],h=-1!==g.indexOf(this.s.iso2),i="+1"===d&&e.length>=4;if(!("1"===this.s.dialCode&&this._w(e))&&(!h||i))for(var j=0;j<g.length;j++)if(g[j]){f=g[j];break}}else"+"===b.charAt(0)&&e.length?f="":b&&"+"!==b||(f=this.j);return null!==f&&this._z(f)}},{key:"_w",value:function(a){var b=this._m(a);if("1"===b.charAt(0)){var c=b.substr(1,3);return-1!==m.indexOf(c)}return!1}},{key:"_x",value:function(a,b){var c=this.c;c&&c.classList.remove("highlight"),this.c=a,this.c.classList.add("highlight"),b&&this.c.focus()}},{key:"_y",value:function(a,b,c){for(var d=b?h:this.p,e=0;e<d.length;e++)if(d[e].iso2===a)return d[e];if(c)return null;throw new Error("No country data for '".concat(a,"'"))}},{key:"_z",value:function(a){var b=this.s.iso2?this.s:{};this.s=a?this._y(a,!1,!1):{},this.s.iso2&&(this.j=this.s.iso2),this.l.setAttribute("class","iti-flag ".concat(a));var c=a?"".concat(this.s.name,": +").concat(this.s.dialCode):"Unknown";if(this.selectedFlag.setAttribute("title",c),this.d.separateDialCode){var d=this.s.dialCode?"+".concat(this.s.dialCode):"";this.t.innerHTML=d,this.a.style.paddingLeft="".concat(this.selectedFlag.offsetWidth+6,"px")}if(this._0(),this.d.allowDropdown){var e=this.b;if(e&&(e.classList.remove("active"),e.setAttribute("aria-selected","false")),a){var f=this.m.querySelector("#iti-item-".concat(a));f.setAttribute("aria-selected","true"),f.classList.add("active"),this.b=f,this.m.setAttribute("aria-activedescendant",f.getAttribute("id"))}}return b.iso2!==a}},{key:"_0",value:function(){var a="aggressive"===this.d.autoPlaceholder||!this.e&&"polite"===this.d.autoPlaceholder;if(b.intlTelInputUtils&&a){var c=intlTelInputUtils.numberType[this.d.placeholderNumberType],d=this.s.iso2?intlTelInputUtils.getExampleNumber(this.s.iso2,this.d.nationalMode,c):"";d=this._7(d),"function"==typeof this.d.customPlaceholder&&(d=this.d.customPlaceholder(d,this.s)),this.a.setAttribute("placeholder",d)}}},{key:"_1",value:function(a){var b=this._z(a.getAttribute("data-country-code"));this._2(),this._4(a.getAttribute("data-dial-code"),!0),this.a.focus();var c=this.a.value.length;this.a.setSelectionRange(c,c),b&&this._8()}},{key:"_2",value:function(){this.m.classList.add("hide"),this.m.setAttribute("aria-expanded","false"),this.u.classList.remove("up"),c.removeEventListener("keydown",this._a3),c.documentElement.removeEventListener("click",this._a2),this.m.removeEventListener("mouseover",this._a0),this.m.removeEventListener("click",this._a1),this.d.dropdownContainer&&(this.g||b.removeEventListener("scroll",this._a4),this.dropdown.parentNode&&this.dropdown.parentNode.removeChild(this.dropdown)),this._m2("close:countrydropdown")}},{key:"_3",value:function(a,d){var e=this.m,f=b.pageYOffset||c.documentElement.scrollTop,g=e.offsetHeight,h=e.getBoundingClientRect().top+f,i=h+g,j=a.offsetHeight,k=a.getBoundingClientRect().top+f,l=k+j,m=k-h+e.scrollTop,n=g/2-j/2;if(k<h)d&&(m-=n),e.scrollTop=m;else if(l>i){d&&(m+=n);var o=g-j;e.scrollTop=m-o}}},{key:"_4",value:function(a,b){var c,d=this.a.value,e="+".concat(a);if("+"===d.charAt(0)){var f=this._5(d);c=f?d.replace(f,e):e}else{if(this.d.nationalMode||this.d.separateDialCode)return;if(d)c=e+d;else{if(!b&&this.d.autoHideDialCode)return;c=e}}this.a.value=c}},{key:"_5",value:function(a){var b="";if("+"===a.charAt(0))for(var c="",d=0;d<a.length;d++){var e=a.charAt(d);if(!isNaN(parseInt(e,10))&&(c+=e,this.q[c]&&(b=a.substr(0,d+1)),4===c.length))break}return b}},{key:"_6",value:function(){var a=this.a.value.trim(),b=this.s.dialCode,c=this._m(a),d="1"===c.charAt(0)?c:"1".concat(c);return(this.d.separateDialCode&&"+"!==a.charAt(0)?"+".concat(b):a&&"+"!==a.charAt(0)&&"1"!==a.charAt(0)&&b&&"1"===b.charAt(0)&&4===b.length&&b!==d.substr(0,4)?b.substr(1):"")+a}},{key:"_7",value:function(a){var b=a;if(this.d.separateDialCode){var c=this._5(b);if(c){null!==this.s.areaCodes&&(c="+".concat(this.s.dialCode));var d=" "===b[c.length]||"-"===b[c.length]?c.length+1:c.length;b=b.substr(d)}}return this._j2(b)}},{key:"_8",value:function(){this._m2("countrychange")}},{key:"handleAutoCountry",value:function(){"auto"===this.d.initialCountry&&(this.j=b.intlTelInputGlobals.autoCountry,this.a.value||this.setCountry(this.j),this.h())}},{key:"handleUtils",value:function(){b.intlTelInputUtils&&(this.a.value&&this._u(this.a.value),this._0()),this.i0()}},{key:"destroy",value:function(){var a=this.a.form;if(this.d.allowDropdown){this._2(),this.selectedFlag.removeEventListener("click",this._a10),this.k.removeEventListener("keydown",this._a11);var c=this._i1();c&&c.removeEventListener("click",this._a9)}this.hiddenInput&&a&&a.removeEventListener("submit",this._a14),this.d.autoHideDialCode&&(a&&a.removeEventListener("submit",this._a8),this.a.removeEventListener("blur",this._a8)),this.a.removeEventListener("keyup",this._a12),this.a.removeEventListener("cut",this._a13),this.a.removeEventListener("paste",this._a13),this.a.removeAttribute("data-intl-tel-input-id");var d=this.a.parentNode;d.parentNode.insertBefore(this.a,d),d.parentNode.removeChild(d),delete b.intlTelInputGlobals.instances[this.id]}},{key:"getExtension",value:function(){return b.intlTelInputUtils?intlTelInputUtils.getExtension(this._6(),this.s.iso2):""}},{key:"getNumber",value:function(a){if(b.intlTelInputUtils){var c=this.s.iso2;return intlTelInputUtils.formatNumber(this._6(),c,a)}return""}},{key:"getNumberType",value:function(){return b.intlTelInputUtils?intlTelInputUtils.getNumberType(this._6(),this.s.iso2):-99}},{key:"getSelectedCountryData",value:function(){return this.s}},{key:"getValidationError",value:function(){if(b.intlTelInputUtils){var a=this.s.iso2;return intlTelInputUtils.getValidationError(this._6(),a)}return-99}},{key:"isValidNumber",value:function(){var a=this._6().trim(),c=this.d.nationalMode?this.s.iso2:"";return b.intlTelInputUtils?intlTelInputUtils.isValidNumber(a,c):null}},{key:"setCountry",value:function(a){var b=a.toLowerCase();this.l.classList.contains(b)||(this._z(b),this._4(this.s.dialCode,!1),this._8())}},{key:"setNumber",value:function(a){var b=this._v(a);this._u(a),b&&this._8()}},{key:"setPlaceholderNumberType",value:function(a){this.d.placeholderNumberType=a,this._0()}}]),a}();b.intlTelInputGlobals.getCountryData=function(){return h};var q=function(a,b,d){var e=c.createElement("script");e.onload=function(){o("handleUtils"),b&&b()},e.onerror=function(){o("rejectUtilsScriptPromise"),d&&d()},e.className="iti-load-utils",e.async=!0,e.src=a,c.body.appendChild(e)};b.intlTelInputGlobals.loadUtils=function(a){if(!b.intlTelInputUtils&&!b.intlTelInputGlobals.startedLoadingUtilsScript){if(b.intlTelInputGlobals.startedLoadingUtilsScript=!0,"undefined"!=typeof Promise)return new Promise(function(b,c){return q(a,b,c)});q(a)}return null},b.intlTelInputGlobals.defaults=l,b.intlTelInputGlobals.version="15.1.0";a.fn.intlTelInput=function(c){var e=arguments;if(c===d||"object"==typeof c)return this.each(function(){if(!a.data(this,"plugin_intlTelInput")){var d=new p(this,c);d._init(),b.intlTelInputGlobals.instances[d.id]=d,a.data(this,"plugin_intlTelInput",d)}});if("string"==typeof c&&"_"!==c[0]){var f
;return this.each(function(){var b=a.data(this,"plugin_intlTelInput");b instanceof p&&"function"==typeof b[c]&&(f=b[c].apply(b,Array.prototype.slice.call(e,1))),"destroy"===c&&a.data(this,"plugin_intlTelInput",null)}),f!==d?f:this}}});;
