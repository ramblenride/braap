function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,a=function(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}((function(e){var r=function(e){var r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return L()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=$(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var l={};function p(){}function h(){}function v(){}var d={};d[a]=function(){return this};var m=Object.getPrototypeOf,y=m&&m(m(S([])));y&&y!==r&&n.call(y,a)&&(d=y);var g=v.prototype=p.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(e,r){var o;this._invoke=function(a,i){function c(){return new r((function(o,c){!function o(a,i,c,u){var s=f(e[a],e,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"===t(p)&&n.call(p,"__await")?r.resolve(p.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):r.resolve(p).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}(a,i,o,c)}))}return o=o?o.then(c,c):c()}}function $(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,$(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=g.constructor=v,v.constructor=h,h.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},e.awrap=function(t){return{__await:t}},b(w.prototype),w.prototype[i]=function(){return this},e.AsyncIterator=w,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new w(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(g),u(g,c,"Generator"),g[a]=function(){return this},g.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=S,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}));function i(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?l(e):r}function h(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function m(){}function y(t,e){for(var r in e)t[r]=e[r];return t}function g(t){return t()}function b(){return Object.create(null)}function w(t){t.forEach(g)}function $(t){return"function"==typeof t}function x(e,r){return e!=e?r==r:e!==r||e&&"object"===t(e)||"function"==typeof e}function E(t,e,r,n){return t[1]&&n?y(r.ctx.slice(),t[1](n(e))):r.ctx}function _(e,r,n,o,a,i,c){var u=function(e,r,n,o){if(e[2]&&o){var a=e[2](o(n));if(void 0===r.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(r.dirty.length,a.length),u=0;u<c;u+=1)i[u]=r.dirty[u]|a[u];return i}return r.dirty|a}return r.dirty}(r,o,a,i);if(u){var s=E(r,n,o,c);e.p(s,u)}}function S(t,e){t.appendChild(e)}function L(t,e,r){t.insertBefore(e,r||null)}function R(t){t.parentNode.removeChild(t)}function k(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function O(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function P(){return j(" ")}function A(){return j("")}function N(t,e,r,n){return t.addEventListener(e,r,n),function(){return t.removeEventListener(e,r,n)}}function T(t){return function(e){return e.preventDefault(),t.call(this,e)}}function D(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function I(t){return Array.from(t.childNodes)}function C(t,e,r,n){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];r[u.name]||c.push(u.name)}for(var s=0;s<c.length;s++)a.removeAttribute(c[s]);return t.splice(o,1)[0]}}return n?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):O(e)}function q(t,e){for(var r=0;r<t.length;r+=1){var n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return j(e)}function U(t){return q(t," ")}function G(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function F(t,e){t.value=null==e?"":e}function M(t,e,r){t.classList[r?"add":"remove"](e)}function B(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function H(t){o=t}function J(){if(!o)throw new Error("Function called outside component initialization");return o}function K(t){J().$$.on_mount.push(t)}var V=[],Y=[],z=[],W=[],X=Promise.resolve(),Q=!1;function Z(t){z.push(t)}var tt=!1,et=new Set;function rt(){if(!tt){tt=!0;do{for(var t=0;t<V.length;t+=1){var e=V[t];H(e),nt(e.$$)}for(V.length=0;Y.length;)Y.pop()();for(var r=0;r<z.length;r+=1){var n=z[r];et.has(n)||(et.add(n),n())}z.length=0}while(V.length);for(;W.length;)W.pop()();Q=!1,tt=!1,et.clear()}}function nt(t){if(null!==t.fragment){t.update(),w(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}var ot,at=new Set;function it(){ot={r:0,c:[],p:ot}}function ct(){ot.r||w(ot.c),ot=ot.p}function ut(t,e){t&&t.i&&(at.delete(t),t.i(e))}function st(t,e,r,n){if(t&&t.o){if(at.has(t))return;at.add(t),ot.c.push((function(){at.delete(t),n&&(r&&t.d(1),n())})),t.o(e)}}var ft="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function lt(t,e){for(var r={},n={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(n[u]=1);for(var s in c)o[s]||(r[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in n)l in r||(r[l]=void 0);return r}function pt(e){return"object"===t(e)&&null!==e?e:{}}function ht(t){t&&t.c()}function vt(t,e){t&&t.l(e)}function dt(t,e,r){var n=t.$$,o=n.fragment,a=n.on_mount,i=n.on_destroy,c=n.after_update;o&&o.m(e,r),Z((function(){var e=a.map(g).filter($);i?i.push.apply(i,h(e)):w(e),t.$$.on_mount=[]})),c.forEach(Z)}function mt(t,e){var r=t.$$;null!==r.fragment&&(w(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function yt(t,e){-1===t.$$.dirty[0]&&(V.push(t),Q||(Q=!0,X.then(rt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function gt(t,e,r,n,a,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=o;H(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:a,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c,skip_bound:!1},l=!1;if(f.ctx=r?r(t,s,(function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return f.ctx&&a(f.ctx[e],f.ctx[e]=n)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](n),l&&yt(t,e)),r})):[],f.update(),l=!0,w(f.before_update),f.fragment=!!n&&n(f.ctx),e.target){if(e.hydrate){var p=I(e.target);f.fragment&&f.fragment.l(p),p.forEach(R)}else f.fragment&&f.fragment.c();e.intro&&ut(t.$$.fragment),dt(t,e.target,e.anchor),rt()}H(u)}var bt=function(){function t(){v(this,t)}var e,r,n;return e=t,(r=[{key:"$destroy",value:function(){mt(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&d(e.prototype,r),n&&d(e,n),t}(),wt=[];function $t(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,n=[];function o(r){if(x(t,r)&&(t=r,e)){for(var o=!wt.length,a=0;a<n.length;a+=1){var i=n[a];i[1](),wt.push(i,t)}if(o){for(var c=0;c<wt.length;c+=2)wt[c][0](wt[c+1]);wt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return n.push(c),1===n.length&&(e=r(o)||m),a(t),function(){var t=n.indexOf(c);-1!==t&&n.splice(t,1),0===n.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var xt={};function Et(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function _t(t){var e,r,o,a,i,c,u,s,f,l,p,h,v,d,y,g,b,w,$;return{c:function(){e=O("nav"),r=O("figure"),o=O("img"),a=P(),i=O("ul"),c=O("li"),u=O("a"),s=j("viewer"),l=P(),p=O("li"),h=O("a"),v=j("editor"),y=P(),g=O("li"),b=O("a"),w=j("creator"),this.h()},l:function(t){var n=I(e=C(t,"NAV",{class:!0})),f=I(r=C(n,"FIGURE",{}));o=C(f,"IMG",{alt:!0,src:!0,class:!0}),f.forEach(R),a=U(n);var d=I(i=C(n,"UL",{class:!0})),m=I(c=C(d,"LI",{class:!0})),$=I(u=C(m,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));s=q($,"viewer"),$.forEach(R),m.forEach(R),l=U(d);var x=I(p=C(d,"LI",{class:!0})),E=I(h=C(x,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));v=q(E,"editor"),E.forEach(R),x.forEach(R),y=U(d);var _=I(g=C(d,"LI",{class:!0})),S=I(b=C(_,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));w=q(S,"creator"),S.forEach(R),_.forEach(R),d.forEach(R),n.forEach(R),this.h()},h:function(){D(o,"alt","Braap! logo"),o.src!=="braap.png"&&D(o,"src","braap.png"),D(o,"class","svelte-1gn8wng"),D(u,"rel","prefetch"),D(u,"aria-current",f=void 0===t[0]||"viewer"===t[0]?"page":void 0),D(u,"href","."),D(u,"class","svelte-1gn8wng"),D(c,"class","svelte-1gn8wng"),D(h,"rel","prefetch"),D(h,"aria-current",d="editor"===t[0]?"page":void 0),D(h,"href","editor"),D(h,"class","svelte-1gn8wng"),D(p,"class","svelte-1gn8wng"),D(b,"rel","prefetch"),D(b,"aria-current",$="creator"===t[0]?"page":void 0),D(b,"href","creator"),D(b,"class","svelte-1gn8wng"),D(g,"class","svelte-1gn8wng"),D(i,"class","svelte-1gn8wng"),D(e,"class","svelte-1gn8wng")},m:function(t,n){L(t,e,n),S(e,r),S(r,o),S(e,a),S(e,i),S(i,c),S(c,u),S(u,s),S(i,l),S(i,p),S(p,h),S(h,v),S(i,y),S(i,g),S(g,b),S(b,w)},p:function(t,e){var r=n(e,1)[0];1&r&&f!==(f=void 0===t[0]||"viewer"===t[0]?"page":void 0)&&D(u,"aria-current",f),1&r&&d!==(d="editor"===t[0]?"page":void 0)&&D(h,"aria-current",d),1&r&&$!==($="creator"===t[0]?"page":void 0)&&D(b,"aria-current",$)},i:m,o:m,d:function(t){t&&R(e)}}}function St(t,e,r){var n=e.segment;return t.$$set=function(t){"segment"in t&&r(0,n=t.segment)},[n]}var Lt=function(t){f(r,bt);var e=Et(r);function r(t){var n;return v(this,r),gt(l(n=e.call(this)),t,St,_t,x,{segment:0}),n}return r}();function Rt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function kt(t){var e,r,o,a,i,c,u,s,f,l,p,h,v,d,m,y,g;e=new Lt({props:{segment:t[0]}});var b=t[2].default,w=function(t,e,r,n){if(t){var o=E(t,e,r,n);return t[0](o)}}(b,t,t[1],null);return{c:function(){ht(e.$$.fragment),r=P(),o=O("main"),w&&w.c(),a=P(),i=O("footer"),c=O("i"),u=O("strong"),s=j("Disclaimer"),f=P(),l=O("br"),p=P(),h=O("i"),v=j("The motorcycle service information is provided by users of the\n    "),d=O("a"),m=j("Motorcycle Service Database"),y=j("\n    . We cannot be held responsible for any error it may contain. Always refer to the user manual\n    for accurate information."),this.h()},l:function(t){vt(e.$$.fragment,t),r=U(t);var n=I(o=C(t,"MAIN",{class:!0}));w&&w.l(n),n.forEach(R),a=U(t);var g=I(i=C(t,"FOOTER",{class:!0})),b=I(c=C(g,"I",{})),$=I(u=C(b,"STRONG",{}));s=q($,"Disclaimer"),$.forEach(R),b.forEach(R),f=U(g),l=C(g,"BR",{}),p=U(g);var x=I(h=C(g,"I",{}));v=q(x,"The motorcycle service information is provided by users of the\n    ");var E=I(d=C(x,"A",{href:!0}));m=q(E,"Motorcycle Service Database"),E.forEach(R),y=q(x,"\n    . We cannot be held responsible for any error it may contain. Always refer to the user manual\n    for accurate information."),x.forEach(R),g.forEach(R),this.h()},h:function(){D(o,"class","svelte-6wqtf"),D(d,"href","https://github.com/ramblenride/motorcycle-service-db"),D(i,"class","svelte-6wqtf")},m:function(t,n){dt(e,t,n),L(t,r,n),L(t,o,n),w&&w.m(o,null),L(t,a,n),L(t,i,n),S(i,c),S(c,u),S(u,s),S(i,f),S(i,l),S(i,p),S(i,h),S(h,v),S(h,d),S(d,m),S(h,y),g=!0},p:function(t,r){var o=n(r,1)[0],a={};1&o&&(a.segment=t[0]),e.$set(a),w&&w.p&&2&o&&_(w,b,t,t[1],o,null,null)},i:function(t){g||(ut(e.$$.fragment,t),ut(w,t),g=!0)},o:function(t){st(e.$$.fragment,t),st(w,t),g=!1},d:function(t){mt(e,t),t&&R(r),t&&R(o),w&&w.d(t),t&&R(a),t&&R(i)}}}function Ot(t,e,r){var n=e.segment,o=e.$$slots,a=void 0===o?{}:o,i=e.$$scope;return t.$$set=function(t){"segment"in t&&r(0,n=t.segment),"$$scope"in t&&r(1,i=t.$$scope)},[n,i,a]}var jt=function(t){f(r,bt);var e=Rt(r);function r(t){var n;return v(this,r),gt(l(n=e.call(this)),t,Ot,kt,x,{segment:0}),n}return r}();function Pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function At(t){var e,r,n=t[1].stack+"";return{c:function(){e=O("pre"),r=j(n)},l:function(t){var o=I(e=C(t,"PRE",{}));r=q(o,n),o.forEach(R)},m:function(t,n){L(t,e,n),S(e,r)},p:function(t,e){2&e&&n!==(n=t[1].stack+"")&&G(r,n)},d:function(t){t&&R(e)}}}function Nt(t){var e,r,o,a,i,c,u,s,f,l,p,h,v=t[1].message+"";document.title=e=t[0];var d=t[2]&&t[1].stack&&At(t);return{c:function(){r=P(),o=O("h1"),a=j(t[0]),i=P(),c=O("p"),u=j(v),s=P(),f=O("p"),l=j("This is unfortunate."),p=P(),d&&d.c(),h=A(),this.h()},l:function(e){B('[data-svelte="svelte-1moakz"]',document.head).forEach(R),r=U(e);var n=I(o=C(e,"H1",{class:!0}));a=q(n,t[0]),n.forEach(R),i=U(e);var m=I(c=C(e,"P",{class:!0}));u=q(m,v),m.forEach(R),s=U(e);var y=I(f=C(e,"P",{class:!0}));l=q(y,"This is unfortunate."),y.forEach(R),p=U(e),d&&d.l(e),h=A(),this.h()},h:function(){D(o,"class","svelte-17w3omn"),D(c,"class","svelte-17w3omn"),D(f,"class","svelte-17w3omn")},m:function(t,e){L(t,r,e),L(t,o,e),S(o,a),L(t,i,e),L(t,c,e),S(c,u),L(t,s,e),L(t,f,e),S(f,l),L(t,p,e),d&&d.m(t,e),L(t,h,e)},p:function(t,r){var o=n(r,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&G(a,t[0]),2&o&&v!==(v=t[1].message+"")&&G(u,v),t[2]&&t[1].stack?d?d.p(t,o):((d=At(t)).c(),d.m(h.parentNode,h)):d&&(d.d(1),d=null)},i:m,o:m,d:function(t){t&&R(r),t&&R(o),t&&R(i),t&&R(c),t&&R(s),t&&R(f),t&&R(p),d&&d.d(t),t&&R(h)}}}function Tt(t,e,r){var n=e.status,o=e.error;return t.$$set=function(t){"status"in t&&r(0,n=t.status),"error"in t&&r(1,o=t.error)},[n,o,!1]}var Dt=function(t){f(r,bt);var e=Pt(r);function r(t){var n;return v(this,r),gt(l(n=e.call(this)),t,Tt,Nt,x,{status:0,error:1}),n}return r}();function It(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=u(t);if(e){var o=u(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return p(this,r)}}function Ct(t){var e,r,n,o=[t[4].props],a=t[4].component;function i(t){for(var e={},r=0;r<o.length;r+=1)e=y(e,o[r]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&ht(e.$$.fragment),r=A()},l:function(t){e&&vt(e.$$.fragment,t),r=A()},m:function(t,o){e&&dt(e,t,o),L(t,r,o),n=!0},p:function(t,n){var c=16&n?lt(o,[pt(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){it();var u=e;st(u.$$.fragment,1,0,(function(){mt(u,1)})),ct()}a?(ht((e=new a(i())).$$.fragment),ut(e.$$.fragment,1),dt(e,r.parentNode,r)):e=null}else a&&e.$set(c)},i:function(t){n||(e&&ut(e.$$.fragment,t),n=!0)},o:function(t){e&&st(e.$$.fragment,t),n=!1},d:function(t){t&&R(r),e&&mt(e,t)}}}function qt(t){var e,r;return e=new Dt({props:{error:t[0],status:t[1]}}),{c:function(){ht(e.$$.fragment)},l:function(t){vt(e.$$.fragment,t)},m:function(t,n){dt(e,t,n),r=!0},p:function(t,r){var n={};1&r&&(n.error=t[0]),2&r&&(n.status=t[1]),e.$set(n)},i:function(t){r||(ut(e.$$.fragment,t),r=!0)},o:function(t){st(e.$$.fragment,t),r=!1},d:function(t){mt(e,t)}}}function Ut(t){var e,r,n,o,a=[qt,Ct],i=[];function c(t,e){return t[0]?0:1}return e=c(t),r=i[e]=a[e](t),{c:function(){r.c(),n=A()},l:function(t){r.l(t),n=A()},m:function(t,r){i[e].m(t,r),L(t,n,r),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(it(),st(i[u],1,1,(function(){i[u]=null})),ct(),(r=i[e])||(r=i[e]=a[e](t)).c(),ut(r,1),r.m(n.parentNode,n))},i:function(t){o||(ut(r),o=!0)},o:function(t){st(r),o=!1},d:function(t){i[e].d(t),t&&R(n)}}}function Gt(t){for(var e,r,o=[{segment:t[2][0]},t[3].props],a={$$slots:{default:[Ut]},$$scope:{ctx:t}},i=0;i<o.length;i+=1)a=y(a,o[i]);return e=new jt({props:a}),{c:function(){ht(e.$$.fragment)},l:function(t){vt(e.$$.fragment,t)},m:function(t,n){dt(e,t,n),r=!0},p:function(t,r){var a=n(r,1)[0],i=12&a?lt(o,[4&a&&{segment:t[2][0]},8&a&&pt(t[3].props)]):{};147&a&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i:function(t){r||(ut(e.$$.fragment,t),r=!0)},o:function(t){st(e.$$.fragment,t),r=!1},d:function(t){mt(e,t)}}}function Ft(t,e,r){var n,o,a,i=e.stores,c=e.error,u=e.status,s=e.segments,f=e.level0,l=e.level1,p=void 0===l?null:l,h=e.notify;return n=h,J().$$.after_update.push(n),o=xt,a=i,J().$$.context.set(o,a),t.$$set=function(t){"stores"in t&&r(5,i=t.stores),"error"in t&&r(0,c=t.error),"status"in t&&r(1,u=t.status),"segments"in t&&r(2,s=t.segments),"level0"in t&&r(3,f=t.level0),"level1"in t&&r(4,p=t.level1),"notify"in t&&r(6,h=t.notify)},[c,u,s,f,p,i,h]}var Mt=function(t){f(r,bt);var e=It(r);function r(t){var n;return v(this,r),gt(l(n=e.call(this)),t,Ft,Gt,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),n}return r}(),Bt=[],Ht=[{js:function(){return import("./index.e3225719.js")},css:["legacy/client.3439db06.css"]},{js:function(){return import("./index.3f2a430a.js")},css:["legacy/index.3f2a430a.css","legacy/client.3439db06.css"]},{js:function(){return import("./index.57a64990.js")},css:["legacy/client.3439db06.css"]},{js:function(){return import("./index.471054e5.js")},css:["legacy/index.471054e5.css","legacy/client.3439db06.css"]}],Jt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/creator\/?$/,parts:[{i:1}]},{pattern:/^\/editor\/?$/,parts:[{i:2}]},{pattern:/^\/viewer\/?$/,parts:[{i:3}]}];function Kt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},r=pe(new URL(t,document.baseURI));return r?(se[e.replaceState?"replaceState":"pushState"]({id:ae},"",t),ve(r,null,e.noscroll).then((function(){}))):(location.href=t,new Promise((function(t){})))}var Vt,Yt,zt,Wt,Xt,Qt="undefined"!=typeof __SAPPER__&&__SAPPER__,Zt=!1,te=[],ee="{}",re={page:function(t){var e=$t(t),r=!0;return{notify:function(){r=!0,e.update((function(t){return t}))},set:function(t){r=!1,e.set(t)},subscribe:function(t){var n;return e.subscribe((function(e){(void 0===n||r&&e!==n)&&t(n=e)}))}}}({}),preloading:$t(null),session:$t(Qt&&Qt.session)};re.session.subscribe(function(){var t=c(a.mark((function t(e){var r,n,o,i,c,u;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Wt=e,Zt){t.next=3;break}return t.abrupt("return");case 3:return Xt=!0,r=pe(new URL(location.href)),n=Yt={},t.next=8,be(r);case 8:if(o=t.sent,i=o.redirect,c=o.props,u=o.branch,n===Yt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,me(i,u,c,r.page);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var ne,oe=null;var ae,ie=1;var ce,ue,se="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},fe={};function le(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var o=n(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof r[a]&&(r[a]=[r[a]]),"object"===t(r[a])?r[a].push(c):r[a]=c})),r}function pe(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Qt.baseUrl))return null;var e=t.pathname.slice(Qt.baseUrl.length);if(""===e&&(e="/"),!Bt.some((function(t){return t.test(e)})))for(var r=0;r<Jt.length;r+=1){var n=Jt[r],o=n.pattern.exec(e);if(o){var a=le(t.search),i=n.parts[n.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:n,match:o,page:u}}}}function he(){return{x:pageXOffset,y:pageYOffset}}function ve(t,e,r,n){return de.apply(this,arguments)}function de(){return(de=c(a.mark((function t(e,r,n,o){var i,c,u,s,f,l,p,h,v;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r?ae=r:(i=he(),fe[ae]=i,r=ae=++ie,fe[ae]=n?i:{x:0,y:0}),ae=r,Vt&&re.preloading.set(!0),c=oe&&oe.href===e.href?oe.promise:be(e),oe=null,u=Yt={},t.next=8,c;case 8:if(s=t.sent,f=s.redirect,l=s.props,p=s.branch,u===Yt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,me(f,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),n||(h=fe[r],o&&(v=document.getElementById(o.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top+scrollY}),fe[ae]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function me(t,e,r,n){return ye.apply(this,arguments)}function ye(){return(ye=c(a.mark((function t(e,r,n,o){return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Kt(e.location,{replaceState:!0}));case 2:if(re.page.set(o),re.preloading.set(!1),!Vt){t.next=8;break}Vt.$set(n),t.next=15;break;case 8:return n.stores={page:{subscribe:re.page.subscribe},preloading:{subscribe:re.preloading.subscribe},session:re.session},t.next=11,zt;case 11:t.t0=t.sent,n.level0={props:t.t0},n.notify=re.page.notify,Vt=new Mt({target:ne,props:n,hydrate:!0});case 15:te=r,ee=JSON.stringify(o.query),Zt=!0,Xt=!1;case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ge(t,e,r,n){if(n!==ee)return!0;var o=te[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function be(t){return we.apply(this,arguments)}function we(){return(we=c(a.mark((function t(e){var r,n,o,i,u,s,f,l,p,h,v,d;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.page,o=n.path.split("/").filter(Boolean),i=null,u={error:null,status:200,segments:[o[0]]},s={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){u.error="string"==typeof e?new Error(e):e,u.status=t}},zt||(f=function(){},zt=Qt.preloaded[0]||f.call(s,{host:n.host,path:n.path,query:n.query,params:{}},Wt)),p=1,t.prev=7,h=JSON.stringify(n.query),v=r.pattern.exec(n.path),d=!1,t.next=13,Promise.all(r.parts.map(function(){var t=c(a.mark((function t(r,i){var c,f,l,m,y,g;return a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=o[i],ge(i,c,v,h)&&(d=!0),u.segments[p]=o[i+1],r){t.next=5;break}return t.abrupt("return",{segment:c});case 5:if(f=p++,Xt||d||!te[i]||te[i].part!==r.i){t.next=8;break}return t.abrupt("return",te[i]);case 8:return d=!1,t.next=11,xe(Ht[r.i]);case 11:if(l=t.sent,m=l.default,y=l.preload,!Zt&&Qt.preloaded[i+1]){t.next=25;break}if(!y){t.next=21;break}return t.next=18,y.call(s,{host:n.host,path:n.path,query:n.query,params:r.params?r.params(e.match):{}},Wt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:g=t.t0,t.next=26;break;case 25:g=Qt.preloaded[i+1];case 26:return t.abrupt("return",u["level".concat(f)]={component:m,props:g,segment:c,match:v,part:r.i});case 27:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}()));case 13:l=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),u.error=t.t0,u.status=500,l=[];case 21:return t.abrupt("return",{redirect:i,props:u,branch:l});case 22:case"end":return t.stop()}}),t,null,[[7,16]])})))).apply(this,arguments)}function $e(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise((function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)}))}function xe(t){var e="string"==typeof t.css?[]:t.css.map($e);return e.unshift(t.js()),Promise.all(e).then((function(t){return t[0]}))}function Ee(t){var e=pe(new URL(t,document.baseURI));if(e)return oe&&t===oe.href||function(t,e){oe={href:t,promise:e}}(t,be(e)),oe.promise}function _e(t){clearTimeout(ce),ce=setTimeout((function(){Se(t)}),20)}function Se(t){var e=Re(t.target);e&&"prefetch"===e.rel&&Ee(e.href)}function Le(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var r=Re(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&!(n?r.target.baseVal:r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=pe(a);if(i)ve(i,null,r.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),se.pushState({id:ae},"",a.href)}}}else location.hash||e.preventDefault()}}}function Re(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ke(t){if(fe[ae]=he(),t.state){var e=pe(new URL(location.href));e?ve(e,t.state.id):location.href=location.href}else(function(t){ae=t})(ie=ie+1),se.replaceState({id:ae},"",location.href)}ue={target:document.querySelector("#sapper")},"scrollRestoration"in se&&(se.scrollRestoration="manual"),addEventListener("beforeunload",(function(){se.scrollRestoration="auto"})),addEventListener("load",(function(){se.scrollRestoration="manual"})),function(t){ne=t}(ue.target),addEventListener("click",Le),addEventListener("popstate",ke),addEventListener("touchstart",Se),addEventListener("mousemove",_e),Promise.resolve().then((function(){var t=location,e=t.hash,r=t.href;se.replaceState({id:ie},"",r);var n,o,a,i,c,u,s,f,l=new URL(location.href);if(Qt.error)return n=location,o=n.host,a=n.pathname,i=n.search,c=Qt.session,u=Qt.preloaded,s=Qt.status,f=Qt.error,zt||(zt=u&&u[0]),void me(null,[],{error:f,status:s,session:c,level0:{props:zt},level1:{props:{status:s,error:f},component:Dt},segments:u},{host:o,path:a,query:le(i),params:{}});var p=pe(l);return p?ve(p,ie,!0,e):void 0}));export{N as A,T as B,w as C,$ as D,ht as E,vt as F,dt as G,ut as H,st as I,mt as J,ft as K,M as L,A as M,it as N,ct as O,bt as S,f as _,u as a,p as b,v as c,l as d,O as e,P as f,C as g,I as h,gt as i,q as j,R as k,U as l,D as m,L as n,S as o,G as p,B as q,n as r,x as s,j as t,m as u,k as v,K as w,c as x,a as y,F as z};
