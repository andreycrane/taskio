/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k="".trim,l={},m=a.document,n="2.1.0",o=function(a,b){return new o.fn.init(a,b)},p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};o.fn=o.prototype={jquery:n,constructor:o,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=o.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return o.each(this,a,b)},map:function(a){return this.pushStack(o.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},o.extend=o.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||o.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(o.isPlainObject(d)||(e=o.isArray(d)))?(e?(e=!1,f=c&&o.isArray(c)?c:[]):f=c&&o.isPlainObject(c)?c:{},g[b]=o.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},o.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===o.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return a-parseFloat(a)>=0},isPlainObject:function(a){if("object"!==o.type(a)||a.nodeType||o.isWindow(a))return!1;try{if(a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(b){return!1}return!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=o.trim(a),a&&(1===a.indexOf("use strict")?(b=m.createElement("script"),b.text=a,m.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":k.call(a)},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?o.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),o.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||o.guid++,f):void 0},now:Date.now,support:l}),o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=o.type(a);return"function"===c||o.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s="sizzle"+-new Date,t=a.document,u=0,v=0,w=eb(),x=eb(),y=eb(),z=function(a,b){return a===b&&(j=!0),0},A="undefined",B=1<<31,C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=D.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",M=L.replace("w","w#"),N="\\["+K+"*("+L+")"+K+"*(?:([*^$|!~]?=)"+K+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+K+"*\\]",O=":("+L+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+N.replace(3,8)+")*)|.*)\\)|)",P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(O),U=new RegExp("^"+M+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L.replace("w","w*")+")"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=/'|\\/g,ab=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),bb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{G.apply(D=H.call(t.childNodes),t.childNodes),D[t.childNodes.length].nodeType}catch(cb){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function db(a,b,d,e){var f,g,h,i,j,m,p,q,u,v;if((b?b.ownerDocument||b:t)!==l&&k(b),b=b||l,d=d||[],!a||"string"!=typeof a)return d;if(1!==(i=b.nodeType)&&9!==i)return[];if(n&&!e){if(f=Z.exec(a))if(h=f[1]){if(9===i){if(g=b.getElementById(h),!g||!g.parentNode)return d;if(g.id===h)return d.push(g),d}else if(b.ownerDocument&&(g=b.ownerDocument.getElementById(h))&&r(b,g)&&g.id===h)return d.push(g),d}else{if(f[2])return G.apply(d,b.getElementsByTagName(a)),d;if((h=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(h)),d}if(c.qsa&&(!o||!o.test(a))){if(q=p=s,u=b,v=9===i&&a,1===i&&"object"!==b.nodeName.toLowerCase()){m=ob(a),(p=b.getAttribute("id"))?q=p.replace(_,"\\$&"):b.setAttribute("id",q),q="[id='"+q+"'] ",j=m.length;while(j--)m[j]=q+pb(m[j]);u=$.test(a)&&mb(b.parentNode)||b,v=m.join(",")}if(v)try{return G.apply(d,u.querySelectorAll(v)),d}catch(w){}finally{p||b.removeAttribute("id")}}}return xb(a.replace(P,"$1"),b,d,e)}function eb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function fb(a){return a[s]=!0,a}function gb(a){var b=l.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function hb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function ib(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||B)-(~a.sourceIndex||B);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function jb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function kb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function lb(a){return fb(function(b){return b=+b,fb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function mb(a){return a&&typeof a.getElementsByTagName!==A&&a}c=db.support={},f=db.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},k=db.setDocument=function(a){var b,e=a?a.ownerDocument||a:t,g=e.defaultView;return e!==l&&9===e.nodeType&&e.documentElement?(l=e,m=e.documentElement,n=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){k()},!1):g.attachEvent&&g.attachEvent("onunload",function(){k()})),c.attributes=gb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=gb(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(e.getElementsByClassName)&&gb(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=gb(function(a){return m.appendChild(a).id=s,!e.getElementsByName||!e.getElementsByName(s).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==A&&n){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ab,bb);return function(a){var c=typeof a.getAttributeNode!==A&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==A?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==A&&n?b.getElementsByClassName(a):void 0},p=[],o=[],(c.qsa=Y.test(e.querySelectorAll))&&(gb(function(a){a.innerHTML="<select t=''><option selected=''></option></select>",a.querySelectorAll("[t^='']").length&&o.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||o.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll(":checked").length||o.push(":checked")}),gb(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&o.push("name"+K+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||o.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),o.push(",.*:")})),(c.matchesSelector=Y.test(q=m.webkitMatchesSelector||m.mozMatchesSelector||m.oMatchesSelector||m.msMatchesSelector))&&gb(function(a){c.disconnectedMatch=q.call(a,"div"),q.call(a,"[s!='']:x"),p.push("!=",O)}),o=o.length&&new RegExp(o.join("|")),p=p.length&&new RegExp(p.join("|")),b=Y.test(m.compareDocumentPosition),r=b||Y.test(m.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},z=b?function(a,b){if(a===b)return j=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===t&&r(t,a)?-1:b===e||b.ownerDocument===t&&r(t,b)?1:i?I.call(i,a)-I.call(i,b):0:4&d?-1:1)}:function(a,b){if(a===b)return j=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],k=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:i?I.call(i,a)-I.call(i,b):0;if(f===g)return ib(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)k.unshift(c);while(h[d]===k[d])d++;return d?ib(h[d],k[d]):h[d]===t?-1:k[d]===t?1:0},e):l},db.matches=function(a,b){return db(a,null,null,b)},db.matchesSelector=function(a,b){if((a.ownerDocument||a)!==l&&k(a),b=b.replace(S,"='$1']"),!(!c.matchesSelector||!n||p&&p.test(b)||o&&o.test(b)))try{var d=q.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return db(b,l,null,[a]).length>0},db.contains=function(a,b){return(a.ownerDocument||a)!==l&&k(a),r(a,b)},db.attr=function(a,b){(a.ownerDocument||a)!==l&&k(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!n):void 0;return void 0!==f?f:c.attributes||!n?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},db.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},db.uniqueSort=function(a){var b,d=[],e=0,f=0;if(j=!c.detectDuplicates,i=!c.sortStable&&a.slice(0),a.sort(z),j){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return i=null,a},e=db.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=db.selectors={cacheLength:50,createPseudo:fb,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ab,bb),a[3]=(a[4]||a[5]||"").replace(ab,bb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||db.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&db.error(a[0]),a},PSEUDO:function(a){var b,c=!a[5]&&a[2];return V.CHILD.test(a[0])?null:(a[3]&&void 0!==a[4]?a[2]=a[4]:c&&T.test(c)&&(b=ob(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ab,bb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=w[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&w(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==A&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=db.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),t=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&t){k=q[s]||(q[s]={}),j=k[a]||[],n=j[0]===u&&j[1],m=j[0]===u&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[u,n,m];break}}else if(t&&(j=(b[s]||(b[s]={}))[a])&&j[0]===u)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(t&&((l[s]||(l[s]={}))[a]=[u,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||db.error("unsupported pseudo: "+a);return e[s]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?fb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:fb(function(a){var b=[],c=[],d=g(a.replace(P,"$1"));return d[s]?fb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:fb(function(a){return function(b){return db(a,b).length>0}}),contains:fb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:fb(function(a){return U.test(a||"")||db.error("unsupported lang: "+a),a=a.replace(ab,bb).toLowerCase(),function(b){var c;do if(c=n?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===m},focus:function(a){return a===l.activeElement&&(!l.hasFocus||l.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:lb(function(){return[0]}),last:lb(function(a,b){return[b-1]}),eq:lb(function(a,b,c){return[0>c?c+b:c]}),even:lb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:lb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:lb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:lb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=jb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=kb(b);function nb(){}nb.prototype=d.filters=d.pseudos,d.setFilters=new nb;function ob(a,b){var c,e,f,g,h,i,j,k=x[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=Q.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?db.error(a):x(a,i).slice(0)}function pb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function qb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=v++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[u,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[s]||(b[s]={}),(h=i[d])&&h[0]===u&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function rb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function sb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function tb(a,b,c,d,e,f){return d&&!d[s]&&(d=tb(d)),e&&!e[s]&&(e=tb(e,f)),fb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||wb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:sb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=sb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=sb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ub(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],i=g||d.relative[" "],j=g?1:0,k=qb(function(a){return a===b},i,!0),l=qb(function(a){return I.call(b,a)>-1},i,!0),m=[function(a,c,d){return!g&&(d||c!==h)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>j;j++)if(c=d.relative[a[j].type])m=[qb(rb(m),c)];else{if(c=d.filter[a[j].type].apply(null,a[j].matches),c[s]){for(e=++j;f>e;e++)if(d.relative[a[e].type])break;return tb(j>1&&rb(m),j>1&&pb(a.slice(0,j-1).concat({value:" "===a[j-2].type?"*":""})).replace(P,"$1"),c,e>j&&ub(a.slice(j,e)),f>e&&ub(a=a.slice(e)),f>e&&pb(a))}m.push(c)}return rb(m)}function vb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,i,j,k){var m,n,o,p=0,q="0",r=f&&[],s=[],t=h,v=f||e&&d.find.TAG("*",k),w=u+=null==t?1:Math.random()||.1,x=v.length;for(k&&(h=g!==l&&g);q!==x&&null!=(m=v[q]);q++){if(e&&m){n=0;while(o=a[n++])if(o(m,g,i)){j.push(m);break}k&&(u=w)}c&&((m=!o&&m)&&p--,f&&r.push(m))}if(p+=q,c&&q!==p){n=0;while(o=b[n++])o(r,s,g,i);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=E.call(j));s=sb(s)}G.apply(j,s),k&&!f&&s.length>0&&p+b.length>1&&db.uniqueSort(j)}return k&&(u=w,h=t),r};return c?fb(f):f}g=db.compile=function(a,b){var c,d=[],e=[],f=y[a+" "];if(!f){b||(b=ob(a)),c=b.length;while(c--)f=ub(b[c]),f[s]?d.push(f):e.push(f);f=y(a,vb(e,d))}return f};function wb(a,b,c){for(var d=0,e=b.length;e>d;d++)db(a,b[d],c);return c}function xb(a,b,e,f){var h,i,j,k,l,m=ob(a);if(!f&&1===m.length){if(i=m[0]=m[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&c.getById&&9===b.nodeType&&n&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(ab,bb),b)||[])[0],!b)return e;a=a.slice(i.shift().value.length)}h=V.needsContext.test(a)?0:i.length;while(h--){if(j=i[h],d.relative[k=j.type])break;if((l=d.find[k])&&(f=l(j.matches[0].replace(ab,bb),$.test(i[0].type)&&mb(b.parentNode)||b))){if(i.splice(h,1),a=f.length&&pb(i),!a)return G.apply(e,f),e;break}}}return g(a,m)(f,b,!n,e,$.test(a)&&mb(b.parentNode)||b),e}return c.sortStable=s.split("").sort(z).join("")===s,c.detectDuplicates=!!j,k(),c.sortDetached=gb(function(a){return 1&a.compareDocumentPosition(l.createElement("div"))}),gb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||hb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&gb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||hb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),gb(function(a){return null==a.getAttribute("disabled")})||hb(J,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),db}(a);o.find=t,o.expr=t.selectors,o.expr[":"]=o.expr.pseudos,o.unique=t.uniqueSort,o.text=t.getText,o.isXMLDoc=t.isXML,o.contains=t.contains;var u=o.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(o.isFunction(b))return o.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return o.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return o.filter(b,a,c);b=o.filter(b,a)}return o.grep(a,function(a){return g.call(b,a)>=0!==c})}o.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?o.find.matchesSelector(d,a)?[d]:[]:o.find.matches(a,o.grep(b,function(a){return 1===a.nodeType}))},o.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(o(a).filter(function(){for(b=0;c>b;b++)if(o.contains(e[b],this))return!0}));for(b=0;c>b;b++)o.find(a,e[b],d);return d=this.pushStack(c>1?o.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?o(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=o.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof o?b[0]:b,o.merge(this,o.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:m,!0)),v.test(c[1])&&o.isPlainObject(b))for(c in b)o.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=m.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=m,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):o.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(o):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),o.makeArray(a,this))};A.prototype=o.fn,y=o(m);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};o.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&o(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),o.fn.extend({has:function(a){var b=o(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(o.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?o(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&o.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?o.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(o(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(o.unique(o.merge(this.get(),o(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}o.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return o.dir(a,"parentNode")},parentsUntil:function(a,b,c){return o.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return o.dir(a,"nextSibling")},prevAll:function(a){return o.dir(a,"previousSibling")},nextUntil:function(a,b,c){return o.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return o.dir(a,"previousSibling",c)},siblings:function(a){return o.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return o.sibling(a.firstChild)},contents:function(a){return a.contentDocument||o.merge([],a.childNodes)}},function(a,b){o.fn[a]=function(c,d){var e=o.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=o.filter(d,e)),this.length>1&&(C[a]||o.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return o.each(a.match(E)||[],function(a,c){b[c]=!0}),b}o.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):o.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){o.each(b,function(b,c){var d=o.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&o.each(arguments,function(a,b){var c;while((c=o.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?o.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},o.extend({Deferred:function(a){var b=[["resolve","done",o.Callbacks("once memory"),"resolved"],["reject","fail",o.Callbacks("once memory"),"rejected"],["notify","progress",o.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return o.Deferred(function(c){o.each(b,function(b,f){var g=o.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&o.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?o.extend(a,d):d}},e={};return d.pipe=d.then,o.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&o.isFunction(a.promise)?e:0,g=1===f?a:o.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&o.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;o.fn.ready=function(a){return o.ready.promise().done(a),this},o.extend({isReady:!1,readyWait:1,holdReady:function(a){a?o.readyWait++:o.ready(!0)},ready:function(a){(a===!0?--o.readyWait:o.isReady)||(o.isReady=!0,a!==!0&&--o.readyWait>0||(H.resolveWith(m,[o]),o.fn.trigger&&o(m).trigger("ready").off("ready")))}});function I(){m.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),o.ready()}o.ready.promise=function(b){return H||(H=o.Deferred(),"complete"===m.readyState?setTimeout(o.ready):(m.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},o.ready.promise();var J=o.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===o.type(c)){e=!0;for(h in c)o.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,o.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(o(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};o.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=o.expando+Math.random()}K.uid=1,K.accepts=o.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,o.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(o.isEmptyObject(f))o.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,o.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{o.isArray(b)?d=b.concat(b.map(o.camelCase)):(e=o.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!o.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?o.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}o.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),o.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;
while(c--)d=g[c].name,0===d.indexOf("data-")&&(d=o.camelCase(d.slice(5)),P(f,d,e[d]));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=o.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),o.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||o.isArray(c)?d=L.access(a,b,o.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=o.queue(a,b),d=c.length,e=c.shift(),f=o._queueHooks(a,b),g=function(){o.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:o.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),o.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?o.queue(this[0],a):void 0===b?this:this.each(function(){var c=o.queue(this,a,b);o._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&o.dequeue(this,a)})},dequeue:function(a){return this.each(function(){o.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=o.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===o.css(a,"display")||!o.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=m.createDocumentFragment(),b=a.appendChild(m.createElement("div"));b.innerHTML="<input type='radio' checked='checked' name='t'/>",l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";l.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return m.activeElement}catch(a){}}o.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=o.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof o!==U&&o.event.triggered!==b.type?o.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n&&(l=o.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=o.event.special[n]||{},k=o.extend({type:n,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&o.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),o.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],n=q=h[1],p=(h[2]||"").split(".").sort(),n){l=o.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||o.removeEvent(a,n,r.handle),delete i[n])}else for(n in i)o.event.remove(a,n+b[j],c,d,!0);o.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,p=[d||m],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||m,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+o.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[o.expando]?b:new o.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:o.makeArray(c,[b]),n=o.event.special[q]||{},e||!n.trigger||n.trigger.apply(d,c)!==!1)){if(!e&&!n.noBubble&&!o.isWindow(d)){for(i=n.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||m)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:n.bindType||q,l=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),l&&l.apply(g,c),l=k&&g[k],l&&l.apply&&o.acceptData(g)&&(b.result=l.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||n._default&&n._default.apply(p.pop(),c)!==!1||!o.acceptData(d)||k&&o.isFunction(d[q])&&!o.isWindow(d)&&(h=d[k],h&&(d[k]=null),o.event.triggered=q,d[q](),o.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=o.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=o.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=o.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((o.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?o(e,this).index(i)>=0:o.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||m,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[o.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new o.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=m),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&o.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return o.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=o.extend(new o.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?o.event.trigger(e,null,b):o.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},o.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},o.Event=function(a,b){return this instanceof o.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.getPreventDefault&&a.getPreventDefault()?Z:$):this.type=a,b&&o.extend(this,b),this.timeStamp=a&&a.timeStamp||o.now(),void(this[o.expando]=!0)):new o.Event(a,b)},o.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z,this.stopPropagation()}},o.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){o.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!o.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.focusinBubbles||o.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){o.event.simulate(b,a.target,o.event.fix(a),!0)};o.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),o.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return o().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=o.guid++)),this.each(function(){o.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,o(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){o.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){o.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?o.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return o.nodeName(a,"table")&&o.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)o.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=o.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&o.nodeName(a,b)?o.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}o.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=o.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||o.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===o.type(e))o.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;o.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===o.inArray(e,d))&&(i=o.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f,g,h=o.event.special,i=0;void 0!==(c=a[i]);i++){if(o.acceptData(c)&&(f=c[L.expando],f&&(b=L.cache[f]))){if(d=Object.keys(b.events||{}),d.length)for(g=0;void 0!==(e=d[g]);g++)h[e]?o.event.remove(c,e):o.removeEvent(c,e,b.handle);L.cache[f]&&delete L.cache[f]}delete M.cache[c[M.expando]]}}}),o.fn.extend({text:function(a){return J(this,function(a){return void 0===a?o.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?o.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||o.cleanData(ob(c)),c.parentNode&&(b&&o.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(o.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return o.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(o.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,o.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,k=this.length,m=this,n=k-1,p=a[0],q=o.isFunction(p);if(q||k>1&&"string"==typeof p&&!l.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(k&&(c=o.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=o.map(ob(c,"script"),kb),g=f.length;k>j;j++)h=c,j!==n&&(h=o.clone(h,!0,!0),g&&o.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,o.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&o.contains(i,h)&&(h.src?o._evalUrl&&o._evalUrl(h.src):o.globalEval(h.textContent.replace(hb,"")))}return this}}),o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){o.fn[a]=function(a){for(var c,d=[],e=o(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),o(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d=o(c.createElement(b)).appendTo(c.body),e=a.getDefaultComputedStyle?a.getDefaultComputedStyle(d[0]).display:o.css(d[0],"display");return d.detach(),e}function tb(a){var b=m,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||o.contains(a.ownerDocument,a)||(g=o.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",e=m.documentElement,f=m.createElement("div"),g=m.createElement("div");g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",f.appendChild(g);function h(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",e.appendChild(f);var d=a.getComputedStyle(g,null);b="1%"!==d.top,c="4px"===d.width,e.removeChild(f)}a.getComputedStyle&&o.extend(l,{pixelPosition:function(){return h(),b},boxSizingReliable:function(){return null==c&&h(),c},reliableMarginRight:function(){var b,c=g.appendChild(m.createElement("div"));return c.style.cssText=g.style.cssText=d,c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.innerHTML="",b}})}(),o.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:0,fontWeight:400},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=o.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=o.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=o.css(a,"border"+R[f]+"Width",!0,e))):(g+=o.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=o.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===o.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):f[g]||(e=S(d),(c&&"none"!==c||!e)&&L.set(d,"olddisplay",e?c:o.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}o.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=o.camelCase(b),i=a.style;return b=o.cssProps[h]||(o.cssProps[h]=Fb(i,h)),g=o.cssHooks[b]||o.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(o.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||o.cssNumber[h]||(c+="px"),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]="",i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=o.camelCase(b);return b=o.cssProps[h]||(o.cssProps[h]=Fb(a.style,h)),g=o.cssHooks[b]||o.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||o.isNumeric(f)?f||0:e):e}}),o.each(["height","width"],function(a,b){o.cssHooks[b]={get:function(a,c,d){return c?0===a.offsetWidth&&zb.test(o.css(a,"display"))?o.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===o.css(a,"boxSizing",!1,e),e):0)}}}),o.cssHooks.marginRight=yb(l.reliableMarginRight,function(a,b){return b?o.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),o.each({margin:"",padding:"",border:"Width"},function(a,b){o.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(o.cssHooks[a+b].set=Gb)}),o.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(o.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=o.css(a,b[g],!1,d);return f}return void 0!==c?o.style(a,b,c):o.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?o(this).show():o(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}o.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(o.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?o.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=o.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){o.fx.step[a.prop]?o.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[o.cssProps[a.prop]]||o.cssHooks[a.prop])?o.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},o.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},o.fx=Kb.prototype.init,o.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(o.cssNumber[a]?"":"px"),g=(o.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(o.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,o.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=o.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k=this,l={},m=a.style,n=a.nodeType&&S(a),p=L.get(a,"fxshow");c.queue||(h=o._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,k.always(function(){k.always(function(){h.unqueued--,o.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],j=o.css(a,"display"),"none"===j&&(j=tb(a.nodeName)),"inline"===j&&"none"===o.css(a,"float")&&(m.display="inline-block")),c.overflow&&(m.overflow="hidden",k.always(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(n?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;n=!0}l[d]=p&&p[d]||o.style(a,d)}if(!o.isEmptyObject(l)){p?"hidden"in p&&(n=p.hidden):p=L.access(a,"fxshow",{}),f&&(p.hidden=!n),n?o(a).show():k.done(function(){o(a).hide()}),k.done(function(){var b;L.remove(a,"fxshow");for(b in l)o.style(a,b,l[b])});for(d in l)g=Ub(n?p[d]:0,d,k),d in p||(p[d]=g.start,n&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=o.camelCase(c),e=b[d],f=a[c],o.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=o.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=o.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:o.extend({},b),opts:o.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=o.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return o.map(k,Ub,j),o.isFunction(j.opts.start)&&j.opts.start.call(a,j),o.fx.timer(o.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}o.Animation=o.extend(Xb,{tweener:function(a,b){o.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),o.speed=function(a,b,c){var d=a&&"object"==typeof a?o.extend({},a):{complete:c||!c&&b||o.isFunction(a)&&a,duration:a,easing:c&&b||b&&!o.isFunction(b)&&b};return d.duration=o.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in o.fx.speeds?o.fx.speeds[d.duration]:o.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){o.isFunction(d.old)&&d.old.call(this),d.queue&&o.dequeue(this,d.queue)},d},o.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=o.isEmptyObject(a),f=o.speed(b,c,d),g=function(){var b=Xb(this,o.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=o.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&o.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=o.timers,g=d?d.length:0;for(c.finish=!0,o.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),o.each(["toggle","show","hide"],function(a,b){var c=o.fn[b];o.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),o.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){o.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),o.timers=[],o.fx.tick=function(){var a,b=0,c=o.timers;for(Lb=o.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||o.fx.stop(),Lb=void 0},o.fx.timer=function(a){o.timers.push(a),a()?o.fx.start():o.timers.pop()},o.fx.interval=13,o.fx.start=function(){Mb||(Mb=setInterval(o.fx.tick,o.fx.interval))},o.fx.stop=function(){clearInterval(Mb),Mb=null},o.fx.speeds={slow:600,fast:200,_default:400},o.fn.delay=function(a,b){return a=o.fx?o.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=m.createElement("input"),b=m.createElement("select"),c=b.appendChild(m.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=m.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var Yb,Zb,$b=o.expr.attrHandle;o.fn.extend({attr:function(a,b){return J(this,o.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){o.removeAttr(this,a)})}}),o.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?o.prop(a,b,c):(1===f&&o.isXMLDoc(a)||(b=b.toLowerCase(),d=o.attrHooks[b]||(o.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=o.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void o.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=o.propFix[c]||c,o.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&o.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?o.removeAttr(a,c):a.setAttribute(c,c),c}},o.each(o.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||o.find.attr;$b[b]=function(a,b,d){var e,f;
return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;o.fn.extend({prop:function(a,b){return J(this,o.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[o.propFix[a]||a]})}}),o.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!o.isXMLDoc(a),f&&(b=o.propFix[b]||b,e=o.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),l.optSelected||(o.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),o.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){o.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;o.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=o.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(o.isFunction(a))return this.each(function(b){o(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?o.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(o.isFunction(a)?function(c){o(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=o(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;o.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=o.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,o(this).val()):a,null==e?e="":"number"==typeof e?e+="":o.isArray(e)&&(e=o.map(e,function(a){return null==a?"":a+""})),b=o.valHooks[this.type]||o.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=o.valHooks[e.type]||o.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),o.extend({valHooks:{select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(l.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&o.nodeName(c.parentNode,"optgroup"))){if(b=o(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=o.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=o.inArray(o(d).val(),f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),o.each(["radio","checkbox"],function(){o.valHooks[this]={set:function(a,b){return o.isArray(b)?a.checked=o.inArray(o(a).val(),b)>=0:void 0}},l.checkOn||(o.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){o.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),o.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=o.now(),dc=/\?/;o.parseJSON=function(a){return JSON.parse(a+"")},o.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&o.error("Invalid XML: "+a),b};var ec,fc,gc=/#.*$/,hc=/([?&])_=[^&]*/,ic=/^(.*?):[ \t]*([^\r\n]*)$/gm,jc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,kc=/^(?:GET|HEAD)$/,lc=/^\/\//,mc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nc={},oc={},pc="*/".concat("*");try{fc=location.href}catch(qc){fc=m.createElement("a"),fc.href="",fc=fc.href}ec=mc.exec(fc.toLowerCase())||[];function rc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(o.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function sc(a,b,c,d){var e={},f=a===oc;function g(h){var i;return e[h]=!0,o.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function tc(a,b){var c,d,e=o.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&o.extend(!0,a,d),a}function uc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function vc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}o.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:fc,type:"GET",isLocal:jc.test(ec[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":o.parseJSON,"text xml":o.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?tc(tc(a,o.ajaxSettings),b):tc(o.ajaxSettings,a)},ajaxPrefilter:rc(nc),ajaxTransport:rc(oc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=o.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?o(l):o.event,n=o.Deferred(),p=o.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=ic.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(n.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||fc)+"").replace(gc,"").replace(lc,ec[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=o.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=mc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===ec[1]&&h[2]===ec[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(ec[3]||("http:"===ec[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=o.param(k.data,k.traditional)),sc(nc,k,b,v),2===t)return v;i=k.global,i&&0===o.active++&&o.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!kc.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=hc.test(d)?d.replace(hc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(o.lastModified[d]&&v.setRequestHeader("If-Modified-Since",o.lastModified[d]),o.etag[d]&&v.setRequestHeader("If-None-Match",o.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+pc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=sc(oc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=uc(k,v,f)),u=vc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(o.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(o.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?n.resolveWith(l,[r,x,v]):n.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--o.active||o.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return o.get(a,b,c,"json")},getScript:function(a,b){return o.get(a,void 0,b,"script")}}),o.each(["get","post"],function(a,b){o[b]=function(a,c,d,e){return o.isFunction(c)&&(e=e||d,d=c,c=void 0),o.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),o.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){o.fn[b]=function(a){return this.on(b,a)}}),o._evalUrl=function(a){return o.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},o.fn.extend({wrapAll:function(a){var b;return o.isFunction(a)?this.each(function(b){o(this).wrapAll(a.call(this,b))}):(this[0]&&(b=o(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(o.isFunction(a)?function(b){o(this).wrapInner(a.call(this,b))}:function(){var b=o(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=o.isFunction(a);return this.each(function(c){o(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){o.nodeName(this,"body")||o(this).replaceWith(this.childNodes)}).end()}}),o.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},o.expr.filters.visible=function(a){return!o.expr.filters.hidden(a)};var wc=/%20/g,xc=/\[\]$/,yc=/\r?\n/g,zc=/^(?:submit|button|image|reset|file)$/i,Ac=/^(?:input|select|textarea|keygen)/i;function Bc(a,b,c,d){var e;if(o.isArray(b))o.each(b,function(b,e){c||xc.test(a)?d(a,e):Bc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==o.type(b))d(a,b);else for(e in b)Bc(a+"["+e+"]",b[e],c,d)}o.param=function(a,b){var c,d=[],e=function(a,b){b=o.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=o.ajaxSettings&&o.ajaxSettings.traditional),o.isArray(a)||a.jquery&&!o.isPlainObject(a))o.each(a,function(){e(this.name,this.value)});else for(c in a)Bc(c,a[c],b,e);return d.join("&").replace(wc,"+")},o.fn.extend({serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=o.prop(this,"elements");return a?o.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!o(this).is(":disabled")&&Ac.test(this.nodeName)&&!zc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=o(this).val();return null==c?null:o.isArray(c)?o.map(c,function(a){return{name:b.name,value:a.replace(yc,"\r\n")}}):{name:b.name,value:c.replace(yc,"\r\n")}}).get()}}),o.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cc=0,Dc={},Ec={0:200,1223:204},Fc=o.ajaxSettings.xhr();a.ActiveXObject&&o(a).on("unload",function(){for(var a in Dc)Dc[a]()}),l.cors=!!Fc&&"withCredentials"in Fc,l.ajax=Fc=!!Fc,o.ajaxTransport(function(a){var b;return l.cors||Fc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Dc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Ec[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Dc[g]=b("abort"),f.send(a.hasContent&&a.data||null)},abort:function(){b&&b()}}:void 0}),o.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return o.globalEval(a),a}}}),o.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),o.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=o("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),m.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gc=[],Hc=/(=)\?(?=&|$)|\?\?/;o.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gc.pop()||o.expando+"_"+cc++;return this[a]=!0,a}}),o.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=o.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||o.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Gc.push(e)),g&&o.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),o.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||m;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=o.buildFragment([a],b,e),e&&e.length&&o(e).remove(),o.merge([],d.childNodes))};var Ic=o.fn.load;o.fn.load=function(a,b,c){if("string"!=typeof a&&Ic)return Ic.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=a.slice(h),a=a.slice(0,h)),o.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&o.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?o("<div>").append(o.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},o.expr.filters.animated=function(a){return o.grep(o.timers,function(b){return a===b.elem}).length};var Jc=a.document.documentElement;function Kc(a){return o.isWindow(a)?a:9===a.nodeType&&a.defaultView}o.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=o.css(a,"position"),l=o(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=o.css(a,"top"),i=o.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),o.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},o.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){o.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,o.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Kc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===o.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),o.nodeName(a[0],"html")||(d=a.offset()),d.top+=o.css(a[0],"borderTopWidth",!0),d.left+=o.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-o.css(c,"marginTop",!0),left:b.left-d.left-o.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Jc;while(a&&!o.nodeName(a,"html")&&"static"===o.css(a,"position"))a=a.offsetParent;return a||Jc})}}),o.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;o.fn[b]=function(e){return J(this,function(b,e,f){var g=Kc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),o.each(["top","left"],function(a,b){o.cssHooks[b]=yb(l.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?o(a).position()[b]+"px":c):void 0})}),o.each({Height:"height",Width:"width"},function(a,b){o.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){o.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return o.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?o.css(b,c,g):o.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),o.fn.size=function(){return this.length},o.fn.andSelf=o.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return o});var Lc=a.jQuery,Mc=a.$;return o.noConflict=function(b){return a.$===o&&(a.$=Mc),b&&a.jQuery===o&&(a.jQuery=Lc),o},typeof b===U&&(a.jQuery=a.$=o),o});

/*--------------*/
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){function i(t,i){var a,n,r,o=t.nodeName.toLowerCase();return"area"===o?(a=t.parentNode,n=a.name,t.href&&n&&"map"===a.nodeName.toLowerCase()?(r=e("img[usemap=#"+n+"]")[0],!!r&&s(r)):!1):(/input|select|textarea|button|object/.test(o)?!t.disabled:"a"===o?t.href||i:i)&&s(t)}function s(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var a=0,n=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var s,a,n=e(this[0]);n.length&&n[0]!==document;){if(s=n.css("position"),("absolute"===s||"relative"===s||"fixed"===s)&&(a=parseInt(n.css("zIndex"),10),!isNaN(a)&&0!==a))return a;n=n.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})},removeUniqueId:function(){return this.each(function(){n.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var s=e.attr(t,"tabindex"),a=isNaN(s);return(a||s>=0)&&i(t,!a)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,s){function a(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===s?["Left","Right"]:["Top","Bottom"],r=s.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+s]=function(i){return i===t?o["inner"+s].call(this):this.each(function(){e(this).css(r,a(this,i)+"px")})},e.fn["outer"+s]=function(t,i){return"number"!=typeof t?o["outer"+s].call(this,t):this.each(function(){e(this).css(r,a(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,s){var a,n=e.ui[t].prototype;for(a in s)n.plugins[a]=n.plugins[a]||[],n.plugins[a].push([i,s[a]])},call:function(e,t,i){var s,a=e.plugins[t];if(a&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(s=0;a.length>s;s++)e.options[a[s][0]]&&a[s][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",a=!1;return t[s]>0?!0:(t[s]=1,a=t[s]>0,t[s]=0,a)}})})(jQuery);
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e,t){var i=0,s=Array.prototype.slice,n=e.cleanData;e.cleanData=function(t){for(var i,s=0;null!=(i=t[s]);s++)try{e(i).triggerHandler("remove")}catch(a){}n(t)},e.widget=function(i,s,n){var a,r,o,h,l={},u=i.split(".")[0];i=i.split(".")[1],a=u+"-"+i,n||(n=s,s=e.Widget),e.expr[":"][a.toLowerCase()]=function(t){return!!e.data(t,a)},e[u]=e[u]||{},r=e[u][i],o=e[u][i]=function(e,i){return this._createWidget?(arguments.length&&this._createWidget(e,i),t):new o(e,i)},e.extend(o,r,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),h=new s,h.options=e.widget.extend({},h.options),e.each(n,function(i,n){return e.isFunction(n)?(l[i]=function(){var e=function(){return s.prototype[i].apply(this,arguments)},t=function(e){return s.prototype[i].apply(this,e)};return function(){var i,s=this._super,a=this._superApply;return this._super=e,this._superApply=t,i=n.apply(this,arguments),this._super=s,this._superApply=a,i}}(),t):(l[i]=n,t)}),o.prototype=e.widget.extend(h,{widgetEventPrefix:r?h.widgetEventPrefix:i},l,{constructor:o,namespace:u,widgetName:i,widgetFullName:a}),r?(e.each(r._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete r._childConstructors):s._childConstructors.push(o),e.widget.bridge(i,o)},e.widget.extend=function(i){for(var n,a,r=s.call(arguments,1),o=0,h=r.length;h>o;o++)for(n in r[o])a=r[o][n],r[o].hasOwnProperty(n)&&a!==t&&(i[n]=e.isPlainObject(a)?e.isPlainObject(i[n])?e.widget.extend({},i[n],a):e.widget.extend({},a):a);return i},e.widget.bridge=function(i,n){var a=n.prototype.widgetFullName||i;e.fn[i]=function(r){var o="string"==typeof r,h=s.call(arguments,1),l=this;return r=!o&&h.length?e.widget.extend.apply(null,[r].concat(h)):r,o?this.each(function(){var s,n=e.data(this,a);return n?e.isFunction(n[r])&&"_"!==r.charAt(0)?(s=n[r].apply(n,h),s!==n&&s!==t?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):t):e.error("no such method '"+r+"' for "+i+" widget instance"):e.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+r+"'")}):this.each(function(){var t=e.data(this,a);t?t.option(r||{})._init():e.data(this,a,new n(r,this))}),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,s){s=e(s||this.defaultElement||this)[0],this.element=e(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this.bindings=e(),this.hoverable=e(),this.focusable=e(),s!==this&&(e.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===s&&this.destroy()}}),this.document=e(s.style?s.ownerDocument:s.document||s),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(i,s){var n,a,r,o=i;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof i)if(o={},n=i.split("."),i=n.shift(),n.length){for(a=o[i]=e.widget.extend({},this.options[i]),r=0;n.length-1>r;r++)a[n[r]]=a[n[r]]||{},a=a[n[r]];if(i=n.pop(),s===t)return a[i]===t?null:a[i];a[i]=s}else{if(s===t)return this.options[i]===t?null:this.options[i];o[i]=s}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!t).attr("aria-disabled",t),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var a,r=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=a=e(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,a=this.widget()),e.each(n,function(n,o){function h(){return i||r.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?r[o]:o).apply(r,arguments):t}"string"!=typeof o&&(h.guid=o.guid=o.guid||h.guid||e.guid++);var l=n.match(/^(\w+)\s*(.*)$/),u=l[1]+r.eventNamespace,c=l[2];c?a.delegate(c,u,h):s.bind(u,h)})},_off:function(e,t){t=(t||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.unbind(t).undelegate(t)},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,r=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var r,o=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),r=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),r&&e.effects&&e.effects.effect[o]?s[t](n):o!==t&&s[o]?s[o](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}})})(jQuery);
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){var t=!1;e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.10.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?e(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return s._mouseMove(e)},this._mouseUpDelegate=function(e){return s._mouseUp(e)},e(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0)):!0}},_mouseMove:function(t){return e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button?this._mouseUp(t):this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return e(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){e.widget("ui.draggable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"!==this.options.helper||/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative"),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._mouseDestroy()},_mouseCapture:function(t){var i=this.options;return this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(e(i.iframeFix===!0?"iframe":i.iframeFix).each(function(){e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1e3}).css(e(this).offset()).appendTo("body")}),!0):!1)},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(),this.offsetParent=this.helper.offsetParent(),this.offsetParentCssPosition=this.offsetParent.css("position"),this.offset=this.positionAbs=this.element.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},this.offset.scroll=!1,e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.originalPosition=this.position=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_mouseDrag:function(t,i){if("fixed"===this.offsetParentCssPosition&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"original"!==this.options.helper||e.contains(this.element[0].ownerDocument,this.element[0])?("invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1):!1},_mouseUp:function(t){return e("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)}),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return s.parents("body").length||s.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s[0]===this.element[0]||/(fixed|absolute)/.test(s.css("position"))||s.css("position","absolute"),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.element.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;return n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):"document"===n.containment?(this.containment=[0,0,e(document).width()-this.helperProportions.width-this.margins.left,(e(document).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],undefined):n.containment.constructor===Array?(this.containment=n.containment,undefined):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t="hidden"!==i.css("overflow"),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relative_container=i),undefined):(this.containment=null,undefined)},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent;return this.offset.scroll||(this.offset.scroll={top:n.scrollTop(),left:n.scrollLeft()}),{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top)*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)*s}},_generatePosition:function(t){var i,s,n,a,o=this.options,r="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=t.pageX,l=t.pageY;return this.offset.scroll||(this.offset.scroll={top:r.scrollTop(),left:r.scrollLeft()}),this.originalPosition&&(this.containment&&(this.relative_container?(s=this.relative_container.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():this.offset.scroll.left)}},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s]),"drag"===t&&(this.positionAbs=this._convertPositionTo("absolute")),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i){var s=e(this).data("ui-draggable"),n=s.options,a=e.extend({},i,{item:s.element});s.sortables=[],e(n.connectToSortable).each(function(){var i=e.data(this,"ui-sortable");i&&!i.options.disabled&&(s.sortables.push({instance:i,shouldRevert:i.options.revert}),i.refreshPositions(),i._trigger("activate",t,a))})},stop:function(t,i){var s=e(this).data("ui-draggable"),n=e.extend({},i,{item:s.element});e.each(s.sortables,function(){this.instance.isOver?(this.instance.isOver=0,s.cancelHelperRemoval=!0,this.instance.cancelHelperRemoval=!1,this.shouldRevert&&(this.instance.options.revert=this.shouldRevert),this.instance._mouseStop(t),this.instance.options.helper=this.instance.options._helper,"original"===s.options.helper&&this.instance.currentItem.css({top:"auto",left:"auto"})):(this.instance.cancelHelperRemoval=!1,this.instance._trigger("deactivate",t,n))})},drag:function(t,i){var s=e(this).data("ui-draggable"),n=this;e.each(s.sortables,function(){var a=!1,o=this;this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this.instance._intersectsWith(this.instance.containerCache)&&(a=!0,e.each(s.sortables,function(){return this.instance.positionAbs=s.positionAbs,this.instance.helperProportions=s.helperProportions,this.instance.offset.click=s.offset.click,this!==o&&this.instance._intersectsWith(this.instance.containerCache)&&e.contains(o.instance.element[0],this.instance.element[0])&&(a=!1),a})),a?(this.instance.isOver||(this.instance.isOver=1,this.instance.currentItem=e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",!0),this.instance.options._helper=this.instance.options.helper,this.instance.options.helper=function(){return i.helper[0]},t.target=this.instance.currentItem[0],this.instance._mouseCapture(t,!0),this.instance._mouseStart(t,!0,!0),this.instance.offset.click.top=s.offset.click.top,this.instance.offset.click.left=s.offset.click.left,this.instance.offset.parent.left-=s.offset.parent.left-this.instance.offset.parent.left,this.instance.offset.parent.top-=s.offset.parent.top-this.instance.offset.parent.top,s._trigger("toSortable",t),s.dropped=this.instance.element,s.currentItem=s.element,this.instance.fromOutside=s),this.instance.currentItem&&this.instance._mouseDrag(t)):this.instance.isOver&&(this.instance.isOver=0,this.instance.cancelHelperRemoval=!0,this.instance.options.revert=!1,this.instance._trigger("out",t,this.instance._uiHash(this.instance)),this.instance._mouseStop(t,!0),this.instance.options.helper=this.instance.options._helper,this.instance.currentItem.remove(),this.instance.placeholder&&this.instance.placeholder.remove(),s._trigger("fromSortable",t),s.dropped=!1)})}}),e.ui.plugin.add("draggable","cursor",{start:function(){var t=e("body"),i=e(this).data("ui-draggable").options;t.css("cursor")&&(i._cursor=t.css("cursor")),t.css("cursor",i.cursor)},stop:function(){var t=e(this).data("ui-draggable").options;t._cursor&&e("body").css("cursor",t._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("opacity")&&(n._opacity=s.css("opacity")),s.css("opacity",n.opacity)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._opacity&&e(i.helper).css("opacity",s._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(){var t=e(this).data("ui-draggable");t.scrollParent[0]!==document&&"HTML"!==t.scrollParent[0].tagName&&(t.overflowOffset=t.scrollParent.offset())},drag:function(t){var i=e(this).data("ui-draggable"),s=i.options,n=!1;i.scrollParent[0]!==document&&"HTML"!==i.scrollParent[0].tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+i.scrollParent[0].offsetHeight-t.pageY<s.scrollSensitivity?i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(i.scrollParent[0].scrollTop=n=i.scrollParent[0].scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+i.scrollParent[0].offsetWidth-t.pageX<s.scrollSensitivity?i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(i.scrollParent[0].scrollLeft=n=i.scrollParent[0].scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-e(document).scrollTop()<s.scrollSensitivity?n=e(document).scrollTop(e(document).scrollTop()-s.scrollSpeed):e(window).height()-(t.pageY-e(document).scrollTop())<s.scrollSensitivity&&(n=e(document).scrollTop(e(document).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-e(document).scrollLeft()<s.scrollSensitivity?n=e(document).scrollLeft(e(document).scrollLeft()-s.scrollSpeed):e(window).width()-(t.pageX-e(document).scrollLeft())<s.scrollSensitivity&&(n=e(document).scrollLeft(e(document).scrollLeft()+s.scrollSpeed)))),n!==!1&&e.ui.ddmanager&&!s.dropBehaviour&&e.ui.ddmanager.prepareOffsets(i,t)}}),e.ui.plugin.add("draggable","snap",{start:function(){var t=e(this).data("ui-draggable"),i=t.options;t.snapElements=[],e(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var i=e(this),s=i.offset();this!==t.element[0]&&t.snapElements.push({item:this,width:i.outerWidth(),height:i.outerHeight(),top:s.top,left:s.left})})},drag:function(t,i){var s,n,a,o,r,h,l,u,c,d,p=e(this).data("ui-draggable"),f=p.options,m=f.snapTolerance,g=i.offset.left,v=g+p.helperProportions.width,b=i.offset.top,y=b+p.helperProportions.height;for(c=p.snapElements.length-1;c>=0;c--)r=p.snapElements[c].left,h=r+p.snapElements[c].width,l=p.snapElements[c].top,u=l+p.snapElements[c].height,r-m>v||g>h+m||l-m>y||b>u+m||!e.contains(p.snapElements[c].item.ownerDocument,p.snapElements[c].item)?(p.snapElements[c].snapping&&p.options.snap.release&&p.options.snap.release.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(s=m>=Math.abs(l-y),n=m>=Math.abs(u-b),a=m>=Math.abs(r-v),o=m>=Math.abs(h-g),s&&(i.position.top=p._convertPositionTo("relative",{top:l-p.helperProportions.height,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r-p.helperProportions.width}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h}).left-p.margins.left)),d=s||n||a||o,"outer"!==f.snapMode&&(s=m>=Math.abs(l-b),n=m>=Math.abs(u-y),a=m>=Math.abs(r-g),o=m>=Math.abs(h-v),s&&(i.position.top=p._convertPositionTo("relative",{top:l,left:0}).top-p.margins.top),n&&(i.position.top=p._convertPositionTo("relative",{top:u-p.helperProportions.height,left:0}).top-p.margins.top),a&&(i.position.left=p._convertPositionTo("relative",{top:0,left:r}).left-p.margins.left),o&&(i.position.left=p._convertPositionTo("relative",{top:0,left:h-p.helperProportions.width}).left-p.margins.left)),!p.snapElements[c].snapping&&(s||n||a||o||d)&&p.options.snap.snap&&p.options.snap.snap.call(p.element,t,e.extend(p._uiHash(),{snapItem:p.snapElements[c].item})),p.snapElements[c].snapping=s||n||a||o||d)}}),e.ui.plugin.add("draggable","stack",{start:function(){var t,i=this.data("ui-draggable").options,s=e.makeArray(e(i.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});s.length&&(t=parseInt(e(s[0]).css("zIndex"),10)||0,e(s).each(function(i){e(this).css("zIndex",t+i)}),this.css("zIndex",t+s.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i){var s=e(i.helper),n=e(this).data("ui-draggable").options;s.css("zIndex")&&(n._zIndex=s.css("zIndex")),s.css("zIndex",n.zIndex)},stop:function(t,i){var s=e(this).data("ui-draggable").options;s._zIndex&&e(i.helper).css("zIndex",s._zIndex)}})})(jQuery);
/*! jQuery UI - v1.10.3 - 2013-05-03
* http://jqueryui.com
* Copyright 2013 jQuery Foundation and other contributors; Licensed MIT */
(function(e){function t(e){return parseInt(e,10)||0}function i(e){return!isNaN(parseInt(e,10))}e.widget("ui.resizable",e.ui.mouse,{version:"1.10.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.data("ui-resizable")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=e(this.handles[i],this.element).show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(i){var s,n,a,o=this.options,r=this.element.position(),h=this.element;return this.resizing=!0,/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:r.top,left:r.left}),this._renderProxy(),s=t(this.helper.css("left")),n=t(this.helper.css("top")),o.containment&&(s+=e(o.containment).scrollLeft()||0,n+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:s,top:n},this.size=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalSize=this._helper?{width:h.outerWidth(),height:h.outerHeight()}:{width:h.width(),height:h.height()},this.originalPosition={left:s,top:n},this.sizeDiff={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()},this.originalMousePosition={left:i.pageX,top:i.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,a=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===a?this.axis+"-resize":a),h.addClass("ui-resizable-resizing"),this._propagate("start",i),!0},_mouseDrag:function(t){var i,s=this.helper,n={},a=this.originalMousePosition,o=this.axis,r=this.position.top,h=this.position.left,l=this.size.width,u=this.size.height,c=t.pageX-a.left||0,d=t.pageY-a.top||0,p=this._change[o];return p?(i=p.apply(this,[t,c,d]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),this.position.top!==r&&(n.top=this.position.top+"px"),this.position.left!==h&&(n.left=this.position.left+"px"),this.size.width!==l&&(n.width=this.size.width+"px"),this.size.height!==u&&(n.height=this.size.height+"px"),s.css(n),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(n)||this._trigger("resize",t,this.ui()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&e.ui.hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updateVirtualBoundaries:function(e){var t,s,n,a,o,r=this.options;o={minWidth:i(r.minWidth)?r.minWidth:0,maxWidth:i(r.maxWidth)?r.maxWidth:1/0,minHeight:i(r.minHeight)?r.minHeight:0,maxHeight:i(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||e)&&(t=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,s=o.maxHeight*this.aspectRatio,a=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),n>o.minHeight&&(o.minHeight=n),o.maxWidth>s&&(o.maxWidth=s),o.maxHeight>a&&(o.maxHeight=a)),this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),i(e.left)&&(this.position.left=e.left),i(e.top)&&(this.position.top=e.top),i(e.height)&&(this.size.height=e.height),i(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,s=this.size,n=this.axis;return i(e.height)?e.width=e.height*this.aspectRatio:i(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===n&&(e.left=t.left+(s.width-e.width),e.top=null),"nw"===n&&(e.top=t.top+(s.height-e.height),e.left=t.left+(s.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,s=this.axis,n=i(e.width)&&t.maxWidth&&t.maxWidth<e.width,a=i(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=i(e.width)&&t.minWidth&&t.minWidth>e.width,r=i(e.height)&&t.minHeight&&t.minHeight>e.height,h=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(s),c=/nw|ne|n/.test(s);return o&&(e.width=t.minWidth),r&&(e.height=t.minHeight),n&&(e.width=t.maxWidth),a&&(e.height=t.maxHeight),o&&u&&(e.left=h-t.minWidth),n&&u&&(e.left=h-t.maxWidth),r&&c&&(e.top=l-t.minHeight),a&&c&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){var e,t,i,s,n,a=this.helper||this.element;for(e=0;this._proportionallyResizeElements.length>e;e++){if(n=this._proportionallyResizeElements[e],!this.borderDif)for(this.borderDif=[],i=[n.css("borderTopWidth"),n.css("borderRightWidth"),n.css("borderBottomWidth"),n.css("borderLeftWidth")],s=[n.css("paddingTop"),n.css("paddingRight"),n.css("paddingBottom"),n.css("paddingLeft")],t=0;i.length>t;t++)this.borderDif[t]=(parseInt(i[t],10)||0)+(parseInt(s[t],10)||0);n.css({height:a.height()-this.borderDif[0]-this.borderDif[2]||0,width:a.width()-this.borderDif[1]-this.borderDif[3]||0})}}},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).data("ui-resizable"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&e.ui.hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var i,s,n,a,o,r,h,l=e(this).data("ui-resizable"),u=l.options,c=l.element,d=u.containment,p=d instanceof e?d.get(0):/parent/.test(d)?c.parent().get(0):d;p&&(l.containerElement=e(p),/document/.test(d)||d===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(i=e(p),s=[],e(["Top","Right","Left","Bottom"]).each(function(e,n){s[e]=t(i.css("padding"+n))}),l.containerOffset=i.offset(),l.containerPosition=i.position(),l.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},n=l.containerOffset,a=l.containerSize.height,o=l.containerSize.width,r=e.ui.hasScroll(p,"left")?p.scrollWidth:o,h=e.ui.hasScroll(p)?p.scrollHeight:a,l.parentData={element:p,left:n.left,top:n.top,width:r,height:h}))},resize:function(t){var i,s,n,a,o=e(this).data("ui-resizable"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,c={top:0,left:0},d=o.containerElement;d[0]!==document&&/static/.test(d.css("position"))&&(c=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-c.left),u&&(o.size.height=o.size.width/o.aspectRatio),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio),o.position.top=o._helper?h.top:0),o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top,i=Math.abs((o._helper?o.offset.left-c.left:o.offset.left-c.left)+o.sizeDiff.width),s=Math.abs((o._helper?o.offset.top-c.top:o.offset.top-h.top)+o.sizeDiff.height),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a&&(i-=o.parentData.left),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio))},stop:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).data("ui-resizable"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).data("ui-resizable");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).data("ui-resizable");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t=e(this).data("ui-resizable"),i=t.options,s=t.size,n=t.originalSize,a=t.originalPosition,o=t.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,h=r[0]||1,l=r[1]||1,u=Math.round((s.width-n.width)/h)*h,c=Math.round((s.height-n.height)/l)*l,d=n.width+u,p=n.height+c,f=i.maxWidth&&d>i.maxWidth,m=i.maxHeight&&p>i.maxHeight,g=i.minWidth&&i.minWidth>d,v=i.minHeight&&i.minHeight>p;i.grid=r,g&&(d+=h),v&&(p+=l),f&&(d-=h),m&&(p-=l),/^(se|s|e)$/.test(o)?(t.size.width=d,t.size.height=p):/^(ne)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.top=a.top-c):/^(sw)$/.test(o)?(t.size.width=d,t.size.height=p,t.position.left=a.left-u):(t.size.width=d,t.size.height=p,t.position.top=a.top-c,t.position.left=a.left-u)}})})(jQuery);
/*--------------*/
/*!
 * FullCalendar v1.6.4
 * Docs & License: http://arshaw.com/fullcalendar/
 * (c) 2013 Adam Shaw
 */
(function(t,e){function n(e){t.extend(!0,Ce,e)}function r(n,r,c){function u(t){ae?p()&&(S(),M(t)):f()}function f(){oe=r.theme?"ui":"fc",n.addClass("fc"),r.isRTL?n.addClass("fc-rtl"):n.addClass("fc-ltr"),r.theme&&n.addClass("ui-widget"),ae=t("<div class='fc-content' style='position:relative'/>").prependTo(n),ne=new a(ee,r),re=ne.render(),re&&n.prepend(re),y(r.defaultView),r.handleWindowResize&&t(window).resize(x),m()||v()}function v(){setTimeout(function(){!ie.start&&m()&&C()},0)}function h(){ie&&(te("viewDestroy",ie,ie,ie.element),ie.triggerEventDestroy()),t(window).unbind("resize",x),ne.destroy(),ae.remove(),n.removeClass("fc fc-rtl ui-widget")}function p(){return n.is(":visible")}function m(){return t("body").is(":visible")}function y(t){ie&&t==ie.name||D(t)}function D(e){he++,ie&&(te("viewDestroy",ie,ie,ie.element),Y(),ie.triggerEventDestroy(),G(),ie.element.remove(),ne.deactivateButton(ie.name)),ne.activateButton(e),ie=new Se[e](t("<div class='fc-view fc-view-"+e+"' style='position:relative'/>").appendTo(ae),ee),C(),$(),he--}function C(t){(!ie.start||t||ie.start>ge||ge>=ie.end)&&p()&&M(t)}function M(t){he++,ie.start&&(te("viewDestroy",ie,ie,ie.element),Y(),N()),G(),ie.render(ge,t||0),T(),$(),(ie.afterRender||A)(),_(),P(),te("viewRender",ie,ie,ie.element),ie.trigger("viewDisplay",de),he--,z()}function E(){p()&&(Y(),N(),S(),T(),F())}function S(){le=r.contentHeight?r.contentHeight:r.height?r.height-(re?re.height():0)-R(ae):Math.round(ae.width()/Math.max(r.aspectRatio,.5))}function T(){le===e&&S(),he++,ie.setHeight(le),ie.setWidth(ae.width()),he--,se=n.outerWidth()}function x(){if(!he)if(ie.start){var t=++ve;setTimeout(function(){t==ve&&!he&&p()&&se!=(se=n.outerWidth())&&(he++,E(),ie.trigger("windowResize",de),he--)},200)}else v()}function k(){N(),W()}function H(t){N(),F(t)}function F(t){p()&&(ie.setEventData(pe),ie.renderEvents(pe,t),ie.trigger("eventAfterAllRender"))}function N(){ie.triggerEventDestroy(),ie.clearEvents(),ie.clearEventData()}function z(){!r.lazyFetching||ue(ie.visStart,ie.visEnd)?W():F()}function W(){fe(ie.visStart,ie.visEnd)}function O(t){pe=t,F()}function L(t){H(t)}function _(){ne.updateTitle(ie.title)}function P(){var t=new Date;t>=ie.start&&ie.end>t?ne.disableButton("today"):ne.enableButton("today")}function q(t,n,r){ie.select(t,n,r===e?!0:r)}function Y(){ie&&ie.unselect()}function B(){C(-1)}function j(){C(1)}function I(){i(ge,-1),C()}function X(){i(ge,1),C()}function J(){ge=new Date,C()}function V(t,e,n){t instanceof Date?ge=d(t):g(ge,t,e,n),C()}function U(t,n,r){t!==e&&i(ge,t),n!==e&&s(ge,n),r!==e&&l(ge,r),C()}function Z(){return d(ge)}function G(){ae.css({width:"100%",height:ae.height(),overflow:"hidden"})}function $(){ae.css({width:"",height:"",overflow:""})}function Q(){return ie}function K(t,n){return n===e?r[t]:(("height"==t||"contentHeight"==t||"aspectRatio"==t)&&(r[t]=n,E()),e)}function te(t,n){return r[t]?r[t].apply(n||de,Array.prototype.slice.call(arguments,2)):e}var ee=this;ee.options=r,ee.render=u,ee.destroy=h,ee.refetchEvents=k,ee.reportEvents=O,ee.reportEventChange=L,ee.rerenderEvents=H,ee.changeView=y,ee.select=q,ee.unselect=Y,ee.prev=B,ee.next=j,ee.prevYear=I,ee.nextYear=X,ee.today=J,ee.gotoDate=V,ee.incrementDate=U,ee.formatDate=function(t,e){return w(t,e,r)},ee.formatDates=function(t,e,n){return b(t,e,n,r)},ee.getDate=Z,ee.getView=Q,ee.option=K,ee.trigger=te,o.call(ee,r,c);var ne,re,ae,oe,ie,se,le,ce,ue=ee.isFetchNeeded,fe=ee.fetchEvents,de=n[0],ve=0,he=0,ge=new Date,pe=[];g(ge,r.year,r.month,r.date),r.droppable&&t(document).bind("dragstart",function(e,n){var a=e.target,o=t(a);if(!o.parents(".fc").length){var i=r.dropAccept;(t.isFunction(i)?i.call(a,o):o.is(i))&&(ce=a,ie.dragStart(ce,e,n))}}).bind("dragstop",function(t,e){ce&&(ie.dragStop(ce,t,e),ce=null)})}function a(n,r){function a(){v=r.theme?"ui":"fc";var n=r.header;return n?h=t("<table class='fc-header' style='width:100%'/>").append(t("<tr/>").append(i("left")).append(i("center")).append(i("right"))):e}function o(){h.remove()}function i(e){var a=t("<td class='fc-header-"+e+"'/>"),o=r.header[e];return o&&t.each(o.split(" "),function(e){e>0&&a.append("<span class='fc-header-space'/>");var o;t.each(this.split(","),function(e,i){if("title"==i)a.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>"),o&&o.addClass(v+"-corner-right"),o=null;else{var s;if(n[i]?s=n[i]:Se[i]&&(s=function(){u.removeClass(v+"-state-hover"),n.changeView(i)}),s){var l=r.theme?P(r.buttonIcons,i):null,c=P(r.buttonText,i),u=t("<span class='fc-button fc-button-"+i+" "+v+"-state-default'>"+(l?"<span class='fc-icon-wrap'><span class='ui-icon ui-icon-"+l+"'/>"+"</span>":c)+"</span>").click(function(){u.hasClass(v+"-state-disabled")||s()}).mousedown(function(){u.not("."+v+"-state-active").not("."+v+"-state-disabled").addClass(v+"-state-down")}).mouseup(function(){u.removeClass(v+"-state-down")}).hover(function(){u.not("."+v+"-state-active").not("."+v+"-state-disabled").addClass(v+"-state-hover")},function(){u.removeClass(v+"-state-hover").removeClass(v+"-state-down")}).appendTo(a);Y(u),o||u.addClass(v+"-corner-left"),o=u}}}),o&&o.addClass(v+"-corner-right")}),a}function s(t){h.find("h2").html(t)}function l(t){h.find("span.fc-button-"+t).addClass(v+"-state-active")}function c(t){h.find("span.fc-button-"+t).removeClass(v+"-state-active")}function u(t){h.find("span.fc-button-"+t).addClass(v+"-state-disabled")}function f(t){h.find("span.fc-button-"+t).removeClass(v+"-state-disabled")}var d=this;d.render=a,d.destroy=o,d.updateTitle=s,d.activateButton=l,d.deactivateButton=c,d.disableButton=u,d.enableButton=f;var v,h=t([])}function o(n,r){function a(t,e){return!E||E>t||e>S}function o(t,e){E=t,S=e,W=[];var n=++R,r=F.length;N=r;for(var a=0;r>a;a++)i(F[a],n)}function i(e,r){s(e,function(a){if(r==R){if(a){n.eventDataTransform&&(a=t.map(a,n.eventDataTransform)),e.eventDataTransform&&(a=t.map(a,e.eventDataTransform));for(var o=0;a.length>o;o++)a[o].source=e,w(a[o]);W=W.concat(a)}N--,N||k(W)}})}function s(r,a){var o,i,l=Ee.sourceFetchers;for(o=0;l.length>o;o++){if(i=l[o](r,E,S,a),i===!0)return;if("object"==typeof i)return s(i,a),e}var c=r.events;if(c)t.isFunction(c)?(m(),c(d(E),d(S),function(t){a(t),y()})):t.isArray(c)?a(c):a();else{var u=r.url;if(u){var f,v=r.success,h=r.error,g=r.complete;f=t.isFunction(r.data)?r.data():r.data;var p=t.extend({},f||{}),w=X(r.startParam,n.startParam),b=X(r.endParam,n.endParam);w&&(p[w]=Math.round(+E/1e3)),b&&(p[b]=Math.round(+S/1e3)),m(),t.ajax(t.extend({},Te,r,{data:p,success:function(e){e=e||[];var n=I(v,this,arguments);t.isArray(n)&&(e=n),a(e)},error:function(){I(h,this,arguments),a()},complete:function(){I(g,this,arguments),y()}}))}else a()}}function l(t){t=c(t),t&&(N++,i(t,R))}function c(n){return t.isFunction(n)||t.isArray(n)?n={events:n}:"string"==typeof n&&(n={url:n}),"object"==typeof n?(b(n),F.push(n),n):e}function u(e){F=t.grep(F,function(t){return!D(t,e)}),W=t.grep(W,function(t){return!D(t.source,e)}),k(W)}function f(t){var e,n,r=W.length,a=x().defaultEventEnd,o=t.start-t._start,i=t.end?t.end-(t._end||a(t)):0;for(e=0;r>e;e++)n=W[e],n._id==t._id&&n!=t&&(n.start=new Date(+n.start+o),n.end=t.end?n.end?new Date(+n.end+i):new Date(+a(n)+i):null,n.title=t.title,n.url=t.url,n.allDay=t.allDay,n.className=t.className,n.editable=t.editable,n.color=t.color,n.backgroundColor=t.backgroundColor,n.borderColor=t.borderColor,n.textColor=t.textColor,w(n));w(t),k(W)}function v(t,e){w(t),t.source||(e&&(H.events.push(t),t.source=H),W.push(t)),k(W)}function h(e){if(e){if(!t.isFunction(e)){var n=e+"";e=function(t){return t._id==n}}W=t.grep(W,e,!0);for(var r=0;F.length>r;r++)t.isArray(F[r].events)&&(F[r].events=t.grep(F[r].events,e,!0))}else{W=[];for(var r=0;F.length>r;r++)t.isArray(F[r].events)&&(F[r].events=[])}k(W)}function g(e){return t.isFunction(e)?t.grep(W,e):e?(e+="",t.grep(W,function(t){return t._id==e})):W}function m(){z++||T("loading",null,!0,x())}function y(){--z||T("loading",null,!1,x())}function w(t){var r=t.source||{},a=X(r.ignoreTimezone,n.ignoreTimezone);t._id=t._id||(t.id===e?"_fc"+xe++:t.id+""),t.date&&(t.start||(t.start=t.date),delete t.date),t._start=d(t.start=p(t.start,a)),t.end=p(t.end,a),t.end&&t.end<=t.start&&(t.end=null),t._end=t.end?d(t.end):null,t.allDay===e&&(t.allDay=X(r.allDayDefault,n.allDayDefault)),t.className?"string"==typeof t.className&&(t.className=t.className.split(/\s+/)):t.className=[]}function b(t){t.className?"string"==typeof t.className&&(t.className=t.className.split(/\s+/)):t.className=[];for(var e=Ee.sourceNormalizers,n=0;e.length>n;n++)e[n](t)}function D(t,e){return t&&e&&C(t)==C(e)}function C(t){return("object"==typeof t?t.events||t.url:"")||t}var M=this;M.isFetchNeeded=a,M.fetchEvents=o,M.addEventSource=l,M.removeEventSource=u,M.updateEvent=f,M.renderEvent=v,M.removeEvents=h,M.clientEvents=g,M.normalizeEvent=w;for(var E,S,T=M.trigger,x=M.getView,k=M.reportEvents,H={events:[]},F=[H],R=0,N=0,z=0,W=[],A=0;r.length>A;A++)c(r[A])}function i(t,e,n){return t.setFullYear(t.getFullYear()+e),n||f(t),t}function s(t,e,n){if(+t){var r=t.getMonth()+e,a=d(t);for(a.setDate(1),a.setMonth(r),t.setMonth(r),n||f(t);t.getMonth()!=a.getMonth();)t.setDate(t.getDate()+(a>t?1:-1))}return t}function l(t,e,n){if(+t){var r=t.getDate()+e,a=d(t);a.setHours(9),a.setDate(r),t.setDate(r),n||f(t),c(t,a)}return t}function c(t,e){if(+t)for(;t.getDate()!=e.getDate();)t.setTime(+t+(e>t?1:-1)*Fe)}function u(t,e){return t.setMinutes(t.getMinutes()+e),t}function f(t){return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t}function d(t,e){return e?f(new Date(+t)):new Date(+t)}function v(){var t,e=0;do t=new Date(1970,e++,1);while(t.getHours());return t}function h(t,e){return Math.round((d(t,!0)-d(e,!0))/He)}function g(t,n,r,a){n!==e&&n!=t.getFullYear()&&(t.setDate(1),t.setMonth(0),t.setFullYear(n)),r!==e&&r!=t.getMonth()&&(t.setDate(1),t.setMonth(r)),a!==e&&t.setDate(a)}function p(t,n){return"object"==typeof t?t:"number"==typeof t?new Date(1e3*t):"string"==typeof t?t.match(/^\d+(\.\d+)?$/)?new Date(1e3*parseFloat(t)):(n===e&&(n=!0),m(t,n)||(t?new Date(t):null)):null}function m(t,e){var n=t.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);if(!n)return null;var r=new Date(n[1],0,1);if(e||!n[13]){var a=new Date(n[1],0,1,9,0);n[3]&&(r.setMonth(n[3]-1),a.setMonth(n[3]-1)),n[5]&&(r.setDate(n[5]),a.setDate(n[5])),c(r,a),n[7]&&r.setHours(n[7]),n[8]&&r.setMinutes(n[8]),n[10]&&r.setSeconds(n[10]),n[12]&&r.setMilliseconds(1e3*Number("0."+n[12])),c(r,a)}else if(r.setUTCFullYear(n[1],n[3]?n[3]-1:0,n[5]||1),r.setUTCHours(n[7]||0,n[8]||0,n[10]||0,n[12]?1e3*Number("0."+n[12]):0),n[14]){var o=60*Number(n[16])+(n[18]?Number(n[18]):0);o*="-"==n[15]?1:-1,r=new Date(+r+1e3*60*o)}return r}function y(t){if("number"==typeof t)return 60*t;if("object"==typeof t)return 60*t.getHours()+t.getMinutes();var e=t.match(/(\d+)(?::(\d+))?\s*(\w+)?/);if(e){var n=parseInt(e[1],10);return e[3]&&(n%=12,"p"==e[3].toLowerCase().charAt(0)&&(n+=12)),60*n+(e[2]?parseInt(e[2],10):0)}}function w(t,e,n){return b(t,null,e,n)}function b(t,e,n,r){r=r||Ce;var a,o,i,s,l=t,c=e,u=n.length,f="";for(a=0;u>a;a++)if(o=n.charAt(a),"'"==o){for(i=a+1;u>i;i++)if("'"==n.charAt(i)){l&&(f+=i==a+1?"'":n.substring(a+1,i),a=i);break}}else if("("==o){for(i=a+1;u>i;i++)if(")"==n.charAt(i)){var d=w(l,n.substring(a+1,i),r);parseInt(d.replace(/\D/,""),10)&&(f+=d),a=i;break}}else if("["==o){for(i=a+1;u>i;i++)if("]"==n.charAt(i)){var v=n.substring(a+1,i),d=w(l,v,r);d!=w(c,v,r)&&(f+=d),a=i;break}}else if("{"==o)l=e,c=t;else if("}"==o)l=t,c=e;else{for(i=u;i>a;i--)if(s=Ne[n.substring(a,i)]){l&&(f+=s(l,r)),a=i-1;break}i==a&&l&&(f+=o)}return f}function D(t){var e,n=new Date(t.getTime());return n.setDate(n.getDate()+4-(n.getDay()||7)),e=n.getTime(),n.setMonth(0),n.setDate(1),Math.floor(Math.round((e-n)/864e5)/7)+1}function C(t){return t.end?M(t.end,t.allDay):l(d(t.start),1)}function M(t,e){return t=d(t),e||t.getHours()||t.getMinutes()?l(t,1):f(t)}function E(n,r,a){n.unbind("mouseover").mouseover(function(n){for(var o,i,s,l=n.target;l!=this;)o=l,l=l.parentNode;(i=o._fci)!==e&&(o._fci=e,s=r[i],a(s.event,s.element,s),t(n.target).trigger(n)),n.stopPropagation()})}function S(e,n,r){for(var a,o=0;e.length>o;o++)a=t(e[o]),a.width(Math.max(0,n-x(a,r)))}function T(e,n,r){for(var a,o=0;e.length>o;o++)a=t(e[o]),a.height(Math.max(0,n-R(a,r)))}function x(t,e){return k(t)+F(t)+(e?H(t):0)}function k(e){return(parseFloat(t.css(e[0],"paddingLeft",!0))||0)+(parseFloat(t.css(e[0],"paddingRight",!0))||0)}function H(e){return(parseFloat(t.css(e[0],"marginLeft",!0))||0)+(parseFloat(t.css(e[0],"marginRight",!0))||0)}function F(e){return(parseFloat(t.css(e[0],"borderLeftWidth",!0))||0)+(parseFloat(t.css(e[0],"borderRightWidth",!0))||0)}function R(t,e){return N(t)+W(t)+(e?z(t):0)}function N(e){return(parseFloat(t.css(e[0],"paddingTop",!0))||0)+(parseFloat(t.css(e[0],"paddingBottom",!0))||0)}function z(e){return(parseFloat(t.css(e[0],"marginTop",!0))||0)+(parseFloat(t.css(e[0],"marginBottom",!0))||0)}function W(e){return(parseFloat(t.css(e[0],"borderTopWidth",!0))||0)+(parseFloat(t.css(e[0],"borderBottomWidth",!0))||0)}function A(){}function O(t,e){return t-e}function L(t){return Math.max.apply(Math,t)}function _(t){return(10>t?"0":"")+t}function P(t,n){if(t[n]!==e)return t[n];for(var r,a=n.split(/(?=[A-Z])/),o=a.length-1;o>=0;o--)if(r=t[a[o].toLowerCase()],r!==e)return r;return t[""]}function q(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function Y(t){t.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return!1})}function B(t){t.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")}function j(t,e){var n=t.source||{},r=t.color,a=n.color,o=e("eventColor"),i=t.backgroundColor||r||n.backgroundColor||a||e("eventBackgroundColor")||o,s=t.borderColor||r||n.borderColor||a||e("eventBorderColor")||o,l=t.textColor||n.textColor||e("eventTextColor"),c=[];return i&&c.push("background-color:"+i),s&&c.push("border-color:"+s),l&&c.push("color:"+l),c.join(";")}function I(e,n,r){if(t.isFunction(e)&&(e=[e]),e){var a,o;for(a=0;e.length>a;a++)o=e[a].apply(n,r)||o;return o}}function X(){for(var t=0;arguments.length>t;t++)if(arguments[t]!==e)return arguments[t]}function J(t,e){function n(t,e){e&&(s(t,e),t.setDate(1));var n=a("firstDay"),f=d(t,!0);f.setDate(1);var v=s(d(f),1),g=d(f);l(g,-((g.getDay()-n+7)%7)),i(g);var p=d(v);l(p,(7-p.getDay()+n)%7),i(p,-1,!0);var m=c(),y=Math.round(h(p,g)/7);"fixed"==a("weekMode")&&(l(p,7*(6-y)),y=6),r.title=u(f,a("titleFormat")),r.start=f,r.end=v,r.visStart=g,r.visEnd=p,o(y,m,!0)}var r=this;r.render=n,Z.call(r,t,e,"month");var a=r.opt,o=r.renderBasic,i=r.skipHiddenDays,c=r.getCellsPerWeek,u=e.formatDate}function V(t,e){function n(t,e){e&&l(t,7*e);var n=l(d(t),-((t.getDay()-a("firstDay")+7)%7)),u=l(d(n),7),f=d(n);i(f);var v=d(u);i(v,-1,!0);var h=s();r.start=n,r.end=u,r.visStart=f,r.visEnd=v,r.title=c(f,l(d(v),-1),a("titleFormat")),o(1,h,!1)}var r=this;r.render=n,Z.call(r,t,e,"basicWeek");var a=r.opt,o=r.renderBasic,i=r.skipHiddenDays,s=r.getCellsPerWeek,c=e.formatDates}function U(t,e){function n(t,e){e&&l(t,e),i(t,0>e?-1:1);var n=d(t,!0),c=l(d(n),1);r.title=s(t,a("titleFormat")),r.start=r.visStart=n,r.end=r.visEnd=c,o(1,1,!1)}var r=this;r.render=n,Z.call(r,t,e,"basicDay");var a=r.opt,o=r.renderBasic,i=r.skipHiddenDays,s=e.formatDate}function Z(e,n,r){function a(t,e,n){ee=t,ne=e,re=n,o(),j||i(),s()}function o(){le=he("theme")?"ui":"fc",ce=he("columnFormat"),ue=he("weekNumbers"),de=he("weekNumberTitle"),ve="iso"!=he("weekNumberCalculation")?"w":"W"}function i(){Z=t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(e)}function s(){var n=c();L&&L.remove(),L=t(n).appendTo(e),_=L.find("thead"),P=_.find(".fc-day-header"),j=L.find("tbody"),I=j.find("tr"),X=j.find(".fc-day"),J=I.find("td:first-child"),V=I.eq(0).find(".fc-day > div"),U=I.eq(0).find(".fc-day-content > div"),B(_.add(_.find("tr"))),B(I),I.eq(0).addClass("fc-first"),I.filter(":last").addClass("fc-last"),X.each(function(e,n){var r=Ee(Math.floor(e/ne),e%ne);ge("dayRender",O,r,t(n))}),y(X)}function c(){var t="<table class='fc-border-separate' style='width:100%' cellspacing='0'>"+u()+v()+"</table>";return t}function u(){var t,e,n=le+"-widget-header",r="";for(r+="<thead><tr>",ue&&(r+="<th class='fc-week-number "+n+"'>"+q(de)+"</th>"),t=0;ne>t;t++)e=Ee(0,t),r+="<th class='fc-day-header fc-"+ke[e.getDay()]+" "+n+"'>"+q(xe(e,ce))+"</th>";return r+="</tr></thead>"}function v(){var t,e,n,r=le+"-widget-content",a="";for(a+="<tbody>",t=0;ee>t;t++){for(a+="<tr class='fc-week'>",ue&&(n=Ee(t,0),a+="<td class='fc-week-number "+r+"'>"+"<div>"+q(xe(n,ve))+"</div>"+"</td>"),e=0;ne>e;e++)n=Ee(t,e),a+=h(n);a+="</tr>"}return a+="</tbody>"}function h(t){var e=le+"-widget-content",n=O.start.getMonth(),r=f(new Date),a="",o=["fc-day","fc-"+ke[t.getDay()],e];return t.getMonth()!=n&&o.push("fc-other-month"),+t==+r?o.push("fc-today",le+"-state-highlight"):r>t?o.push("fc-past"):o.push("fc-future"),a+="<td class='"+o.join(" ")+"'"+" data-date='"+xe(t,"yyyy-MM-dd")+"'"+">"+"<div>",re&&(a+="<div class='fc-day-number'>"+t.getDate()+"</div>"),a+="<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>"}function g(e){Q=e;var n,r,a,o=Q-_.height();"variable"==he("weekMode")?n=r=Math.floor(o/(1==ee?2:6)):(n=Math.floor(o/ee),r=o-n*(ee-1)),J.each(function(e,o){ee>e&&(a=t(o),a.find("> div").css("min-height",(e==ee-1?r:n)-R(a)))})}function p(t){$=t,ie.clear(),se.clear(),te=0,ue&&(te=_.find("th.fc-week-number").outerWidth()),K=Math.floor(($-te)/ne),S(P.slice(0,-1),K)}function y(t){t.click(w).mousedown(Me)}function w(e){if(!he("selectable")){var n=m(t(this).data("date"));ge("dayClick",this,n,!0,e)}}function b(t,e,n){n&&ae.build();for(var r=Te(t,e),a=0;r.length>a;a++){var o=r[a];y(D(o.row,o.leftCol,o.row,o.rightCol))}}function D(t,n,r,a){var o=ae.rect(t,n,r,a,e);return be(o,e)}function C(t){return d(t)}function M(t,e){b(t,l(d(e),1),!0)}function E(){Ce()}function T(t,e,n){var r=Se(t),a=X[r.row*ne+r.col];ge("dayClick",a,t,e,n)}function x(t,e){oe.start(function(t){Ce(),t&&D(t.row,t.col,t.row,t.col)},e)}function k(t,e,n){var r=oe.stop();if(Ce(),r){var a=Ee(r);ge("drop",t,a,!0,e,n)}}function H(t){return d(t.start)}function F(t){return ie.left(t)}function N(t){return ie.right(t)}function z(t){return se.left(t)}function W(t){return se.right(t)}function A(t){return I.eq(t)}var O=this;O.renderBasic=a,O.setHeight=g,O.setWidth=p,O.renderDayOverlay=b,O.defaultSelectionEnd=C,O.renderSelection=M,O.clearSelection=E,O.reportDayClick=T,O.dragStart=x,O.dragStop=k,O.defaultEventEnd=H,O.getHoverListener=function(){return oe},O.colLeft=F,O.colRight=N,O.colContentLeft=z,O.colContentRight=W,O.getIsCellAllDay=function(){return!0},O.allDayRow=A,O.getRowCnt=function(){return ee},O.getColCnt=function(){return ne},O.getColWidth=function(){return K},O.getDaySegmentContainer=function(){return Z},fe.call(O,e,n,r),me.call(O),pe.call(O),G.call(O);var L,_,P,j,I,X,J,V,U,Z,$,Q,K,te,ee,ne,re,ae,oe,ie,se,le,ce,ue,de,ve,he=O.opt,ge=O.trigger,be=O.renderOverlay,Ce=O.clearOverlays,Me=O.daySelectionMousedown,Ee=O.cellToDate,Se=O.dateToCell,Te=O.rangeToSegments,xe=n.formatDate;Y(e.addClass("fc-grid")),ae=new ye(function(e,n){var r,a,o;P.each(function(e,i){r=t(i),a=r.offset().left,e&&(o[1]=a),o=[a],n[e]=o}),o[1]=a+r.outerWidth(),I.each(function(n,i){ee>n&&(r=t(i),a=r.offset().top,n&&(o[1]=a),o=[a],e[n]=o)}),o[1]=a+r.outerHeight()}),oe=new we(ae),ie=new De(function(t){return V.eq(t)}),se=new De(function(t){return U.eq(t)})}function G(){function t(t,e){n.renderDayEvents(t,e)}function e(){n.getDaySegmentContainer().empty()}var n=this;n.renderEvents=t,n.clearEvents=e,de.call(n)}function $(t,e){function n(t,e){e&&l(t,7*e);var n=l(d(t),-((t.getDay()-a("firstDay")+7)%7)),u=l(d(n),7),f=d(n);i(f);var v=d(u);i(v,-1,!0);var h=s();r.title=c(f,l(d(v),-1),a("titleFormat")),r.start=n,r.end=u,r.visStart=f,r.visEnd=v,o(h)}var r=this;r.render=n,K.call(r,t,e,"agendaWeek");var a=r.opt,o=r.renderAgenda,i=r.skipHiddenDays,s=r.getCellsPerWeek,c=e.formatDates}function Q(t,e){function n(t,e){e&&l(t,e),i(t,0>e?-1:1);var n=d(t,!0),c=l(d(n),1);r.title=s(t,a("titleFormat")),r.start=r.visStart=n,r.end=r.visEnd=c,o(1)}var r=this;r.render=n,K.call(r,t,e,"agendaDay");var a=r.opt,o=r.renderAgenda,i=r.skipHiddenDays,s=e.formatDate}function K(n,r,a){function o(t){We=t,i(),K?c():s()}function i(){qe=Ue("theme")?"ui":"fc",Ye=Ue("isRTL"),Be=y(Ue("minTime")),je=y(Ue("maxTime")),Ie=Ue("columnFormat"),Xe=Ue("weekNumbers"),Je=Ue("weekNumberTitle"),Ve="iso"!=Ue("weekNumberCalculation")?"w":"W",Re=Ue("snapMinutes")||Ue("slotMinutes")}function s(){var e,r,a,o,i,s=qe+"-widget-header",l=qe+"-widget-content",f=0==Ue("slotMinutes")%15;for(c(),ce=t("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(n),Ue("allDaySlot")?(ue=t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(ce),e="<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='"+s+" fc-agenda-axis'>"+Ue("allDayText")+"</th>"+"<td>"+"<div class='fc-day-content'><div style='position:relative'/></div>"+"</td>"+"<th class='"+s+" fc-agenda-gutter'>&nbsp;</th>"+"</tr>"+"</table>",de=t(e).appendTo(ce),ve=de.find("tr"),C(ve.find("td")),ce.append("<div class='fc-agenda-divider "+s+"'>"+"<div class='fc-agenda-divider-inner'/>"+"</div>")):ue=t([]),he=t("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(ce),ge=t("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(he),be=t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(ge),e="<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>",r=v(),o=u(d(r),je),u(r,Be),Ae=0,a=0;o>r;a++)i=r.getMinutes(),e+="<tr class='fc-slot"+a+" "+(i?"fc-minor":"")+"'>"+"<th class='fc-agenda-axis "+s+"'>"+(f&&i?"&nbsp;":on(r,Ue("axisFormat")))+"</th>"+"<td class='"+l+"'>"+"<div style='position:relative'>&nbsp;</div>"+"</td>"+"</tr>",u(r,Ue("slotMinutes")),Ae++;e+="</tbody></table>",Ce=t(e).appendTo(ge),M(Ce.find("td"))}function c(){var e=h();K&&K.remove(),K=t(e).appendTo(n),ee=K.find("thead"),ne=ee.find("th").slice(1,-1),re=K.find("tbody"),ae=re.find("td").slice(0,-1),oe=ae.find("> div"),ie=ae.find(".fc-day-content > div"),se=ae.eq(0),le=oe.eq(0),B(ee.add(ee.find("tr"))),B(re.add(re.find("tr")))}function h(){var t="<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>"+g()+p()+"</table>";return t}function g(){var t,e,n,r=qe+"-widget-header",a="";for(a+="<thead><tr>",Xe?(t=nn(0,0),e=on(t,Ve),Ye?e+=Je:e=Je+e,a+="<th class='fc-agenda-axis fc-week-number "+r+"'>"+q(e)+"</th>"):a+="<th class='fc-agenda-axis "+r+"'>&nbsp;</th>",n=0;We>n;n++)t=nn(0,n),a+="<th class='fc-"+ke[t.getDay()]+" fc-col"+n+" "+r+"'>"+q(on(t,Ie))+"</th>";return a+="<th class='fc-agenda-gutter "+r+"'>&nbsp;</th>"+"</tr>"+"</thead>"}function p(){var t,e,n,r,a,o=qe+"-widget-header",i=qe+"-widget-content",s=f(new Date),l="";for(l+="<tbody><tr><th class='fc-agenda-axis "+o+"'>&nbsp;</th>",n="",e=0;We>e;e++)t=nn(0,e),a=["fc-col"+e,"fc-"+ke[t.getDay()],i],+t==+s?a.push(qe+"-state-highlight","fc-today"):s>t?a.push("fc-past"):a.push("fc-future"),r="<td class='"+a.join(" ")+"'>"+"<div>"+"<div class='fc-day-content'>"+"<div style='position:relative'>&nbsp;</div>"+"</div>"+"</div>"+"</td>",n+=r;return l+=n,l+="<td class='fc-agenda-gutter "+i+"'>&nbsp;</td>"+"</tr>"+"</tbody>"}function m(t){t===e&&(t=Se),Se=t,sn={};var n=re.position().top,r=he.position().top,a=Math.min(t-n,Ce.height()+r+1);le.height(a-R(se)),ce.css("top",n),he.height(a-r-1),Fe=Ce.find("tr:first").height()+1,Ne=Ue("slotMinutes")/Re,ze=Fe/Ne}function w(e){Ee=e,_e.clear(),Pe.clear();var n=ee.find("th:first");de&&(n=n.add(de.find("th:first"))),n=n.add(Ce.find("th:first")),Te=0,S(n.width("").each(function(e,n){Te=Math.max(Te,t(n).outerWidth())}),Te);var r=K.find(".fc-agenda-gutter");de&&(r=r.add(de.find("th.fc-agenda-gutter")));var a=he[0].clientWidth;He=he.width()-a,He?(S(r,He),r.show().prev().removeClass("fc-last")):r.hide().prev().addClass("fc-last"),xe=Math.floor((a-Te)/We),S(ne.slice(0,-1),xe)}function b(){function t(){he.scrollTop(r)}var e=v(),n=d(e);n.setHours(Ue("firstHour"));var r=_(e,n)+1;t(),setTimeout(t,0)}function D(){b()}function C(t){t.click(E).mousedown(tn)}function M(t){t.click(E).mousedown(U)}function E(t){if(!Ue("selectable")){var e=Math.min(We-1,Math.floor((t.pageX-K.offset().left-Te)/xe)),n=nn(0,e),r=this.parentNode.className.match(/fc-slot(\d+)/);if(r){var a=parseInt(r[1])*Ue("slotMinutes"),o=Math.floor(a/60);n.setHours(o),n.setMinutes(a%60+Be),Ze("dayClick",ae[e],n,!1,t)}else Ze("dayClick",ae[e],n,!0,t)}}function x(t,e,n){n&&Oe.build();for(var r=an(t,e),a=0;r.length>a;a++){var o=r[a];C(k(o.row,o.leftCol,o.row,o.rightCol))}}function k(t,e,n,r){var a=Oe.rect(t,e,n,r,ce);return Ge(a,ce)}function H(t,e){for(var n=0;We>n;n++){var r=nn(0,n),a=l(d(r),1),o=new Date(Math.max(r,t)),i=new Date(Math.min(a,e));if(i>o){var s=Oe.rect(0,n,0,n,ge),c=_(r,o),u=_(r,i);s.top=c,s.height=u-c,M(Ge(s,ge))}}}function F(t){return _e.left(t)}function N(t){return Pe.left(t)}function z(t){return _e.right(t)}function W(t){return Pe.right(t)}function A(t){return Ue("allDaySlot")&&!t.row}function L(t){var e=nn(0,t.col),n=t.row;return Ue("allDaySlot")&&n--,n>=0&&u(e,Be+n*Re),e}function _(t,n){if(t=d(t,!0),u(d(t),Be)>n)return 0;if(n>=u(d(t),je))return Ce.height();var r=Ue("slotMinutes"),a=60*n.getHours()+n.getMinutes()-Be,o=Math.floor(a/r),i=sn[o];return i===e&&(i=sn[o]=Ce.find("tr").eq(o).find("td div")[0].offsetTop),Math.max(0,Math.round(i-1+Fe*(a%r/r)))}function P(){return ve}function j(t){var e=d(t.start);return t.allDay?e:u(e,Ue("defaultEventMinutes"))}function I(t,e){return e?d(t):u(d(t),Ue("slotMinutes"))}function X(t,e,n){n?Ue("allDaySlot")&&x(t,l(d(e),1),!0):J(t,e)}function J(e,n){var r=Ue("selectHelper");if(Oe.build(),r){var a=rn(e).col;if(a>=0&&We>a){var o=Oe.rect(0,a,0,a,ge),i=_(e,e),s=_(e,n);if(s>i){if(o.top=i,o.height=s-i,o.left+=2,o.width-=5,t.isFunction(r)){var l=r(e,n);l&&(o.position="absolute",Me=t(l).css(o).appendTo(ge))}else o.isStart=!0,o.isEnd=!0,Me=t(en({title:"",start:e,end:n,className:["fc-select-helper"],editable:!1},o)),Me.css("opacity",Ue("dragOpacity"));Me&&(M(Me),ge.append(Me),S(Me,o.width,!0),T(Me,o.height,!0))}}}else H(e,n)}function V(){$e(),Me&&(Me.remove(),Me=null)}function U(e){if(1==e.which&&Ue("selectable")){Ke(e);var n;Le.start(function(t,e){if(V(),t&&t.col==e.col&&!A(t)){var r=L(e),a=L(t);n=[r,u(d(r),Re),a,u(d(a),Re)].sort(O),J(n[0],n[3])}else n=null},e),t(document).one("mouseup",function(t){Le.stop(),n&&(+n[0]==+n[1]&&Z(n[0],!1,t),Qe(n[0],n[3],!1,t))})}}function Z(t,e,n){Ze("dayClick",ae[rn(t).col],t,e,n)}function G(t,e){Le.start(function(t){if($e(),t)if(A(t))k(t.row,t.col,t.row,t.col);else{var e=L(t),n=u(d(e),Ue("defaultEventMinutes"));H(e,n)}},e)}function $(t,e,n){var r=Le.stop();$e(),r&&Ze("drop",t,L(r),A(r),e,n)}var Q=this;Q.renderAgenda=o,Q.setWidth=w,Q.setHeight=m,Q.afterRender=D,Q.defaultEventEnd=j,Q.timePosition=_,Q.getIsCellAllDay=A,Q.allDayRow=P,Q.getCoordinateGrid=function(){return Oe},Q.getHoverListener=function(){return Le},Q.colLeft=F,Q.colRight=z,Q.colContentLeft=N,Q.colContentRight=W,Q.getDaySegmentContainer=function(){return ue},Q.getSlotSegmentContainer=function(){return be},Q.getMinMinute=function(){return Be},Q.getMaxMinute=function(){return je},Q.getSlotContainer=function(){return ge},Q.getRowCnt=function(){return 1},Q.getColCnt=function(){return We},Q.getColWidth=function(){return xe},Q.getSnapHeight=function(){return ze},Q.getSnapMinutes=function(){return Re},Q.defaultSelectionEnd=I,Q.renderDayOverlay=x,Q.renderSelection=X,Q.clearSelection=V,Q.reportDayClick=Z,Q.dragStart=G,Q.dragStop=$,fe.call(Q,n,r,a),me.call(Q),pe.call(Q),te.call(Q);var K,ee,ne,re,ae,oe,ie,se,le,ce,ue,de,ve,he,ge,be,Ce,Me,Ee,Se,Te,xe,He,Fe,Re,Ne,ze,We,Ae,Oe,Le,_e,Pe,qe,Ye,Be,je,Ie,Xe,Je,Ve,Ue=Q.opt,Ze=Q.trigger,Ge=Q.renderOverlay,$e=Q.clearOverlays,Qe=Q.reportSelection,Ke=Q.unselect,tn=Q.daySelectionMousedown,en=Q.slotSegHtml,nn=Q.cellToDate,rn=Q.dateToCell,an=Q.rangeToSegments,on=r.formatDate,sn={};Y(n.addClass("fc-agenda")),Oe=new ye(function(e,n){function r(t){return Math.max(l,Math.min(c,t))}var a,o,i;ne.each(function(e,r){a=t(r),o=a.offset().left,e&&(i[1]=o),i=[o],n[e]=i}),i[1]=o+a.outerWidth(),Ue("allDaySlot")&&(a=ve,o=a.offset().top,e[0]=[o,o+a.outerHeight()]);for(var s=ge.offset().top,l=he.offset().top,c=l+he.outerHeight(),u=0;Ae*Ne>u;u++)e.push([r(s+ze*u),r(s+ze*(u+1))])}),Le=new we(Oe),_e=new De(function(t){return oe.eq(t)}),Pe=new De(function(t){return ie.eq(t)})}function te(){function n(t,e){var n,r=t.length,o=[],i=[];for(n=0;r>n;n++)t[n].allDay?o.push(t[n]):i.push(t[n]);y("allDaySlot")&&(te(o,e),k()),s(a(i),e)}function r(){H().empty(),F().empty()}function a(e){var n,r,a,s,l,c=Y(),f=W(),v=z(),h=t.map(e,i),g=[];for(r=0;c>r;r++)for(n=P(0,r),u(n,f),l=o(e,h,n,u(d(n),v-f)),l=ee(l),a=0;l.length>a;a++)s=l[a],s.col=r,g.push(s);return g}function o(t,e,n,r){var a,o,i,s,l,c,u,f,v=[],h=t.length;for(a=0;h>a;a++)o=t[a],i=o.start,s=e[a],s>n&&r>i&&(n>i?(l=d(n),u=!1):(l=i,u=!0),s>r?(c=d(r),f=!1):(c=s,f=!0),v.push({event:o,start:l,end:c,isStart:u,isEnd:f}));return v.sort(ue)}function i(t){return t.end?d(t.end):u(d(t.start),y("defaultEventMinutes"))}function s(n,r){var a,o,i,s,l,u,d,v,h,g,p,m,b,D,C,M,S=n.length,T="",k=F(),H=y("isRTL");for(a=0;S>a;a++)o=n[a],i=o.event,s=A(o.start,o.start),l=A(o.start,o.end),u=L(o.col),d=_(o.col),v=d-u,d-=.025*v,v=d-u,h=v*(o.forwardCoord-o.backwardCoord),y("slotEventOverlap")&&(h=Math.max(2*(h-10),h)),H?(p=d-o.backwardCoord*v,g=p-h):(g=u+o.backwardCoord*v,p=g+h),g=Math.max(g,u),p=Math.min(p,d),h=p-g,o.top=s,o.left=g,o.outerWidth=h,o.outerHeight=l-s,T+=c(i,o);for(k[0].innerHTML=T,m=k.children(),a=0;S>a;a++)o=n[a],i=o.event,b=t(m[a]),D=w("eventRender",i,i,b),D===!1?b.remove():(D&&D!==!0&&(b.remove(),b=t(D).css({position:"absolute",top:o.top,left:o.left}).appendTo(k)),o.element=b,i._id===r?f(i,b,o):b[0]._fci=a,V(i,b));for(E(k,n,f),a=0;S>a;a++)o=n[a],(b=o.element)&&(o.vsides=R(b,!0),o.hsides=x(b,!0),C=b.find(".fc-event-title"),C.length&&(o.contentTop=C[0].offsetTop));for(a=0;S>a;a++)o=n[a],(b=o.element)&&(b[0].style.width=Math.max(0,o.outerWidth-o.hsides)+"px",M=Math.max(0,o.outerHeight-o.vsides),b[0].style.height=M+"px",i=o.event,o.contentTop!==e&&10>M-o.contentTop&&(b.find("div.fc-event-time").text(re(i.start,y("timeFormat"))+" - "+i.title),b.find("div.fc-event-title").remove()),w("eventAfterRender",i,i,b))}function c(t,e){var n="<",r=t.url,a=j(t,y),o=["fc-event","fc-event-vert"];return b(t)&&o.push("fc-event-draggable"),e.isStart&&o.push("fc-event-start"),e.isEnd&&o.push("fc-event-end"),o=o.concat(t.className),t.source&&(o=o.concat(t.source.className||[])),n+=r?"a href='"+q(t.url)+"'":"div",n+=" class='"+o.join(" ")+"'"+" style="+"'"+"position:absolute;"+"top:"+e.top+"px;"+"left:"+e.left+"px;"+a+"'"+">"+"<div class='fc-event-inner'>"+"<div class='fc-event-time'>"+q(ae(t.start,t.end,y("timeFormat")))+"</div>"+"<div class='fc-event-title'>"+q(t.title||"")+"</div>"+"</div>"+"<div class='fc-event-bg'></div>",e.isEnd&&D(t)&&(n+="<div class='ui-resizable-handle ui-resizable-s'>=</div>"),n+="</"+(r?"a":"div")+">"}function f(t,e,n){var r=e.find("div.fc-event-time");b(t)&&g(t,e,r),n.isEnd&&D(t)&&p(t,e,r),S(t,e)}function v(t,e,n){function r(){c||(e.width(a).height("").draggable("option","grid",null),c=!0)}var a,o,i,s=n.isStart,c=!0,u=N(),f=B(),v=I(),g=X(),p=W();e.draggable({opacity:y("dragOpacity","month"),revertDuration:y("dragRevertDuration"),start:function(n,p){w("eventDragStart",e,t,n,p),Z(t,e),a=e.width(),u.start(function(n,a){if(K(),n){o=!1;var u=P(0,a.col),p=P(0,n.col);i=h(p,u),n.row?s?c&&(e.width(f-10),T(e,v*Math.round((t.end?(t.end-t.start)/Re:y("defaultEventMinutes"))/g)),e.draggable("option","grid",[f,1]),c=!1):o=!0:(Q(l(d(t.start),i),l(C(t),i)),r()),o=o||c&&!i
}else r(),o=!0;e.draggable("option","revert",o)},n,"drag")},stop:function(n,a){if(u.stop(),K(),w("eventDragStop",e,t,n,a),o)r(),e.css("filter",""),U(t,e);else{var s=0;c||(s=Math.round((e.offset().top-J().offset().top)/v)*g+p-(60*t.start.getHours()+t.start.getMinutes())),G(this,t,i,s,c,n,a)}}})}function g(t,e,n){function r(){K(),s&&(f?(n.hide(),e.draggable("option","grid",null),Q(l(d(t.start),b),l(C(t),b))):(a(D),n.css("display",""),e.draggable("option","grid",[T,x])))}function a(e){var r,a=u(d(t.start),e);t.end&&(r=u(d(t.end),e)),n.text(ae(a,r,y("timeFormat")))}var o,i,s,c,f,v,g,p,b,D,M,E=m.getCoordinateGrid(),S=Y(),T=B(),x=I(),k=X();e.draggable({scroll:!1,grid:[T,x],axis:1==S?"y":!1,opacity:y("dragOpacity"),revertDuration:y("dragRevertDuration"),start:function(n,r){w("eventDragStart",e,t,n,r),Z(t,e),E.build(),o=e.position(),i=E.cell(n.pageX,n.pageY),s=c=!0,f=v=O(i),g=p=0,b=0,D=M=0},drag:function(t,n){var a=E.cell(t.pageX,t.pageY);if(s=!!a){if(f=O(a),g=Math.round((n.position.left-o.left)/T),g!=p){var l=P(0,i.col),u=i.col+g;u=Math.max(0,u),u=Math.min(S-1,u);var d=P(0,u);b=h(d,l)}f||(D=Math.round((n.position.top-o.top)/x)*k)}(s!=c||f!=v||g!=p||D!=M)&&(r(),c=s,v=f,p=g,M=D),e.draggable("option","revert",!s)},stop:function(n,a){K(),w("eventDragStop",e,t,n,a),s&&(f||b||D)?G(this,t,b,f?0:D,f,n,a):(s=!0,f=!1,g=0,b=0,D=0,r(),e.css("filter",""),e.css(o),U(t,e))}})}function p(t,e,n){var r,a,o=I(),i=X();e.resizable({handles:{s:".ui-resizable-handle"},grid:o,start:function(n,o){r=a=0,Z(t,e),w("eventResizeStart",this,t,n,o)},resize:function(s,l){r=Math.round((Math.max(o,e.height())-l.originalSize.height)/o),r!=a&&(n.text(ae(t.start,r||t.end?u(M(t),i*r):null,y("timeFormat"))),a=r)},stop:function(n,a){w("eventResizeStop",this,t,n,a),r?$(this,t,0,i*r,n,a):U(t,e)}})}var m=this;m.renderEvents=n,m.clearEvents=r,m.slotSegHtml=c,de.call(m);var y=m.opt,w=m.trigger,b=m.isEventDraggable,D=m.isEventResizable,M=m.eventEnd,S=m.eventElementHandlers,k=m.setHeight,H=m.getDaySegmentContainer,F=m.getSlotSegmentContainer,N=m.getHoverListener,z=m.getMaxMinute,W=m.getMinMinute,A=m.timePosition,O=m.getIsCellAllDay,L=m.colContentLeft,_=m.colContentRight,P=m.cellToDate,Y=m.getColCnt,B=m.getColWidth,I=m.getSnapHeight,X=m.getSnapMinutes,J=m.getSlotContainer,V=m.reportEventElement,U=m.showEvents,Z=m.hideEvents,G=m.eventDrop,$=m.eventResize,Q=m.renderDayOverlay,K=m.clearOverlays,te=m.renderDayEvents,ne=m.calendar,re=ne.formatDate,ae=ne.formatDates;m.draggableDayEvent=v}function ee(t){var e,n=ne(t),r=n[0];if(re(n),r){for(e=0;r.length>e;e++)ae(r[e]);for(e=0;r.length>e;e++)oe(r[e],0,0)}return ie(n)}function ne(t){var e,n,r,a=[];for(e=0;t.length>e;e++){for(n=t[e],r=0;a.length>r&&se(n,a[r]).length;r++);(a[r]||(a[r]=[])).push(n)}return a}function re(t){var e,n,r,a,o;for(e=0;t.length>e;e++)for(n=t[e],r=0;n.length>r;r++)for(a=n[r],a.forwardSegs=[],o=e+1;t.length>o;o++)se(a,t[o],a.forwardSegs)}function ae(t){var n,r,a=t.forwardSegs,o=0;if(t.forwardPressure===e){for(n=0;a.length>n;n++)r=a[n],ae(r),o=Math.max(o,1+r.forwardPressure);t.forwardPressure=o}}function oe(t,n,r){var a,o=t.forwardSegs;if(t.forwardCoord===e)for(o.length?(o.sort(ce),oe(o[0],n+1,r),t.forwardCoord=o[0].backwardCoord):t.forwardCoord=1,t.backwardCoord=t.forwardCoord-(t.forwardCoord-r)/(n+1),a=0;o.length>a;a++)oe(o[a],0,t.forwardCoord)}function ie(t){var e,n,r,a=[];for(e=0;t.length>e;e++)for(n=t[e],r=0;n.length>r;r++)a.push(n[r]);return a}function se(t,e,n){n=n||[];for(var r=0;e.length>r;r++)le(t,e[r])&&n.push(e[r]);return n}function le(t,e){return t.end>e.start&&t.start<e.end}function ce(t,e){return e.forwardPressure-t.forwardPressure||(t.backwardCoord||0)-(e.backwardCoord||0)||ue(t,e)}function ue(t,e){return t.start-e.start||e.end-e.start-(t.end-t.start)||(t.event.title||"").localeCompare(e.event.title)}function fe(n,r,a){function o(e,n){var r=V[e];return t.isPlainObject(r)?P(r,n||a):r}function i(t,e){return r.trigger.apply(r,[t,e||_].concat(Array.prototype.slice.call(arguments,2),[_]))}function s(t){var e=t.source||{};return X(t.startEditable,e.startEditable,o("eventStartEditable"),t.editable,e.editable,o("editable"))&&!o("disableDragging")}function c(t){var e=t.source||{};return X(t.durationEditable,e.durationEditable,o("eventDurationEditable"),t.editable,e.editable,o("editable"))&&!o("disableResizing")}function f(t){j={};var e,n,r=t.length;for(e=0;r>e;e++)n=t[e],j[n._id]?j[n._id].push(n):j[n._id]=[n]}function v(){j={},I={},J=[]}function g(t){return t.end?d(t.end):q(t)}function p(t,e){J.push({event:t,element:e}),I[t._id]?I[t._id].push(e):I[t._id]=[e]}function m(){t.each(J,function(t,e){_.trigger("eventDestroy",e.event,e.event,e.element)})}function y(t,n){n.click(function(r){return n.hasClass("ui-draggable-dragging")||n.hasClass("ui-resizable-resizing")?e:i("eventClick",this,t,r)}).hover(function(e){i("eventMouseover",this,t,e)},function(e){i("eventMouseout",this,t,e)})}function w(t,e){D(t,e,"show")}function b(t,e){D(t,e,"hide")}function D(t,e,n){var r,a=I[t._id],o=a.length;for(r=0;o>r;r++)e&&a[r][0]==e[0]||a[r][n]()}function C(t,e,n,r,a,o,s){var l=e.allDay,c=e._id;E(j[c],n,r,a),i("eventDrop",t,e,n,r,a,function(){E(j[c],-n,-r,l),B(c)},o,s),B(c)}function M(t,e,n,r,a,o){var s=e._id;S(j[s],n,r),i("eventResize",t,e,n,r,function(){S(j[s],-n,-r),B(s)},a,o),B(s)}function E(t,n,r,a){r=r||0;for(var o,i=t.length,s=0;i>s;s++)o=t[s],a!==e&&(o.allDay=a),u(l(o.start,n,!0),r),o.end&&(o.end=u(l(o.end,n,!0),r)),Y(o,V)}function S(t,e,n){n=n||0;for(var r,a=t.length,o=0;a>o;o++)r=t[o],r.end=u(l(g(r),e,!0),n),Y(r,V)}function T(t){return"object"==typeof t&&(t=t.getDay()),G[t]}function x(){return U}function k(t,e,n){for(e=e||1;G[(t.getDay()+(n?e:0)+7)%7];)l(t,e)}function H(){var t=F.apply(null,arguments),e=R(t),n=N(e);return n}function F(t,e){var n=_.getColCnt(),r=K?-1:1,a=K?n-1:0;"object"==typeof t&&(e=t.col,t=t.row);var o=t*n+(e*r+a);return o}function R(t){var e=_.visStart.getDay();return t+=$[e],7*Math.floor(t/U)+Q[(t%U+U)%U]-e}function N(t){var e=d(_.visStart);return l(e,t),e}function z(t){var e=W(t),n=A(e),r=O(n);return r}function W(t){return h(t,_.visStart)}function A(t){var e=_.visStart.getDay();return t+=e,Math.floor(t/7)*U+$[(t%7+7)%7]-$[e]}function O(t){var e=_.getColCnt(),n=K?-1:1,r=K?e-1:0,a=Math.floor(t/e),o=(t%e+e)%e*n+r;return{row:a,col:o}}function L(t,e){for(var n=_.getRowCnt(),r=_.getColCnt(),a=[],o=W(t),i=W(e),s=A(o),l=A(i)-1,c=0;n>c;c++){var u=c*r,f=u+r-1,d=Math.max(s,u),v=Math.min(l,f);if(v>=d){var h=O(d),g=O(v),p=[h.col,g.col].sort(),m=R(d)==o,y=R(v)+1==i;a.push({row:c,leftCol:p[0],rightCol:p[1],isStart:m,isEnd:y})}}return a}var _=this;_.element=n,_.calendar=r,_.name=a,_.opt=o,_.trigger=i,_.isEventDraggable=s,_.isEventResizable=c,_.setEventData=f,_.clearEventData=v,_.eventEnd=g,_.reportEventElement=p,_.triggerEventDestroy=m,_.eventElementHandlers=y,_.showEvents=w,_.hideEvents=b,_.eventDrop=C,_.eventResize=M;var q=_.defaultEventEnd,Y=r.normalizeEvent,B=r.reportEventChange,j={},I={},J=[],V=r.options;_.isHiddenDay=T,_.skipHiddenDays=k,_.getCellsPerWeek=x,_.dateToCell=z,_.dateToDayOffset=W,_.dayOffsetToCellOffset=A,_.cellOffsetToCell=O,_.cellToDate=H,_.cellToCellOffset=F,_.cellOffsetToDayOffset=R,_.dayOffsetToDate=N,_.rangeToSegments=L;var U,Z=o("hiddenDays")||[],G=[],$=[],Q=[],K=o("isRTL");(function(){o("weekends")===!1&&Z.push(0,6);for(var e=0,n=0;7>e;e++)$[e]=n,G[e]=-1!=t.inArray(e,Z),G[e]||(Q[n]=e,n++);if(U=n,!U)throw"invalid hiddenDays"})()}function de(){function e(t,e){var n=r(t,!1,!0);he(n,function(t,e){N(t.event,e)}),w(n,e),he(n,function(t,e){k("eventAfterRender",t.event,t.event,e)})}function n(t,e,n){var a=r([t],!0,!1),o=[];return he(a,function(t,r){t.row===e&&r.css("top",n),o.push(r[0])}),o}function r(e,n,r){var o,l,c=Z(),d=n?t("<div/>"):c,v=a(e);return i(v),o=s(v),d[0].innerHTML=o,l=d.children(),n&&c.append(l),u(v,l),he(v,function(t,e){t.hsides=x(e,!0)}),he(v,function(t,e){e.width(Math.max(0,t.outerWidth-t.hsides))}),he(v,function(t,e){t.outerHeight=e.outerHeight(!0)}),f(v,r),v}function a(t){for(var e=[],n=0;t.length>n;n++){var r=o(t[n]);e.push.apply(e,r)}return e}function o(t){for(var e=t.start,n=C(t),r=ee(e,n),a=0;r.length>a;a++)r[a].event=t;return r}function i(t){for(var e=T("isRTL"),n=0;t.length>n;n++){var r=t[n],a=(e?r.isEnd:r.isStart)?V:X,o=(e?r.isStart:r.isEnd)?U:J,i=a(r.leftCol),s=o(r.rightCol);r.left=i,r.outerWidth=s-i}}function s(t){for(var e="",n=0;t.length>n;n++)e+=c(t[n]);return e}function c(t){var e="",n=T("isRTL"),r=t.event,a=r.url,o=["fc-event","fc-event-hori"];H(r)&&o.push("fc-event-draggable"),t.isStart&&o.push("fc-event-start"),t.isEnd&&o.push("fc-event-end"),o=o.concat(r.className),r.source&&(o=o.concat(r.source.className||[]));var i=j(r,T);return e+=a?"<a href='"+q(a)+"'":"<div",e+=" class='"+o.join(" ")+"'"+" style="+"'"+"position:absolute;"+"left:"+t.left+"px;"+i+"'"+">"+"<div class='fc-event-inner'>",!r.allDay&&t.isStart&&(e+="<span class='fc-event-time'>"+q(G(r.start,r.end,T("timeFormat")))+"</span>"),e+="<span class='fc-event-title'>"+q(r.title||"")+"</span>"+"</div>",t.isEnd&&F(r)&&(e+="<div class='ui-resizable-handle ui-resizable-"+(n?"w":"e")+"'>"+"&nbsp;&nbsp;&nbsp;"+"</div>"),e+="</"+(a?"a":"div")+">"}function u(e,n){for(var r=0;e.length>r;r++){var a=e[r],o=a.event,i=n.eq(r),s=k("eventRender",o,o,i);s===!1?i.remove():(s&&s!==!0&&(s=t(s).css({position:"absolute",left:a.left}),i.replaceWith(s),i=s),a.element=i)}}function f(t,e){var n=v(t),r=y(),a=[];if(e)for(var o=0;r.length>o;o++)r[o].height(n[o]);for(var o=0;r.length>o;o++)a.push(r[o].position().top);he(t,function(t,e){e.css("top",a[t.row]+t.top)})}function v(t){for(var e=P(),n=B(),r=[],a=g(t),o=0;e>o;o++){for(var i=a[o],s=[],l=0;n>l;l++)s.push(0);for(var c=0;i.length>c;c++){var u=i[c];u.top=L(s.slice(u.leftCol,u.rightCol+1));for(var l=u.leftCol;u.rightCol>=l;l++)s[l]=u.top+u.outerHeight}r.push(L(s))}return r}function g(t){var e,n,r,a=P(),o=[];for(e=0;t.length>e;e++)n=t[e],r=n.row,n.element&&(o[r]?o[r].push(n):o[r]=[n]);for(r=0;a>r;r++)o[r]=p(o[r]||[]);return o}function p(t){for(var e=[],n=m(t),r=0;n.length>r;r++)e.push.apply(e,n[r]);return e}function m(t){t.sort(ge);for(var e=[],n=0;t.length>n;n++){for(var r=t[n],a=0;e.length>a&&ve(r,e[a]);a++);e[a]?e[a].push(r):e[a]=[r]}return e}function y(){var t,e=P(),n=[];for(t=0;e>t;t++)n[t]=I(t).find("div.fc-day-content > div");return n}function w(t,e){var n=Z();he(t,function(t,n,r){var a=t.event;a._id===e?b(a,n,t):n[0]._fci=r}),E(n,t,b)}function b(t,e,n){H(t)&&S.draggableDayEvent(t,e,n),n.isEnd&&F(t)&&S.resizableDayEvent(t,e,n),z(t,e)}function D(t,e){var n,r=te();e.draggable({delay:50,opacity:T("dragOpacity"),revertDuration:T("dragRevertDuration"),start:function(a,o){k("eventDragStart",e,t,a,o),A(t,e),r.start(function(r,a,o,i){if(e.draggable("option","revert",!r||!o&&!i),Q(),r){var s=ne(a),c=ne(r);n=h(c,s),$(l(d(t.start),n),l(C(t),n))}else n=0},a,"drag")},stop:function(a,o){r.stop(),Q(),k("eventDragStop",e,t,a,o),n?O(this,t,n,0,t.allDay,a,o):(e.css("filter",""),W(t,e))}})}function M(e,r,a){var o=T("isRTL"),i=o?"w":"e",s=r.find(".ui-resizable-"+i),c=!1;Y(r),r.mousedown(function(t){t.preventDefault()}).click(function(t){c&&(t.preventDefault(),t.stopImmediatePropagation())}),s.mousedown(function(o){function s(n){k("eventResizeStop",this,e,n),t("body").css("cursor",""),u.stop(),Q(),f&&_(this,e,f,0,n),setTimeout(function(){c=!1},0)}if(1==o.which){c=!0;var u=te();P(),B();var f,d,v=r.css("top"),h=t.extend({},e),g=ie(oe(e.start));K(),t("body").css("cursor",i+"-resize").one("mouseup",s),k("eventResizeStart",this,e,o),u.start(function(r,o){if(r){var s=re(o),c=re(r);if(c=Math.max(c,g),f=ae(c)-ae(s)){h.end=l(R(e),f,!0);var u=d;d=n(h,a.row,v),d=t(d),d.find("*").css("cursor",i+"-resize"),u&&u.remove(),A(e)}else d&&(W(e),d.remove(),d=null);Q(),$(e.start,l(C(e),f))}},o)}})}var S=this;S.renderDayEvents=e,S.draggableDayEvent=D,S.resizableDayEvent=M;var T=S.opt,k=S.trigger,H=S.isEventDraggable,F=S.isEventResizable,R=S.eventEnd,N=S.reportEventElement,z=S.eventElementHandlers,W=S.showEvents,A=S.hideEvents,O=S.eventDrop,_=S.eventResize,P=S.getRowCnt,B=S.getColCnt;S.getColWidth;var I=S.allDayRow,X=S.colLeft,J=S.colRight,V=S.colContentLeft,U=S.colContentRight;S.dateToCell;var Z=S.getDaySegmentContainer,G=S.calendar.formatDates,$=S.renderDayOverlay,Q=S.clearOverlays,K=S.clearSelection,te=S.getHoverListener,ee=S.rangeToSegments,ne=S.cellToDate,re=S.cellToCellOffset,ae=S.cellOffsetToDayOffset,oe=S.dateToDayOffset,ie=S.dayOffsetToCellOffset}function ve(t,e){for(var n=0;e.length>n;n++){var r=e[n];if(r.leftCol<=t.rightCol&&r.rightCol>=t.leftCol)return!0}return!1}function he(t,e){for(var n=0;t.length>n;n++){var r=t[n],a=r.element;a&&e(r,a,n)}}function ge(t,e){return e.rightCol-e.leftCol-(t.rightCol-t.leftCol)||e.event.allDay-t.event.allDay||t.event.start-e.event.start||(t.event.title||"").localeCompare(e.event.title)}function pe(){function e(t,e,a){n(),e||(e=l(t,a)),c(t,e,a),r(t,e,a)}function n(t){f&&(f=!1,u(),s("unselect",null,t))}function r(t,e,n,r){f=!0,s("select",null,t,e,n,r)}function a(e){var a=o.cellToDate,s=o.getIsCellAllDay,l=o.getHoverListener(),f=o.reportDayClick;if(1==e.which&&i("selectable")){n(e);var d;l.start(function(t,e){u(),t&&s(t)?(d=[a(e),a(t)].sort(O),c(d[0],d[1],!0)):d=null},e),t(document).one("mouseup",function(t){l.stop(),d&&(+d[0]==+d[1]&&f(d[0],!0,t),r(d[0],d[1],!0,t))})}}var o=this;o.select=e,o.unselect=n,o.reportSelection=r,o.daySelectionMousedown=a;var i=o.opt,s=o.trigger,l=o.defaultSelectionEnd,c=o.renderSelection,u=o.clearSelection,f=!1;i("selectable")&&i("unselectAuto")&&t(document).mousedown(function(e){var r=i("unselectCancel");r&&t(e.target).parents(r).length||n(e)})}function me(){function e(e,n){var r=o.shift();return r||(r=t("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")),r[0].parentNode!=n[0]&&r.appendTo(n),a.push(r.css(e).show()),r}function n(){for(var t;t=a.shift();)o.push(t.hide().unbind())}var r=this;r.renderOverlay=e,r.clearOverlays=n;var a=[],o=[]}function ye(t){var e,n,r=this;r.build=function(){e=[],n=[],t(e,n)},r.cell=function(t,r){var a,o=e.length,i=n.length,s=-1,l=-1;for(a=0;o>a;a++)if(r>=e[a][0]&&e[a][1]>r){s=a;break}for(a=0;i>a;a++)if(t>=n[a][0]&&n[a][1]>t){l=a;break}return s>=0&&l>=0?{row:s,col:l}:null},r.rect=function(t,r,a,o,i){var s=i.offset();return{top:e[t][0]-s.top,left:n[r][0]-s.left,width:n[o][1]-n[r][0],height:e[a][1]-e[t][0]}}}function we(e){function n(t){be(t);var n=e.cell(t.pageX,t.pageY);(!n!=!i||n&&(n.row!=i.row||n.col!=i.col))&&(n?(o||(o=n),a(n,o,n.row-o.row,n.col-o.col)):a(n,o),i=n)}var r,a,o,i,s=this;s.start=function(s,l,c){a=s,o=i=null,e.build(),n(l),r=c||"mousemove",t(document).bind(r,n)},s.stop=function(){return t(document).unbind(r,n),i}}function be(t){t.pageX===e&&(t.pageX=t.originalEvent.pageX,t.pageY=t.originalEvent.pageY)}function De(t){function n(e){return a[e]=a[e]||t(e)}var r=this,a={},o={},i={};r.left=function(t){return o[t]=o[t]===e?n(t).position().left:o[t]},r.right=function(t){return i[t]=i[t]===e?r.left(t)+n(t).width():i[t]},r.clear=function(){a={},o={},i={}}}var Ce={defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberCalculation:"iso",weekNumberTitle:"W",allDayDefault:!0,ignoreTimezone:!0,lazyFetching:!0,startParam:"start",endParam:"end",titleFormat:{month:"MMMM yyyy",week:"MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",day:"dddd, MMM d, yyyy"},columnFormat:{month:"ddd",week:"ddd M/d",day:"dddd M/d"},timeFormat:{"":"h(:mm)t"},isRTL:!1,firstDay:0,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],buttonText:{prev:"<span class='fc-text-arrow'>&lsaquo;</span>",next:"<span class='fc-text-arrow'>&rsaquo;</span>",prevYear:"<span class='fc-text-arrow'>&laquo;</span>",nextYear:"<span class='fc-text-arrow'>&raquo;</span>",today:"today",month:"month",week:"week",day:"day"},theme:!1,buttonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e"},unselectAuto:!0,dropAccept:"*",handleWindowResize:!0},Me={header:{left:"next,prev today",center:"",right:"title"},buttonText:{prev:"<span class='fc-text-arrow'>&rsaquo;</span>",next:"<span class='fc-text-arrow'>&lsaquo;</span>",prevYear:"<span class='fc-text-arrow'>&raquo;</span>",nextYear:"<span class='fc-text-arrow'>&laquo;</span>"},buttonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w"}},Ee=t.fullCalendar={version:"1.6.4"},Se=Ee.views={};t.fn.fullCalendar=function(n){if("string"==typeof n){var a,o=Array.prototype.slice.call(arguments,1);return this.each(function(){var r=t.data(this,"fullCalendar");if(r&&t.isFunction(r[n])){var i=r[n].apply(r,o);a===e&&(a=i),"destroy"==n&&t.removeData(this,"fullCalendar")}}),a!==e?a:this}n=n||{};var i=n.eventSources||[];return delete n.eventSources,n.events&&(i.push(n.events),delete n.events),n=t.extend(!0,{},Ce,n.isRTL||n.isRTL===e&&Ce.isRTL?Me:{},n),this.each(function(e,a){var o=t(a),s=new r(o,n,i);o.data("fullCalendar",s),s.render()}),this},Ee.sourceNormalizers=[],Ee.sourceFetchers=[];var Te={dataType:"json",cache:!1},xe=1;Ee.addDays=l,Ee.cloneDate=d,Ee.parseDate=p,Ee.parseISO8601=m,Ee.parseTime=y,Ee.formatDate=w,Ee.formatDates=b;var ke=["sun","mon","tue","wed","thu","fri","sat"],He=864e5,Fe=36e5,Re=6e4,Ne={s:function(t){return t.getSeconds()},ss:function(t){return _(t.getSeconds())},m:function(t){return t.getMinutes()},mm:function(t){return _(t.getMinutes())},h:function(t){return t.getHours()%12||12},hh:function(t){return _(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return _(t.getHours())},d:function(t){return t.getDate()},dd:function(t){return _(t.getDate())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return _(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},yy:function(t){return(t.getFullYear()+"").substring(2)},yyyy:function(t){return t.getFullYear()},t:function(t){return 12>t.getHours()?"a":"p"},tt:function(t){return 12>t.getHours()?"am":"pm"},T:function(t){return 12>t.getHours()?"A":"P"},TT:function(t){return 12>t.getHours()?"AM":"PM"},u:function(t){return w(t,"yyyy-MM-dd'T'HH:mm:ss'Z'")},S:function(t){var e=t.getDate();return e>10&&20>e?"th":["st","nd","rd"][e%10-1]||"th"},w:function(t,e){return e.weekNumberCalculation(t)},W:function(t){return D(t)}};Ee.dateFormatters=Ne,Ee.applyAll=I,Se.month=J,Se.basicWeek=V,Se.basicDay=U,n({weekMode:"fixed"}),Se.agendaWeek=$,Se.agendaDay=Q,n({allDaySlot:!0,allDayText:"all-day",firstHour:6,slotMinutes:30,defaultEventMinutes:120,axisFormat:"h(:mm)tt",timeFormat:{agenda:"h:mm{ - h:mm}"},dragOpacity:{agenda:.5},minTime:0,maxTime:24,slotEventOverlap:!0})})(jQuery);
/*--------------*/
//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//# sourceMappingURL=underscore-min.map
/*--------------*/
/*
    http://www.JSON.org/json2.js
    2009-09-29

    Public Domain.

    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.

    See http://www.JSON.org/js.html


    This code should be minified before deployment.
    See http://javascript.crockford.com/jsmin.html

    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO
    NOT CONTROL.


    This file creates a global JSON object containing two methods: stringify
    and parse.

        JSON.stringify(value, replacer, space)
            value       any JavaScript value, usually an object or array.

            replacer    an optional parameter that determines how object
                        values are stringified for objects. It can be a
                        function or an array of strings.

            space       an optional parameter that specifies the indentation
                        of nested structures. If it is omitted, the text will
                        be packed without extra whitespace. If it is a number,
                        it will specify the number of spaces to indent at each
                        level. If it is a string (such as '\t' or '&nbsp;'),
                        it contains the characters used to indent at each level.

            This method produces a JSON text from a JavaScript value.

            When an object value is found, if the object contains a toJSON
            method, its toJSON method will be called and the result will be
            stringified. A toJSON method does not serialize: it returns the
            value represented by the name/value pair that should be serialized,
            or undefined if nothing should be serialized. The toJSON method
            will be passed the key associated with the value, and this will be
            bound to the value

            For example, this would serialize Dates as ISO strings.

                Date.prototype.toJSON = function (key) {
                    function f(n) {
                        // Format integers to have at least two digits.
                        return n < 10 ? '0' + n : n;
                    }

                    return this.getUTCFullYear()   + '-' +
                         f(this.getUTCMonth() + 1) + '-' +
                         f(this.getUTCDate())      + 'T' +
                         f(this.getUTCHours())     + ':' +
                         f(this.getUTCMinutes())   + ':' +
                         f(this.getUTCSeconds())   + 'Z';
                };

            You can provide an optional replacer method. It will be passed the
            key and value of each member, with this bound to the containing
            object. The value that is returned from your method will be
            serialized. If your method returns undefined, then the member will
            be excluded from the serialization.

            If the replacer parameter is an array of strings, then it will be
            used to select the members to be serialized. It filters the results
            such that only members with keys listed in the replacer array are
            stringified.

            Values that do not have JSON representations, such as undefined or
            functions, will not be serialized. Such values in objects will be
            dropped; in arrays they will be replaced with null. You can use
            a replacer function to replace those with JSON values.
            JSON.stringify(undefined) returns undefined.

            The optional space parameter produces a stringification of the
            value that is filled with line breaks and indentation to make it
            easier to read.

            If the space parameter is a non-empty string, then that string will
            be used for indentation. If the space parameter is a number, then
            the indentation will be that many spaces.

            Example:

            text = JSON.stringify(['e', {pluribus: 'unum'}]);
            // text is '["e",{"pluribus":"unum"}]'


            text = JSON.stringify(['e', {pluribus: 'unum'}], null, '\t');
            // text is '[\n\t"e",\n\t{\n\t\t"pluribus": "unum"\n\t}\n]'

            text = JSON.stringify([new Date()], function (key, value) {
                return this[key] instanceof Date ?
                    'Date(' + this[key] + ')' : value;
            });
            // text is '["Date(---current time---)"]'


        JSON.parse(text, reviver)
            This method parses a JSON text to produce an object or array.
            It can throw a SyntaxError exception.

            The optional reviver parameter is a function that can filter and
            transform the results. It receives each of the keys and values,
            and its return value is used instead of the original value.
            If it returns what it received, then the structure is not modified.
            If it returns undefined then the member is deleted.

            Example:

            // Parse the text. Values that look like ISO date strings will
            // be converted to Date objects.

            myData = JSON.parse(text, function (key, value) {
                var a;
                if (typeof value === 'string') {
                    a =
/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
                    if (a) {
                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],
                            +a[5], +a[6]));
                    }
                }
                return value;
            });

            myData = JSON.parse('["Date(09/09/2001)"]', function (key, value) {
                var d;
                if (typeof value === 'string' &&
                        value.slice(0, 5) === 'Date(' &&
                        value.slice(-1) === ')') {
                    d = new Date(value.slice(5, -1));
                    if (d) {
                        return d;
                    }
                }
                return value;
            });


    This is a reference implementation. You are free to copy, modify, or
    redistribute.
*/

/*jslint evil: true, strict: false */

/*members "", "\b", "\t", "\n", "\f", "\r", "\"", JSON, "\\", apply,
    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,
    lastIndex, length, parse, prototype, push, replace, slice, stringify,
    test, toJSON, toString, valueOf
*/


// Create a JSON object only if one does not already exist. We create the
// methods in a closure to avoid creating global variables.

if (!this.JSON) {
    this.JSON = {};
}

(function () {

    function f(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    if (typeof Date.prototype.toJSON !== 'function') {

        Date.prototype.toJSON = function (key) {

            return isFinite(this.valueOf()) ?
                   this.getUTCFullYear()   + '-' +
                 f(this.getUTCMonth() + 1) + '-' +
                 f(this.getUTCDate())      + 'T' +
                 f(this.getUTCHours())     + ':' +
                 f(this.getUTCMinutes())   + ':' +
                 f(this.getUTCSeconds())   + 'Z' : null;
        };

        String.prototype.toJSON =
        Number.prototype.toJSON =
        Boolean.prototype.toJSON = function (key) {
            return this.valueOf();
        };
    }

    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        gap,
        indent,
        meta = {    // table of character substitutions
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"' : '\\"',
            '\\': '\\\\'
        },
        rep;


    function quote(string) {

// If the string contains no control characters, no quote characters, and no
// backslash characters, then we can safely slap some quotes around it.
// Otherwise we must also replace the offending characters with safe escape
// sequences.

        escapable.lastIndex = 0;
        return escapable.test(string) ?
            '"' + string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string' ? c :
                    '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            }) + '"' :
            '"' + string + '"';
    }


    function str(key, holder) {

// Produce a string from holder[key].

        var i,          // The loop counter.
            k,          // The member key.
            v,          // The member value.
            length,
            mind = gap,
            partial,
            value = holder[key];

// If the value has a toJSON method, call it to obtain a replacement value.

        if (value && typeof value === 'object' &&
                typeof value.toJSON === 'function') {
            value = value.toJSON(key);
        }

// If we were called with a replacer function, then call the replacer to
// obtain a replacement value.

        if (typeof rep === 'function') {
            value = rep.call(holder, key, value);
        }

// What happens next depends on the value's type.

        switch (typeof value) {
        case 'string':
            return quote(value);

        case 'number':

// JSON numbers must be finite. Encode non-finite numbers as null.

            return isFinite(value) ? String(value) : 'null';

        case 'boolean':
        case 'null':

// If the value is a boolean or null, convert it to a string. Note:
// typeof null does not produce 'null'. The case is included here in
// the remote chance that this gets fixed someday.

            return String(value);

// If the type is 'object', we might be dealing with an object or an array or
// null.

        case 'object':

// Due to a specification blunder in ECMAScript, typeof null is 'object',
// so watch out for that case.

            if (!value) {
                return 'null';
            }

// Make an array to hold the partial results of stringifying this object value.

            gap += indent;
            partial = [];

// Is the value an array?

            if (Object.prototype.toString.apply(value) === '[object Array]') {

// The value is an array. Stringify every element. Use null as a placeholder
// for non-JSON values.

                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || 'null';
                }

// Join all of the elements together, separated with commas, and wrap them in
// brackets.

                v = partial.length === 0 ? '[]' :
                    gap ? '[\n' + gap +
                            partial.join(',\n' + gap) + '\n' +
                                mind + ']' :
                          '[' + partial.join(',') + ']';
                gap = mind;
                return v;
            }

// If the replacer is an array, use it to select the members to be stringified.

            if (rep && typeof rep === 'object') {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    k = rep[i];
                    if (typeof k === 'string') {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            } else {

// Otherwise, iterate through all of the keys in the object.

                for (k in value) {
                    if (Object.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ': ' : ':') + v);
                        }
                    }
                }
            }

// Join all of the member texts together, separated with commas,
// and wrap them in braces.

            v = partial.length === 0 ? '{}' :
                gap ? '{\n' + gap + partial.join(',\n' + gap) + '\n' +
                        mind + '}' : '{' + partial.join(',') + '}';
            gap = mind;
            return v;
        }
    }

// If the JSON object does not yet have a stringify method, give it one.

    if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value, replacer, space) {

// The stringify method takes a value and an optional replacer, and an optional
// space parameter, and returns a JSON text. The replacer can be a function
// that can replace values, or an array of strings that will select the keys.
// A default replacer method can be provided. Use of the space parameter can
// produce text that is more easily readable.

            var i;
            gap = '';
            indent = '';

// If the space parameter is a number, make an indent string containing that
// many spaces.

            if (typeof space === 'number') {
                for (i = 0; i < space; i += 1) {
                    indent += ' ';
                }

// If the space parameter is a string, it will be used as the indent string.

            } else if (typeof space === 'string') {
                indent = space;
            }

// If there is a replacer, it must be a function or an array.
// Otherwise, throw an error.

            rep = replacer;
            if (replacer && typeof replacer !== 'function' &&
                    (typeof replacer !== 'object' ||
                     typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

// Make a fake root object containing our value under the key of ''.
// Return the result of stringifying the value.

            return str('', {'': value});
        };
    }


// If the JSON object does not yet have a parse method, give it one.

    if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text, reviver) {

// The parse method takes a text and an optional reviver function, and returns
// a JavaScript value if the text is a valid JSON text.

            var j;

            function walk(holder, key) {

// The walk method is used to recursively walk the resulting structure so
// that modifications can be made.

                var k, v, value = holder[key];
                if (value && typeof value === 'object') {
                    for (k in value) {
                        if (Object.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value);
            }


// Parsing happens in four stages. In the first stage, we replace certain
// Unicode characters with escape sequences. JavaScript handles many characters
// incorrectly, either silently deleting them, or treating them as line endings.

            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx, function (a) {
                    return '\\u' +
                        ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                });
            }

// In the second stage, we run the text against regular expressions that look
// for non-JSON patterns. We are especially concerned with '()' and 'new'
// because they can cause invocation, and '=' because it can cause mutation.
// But just to be safe, we want to reject all unexpected forms.

// We split the second stage into 4 regexp operations in order to work around
// crippling inefficiencies in IE's and Safari's regexp engines. First we
// replace the JSON backslash pairs with '@' (a non-JSON character). Second, we
// replace all simple value tokens with ']' characters. Third, we delete all
// open brackets that follow a colon or comma or that begin the text. Finally,
// we look to see that the remaining characters are only whitespace or ']' or
// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

            if (/^[\],:{}\s]*$/.
test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').
replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {

// In the third stage we use the eval function to compile the text into a
// JavaScript structure. The '{' operator is subject to a syntactic ambiguity
// in JavaScript: it can begin a block or an object literal. We wrap the text
// in parens to eliminate the ambiguity.

                j = eval('(' + text + ')');

// In the optional fourth stage, we recursively walk the new structure, passing
// each name/value pair to a reviver function for possible transformation.

                return typeof reviver === 'function' ?
                    walk({'': j}, '') : j;
            }

// If the text is not JSON parseable, then a SyntaxError is thrown.

            throw new SyntaxError('JSON.parse');
        };
    }
}());
/*--------------*/
(function(){var t=this;var e=t.Backbone;var i=[];var r=i.push;var s=i.slice;var n=i.splice;var a;if(typeof exports!=="undefined"){a=exports}else{a=t.Backbone={}}a.VERSION="1.1.0";var h=t._;if(!h&&typeof require!=="undefined")h=require("underscore");a.$=t.jQuery||t.Zepto||t.ender||t.$;a.noConflict=function(){t.Backbone=e;return this};a.emulateHTTP=false;a.emulateJSON=false;var o=a.Events={on:function(t,e,i){if(!l(this,"on",t,[e,i])||!e)return this;this._events||(this._events={});var r=this._events[t]||(this._events[t]=[]);r.push({callback:e,context:i,ctx:i||this});return this},once:function(t,e,i){if(!l(this,"once",t,[e,i])||!e)return this;var r=this;var s=h.once(function(){r.off(t,s);e.apply(this,arguments)});s._callback=e;return this.on(t,s,i)},off:function(t,e,i){var r,s,n,a,o,u,c,f;if(!this._events||!l(this,"off",t,[e,i]))return this;if(!t&&!e&&!i){this._events={};return this}a=t?[t]:h.keys(this._events);for(o=0,u=a.length;o<u;o++){t=a[o];if(n=this._events[t]){this._events[t]=r=[];if(e||i){for(c=0,f=n.length;c<f;c++){s=n[c];if(e&&e!==s.callback&&e!==s.callback._callback||i&&i!==s.context){r.push(s)}}}if(!r.length)delete this._events[t]}}return this},trigger:function(t){if(!this._events)return this;var e=s.call(arguments,1);if(!l(this,"trigger",t,e))return this;var i=this._events[t];var r=this._events.all;if(i)c(i,e);if(r)c(r,arguments);return this},stopListening:function(t,e,i){var r=this._listeningTo;if(!r)return this;var s=!e&&!i;if(!i&&typeof e==="object")i=this;if(t)(r={})[t._listenId]=t;for(var n in r){t=r[n];t.off(e,i,this);if(s||h.isEmpty(t._events))delete this._listeningTo[n]}return this}};var u=/\s+/;var l=function(t,e,i,r){if(!i)return true;if(typeof i==="object"){for(var s in i){t[e].apply(t,[s,i[s]].concat(r))}return false}if(u.test(i)){var n=i.split(u);for(var a=0,h=n.length;a<h;a++){t[e].apply(t,[n[a]].concat(r))}return false}return true};var c=function(t,e){var i,r=-1,s=t.length,n=e[0],a=e[1],h=e[2];switch(e.length){case 0:while(++r<s)(i=t[r]).callback.call(i.ctx);return;case 1:while(++r<s)(i=t[r]).callback.call(i.ctx,n);return;case 2:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a);return;case 3:while(++r<s)(i=t[r]).callback.call(i.ctx,n,a,h);return;default:while(++r<s)(i=t[r]).callback.apply(i.ctx,e)}};var f={listenTo:"on",listenToOnce:"once"};h.each(f,function(t,e){o[e]=function(e,i,r){var s=this._listeningTo||(this._listeningTo={});var n=e._listenId||(e._listenId=h.uniqueId("l"));s[n]=e;if(!r&&typeof i==="object")r=this;e[t](i,r,this);return this}});o.bind=o.on;o.unbind=o.off;h.extend(a,o);var d=a.Model=function(t,e){var i=t||{};e||(e={});this.cid=h.uniqueId("c");this.attributes={};if(e.collection)this.collection=e.collection;if(e.parse)i=this.parse(i,e)||{};i=h.defaults({},i,h.result(this,"defaults"));this.set(i,e);this.changed={};this.initialize.apply(this,arguments)};h.extend(d.prototype,o,{changed:null,validationError:null,idAttribute:"id",initialize:function(){},toJSON:function(t){return h.clone(this.attributes)},sync:function(){return a.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return h.escape(this.get(t))},has:function(t){return this.get(t)!=null},set:function(t,e,i){var r,s,n,a,o,u,l,c;if(t==null)return this;if(typeof t==="object"){s=t;i=e}else{(s={})[t]=e}i||(i={});if(!this._validate(s,i))return false;n=i.unset;o=i.silent;a=[];u=this._changing;this._changing=true;if(!u){this._previousAttributes=h.clone(this.attributes);this.changed={}}c=this.attributes,l=this._previousAttributes;if(this.idAttribute in s)this.id=s[this.idAttribute];for(r in s){e=s[r];if(!h.isEqual(c[r],e))a.push(r);if(!h.isEqual(l[r],e)){this.changed[r]=e}else{delete this.changed[r]}n?delete c[r]:c[r]=e}if(!o){if(a.length)this._pending=true;for(var f=0,d=a.length;f<d;f++){this.trigger("change:"+a[f],this,c[a[f]],i)}}if(u)return this;if(!o){while(this._pending){this._pending=false;this.trigger("change",this,i)}}this._pending=false;this._changing=false;return this},unset:function(t,e){return this.set(t,void 0,h.extend({},e,{unset:true}))},clear:function(t){var e={};for(var i in this.attributes)e[i]=void 0;return this.set(e,h.extend({},t,{unset:true}))},hasChanged:function(t){if(t==null)return!h.isEmpty(this.changed);return h.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?h.clone(this.changed):false;var e,i=false;var r=this._changing?this._previousAttributes:this.attributes;for(var s in t){if(h.isEqual(r[s],e=t[s]))continue;(i||(i={}))[s]=e}return i},previous:function(t){if(t==null||!this._previousAttributes)return null;return this._previousAttributes[t]},previousAttributes:function(){return h.clone(this._previousAttributes)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=this;var i=t.success;t.success=function(r){if(!e.set(e.parse(r,t),t))return false;if(i)i(e,r,t);e.trigger("sync",e,r,t)};M(this,t);return this.sync("read",this,t)},save:function(t,e,i){var r,s,n,a=this.attributes;if(t==null||typeof t==="object"){r=t;i=e}else{(r={})[t]=e}i=h.extend({validate:true},i);if(r&&!i.wait){if(!this.set(r,i))return false}else{if(!this._validate(r,i))return false}if(r&&i.wait){this.attributes=h.extend({},a,r)}if(i.parse===void 0)i.parse=true;var o=this;var u=i.success;i.success=function(t){o.attributes=a;var e=o.parse(t,i);if(i.wait)e=h.extend(r||{},e);if(h.isObject(e)&&!o.set(e,i)){return false}if(u)u(o,t,i);o.trigger("sync",o,t,i)};M(this,i);s=this.isNew()?"create":i.patch?"patch":"update";if(s==="patch")i.attrs=r;n=this.sync(s,this,i);if(r&&i.wait)this.attributes=a;return n},destroy:function(t){t=t?h.clone(t):{};var e=this;var i=t.success;var r=function(){e.trigger("destroy",e,e.collection,t)};t.success=function(s){if(t.wait||e.isNew())r();if(i)i(e,s,t);if(!e.isNew())e.trigger("sync",e,s,t)};if(this.isNew()){t.success();return false}M(this,t);var s=this.sync("delete",this,t);if(!t.wait)r();return s},url:function(){var t=h.result(this,"urlRoot")||h.result(this.collection,"url")||U();if(this.isNew())return t;return t+(t.charAt(t.length-1)==="/"?"":"/")+encodeURIComponent(this.id)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return this.id==null},isValid:function(t){return this._validate({},h.extend(t||{},{validate:true}))},_validate:function(t,e){if(!e.validate||!this.validate)return true;t=h.extend({},this.attributes,t);var i=this.validationError=this.validate(t,e)||null;if(!i)return true;this.trigger("invalid",this,i,h.extend(e,{validationError:i}));return false}});var p=["keys","values","pairs","invert","pick","omit"];h.each(p,function(t){d.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.attributes);return h[t].apply(h,e)}});var v=a.Collection=function(t,e){e||(e={});if(e.model)this.model=e.model;if(e.comparator!==void 0)this.comparator=e.comparator;this._reset();this.initialize.apply(this,arguments);if(t)this.reset(t,h.extend({silent:true},e))};var g={add:true,remove:true,merge:true};var m={add:true,remove:false};h.extend(v.prototype,o,{model:d,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return a.sync.apply(this,arguments)},add:function(t,e){return this.set(t,h.extend({merge:false},e,m))},remove:function(t,e){var i=!h.isArray(t);t=i?[t]:h.clone(t);e||(e={});var r,s,n,a;for(r=0,s=t.length;r<s;r++){a=t[r]=this.get(t[r]);if(!a)continue;delete this._byId[a.id];delete this._byId[a.cid];n=this.indexOf(a);this.models.splice(n,1);this.length--;if(!e.silent){e.index=n;a.trigger("remove",a,this,e)}this._removeReference(a)}return i?t[0]:t},set:function(t,e){e=h.defaults({},e,g);if(e.parse)t=this.parse(t,e);var i=!h.isArray(t);t=i?t?[t]:[]:h.clone(t);var r,s,n,a,o,u,l;var c=e.at;var f=this.model;var p=this.comparator&&c==null&&e.sort!==false;var v=h.isString(this.comparator)?this.comparator:null;var m=[],y=[],_={};var w=e.add,b=e.merge,x=e.remove;var E=!p&&w&&x?[]:false;for(r=0,s=t.length;r<s;r++){o=t[r];if(o instanceof d){n=a=o}else{n=o[f.prototype.idAttribute]}if(u=this.get(n)){if(x)_[u.cid]=true;if(b){o=o===a?a.attributes:o;if(e.parse)o=u.parse(o,e);u.set(o,e);if(p&&!l&&u.hasChanged(v))l=true}t[r]=u}else if(w){a=t[r]=this._prepareModel(o,e);if(!a)continue;m.push(a);a.on("all",this._onModelEvent,this);this._byId[a.cid]=a;if(a.id!=null)this._byId[a.id]=a}if(E)E.push(u||a)}if(x){for(r=0,s=this.length;r<s;++r){if(!_[(a=this.models[r]).cid])y.push(a)}if(y.length)this.remove(y,e)}if(m.length||E&&E.length){if(p)l=true;this.length+=m.length;if(c!=null){for(r=0,s=m.length;r<s;r++){this.models.splice(c+r,0,m[r])}}else{if(E)this.models.length=0;var T=E||m;for(r=0,s=T.length;r<s;r++){this.models.push(T[r])}}}if(l)this.sort({silent:true});if(!e.silent){for(r=0,s=m.length;r<s;r++){(a=m[r]).trigger("add",a,this,e)}if(l||E&&E.length)this.trigger("sort",this,e)}return i?t[0]:t},reset:function(t,e){e||(e={});for(var i=0,r=this.models.length;i<r;i++){this._removeReference(this.models[i])}e.previousModels=this.models;this._reset();t=this.add(t,h.extend({silent:true},e));if(!e.silent)this.trigger("reset",this,e);return t},push:function(t,e){return this.add(t,h.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);this.remove(e,t);return e},unshift:function(t,e){return this.add(t,h.extend({at:0},e))},shift:function(t){var e=this.at(0);this.remove(e,t);return e},slice:function(){return s.apply(this.models,arguments)},get:function(t){if(t==null)return void 0;return this._byId[t.id]||this._byId[t.cid]||this._byId[t]},at:function(t){return this.models[t]},where:function(t,e){if(h.isEmpty(t))return e?void 0:[];return this[e?"find":"filter"](function(e){for(var i in t){if(t[i]!==e.get(i))return false}return true})},findWhere:function(t){return this.where(t,true)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");t||(t={});if(h.isString(this.comparator)||this.comparator.length===1){this.models=this.sortBy(this.comparator,this)}else{this.models.sort(h.bind(this.comparator,this))}if(!t.silent)this.trigger("sort",this,t);return this},pluck:function(t){return h.invoke(this.models,"get",t)},fetch:function(t){t=t?h.clone(t):{};if(t.parse===void 0)t.parse=true;var e=t.success;var i=this;t.success=function(r){var s=t.reset?"reset":"set";i[s](r,t);if(e)e(i,r,t);i.trigger("sync",i,r,t)};M(this,t);return this.sync("read",this,t)},create:function(t,e){e=e?h.clone(e):{};if(!(t=this._prepareModel(t,e)))return false;if(!e.wait)this.add(t,e);var i=this;var r=e.success;e.success=function(t,e,s){if(s.wait)i.add(t,s);if(r)r(t,e,s)};t.save(null,e);return t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models)},_reset:function(){this.length=0;this.models=[];this._byId={}},_prepareModel:function(t,e){if(t instanceof d){if(!t.collection)t.collection=this;return t}e=e?h.clone(e):{};e.collection=this;var i=new this.model(t,e);if(!i.validationError)return i;this.trigger("invalid",this,i.validationError,e);return false},_removeReference:function(t){if(this===t.collection)delete t.collection;t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,r){if((t==="add"||t==="remove")&&i!==this)return;if(t==="destroy")this.remove(e,r);if(e&&t==="change:"+e.idAttribute){delete this._byId[e.previous(e.idAttribute)];if(e.id!=null)this._byId[e.id]=e}this.trigger.apply(this,arguments)}});var y=["forEach","each","map","collect","reduce","foldl","inject","reduceRight","foldr","find","detect","filter","select","reject","every","all","some","any","include","contains","invoke","max","min","toArray","size","first","head","take","initial","rest","tail","drop","last","without","difference","indexOf","shuffle","lastIndexOf","isEmpty","chain"];h.each(y,function(t){v.prototype[t]=function(){var e=s.call(arguments);e.unshift(this.models);return h[t].apply(h,e)}});var _=["groupBy","countBy","sortBy"];h.each(_,function(t){v.prototype[t]=function(e,i){var r=h.isFunction(e)?e:function(t){return t.get(e)};return h[t](this.models,r,i)}});var w=a.View=function(t){this.cid=h.uniqueId("view");t||(t={});h.extend(this,h.pick(t,x));this._ensureElement();this.initialize.apply(this,arguments);this.delegateEvents()};var b=/^(\S+)\s*(.*)$/;var x=["model","collection","el","id","attributes","className","tagName","events"];h.extend(w.prototype,o,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){this.$el.remove();this.stopListening();return this},setElement:function(t,e){if(this.$el)this.undelegateEvents();this.$el=t instanceof a.$?t:a.$(t);this.el=this.$el[0];if(e!==false)this.delegateEvents();return this},delegateEvents:function(t){if(!(t||(t=h.result(this,"events"))))return this;this.undelegateEvents();for(var e in t){var i=t[e];if(!h.isFunction(i))i=this[t[e]];if(!i)continue;var r=e.match(b);var s=r[1],n=r[2];i=h.bind(i,this);s+=".delegateEvents"+this.cid;if(n===""){this.$el.on(s,i)}else{this.$el.on(s,n,i)}}return this},undelegateEvents:function(){this.$el.off(".delegateEvents"+this.cid);return this},_ensureElement:function(){if(!this.el){var t=h.extend({},h.result(this,"attributes"));if(this.id)t.id=h.result(this,"id");if(this.className)t["class"]=h.result(this,"className");var e=a.$("<"+h.result(this,"tagName")+">").attr(t);this.setElement(e,false)}else{this.setElement(h.result(this,"el"),false)}}});a.sync=function(t,e,i){var r=T[t];h.defaults(i||(i={}),{emulateHTTP:a.emulateHTTP,emulateJSON:a.emulateJSON});var s={type:r,dataType:"json"};if(!i.url){s.url=h.result(e,"url")||U()}if(i.data==null&&e&&(t==="create"||t==="update"||t==="patch")){s.contentType="application/json";s.data=JSON.stringify(i.attrs||e.toJSON(i))}if(i.emulateJSON){s.contentType="application/x-www-form-urlencoded";s.data=s.data?{model:s.data}:{}}if(i.emulateHTTP&&(r==="PUT"||r==="DELETE"||r==="PATCH")){s.type="POST";if(i.emulateJSON)s.data._method=r;var n=i.beforeSend;i.beforeSend=function(t){t.setRequestHeader("X-HTTP-Method-Override",r);if(n)return n.apply(this,arguments)}}if(s.type!=="GET"&&!i.emulateJSON){s.processData=false}if(s.type==="PATCH"&&E){s.xhr=function(){return new ActiveXObject("Microsoft.XMLHTTP")}}var o=i.xhr=a.ajax(h.extend(s,i));e.trigger("request",e,o,i);return o};var E=typeof window!=="undefined"&&!!window.ActiveXObject&&!(window.XMLHttpRequest&&(new XMLHttpRequest).dispatchEvent);var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};a.ajax=function(){return a.$.ajax.apply(a.$,arguments)};var k=a.Router=function(t){t||(t={});if(t.routes)this.routes=t.routes;this._bindRoutes();this.initialize.apply(this,arguments)};var S=/\((.*?)\)/g;var $=/(\(\?)?:\w+/g;var H=/\*\w+/g;var A=/[\-{}\[\]+?.,\\\^$|#\s]/g;h.extend(k.prototype,o,{initialize:function(){},route:function(t,e,i){if(!h.isRegExp(t))t=this._routeToRegExp(t);if(h.isFunction(e)){i=e;e=""}if(!i)i=this[e];var r=this;a.history.route(t,function(s){var n=r._extractParameters(t,s);i&&i.apply(r,n);r.trigger.apply(r,["route:"+e].concat(n));r.trigger("route",e,n);a.history.trigger("route",r,e,n)});return this},navigate:function(t,e){a.history.navigate(t,e);return this},_bindRoutes:function(){if(!this.routes)return;this.routes=h.result(this,"routes");var t,e=h.keys(this.routes);while((t=e.pop())!=null){this.route(t,this.routes[t])}},_routeToRegExp:function(t){t=t.replace(A,"\\$&").replace(S,"(?:$1)?").replace($,function(t,e){return e?t:"([^/]+)"}).replace(H,"(.*?)");return new RegExp("^"+t+"$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return h.map(i,function(t){return t?decodeURIComponent(t):null})}});var I=a.History=function(){this.handlers=[];h.bindAll(this,"checkUrl");if(typeof window!=="undefined"){this.location=window.location;this.history=window.history}};var N=/^[#\/]|\s+$/g;var O=/^\/+|\/+$/g;var P=/msie [\w.]+/;var C=/\/$/;var j=/[?#].*$/;I.started=false;h.extend(I.prototype,o,{interval:50,getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getFragment:function(t,e){if(t==null){if(this._hasPushState||!this._wantsHashChange||e){t=this.location.pathname;var i=this.root.replace(C,"");if(!t.indexOf(i))t=t.slice(i.length)}else{t=this.getHash()}}return t.replace(N,"")},start:function(t){if(I.started)throw new Error("Backbone.history has already been started");I.started=true;this.options=h.extend({root:"/"},this.options,t);this.root=this.options.root;this._wantsHashChange=this.options.hashChange!==false;this._wantsPushState=!!this.options.pushState;this._hasPushState=!!(this.options.pushState&&this.history&&this.history.pushState);var e=this.getFragment();var i=document.documentMode;var r=P.exec(navigator.userAgent.toLowerCase())&&(!i||i<=7);this.root=("/"+this.root+"/").replace(O,"/");if(r&&this._wantsHashChange){this.iframe=a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;this.navigate(e)}if(this._hasPushState){a.$(window).on("popstate",this.checkUrl)}else if(this._wantsHashChange&&"onhashchange"in window&&!r){a.$(window).on("hashchange",this.checkUrl)}else if(this._wantsHashChange){this._checkUrlInterval=setInterval(this.checkUrl,this.interval)}this.fragment=e;var s=this.location;var n=s.pathname.replace(/[^\/]$/,"$&/")===this.root;if(this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!n){this.fragment=this.getFragment(null,true);this.location.replace(this.root+this.location.search+"#"+this.fragment);return true}else if(this._hasPushState&&n&&s.hash){this.fragment=this.getHash().replace(N,"");this.history.replaceState({},document.title,this.root+this.fragment+s.search)}}if(!this.options.silent)return this.loadUrl()},stop:function(){a.$(window).off("popstate",this.checkUrl).off("hashchange",this.checkUrl);clearInterval(this._checkUrlInterval);I.started=false},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if(e===this.fragment&&this.iframe){e=this.getFragment(this.getHash(this.iframe))}if(e===this.fragment)return false;if(this.iframe)this.navigate(e);this.loadUrl()},loadUrl:function(t){t=this.fragment=this.getFragment(t);return h.any(this.handlers,function(e){if(e.route.test(t)){e.callback(t);return true}})},navigate:function(t,e){if(!I.started)return false;if(!e||e===true)e={trigger:!!e};var i=this.root+(t=this.getFragment(t||""));t=t.replace(j,"");if(this.fragment===t)return;this.fragment=t;if(t===""&&i!=="/")i=i.slice(0,-1);if(this._hasPushState){this.history[e.replace?"replaceState":"pushState"]({},document.title,i)}else if(this._wantsHashChange){this._updateHash(this.location,t,e.replace);if(this.iframe&&t!==this.getFragment(this.getHash(this.iframe))){if(!e.replace)this.iframe.document.open().close();this._updateHash(this.iframe.location,t,e.replace)}}else{return this.location.assign(i)}if(e.trigger)return this.loadUrl(t)},_updateHash:function(t,e,i){if(i){var r=t.href.replace(/(javascript:|#).*$/,"");t.replace(r+"#"+e)}else{t.hash="#"+e}}});a.history=new I;var R=function(t,e){var i=this;var r;if(t&&h.has(t,"constructor")){r=t.constructor}else{r=function(){return i.apply(this,arguments)}}h.extend(r,i,e);var s=function(){this.constructor=r};s.prototype=i.prototype;r.prototype=new s;if(t)h.extend(r.prototype,t);r.__super__=i.prototype;return r};d.extend=v.extend=k.extend=w.extend=I.extend=R;var U=function(){throw new Error('A "url" property or function must be specified')};var M=function(t,e){var i=e.error;e.error=function(r){if(i)i(t,r,e);t.trigger("error",t,r,e)}}}).call(this);
//# sourceMappingURL=backbone-min.map
/*--------------*/
var load_template = (function($) {
    'use strict';
    
    var load_template = function(template_name) {
        var templateUrl = [
            "/templates/",
            template_name,
            ".html"
        ].join("");
       
        return $.ajax({
            type: 'GET',
            url: templateUrl,
            async: false
        }).responseText;
    };
    
    return load_template;
} (jQuery));

/*--------------*/
var TaskModel = (function(Backbone) {
    "use strict";
    
    var TaskModel = Backbone.Model.extend({
        defaults: {
            "project_id": null,
            "done": false,
            "name": "No name",
            "description": "Description of task here...",
            "start_datetime": 0,
            "end_datetime": 0,
            "created": Date.now(),
            "done_at": null
        }
    });
    
    return TaskModel;
} (Backbone));
/*--------------*/
var ProjectModel = (function(Backbone) {
    "use strict";
    
    var ProjectModel = Backbone.Model.extend({
        defaults: {
            "name": "Project noname",
            "color": "#3498db"
        }
    });
    
    return ProjectModel;
} (Backbone));
/*--------------*/
var TasksCollection = (function(Backbone, TaskModel) {
    "use strict";
    
    var TasksCollection = Backbone.Collection.extend({
        model: TaskModel,
        url: '/tasks'
    });
    
    return TasksCollection;
}(Backbone, TaskModel));

/*--------------*/
var ProjectsCollection = (function(Backbone, ProjectModel) {
    "use strict";
    
    var ProjectsCollection = Backbone.Collection.extend({
        model: ProjectModel,
        url: '/projects'
    });
    
    return ProjectsCollection;
}(Backbone, ProjectModel));

/*--------------*/
var ProjectView = (function(Backbone,
                            load_template) {
    "use strict";
    
    var id_counter = 0;
    
    return Backbone.View.extend({
        id: function() { return "project-view-" + (id_counter += 1); },
        tagName: "li",
        template: _.template(load_template("project")),
        
        events: {
            "click .project_item span.del": "deleteClick",
            "click .project_item span.edit": "editClick",
            "click": "selected"
        },
        
        initialize: function(options) {
            options = options || {};
            this.project = options.model;
            this.tasks = options.task;
            this.mediator = options.mediator;
            
            this.listenTo(this.project, "change", this.projectChange);
            this.listenTo(this.project, "destroy", this.projectDestroy);
            this.listenTo(this.mediator, "prj_selected", this.prj_selected);
        },
        
        render: function() {
            this.$el.append(this.template({
                name: this.project.get("name"),
                color: this.project.get("color")
            }));
            
            return this;
        },
        /**
         * Обработка нажатия кнопки удаления проекта.
         * Передает сигнал родительскому виду на запрос удаления.
         *
         * @method deleteClick
         */
        deleteClick: function(event) {
            event.stopPropagation();
            this.mediator.trigger("deleteProject", { project: this.project });
        },
        /**
         * Обработка нажатия кнопки редактирования проекта.
         * Посылает сигнал родительскому виду.
         *
         * @method editClick
         */
        editClick: function(event) {
            event.stopPropagation();
            this.mediator.trigger("editProject", this.project);
        },
        
        selected: function(event) {
            this.mediator.trigger("prj_selected", {
                model: this.project
            });
        },
        
        prj_selected: function(event) {
            if (this.project === event.model) {
                this.$el.addClass("selected");
            } else {
                this.$el.removeClass("selected");
            }
        },
        /**
         * Обработчик изменения модели проекта
         * 
         * @method projectChange
         */
        projectChange: function() {
            this.$("span.name").text(this.project.get("name"));
            this.$("span.color").css({
                "background-color": this.project.get("color")
            });
        },
        /**
         * Обработчик удаления модели проекта
         *
         * @method projectRemove
         */
        projectDestroy: function() { this.remove(); }
    });
}(Backbone, load_template));
/*--------------*/
/**
 * Модуль вида списка проектов
 * 
 * @module projects.js
 */

var ProjectsView = (function(Backbone,
                             _,
                             load_template,
                             ProjectView,
                             ProjectModel) {
    'use strict';
    
    var ProjectModal,
        ProjectDeleteModal;
    
    /**
     * Модальная форма проекта
     * 
     * @class ProjectModal
     * @constructor
     * @extends Backbone.View
     */
    ProjectModal = Backbone.View.extend({
        el: "body",
        template: _.template(load_template("project_modal")),
        
        events: {
            "keyup #project_modal": "modalEscape",
            "click #close": "modalClose",
            "click #save": "modalSave",
            "keypress #project_name": "validateName"
        },
        
        modalShow: function(options) {
            this.options = options;
            
            this.$el.append(this.template({
                legend: options.legend,
                name: options.project.get("name"),
                color: options.project.get("color")
            }));
            
            this.$("#project_modal").focus();
        },
        
        modalClose: function() { this.$("#project_modal").remove(); },
        
        modalEscape: function(event) {
            if (event.keyCode === 27) { this.modalClose(); }
        },
        
        modalSave: function() {
            var val = this.$("#project_name").val();
            
            if (_.isEmpty(val)) {
                this.$("#project_name_err").fadeIn("slow");
            } else {
                this.options.project.set({
                    name: val,
                    color: this.$("#project_color").val()
                });
                this.trigger("save", this.options);
                this.modalClose();
            }
        },
        
        validateName: function() {
            this.$("#project_name_err").fadeOut("medium");
        }
    });
    /**
     * Модальное окно запроса удаления проекта и его дочерних задач.
     * 
     * @class ProjectDeleteModal
     * @constructor
     * @extends Backbone.View
     */
    ProjectDeleteModal = Backbone.View.extend({
        el: "body",
        template: load_template("delete_project_modal"),
        
        events: {
            "keyup #prj_del_modal": "modalEscape",
            "click #prj_del_close": "modalClose",
            "click #prj_btn_delete": "modalDelete"
        },
        
        modalClose: function() { this.$("#prj_del_modal").remove(); },
        
        modalEscape: function(event) {
            if (event.keyCode === 27) { this.modalClose(); }
        },
        
        modalShow: function(options) {
            this.options = options;
            
            this.$el.append(this.template);
            this.$("#prj_del_modal").focus();
        },
        
        modalDelete: function() {
            this.trigger("delete", this.options);
            this.modalClose();
        }
    });
    /**
     * Вид списка проектов
     * 
     * @class ProjectsView
     * @constructor
     */
    return Backbone.View.extend({
        id: "projects-view",
        project_template: load_template("projects"),
        
        events: {
            "click #create_project": "create_project",
            "click #all_tasks": "allTasks"
        },
        /**
         * Инициализация вида
         * 
         * @method initialize
         * @param {Object} options параметры вида
         */
        initialize: function(options) {
            options = options || {};
            // коллекция с моделями проектов
            this.projects = options.projects;
            // коллекция с моделями задач
            this.tasks = options.tasks;
            // медиатор для передачи событий между видами
            this.mediator = options.mediator;
            // модальное окно для работы с проектом
            this.projectModal = new ProjectModal();
            // модальное окно для запроса удаления проекта
            this.projectDelModal = new ProjectDeleteModal(); 
            // подписываемся на прослушивание события save
            // модального окна
            this.listenTo(this.projectModal, "save", this.modalSave);
            // событие delete модального окна удаления проекта
            this.listenTo(this.projectDelModal, "delete", this.projectDelete.bind(this));
            // событие добавления проекта в коллекцию
            this.listenTo(this.projects, "add", this.addProject.bind(this));
            // событие изменения модели проекта
            this.listenTo(this.mediator, "editProject", this.edit_project);
            // событие удаления модели проекта
            this.listenTo(this.mediator, "deleteProject", this.deleteModal);
            // событие выбора проекта в качестве фильтра
            this.listenTo(this.mediator, "prj_selected", this.prj_selected);
        },
        /**
         * Метод рендеринга вида
         *
         * @method render
         * @chainable
         */
        render: function() {
            var that = this;
            
            // рендерим шаблон вида
            this.$el.append(this.project_template);
            // рендерим виды пунктов проектов
            this.projects.forEach(this.addProject.bind(this));
            
            return this;
        },
        /**
         * Создания нового проекта
         * 
         * @method create_project
         */
        create_project: function() {
            this.projectModal.modalShow({
                legend: "Новый проект",
                project: new ProjectModel({ name: "" }),
                create: true
            });
        },
        /**
         * Обработчик события редактирования модели проекта.
         * Запускает модальное окно для редатктирования.
         * 
         * @method edit_project
         * @param {ProjectModel} project
         */
        edit_project: function(project) {
            this.projectModal.modalShow({
                legend: "Переименовать проект",
                project: project,
                create: false
            });
        },
        /**
         * Обработка события save модального окна проекта
         * 
         * @method save
         * @param {Object} options
         */
        modalSave: function(options) {
            if (options.create) {
                this.projects.add(options.project);
            } 
            options.project.save();
        },
        /**
         * Обработчик добавления новой модели проекта в коллекцию
         *
         * @method addProject
         * @param {ProjectModel} project - экземпляр модели проекта
         */
        addProject: function(project) {
            var projectView = new ProjectView({
                model: project,
                mediator: this.mediator
            });
            
            this.$("#projects_list").append(projectView.render().$el);
        },
        /**
         * Обработчик события удаления модели проекта. Выводит модальное окно
         * с вопросом удалять или нет проект и его дочерние задачи.
         * 
         * @method deleteModal
         * @param {Object} event - событие содержащее ссылку на модель проекта
         */
        deleteModal: function(event) {
            this.projectDelModal.modalShow({ project: event.project });
        },
        /**
         * Обработчик положительного ответа модального окна запроса на удаление
         * проекта и его дочерних задач.
         * 
         * @method projectDelete
         */
        projectDelete: function(event) {
            var project = event.project,
                projectTasks;
            
            projectTasks = this.tasks.filter(function(task) {
                return task.get("project_id") === project.id;
            });
            
            projectTasks.forEach(function(task) {
                task.destroy(projectTasks);
            });
            
            project.destroy();
        },
        /**
         * Посылка сигнала видам задач (TaskView's) сигнала о том что выбран
         * фильтр 'Все задачи'
         * 
         * @method allTasks
         */
        allTasks: function() {
            this.mediator.trigger("prj_selected", { model: null });
        },
        /**
         * Обработка события установки проекта в качестве фильтра
         * 
         * @method prj_selected
         */
        prj_selected: function(event) {
            if (event.model !== null) {
                this.$("#all_tasks").removeClass("selected");
            } else {
                this.$("#all_tasks").addClass("selected");
            }
        },
        /**
         * Перегрузка метода удаления вида
         * @method remove
         */
        remove: function() {
            this.projectModal.undelegateEvents();
            this.projectDelModal.undelegateEvents();
            
            return Backbone.View.prototype.remove.apply(this, arguments);
        }
    });
    
}(Backbone,
  _,
  load_template,
  ProjectView,
  ProjectModel));
/*--------------*/
var TaskView = (function(Backbone,
                         _,
                         ProjectsCollection,
                         load_template) {
    "use strict";
    
    var task_views_cnt = 0;
    
    return Backbone.View.extend({
        id: function() { return "task-view-" + (task_views_cnt += 1); },
        className: "task",
        task_template: _.template(load_template("task")),
        
        events: {
            "click #delete_task": "deleteTask",
            "click #edit_task": "editTask",
            "change #t_done": "changeDone",
            "click #toggle_details": "toggleDetails"
        },
        
        initialize: function(options) {
            options = options || {};
            this.model = options.model;
            this.projects = options.projects;
            this.mediator = options.mediator;
            this.project = this.projects.get(this.model.get("project_id"));
            
            this.listenTo(this.mediator, "prj_selected", this.prj_selected.bind(this));
            this.listenTo(this.mediator, "search", this.searchProject);
            this.listenTo(this.model, "change", this.changeTask);
            
            if (this.project) {
                this.listenTo(this.project, "change", this.prj_name_changed);
            }
        },
        
        render: function() {
            var taskDatetime = "";
            
            if (this.model.get("start_datetime")
                && this.model.get("end_datetime")) {
                taskDatetime = [
                    this.datetimeString("start_datetime"),
                    this.datetimeString("end_datetime")
                ].join(" - ");
            }
            
            this.$el.append(this.task_template({
                name: this.model.get("name"),
                description: this.model.get("description"),
                done: this.model.get("done") ? "checked": "",
                created: this.datetimeString("created"),
                taskDatetime: taskDatetime,
                project: this.project ? this.project.get("name") : "Вне проекта"
            }));
            
            return this;
        },
        
        deleteTask: function() {
            this.model.destroy();
            this.remove();
        },
        
        editTask: function() {
            this.mediator.trigger("editTask", { task: this.model });
        },
        
        prj_selected: function(event) {
            var project = event.model;
            
            if (project === null ||
                project.id === this.model.get("project_id")) {
                this.$el.fadeIn("fast");
            } else {
                this.$el.fadeOut("fast");
            }
        },
        
        task_destroy: function() { this.remove(); },
        
        prj_name_changed: function() {
            this.$("#t_project").text(this.project.get("name"));
        },
        /**
         * Обработка поиска задачи
         * 
         * @searchProject
         * @param {Object} event - объект содержащий искомый текст
         */
        searchProject: function(event) {
            var name_r, // результат поиска в имени задачи
                description_r, // результат поиска в описании задачи
                r; // регулярное выражение искомое в строке
            
            this.unhighlight();
            // если поиск по пустой строке показывает задачу
            if (event.q === "") {
                this.$el.fadeIn("fast");
                return;
            }
            
            r = new RegExp(event.q, "ig");
            
            name_r = this.model.get("name").search(r);
            description_r = this.model.get("description").search(r);
            
            if((name_r === -1) && (description_r === -1)) {
                // если совпадения не найдены скрываем строчку задания
                this.$el.fadeOut("fast");
            } else {
                this.$el.fadeIn("fast");
                this.highlight(r)
            }
        },
        /**
         * Подсветка указанного участка текста в задании
         *
         * @method highlight
         * @param {RegExp} r - регулярное выражение искомого текста
         */
        highlight: function(r) {
            // строка подсвечиваемая в поиске
            var highl = '<span class="highlight">$&</span>';
            
            this.$("#t_name").html(this.model.get("name").replace(r, highl));
            this.$("#t_description").html(this.model.get("description").replace(r, highl));
        },
        /**
         * Снятие подсветки с текста в задаче
         * 
         * @method unhighlight
         */
        unhighlight: function() {
            this.$("#t_name").text(this.model.get("name"));
            this.$("#t_description").text(this.model.get("description"));
        },
        /**
         * Обработка события изменения модели
         * 
         * @method changeTask
         */
        changeTask: function() {
            this.project = this.projects.get(this.model.get("project_id"));
            
            if (this.project) {
                this.$("#t_project").text(this.project.get("name"));
            }
            
            this.$("#t_name").text(this.model.get("name"));
            this.$("#t_description").text(this.model.get("description"));
            this.$("#t_done").attr("checked", this.model.get("done"));
        },
        /**
         * Обработка события изменения состояния флажка завершенности задачи
         *
         * @method changeDone
         * @param {Object} event объект jQuery-события
         */
        changeDone: function() {
            var checked = this.$("#t_done").is(":checked");
            
            this.model.set({
                "done": checked,
                "done_at": (checked) ? Date.now() : null
            });
            this.model.save({ wait: true });
        },
        /**
         * Возвращает текстовое представление даты и времени
         * 
         * @method datetimeString
         * @param {String} field - поле модели из которого извлекается дата и время
         */
        datetimeString: function(field) {
            var d = new Date();
            d.setTime(this.model.get(field));
            
            return [
                ("00" + d.getDate()).slice(-"00".length),
                ".",
                ("00" + (d.getMonth() + 1)).slice(-"00".length),
                ".",
                d.getFullYear(),
                " ",
                ("00" + d.getHours()).slice(-"00".length),
                ":",
                ("00" + d.getMinutes()).slice(-"00".length)
            ].join("");
        },
        /**
         * Отображение или скрытие детальной информации о задаче
         * 
         * @method toggleDetails
         */
        toggleDetails: function() { this.$("#t_details").toggle(); }
    });
})(Backbone,
   _,
   ProjectsCollection,
   load_template);
/*--------------*/
/**
 * Модуль вида списка задач
 *
 * @module tasks.js
 */
var TasksView = (function(Backbone,
                          load_template,
                          TaskModel,
                          TaskView) {
    'use strict';
    
    /**
     * Модальное окно задачи
     * 
     * @class TaskModal
     * @constructor
     * @extends Backbone.View
     */
    var TaskModal = Backbone.View.extend({
        el: "body",
        template: _.template(load_template("task_modal")),
        
        events: {
            "keyup #task_modal": "modalEscape",
            "click #task_modal_close": "modalClose",
            "click #task_modal_save": "validate",
            "click #add_to_calendar": "calendarControls",
            "change #whole_day": "calendarWholeDay",
            "keypress #task_name": "validateName"
        },
        /**
         * Метод открытия модального окна создания новой задачи
         *
         * @method modalShow
         * @param {Object} options - опции которые передаются коду
         * прослушивающего событие save данной модальной формы
         */
        modalShow: function(options) {
            var start_date,
                start_time,
                end_date,
                end_time,
                d,
                selector = ["#task_project_id option[value='",
                            options.task.get("project_id"),
                            "']"].join("");
            
            if (options.task.get("start_datetime")) {
                d = new Date();
                d.setTime(options.task.get("start_datetime"));
                
                start_date = this.getDateString(d);
                start_time = this.getTimeString(d);
            } else {
                start_date = "";
                start_time = "";
            }
            
            if (options.task.get("end_datetime")) {
                d = new Date();
                d.setTime(options.task.get("end_datetime"));
                
                end_date = this.getDateString(d);
                end_time = this.getTimeString(d);
            } else {
                end_date = "";
                end_time = "";
            }
            
            this.options = options;
            this.$el.append(this.template({
                legend: (options.create) ? "Новая задача" : "Редактировать задачу",
                projects: options.projects,
                name: options.task.get("name"),
                create: options.create,
                start_date: start_date,
                start_time: start_time,
                end_date: end_date,
                end_time: end_time,
                whole_day: ((start_time === "00:00") & (end_time === "00:00")) ? "checked": "",
                done: options.task.get("done") ? "checked": "",
                description: options.task.get("description")
            }));
            this.$("#task_modal").focus();
            this.$(selector).attr("selected", "selected");
            
            if (start_date && end_date) {
                this.$("#calendar_controls").toggle(true);
                
                if (((start_time === "00:00") & (end_time === "00:00"))) {
                    this.$("#start_time, #end_time").toggle(false);
                }
            }
        },
        
        modalClose: function () { this.$("#task_modal").remove(); },
        
        modalEscape: function(event) {
            if (event.keyCode === 27) { this.modalClose(); }
        },
        
        modalSave: function() {
            var start_datetime,
                end_datetime;
            
            start_datetime = [this.$("#start_date").val(),
                              this.$("#start_time").val()].join(" ");
            
            end_datetime = [this.$("#end_date").val(),
                              this.$("#end_time").val()].join(" ");
            
            this.options.task.set({
                project_id: this.$("#task_project_id").val(),
                name: this.$("#task_name").val(),
                done: this.$("#done").is(":checked"),
                description: this.$("#description").val(),
                start_datetime: Date.parse(start_datetime) || 0,
                end_datetime: Date.parse(end_datetime) || 0
            });
            this.modalClose();
            this.trigger("save", this.options);
        },
        /**
         * Валидация правильности ввода в информации в поля
         * формы модального окна.
         * 
         * @method validate
         */
        validate: function() {
            var errors = false, // флажок показывающий что есть ошибки
                start_date,
                start_time,
                end_date,
                end_time,
                emp_start_date,
                emp_start_time,
                emp_end_date,
                emp_end_time;
            
            // заранее скрываем все сообщения об ошибках
            this.$(".error").toggle(false);
            
            // проверка заполненности имени задачи
            if (_.isEmpty(this.$("#task_name").val())) {
                this.$("#task_name_err").fadeIn("slow");
                errors = true;
            }
            // провекра корректности ввода даты
            start_date = this.$("#start_date").val();
            start_time = this.$("#start_time").val();
            end_date = this.$("#end_date").val();
            end_time = this.$("#end_time").val();
            
            emp_start_date = _.isEmpty(start_date);
            emp_start_time = _.isEmpty(start_time);
            emp_end_date = _.isEmpty(end_date);
            emp_end_time =  _.isEmpty(end_time);
            
            // либо все должны быть назаполненными
            // либо наоборот
            if (!(emp_start_date ===
                  emp_start_time ===
                  emp_end_date === emp_end_time)) {
                
                this.$("#invalid_format_err").fadeIn("slow");
                errors = true;
            }
            // если все параметры сроков заполнены
            // и время начала большее времени завершения
            if (!(emp_start_date & emp_start_time & emp_end_date & emp_end_time) &&
                (Date.parse(start_date + " " + start_time) >=
                    Date.parse(end_date + " " + end_time))) {
                
                this.$("#date_wrong_order").fadeIn("slow");
                errors = true;
            }
            
            if (!errors) { this.modalSave(); }
        },
        
        validateName: function() {
            this.$("#task_name_err").fadeOut("slow");
        },
        /**
         * Переключение отображения элементов управления занесения
         * даты и времени начала и конца задачи
         * 
         * @method calendarControls
         */
        calendarControls: function() {
            this.$("#calendar_controls").fadeToggle("medium");
        },
        /**
         * Переключение отображения элементов управления занесения времени
         * задачи
         * 
         * @method calendarWholeDay
         */
        calendarWholeDay: function() {
            if (this.$("#whole_day").is(":checked")) {
                this.$("#start_time, #end_time").val("00:00")
                                                .hide("fast");
            } else {
                this.$("#start_time, #end_time").show("fast");
            }
        },
        /**
         * Возвращает строку отформатированной даты
         *
         * @method getDateString
         * @param {Date} d объект
         * @returns {String} строка даты
         */
        getDateString: function(d) {
            return [d.getFullYear(),
                    ("00" + (d.getMonth() + 1)).slice(-"00".length),
                    ("00" + d.getDate()).slice(-"00".length)].join("-");
        },
        /**
         * Возвращает строку отформатированного времени
         *
         * @method getTimeString
         * @param {Date} d объект
         * @returns {String} строка времени
         */
        getTimeString: function(d) {
            return [("00" + d.getHours()).slice(-"00".length),
                    ("00" + d.getMinutes()).slice(-"00".length)].join(":");
        }
    });
    /**
     * Вид списка задач
     * 
     * @class TasksView
     * @constructor
     * @extends Backbone.View
     */
    return Backbone.View.extend({
        id: "tasks-view",
        template: load_template("tasks"),
        /**
         * События прослушиваемые видом
         *
         * @property events
         * @type {Object}
         */
        events: {
            "click #new_task": "createTask",
            "click #search_btn": "searchTask",
            "keypress #s_query": "searchKeyPress"
        },
        /**
         * Инициализция вида
         * 
         * @method initialize
         * @param {Object} options - параметры вида (коллекция проектов, задач)
         */
        initialize: function(options) {
            options = options || {};
            // коллекция проектов ProjectsCollection
            this.projects = options.projects;
            // коллекция задач TasksCollection
            this.tasks = options.tasks;
            // медиатор для взаимодействия с другими видами
            this.mediator = options.mediator;
            // модальное окно для создания новой задачи
            this.taskModal = new TaskModal({ projects: this.projects });
            // обработка события save нажатия кнопки сохранить модального окна
            this.listenTo(this.taskModal, "save", this.modalSave);
            // прослушивание события добавления новой модели в коллекцию задач
            this.listenTo(this.tasks, "add", this.addTask.bind(this));
            // прослушивание события редактирования задачи
            this.listenTo(this.mediator, "editTask", this.editTask.bind(this));
        },
        /**
         * Рендеринг вида списка задач
         * 
         * @method render
         * @chainable
         */
        render: function() {
            this.$el.append(this.template);
            
            this.tasks.forEach(this.addTask.bind(this));
            
            return this;
        },
        /**
         * Обработчик события добавления задачи в коллекцию задач
         * 
         * @method addTask
         * @param 
         */
        addTask: function(task) {
            var view = new TaskView({
                model: task,
                projects: this.projects,
                mediator: this.mediator
            });
            
            this.$("#tasks_list").append(view.render().$el);
        },
        /**
         * Создание новой задачи
         *
         * @method create_task
         */
        createTask: function() {
            var task = new TaskModel({
                name: "",
                description: "",
                done: false
            });
            
            this.taskModal.modalShow({
                task: task,
                projects: this.projects,
                create: true
            });
        },
        /**
         * Обработчик события save нажатия кнопки "Cохранить" модального окна
         * 
         * @method modalSave
         * @param {Object} options - опции возвращаемые модальным окном
         */
        modalSave: function(options) {
            if (options.create) {
                this.tasks.add(options.task);
            }
            
            options.task.save({ wait: true });
        },
        /**
         * Обработка нажатия клавиш в поле поиска
         * @method searchKeyPress
         */
        searchKeyPress: function(event) {
            // если нажали Enter запускаем поиск задачи по контексту
            if (event.which === 13){
                this.searchTask();
            }
        },
        /**
         * Поиск задачи по тексту заданному в поиске
         * 
         * @searchTask
         */
        searchTask: function() {
            this.mediator.trigger("search", { q: this.$("#s_query").val() });
        },
        /**
         * Обработчик события редактирования задачи
         * @method editTask
         * @param {Object} event - объект содержащий модель для редактирования
         */
        editTask: function(event) {
            this.taskModal.modalShow({
                task: event.task,
                projects: this.projects,
                create: false
            });
        },
        /**
         * Перегрузка базового метода удаления вида из страницы
         * 
         * @method remove
         */
        remove: function(){
            this.taskModal.undelegateEvents();
            
            return Backbone.View.prototype.remove.apply(this, arguments);
        }
    });
    
}(Backbone,
  load_template,
  TaskModel,
  TaskView));
/*--------------*/
var HomeView = (function(Backbone,
                         _,
                         ProjectsCollection,
                         ProjectView,
                         TasksCollection,
                         TaskView,
                         ProjectsView,
                         TasksView,
                         load_template) {
    "use strict";
    
    var HomeView = Backbone.View.extend({
        id: "home-view",
        home_template: load_template("home_template"),
        
        initialize: function() {
            this.projects = new ProjectsCollection();
            this.tasks = new TasksCollection();
            this.projects.fetch({ async: false });
            this.tasks.fetch({ async: false });
            // объект медиатора для взаимодейтсвия и прослушивания событий
            // между объектами видов
            this.mediator = _.extend({}, Backbone.Events);
            
            this.projectsView = new ProjectsView({
                projects: this.projects,
                tasks: this.tasks,
                mediator: this.mediator
            });
            
            this.tasksView = new TasksView({
                tasks: this.tasks,
                projects: this.projects,
                mediator: this.mediator
            });
        },
        
        render: function() {
            this.$el.append(this.home_template);
            
            this.$("#projects_container").append(this.projectsView.render().$el);
            this.$("#tasks_container").append(this.tasksView.render().$el);
            
            return this;
        },
        /**
         * Перегрузка базового метода удаления вида из страницы
         * 
         * @method remove
         */
        remove: function() {
            this.projectsView.remove();
            this.tasksView.remove();
            
            return Backbone.View.prototype.remove.apply(this, arguments);
        }
    });
    
    return HomeView;
}(Backbone,
  _,
  ProjectsCollection,
  ProjectView,
  TasksCollection,
  TaskView,
  ProjectsView,
  TasksView,
  load_template));
/*--------------*/
/**
 * Модуль списка проектов на странице календаря
 *
 * @module calendarprojects.js
 */
var CalendarProjects = (function(Backbone, load_template) {
    "use strict";
    
    var ProjectView, projectViewsCnt = 0;
    
    ProjectView = Backbone.View.extend({
        id: function() { return "project-view-" +  (projectViewsCnt +=1 ); },
        
        events: {
            "click": "projectSelected"
        },
        
        initialize: function(options) {
            options = options || {};
            
            this.mediator = options.mediator;
            this.project = options.project;
            
            this.listenTo(this.mediator, "proj_selected", this.proj_selected.bind(this));
        },
        /**
         * Рендеринг вида
         * 
         * @method render
         */
        render: function() {
            this.$el.append(this.project.get("name"))
                    .prepend("<div></div>")
                    .children("div")
                    .css("background-color", this.project.get("color"));
            
            return this;
        },
        
        projectSelected: function() {
            this.mediator.trigger("proj_selected", { project: this.project });
        },
        
        proj_selected: function(options) {
            if (options.project === this.project) {
                this.$el.addClass("selected");
            } else {
                this.$el.removeClass("selected");
            }
        }
    });
    /**
     * Вид списк проектов на странице календаря
     *
     * @class CalendarProjects
     * @extends Backbone.View
     * @constructor
     */
    return Backbone.View.extend({
        id: "projects-view",
        template: load_template("calendar_projects"),
        
        events: {
            "click #all_projects": "allProjSelected"
        },
        /**
         * Инициализация вида
         *
         * @method initialize
         * @param {Object} options параметры
         */
        initialize: function(options) {
            options = options || {};
            
            this.mediator = options.mediator;
            this.projects = options.projects;
            
            this.listenTo(this.mediator, "proj_selected", this.proj_selected.bind(this));
        },
        /**
         * Рендеринг вида
         *
         * @method render
         * @chainable
         */
        render: function() {
            var that = this;
            
            this.$el.append(this.template);
            
            this.projects.forEach(function(project) {
                var projectView = new ProjectView({
                    project: project,
                    mediator: that.mediator
                });
                
                that.$el.append(projectView.render().$el);
            });
            
            return this;
        },
        
        allProjSelected: function() {
            this.mediator.trigger("proj_selected", { project: null });
        },
        
        proj_selected: function(options) {
            if (options.project === null) {
                this.$("#all_projects").addClass("selected");
            } else {
                this.$("#all_projects").removeClass("selected");
            }
        }
    });
}(Backbone, load_template));
/*--------------*/
/**
 * Модуль вида страницы календаря
 *
 * @module calendar.js
 */
var CalendarView = (function(Backbone,
                             _,
                             load_template,
                             ProjectsCollection,
                             TasksCollection,
                             CalendarProjects) {
    "use strict";
    
    /**
     * Вид страницы с календарем
     * @class CalendarView
     * @constructor
     * @exteds Backbone.View
     */
    return Backbone.View.extend({
        id: "calendar-view",
        
        template: load_template("calendar_template"),
        currentProject: null,
        /**
         * Инициализация вида
         * 
         * @method initialize
         */
        initialize: function() {
            this.mediator = _.extend({}, Backbone.Events);
            this.projects = new ProjectsCollection();
            this.tasks = new TasksCollection();
            
            this.projects.fetch({ async: false });
            this.tasks.fetch({ async: false });
            
            this.calendarProjects = new CalendarProjects({
                projects: this.projects,
                mediator: this.mediator
            });
            
            this.listenTo(this.mediator, "proj_selected", this.proj_selected.bind(this));
        },
        /**
         * Рендеринг вида
         * 
         * @method render
         * @chainable
         */
        render: function() {
            // добавление шаблона в страницу
            this.$el.append(this.template);
            // добавление календаря
            this.$("#calendar-container").fullCalendar({
                firstDay: 1,
                height: 500,
                header: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'month,agendaWeek,agendaDay'
                },
                monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                monthNamesShort: ['Янв.','Фев.','Март','Апр.','Май','Июнь','Июль','Авг.','Сент.','Окт.','Ноя.','Дек.'],
                dayNames: ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],
                dayNamesShort: ["ВС","ПН","ВТ","СР","ЧТ","ПТ","СБ"],
                buttonText: {
                    prev: "&nbsp;&#9668;&nbsp;",
                    next: "&nbsp;&#9658;&nbsp;",
                    prevYear: "&nbsp;&lt;&lt;&nbsp;",
                    nextYear: "&nbsp;&gt;&gt;&nbsp;",
                    today: "Сегодня",
                    month: "Месяц",
                    week: "Неделя",
                    day: "День"
                },
                 events: this.calendarEvents.bind(this)
            });
            
            this.$("#projects-container").append(this.calendarProjects.render().$el);
            
            return this;
        },
        /**
         * Метод предоставляющий календарю задачи
         *
         * @method calendarEvents
         * @param {Date} start дата начала
         * @param {Date} end дата конца
         * @param {Агтсешщт} callback функция которой необходимо передать Events
         */
        calendarEvents: function(start, end, callback) {
            var calendarTasks,
                events,
                that = this;
            
            events = [];
            calendarTasks = this.tasks.filter(function(task) {
                var start_datetime,
                    end_datetime,
                    start_i,
                    end_i;
                
                // филтрация по проекту
                if (that.currentProject &&
                    task.get("project_id") !== that.currentProject.id) {
                    return false;
                }
                
                start_i = start.getTime();
                end_i = end.getTime();
                
                start_datetime = task.get("start_datetime");
                end_datetime = task.get("end_datetime");
                
                if (start_datetime & end_datetime & (start_i <= start_datetime & start_datetime <= end_i) ||
                    (start_i <= end_datetime & end_datetime <= end_i)) {
                    return true;
                } else {
                    
                    return false;
                }
            });
            
            calendarTasks.forEach(function(task) {
                var project,
                    backgroundColor;
                
                project = that.projects.get(task.get("project_id"));
                backgroundColor = (project) ? project.get("color"): "";
                
                events.push({
                    id: task.id,
                    title: task.get("name"),
                    allDay: false,
                    start: new Date().setTime(task.get("start_datetime") / 1000),
                    end: new Date().setTime(task.get("end_datetime") / 1000),
                    backgroundColor: backgroundColor,
                    borderColor: backgroundColor
                });
            });
            
            callback(events);
        },
        
        remove: function() {
            this.calendarProjects.remove();
            
            return Backbone.View.prototype.remove.call(this, arguments);
        },
        /**
         * Метод управдяющий отображением задач проектов на календаре
         *
         * @method proj_selected
         */
        proj_selected: function(options) {
            this.currentProject = options.project;
            this.$("#calendar-container").fullCalendar('refetchEvents');
        }
    });
} (Backbone,
   _,
   load_template,
   ProjectsCollection,
   TasksCollection,
   CalendarProjects));
/*--------------*/
var SettingsView = (function(Backbone,
                             _,
                             ProjectsCollection,
                             load_template) {
    "use strict";
    
    var SettingsView = Backbone.View.extend({
        id: "settings-view",
        
        template: load_template("settings_template"),
        
        render: function() {
            this.$el.append(this.template);
            
            return this;
        }
    });
    
    return SettingsView;
} (Backbone,
   _,
   ProjectsCollection,
   load_template));
/*--------------*/
/**
 * Модуль вида report.js
 *
 * @module report.js
 */
var ReportView = (function(Backbone,
                           load_template) {
    /**
     * Вид страницы с отчетами
     * 
     * @class ReportView
     * @constructor
     * @extends Backbone.View
     */
    return Backbone.View.extend({
        id: "projects-view",
        template: load_template("report_template"),
        /**
         * Рендеринг вида
         * 
         * @method render
         * @chainable
         */
        render: function() {
            this.$el.append(this.template);
            
            return this;
        }
    });
    
}(Backbone,
  load_template));
/*--------------*/
var ApplicationView = (function(Backbone,
                                HomeView,
                                CalendarView,
                                ReportView,
                                SettingsView) {
    'use strict';
    
    var ApplicationView = Backbone.View.extend({
        currentView: null,
        
        events: {
            "click #menu": "showMenu",
            "click #home": "home",
            "click #calendar": "calendar",
            "click #report": "report",
            "click #settings": "settings"
        },
        
        initialize: function() {},
        
        showMenu: function() { this.$el.addClass("animate modalview"); },
        
        home: function() {
            this.$el.removeClass("animate modalview");
            this.currentView && this.currentView.remove();
            
            this.currentView = new HomeView();
            this.$('.content-container').append(this.currentView.render().el);
        },
        
        calendar: function() {
            this.$el.removeClass("animate modalview");
            this.currentView && this.currentView.remove();
            
            this.currentView = new CalendarView();
            this.$('.content-container').append(this.currentView.render().el);
            this.currentView.$("#calendar-container").fullCalendar('render');
        },
        
        report: function() {
            this.$el.removeClass("animate modalview");
            this.currentView && this.currentView.remove();
            
            this.currentView = new ReportView();
            this.$('.content-container').append(this.currentView.render().el);
        },
        
        settings: function() {
            this.$el.removeClass("animate modalview");
            this.currentView && this.currentView.remove();
            
            this.currentView = new SettingsView();
            this.$('.content-container').append(this.currentView.render().el);
        }
    });
    
    return ApplicationView;
} (Backbone,
   HomeView,
   CalendarView,
   ReportView,
   SettingsView));
/*--------------*/
$(function (){
    var app;
    
    app = new ApplicationView({
        el: $("body")
    });
    
    app.home();
});