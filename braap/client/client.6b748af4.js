function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,a){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=c(e,n,r,a);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function g(){return d("")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return d(e)}function w(t){return E(t," ")}function _(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e,n){t.classList[n?"add":"remove"](e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let A;function R(t){A=t}function L(){if(!A)throw new Error("Function called outside component initialization");return A}const j=[],P=[],N=[],O=[],k=Promise.resolve();let C=!1;function U(t){N.push(t)}let q=!1;const I=new Set;function T(){if(!q){q=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];R(e),D(e.$$)}for(j.length=0;P.length;)P.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];I.has(e)||(I.add(e),e())}N.length=0}while(j.length);for(;O.length;)O.pop()();C=!1,q=!1,I.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const M=new Set;let B;function G(){B={r:0,c:[],p:B}}function H(){B.r||o(B.c),B=B.p}function J(t,e){t&&t.i&&(M.delete(t),t.i(e))}function V(t,e,n,r){if(t&&t.o){if(M.has(t))return;M.add(t),B.c.push(()=>{M.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function F(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function K(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function z(t,e){t&&t.l(e)}function Y(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),U(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(U)}function X(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(j.push(t),C||(C=!0,k.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,s,a,c,i,l=[-1]){const u=A;R(e);const p=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let d=!1;if(h.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=o)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](o),d&&Q(e,t)),n}):[],h.update(),d=!0,o(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=y(n.target);h.fragment&&h.fragment.l(t),t.forEach(f)}else h.fragment&&h.fragment.c();n.intro&&J(e.$$.fragment),Y(e,n.target,n.anchor),T()}R(u)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const et=[];function nt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const rt={};function ot(e){let n,r,o,s,a,c,i,p,g,$,_,x,S,A,R;return{c(){n=h("nav"),r=h("figure"),o=h("img"),a=m(),c=h("ul"),i=h("li"),p=h("a"),g=d("viewer"),_=m(),x=h("li"),S=h("a"),A=d("editor"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=y(n);r=b(e,"FIGURE",{});var s=y(r);o=b(s,"IMG",{alt:!0,src:!0,class:!0}),s.forEach(f),a=w(e),c=b(e,"UL",{class:!0});var l=y(c);i=b(l,"LI",{class:!0});var u=y(i);p=b(u,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var h=y(p);g=E(h,"viewer"),h.forEach(f),u.forEach(f),_=w(l),x=b(l,"LI",{class:!0});var d=y(x);S=b(d,"A",{rel:!0,"aria-current":!0,href:!0,class:!0});var m=y(S);A=E(m,"editor"),m.forEach(f),d.forEach(f),l.forEach(f),e.forEach(f),this.h()},h(){v(o,"alt","Braap! logo"),o.src!==(s="braap.png")&&v(o,"src","braap.png"),v(o,"class","svelte-uoipjf"),v(p,"rel","prefetch"),v(p,"aria-current",$=void 0===e[0]?"page":void 0),v(p,"href","."),v(p,"class","svelte-uoipjf"),v(i,"class","svelte-uoipjf"),v(S,"rel","prefetch"),v(S,"aria-current",R="editor"===e[0]?"page":void 0),v(S,"href","editor"),v(S,"class","svelte-uoipjf"),v(x,"class","svelte-uoipjf"),v(c,"class","svelte-uoipjf"),v(n,"class","svelte-uoipjf")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(n,a),l(n,c),l(c,i),l(i,p),l(p,g),l(c,_),l(c,x),l(x,S),l(S,A)},p(t,[e]){1&e&&$!==($=void 0===t[0]?"page":void 0)&&v(p,"aria-current",$),1&e&&R!==(R="editor"===t[0]?"page":void 0)&&v(S,"aria-current",R)},i:t,o:t,d(t){t&&f(n)}}}function st(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class at extends tt{constructor(t){super(),Z(this,t,st,ot,a,{segment:0})}}function ct(t){let e,n,r,o,s,a,p,g,$,_,x,S,A,R,L,j;e=new at({props:{segment:t[0]}});const P=t[2].default,N=function(t,e,n,r){if(t){const o=c(t,e,n,r);return t[0](o)}}(P,t,t[1],null);return{c(){W(e.$$.fragment),n=m(),r=h("main"),N&&N.c(),o=m(),s=h("footer"),a=h("i"),p=h("strong"),g=d("Disclaimer"),$=h("br"),_=m(),x=h("i"),S=d("Motorcycle service templates are provided by users of the "),A=h("a"),R=d("Motorcycle Service Database"),L=d(".\n\t\tWe cannot be held responsible for any error they may contain. Always refer to the user manual for accurate information."),this.h()},l(t){z(e.$$.fragment,t),n=w(t),r=b(t,"MAIN",{class:!0});var c=y(r);N&&N.l(c),c.forEach(f),o=w(t),s=b(t,"FOOTER",{class:!0});var i=y(s);a=b(i,"I",{});var l=y(a);p=b(l,"STRONG",{});var u=y(p);g=E(u,"Disclaimer"),u.forEach(f),l.forEach(f),$=b(i,"BR",{}),_=w(i),x=b(i,"I",{});var h=y(x);S=E(h,"Motorcycle service templates are provided by users of the "),A=b(h,"A",{href:!0});var d=y(A);R=E(d,"Motorcycle Service Database"),d.forEach(f),L=E(h,".\n\t\tWe cannot be held responsible for any error they may contain. Always refer to the user manual for accurate information."),h.forEach(f),i.forEach(f),this.h()},h(){v(r,"class","svelte-1exbbtf"),v(A,"href","https://github.com/ramblenride/motorcycle-service-db"),v(s,"class","svelte-1exbbtf")},m(t,c){Y(e,t,c),u(t,n,c),u(t,r,c),N&&N.m(r,null),u(t,o,c),u(t,s,c),l(s,a),l(a,p),l(p,g),l(s,$),l(s,_),l(s,x),l(x,S),l(x,A),l(A,R),l(x,L),j=!0},p(t,[n]){const r={};1&n&&(r.segment=t[0]),e.$set(r),N&&N.p&&2&n&&i(N,P,t,t[1],n,null,null)},i(t){j||(J(e.$$.fragment,t),J(N,t),j=!0)},o(t){V(e.$$.fragment,t),V(N,t),j=!1},d(t){X(e,t),t&&f(n),t&&f(r),N&&N.d(t),t&&f(o),t&&f(s)}}}function it(t,e,n){let{segment:r}=e,{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class lt extends tt{constructor(t){super(),Z(this,t,it,ct,a,{segment:0})}}function ut(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=d(r)},l(t){e=b(t,"PRE",{});var o=y(e);n=E(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&f(e)}}}function ft(e){let n,r,o,s,a,c,i,p,$,x,A,R,L=e[1].message+"";document.title=n=e[0];let j=e[2]&&e[1].stack&&ut(e);return{c(){r=m(),o=h("h1"),s=d(e[0]),a=m(),c=h("p"),i=d(L),p=m(),$=h("p"),x=d("This is unfortunate."),A=m(),j&&j.c(),R=g(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=w(t),o=b(t,"H1",{class:!0});var n=y(o);s=E(n,e[0]),n.forEach(f),a=w(t),c=b(t,"P",{class:!0});var l=y(c);i=E(l,L),l.forEach(f),p=w(t),$=b(t,"P",{class:!0});var u=y($);x=E(u,"This is unfortunate."),u.forEach(f),A=w(t),j&&j.l(t),R=g(),this.h()},h(){v(o,"class","svelte-8od9u6"),v(c,"class","svelte-8od9u6"),v($,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,a,e),u(t,c,e),l(c,i),u(t,p,e),u(t,$,e),l($,x),u(t,A,e),j&&j.m(t,e),u(t,R,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&_(s,t[0]),2&e&&L!==(L=t[1].message+"")&&_(i,L),t[2]&&t[1].stack?j?j.p(t,e):(j=ut(t),j.c(),j.m(R.parentNode,R)):j&&(j.d(1),j=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(a),t&&f(c),t&&f(p),t&&f($),t&&f(A),j&&j.d(t),t&&f(R)}}}function pt(t,e,n){let{status:r}=e,{error:o}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class ht extends tt{constructor(t){super(),Z(this,t,pt,ft,a,{status:0,error:1})}}function dt(t){let n,r,o;const s=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&W(n.$$.fragment),r=g()},l(t){n&&z(n.$$.fragment,t),r=g()},m(t,e){n&&Y(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?F(s,[K(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){G();const t=n;V(t.$$.fragment,1,0,()=>{X(t,1)}),H()}a?(n=new a(c()),W(n.$$.fragment),J(n.$$.fragment,1),Y(n,r.parentNode,r)):n=null}else a&&n.$set(o)},i(t){o||(n&&J(n.$$.fragment,t),o=!0)},o(t){n&&V(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&X(n,t)}}}function mt(t){let e,n;return e=new ht({props:{error:t[0],status:t[1]}}),{c(){W(e.$$.fragment)},l(t){z(e.$$.fragment,t)},m(t,r){Y(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(J(e.$$.fragment,t),n=!0)},o(t){V(e.$$.fragment,t),n=!1},d(t){X(e,t)}}}function gt(t){let e,n,r,o;const s=[mt,dt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(G(),V(a[i],1,1,()=>{a[i]=null}),H(),n=a[e],n||(n=a[e]=s[e](t),n.c()),J(n,1),n.m(r.parentNode,r))},i(t){o||(J(n),o=!0)},o(t){V(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function $t(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[gt]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new lt({props:s}),{c(){W(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,e){Y(n,t,e),r=!0},p(t,[e]){const r=12&e?F(o,[4&e&&{segment:t[2][0]},8&e&&K(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(J(n.$$.fragment,t),r=!0)},o(t){V(n.$$.fragment,t),r=!1},d(t){X(n,t)}}}function vt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,L().$$.after_update.push(u),f=rt,p=r,L().$$.context.set(f,p),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class yt extends tt{constructor(t){super(),Z(this,t,vt,$t,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const bt=[],Et=[{js:()=>import("./index.38486151.js"),css:["index.38486151.css","client.6b748af4.css"]},{js:()=>import("./index.6eb24f53.js"),css:["index.6eb24f53.css","client.6b748af4.css"]},{js:()=>import("./index.fac36fc2.js"),css:["index.fac36fc2.css","client.6b748af4.css"]}],wt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/editor\/?$/,parts:[{i:1}]},{pattern:/^\/viewer\/?$/,parts:[{i:2}]}];const _t="undefined"!=typeof __SAPPER__&&__SAPPER__;let xt,St,At,Rt=!1,Lt=[],jt="{}";const Pt={page:function(t){const e=nt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:nt(null),session:nt(_t&&_t.session)};let Nt,Ot;Pt.session.subscribe(async t=>{if(Nt=t,!Rt)return;Ot=!0;const e=Mt(new URL(location.href)),n=St={},{redirect:r,props:o,branch:s}=await Jt(e);n===St&&await Ht(r,s,o,e.page)});let kt,Ct=null;let Ut,qt=1;const It="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Tt={};function Dt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Mt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(_t.baseUrl))return null;let e=t.pathname.slice(_t.baseUrl.length);if(""===e&&(e="/"),!bt.some(t=>t.test(e)))for(let n=0;n<wt.length;n+=1){const r=wt[n],o=r.pattern.exec(e);if(o){const n=Dt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Bt(){return{x:pageXOffset,y:pageYOffset}}async function Gt(t,e,n,r){if(e)Ut=e;else{const t=Bt();Tt[Ut]=t,e=Ut=++qt,Tt[Ut]=n?t:{x:0,y:0}}Ut=e,xt&&Pt.preloading.set(!0);const o=Ct&&Ct.href===t.href?Ct.promise:Jt(t);Ct=null;const s=St={},{redirect:a,props:c,branch:i}=await o;if(s===St&&(await Ht(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Tt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Tt[Ut]=t,t&&scrollTo(t.x,t.y)}}async function Ht(t,e,n,r){if(t)return function(t,e={noscroll:!1,replaceState:!1}){const n=Mt(new URL(t,document.baseURI));return n?(It[e.replaceState?"replaceState":"pushState"]({id:Ut},"",t),Gt(n,null,e.noscroll).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});Pt.page.set(r),Pt.preloading.set(!1),xt?xt.$set(n):(n.stores={page:{subscribe:Pt.page.subscribe},preloading:{subscribe:Pt.preloading.subscribe},session:Pt.session},n.level0={props:await At},n.notify=Pt.page.notify,xt=new yt({target:kt,props:n,hydrate:!0})),Lt=e,jt=JSON.stringify(r.query),Rt=!0,Ot=!1}async function Jt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};if(!At){const t=()=>{};At=_t.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Nt)}let c,i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==jt)return!0;const o=Lt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ot&&!u&&Lt[c]&&Lt[c].part===e.i)return Lt[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Vt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Et[e.i]);let m;return m=Rt||!_t.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Nt):{}:_t.preloaded[c+1],s["level"+p]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Vt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Ft(t){const e=Mt(new URL(t,document.baseURI));if(e)return Ct&&t===Ct.href||function(t,e){Ct={href:t,promise:e}}(t,Jt(e)),Ct.promise}let Kt;function Wt(t){clearTimeout(Kt),Kt=setTimeout(()=>{zt(t)},20)}function zt(t){const e=Xt(t.target);e&&"prefetch"===e.rel&&Ft(e.href)}function Yt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=Xt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Mt(o);if(s){Gt(s,null,e.hasAttribute("sapper:noscroll"),o.hash),t.preventDefault(),It.pushState({id:Ut},"",o.href)}}function Xt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Qt(t){if(Tt[Ut]=Bt(),t.state){const e=Mt(new URL(location.href));e?Gt(e,t.state.id):location.href=location.href}else qt=qt+1,function(t){Ut=t}(qt),It.replaceState({id:Ut},"",location.href)}var Zt;Zt={target:document.querySelector("#sapper")},"scrollRestoration"in It&&(It.scrollRestoration="manual"),addEventListener("beforeunload",()=>{It.scrollRestoration="auto"}),addEventListener("load",()=>{It.scrollRestoration="manual"}),function(t){kt=t}(Zt.target),addEventListener("click",Yt),addEventListener("popstate",Qt),addEventListener("touchstart",zt),addEventListener("mousemove",Wt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;It.replaceState({id:qt},"",e);const n=new URL(location.href);if(_t.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=_t;At||(At=s&&s[0]),Ht(null,[],{error:c,status:a,session:o,level0:{props:At},level1:{props:{status:a,error:c},component:ht},segments:s},{host:e,path:n,query:Dt(r),params:{}})}();const r=Mt(n);return r?Gt(r,qt,!0,t):void 0});export{H as A,G as B,tt as S,m as a,y as b,b as c,E as d,h as e,f,w as g,v as h,Z as i,u as j,l as k,_ as l,p as m,t as n,x as o,$ as p,S as q,W as r,a as s,d as t,z as u,Y as v,J as w,V as x,X as y,g as z};
