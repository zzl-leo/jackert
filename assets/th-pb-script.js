if(typeof jQuery == 'undefined'){
  /*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
  !function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});
}

var $th = jQuery.noConflict();

$th(document).ready(function(){
  var $th_image_resizer = function(t,r){try{if("original"==r)return t;var e=t.match(/(.*\/[\w\-\_\.]+)\.(\w{2,4})/);return e[1]+"_"+r+"."+e[2]}catch(r){return t}};
  var $th_money_format = function(t,r){function e(t,r){return void 0===t?r:t}function a(t,r,a,o){if(r=e(r,2),a=e(a,","),o=e(o,"."),isNaN(t)||null==t)return 0;t=(t/100).toFixed(r);var n=t.split(".");return n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+a)+(n[1]?o+n[1]:"")}"string"==typeof t&&(t=t.replace(".",""));var o="",n=/\{\{\s*(\w+)\s*\}\}/,i=r||this.money_format;switch(i.match(n)[1]){case"amount":o=a(t,2);break;case"amount_no_decimals":o=a(t,0);break;case"amount_with_comma_separator":o=a(t,2,".",",");break;case"amount_with_space_separator":o=a(t,2," ",",");break;case"amount_with_period_and_space_separator":o=a(t,2," ",".");break;case"amount_no_decimals_with_comma_separator":o=a(t,0,".",",");break;case"amount_no_decimals_with_space_separator":o=a(t,0,".","");break;case"amount_with_space_separator":o=a(t,2,",","");break;case"amount_with_apostrophe_separator":o=a(t,2,"'",".")}return i.replace(n,o)};
  var $th_shop_money = $th('#th_shop_money').attr('content');
  var $th_product_id = $th('#th_product_bundle').data('id');
  var $th_shop_url = Shopify.shop, $th_shop_conveted_url;
  var $th_all_bundles_id = $th('#th_pb_all_bundles_list').data('val');
  var $th_app_ajax_url = 'https://bundle.thimatic-apps.com/';
  var $th_bundle_result_quickview = {};
  var $th_active_currency = Shopify.currency.active;
  if(typeof $th_shop_url != 'undefined' && $th_shop_url != '' && $th_shop_url != null){
    $th_shop_conveted_url = $th_shop_url.replace(/^https?\:\/\//i, '');
  }
  
  function $th_inprecise_round(value) {
    var $th_num = value;
    var $th_with2Decimals = $th_num.toString().match(/^-?\d+(?:\.\d{0,2})?/)[0]
    return $th_with2Decimals;
  }
  var $th_active_currency_rate = $th_inprecise_round(Shopify.currency.rate);

  function $th_bundle_grid_equalizer(){
    setTimeout(function(){
      if($th('.th_pb_bundle_layout_2').length > 0){
        $th('.th_pb_bundle_layout_2').each(function(){
          var $th_figure_height = [], $th_title_price_height = [];
          var $th_bundle_this = $th(this);
          $th_bundle_this.find('.li_product_list_layout_2').each(function(){
            var $th_temp_figure_height = parseFloat($th(this).find('.th_product_img_layout_2').outerHeight());
            var $th_temp_tp_height = parseFloat($th(this).find('.th_pb_list_title_price_layout_2').outerHeight());
            if($th_temp_figure_height != null && $th_temp_figure_height != ''){
              $th_figure_height.push($th_temp_figure_height);
            }
            if($th_temp_tp_height != null && $th_temp_tp_height != '' && !isNaN($th_temp_tp_height)){
              $th_title_price_height.push($th_temp_tp_height);
            }
          });
          var $th_figure_max_height = Math.max.apply(Math, $th_figure_height);
          $th_bundle_this.find('.th_product_img_layout_2').css('min-height', $th_figure_max_height+'px');
          var $th_title_price_max_height = Math.max.apply(Math, $th_title_price_height);
          $th_bundle_this.find('.th_pb_list_title_price_layout_2').css('min-height', $th_title_price_max_height+'px');
        });
      }
    }, 4000);
  }

  function $th_bundle_rivyo_average_rating(){
    if($th('.th_pb_rivyo_average_rating').length > 0){
      var ajax_shop_badge_url = Shopify.shop, ajax_product_handle = new Array();
      if(typeof ajax_shop_badge_url != 'undefined'){
        ajax_shop_badge_url = ajax_shop_badge_url.replace(/^https?\:\/\//i, '');
      }
      $th('.th_pb_rivyo_average_rating').each(function(idx, val){
        ajax_product_handle.push($th(this).data('handle'));
        if(idx === ($th('.th_pb_rivyo_average_rating').length - 1)){
          $th.ajax({
            url: 'https://thimatic-apps.com/product_review/get_review_rating_update.php',
            type: 'post',
            dataType: 'json',
            cache: false,
            data: {shop: ajax_shop_badge_url, product_handles: ajax_product_handle},
            success: function(result){
              $th('.th_pb_rivyo_average_rating').html(result.empty.html);
              $th.each(result, function(key, value){
                $th('.th_pb_rivyo_average_rating[data-handle="'+key+'"]').html(value.html);
                if(key === result.length - 1){
                  $th_bundle_grid_equalizer();
                }
              });
            },
            error: function(XMLHttpRequest, textStatus){
              console.log(XMLHttpRequest);
            }
          });
        }
      });
    }
  }

  function $th_bundle_design(result, th_bundle_id, th_specific_bundle, $th_bundle_code_place){
    var $th_show_rivyo_rating = 'false';
    $th.each(result.bundle_list, function(pro_index, pro_value){
      if(pro_value.product_list != undefined && pro_value.product_list.length > 0){
        $th_bundle_result_quickview[pro_value.bundle_detail.id] = pro_value.product_list;
        var $th_discount = 100 - parseFloat(pro_value.bundle_detail.discount);
        var $th_product = '', $th_total_price_dc = 0, $th_total_price = 0;
        $th_product += '<div class="th_pb_innercode th_pb_wf"><div class="th_pb_title th_pb_wf"><h4>'+pro_value.bundle_detail.bundle_title+'</h4>';
        if(pro_value.bundle_detail.short_desc != '' && pro_value.bundle_detail.short_desc != null){
          $th_product += '<p>'+pro_value.bundle_detail.short_desc+'</p>';
        }
        $th_product += '</div>';
        $th_product += '<div class="th_pb_list th_pb_list_layout_1 th_pb_wf"><ul class="th_pb_list_ul th_pb_list_ul_index_'+pro_value.product_list.length+'" data-bundle="'+pro_value.bundle_detail.id+'" data-discount="'+$th_discount+'" data-fixedprice="'+(pro_value.bundle_detail.fixed_discount) * $th_active_currency_rate+'" data-bundletype="'+pro_value.bundle_detail.discount_type+'">';
        $th.each(pro_value.product_list, function(key, value){
          var $th_fixed_variant_title, $th_product_image;
          if(value.image != undefined && value.image != null && !$th.isEmptyObject(value.image)){
            $th_product_image = $th_image_resizer(value.image.src, 'large');
          } else{
            $th_product_image = $th_app_ajax_url+'assets/img/no-product-image.svg';
          }
          $th_product += '<li class="li_product_list" data-id="'+value.id+'"><div class="th_pb_list_content th_pb_wf"><figure class="th_product_img th_pb_wf">';
          $th_product += '<a href="/products/'+value.handle+'"><img src="'+$th_product_image+'?v=123" alt="'+value.handle+'" /></a>';
          if(result.layout_setting.show_quickview_widget == '1'){
            $th_product += '<span class="th_pb_quickview_product" title="QuickView" data-line="'+pro_value.bundle_detail.id+','+key+'"><svg id="Layer_1_1_" style="enable-background:new 0 0 16 16;" version="1.1" viewBox="0 0 16 16" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M8,3C3.582,3,0,8,0,8s3.582,5,8,5s8-5,8-5S12.418,3,8,3z M8,11c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S9.657,11,8,11  z"/></svg></span>';
          }
          $th_product += '</figure>';
          $th_product += '<div class="th_pb_list_pro_detail th_pb_wf"><h6 class="th_pb_pro_title th_pb_wf"><a href="/products/'+value.handle+'">'+value.title+'</a></h6>';
          if(result.layout_setting.show_rivyo_widget == '1'){
            $th_product += '<div class="th_pb_rivyo_average_rating th_pb_wf" data-handle="'+value.handle+'"></div>';
          }
          var $th_dc_price, $th_dc_cp_price;
          if(value.variants.length <= 1){
            if(pro_value.bundle_detail.discount_type == '1'){
              $th_dc_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
              $th_dc_cp_price = parseFloat(value.variants[0].compare_at_price) * parseFloat(value.selected_qty) * 100;
            } else{
              if(parseFloat(pro_value.bundle_detail.discount) > 0){
                $th_dc_price = ((parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100) * $th_discount) / 100;
                $th_dc_cp_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
              } else{
                $th_dc_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
                $th_dc_cp_price = value.variants[0].compare_at_price > 0 ? parseFloat(value.variants[0].compare_at_price) * parseFloat(value.selected_qty) * 100 : parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
              }
            }
            if(value.variants[0].title == 'Default Title' || value.variants[0].title == 'Default'){
              $th_product += '<div class="th_pb_variants_section th_pb_wf"><select class="th_pb_pro_variants th_pb_wf th_all_bdn_variant_id_'+key+'" style="display:none !important;">';
            } else{
              $th_product += '<div class="th_pb_variants_section th_pb_wf"><select class="th_pb_pro_variants th_pb_wf th_all_bdn_variant_id_'+key+'" style="display:none !important;">';
            }
            if(value.variants[0].inventory_management == 'shopify' || value.variants[0].inventory_management == 'SHOPIFY'){
              if(value.variants[0].inventory_policy != 'deny' && value.variants[0].inventory_policy != 'DENY'){
                $th_product += '<option value="'+value.variants[0].id+'" data-title="'+value.variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+value.variants[0].title+'</option>';
              } else{
                if(value.variants[0].inventory_quantity > 0){
                  $th_product += '<option value="'+value.variants[0].id+'" data-title="'+value.variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+value.variants[0].title+'</option>';
                } else{
                  $th_product += '<option value="'+value.variants[0].id+'" data-title="'+value.variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="false">'+value.variants[0].title+'</option>';
                }
              }
            } else{
              $th_product += '<option value="'+value.variants[0].id+'" data-title="'+value.variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+value.variants[0].title+'</option>';
            }
            $th_product += '</select></div>';
          } else{
            $th_product += '<div class="th_pb_variants_section th_pb_wf"><select class="th_pb_pro_variants th_pb_wf th_bundle_main_select_hide_cls th_all_bdn_variant_id_'+key+'">';
            $th.each(value.variants, function(variant_key, variant){
              if(pro_value.bundle_detail.bundle_type == '1'){
                if(value.selected_variant == variant.id){
                  $th_fixed_variant_title = variant.title;
                  if(pro_value.bundle_detail.discount_type == '1'){
                    $th_dc_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                    $th_dc_cp_price = parseFloat(variant.compare_at_price) * parseFloat(value.selected_qty) * 100;
                  } else{
                    if(parseFloat(pro_value.bundle_detail.discount) > 0){
                      $th_dc_price = ((parseFloat(variant.price) * parseFloat(value.selected_qty) * 100) * $th_discount) / 100;
                      $th_dc_cp_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                    } else{
                      $th_dc_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                      $th_dc_cp_price = variant.compare_at_price > 0 ? parseFloat(variant.compare_at_price) * parseFloat(value.selected_qty) * 100 : parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                    }
                  }
                  if(value.image != undefined && value.image != null && !$th.isEmptyObject(value.image)){
                    $th_product_image = $th_image_resizer(value.image.src, 'large');
                  } else{
                    $th_product_image = $th_app_ajax_url+'assets/img/no-product-image.svg';
                  }
                  if(variant.image !== undefined && variant.image !== null){
                    $th_product_image = $th_image_resizer(variant.image.originalSrc, 'large');
                  }
                  if(variant.inventory_management == 'shopify' || variant.inventory_management == 'SHOPIFY'){
                    if(variant.inventory_policy != 'deny' && variant.inventory_policy != 'DENY'){
                      $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                    } else{
                      if(variant.inventory_quantity > 0){
                        $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                      } else{
                        $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="false">'+variant.title+'</option>';
                      }
                    }
                  } else{
                    $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                  }
                }
              } else{
                if(pro_value.bundle_detail.discount_type == '1'){
                  $th_dc_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                  $th_dc_cp_price = parseFloat(variant.compare_at_price) * parseFloat(value.selected_qty) * 100;
                } else{
                  if(parseFloat(pro_value.bundle_detail.discount) > 0){
                    $th_dc_price = ((parseFloat(variant.price) * parseFloat(value.selected_qty) * 100) * $th_discount) / 100;
                    $th_dc_cp_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                  } else{
                    $th_dc_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                    $th_dc_cp_price = variant.compare_at_price > 0 ? parseFloat(variant.compare_at_price) * parseFloat(value.selected_qty) * 100 : parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                  }
                }
                if(value.image != undefined && value.image != null && !$th.isEmptyObject(value.image)){
                  $th_product_image = $th_image_resizer(value.image.src, 'large');
                } else{
                  $th_product_image = $th_app_ajax_url+'assets/img/no-product-image.svg';
                }
                if(variant.image !== undefined && variant.image !== null){
                  $th_product_image = $th_image_resizer(variant.image.originalSrc, 'large');
                }
                if(variant.inventory_management == 'shopify' || variant.inventory_management == 'SHOPIFY'){
                  if(variant.inventory_policy != 'deny' && variant.inventory_policy != 'DENY'){
                    $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                  } else{
                    if(variant.inventory_quantity > 0){
                      $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                    } else{
                      $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="false">'+variant.title+'</option>';
                    }
                  }
                } else{
                  $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                }
              }
            });
            $th_product += '</select>';
            if(pro_value.bundle_detail.bundle_type == '1'){
              $th_product += '<div class="th_pb_wf th_pb_fix_variant_val">';
              $th_product += '<span>'+$th_fixed_variant_title+'</span>';
              $th_product += '</div>';
            } else{
              $th.each(value.options, function(option_key, option_val){
                $th_product += '<div class="th_pb_wf th_pb_variants_select_div">';
                $th_product += '<label class="th_pb_wf th_pb_option_label_cls" data-name="'+option_val.name+'">'+option_val.name+'</label>';
                $th_product += '<select class="th_pb_wf th_pb_option_select_cls" data-name="'+option_val.name+'">';
                $th.each(option_val.values, function(option_title_key, option_title_val){
                  $th_product += '<option value="'+option_title_val.replace(/"/g, "'")+'">'+option_title_val+'</option>';
                });
                $th_product += '</select></div>';
              });
            }
            $th_product += '</div>';
          }
          $th_product += '<p class="th_pb_bd_qty th_pb_wf th_all_bdn_qty_id_'+key+'" data-id="'+value.id+'" data-qty="'+value.selected_qty+'">'+result.layout_setting.language.quantity+': <span>'+value.selected_qty+'</span></p>';
          if(pro_value.bundle_detail.discount_type == '1'){
            $th_dc_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
            $th_dc_cp_price = parseFloat(value.variants[0].compare_at_price) * parseFloat(value.selected_qty) * 100;
          } else{
            if(parseFloat(pro_value.bundle_detail.discount) > 0){
              $th_dc_price = ((parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100) * $th_discount) / 100;
              $th_dc_cp_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
            } else{
              $th_dc_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
              $th_dc_cp_price = value.variants[0].compare_at_price > 0 ? parseFloat(value.variants[0].compare_at_price) * parseFloat(value.selected_qty) * 100 : parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
            }
          }
          $th_product += '<p class="th_pb_list_price th_pb_wf"><span class="th_pb_main_price"><span class="money">'+$th_money_format($th_dc_price, $th_shop_money)+'</span></span>';
          if($th_dc_cp_price > $th_dc_price){
            $th_product += '<span class="th_pb_old_price"><span class="money th_pb_line_through">'+$th_money_format($th_dc_cp_price, $th_shop_money)+'</span></span>';
          }
          $th_product += '</p></div></div></li>';
        });
        $th_product += '</ul>';
        $th_product += '<div class="th_pb_addtocart_section th_pb_wf">';
        if(pro_value.bundle_detail.discount > 0){
          if(pro_value.bundle_detail.discount_type == '1'){
            var $th_fixed_discount_val = (parseFloat(pro_value.bundle_detail.fixed_discount) * 100) * $th_active_currency_rate;
            $th_total_price_dc = $th_total_price - $th_fixed_discount_val;
            $th_product += '<p class="th_pb_total_price th_pb_wf">'+result.layout_setting.language.total_price+' <span class="th_pb_total_sale_price"><span class="money">'+$th_money_format($th_total_price_dc, $th_shop_money)+'</span></span><span class="th_pb_old_price"><span class="money th_pb_line_through">'+$th_money_format($th_total_price, $th_shop_money)+'</span></span><span class="th_pb_total_save_label"><span class="th_pb_total_save_text">'+result.layout_setting.language.save+'</span><span class="th_pb_total_save_price"></span></span></p>';
          } else{
            $th_product += '<p class="th_pb_total_price th_pb_wf">'+result.layout_setting.language.total_price+' <span class="th_pb_total_sale_price"><span class="money">'+$th_money_format($th_total_price_dc, $th_shop_money)+'</span></span><span class="th_pb_old_price"><span class="money th_pb_line_through">'+$th_money_format($th_total_price, $th_shop_money)+'</span></span><span class="th_pb_total_save_label"><span class="th_pb_total_save_text">'+result.layout_setting.language.save+'</span><span class="th_pb_total_save_price"></span></span></p>';
          }
        } else{
          $th_product += '<p class="th_pb_total_price th_pb_wf">'+result.layout_setting.language.total_price+' <span class="th_pb_total_sale_price"><span class="money">'+$th_money_format($th_total_price_dc, $th_shop_money)+'</span></span><span class="th_pb_old_price"><span class="money th_pb_line_through"></span></span><span class="th_pb_total_save_label"><span class="th_pb_total_save_text">'+result.layout_setting.language.save+'</span><span class="th_pb_total_save_price"></span></span></p>';
        }
        $th_product += '<div class="th_ajax_error" data-msg="'+result.layout_setting.language.not_available+'"></div>';
        $th_product += '<div value="add_to_cart" class="th_pb_add_to_cart btn button" data-checkout="'+result.layout_setting.direct_checkout+'" data-dismode="'+result.layout_setting.discount_mode+'">';
        $th_product += '<span class="button_text">'+pro_value.bundle_detail.button_text+'</span> <em class="th_pb_add_to_cart_loader"></em>';
        $th_product += '</div></div></div></div>';
        if(th_specific_bundle == 'null'){
          if($th_bundle_code_place == '$th_bundle_after_code'){
            if(result.layout_setting.automatic_show_bundle == '1'){
              $th(th_bundle_id+':first').after('<div class="th_pb_section" id="th_product_bundle">'+$th_product+'</div>');
            }
          } else{
            $th(th_bundle_id).append($th_product);
          }
        } else{
          th_specific_bundle.append($th_product);
        }
      }
    });

    $th('.th_pb_pro_variants').trigger('change');
    $th_bundle_grid_equalizer();
    if(result.layout_setting.show_rivyo_widget == '1'){
      $th_bundle_rivyo_average_rating();
    }
  }

  function $th_bundle_design_layout_2(result, th_bundle_id, th_specific_bundle, $th_bundle_code_place){
    var $th_show_rivyo_rating = 'false';
    $th.each(result.bundle_list, function(pro_index, pro_value){
      if(pro_value.product_list != undefined && pro_value.product_list.length > 0){
        $th_bundle_result_quickview[pro_value.bundle_detail.id] = pro_value.product_list;
        var $th_discount = 100 - parseFloat(pro_value.bundle_detail.discount);
        var $th_product = '', $th_total_price_dc = 0, $th_total_price = 0;
        $th_product += '<div class="th_pb_innercode th_pb_wf th_pb_bundle_layout_2"><div class="th_pb_title th_pb_wf"><h4>'+pro_value.bundle_detail.bundle_title+'</h4>';
        if(pro_value.bundle_detail.short_desc != '' && pro_value.bundle_detail.short_desc != null){
          $th_product += '<p>'+pro_value.bundle_detail.short_desc+'</p>';
        }
        $th_product += '</div>';
        $th_product += '<div class="th_pb_grid_layout_2 th_pb_wf"><ul class="th_pb_list_ul th_pb_list_ul_layout_2 th_pb_list_ul_index_'+pro_value.product_list.length+'" data-bundle="'+pro_value.bundle_detail.id+'" data-discount="'+$th_discount+'" data-fixedprice="'+(pro_value.bundle_detail.fixed_discount) * $th_active_currency_rate+'" data-bundletype="'+pro_value.bundle_detail.discount_type+'">';
        $th.each(pro_value.product_list, function(key, value){
          var $th_fixed_variant_title, $th_product_image;
          if(value.image != undefined && value.image != null && !$th.isEmptyObject(value.image)){
            $th_product_image = $th_image_resizer(value.image.src, 'large');
          } else{
            $th_product_image = $th_app_ajax_url+'assets/img/no-product-image.svg';
          }
          $th_product += '<li class="li_product_list li_product_list_layout_2" data-id="'+value.id+'"><div class="th_pb_list_content th_pb_wf th_pb_list_content_layout_2"><div class="th_pb_figure_div_layout_2 th_pb_wf"><figure class="th_product_img th_pb_wf th_product_img_layout_2">';
          $th_product += '<a href="/products/'+value.handle+'"><img src="'+$th_product_image+'?v=123" alt="'+value.handle+'" /></a>';
          if(result.layout_setting.show_quickview_widget == '1'){
            $th_product += '<span class="th_pb_quickview_product" title="QuickView" data-line="'+pro_value.bundle_detail.id+','+key+'"><svg id="Layer_1_1_" style="enable-background:new 0 0 16 16;" version="1.1" viewBox="0 0 16 16" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M8,3C3.582,3,0,8,0,8s3.582,5,8,5s8-5,8-5S12.418,3,8,3z M8,11c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S9.657,11,8,11  z"/></svg></span>';
          }
          $th_product += '</figure></div>';
          $th_product += '<div class="th_pb_list_pro_detail th_pb_wf th_pb_list_pro_detail_layout_2"><div class="th_pb_list_title_price_layout_2 th_pb_wf"><h6 class="th_pb_pro_title th_pb_wf"><a href="/products/'+value.handle+'">'+value.title+'</a></h6>';
          if(result.layout_setting.show_rivyo_widget == '1'){
            $th_product += '<div class="th_pb_rivyo_average_rating th_pb_wf" data-handle="'+value.handle+'"></div>';
          }
          $th_product += '<p class="th_pb_bd_qty th_pb_wf th_pb_bd_qty_layout_2 th_pb_qty_'+key+' th_all_bdn_qty_id_'+key+'" data-id="'+value.id+'" data-qty="'+value.selected_qty+'">'+result.layout_setting.language.quantity+': <span>'+value.selected_qty+'</span></p>';
          var $th_dc_price, $th_dc_cp_price;
          if(pro_value.bundle_detail.discount_type == '1'){
            $th_dc_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
            $th_dc_cp_price = parseFloat(value.variants[0].compare_at_price) * parseFloat(value.selected_qty) * 100;
          } else{
            if(parseFloat(pro_value.bundle_detail.discount) > 0){
              $th_dc_price = ((parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100) * $th_discount) / 100;
              $th_dc_cp_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
            } else{
              $th_dc_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
              $th_dc_cp_price = value.variants[0].compare_at_price > 0 ? parseFloat(value.variants[0].compare_at_price) * parseFloat(value.selected_qty) * 100 : parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
            }
          }
          $th_product += '<p class="th_pb_list_price th_pb_wf th_pb_list_price_layout_2"><span class="th_pb_main_price"><span class="money">'+$th_money_format($th_dc_price, $th_shop_money)+'</span></span>';
          if($th_dc_cp_price > $th_dc_price){
            $th_product += '<span class="th_pb_old_price"><span class="money th_pb_line_through">'+$th_money_format($th_dc_cp_price, $th_shop_money)+'</span></span>';
          }
          $th_product +='</p></div>';
          if(value.variants.length <= 1){
            if(pro_value.bundle_detail.discount_type == '1'){
              $th_dc_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
              $th_dc_cp_price = parseFloat(value.variants[0].compare_at_price) * parseFloat(value.selected_qty) * 100;
            } else{
              if(parseFloat(pro_value.bundle_detail.discount) > 0){
                $th_dc_price = ((parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100) * $th_discount) / 100;
                $th_dc_cp_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
              } else{
                $th_dc_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
                $th_dc_cp_price = value.variants[0].compare_at_price > 0 ? parseFloat(value.variants[0].compare_at_price) * parseFloat(value.selected_qty) * 100 : parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
              }
            }
            if(value.variants[0].title == 'Default Title' || value.variants[0].title == 'Default'){
              $th_product += '<div class="th_pb_variants_section th_pb_wf"><select class="th_pb_pro_variants th_pb_wf th_all_bdn_variant_id_'+key+'" style="display:none !important;">';
            } else{
              $th_product += '<div class="th_pb_variants_section th_pb_wf"><select class="th_pb_pro_variants th_pb_wf th_all_bdn_variant_id_'+key+'" style="display:none !important;">';
            }
            if(value.variants[0].inventory_management == 'shopify' || value.variants[0].inventory_management == 'SHOPIFY'){
              if(value.variants[0].inventory_policy != 'deny' && value.variants[0].inventory_policy != 'DENY'){
                $th_product += '<option value="'+value.variants[0].id+'" data-title="'+value.variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+value.variants[0].title+'</option>';
              } else{
                if(value.variants[0].inventory_quantity > 0){
                  $th_product += '<option value="'+value.variants[0].id+'" data-title="'+value.variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+value.variants[0].title+'</option>';
                } else{
                  $th_product += '<option value="'+value.variants[0].id+'" data-title="'+value.variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="false">'+value.variants[0].title+'</option>';
                }
              }
            } else{
              $th_product += '<option value="'+value.variants[0].id+'" data-title="'+value.variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+(value.variants[0].price * 100)+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+value.variants[0].title+'</option>';
            }
            $th_product += '</select></div>';
          } else{
            $th_product += '<div class="th_pb_variants_section th_pb_wf th_pb_variants_section_layout_2"><select class="th_pb_pro_variants th_pb_wf th_bundle_main_select_hide_cls th_all_bdn_variant_id_'+key+'">';
            $th.each(value.variants, function(variant_key, variant){
              if(pro_value.bundle_detail.bundle_type == '1'){
                if(value.selected_variant == variant.id){
                  $th_fixed_variant_title = variant.title;
                  if(pro_value.bundle_detail.discount_type == '1'){
                    $th_dc_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                    $th_dc_cp_price = parseFloat(variant.compare_at_price) * parseFloat(value.selected_qty) * 100;
                  } else{
                    if(parseFloat(pro_value.bundle_detail.discount) > 0){
                      $th_dc_price = ((parseFloat(variant.price) * parseFloat(value.selected_qty) * 100) * $th_discount) / 100;
                      $th_dc_cp_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                    } else{
                      $th_dc_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                      $th_dc_cp_price = variant.compare_at_price > 0 ? parseFloat(variant.compare_at_price) * parseFloat(value.selected_qty) * 100 : parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                    }
                  }
                  if(value.image != undefined && value.image != null && !$th.isEmptyObject(value.image)){
                    $th_product_image = $th_image_resizer(value.image.src, 'large');
                  } else{
                    $th_product_image = $th_app_ajax_url+'assets/img/no-product-image.svg';
                  }
                  if(variant.image !== undefined && variant.image !== null){
                    $th_product_image = $th_image_resizer(variant.image.originalSrc, 'large');
                  }
                  if(variant.inventory_management == 'shopify' || variant.inventory_management == 'SHOPIFY'){
                    if(variant.inventory_policy != 'deny' && variant.inventory_policy != 'DENY'){
                      $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                    } else{
                      if(variant.inventory_quantity > 0){
                        $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                      } else{
                        $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="false">'+variant.title+'</option>';
                      }
                    }
                  } else{
                    $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                  }
                }
              } else{
                if(pro_value.bundle_detail.discount_type == '1'){
                  $th_dc_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                  $th_dc_cp_price = parseFloat(variant.compare_at_price) * parseFloat(value.selected_qty) * 100;
                } else{
                  if(parseFloat(pro_value.bundle_detail.discount) > 0){
                    $th_dc_price = ((parseFloat(variant.price) * 100) * parseFloat(value.selected_qty) * $th_discount) / 100;
                    $th_dc_cp_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                  } else{
                    $th_dc_price = parseFloat(variant.price) * 100;
                    $th_dc_cp_price = variant.compare_at_price > 0 ? parseFloat(variant.compare_at_price) * parseFloat(value.selected_qty) * 100 : parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                  }
                }
                if(value.image != undefined && value.image != null && !$th.isEmptyObject(value.image)){
                  $th_product_image = $th_image_resizer(value.image.src, 'large');
                } else{
                  $th_product_image = $th_app_ajax_url+'assets/img/no-product-image.svg';
                }
                if(variant.image !== undefined && variant.image !== null){
                  $th_product_image = $th_image_resizer(variant.image.originalSrc, 'large');
                }
                if(variant.inventory_management == 'shopify' || variant.inventory_management == 'SHOPIFY'){
                  if(variant.inventory_policy != 'deny' && variant.inventory_policy != 'DENY'){
                    $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                  } else{
                    if(variant.inventory_quantity > 0){
                      $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                    } else{
                      $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="false">'+variant.title+'</option>';
                    }
                  }
                } else{
                  $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                }
              }
            });
            $th_product += '</select>';
            if(pro_value.bundle_detail.bundle_type == '1'){
              $th_product += '<div class="th_pb_wf th_pb_fix_variant_val">';
              $th_product += '<span>'+$th_fixed_variant_title+'</span>';
              $th_product += '</div>';
            } else{
              $th.each(value.options, function(option_key, option_val){
                $th_product += '<div class="th_pb_wf th_pb_variants_select_div_layout_2">';
                $th_product += '<label class="th_pb_wf th_pb_option_label_cls" data-name="'+option_val.name+'">'+option_val.name+'</label>';
                $th_product += '<select class="th_pb_wf th_pb_option_select_cls" data-name="'+option_val.name+'">';
                $th.each(option_val.values, function(option_title_key, option_title_val){
                  $th_product += '<option value="'+option_title_val.replace(/"/g, "'")+'">'+option_title_val+'</option>';
                });
                $th_product += '</select></div>';
              });
            }
            $th_product += '</div>';
          }
          $th_product += '</div></div></li>';
        });
        $th_product += '</ul>';
        $th_product += '<div class="li_product_list_layout_2 li_product_list_addtocart_layout_2"><div class="th_pb_list_content th_pb_wf th_pb_list_content_layout_2">';
        $th_product += '<div class="th_pb_addtocart_section th_pb_wf th_pb_addtocart_section_layout_2"><div class="th_pb_figure_div_layout_2 th_pb_wf">';
        $th_product += '<figure class="th_product_img th_pb_wf th_product_img_layout_2">';
        $th_product += '<div class="th_pb_total_price th_pb_wf th_pb_total_price_layout_2">';
        if(pro_value.bundle_detail.discount > 0){
          $th_product += '<div class="th_pb_wf th_pb_total_price_inner_layout_2">';
          $th_product += '<span class="th_pb_wf th_pb_separatly_price_text">'+result.layout_setting.language.separate_price+' <span class="th_pb_old_price"><span class="money th_pb_line_through">'+$th_money_format($th_total_price, $th_shop_money)+'</span></span></span>';
          if(pro_value.bundle_detail.discount_type == '1'){
            var $th_fixed_discount_val = (parseFloat(pro_value.bundle_detail.fixed_discount) * 100) * $th_active_currency_rate;
            $th_product += '<span class="th_pb_wf th_pb_total_save_text">'+result.layout_setting.language.save+' <span class="th_pb_total_sale_percentage"><span class="money">'+$th_money_format($th_fixed_discount_val, $th_shop_money)+'</span></span></span>';
          } else{
            $th_product += '<span class="th_pb_wf th_pb_total_save_text">'+result.layout_setting.language.save+' <span class="th_pb_total_sale_percentage">'+pro_value.bundle_detail.discount+'%</span></span>';
          }
          $th_product += '</div>';
        }
        $th_product += '<div class="th_pb_wf th_pb_total_save_inner_layout_2">';
        $th_product += '<span class="th_pb_wf th_pb_total_price_text"><span class="th_pb_total_price_text_content">'+result.layout_setting.language.total_price+'</span> <span class="th_pb_total_sale_price"><span class="money">'+$th_money_format($th_total_price_dc, $th_shop_money)+'</span></span></span>';
        $th_product += '</div></figure></div>';
        $th_product += '<div class="th_ajax_error" data-msg="'+result.layout_setting.language.not_available+'"></div>';
        $th_product += '<div value="add_to_cart" class="th_pb_add_to_cart btn button" data-checkout="'+result.layout_setting.direct_checkout+'" data-dismode="'+result.layout_setting.discount_mode+'">';
        $th_product += '<span class="button_text">'+pro_value.bundle_detail.button_text+'</span> <em class="th_pb_add_to_cart_loader"></em>';
        $th_product += '</div></div></div>';
        $th_product += '</div></div>';
        if(th_specific_bundle == 'null'){
          if($th_bundle_code_place == '$th_bundle_after_code'){
            if(result.layout_setting.automatic_show_bundle == '1'){
              $th(th_bundle_id+':first').after('<div class="th_pb_section" id="th_product_bundle">'+$th_product+'</div>');
            }
          } else{
            $th(th_bundle_id).append($th_product);
          }
        } else{
          th_specific_bundle.append($th_product);
        }
      }
    });

    $th('.th_pb_pro_variants').trigger('change');
    $th_bundle_grid_equalizer();
    if(result.layout_setting.show_rivyo_widget == '1'){
      $th_bundle_rivyo_average_rating();
    }
  }

  function $th_bundle_design_layout_3(result, th_bundle_id, th_specific_bundle, $th_bundle_code_place){
    var $th_show_rivyo_rating = 'false';
    $th.each(result.bundle_list, function(pro_index, pro_value){
      if(pro_value.product_list != undefined && pro_value.product_list.length > 0){
        $th_bundle_result_quickview[pro_value.bundle_detail.id] = pro_value.product_list;
        var $th_discount = 100 - parseFloat(pro_value.bundle_detail.discount);
        var $th_product = '', $th_total_price_dc = 0, $th_total_price = 0, $th_product_length = '';
        if(pro_value.product_list.length > 3){
          $th_product_length = 'li_product_list_four_grid';
        }
        $th_product += '<div class="th_pb_innercode th_pb_wf th_pb_bundle_layout_3"><div class="th_pb_title th_pb_wf"><h4>'+pro_value.bundle_detail.bundle_title+'</h4>';
        if(pro_value.bundle_detail.short_desc != '' && pro_value.bundle_detail.short_desc != null){
          $th_product += '<p>'+pro_value.bundle_detail.short_desc+'</p>';
        }
        $th_product += '</div>';
        $th_product += '<div class="th_pb_grid_layout_3 th_pb_wf"><ul class="th_pb_list_ul th_pb_list_ul_layout_3 th_pb_list_ul_index_'+pro_value.product_list.length+'" data-bundle="'+pro_value.bundle_detail.id+'" data-discount="'+$th_discount+'" data-fixedprice="'+(pro_value.bundle_detail.fixed_discount) * $th_active_currency_rate+'" data-bundletype="'+pro_value.bundle_detail.discount_type+'">';
        $th.each(pro_value.product_list, function(key, value){
          var $th_fixed_variant_title, $th_product_image;
          if(value.image != undefined && value.image != null && !$th.isEmptyObject(value.image)){
            $th_product_image = $th_image_resizer(value.image.src, 'large');
          } else{
            $th_product_image = $th_app_ajax_url+'assets/img/no-product-image.svg';
          }
          $th_product += '<li class="li_product_list li_product_list_layout_3 '+$th_product_length+'" data-id="'+value.id+'"><div class="th_pb_list_content th_pb_wf th_pb_list_content_layout_3"><div class="th_pb_figure_div_layout_3 th_pb_wf"><figure class="th_product_img th_pb_wf th_product_img_layout_3">';
          $th_product += '<a href="/products/'+value.handle+'"><img src="'+$th_product_image+'?v=123" alt="'+value.handle+'" /></a>';
          if(result.layout_setting.show_quickview_widget == '1'){
            $th_product += '<span class="th_pb_quickview_product" title="QuickView" data-line="'+pro_value.bundle_detail.id+','+key+'"><svg id="Layer_1_1_" style="enable-background:new 0 0 16 16;" version="1.1" viewBox="0 0 16 16" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M8,3C3.582,3,0,8,0,8s3.582,5,8,5s8-5,8-5S12.418,3,8,3z M8,11c-1.657,0-3-1.343-3-3s1.343-3,3-3s3,1.343,3,3S9.657,11,8,11  z"/></svg></span>';
          }
          $th_product += '</figure></div>';
          $th_product += '<div class="th_pb_list_pro_detail th_pb_wf th_pb_list_pro_detail_layout_3"><div class="th_pb_list_title_price_layout_3 th_pb_wf"><h6 class="th_pb_pro_title th_pb_wf"><a href="/products/'+value.handle+'">'+value.title+'</a></h6>';
          if(result.layout_setting.show_rivyo_widget == '1'){
            $th_product += '<div class="th_pb_rivyo_average_rating th_pb_wf" data-handle="'+value.handle+'"></div>';
          }

          $th_product += '<p class="th_pb_bd_qty th_pb_wf th_pb_bd_qty_layout_3 th_pb_qty_'+key+' th_all_bdn_qty_id_'+key+'" data-id="'+value.id+'" data-qty="'+value.selected_qty+'">'+result.layout_setting.language.quantity+': <span>'+value.selected_qty+'</span></p>';
          var $th_dc_price, $th_dc_cp_price;
          if(pro_value.bundle_detail.discount_type == '1'){
            $th_dc_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
            $th_dc_cp_price = parseFloat(value.variants[0].compare_at_price) * parseFloat(value.selected_qty) * 100;
          } else{
            if(parseFloat(pro_value.bundle_detail.discount) > 0){
              $th_dc_price = ((parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100) * $th_discount) / 100;
              $th_dc_cp_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
            } else{
              $th_dc_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
              $th_dc_cp_price = value.variants[0].compare_at_price > 0 ? parseFloat(value.variants[0].compare_at_price) * parseFloat(value.selected_qty) * 100 : parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
            }
          }
          $th_product += '<p class="th_pb_list_price th_pb_wf th_pb_list_price_layout_3"><span class="th_pb_main_price"><span class="money">'+$th_money_format($th_dc_price, $th_shop_money)+'</span></span>';
          if($th_dc_cp_price > $th_dc_price){
            $th_product += '<span class="th_pb_old_price"><span class="money th_pb_line_through">'+$th_money_format($th_dc_cp_price, $th_shop_money)+'</span></span>';
          }
          $th_product +='</p></div>';
          if(value.variants.length <= 1){
            if(pro_value.bundle_detail.discount_type == '1'){
              $th_dc_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
              $th_dc_cp_price = parseFloat(value.variants[0].compare_at_price) * parseFloat(value.selected_qty) * 100;
            } else{
              if(parseFloat(pro_value.bundle_detail.discount) > 0){
                $th_dc_price = ((parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100) * $th_discount) / 100;
                $th_dc_cp_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
              } else{
                $th_dc_price = parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
                $th_dc_cp_price = value.variants[0].compare_at_price > 0 ? parseFloat(value.variants[0].compare_at_price) * parseFloat(value.selected_qty) * 100 : parseFloat(value.variants[0].price) * parseFloat(value.selected_qty) * 100;
              }
            }
            if(value.variants[0].title == 'Default Title' || value.variants[0].title == 'Default'){
              $th_product += '<div class="th_pb_variants_section th_pb_wf"><select class="th_pb_pro_variants th_pb_wf th_all_bdn_variant_id_'+key+'" style="display:none !important;">';
            } else{
              $th_product += '<div class="th_pb_variants_section th_pb_wf"><select class="th_pb_pro_variants th_pb_wf th_all_bdn_variant_id_'+key+'" style="display:none !important;">';
            }
            if(value.variants[0].inventory_management == 'shopify' || value.variants[0].inventory_management == 'SHOPIFY'){
              if(value.variants[0].inventory_policy != 'deny' && value.variants[0].inventory_policy != 'DENY'){
                $th_product += '<option value="'+value.variants[0].id+'" data-title="'+value.variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+value.variants[0].title+'</option>';
              } else{
                if(value.variants[0].inventory_quantity > 0){
                  $th_product += '<option value="'+value.variants[0].id+'" data-title="'+value.variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+value.variants[0].title+'</option>';
                } else{
                  $th_product += '<option value="'+value.variants[0].id+'" data-title="'+value.variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="false">'+value.variants[0].title+'</option>';
                }
              }
            } else{
              $th_product += '<option value="'+value.variants[0].id+'" data-title="'+value.variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+value.variants[0].title+'</option>';
            }
            $th_product += '</select></div>';
          } else{
            $th_product += '<div class="th_pb_variants_section th_pb_wf th_pb_variants_section_layout_3"><select class="th_pb_pro_variants th_pb_wf th_bundle_main_select_hide_cls th_all_bdn_variant_id_'+key+'">';
            $th.each(value.variants, function(variant_key, variant){
              if(pro_value.bundle_detail.bundle_type == '1'){
                if(value.selected_variant == variant.id){
                  $th_fixed_variant_title = variant.title;
                  if(pro_value.bundle_detail.discount_type == '1'){
                    $th_dc_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                    $th_dc_cp_price = parseFloat(variant.compare_at_price) * parseFloat(value.selected_qty) * 100;
                  } else{
                    if(parseFloat(pro_value.bundle_detail.discount) > 0){
                      $th_dc_price = ((parseFloat(variant.price) * parseFloat(value.selected_qty) * 100) * $th_discount) / 100;
                      $th_dc_cp_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                    } else{
                      $th_dc_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                      $th_dc_cp_price = variant.compare_at_price > 0 ? parseFloat(variant.compare_at_price) * parseFloat(value.selected_qty) * 100 : parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                    }
                  }
                  if(value.image != undefined && value.image != null && !$th.isEmptyObject(value.image)){
                    $th_product_image = $th_image_resizer(value.image.src, 'large');
                  } else{
                    $th_product_image = $th_app_ajax_url+'assets/img/no-product-image.svg';
                  }
                  if(variant.image !== undefined && variant.image !== null){
                    $th_product_image = $th_image_resizer(variant.image.originalSrc, 'large');
                  }
                  if(variant.inventory_management == 'shopify' || variant.inventory_management == 'SHOPIFY'){
                    if(variant.inventory_policy != 'deny' && variant.inventory_policy != 'DENY'){
                      $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                    } else{
                      if(variant.inventory_quantity > 0){
                        $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                      } else{
                        $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="false">'+variant.title+'</option>';
                      }
                    }
                  } else{
                    $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                  }
                }
              } else{
                if(pro_value.bundle_detail.discount_type == '1'){
                  $th_dc_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                  $th_dc_cp_price = parseFloat(variant.compare_at_price) * parseFloat(value.selected_qty) * 100;
                } else{
                  if(parseFloat(pro_value.bundle_detail.discount) > 0){
                    $th_dc_price = ((parseFloat(variant.price) * parseFloat(value.selected_qty) * 100) * $th_discount) / 100;
                    $th_dc_cp_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                  } else{
                    $th_dc_price = parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                    $th_dc_cp_price = variant.compare_at_price > 0 ? parseFloat(variant.compare_at_price) * parseFloat(value.selected_qty) * 100 : parseFloat(variant.price) * parseFloat(value.selected_qty) * 100;
                  }
                }
                if(value.image != undefined && value.image != null && !$th.isEmptyObject(value.image)){
                  $th_product_image = $th_image_resizer(value.image.src, 'large');
                } else{
                  $th_product_image = $th_app_ajax_url+'assets/img/no-product-image.svg';
                }
                if(variant.image !== undefined && variant.image !== null){
                  $th_product_image = $th_image_resizer(variant.image.originalSrc, 'large');
                }
                if(variant.inventory_management == 'shopify' || variant.inventory_management == 'SHOPIFY'){
                  if(variant.inventory_policy != 'deny' && variant.inventory_policy != 'DENY'){
                    $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                  } else{
                    if(variant.inventory_quantity > 0){
                      $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                    } else{
                      $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="false">'+variant.title+'</option>';
                    }
                  }
                } else{
                  $th_product += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+value.title+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123" data-available="true">'+variant.title+'</option>';
                }
              }
            });
            $th_product += '</select>';
            if(pro_value.bundle_detail.bundle_type == '1'){
              $th_product += '<div class="th_pb_wf th_pb_fix_variant_val">';
              $th_product += '<span>'+$th_fixed_variant_title+'</span>';
              $th_product += '</div>';
            } else{
              $th.each(value.options, function(option_key, option_val){
                $th_product += '<div class="th_pb_wf th_pb_variants_select_div_layout_3">';
                $th_product += '<label class="th_pb_wf th_pb_option_label_cls" data-name="'+option_val.name+'">'+option_val.name+'</label>';
                $th_product += '<select class="th_pb_wf th_pb_option_select_cls" data-name="'+option_val.name+'">';
                $th.each(option_val.values, function(option_title_key, option_title_val){
                  $th_product += '<option value="'+option_title_val.replace(/"/g, "'")+'">'+option_title_val+'</option>';
                });
                $th_product += '</select></div>';
              });
            }
            $th_product += '</div>';
          }
          $th_product += '</div></div></li>';
        });
        $th_product += '</ul>';
        $th_product += '<div class="th_pb_wf th_pb_list_content_layout_3"><div class="th_pb_addtocart_section th_pb_wf th_pb_addtocart_section_layout_3"><div class="th_pb_total_price th_pb_wf th_pb_total_price_layout_3">';
        if(pro_value.bundle_detail.discount > 0){
          $th_product += '<div class="th_pb_total_original_price_inner_layout_3">';
          $th_product += '<p class="th_pb_wf"><span class="th_pb_separatly_price_text">'+result.layout_setting.language.separate_price+' </span><span class="th_pb_old_price"><span class="money">'+$th_money_format($th_total_price, $th_shop_money)+'</span></span></p>';
          $th_product += '</div>';
          if(pro_value.bundle_detail.discount_type == '1'){
            $th_product += '<div class="th_pb_total_save_inner_layout_3">';
            var $th_fixed_discount_val = (parseFloat(pro_value.bundle_detail.fixed_discount) * 100) * $th_active_currency_rate;
            $th_product += '<p class="th_pb_wf"><span class="th_pb_wf th_pb_total_save_text">'+result.layout_setting.language.save+' <span class="th_pb_total_sale_percentage"><span class="money">'+$th_money_format($th_fixed_discount_val, $th_shop_money)+'</span></span></span></p>';
            $th_product += '</div>';
          } else{
            $th_product += '<div class="th_pb_total_save_inner_layout_3">';
            $th_product += '<p class="th_pb_wf"><span class="th_pb_wf th_pb_total_save_text">'+result.layout_setting.language.save+' <span class="th_pb_total_sale_percentage">'+pro_value.bundle_detail.discount+'%</span></span></p>';
            $th_product += '</div>';
          }
        }
        $th_product += '<div class="th_pb_total_price_inner_layout_3">';
        $th_product += '<p class="th_pb_wf"><span class="th_pb_total_price_text"><span class="th_pb_total_price_text_content">'+result.layout_setting.language.total_price+'</span> </span><span class="th_pb_total_sale_price"><span class="money">'+$th_money_format($th_total_price_dc, $th_shop_money)+'</span></span></p>';
        $th_product += '</div>';
        $th_product += '<div class="th_pb_addtocart_btn_layout_3"><div value="add_to_cart" class="th_pb_add_to_cart btn button" data-checkout="'+result.layout_setting.direct_checkout+'" data-dismode="'+result.layout_setting.discount_mode+'">'
        $th_product += '<span class="button_text">'+pro_value.bundle_detail.button_text+'</span><em class="th_pb_add_to_cart_loader"></em>'
        $th_product += '</div></div>';
        $th_product += '</div><div class="th_ajax_error" data-msg="'+result.layout_setting.language.not_available+'"></div>';
        $th_product += '</div></div>';
        $th_product += '</div></div>';
        if(th_specific_bundle == 'null'){
          if($th_bundle_code_place == '$th_bundle_after_code'){
            if(result.layout_setting.automatic_show_bundle == '1'){
              $th(th_bundle_id+':first').after('<div class="th_pb_section" id="th_product_bundle">'+$th_product+'</div>');
            }
          } else{
            $th(th_bundle_id).append($th_product);
          }
        } else{
          th_specific_bundle.append($th_product);
        }
      }
    });

    $th('.th_pb_pro_variants').trigger('change');
    $th_bundle_grid_equalizer();
    if(result.layout_setting.show_rivyo_widget == '1'){
      $th_bundle_rivyo_average_rating();
    }
  }

  $th(document).on('click', '.th_pb_quickview_product', function(){
    var $th_quickview = $th(this).data('line');
    $th_quickview = $th_quickview.split(',');
    var $th_pb_quick_product = $th_bundle_result_quickview[$th_quickview[0]][$th_quickview[1]], $th_pb_quick_html = '';
    $th_pb_quick_html += '<div class="th_pb_custome_modal_start th_pb_quickview_popupzoom_in" id="th_pb_product_quickview_id"><div class="th_pb_quickview_outer_padding_cls"><div class="th_pb_quickview_bg_cls" id="th_pb_quick_inner_id">';
    $th_pb_quick_html += '<div class="th_pb_close_pop_up_cls"><a href="javascript:void(0)" id="th_pb_close_quickview_popup"></a></div>';
    $th_pb_quick_html += '<div class="th_pb_quickview_inner_start">';
    $th_pb_quick_html += '<div class="th_pb_custom_6_col_cls"><div class="th_pb_quickview_product_main_img">';
    $th_pb_quick_html += '<ul class="th_pb_quickview_large_img_ul"><li>';
    $th_pb_quick_html += '<figure class="th_pb_product_main_img_cls">';
    var $th_quickview_product_image;
    if($th_pb_quick_product.image !== undefined && $th_pb_quick_product.image !== null){
      $th_quickview_product_image = $th_image_resizer($th_pb_quick_product.image.src, 'grande');
    } else{
      $th_quickview_product_image = $th_app_ajax_url+'assets/img/no-product-image.svg';
    }
    $th_pb_quick_html += '<img class="th_pb_product_full_img" src="'+$th_quickview_product_image+'" alt="'+$th_pb_quick_product.handle+'">';
    $th_pb_quick_html += '<div class="th_pb_quickview_img_loader"><em></em></div>';
    $th_pb_quick_html += '</figure>';
    $th_pb_quick_html += '</li></ul>';
    $th_pb_quick_html += '<ul class="th_pb_quickview_poplet_img_ul">';
    if($th_pb_quick_product.images.length > 1){
      $th.each($th_pb_quick_product.images, function(img_key, img_src){
        $th_pb_quick_html += '<li><figure class="th_pb_product_poplet_imgs">';
        $th_pb_quick_html += '<img src="'+$th_image_resizer(img_src.src, 'medium')+'" data-src="'+$th_image_resizer(img_src.src, 'grande')+'" alt="'+$th_pb_quick_product.handle+'">';
        $th_pb_quick_html += '</figure></li>';
      });
    }
    $th_pb_quick_html += '</ul>';
    $th_pb_quick_html += '</div></div>';
    $th_pb_quick_html += '<div class="th_pb_custom_6_col_cls"><div class="th_pb_quickview_product_desc_cls">';
    $th_pb_quick_html += '<h2 class="th_pb_product_title"><a href="/products/'+$th_pb_quick_product.handle+'">'+$th_pb_quick_product.title+'</a></h2>';
    $th_pb_quick_html += '<div class="th_pb_quickview_product_price">';
    $th_pb_quick_html += '<span class="th_pb_price_box_new"><span class="money">'+$th_money_format($th_pb_quick_product.variants[0].price, $th_shop_money)+'</span></span>';
    if($th_pb_quick_product.variants[0].compare_at_price > $th_pb_quick_product.variants[0].price){
      $th_pb_quick_html += '<span class="th_pb_price_box_old"><span class="money">'+$th_money_format($th_pb_quick_product.variants[0].price, $th_shop_money)+'</span></span>';
    }
    $th_pb_quick_html += '</div>';
    $th_pb_quick_html += '<div class="th_pb_quickview_product_desc">';
    $th_pb_quick_html += '<div class="th_pb_product_info_description">'+$th_pb_quick_product.body_html+'</div>';
    $th_pb_quick_html += '</div>';
    $th_pb_quick_html += '<div class="th_pb_view_product_div"><a href="/products/'+$th_pb_quick_product.handle+'" class="btn button th_pb_view_product_cls">View Product</a></div>';
    $th_pb_quick_html += '</div></div>';
    $th_pb_quick_html += '</div>';
    $th_pb_quick_html += '</div></div></div>';
    $th('body').append($th_pb_quick_html);
    setTimeout(function(){
      $th('.th_pb_custome_modal_start').addClass('th_pb_show_quickview_popup_cls');
      setTimeout(function(){
        var $th_pb_qv_figure_height = [];
        $th('.th_pb_quickview_poplet_img_ul li').each(function(){
          var $th_pb_temp_width = parseInt($th(this).find('figure').outerHeight());
          $th_pb_qv_figure_height.push($th_pb_temp_width);
        });
        var max_width = Math.max.apply(Math, $th_pb_qv_figure_height);
        $th('.th_pb_quickview_poplet_img_ul li figure').css('min-height', max_width+'px');
      }, 200);
    }, 200);

    $th('.th_pb_product_full_img').attr('src', $th_quickview_product_image).on('load', function(){
      $th('.th_pb_quickview_img_loader').hide();
      $th('.th_pb_product_full_img').show();
    });
  });

  $th(document).on('click', '#th_pb_close_quickview_popup', function(){
    $th('.th_pb_custome_modal_start').removeClass('th_pb_show_quickview_popup_cls');
    setTimeout(function(){
      $th('.th_pb_custome_modal_start').remove();
    }, 1000);
  });

  $th(document).on('click', '.th_pb_quickview_poplet_img_ul figure', function(){
    $th('.th_pb_quickview_img_loader').show();
    $th('.th_pb_product_full_img').hide();
    var $th_pb_change_img = $th(this).find('img').data('src');
    $th('.th_pb_product_main_img_cls .th_pb_product_full_img').attr('src', $th_pb_change_img);
    $th('.th_pb_product_full_img').attr('src', $th_pb_change_img).on('load', function(){
      $th('.th_pb_quickview_img_loader').hide();
      $th('.th_pb_product_full_img').show();
    });
  });

  function $th_change_bundle_total($th_this){
    var $th_new_price = 0, $th_new_compare_price = 0;
    var $th_this_parent = $th_this.parents('.th_pb_innercode');
    var $th_this_select = $th_this_parent.find('.th_pb_pro_variants');
    var $th_variant_available = [];
    var $th_bundle_discount_type = $th_this_parent.find('ul.th_pb_list_ul').data('bundletype');
    $th_this_select.each(function(index){
      var $th_this_val = $th(this).find(':selected').data('price');
      var $th_this_compare_val = $th(this).find(':selected').data('compare-price');
      var $th_this_qty = 1;
      var $th_this_ptitle = $th(this).find(':selected').data('ptitle');
      var $th_this_vtitle = $th(this).find(':selected').data('title');
      var $th_this_available = $th(this).find(':selected').data('available');
      if($th_this_vtitle != 'Default Title'){
        $th_variant_available.push({product_title: $th_this_ptitle+' ('+$th_this_vtitle+')', variant_available: $th_this_available});
      } else{
        $th_variant_available.push({product_title: $th_this_ptitle, variant_available: $th_this_available});
      }
      $th_new_price = $th_new_price + (parseFloat($th_this_val) * $th_this_qty);
      $th_new_compare_price = $th_new_compare_price + (parseFloat($th_this_compare_val) * $th_this_qty);
      if(index === ($th_this_select.length - 1)){
        if($th_bundle_discount_type == '1'){
          var $th_bundle_fixed_val = $th_this_parent.find('ul.th_pb_list_ul').data('fixedprice');
          var $th_final_fixed_price = parseFloat($th_new_price) - (parseFloat($th_bundle_fixed_val) * 100);
          $th_new_compare_price = parseFloat($th_new_price);
          $th_this_parent.find('.th_pb_total_price .th_pb_total_sale_price').html('<span class="money">'+$th_money_format($th_final_fixed_price, $th_shop_money)+'</span>');
          $th_this_parent.find('.th_pb_total_price .th_pb_old_price').html('<span class="money th_pb_line_through">'+$th_money_format($th_new_compare_price, $th_shop_money)+'</span>');
          if($th_this_parent.find('.th_pb_list_layout_1').length > 0){
            $th_this_parent.find('.th_pb_total_price .th_pb_total_save_label').attr('style', 'display:inline-block !important;');
            var $th_bundle_save_price = parseFloat($th_new_compare_price) - parseFloat($th_final_fixed_price);
            $th_this_parent.find('.th_pb_total_price .th_pb_total_save_price').html('<span class="money">'+$th_money_format($th_bundle_save_price, $th_shop_money)+'</span>');
          }
        } else{
          if($th_new_compare_price > $th_new_price){
            $th_this_parent.find('.th_pb_total_price .th_pb_total_sale_price').html('<span class="money">'+$th_money_format($th_new_price, $th_shop_money)+'</span>');
            $th_this_parent.find('.th_pb_total_price .th_pb_old_price').html('<span class="money th_pb_line_through">'+$th_money_format($th_new_compare_price, $th_shop_money)+'</span>');
            if($th_this_parent.find('.th_pb_list_layout_1').length > 0){
              $th_this_parent.find('.th_pb_total_price .th_pb_total_save_label').attr('style', 'display:inline-block !important;');
              var $th_bundle_save_price = parseFloat($th_new_compare_price) - parseFloat($th_new_price);
              $th_this_parent.find('.th_pb_total_price .th_pb_total_save_price').html('<span class="money">'+$th_money_format($th_bundle_save_price, $th_shop_money)+'</span>');
            }
          } else{
            $th_this_parent.find('.th_pb_total_price .th_pb_total_sale_price').html('<span class="money">'+$th_money_format($th_new_price, $th_shop_money)+'</span>');
            if($th_this_parent.find('.th_pb_list_layout_1').length > 0){
              $th_this_parent.find('.th_pb_total_price .th_pb_total_save_label').attr('style', 'display:none !important;');
            }
          }
        }
        var $th_enable_btn_click = true;
        var $th_not_available_products = new Array();
        $th.each($th_variant_available, function(array_index, array_val){
          if(!array_val.variant_available){
            $th_enable_btn_click = false;
            $th_not_available_products.push(array_val.product_title);
          }
          if(array_index === ($th_variant_available.length - 1)){
            if($th_enable_btn_click){
              $th($th_this).parents('.th_pb_innercode').find('.th_ajax_error').html('');
              $th($th_this).parents('.th_pb_innercode').find('.th_pb_add_to_cart').attr('style', 'pointer-events:auto !important;');
              $th($th_this).parents('.th_pb_innercode').find('.th_pb_add_to_cart').removeClass('th_pb_add_to_cart_disabled');
            } else{
              var $th_pb_error_msg = $th_this_parent.find('.th_ajax_error').data('msg');
              var $th_not_available_text = $th_not_available_products.join(" & ");
              $th_not_available_text = $th_pb_error_msg.replace("{{title}}", $th_not_available_text);
              $th($th_this).parents('.th_pb_innercode').find('.th_ajax_error').html('<p class="th_ajax_error_cls">'+$th_not_available_text+'</p>');
              $th($th_this).parents('.th_pb_innercode').find('.th_pb_add_to_cart').attr('style', 'pointer-events:none !important;');
              $th($th_this).parents('.th_pb_innercode').find('.th_pb_add_to_cart').addClass('th_pb_add_to_cart_disabled');
            }
          }
        });
      }
    });
  }

  $th(document).on('change', '.th_pb_pro_variants', function(){
    var $this_val = $th(this);
    var $th_price = $th(this).find('option:selected').data('price');
    var $th_compare_price = $th(this).find('option:selected').data('compare-price');
    var $th_html_price = $th(this).parents('.th_pb_list_content').find('.th_pb_main_price');
    $th_html_price.html('<span class="money">'+$th_money_format($th_price, $th_shop_money)+'</span>');
    var $th_variant_img = $th(this).find('option:selected').data('image');
    $th(this).parents('.th_pb_list_content').find('.th_product_img a img').attr('src', $th_variant_img);
    if($th_compare_price > $th_price){
      var $th_html_comparre_price = $th(this).parents('.th_pb_list_content').find('.th_pb_old_price');
      if($th_html_comparre_price.length > 0){
        $th_html_comparre_price.html('<span class="money th_pb_line_through">'+$th_money_format($th_compare_price, $th_shop_money)+'</span>');
      } else{
        $th('<span class="th_pb_old_price"><span class="money th_pb_line_through">'+$th_money_format($th_compare_price, $th_shop_money)+'</span></span>').insertAfter($th_html_price);
      }
    } else{
      $th(this).parents('.th_pb_list_content').find('.th_pb_old_price').empty();
    }
    $th_change_bundle_total($this_val);
  });

  $th(document).on('change', '.th_pb_option_select_cls', function(){
    var $th_option_parents = $th(this).parents('.th_pb_variants_section');
    var $th_option_val_array = new Array();
    $th_option_parents.find('.th_pb_option_select_cls').each(function(){
      var $th_temp_val = $th(this).find('option:selected').val();
      $th_option_val_array.push($th_temp_val);
    });
    var $th_final_option_selected = $th_option_val_array.join(" / ");
    $th_option_parents.find('.th_pb_pro_variants option').prop('selected', false);
    if($th_option_parents.find('.th_pb_pro_variants option[data-title="'+$th_final_option_selected+'"]').length > 0){
      $th_option_parents.find('.th_pb_pro_variants option[data-title="'+$th_final_option_selected+'"]').prop('selected', true).trigger('change');
    } else{
      var $th_pb_error_msg = $th_option_parents.parents('.th_pb_innercode').find('.th_ajax_error').data('msg');
      var $th_not_available_text = $th_final_option_selected;
      $th_not_available_text = $th_pb_error_msg.replace("{{title}}", $th_not_available_text);
      $th_option_parents.parents('.th_pb_innercode').find('.th_ajax_error').html('<p class="th_ajax_error_cls">'+$th_not_available_text+'</p>');
      $th_option_parents.parents('.th_pb_innercode').find('.th_pb_add_to_cart').attr('style', 'pointer-events:none !important;');
      $th_option_parents.parents('.th_pb_innercode').find('.th_pb_add_to_cart').addClass('th_pb_add_to_cart_disabled');
    }
  });

  function th_pb_add_to_cart_click(){
    $th(document).on('click', '.th_pb_add_to_cart', function(e){
      e.preventDefault();
      var $th_button = $th(this);
      $th('.th_ajax_error').html('');
      if($th_button.attr('data-checkout') == '1'){
        if($th_button.attr('data-dismode') == '1'){
          $th.ajax({
            type: "POST",
            url: '/cart/clear.js',
            dataType: 'json',
            success: function(){
              var $th_this_parents = $th_button.parents('.th_pb_innercode');
              var $th_variants_length = $th_this_parents.find('li.li_product_list').length;
              var $th_id_array = new Array();
              var $th_addtocart_bundle = $th_this_parents.find('.th_pb_list_ul').data('bundle')
              for(var i=0; i<$th_variants_length; i++){
                var $th_properties = new Object();
                $th_properties.th_bundle_product = $th_addtocart_bundle;
                $th_properties.th_bundle_type = 'bundle';
                var $th_temVID = $th_this_parents.find('.th_all_bdn_variant_id_'+i).val();
                var $th_temQTY = $th_this_parents.find('.th_all_bdn_qty_id_'+i).attr('data-qty');
                $th_id_array.push({variant_id: $th_temVID, quantity: $th_temQTY, properties: $th_properties});
              }
              function bundle_addtocart(){
                if($th_id_array.length > 0){
                  var $th_request = $th_id_array.shift();
                  var $th_tempId = $th_request.variant_id;
                  var $th_tempQTY = $th_request.quantity;
                  var $th_tempProperties = $th_request.properties;
                  $th.ajax({
                    type: 'POST',
                    url: '/cart/add.js',
                    data: {quantity:$th_tempQTY, id:$th_tempId, properties:$th_tempProperties},
                    dataType: 'json',
                    beforeSend: function(){
                      if(!$th_button.hasClass('th_pb_btn_loading')){
                        $th_button.addClass('th_pb_btn_loading');
                      }
                    },
                    success: function(cart){
                      bundle_addtocart();
                    },
                    error: function(XMLHttpRequest, textStatus){
                      if($th_button.hasClass('th_pb_btn_loading')){
                        $th_button.removeClass('th_pb_btn_loading');
                      }
                      console.log(XMLHttpRequest);
                      var $th_data = eval('('+XMLHttpRequest.responseText+')');
                      if(!!$th_data.message){
                        $th_this_parents.find('.th_ajax_error').html('<p>'+$th_data.description+'</p>');
                      }
                    }
                  });
                } else{
                  $th.getJSON('/cart.js', function(cart){
                    if(cart.item_count > 0){
                      var $th_addtocart_bundle_array = new Array();
                      var $th_addtocart_bundle_object = new Object();
                      $th_addtocart_bundle_object.bundle_id = $th_addtocart_bundle;
                      $th_addtocart_bundle_array.push($th_addtocart_bundle_object);
                      $th.ajax({
                        url: $th_app_ajax_url+'create_draft_order.php',
                        type: 'post',
                        dataType: 'json',
                        data: {shop:$th_shop_conveted_url, cart_detail:cart.items, bundle_array:$th_addtocart_bundle_array, custom_array:'', active_currency:$th_active_currency},
                        cache: false,
                        success: function(result){
                          if($th_button.hasClass('th_pb_btn_loading')){
                            $th_button.removeClass('th_pb_btn_loading');
                          }
                          var result_url = result;
                          if(result.indexOf('?') > -1){
                            result_url = result+'&locale='+Shopify.locale;
                          } else{
                            result_url = result+'?locale='+Shopify.locale;
                          }
                          window.location = result_url;
                        },
                        error: function(XMLHttpRequest, textStatus){
                          if($th_button.hasClass('th_pb_btn_loading')){
                            $th_button.removeClass('th_pb_btn_loading');
                          }
                          console.log(XMLHttpRequest);
                        }
                      });
                    }
                  });
                }
              }
              bundle_addtocart();
            },
            error: function(XMLHttpRequest, textStatus){
              if($th_button.hasClass('th_pb_btn_loading')){
                $th_button.removeClass('th_pb_btn_loading');
              }
              console.log(XMLHttpRequest);
            }
          });
        } else{
          var $th_this_parents = $th_button.parents('.th_pb_innercode');
          var $th_variants_length = $th_this_parents.find('li.li_product_list').length;
          var $th_pb_bundle_id = $th_this_parents.find('.th_pb_list_ul').data('bundle');
          var $th_pb_bundle_items = new Object();
          $th_this_parents.find('li.li_product_list').each(function(i, grid){
            var $th_pb_temp = new Object();
            var $th_pb_added_proid = $th(this).attr('data-id');
            var $th_pb_added_variantid = $th_this_parents.find('.th_all_bdn_variant_id_'+i).val();
            var $th_pb_quantity = $th_this_parents.find('.th_all_bdn_qty_id_'+i).attr('data-qty');
            $th_pb_temp = {
              product_id: $th_pb_added_proid,
              variant_id: $th_pb_added_variantid,
              quantity: $th_pb_quantity
            }
            $th_pb_bundle_items[i] = $th_pb_temp;
            if(i === $th_variants_length - 1){
              $th.ajax({
                url: $th_app_ajax_url+"create_draft_order.php",
                type: 'post',
                dataType: "json",
                cache: false,
                data: {shop:$th_shop_conveted_url, bundle_id:$th_pb_bundle_id, direct_checkout:'direct_checkout', line_items:$th_pb_bundle_items, active_currency:$th_active_currency},
                beforeSend: function(){
                  if(!$th_button.hasClass('th_pb_btn_loading')){
                    $th_button.addClass('th_pb_btn_loading');
                  }
                },
                success: function(result){
                  var result_url = result;
                  if(result.indexOf('?') > -1){
                    result_url = result+'&locale='+Shopify.locale;
                  } else{
                    result_url = result+'?locale='+Shopify.locale;
                  }
                  window.location = result_url;
                },
                error: function(XMLHttpRequest, textStatus){
                  console.log(XMLHttpRequest);
                }
              });
            }
          });
        }
      } else{
        var $th_this_parents = $th_button.parents('.th_pb_innercode');
        var $th_variants_length = $th_this_parents.find('li.li_product_list').length;
        var $th_id_array = new Array();
        for(var i=0; i<$th_variants_length; i++){
          var $th_properties = new Object();
          $th_properties.th_bundle_product = $th_this_parents.find('.th_pb_list_ul').data('bundle');
          $th_properties.th_bundle_type = 'bundle';
          var $th_temVID = $th_this_parents.find('.th_all_bdn_variant_id_'+i).val();
          var $th_temQTY = $th_this_parents.find('.th_all_bdn_qty_id_'+i).attr('data-qty');
          $th_id_array.push({variant_id: $th_temVID, quantity: $th_temQTY, properties: $th_properties});
        }
        function bundle_addtocart(){
          if($th_id_array.length > 0){
            var $th_request = $th_id_array.shift();
            var $th_tempId = $th_request.variant_id;
            var $th_tempQTY = $th_request.quantity;
            var $th_tempProperties = $th_request.properties;
            $th.ajax({
              type: 'POST',
              url: '/cart/add.js',
              data: {quantity:$th_tempQTY, id:$th_tempId, properties:$th_tempProperties},
              dataType: 'json',
              beforeSend: function(){
                if(!$th_button.hasClass('th_pb_btn_loading')){
                  $th_button.addClass('th_pb_btn_loading');
                }
              },
              success: function(cart){
                bundle_addtocart();
              },
              error: function(XMLHttpRequest, textStatus){
                if($th_button.hasClass('th_pb_btn_loading')){
                  $th_button.removeClass('th_pb_btn_loading');
                }
                console.log(XMLHttpRequest);
                var $th_data = eval('('+XMLHttpRequest.responseText+')');
                if(!!$th_data.message){
                  $th_this_parents.find('.th_ajax_error').html('<p>'+$th_data.description+'</p>');
                }
              }
            });
          } else{
            $th.getJSON('/cart.js', function(cart){
              if(cart.item_count > 0){
                setTimeout(function(){
                  if($th_button.hasClass('th_pb_btn_loading')){
                    $th_button.removeClass('th_pb_btn_loading');
                  }
                  window.location.href = '/cart';
                }, 200);
              }
            });
          }
        }
        bundle_addtocart();
      }
    });
  }

  if(typeof $th_product_id != 'undefined' && $th_product_id != '' && $th_product_id != null){
    $th.ajax({
      type: 'GET',
      url: $th_app_ajax_url+'backend_ajax_new.php',
      data: {shop:$th_shop_conveted_url, product_id:$th_product_id, active_currency:$th_active_currency},
      dataType: 'json',
      cache: false,
      success: function(result){
        var $th_bundle_class = '#th_product_bundle', $th_bundle_code_place = '$th_bundle_append_code';
        if(result.error != true){
          var $th_bundle_layout = result.layout_setting.bundle_layout;
          $th($th_bundle_class).html('');
          if($th_bundle_layout == 'bundle_layout_2'){
            $th_bundle_design_layout_2(result, $th_bundle_class, 'null', $th_bundle_code_place);
          } else if($th_bundle_layout == 'bundle_layout_3'){
            $th_bundle_design_layout_3(result, $th_bundle_class, 'null', $th_bundle_code_place);
          } else{
            $th_bundle_design(result, $th_bundle_class, 'null', $th_bundle_code_place);
          }
          th_pb_add_to_cart_click();
        } else{
          $th($th_bundle_class).html('');
        }
      },
      error: function(XMLHttpRequest, textStatus){
        console.log(XMLHttpRequest);
      }
    });
  } else if(typeof __st !== 'undefined' && __st.p == 'product'){
    $th_product_id = __st.rid;
    $th.ajax({
      type: 'GET',
      url: $th_app_ajax_url+'backend_ajax_new.php',
      data: {shop:$th_shop_conveted_url, product_id:$th_product_id, active_currency:$th_active_currency},
      dataType: 'json',
      cache: false,
      success: function(result){
        var $th_bundle_class = 'form[action="/cart/add"]', $th_bundle_code_place = '$th_bundle_after_code';
        if(result.error != true){
          var $th_bundle_layout = result.layout_setting.bundle_layout;
          if($th_bundle_layout == 'bundle_layout_2'){
            $th_bundle_design_layout_2(result, $th_bundle_class, 'null', $th_bundle_code_place);
          } else if($th_bundle_layout == 'bundle_layout_3'){
            $th_bundle_design_layout_3(result, $th_bundle_class, 'null', $th_bundle_code_place);
          } else{
            $th_bundle_design(result, $th_bundle_class, 'null', $th_bundle_code_place);
          }
          th_pb_add_to_cart_click();
        }
      },
      error: function(XMLHttpRequest, textStatus){
        console.log(XMLHttpRequest);
      }
    });
  }

  if(typeof $th_all_bundles_id != 'undefined' && $th_all_bundles_id != '' && $th_all_bundles_id != null){
    function $th_get_all_bundles($th_pageno, $th_bundle_count){
      $th.ajax({
        type: 'GET',
        url: $th_app_ajax_url+'get_all_bundle_by_shop.php',
        data: {shop:$th_shop_conveted_url, all_bundles:'', currentpage:$th_pageno, bundle_count:$th_bundle_count, active_currency:$th_active_currency},
        dataType: 'json',
        cache: false,
        beforeSend: function(){
          var loader_code = '<figure class="th_bundle_section_loader th_pb_wf"><svg width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ripple"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><g> <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="1;1;0"></animate><circle cx="50" cy="50" r="41.2637" stroke="#000" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="r" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle></g><g><animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate><circle cx="50" cy="50" r="24.8458" stroke="#000000" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle></g></svg></figure>';
          $th('#th_pb_all_bundles_list').append(loader_code);
        },
        success: function(result){
          if(result.error != true){
            var $th_bundle_layout = result.layout_setting.bundle_layout, $th_bundle_code_place = '$th_bundle_append_code';
            $th('figure.th_bundle_section_loader').remove();
            if($th_bundle_layout == 'bundle_layout_2'){
              $th_bundle_design_layout_2(result, '#th_pb_all_bundles_list', 'null', $th_bundle_code_place);
            } else if($th_bundle_layout == 'bundle_layout_3'){
              $th_bundle_design_layout_3(result, '#th_pb_all_bundles_list', 'null', $th_bundle_code_place);
            } else{
              $th_bundle_design(result, '#th_pb_all_bundles_list', 'null', $th_bundle_code_place);
            }
            var $th_loaded = 0, $th_bundle_count = result.bundle_count;
            if(result.nextpage > $th_pageno){
              if(result.layout_setting.btn_load_more == '1'){
                $th(window).scroll(function(){
                  var $th_bundle_section_height = $th('#th_pb_all_bundles_list div').offset().top + $th('#th_pb_all_bundles_list div').outerHeight() - window.innerHeight;
                  if($th(window).scrollTop() >= $th_bundle_section_height){
                    if($th_loaded === 0){
                      $th_get_all_bundles($th_pageno, $th_bundle_count);
                      $th_loaded = 1;
                    }
                  }
                });
                $th_pageno++;
              } else{
                $th('.th_pb_all_bundles_list_loadmore_div').remove();
                var $th_load_more_button = '';
                $th_load_more_button += '<div class="th_pb_wf th_pb_all_bundles_list_loadmore_div">';
                $th_load_more_button += '<button type="button" id="th_pb_all_bundles_list_loadmore_btn" class="btn button th_pb_all_bundles_list_loadmore_btn" data-nextpage="'+result.nextpage+'" data-bundlecount="'+result.bundle_count+'"><span class="button_text">'+result.layout_setting.language.btn_load_more+'</span> <em class="th_pb_add_to_cart_loader"></em></button>';
                $th_load_more_button += '</div>';
                $th('#th_pb_all_bundles_list').append($th_load_more_button);
              }
            } else{
              $th('.th_pb_all_bundles_list_loadmore_div').remove();
            }
          } else{
            $th('#th_pb_all_bundles_list').html('');
          }
        },
        error: function(XMLHttpRequest, textStatus){
          console.log(XMLHttpRequest);
        }
      });
    }
    th_pb_add_to_cart_click();
    var $th_pageno = 1, $th_bundle_count = 0;
    $th_get_all_bundles($th_pageno, $th_bundle_count);

    $th(document).on('click', '#th_pb_all_bundles_list_loadmore_btn', function(){
      var $th_nextpage = $th(this).attr('data-nextpage');
      var $th_bundlecount = $th(this).attr('data-bundlecount');
      $th('#th_pb_all_bundles_list_loadmore_btn').remove();
      $th_get_all_bundles($th_nextpage, $th_bundlecount);
    });
  }

  if($th('.th_pb_specific_bundles').length > 0){
    $th('.th_pb_specific_bundles').each(function(idx_spe_bundle, each_spe_bundle){
      var $th_specific_bundles_this = $th(this);
      var $th_specific_bundles_id = $th(this).data('bundleid');
      $th.ajax({
        type: 'GET',
        url: $th_app_ajax_url+'get_all_bundle_by_shop.php',
        data: {shop:$th_shop_conveted_url, all_bundles: '', bundle_id: $th_specific_bundles_id, active_currency:$th_active_currency},
        dataType: 'json',
        cache: false,
        beforeSend: function(){
          var loader_code = '<figure class="th_bundle_section_loader th_pb_wf"><svg width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ripple"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><g> <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="1;1;0"></animate><circle cx="50" cy="50" r="41.2637" stroke="#000" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="r" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle></g><g><animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate><circle cx="50" cy="50" r="24.8458" stroke="#000000" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle></g></svg></figure>';
          $th_specific_bundles_this.html(loader_code);
        },
        success: function(result){
          if(result.error != true){
            var $th_bundle_layout = result.layout_setting.bundle_layout, $th_bundle_code_place = '$th_bundle_append_code';
            $th_specific_bundles_this.html('');
            if($th_bundle_layout == 'bundle_layout_2'){
              $th_bundle_design_layout_2(result, '#th_pb_all_bundles_list', $th_specific_bundles_this, $th_bundle_code_place);
            } else if($th_bundle_layout == 'bundle_layout_3'){
              $th_bundle_design_layout_3(result, '#th_pb_all_bundles_list', $th_specific_bundles_this, $th_bundle_code_place);
            } else{
              $th_bundle_design(result, '#th_pb_all_bundles_list', $th_specific_bundles_this, $th_bundle_code_place);
            }
          } else{
            $th_specific_bundles_this.html('');
          }
        },
        error: function(XMLHttpRequest, textStatus){
          console.log(XMLHttpRequest);
        }
      });
    });
    th_pb_add_to_cart_click();
  }

  function $th_custom_bundle_layout(result, $th_cb_specific_bundle_id){
    var $th_cb_code = '', $th_pb_cb_remain_price = 100 - parseFloat(result.bundle_discount);
    $th_cb_code += '<div class="th_pb_cb_inner th_pb_wf"><div class="th_pb_cb_main_title th_pb_wf"><h1>'+result.name+'</h1>';
    if(result.short_desc != '' && result.short_desc != null){
      $th_cb_code += '<p>'+result.short_desc+'</p>';
    }
    $th_cb_code += '</div>';
    $th_cb_code += '<ul class="th_pb_cb_ul th_pb_wf">';
    $th.each(result.product_list, function(index, value){
      var $th_product_image;
      if(value.image != undefined && value.image != null && !$th.isEmptyObject(value.image)){
        $th_product_image = $th_image_resizer(value.image.src, 'large');
      } else{
        $th_product_image = $th_app_ajax_url+'assets/img/no-product-image.svg';
      }
      $th_cb_code += '<li class="th_pb_cb_li" data-id="'+value.id+'"><div class="th_pb_cb_img"><figure class="th_pb_wf">';
      $th_cb_code += '<a href="/products/'+value.handle+'"><img src="'+$th_product_image+'?v=123" alt="'+value.handle+'" /></a>';
      $th_cb_code += '</figure></div>';
      $th_cb_code += '<div class="th_pb_cb_title"><h6 class="th_pb_wf">'+value.title+'</h6>';
      if(value.variants.length <= 1){
        $th_cb_code += '<select name="variant_id" class="th_pb_cb_select th_pb_cb_variant_id_'+index+'" style="display:none !important">';
        $th_cb_code += '<option value="'+value.variants[0].id+'" data-compare-price="'+value.variants[0].price * 100+'" data-price="'+(value.variants[0].price * 100 * $th_pb_cb_remain_price) / 100+'">'+value.variants[0].title+'</option>';
        $th_cb_code += '</select>';
        $th_cb_code += '<input type="hidden" class="th_pb_cb_variant_id_'+index+'" value="'+value.variants[0].id+'" data-compare-price="'+value.variants[0].price * 100+'" data-price="'+(value.variants[0].price * 100 * $th_pb_cb_remain_price) / 100+'">';
      } else{
        $th_cb_code += '<select name="variant_id" class="th_pb_cb_select th_pb_cb_variant_id_'+index+'">';
        $th.each(value.variants, function(variant_index, variant_value){
          if(variant_value.inventory_management == 'shopify' || variant_value.inventory_management == 'SHOPIFY'){
            if(variant_value.inventory_policy != 'deny' && variant_value.inventory_policy != 'DENY'){
              var $th_dc_price = (parseFloat(variant_value.price) * 100 * $th_pb_cb_remain_price) / 100;
              var $th_dc_cp_price = parseFloat(variant_value.price) * 100;
              if(variant_value.image != undefined && variant_value.image != null){
                var $th_variant_img = $th_image_resizer(variant_value.image.originalSrc, 'large');
                $th_cb_code += '<option value="'+variant_value.id+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_variant_img+'">'+variant_value.title+'</option>';
              } else{
                $th_cb_code += '<option value="'+variant_value.id+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123">'+variant_value.title+'</option>';
              }
            } else{
              if(variant_value.inventory_quantity > 0){
                var $th_dc_price = (parseFloat(variant_value.price) * 100 * $th_pb_cb_remain_price) / 100;
                var $th_dc_cp_price = parseFloat(variant_value.price) * 100;
                if(variant_value.image != undefined && variant_value.image != null){
                  var $th_variant_img = $th_image_resizer(variant_value.image.originalSrc, 'large');
                  $th_cb_code += '<option value="'+variant_value.id+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_variant_img+'">'+variant_value.title+'</option>';
                } else{
                  $th_cb_code += '<option value="'+variant_value.id+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123">'+variant_value.title+'</option>';
                }
              }
            }
          } else{
            var $th_dc_price = (parseFloat(variant_value.price) * 100 * $th_pb_cb_remain_price) / 100;
            var $th_dc_cp_price = parseFloat(variant_value.price) * 100;
            if(variant_value.image != undefined && variant_value.image != null){
              var $th_variant_img = $th_image_resizer(variant_value.image.originalSrc, 'large');
              $th_cb_code += '<option value="'+variant_value.id+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_variant_img+'">'+variant_value.title+'</option>';
            } else{
              $th_cb_code += '<option value="'+variant_value.id+'" data-compare-price="'+$th_dc_cp_price+'" data-price="'+$th_dc_price+'" data-image="'+$th_product_image+'?v=123">'+variant_value.title+'</option>';
            }
          }
        });
        $th_cb_code += '</select>';
      }
      $th_cb_code += '</div>';
      $th_cb_code += '<div class="th_pb_cb_qty_variant">';
      $th_cb_code += '<input type="number" name="quantity" class="th_pb_cb_qty th_pb_cb_qty_id_'+index+'" value="1" min="1">';
      $th_cb_code += '</div>';
      $th_cb_code += '<div class="th_pb_cb_price"><p class="th_pb_wf">';
      var $th_cb_price = (parseFloat(value.variants[0].price) * 100 * $th_pb_cb_remain_price) / 100;
      var $th_cb_compare_price = parseFloat(value.variants[0].price) * 100;
      $th_cb_code += '<span class="th_pb_cb_main_price" data-price="'+$th_cb_price+'"><span class="money">'+$th_money_format($th_cb_price, $th_shop_money)+'</span></span>';
      if($th_cb_compare_price > $th_cb_price){
        $th_cb_code += '<span class="th_pb_cb_old_price" data-price="'+$th_cb_compare_price+'"><span class="money">'+$th_money_format($th_cb_compare_price, $th_shop_money)+'</span></span>';
      }
      $th_cb_code += '</p></div></li>';
    });
    $th_cb_code += '</ul>';
    $th_cb_code += '<div class="th_pb_cb_button th_pb_wf">';
    if(result.bundle_discount > 0){
      $th_cb_code += '<div class="th_pb_cb_total_price th_pb_wf">'+result.language.total_price+' <span class="th_pb_cb_total_discount_price"></span><span class="th_pb_cb_total_sale_price"></span></div>';
    } else{
      $th_cb_code += '<div class="th_pb_cb_total_price th_pb_wf">'+result.language.total_price+' <span class="th_pb_cb_total_discount_price"></span></div>';
    }
    var $th_cb_discount_requirement = result.language.discount_requirement;
    if(result.bundle_discount > 0){
      if($th_cb_discount_requirement != '' && $th_cb_discount_requirement != null){
        $th_cb_discount_requirement = $th_cb_discount_requirement.replace("{{discount}}", result.bundle_discount+"%");
        $th_cb_code += '<div class="th_pb_cb_message th_pb_wf"><p>'+$th_cb_discount_requirement+'</p></div>';
      }
    }
    $th_cb_code += '<div class="th_pb_cb_addtocart_btn_div th_pb_wf"><button type="button" class="th_pb_cb_button_cls btn button" data-checkout="'+result.layout_setting.direct_checkout+'" data-dismode="'+result.layout_setting.discount_mode+'" data-min="null"><span class="button_text">'+result.button_text+'</span><em class="th_pb_add_to_cart_loader"></em></button></div>';
    $th_cb_code += '<div class="th_ajax_error"></div></div></div>';
    $th_cb_specific_bundle_id.empty();
    $th_cb_specific_bundle_id.html($th_cb_code);
    setTimeout(function(){
      $th_cb_specific_bundle_id.find('.th_pb_cb_select').trigger('change');
    }, 1000);
  }

  if($th('.th_pb_custom_bundle[data-id]').length > 0){
    var $th_cb_loader_val = false;
    $th('.th_pb_custom_bundle').each(function(idx_spe_bundle, each_spe_bundle){
      var $th_cb_specific_bundle_id = $th(this);
      var $th_cb_bundle_id = $th_cb_specific_bundle_id.data('id');
      $th.ajax({
        type: 'GET',
        url: $th_app_ajax_url+'backend_ajax_new.php',
        data: {shop:$th_shop_conveted_url, custom_bundle_page:$th_cb_bundle_id, active_currency:$th_active_currency},
        dataType: 'json',
        cache: false,
        beforeSend: function(){
          if(!$th_cb_loader_val == true){
            var loader_code = '<figure class="th_bundle_section_loader th_pb_wf"><svg width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ripple"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><g> <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="1;1;0"></animate><circle cx="50" cy="50" r="41.2637" stroke="#000" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="r" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle></g><g><animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate><circle cx="50" cy="50" r="24.8458" stroke="#000000" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle></g></svg></figure>';
            $th_cb_specific_bundle_id.html(loader_code);
            $th_cb_loader_val = true;
          }
        },
        success: function(result){
          if(result.error != true){
            $th_custom_bundle_layout(result, $th_cb_specific_bundle_id);
          } else{
            $th_cb_specific_bundle_id.html('');
          }
        },
        error: function(XMLHttpRequest, textStatus){
          $th_cb_specific_bundle_id.empty();
          console.log(XMLHttpRequest);
        }
      });
    });
  }

  $th(document).on('change', '.th_pb_cb_select', function(){
    var $th_price = $th(this).find('option:selected').data('price');
    var $th_compare_price = $th(this).find('option:selected').data('compare-price');
    var $th_html_price = $th(this).parents('.th_pb_cb_li').find('.th_pb_cb_main_price');
    var $th_line_qty = $th(this).parents('.th_pb_cb_li').find('.th_pb_cb_qty').val();
    $th_html_price.attr('data-price', $th_price);
    $th_html_price.html('<span class="money">'+$th_money_format($th_price * $th_line_qty, $th_shop_money)+'</span>');
    var $th_variant_img = $th(this).find('option:selected').data('image');
    $th(this).parents('.th_pb_cb_li').find('.th_pb_cb_img a img').attr('src', $th_variant_img);
    if($th_compare_price > $th_price){
      var $th_html_comparre_price = $th(this).parents('.th_pb_cb_li').find('.th_pb_cb_old_price');
      $th_html_comparre_price.attr('data-price', $th_compare_price);
      $th_html_comparre_price.html('<span class="money">'+$th_money_format($th_compare_price * $th_line_qty, $th_shop_money)+'</span>');
    } else{
      $th(this).parents('.th_pb_cb_li').find('.th_pb_cb_old_price').empty();
    }
    var $th_this_parents = $th(this).parents('.th_pb_cb_inner'), $th_pb_cp_discount_total = 0, $th_pb_cp_sale_total = 0;
    $th_this_parents.find('.th_pb_cb_li').each(function(index){
      var $th_each_this = $th(this);
      var $th_temp_discount_price = $th_each_this.find('.th_pb_cb_main_price').attr('data-price');
      var $th_temp_sale_price = $th_each_this.find('.th_pb_cb_old_price').attr('data-price');
      var $th_temp_qty = $th_each_this.find('.th_pb_cb_qty').val();
      $th_pb_cp_discount_total = $th_pb_cp_discount_total + (parseFloat($th_temp_discount_price) * parseFloat($th_temp_qty));
      $th_pb_cp_sale_total = $th_pb_cp_sale_total + (parseFloat($th_temp_sale_price) * parseFloat($th_temp_qty));
      if(index === $th_this_parents.find('.th_pb_cb_li').length - 1){
        $th_this_parents.find('.th_pb_cb_total_discount_price').html('<span class="money">'+$th_money_format($th_pb_cp_discount_total, $th_shop_money)+'</span>');
        $th_this_parents.find('.th_pb_cb_total_sale_price').html('<span class="money th_pb_line_through">'+$th_money_format($th_pb_cp_sale_total, $th_shop_money)+'</span>');
      }
    });
  });

  $th(document).on('keyup mouseup change', '.th_pb_cb_qty', function(){
    var $th_discount_line_price = $th(this).parents('.th_pb_cb_li').find('.th_pb_cb_select option:selected').data('price');
    $th_discount_line_price = $th_discount_line_price * $th(this).val();
    var $th_html_price = $th(this).parents('.th_pb_cb_li').find('.th_pb_cb_main_price');
    $th_html_price.html('<span class="money">'+$th_money_format($th_discount_line_price, $th_shop_money)+'</span>');
    var $th_sale_line_price = $th(this).parents('.th_pb_cb_li').find('.th_pb_cb_select option:selected').data('compare-price');
    $th_sale_line_price = $th_sale_line_price * $th(this).val();
    if($th_sale_line_price > $th_discount_line_price){
      var $th_html_comparre_price = $th(this).parents('.th_pb_cb_li').find('.th_pb_cb_old_price');
      $th_html_comparre_price.html('<span class="money">'+$th_money_format($th_sale_line_price, $th_shop_money)+'</span>');
    } else{
      $th(this).parents('.th_pb_cb_li').find('.th_pb_cb_old_price').empty();
    }
    var $th_this_parents = $th(this).parents('.th_pb_cb_inner'), $th_pb_cp_discount_total = 0, $th_pb_cp_sale_total = 0;
    $th_this_parents.find('.th_pb_cb_li').each(function(index){
      var $th_each_this = $th(this);
      var $th_temp_discount_price = $th_each_this.find('.th_pb_cb_main_price').attr('data-price');
      var $th_temp_sale_price = $th_each_this.find('.th_pb_cb_old_price').attr('data-price');
      var $th_temp_qty = $th_each_this.find('.th_pb_cb_qty').val();
      $th_pb_cp_discount_total = $th_pb_cp_discount_total + (parseFloat($th_temp_discount_price) * parseFloat($th_temp_qty));
      $th_pb_cp_sale_total = $th_pb_cp_sale_total + (parseFloat($th_temp_sale_price) * parseFloat($th_temp_qty));
      if(index === $th_this_parents.find('.th_pb_cb_li').length - 1){
        $th_this_parents.find('.th_pb_cb_total_discount_price').html('<span class="money">'+$th_money_format($th_pb_cp_discount_total, $th_shop_money)+'</span>');
        $th_this_parents.find('.th_pb_cb_total_sale_price').html('<span class="money th_pb_line_through">'+$th_money_format($th_pb_cp_sale_total, $th_shop_money)+'</span>');
      }
    });
  });

  $th(document).on('click', '.th_pb_cb_button_cls', function(e){
    e.preventDefault();
    var $th_button = $th(this);
    $th('.th_ajax_error').html('');
    if($th_button.attr('data-checkout') == '1'){
      if($th_button.attr('data-dismode') == '1'){
        $th.ajax({
          type: "POST",
          url: '/cart/clear.js',
          dataType: 'json',
          success: function(){
            var $th_this_parents = $th_button.parents('.th_pb_cb_inner');
            var $th_variants_length = $th_this_parents.find('li.th_pb_cb_li').length;
            var $th_id_array = new Array();
            var $th_custom_bundle_id = $th_this_parents.parents('.th_pb_custom_bundle').data('id');
            for(var i=0; i<$th_variants_length; i++){
              var $th_properties = new Object();
              $th_properties.th_bundle_custom = $th_custom_bundle_id;
              $th_properties.th_bundle_type = 'custom';
              var $th_temVID = $th_this_parents.find('.th_pb_cb_variant_id_'+i).val();
              var $th_temQTY = $th_this_parents.find('.th_pb_cb_qty_id_'+i).val();
              if($th_temQTY > 0){
                $th_id_array.push({variant_id: $th_temVID, quantity: $th_temQTY, properties: $th_properties});
              }
            }
            function custom_bundle_addtocart(){
              if($th_id_array.length > 0){
                var $th_request = $th_id_array.shift();
                var $th_tempId = $th_request.variant_id;
                var $th_tempQTY = $th_request.quantity;
                var $th_tempProperties = $th_request.properties;
                $th.ajax({
                  type: 'POST',
                  url: '/cart/add.js',
                  data: {quantity:$th_tempQTY, id:$th_tempId, properties:$th_tempProperties},
                  dataType: 'json',
                  beforeSend: function(){
                    if(!$th_button.hasClass('th_pb_btn_loading')){
                      $th_button.addClass('th_pb_btn_loading');
                    }
                  },
                  success: function(cart){
                    custom_bundle_addtocart();
                  },
                  error: function(XMLHttpRequest, textStatus){
                    if($th_button.hasClass('th_pb_btn_loading')){
                      $th_button.removeClass('th_pb_btn_loading');
                    }
                    console.log(XMLHttpRequest);
                    var $th_data = eval('('+XMLHttpRequest.responseText+')');
                    if(!!$th_data.message){
                      $th_this_parents.find('.th_ajax_error').html('<p>'+$th_data.description+'</p>');
                    }
                  }
                });
              } else{
                $th.getJSON('/cart.js', function(cart){
                  if(cart.item_count > 0){
                    var $th_addtocart_bundle_array = new Array();
                    var $th_addtocart_bundle_object = new Object();
                    $th_addtocart_bundle_object.bundle_id = $th_custom_bundle_id;
                    $th_addtocart_bundle_array.push($th_addtocart_bundle_object);
                    $th.ajax({
                      url: $th_app_ajax_url+'create_draft_order.php',
                      type: 'post',
                      dataType: 'json',
                      data: {shop:$th_shop_conveted_url, cart_detail:cart.items, bundle_array:'', custom_array:$th_addtocart_bundle_array, active_currency:$th_active_currency},
                      cache: false,
                      success: function(result){
                        if($th_button.hasClass('th_pb_btn_loading')){
                          $th_button.removeClass('th_pb_btn_loading');
                        }
                        var result_url = result;
                        if(result.indexOf('?') > -1){
                          result_url = result+'&locale='+Shopify.locale;
                        } else{
                          result_url = result+'?locale='+Shopify.locale;
                        }
                        window.location = result_url;
                      },
                      error: function(XMLHttpRequest, textStatus){
                        if($th_button.hasClass('th_pb_btn_loading')){
                          $th_button.removeClass('th_pb_btn_loading');
                        }
                        console.log(XMLHttpRequest);
                      }
                    });
                  }
                });
              }
            }
            if(parseInt($th_id_array.length) === parseInt($th_variants_length)){
              custom_bundle_addtocart();
            } else{
              $th_this_parents.find('.th_ajax_error').html('<p>'+$th_this_parents.find('.th_pb_cb_message').text()+'</p>');
            }
          },
          error: function(XMLHttpRequest, textStatus){
            if($th_button.hasClass('th_pb_btn_loading')){
              $th_button.removeClass('th_pb_btn_loading');
            }
            console.log(XMLHttpRequest);
          }
        });
      } else{
        var $th_this_parents = $th_button.parents('.th_pb_cb_inner');
        var $th_variants_length = $th_this_parents.find('li.th_pb_cb_li').length;
        var $th_cb_bundle_id = $th_this_parents.parents('.th_pb_custom_bundle').data('id');
        var $th_cb_bundle_items = new Object();
        $th_this_parents.find('li.th_pb_cb_li').each(function(i, grid){
          var $th_pb_temp = new Object();
          var $th_pb_added_proid = $th(this).attr('data-id');
          var $th_pb_added_variantid = $th_this_parents.find('.th_pb_cb_variant_id_'+i+' option:selected').val();
          var $th_pb_quantity = $th_this_parents.find('.th_pb_cb_qty_id_'+i).val();
          if(parseInt($th_pb_quantity) === 0){
            $th_this_parents.find('.th_ajax_error').html('<p>'+$th_this_parents.find('.th_pb_cb_message').text()+'</p>');
            return false;
          }
          $th_pb_temp = {
            product_id: $th_pb_added_proid,
            variant_id: $th_pb_added_variantid,
            quantity: $th_pb_quantity
          }
          $th_cb_bundle_items[i] = $th_pb_temp;
          if(i === $th_variants_length - 1){
            $th.ajax({
              url: $th_app_ajax_url+"create_draft_order.php",
              type: 'post',
              dataType: "json",
              cache: false,
              data: {shop:$th_shop_conveted_url, bundle_id:$th_cb_bundle_id, direct_checkout:'direct_checkout', line_items:$th_cb_bundle_items, active_currency:$th_active_currency},
              beforeSend: function(){
                if(!$th_button.hasClass('th_pb_btn_loading')){
                  $th_button.addClass('th_pb_btn_loading');
                }
              },
              success: function(result){
                var result_url = result;
                if(result.indexOf('?') > -1){
                  result_url = result+'&locale='+Shopify.locale;
                } else{
                  result_url = result+'?locale='+Shopify.locale;
                }
                window.location = result_url;
              },
              error: function(XMLHttpRequest, textStatus){
                console.log(XMLHttpRequest);
              }
            });
          }
        });
      }
    } else{
      var $th_this_parents = $th_button.parents('.th_pb_cb_inner');
      var $th_variants_length = $th_this_parents.find('li.th_pb_cb_li').length;
      var $th_id_array = new Array();
      for(var i=0; i<$th_variants_length; i++){
        var $th_properties = new Object();
        $th_properties.th_bundle_custom = $th_this_parents.parents('.th_pb_custom_bundle').data('id');
        $th_properties.th_bundle_type = 'custom';
        var $th_temVID = $th_this_parents.find('.th_pb_cb_variant_id_'+i).val();
        var $th_temQTY = $th_this_parents.find('.th_pb_cb_qty_id_'+i).val();
        if($th_temQTY > 0){
          $th_id_array.push({variant_id: $th_temVID, quantity: $th_temQTY, properties: $th_properties});
        }
      }
      function custom_bundle_addtocart(){
        if($th_id_array.length > 0){
          var $th_request = $th_id_array.shift();
          var $th_tempId = $th_request.variant_id;
          var $th_tempQTY = $th_request.quantity;
          var $th_tempProperties = $th_request.properties;
          $th.ajax({
            type: 'POST',
            url: '/cart/add.js',
            data: {quantity:$th_tempQTY, id:$th_tempId, properties:$th_tempProperties},
            dataType: 'json',
            beforeSend: function(){
              if(!$th_button.hasClass('th_pb_btn_loading')){
                $th_button.addClass('th_pb_btn_loading');
              }
            },
            success: function(cart){
              custom_bundle_addtocart();
            },
            error: function(XMLHttpRequest, textStatus){
              if($th_button.hasClass('th_pb_btn_loading')){
                $th_button.removeClass('th_pb_btn_loading');
              }
              console.log(XMLHttpRequest);
              var $th_data = eval('('+XMLHttpRequest.responseText+')');
              if(!!$th_data.message){
                $th_this_parents.find('.th_ajax_error').html('<p>'+$th_data.description+'</p>');
              }
            }
          });
        } else{
          $th.getJSON('/cart.js', function(cart){
            if(cart.item_count > 0){
              setTimeout(function(){
                if($th_button.hasClass('th_pb_btn_loading')){
                  $th_button.removeClass('th_pb_btn_loading');
                }
                window.location.href = '/cart';
              }, 200);
            }
          });
        }
      }
      if(parseInt($th_id_array.length) === parseInt($th_variants_length)){
        custom_bundle_addtocart();
      } else{
        $th_this_parents.find('.th_ajax_error').html('<p>'+$th_this_parents.find('.th_pb_cb_message').text()+'</p>');
      }
    }
  });

  function $th_pb_qty_button_click($th_pb_qty_details, $th_layout_settings){
    $th(document).on('click', '.th_pb_qty_single_btn_cls', function(){
      var $this_btn = $th(this);
      $this_btn.parents('.th_pb_qty_innercode').find('.th_pb_qty_layout_grid').remove();
      var $this_grid_index = parseFloat($this_btn.attr('data-val'));
      var $this_discount = 100 - parseFloat($this_btn.attr('data-discount'));
      $th.each($th_pb_qty_details, function(qty_index, qty_value){
        if(qty_value.bundle_detail.id == $this_btn.parents('.th_pb_qty_innercode').attr('data-bundleid')){
          var $th_pb_qty_grid_html = '';
          $th_pb_qty_grid_html += '<div class="th_pb_wf th_pb_qty_layout_grid"><div class="th_pb_wf th_pb_qty_layout_grid_inner">';
          if($th('.th_pb_qty_bundle_cls .th_pb_qty_innercode').outerWidth() > 767){
            $th_pb_qty_grid_html += '<div class="th_pb_qty_layout_grid_column_section">';
          } else if($th('.th_pb_qty_bundle_cls .th_pb_qty_innercode').outerWidth() < 500 && $this_grid_index > 2){
            $th_pb_qty_grid_html += '<div class="th_pb_qty_layout_grid_column_section th_pb_qty_list_view_layout">';
          } else if($this_grid_index > 3){
            $th_pb_qty_grid_html += '<div class="th_pb_qty_layout_grid_column_section th_pb_qty_list_view_layout">';
          } else{
            $th_pb_qty_grid_html += '<div class="th_pb_qty_layout_grid_column_section">';
          }
          for(var $grid_inx = 0; $grid_inx < $this_grid_index; $grid_inx++){
            $th_pb_qty_grid_html += '<div class="th_pb_qty_grid_column th_pb_qty_grid_count_'+$grid_inx+'" data-productid="'+qty_value.product_list[0].id+'"><div class="th_pb_qty_grid_content">';
            $th_pb_qty_grid_html += '<div class="th_pb_qty_grid_figure"><figure>';
            var $th_pb_qty_product_image;
            if(qty_value.product_list[0].image !== undefined && qty_value.product_list[0].image !== null){
              $th_pb_qty_product_image = $th_image_resizer(qty_value.product_list[0].image.src, 'large');
            } else{
              $th_pb_qty_product_image = $th_app_ajax_url+'assets/img/no-product-image.svg';
            }
            $th_pb_qty_grid_html += '<img src="'+$th_pb_qty_product_image+'" alt="'+qty_value.product_list[0].handle+'">';
            $th_pb_qty_grid_html += '</figure></div>';
            $th_pb_qty_grid_html += '<div class="th_pb_qty_grid_detail">';
            $th_pb_qty_grid_html += '<div class="th_pb_wf th_pb_qty_grid_titprice">';
            $th_pb_qty_grid_html += '<h6>'+qty_value.product_list[0].title+'</h6>';
            $th_pb_qty_grid_html += '<p class="th_pb_wf">';
            var $th_qty_sale_price, $th_qty_old_price;
            if(qty_value.bundle_detail.discount_type == '1'){
              $th_qty_sale_price = parseFloat(qty_value.product_list[0].variants[0].price) * 100;
              $th_qty_old_price = parseFloat(qty_value.product_list[0].variants[0].compare_at_price) * 100;
            } else{
              $th_qty_sale_price = ((parseFloat(qty_value.product_list[0].variants[0].price) * 100) * $this_discount) / 100;
              $th_qty_old_price = parseFloat(qty_value.product_list[0].variants[0].price) * 100;
            }
            $th_pb_qty_grid_html += '<span class="th_pb_qty_grid_sale_price"><span class="money">'+$th_money_format($th_qty_sale_price, $th_shop_money)+'</span></span>';
            if($th_qty_old_price > $th_qty_sale_price){
              $th_pb_qty_grid_html += '<span class="th_pb_qty_grid_old_price"><span class="money">'+$th_money_format($th_qty_old_price, $th_shop_money)+'</span></span>';
            }
            $th_pb_qty_grid_html += '</p></div>';
            var $th_pb_qty_select_show = qty_value.product_list[0].variants.length == 1 ? 'display:none !important;' : 'display:block !important;';
            $th_pb_qty_grid_html += '<div class="th_pb_wf th_pb_qty_grid_variants" style="'+$th_pb_qty_select_show+'">';
            $th.each(qty_value.product_list[0].options, function(qty_option_key, qty_option_val){
              $th_pb_qty_grid_html += '<div class="th_pb_qty_grid_single_variant">';
              $th_pb_qty_grid_html += '<label class="th_pb_wf th_pb_qty_grid_label_cls" data-name="'+qty_option_val.name+'">'+qty_option_val.name+'</label>';
              $th_pb_qty_grid_html += '<select class="th_pb_wf th_pb_qty_grid_select_cls" data-name="'+qty_option_val.name+'">';
              $th.each(qty_option_val.values, function(qty_value_key, qty_value_val){
                $th_pb_qty_grid_html += '<option value="'+qty_value_val.replace(/"/g, "'")+'">'+qty_value_val+'</option>';
              });
              $th_pb_qty_grid_html += '</select>';
              $th_pb_qty_grid_html += '</div>';
            });
            if(qty_value.product_list[0].variants.length <= 1){
              if(qty_value.bundle_detail.discount_type == '1'){
                $th_qty_sale_price = parseFloat(qty_value.product_list[0].variants[0].price) * 100;
                $th_qty_old_price = parseFloat(qty_value.product_list[0].variants[0].compare_at_price) * 100;
              } else{
                $th_qty_sale_price = ((parseFloat(qty_value.product_list[0].variants[0].price) * 100) * $this_discount) / 100;
                $th_qty_old_price = parseFloat(qty_value.product_list[0].variants[0].price) * 100;
              }
              $th_pb_qty_grid_html += '<div class="th_pb_qty_variants_section th_pb_wf"><select class="th_pb_qty_variants_select_hidden" style="display:none !important;">';
              if(qty_value.product_list[0].variants[0].inventory_management == 'shopify' || qty_value.product_list[0].variants[0].inventory_management == 'SHOPIFY'){
                if(qty_value.product_list[0].variants[0].inventory_policy != 'deny' && qty_value.product_list[0].variants[0].inventory_policy != 'DENY'){
                  $th_pb_qty_grid_html += '<option value="'+qty_value.product_list[0].variants[0].id+'" data-title="'+qty_value.product_list[0].variants[0].title+'" data-ptitle="'+qty_value.product_list[0].title+'" data-compare-price="'+$th_qty_old_price+'" data-price="'+$th_qty_sale_price+'" data-image="'+$th_pb_qty_product_image+'" data-available="true">'+qty_value.product_list[0].variants[0].title+'</option>';
                } else{
                  if(qty_value.product_list[0].variants[0].inventory_quantity > 0){
                    $th_pb_qty_grid_html += '<option value="'+qty_value.product_list[0].variants[0].id+'" data-title="'+qty_value.product_list[0].variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+qty_value.product_list[0].title+'" data-compare-price="'+$th_qty_old_price+'" data-price="'+$th_qty_sale_price+'" data-image="'+$th_pb_qty_product_image+'" data-available="true">'+qty_value.product_list[0].variants[0].title+'</option>';
                  } else{
                    $th_pb_qty_grid_html += '<option value="'+qty_value.product_list[0].variants[0].id+'" data-title="'+qty_value.product_list[0].variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+qty_value.product_list[0].title+'" data-compare-price="'+$th_qty_old_price+'" data-price="'+$th_qty_sale_price+'" data-image="'+$th_pb_qty_product_image+'" data-available="false">'+qty_value.product_list[0].variants[0].title+'</option>';
                  }
                }
              } else{
                $th_pb_qty_grid_html += '<option value="'+qty_value.product_list[0].variants[0].id+'" data-title="'+qty_value.product_list[0].variants[0].title.replace(/"/g, "'")+'" data-ptitle="'+qty_value.product_list[0].title+'" data-compare-price="'+$th_qty_old_price+'" data-price="'+$th_qty_sale_price+'" data-image="'+$th_pb_qty_product_image+'" data-available="true">'+qty_value.product_list[0].variants[0].title+'</option>';
              }
              $th_pb_qty_grid_html += '</select></div>';
            } else{
              $th_pb_qty_grid_html += '<div class="th_pb_qty_variants_section th_pb_wf"><select class="th_pb_qty_variants_select_hidden" style="display:none !important;">';
              $th.each(qty_value.product_list[0].variants, function(variant_key, variant){
                if(qty_value.bundle_detail.discount_type == '1'){
                  $th_qty_sale_price = parseFloat(variant.price) * 100;
                  $th_qty_old_price = parseFloat(variant.compare_at_price) * 100;
                } else{
                  $th_qty_sale_price = ((parseFloat(variant.price) * 100) * $this_discount) / 100;
                  $th_qty_old_price = parseFloat(variant.price) * 100;
                }
                if(variant.image !== undefined && variant.image !== null){
                  $th_pb_qty_product_image = $th_image_resizer(variant.image.originalSrc, 'large');
                }
                if(variant.inventory_management == 'shopify' || variant.inventory_management == 'SHOPIFY'){
                  if(variant.inventory_policy != 'deny' && variant.inventory_policy != 'DENY'){
                    $th_pb_qty_grid_html += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+qty_value.product_list[0].title+'" data-compare-price="'+$th_qty_old_price+'" data-price="'+$th_qty_sale_price+'" data-image="'+$th_pb_qty_product_image+'" data-available="true">'+variant.title+'</option>';
                  } else{
                    if(variant.inventory_quantity > 0){
                      $th_pb_qty_grid_html += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+qty_value.product_list[0].title+'" data-compare-price="'+$th_qty_old_price+'" data-price="'+$th_qty_sale_price+'" data-image="'+$th_pb_qty_product_image+'" data-available="true">'+variant.title+'</option>';
                    } else{
                      $th_pb_qty_grid_html += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+qty_value.product_list[0].title+'" data-compare-price="'+$th_qty_old_price+'" data-price="'+$th_qty_sale_price+'" data-image="'+$th_pb_qty_product_image+'" data-available="false">'+variant.title+'</option>';
                    }
                  }
                } else{
                  $th_pb_qty_grid_html += '<option value="'+variant.id+'" data-title="'+variant.title.replace(/"/g, "'")+'" data-ptitle="'+qty_value.product_list[0].title+'" data-compare-price="'+$th_qty_old_price+'" data-price="'+$th_qty_sale_price+'" data-image="'+$th_pb_qty_product_image+'" data-available="true">'+variant.title+'</option>';
                }
              });
              $th_pb_qty_grid_html += '</select></div>';
            }
            $th_pb_qty_grid_html += '</div>';
            $th_pb_qty_grid_html += '</div>';
            $th_pb_qty_grid_html += '</div></div>';
          }
          $th_pb_qty_grid_html += '</div>';
          $th_pb_qty_grid_html += '<div class="th_qty_ajax_error" data-msg="'+$th_layout_settings.language.not_available+'"></div>';
          $th_pb_qty_grid_html += '<div class="th_pb_wf th_pb_qty_layout_grid_addtocart_btn"><div class="th_pb_wf th_pb_qty_layout_grid_btn_inner">';
          $th_pb_qty_grid_html += '<div class="btn button th_pb_qty_layout_grid_btn_cls" value="add_to_cart" data-dismode="'+$th_layout_settings.discount_mode+'">';
          $th_pb_qty_grid_html += '<span class="button_text">'+qty_value.bundle_detail.button_text+'</span>';
          $th_pb_qty_grid_html += '<em class="th_qty_pb_add_to_cart_loader"></em>';
          $th_pb_qty_grid_html += '</div>';
          $th_pb_qty_grid_html += '</div></div>';
          $th_pb_qty_grid_html += '</div></div>';
          $this_btn.parents('.th_pb_qty_innercode').append($th_pb_qty_grid_html);
          $th('.th_pb_qty_grid_select_cls').trigger('change');
          $th('html, body').animate({
            scrollTop: $this_btn.parents('.th_pb_qty_innercode').find('.th_pb_qty_layout_grid').offset().top - 50
          }, 1000);
        }
      });
    });
  }

  function $th_pb_qty_bundle_layout(result, $th_qty_append_container, $th_qty_code_place){
    $th.each(result.bundle_list, function(list_index, list_value){
      var $th_pb_qty_html = '';
      if(list_value.product_list !== undefined && list_value.product_list !== null){
        $th_pb_qty_html += '<div class="th_pb_wf th_pb_qty_innercode" data-bundleid="'+list_value.bundle_detail.id+'">';
        $th_pb_qty_html += '<div class="th_pb_title th_pb_wf">';
        $th_pb_qty_html += '<h4>'+list_value.bundle_detail.bundle_title+'</h4>';
        $th_pb_qty_html += '<p>'+list_value.bundle_detail.short_desc+'</p>';
        $th_pb_qty_html += '</div>';
        $th_pb_qty_html += '<div class="th_pb_wf th_pb_qty_layout">';
        $th_pb_qty_html += '<div class="th_pb_qty_layout_detail">';
        $th_pb_qty_html += '<div class="th_pb_wf th_pb_qty_layout_figure"><figure class="th_pb_wf">';
        var $th_pb_qty_product_image = $th_app_ajax_url+'assets/img/no-product-image.svg';
        if(list_value.product_list[0].image !== undefined && list_value.product_list[0].image !== null){
          $th_pb_qty_product_image = $th_image_resizer(list_value.product_list[0].image.src, 'grande');
        }
        $th_pb_qty_html += '<img src="'+$th_pb_qty_product_image+'" alt="'+list_value.product_list[0].handle+'">';
        $th_pb_qty_html += '</figure></div>';
        $th_pb_qty_html += '<div class="th_pb_wf th_pb_qty_layout_title_price">';
        $th_pb_qty_html += '<h6 class="th_pb_wf">'+list_value.product_list[0].title+'</h6>';
        $th_pb_qty_html += '<p class="th_pb_wf">';
        var $th_pb_qty_price = parseFloat(list_value.product_list[0].variants[0].price) * 100;
        $th_pb_qty_html += '<span class="th_pb_qty_layout_main_price"><span class="money">'+$th_money_format($th_pb_qty_price, $th_shop_money)+'</span></span>';
        $th_pb_qty_html += '</p>';
        $th_pb_qty_html += '</div></div>';
        $th_pb_qty_html += '<div class="th_pb_qty_layout_qty_btns"><div class="th_pb_wf th_pb_qty_single_btn">';
        $th.each(list_value.bundle_detail.quantity_break, function(qty_index, qty_value){
          $th_pb_qty_html += '<div class="btn button th_pb_qty_single_btn_cls" data-val="'+qty_value.quantity+'" data-discount="'+qty_value.discount+'" value="open_variant_selection">';
          $th_pb_qty_html += '<span>'+qty_value.btn_text+'</span>';
          $th_pb_qty_html += '</div>';
        });
        $th_pb_qty_html += '</div></div>';
        $th_pb_qty_html += '</div>';
        $th_pb_qty_html += '</div>';
        if($th_qty_code_place == '$th_qty_after_code'){
          if(result.layout_setting.automatic_show_bundle == '1'){
            $th_qty_append_container.after('<div id="th_pb_qty_bundle" class="th_pb_qty_bundle_cls">'+$th_pb_qty_html+'</div>');
          }
        } else{
          $th_qty_append_container.append($th_pb_qty_html);
        }
        if(list_index === result.bundle_list.length - 1){
          $th_pb_qty_button_click(result.bundle_list, result.layout_setting);
        }
      }
    });
  }

  if($th('#th_pb_qty_bundle').length > 0){
    var $th_pb_qty_loader_val = false;
    var $th_pb_qty_product_id = $th('#th_pb_qty_bundle').data('pid');
    $th.ajax({
      type: 'GET',
      url: $th_app_ajax_url+'backend_ajax_new.php',
      data: {shop:$th_shop_conveted_url, product_id:$th_pb_qty_product_id, quantity_bundle:'quantity_bundle', active_currency:$th_active_currency},
      dataType: 'json',
      cache: false,
      success: function(result){
        var $th_qty_append_container = $th('#th_pb_qty_bundle');
        if(result.error != true){
          $th_pb_qty_bundle_layout(result, $th_qty_append_container, '$th_qty_append_code');
        } else{
          $th_qty_append_container.html('');
        }
      },
      error: function(XMLHttpRequest, textStatus){
        $th('#th_pb_qty_bundle').empty();
        console.log(XMLHttpRequest);
      }
    });
  } else if(typeof __st !== 'undefined' && __st.p == 'product'){
    var $th_pb_qty_loader_val = false;
    var $th_pb_qty_product_id = __st.rid;
    $th.ajax({
      type: 'GET',
      url: $th_app_ajax_url+'backend_ajax_new.php',
      data: {shop:$th_shop_conveted_url, product_id:$th_pb_qty_product_id, quantity_bundle:'quantity_bundle', active_currency:$th_active_currency},
      dataType: 'json',
      cache: false,
      success: function(result){
        var $th_qty_append_container = $th('form[action="/cart/add"]:first');
        if(result.error != true){
          $th_pb_qty_bundle_layout(result, $th_qty_append_container, '$th_qty_after_code');
        }
      },
      error: function(XMLHttpRequest, textStatus){
        console.log(XMLHttpRequest);
      }
    });
  }

  if($th('#th_pb_all_qty_bundle').length > 0){
    function $th_get_all_qty_bundles($th_qty_pageno, $th_qty_bundle_count){
      $th.ajax({
        type: 'GET',
        url: $th_app_ajax_url+'get_all_bundle_by_shop.php',
        data: {shop:$th_shop_conveted_url, all_quantity_bundles:'all_quantity_bundles', currentpage:$th_qty_pageno, bundle_count:$th_qty_bundle_count, active_currency:$th_active_currency},
        dataType: 'json',
        cache: false,
        beforeSend: function(){
          var loader_code = '<figure class="th_bundle_section_loader th_pb_wf"><svg width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ripple"><rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect><g> <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="1;1;0"></animate><circle cx="50" cy="50" r="41.2637" stroke="#000" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="r" dur="2s" repeatCount="indefinite" begin="-1s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle></g><g><animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate><circle cx="50" cy="50" r="24.8458" stroke="#000000" fill="none" stroke-width="6" stroke-linecap="round"><animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate></circle></g></svg></figure>';
          $th('#th_pb_all_qty_bundle').append(loader_code);
        },
        success: function(result){
          var $th_qty_append_container = $th('#th_pb_all_qty_bundle');
          $th('figure.th_bundle_section_loader').remove();
          if(result.error != true){
            $th_pb_qty_bundle_layout(result, $th_qty_append_container, '$th_qty_append_code');
            var $th_qty_loaded = 0, $th_qty_bundle_count = result.bundle_count;
            if(result.nextpage > $th_qty_pageno){
              if(result.layout_setting.btn_load_more == '1'){
                $th(window).scroll(function(){
                  var $th_bundle_section_height = $th('#th_pb_all_qty_bundle div').offset().top + $th('#th_pb_all_qty_bundle div').outerHeight() - window.innerHeight;
                  if($th(window).scrollTop() >= $th_bundle_section_height){
                    if($th_qty_loaded === 0){
                      $th_get_all_qty_bundles($th_qty_pageno, $th_qty_bundle_count);
                      $th_qty_loaded = 1;
                    }
                  }
                });
                $th_qty_pageno++;
              } else{
                $th('.th_pb_qty_all_bundles_list_loadmore_div').remove();
                var $th_load_more_button = '';
                $th_load_more_button += '<div class="th_pb_wf th_pb_qty_all_bundles_list_loadmore_div">';
                $th_load_more_button += '<button type="button" id="th_pb_qty_all_bundles_list_loadmore_btn" class="btn button th_pb_qty_all_bundles_list_loadmore_btn" data-nextpage="'+result.nextpage+'" data-bundlecount="'+result.bundle_count+'"><span class="button_text">'+result.layout_setting.language.btn_load_more+'</span> <em class="th_pb_add_to_cart_loader"></em></button>';
                $th_load_more_button += '</div>';
                $th('#th_pb_all_qty_bundle').append($th_load_more_button);
              }
            } else{
              $th('.th_pb_qty_all_bundles_list_loadmore_div').remove();
            }
          } else{
            $th_qty_append_container.html('');
          }
        },
        error: function(XMLHttpRequest, textStatus){
          $th('#th_pb_all_qty_bundle').html('');
          console.log(XMLHttpRequest);
        }
      });
    }
    var $th_qty_pageno = 1, $th_qty_bundle_count = 0;
    $th_get_all_qty_bundles($th_qty_pageno, $th_qty_bundle_count);
    
    $th(document).on('click', '#th_pb_qty_all_bundles_list_loadmore_btn', function(){
      var $th_qty_nextpage = $th(this).attr('data-nextpage');
      var $th_qty_bundlecount = $th(this).attr('data-bundlecount');
      $th('#th_pb_qty_all_bundles_list_loadmore_btn').remove();
      $th_get_all_qty_bundles($th_qty_nextpage, $th_qty_bundlecount);
    });
  }

  $th(document).on('change', '.th_pb_qty_variants_select_hidden', function(){
    var $this_qty_hide = $th(this);
    var $th_qty_price = $this_qty_hide.find('option:selected').data('price');
    var $th_qty_compare_price = $this_qty_hide.find('option:selected').data('compare-price');
    var $th_qty_html_price = $this_qty_hide.parents('.th_pb_qty_grid_content').find('.th_pb_qty_grid_sale_price');
    $th_qty_html_price.html('<span class="money">'+$th_money_format($th_qty_price, $th_shop_money)+'</span>');
    var $th_qty_variant_img = $this_qty_hide.find('option:selected').data('image');
    $this_qty_hide.parents('.th_pb_qty_grid_content').find('.th_pb_qty_grid_figure img').attr('src', $th_qty_variant_img);
    if($th_qty_compare_price > $th_qty_price){
      var $th_qty_html_compare_price = $this_qty_hide.parents('.th_pb_qty_grid_content').find('.th_pb_qty_grid_old_price');
      if($th_qty_html_compare_price.length > 0){
        $th_qty_html_compare_price.html('<span class="money">'+$th_money_format($th_qty_compare_price, $th_shop_money)+'</span>');
      } else{
        $th('<span class="th_pb_qty_grid_old_price"><span class="money">'+$th_money_format($th_qty_compare_price, $th_shop_money)+'</span></span>').insertAfter($th_qty_html_price);
      }
    } else{
      $this_qty_hide.parents('.th_pb_list_content').find('.th_pb_old_price').empty();
    }
    var $th_qty_grand_parents = $this_qty_hide.parents('.th_pb_qty_layout_grid_inner');
    var $th_qty_variant_available = [];
    $th_qty_grand_parents.find('.th_pb_qty_variants_select_hidden').each(function(index){
      var $th_qty_this_ptitle = $th(this).find(':selected').data('ptitle');
      var $th_qty_this_vtitle = $th(this).find(':selected').data('title');
      var $th_qty_this_available = $th(this).find(':selected').data('available');
      $th_qty_variant_available.push({product_title: $th_qty_this_ptitle+' ('+$th_qty_this_vtitle+')', variant_available: $th_qty_this_available});
      if(index === ($th_qty_grand_parents.find('.th_pb_qty_variants_select_hidden').length - 1)){
        var $th_qty_enable_btn_click = true;
        var $th_qty_not_available_products = new Array();
        $th.each($th_qty_variant_available, function(array_index, array_val){
          if(!array_val.variant_available){
            $th_qty_enable_btn_click = false;
            $th_qty_not_available_products.push(array_val.product_title);
          }
          if(array_index === ($th_qty_variant_available.length - 1)){
            if($th_qty_enable_btn_click){
              $th_qty_grand_parents.find('.th_qty_ajax_error').html('');
              $th_qty_grand_parents.find('.th_pb_qty_layout_grid_btn_cls').removeClass('th_pb_qty_layout_grid_btn_disabled');
            } else{
              var $th_qty_pb_error_msg = $th_qty_grand_parents.find('.th_qty_ajax_error').data('msg');
              var $th_qty_not_available_text = $th_qty_not_available_products.join(" & ");
              $th_qty_not_available_text = $th_qty_pb_error_msg.replace("{{title}}", $th_qty_not_available_text);
              $th_qty_grand_parents.find('.th_qty_ajax_error').html('<p class="th_qty_ajax_error_cls">'+$th_qty_not_available_text+'</p>');
              $th_qty_grand_parents.find('.th_pb_qty_layout_grid_btn_cls').addClass('th_pb_qty_layout_grid_btn_disabled');
            }
          }
        });
      }
    });
  });

  $th(document).on('change', '.th_pb_qty_grid_select_cls', function(){
    var $this_qty_single = $th(this);
    var $th_qty_parents = $this_qty_single.parents('.th_pb_qty_grid_content');
    var $th_qty_option_array = new Array();
    $th_qty_parents.find('.th_pb_qty_grid_select_cls').each(function(){
      var $th_qty_temp_val = $th(this).find('option:selected').val();
      $th_qty_option_array.push($th_qty_temp_val);
    });
    var $th_qty_final_option_selected = $th_qty_option_array.join(" / ");
    $th_qty_parents.find('.th_pb_qty_variants_select_hidden option').prop('selected', false);
    if($th_qty_parents.find('.th_pb_qty_variants_select_hidden option[data-title="'+$th_qty_final_option_selected+'"]').length > 0){
      $th_qty_parents.find('.th_pb_qty_variants_select_hidden option[data-title="'+$th_qty_final_option_selected+'"]').prop('selected', true).trigger('change');
    } else{
      var $th_qty_error_msg = $th_qty_parents.parents('.th_pb_qty_innercode').find('.th_qty_ajax_error').attr('data-msg');
      var $th_qty_not_available_text = $th_qty_final_option_selected;
      $th_qty_not_available_text = $th_qty_final_option_selected.replace("{{title}}", $th_qty_not_available_text);
      $th_qty_parents.parents('.th_pb_qty_innercode').find('.th_qty_ajax_error').html('<p class="th_qty_ajax_error_cls">'+$th_qty_not_available_text+'</p>');
      $th_qty_parents.parents('.th_pb_qty_innercode').find('.th_pb_qty_layout_grid_btn_cls').addClass('th_pb_qty_layout_grid_btn_disabled');
    }
  });

  $th(document).on('click', '.th_pb_qty_layout_grid_btn_cls', function(evt){
    evt.preventDefault();
    var $this_qty_btn = $th(this);
    if(!$this_qty_btn.hasClass('th_pb_qty_layout_grid_btn_disabled')){
      if($this_qty_btn.attr('data-dismode') == '1'){
        $th.ajax({
          type: "POST",
          url: '/cart/clear.js',
          dataType: 'json',
          success: function(){
            var $th_qty_this_parents = $this_qty_btn.parents('.th_pb_qty_innercode');
            var $th_qty_bundle_id = $th_qty_this_parents.attr('data-bundleid');
            var $th_qty_grid_length = $th_qty_this_parents.find('.th_pb_qty_grid_column').length;
            var $th_qty_line_items = new Array();
            for(var i=0; i<$th_qty_grid_length; i++){
              var $th_qty_properties = new Object();
              $th_qty_properties.th_bundle_quantity = $th_qty_bundle_id;
              $th_qty_properties.th_bundle_type = 'quantity';
              var $th_qty_variantid = $th_qty_this_parents.find('.th_pb_qty_grid_count_'+i+' .th_pb_qty_variants_select_hidden option:selected').val();
              $th_qty_line_items.push({variant_id:$th_qty_variantid, properties:$th_qty_properties});
            }
            function quantity_bundle_addtocart(){
              if($th_qty_line_items.length > 0){
                var $th_qty_request = $th_qty_line_items.shift();
                var $th_qty_tempId = $th_qty_request.variant_id;
                var $th_qty_tempProperties = $th_qty_request.properties;
                $th.ajax({
                  type: 'POST',
                  url: '/cart/add.js',
                  data: {quantity:1, id:$th_qty_tempId, properties:$th_qty_tempProperties},
                  dataType: 'json',
                  beforeSend: function(){
                    if(!$this_qty_btn.hasClass('th_pb_qty_btn_loading')){
                      $this_qty_btn.addClass('th_pb_qty_btn_loading');
                    }
                  },
                  success: function(cart){
                    quantity_bundle_addtocart();
                  },
                  error: function(XMLHttpRequest, textStatus){
                    console.log(XMLHttpRequest);
                  }
                });
              } else{
                $th.getJSON('/cart.js', function(cart){
                  if(cart.item_count > 0){
                    $th_qty_this_parents.find('.th_pb_qty_grid_column').each(function(i, grid){
                      var $th_qty_temp = new Object();
                      var $th_qty_added_proid = $th_qty_this_parents.find('.th_pb_qty_grid_count_'+i).attr('data-productid');
                      var $th_qty_added_variantid = $th_qty_this_parents.find('.th_pb_qty_grid_count_'+i+' .th_pb_qty_variants_select_hidden option:selected').val();
                      $th_qty_temp = {
                        product_id: $th_qty_added_proid,
                        variant_id: $th_qty_added_variantid,
                        quantity: 1
                      }
                      $th_qty_line_items[i] = $th_qty_temp;
                      if(i === $th_qty_grid_length - 1){
                        $th.ajax({
                          url: $th_app_ajax_url+'create_draft_order.php',
                          type: 'post',
                          dataType: 'json',
                          cache: false,
                          data: {shop:$th_shop_conveted_url, bundle_id:$th_qty_bundle_id, quantity_bundle:'quantity_bundle', line_items:$th_qty_line_items, active_currency:$th_active_currency},
                          beforeSend: function(){
                            if(!$this_qty_btn.hasClass('th_pb_qty_btn_loading')){
                              $this_qty_btn.addClass('th_pb_qty_btn_loading');
                            }
                          },
                          success: function(result){
                            var result_url = result;
                            if(result.indexOf('?') > -1){
                              result_url = result+'&locale='+Shopify.locale;
                            } else{
                              result_url = result+'?locale='+Shopify.locale;
                            }
                            window.location = result_url;
                          },
                          error: function(XMLHttpRequest, textStatus){
                            console.log(XMLHttpRequest);
                          }
                        });
                      }
                    });
                  }
                });
              }
            }
            quantity_bundle_addtocart();
          },
          error: function(XMLHttpRequest, textStatus){
            console.log(XMLHttpRequest);
          }
        });
      } else{
        var $th_qty_this_parents = $this_qty_btn.parents('.th_pb_qty_innercode');
        var $th_qty_bundle_id = $th_qty_this_parents.attr('data-bundleid');
        var $th_qty_grid_length = $th_qty_this_parents.find('.th_pb_qty_grid_column').length;
        var $th_qty_line_items = new Object();
        $th_qty_this_parents.find('.th_pb_qty_grid_column').each(function(i, grid){
          var $th_qty_temp = new Object();
          var $th_qty_added_proid = $th_qty_this_parents.find('.th_pb_qty_grid_count_'+i).attr('data-productid');
          var $th_qty_added_variantid = $th_qty_this_parents.find('.th_pb_qty_grid_count_'+i+' .th_pb_qty_variants_select_hidden option:selected').val();
          $th_qty_temp = {
            product_id: $th_qty_added_proid,
            variant_id: $th_qty_added_variantid,
            quantity: 1
          }
          $th_qty_line_items[i] = $th_qty_temp;
          if(i === $th_qty_grid_length - 1){
            $th.ajax({
              url: $th_app_ajax_url+"create_draft_order.php",
              type: 'post',
              dataType: "json",
              cache: false,
              data: {shop:$th_shop_conveted_url, bundle_id:$th_qty_bundle_id, quantity_bundle:'quantity_bundle', line_items:$th_qty_line_items, active_currency:$th_active_currency},
              beforeSend: function(){
                if(!$this_qty_btn.hasClass('th_pb_qty_btn_loading')){
                  $this_qty_btn.addClass('th_pb_qty_btn_loading');
                }
              },
              success: function(result){
                var result_url = result;
                if(result.indexOf('?') > -1){
                  result_url = result+'&locale='+Shopify.locale;
                } else{
                  result_url = result+'?locale='+Shopify.locale;
                }
                window.location = result_url;
              },
              error: function(XMLHttpRequest, textStatus){
                console.log(XMLHttpRequest);
              }
            });
          }
        });
      }
    } else{
      return false;
    }
  });

  /* ========== Cart Page JS ========== */

  function $th_check_array(source,target){
    var result = source.filter(function(item){ return target.indexOf(item) > -1 });
    if(result.length >= target.length){return true} else{return false;}
  }

  function $th_containsAny(source,target){
    var result = source.filter(function(item){ return target.indexOf(item) > -1});
    return (result.length == source.length);
  }

  function $th_checkout_section($th_cart_value, $th_bundle_array, $th_custom_bundle_array){
    var $th_checkout_cls = ['input[name=\'checkout\']', 'button[name=\'checkout\']', '[href$=\'checkout\']', 'input[name=\'goto_pp\']', 'button[name=\'goto_pp\']', 'input[name=\'goto_gc\']', 'button[name=\'goto_gc\']', '.additional-checkout-button', '.google-wallet-button-holder', '.amazon-payments-pay-button'];
    $th_checkout_cls.forEach(function($th_selector){
      var $th_els_code = document.querySelectorAll($th_selector);
      if(typeof $th_els_code == 'object' && $th_els_code){
        for(var i=0; i<$th_els_code.length; i++){
          var $th_el_code = $th_els_code[i];
          $th_el_code.addEventListener('click', function(event){
            event.preventDefault();
            $th.ajax({
              url: $th_app_ajax_url+"create_draft_order.php",
              type: 'post',
              dataType: "json",
              data: {shop:$th_shop_conveted_url, cart_detail:$th_cart_value, bundle_array:$th_bundle_array, custom_array:$th_custom_bundle_array, active_currency:$th_active_currency},
              cache: false,
              success: function(result){
                var result_url = result;
                if(result.indexOf('?') > -1){
                  result_url = result+'&locale='+Shopify.locale;
                } else{
                  result_url = result+'?locale='+Shopify.locale;
                }
                window.location = result_url;
              },
              error: function(XMLHttpRequest, textStatus){
                console.log(XMLHttpRequest);
                window.location = '/checkout';
              }
            });
          }, false);
          $th_el_code.dataset.thpbCheckout = true;
        }
      }
    });
  }

  function $th_cart_total($th_cart_total_price, $th_cart_items, $th_pb_fixed_array, $th_bundle_language){
    var $th_cart_line_lenght = $th('.th_pb_cart_line').length;
    var $th_total_price = 0;
    $th('.th_pb_cart_line').each(function(index){
      var $th_line_price = $th(this).data('price');
      $th_total_price = $th_total_price + parseFloat($th_line_price);
      if(index === $th_cart_line_lenght - 1){
        if(Object.entries($th_pb_fixed_array).length > 0){
          var $th_cart_fixed_price_total = 0;
          var $th_custom_each_index = 0;
          $th.each($th_pb_fixed_array, function(idx, fixed_price){
            $th_cart_fixed_price_total = parseFloat($th_cart_fixed_price_total) + ((parseFloat(fixed_price) * 100) * $th_active_currency_rate);
            $th_custom_each_index++;
            if($th_custom_each_index === Object.entries($th_pb_fixed_array).length){
              $th_cart_total_price = parseFloat($th_total_price);
              $th_total_price = parseFloat($th_total_price) - parseFloat($th_cart_fixed_price_total);
              $th('.th_cart_total_price').html('<span class="th_cart_total_sale_price"><span class="money">'+$th_money_format($th_total_price, $th_shop_money)+'</span></span>');
              $th('.th_cart_total_price').append('<span class="th_cart_total_original_price"><span class="money th_pb_line_through">'+$th_money_format($th_cart_total_price, $th_shop_money)+'</span></span>');
              if($th('.th_cart_fixed_discount_msg') > 0){
                $th('.th_cart_fixed_discount_msg').html('<em>'+$th_bundle_language.fixed_price+' <span class="money">'+$th_money_format($th_cart_fixed_price_total, $th_shop_money)+'</span></em>');
              } else{
                $th('.th_cart_total_price').append('<div class="th_cart_fixed_discount_msg"><em>'+($th_bundle_language.fixed_price)+' <span class="money">'+$th_money_format($th_cart_fixed_price_total, $th_shop_money)+'</span></em></div>');
              }
            }
          });
        } else{
          $th('.th_cart_total_price').html('<span class="th_cart_total_sale_price"><span class="money">'+$th_money_format($th_total_price, $th_shop_money)+'</span></span>');
          if($th_cart_total_price > $th_total_price){
            $th('.th_cart_total_price').append('<span class="th_cart_total_original_price"><span class="money th_pb_line_through">'+$th_money_format($th_cart_total_price, $th_shop_money)+'</span></span>');
          }
        }
      }
    });
  }

  function $th_cart_bundle($th_bundle_array, $th_cart_items, $th_cart_total_price, $th_bundle_language){
    var $th_cart_line_lenght = $th('.th_pb_cart_line').length;
    if($th_cart_line_lenght > 0){
      var $th_cart_array = [], $th_pb_fixed_array = {}, $th_line_count = 0;
      $th.each($th_cart_items, function(key, value){
        var $th_line_temp = 0;
        $th_line_count++ 
        var $th_this = $th('.th_pb_cart_line[data-indexth="'+$th_line_count+'"]');
        var $th_line_id = $th_this.data('idth');
        if(value.properties != null){
          $th.each(value.properties, function(p_key, p_value){
            $th.each($th_bundle_array, function(bundle_index, bundle_value){
              if(p_key.indexOf('th_bundle_product') >= 0){
                if(p_value == bundle_value.bundle_id){
                  if(bundle_value.discount_type == '0'){
                    if(bundle_value.discount > 0){
                      $th_this.find('.th_bundle_discount_text').html($th_bundle_language.bundle_discount+': '+bundle_value.discount+'%');
                    }
                  }
                  var $th_temp_dis = 100 - parseFloat(bundle_value.discount);
                  var $th_b_price = parseFloat(value.price) * parseFloat($th_temp_dis) / 100;
                  var $th_b_line_price = 0;
                  if($th_this.find('.th_bundle_discount_text').length !== 0){
                    if(bundle_value.discount_type == '0'){
                      if(bundle_value.discount > 0){
                        $th_this.find('.th_item_price').html('<span class="money">'+$th_money_format($th_b_price, $th_shop_money)+'</span>');
                        $th_this.find('.th_item_price').append('<span class="money th_pb_line_through">'+$th_money_format(value.price, $th_shop_money)+'</span>');
                      }
                      $th_b_line_price = parseFloat($th_b_price) * parseFloat(value.quantity);
                      $th_this.attr('data-price', $th_b_line_price);
                      if(bundle_value.discount > 0){
                        $th_this.find('.th_item_line_price').html('<span class="money">'+$th_money_format($th_b_line_price, $th_shop_money)+'</span>');
                        $th_this.find('.th_item_line_price').append('<span class="money th_pb_line_through">'+$th_money_format(value.line_price, $th_shop_money)+'</span>');
                      }
                    } else{
                      $th_pb_fixed_array[bundle_value.bundle_id] = bundle_value.fixed_discount;
                    }
                    $th_this.find('input[name="updates[]"]').prop('disabled', true);
                    $th_this.find('.js-qty .js-qty__adjust').prop('disabled', true);
                    $th_this.find('select[aria-label="Quantity"]').prop('disabled', true);
                    $th_this.find('.QuantitySelector__Button').prop('disabled', true);
                    $th_this.find('.increaseVal').prop('disabled', true);
                    $th_this.find('.decreaseVal').prop('disabled', true);
                    $th_this.find('.qtyBtn, .th_pb_remove_item').prop('disabled', true);
                    $th_this.find('.qtyBtn, .th_pb_remove_item', '.plus', '.minus').addClass('th_pb_disabled_qty_btn_cls');
                    $th_this.find('.plus').addClass('th_pb_disabled_qty_btn_cls');
                    $th_this.find('.minus').addClass('th_pb_disabled_qty_btn_cls');
                    $th_this.find('.QuantitySelector__Button').addClass('th_pb_disabled_qty_btn_cls');
                    $th_this.find('.cart-item-increase').addClass('th_pb_disabled_qty_btn_cls');
                    $th_this.find('.cart-item-decrease').addClass('th_pb_disabled_qty_btn_cls');
                    $th_this.attr('data-thpbid', bundle_value.bundle_id);
                    $th_this.find('.th_pb_remove_cart_item').addClass('th_pb_remove_all_products');
                    $th_this.find('.th_pb_remove_cart_item').attr('data-thromdesc', $th_bundle_language.cart_remove_confi);
                    $th_line_temp = $th_line_temp + $th_b_line_price;
                  }
                }
              }
            });
          });
        }
        if($th_line_temp == 0){
          if($th_this.attr('data-price')){} else{
            $th_this.attr('data-price', value.line_price);
          }
        }
        if(key === ($th_cart_items.length - 1)){
          setTimeout(function(){
            $th_cart_total($th_cart_total_price, $th_cart_items, $th_pb_fixed_array, $th_bundle_language);
          }, 500);
        }
      });
    }
  }

  function $th_cart_custom_bundle($th_custom_bundle_array, $th_custom_cart_items, $th_custom_cart_total_price, $th_bundle_language){
    var $th_cart_line_lenght = $th('.th_pb_cart_line').length, $th_pb_fixed_array = {};
    if($th_cart_line_lenght > 0){
      var $th_cart_array = [], $th_line_count = 0;
      $th.each($th_custom_cart_items, function(key, value){
        var $th_line_temp = 0;
        $th_line_count++ 
        var $th_this = $th('.th_pb_cart_line[data-indexth="'+$th_line_count+'"]');
        var $th_line_id = $th_this.data('idth');
        if(value.properties != null){
          $th.each(value.properties, function(p_key, p_value){
            $th.each($th_custom_bundle_array, function(bundle_index, bundle_value){
              if(p_key.indexOf('th_bundle_custom') >= 0){
                if(p_value == bundle_value.bundle_id){
                  if(bundle_value.discount > 0){
                    $th_this.find('.th_bundle_discount_text').html($th_bundle_language.custom_discount+': '+bundle_value.discount+'%');
                    var $th_temp_dis = 100 - parseFloat(bundle_value.discount);
                    var $th_b_price = parseFloat(value.price) * parseFloat($th_temp_dis) / 100;
                    if($th_this.find('.th_bundle_discount_text').length !== 0){
                      $th_this.find('.th_item_price').html('<span class="money">'+$th_money_format($th_b_price, $th_shop_money)+'</span>');
                      $th_this.find('.th_item_price').append('<span class="money th_pb_line_through">'+$th_money_format(value.price, $th_shop_money)+'</span>');
                      var $th_b_line_price = parseFloat($th_b_price) * parseFloat(value.quantity);
                      $th_this.attr('data-price', $th_b_line_price);
                      $th_this.find('.th_item_line_price').html('<span class="money">'+$th_money_format($th_b_line_price, $th_shop_money)+'</span>');
                      $th_this.find('.th_item_line_price').append('<span class="money th_pb_line_through">'+$th_money_format(value.line_price, $th_shop_money)+'</span>');
                      $th_this.attr('data-thpbid', bundle_value.bundle_id);
                      $th_this.find('.th_pb_remove_cart_item').addClass('th_pb_remove_all_products');
                      $th_this.find('.th_pb_remove_cart_item').attr('data-thromdesc', $th_bundle_language.cart_remove_confi);
                      $th_line_temp = $th_line_temp + $th_b_line_price;
                    }
                  }
                }
              }
            });
          });
        }
        if($th_line_temp == 0){
          if($th_this.attr('data-price')){} else{
            $th_this.attr('data-price', value.line_price);
          }
        }
        if(key === ($th_custom_cart_items.length - 1)){
          setTimeout(function(){
            $th_cart_total($th_custom_cart_total_price, $th_custom_cart_items, $th_pb_fixed_array, $th_bundle_language);
          }, 500);
        }
      });
    }
  }

  function $th_cart_format($th_cart_items, $th_bundle_result, $th_cart_total_price){
    var $th_bundle_array = [], $th_custom_bundle_array = [], $th_custom_bundle = false, $th_bundle = false;
    $th.each($th_bundle_result.bundle_detail, function(index, value){
      
      var $th_pb_ids = [], $th_pb_bundle_ids = '', $th_cart_custom_ids = [], $th_cart_ids = [];
      $th.each(value.product_ids, function(bundle_index, bundle_value){
        $th_pb_ids.push(parseFloat(bundle_value));
      });
      $th.each($th_cart_items, function(cart_index, cart_value){
        if(cart_value.properties != null){
          $th.each(cart_value.properties, function(pro_index, pro_value){
            if(pro_index == 'th_bundle_custom'){
              $th_cart_custom_ids.push(pro_value);
            }
            if(pro_value == 'bundle'){
              $th_cart_ids.push(cart_value.product_id);
            }
            if(pro_value == 'custom'){
              $th_cart_custom_ids.push(cart_value.product_id);
            }
            if(cart_value.properties.th_bundle_product == value.bundle_id){
              $th_pb_bundle_ids = value.bundle_id;
            }
            if(cart_value.properties.th_bundle_custom == value.bundle_id){
              $th_pb_bundle_ids = value.bundle_id;
            }
          });
        }
        if(cart_index === ($th_cart_items.length - 1)){
          if($th_check_array($th_cart_ids, $th_pb_ids)){
            if(value.type == 'bundle'){
              if($th_pb_bundle_ids == value.bundle_id){
                $th_bundle = true;
                $th_bundle_array.push(value);
              }
            }
          }
          if($th_check_array($th_cart_custom_ids, $th_pb_ids)){
            if(value.type == 'custom'){
              if($th_pb_bundle_ids == value.bundle_id){
                $th_custom_bundle = true;
                $th_custom_bundle_array.push(value);
              }
            }
          }
        }
      });
      if(index === ($th_bundle_result.bundle_detail.length - 1)){
        if($th_custom_bundle){
          $th_cart_custom_bundle($th_custom_bundle_array, $th_cart_items, $th_cart_total_price, $th_bundle_result.language);
        }
        if($th_bundle){
          $th_cart_bundle($th_bundle_array, $th_cart_items, $th_cart_total_price, $th_bundle_result.language);
        }
        if($th_bundle || $th_custom_bundle){
          $th_checkout_section($th_cart_items, $th_bundle_array, $th_custom_bundle_array);
        }
      }
    });
  }

  function $th_cart_bundles(){
    if($th('.th_pb_cart_bundles').length > 0){
      $th.ajax({
        type: 'GET',
        url: $th_app_ajax_url+'cart_selected_bundle.php',
        data: {shop:$th_shop_conveted_url, active_currency:$th_active_currency},
        dataType: 'json',
        cache: false,
        success: function(result){
          if(result.error != true){
            var $th_bundle_layout = result.layout_setting.bundle_layout, $th_bundle_code_place = '$th_bundle_append_code';
            $th('.th_pb_cart_bundles').html('');
            if($th_bundle_layout == 'bundle_layout_2'){
              $th_bundle_design_layout_2(result, '.th_pb_cart_bundles', 'null', $th_bundle_code_place);
            } else if($th_bundle_layout == 'bundle_layout_3'){
              $th_bundle_design_layout_3(result, '.th_pb_cart_bundles', 'null', $th_bundle_code_place);
            } else{
              $th_bundle_design(result, '.th_pb_cart_bundles', 'null', $th_bundle_code_place);
            }
            th_pb_add_to_cart_click();
          }
        },
        error: function(XMLHttpRequest, textStatus){
          console.log(XMLHttpRequest);
        }
      });
    }
  }

  if(window.location.href.indexOf('/cart') > -1){
    $th.getJSON('/cart.js?internal', function(cart){
      if(cart.item_count > 0){
        var $th_cart_bundle_ids = [];
        $th.each(cart.items, function(cart_index, cart_value){
          if(cart_value.properties != null){
            $th.each(cart_value.properties, function(pro_index, pro_value){
              if(pro_index == 'th_bundle_product' || pro_index == 'th_bundle_custom'){
                $th_cart_bundle_ids.push(pro_value);
              }
            });
          }
          if(cart_index === cart.items.length - 1){
            $th_cart_bundle_ids = $th.unique($th_cart_bundle_ids);
            if($th_cart_bundle_ids.length > 0){
              $th.ajax({
                type: 'GET',
                url: $th_app_ajax_url+'cart_bundle.php',
                data: {shop:$th_shop_conveted_url, cart_bundle_ids:$th_cart_bundle_ids, active_currency:$th_active_currency},
                dataType: 'json',
                cache: false,
                success: function(result){
                  $th_cart_format(cart.items, result, cart.total_price);
                },
                error: function(XMLHttpRequest, textStatus){
                  console.log(XMLHttpRequest);
                }
              });
            }
          }
        });
      }
    });
    $th_cart_bundles();
  }

  $th(document).on('click', '.th_pb_remove_all_products', function(e){
    e.preventDefault(), e.stopImmediatePropagation();
    var $th_remove_msg = $th(this).attr('data-thromdesc');
    if($th_remove_msg == '' || $th_remove_msg == null || $th_remove_msg == undefined){
      $th_remove_msg = 'If you delete any product from the bundle then it will remove all the products associated with that bundle.'
    }
    var $th_remove_confirmation = confirm($th_remove_msg);
    if($th_remove_confirmation){
      var $th_remove_this = $th(this), $th_remove_array = {};
      var $th_remove_bundle_id = $th_remove_this.parents('.th_pb_cart_line').data('thpbid');
      $th('.th_pb_cart_line[data-thpbid="'+$th_remove_bundle_id+'"]').each(function(index){
        $th_remove_array[$th(this).data('idth')] = 0;
        if(index === $th('.th_pb_cart_line[data-thpbid="'+$th_remove_bundle_id+'"]').length - 1){
          $th.ajax({
            type: 'POST',
            url: '/cart/update.js',
            data: {updates:$th_remove_array},
            dataType: 'json',
            success: function(result){
              location.reload();
            },
            error: function(XMLHttpRequest, textStatus){
              console.log(XMLHttpRequest);
            }
          });
        }
      });
    } else{
      return false;
    }
  });

  window.$th_quickview_normal_bundle = function($th_qv_pid){
    $th.ajax({
      type: 'GET',
      url: $th_app_ajax_url+'backend_ajax_new.php',
      data: {shop:$th_shop_conveted_url, product_id:$th_qv_pid, active_currency:$th_active_currency},
      dataType: 'json',
      success: function(result){
        var $th_bundle_class = '#th_pb_qv_normal_section', $th_bundle_code_place = '$th_bundle_append_code';
        if(result.error != true){
          var $th_bundle_layout = result.layout_setting.bundle_layout;
          $th($th_bundle_class).html('');
          if($th_bundle_layout == 'bundle_layout_2'){
            $th_bundle_design_layout_2(result, $th_bundle_class, 'null', $th_bundle_code_place);
          } else if($th_bundle_layout == 'bundle_layout_3'){
            $th_bundle_design_layout_3(result, $th_bundle_class, 'null', $th_bundle_code_place);
          } else{
            $th_bundle_design(result, $th_bundle_class, 'null', $th_bundle_code_place);
          }
        } else{
          $th($th_bundle_class).html('');
        }
      },
      error: function(XMLHttpRequest, textStatus){
        console.log(XMLHttpRequest);
      }
    });
  };

  window.$th_quickview_quantity_bundle = function($th_qv_pid){
    $th.ajax({
      type: 'GET',
      url: $th_app_ajax_url+'backend_ajax_new.php',
      data: {shop:$th_shop_conveted_url, product_id:$th_qv_pid, quantity_bundle:'quantity_bundle', active_currency:$th_active_currency},
      dataType: 'json',
      success: function(result){
        var $th_qty_append_container = $th('#th_pb_qv_quantity_section');
        if(result.error != true){
          $th_pb_qty_bundle_layout(result, $th_qty_append_container, '$th_qty_append_code');
        } else{
          $th_qty_append_container.html('');
        }
      },
      error: function(XMLHttpRequest, textStatus){
        $th('.th_pb_qty_bundle_cls').empty();
        console.log(XMLHttpRequest);
      }
    });
  };
});

var $ = jQuery.noConflict();