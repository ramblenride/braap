import{S as l,i as t,s as e,e as n,t as s,c as r,b as a,d as c,f as o,h as m,j as i,k as u,l as h,a as d,g as f,m as v,p,r as k,n as g,u as b,v as E,w as $,x as w,y as x,z as K,A as M,q as I,B as S,C as y}from"./client.0ec03099.js";function N(l,t,e){const n=l.slice();return n[3]=t[e],n}function j(l){let t,e,d,f=l[0].level+"";return{c(){t=n("span"),e=s(f),this.h()},l(l){t=r(l,"SPAN",{class:!0});var n=a(t);e=c(n,f),n.forEach(o),this.h()},h(){m(t,"class",d="level "+l[0].level+" svelte-1lw9b1m")},m(l,n){i(l,t,n),u(t,e)},p(l,n){1&n&&f!==(f=l[0].level+"")&&h(e,f),1&n&&d!==(d="level "+l[0].level+" svelte-1lw9b1m")&&m(t,"class",d)},d(l){l&&o(t)}}}function q(l){let t,e,m,h,v=l[0].intervalKm&&A(l),p=l[0].intervalKm&&l[0].intervalMonths&&B(),k=l[0].intervalMonths&&D(l);return{c(){t=n("p"),e=s("Service Interval:\n        "),v&&v.c(),m=d(),p&&p.c(),h=d(),k&&k.c()},l(l){t=r(l,"P",{});var n=a(t);e=c(n,"Service Interval:\n        "),v&&v.l(n),m=f(n),p&&p.l(n),h=f(n),k&&k.l(n),n.forEach(o)},m(l,n){i(l,t,n),u(t,e),v&&v.m(t,null),u(t,m),p&&p.m(t,null),u(t,h),k&&k.m(t,null)},p(l,e){l[0].intervalKm?v?v.p(l,e):(v=A(l),v.c(),v.m(t,m)):v&&(v.d(1),v=null),l[0].intervalKm&&l[0].intervalMonths?p||(p=B(),p.c(),p.m(t,h)):p&&(p.d(1),p=null),l[0].intervalMonths?k?k.p(l,e):(k=D(l),k.c(),k.m(t,null)):k&&(k.d(1),k=null)},d(l){l&&o(t),v&&v.d(),p&&p.d(),k&&k.d()}}}function A(l){let t,e,n=l[0].intervalKm+"";return{c(){t=s(n),e=s(" km")},l(l){t=c(l,n),e=c(l," km")},m(l,n){i(l,t,n),i(l,e,n)},p(l,e){1&e&&n!==(n=l[0].intervalKm+"")&&h(t,n)},d(l){l&&o(t),l&&o(e)}}}function B(l){let t;return{c(){t=s("/")},l(l){t=c(l,"/")},m(l,e){i(l,t,e)},d(l){l&&o(t)}}}function D(l){let t,e,n=l[0].intervalMonths+"";return{c(){t=s(n),e=s(" months")},l(l){t=c(l,n),e=c(l," months")},m(l,n){i(l,t,n),i(l,e,n)},p(l,e){1&e&&n!==(n=l[0].intervalMonths+"")&&h(t,n)},d(l){l&&o(t),l&&o(e)}}}function H(l){let t,e,m,h,v=l[0].km&&P(l),p=l[0].km&&l[0].months&&V(),k=l[0].months&&C(l);return{c(){t=n("p"),e=s("Fixed Service:\n        "),v&&v.c(),m=d(),p&&p.c(),h=d(),k&&k.c()},l(l){t=r(l,"P",{});var n=a(t);e=c(n,"Fixed Service:\n        "),v&&v.l(n),m=f(n),p&&p.l(n),h=f(n),k&&k.l(n),n.forEach(o)},m(l,n){i(l,t,n),u(t,e),v&&v.m(t,null),u(t,m),p&&p.m(t,null),u(t,h),k&&k.m(t,null)},p(l,e){l[0].km?v?v.p(l,e):(v=P(l),v.c(),v.m(t,m)):v&&(v.d(1),v=null),l[0].km&&l[0].months?p||(p=V(),p.c(),p.m(t,h)):p&&(p.d(1),p=null),l[0].months?k?k.p(l,e):(k=C(l),k.c(),k.m(t,null)):k&&(k.d(1),k=null)},d(l){l&&o(t),v&&v.d(),p&&p.d(),k&&k.d()}}}function P(l){let t,e,n=l[0].km+"";return{c(){t=s(n),e=s(" km")},l(l){t=c(l,n),e=c(l," km")},m(l,n){i(l,t,n),i(l,e,n)},p(l,e){1&e&&n!==(n=l[0].km+"")&&h(t,n)},d(l){l&&o(t),l&&o(e)}}}function V(l){let t;return{c(){t=s("/")},l(l){t=c(l,"/")},m(l,e){i(l,t,e)},d(l){l&&o(t)}}}function C(l){let t,e,n=l[0].months+"";return{c(){t=s(n),e=s(" months")},l(l){t=c(l,n),e=c(l," months")},m(l,n){i(l,t,n),i(l,e,n)},p(l,e){1&e&&n!==(n=l[0].months+"")&&h(t,n)},d(l){l&&o(t),l&&o(e)}}}function F(l){let t,e=l[0].links,s=[];for(let t=0;t<e.length;t+=1)s[t]=L(N(l,e,t));return{c(){t=n("ul");for(let l=0;l<s.length;l+=1)s[l].c()},l(l){t=r(l,"UL",{});var e=a(t);for(let l=0;l<s.length;l+=1)s[l].l(e);e.forEach(o)},m(l,e){i(l,t,e);for(let l=0;l<s.length;l+=1)s[l].m(t,null)},p(l,n){if(1&n){let r;for(e=l[0].links,r=0;r<e.length;r+=1){const a=N(l,e,r);s[r]?s[r].p(a,n):(s[r]=L(a),s[r].c(),s[r].m(t,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=e.length}},d(l){l&&o(t),v(s,l)}}}function L(l){let t,e,v,p,k,g=l[3].name+"";return{c(){t=n("li"),e=n("a"),v=s(g),k=d(),this.h()},l(l){t=r(l,"LI",{});var n=a(t);e=r(n,"A",{href:!0});var s=a(e);v=c(s,g),s.forEach(o),k=f(n),n.forEach(o),this.h()},h(){m(e,"href",p=l[3].url)},m(l,n){i(l,t,n),u(t,e),u(e,v),u(t,k)},p(l,t){1&t&&g!==(g=l[3].name+"")&&h(v,g),1&t&&p!==(p=l[3].url)&&m(e,"href",p)},d(l){l&&o(t)}}}function O(l){let t,e,d,f=l[0].notes+"";return{c(){t=s("Notes:\n      \n      "),e=n("div"),d=s(f),this.h()},l(l){t=c(l,"Notes:\n      \n      "),e=r(l,"DIV",{class:!0});var n=a(e);d=c(n,f),n.forEach(o),this.h()},h(){m(e,"class","notes svelte-1lw9b1m")},m(l,n){i(l,t,n),i(l,e,n),u(e,d)},p(l,t){1&t&&f!==(f=l[0].notes+"")&&h(d,f)},d(l){l&&o(t),l&&o(e)}}}function T(l){let t,e,v,b,E,$,w,x,K,M,I,S,y,N,A=l[0].name+"",B=l[0].description+"",D=l[0].level&&j(l),P=(l[0].intervalKm||l[0].intervalMonths)&&q(l),V=(l[0].km||l[0].months)&&H(l),C=l[0].links&&F(l),L=l[0].notes&&O(l);return{c(){t=n("div"),e=n("button"),v=s(A),b=s(" - "),E=s(B),$=d(),D&&D.c(),w=d(),x=n("div"),P&&P.c(),K=d(),V&&V.c(),M=d(),C&&C.c(),I=d(),L&&L.c(),this.h()},l(l){t=r(l,"DIV",{class:!0});var n=a(t);e=r(n,"BUTTON",{class:!0});var s=a(e);v=c(s,A),b=c(s," - "),E=c(s,B),$=f(s),D&&D.l(s),s.forEach(o),w=f(n),x=r(n,"DIV",{class:!0});var m=a(x);P&&P.l(m),K=f(m),V&&V.l(m),M=f(m),C&&C.l(m),I=f(m),L&&L.l(m),m.forEach(o),n.forEach(o),this.h()},h(){m(e,"class","accordion svelte-1lw9b1m"),p(e,"active",l[1]),m(x,"class",S="panel "+(l[1]?"":"hidden")+" svelte-1lw9b1m"),m(t,"class","box")},m(n,s){i(n,t,s),u(t,e),u(e,v),u(e,b),u(e,E),u(e,$),D&&D.m(e,null),u(t,w),u(t,x),P&&P.m(x,null),u(x,K),V&&V.m(x,null),u(x,M),C&&C.m(x,null),u(x,I),L&&L.m(x,null),y||(N=k(e,"click",l[2]),y=!0)},p(l,[t]){1&t&&A!==(A=l[0].name+"")&&h(v,A),1&t&&B!==(B=l[0].description+"")&&h(E,B),l[0].level?D?D.p(l,t):(D=j(l),D.c(),D.m(e,null)):D&&(D.d(1),D=null),2&t&&p(e,"active",l[1]),l[0].intervalKm||l[0].intervalMonths?P?P.p(l,t):(P=q(l),P.c(),P.m(x,K)):P&&(P.d(1),P=null),l[0].km||l[0].months?V?V.p(l,t):(V=H(l),V.c(),V.m(x,M)):V&&(V.d(1),V=null),l[0].links?C?C.p(l,t):(C=F(l),C.c(),C.m(x,I)):C&&(C.d(1),C=null),l[0].notes?L?L.p(l,t):(L=O(l),L.c(),L.m(x,null)):L&&(L.d(1),L=null),2&t&&S!==(S="panel "+(l[1]?"":"hidden")+" svelte-1lw9b1m")&&m(x,"class",S)},i:g,o:g,d(l){l&&o(t),D&&D.d(),P&&P.d(),V&&V.d(),C&&C.d(),L&&L.d(),y=!1,N()}}}function U(l,t,e){let{task:n}=t,s=!1;return l.$$set=l=>{"task"in l&&e(0,n=l.task)},[n,s,()=>{e(1,s=!s)}]}class z extends l{constructor(l){super(),t(this,l,U,T,e,{task:0})}}function R(l,t,e){const n=l.slice();return n[1]=t[e],n}function G(l){let t,e;return t=new z({props:{task:l[1]}}),{c(){b(t.$$.fragment)},l(l){E(t.$$.fragment,l)},m(l,n){$(t,l,n),e=!0},p(l,e){const n={};1&e&&(n.task=l[1]),t.$set(n)},i(l){e||(w(t.$$.fragment,l),e=!0)},o(l){x(t.$$.fragment,l),e=!1},d(l){K(t,l)}}}function J(l){let t,e,p,k,g,b,E,$,K,N,j,q,A=l[0].name+"",B=l[0].description+"";document.title=t=l[0].name;let D=l[0].tasks,H=[];for(let t=0;t<D.length;t+=1)H[t]=G(R(l,D,t));const P=l=>x(H[l],1,1,()=>{H[l]=null});return{c(){e=d(),p=n("h1"),k=s(A),g=d(),b=n("h3"),E=s(B),$=d(),K=n("hr"),N=d();for(let l=0;l<H.length;l+=1)H[l].c();j=M(),this.h()},l(l){I('[data-svelte="svelte-1ek6qg5"]',document.head).forEach(o),e=f(l),p=r(l,"H1",{class:!0});var t=a(p);k=c(t,A),t.forEach(o),g=f(l),b=r(l,"H3",{class:!0});var n=a(b);E=c(n,B),n.forEach(o),$=f(l),K=r(l,"HR",{class:!0}),N=f(l);for(let t=0;t<H.length;t+=1)H[t].l(l);j=M(),this.h()},h(){m(p,"class","svelte-6cur5u"),m(b,"class","svelte-6cur5u"),m(K,"class","solid svelte-6cur5u")},m(l,t){i(l,e,t),i(l,p,t),u(p,k),i(l,g,t),i(l,b,t),u(b,E),i(l,$,t),i(l,K,t),i(l,N,t);for(let e=0;e<H.length;e+=1)H[e].m(l,t);i(l,j,t),q=!0},p(l,[e]){if((!q||1&e)&&t!==(t=l[0].name)&&(document.title=t),(!q||1&e)&&A!==(A=l[0].name+"")&&h(k,A),(!q||1&e)&&B!==(B=l[0].description+"")&&h(E,B),1&e){let t;for(D=l[0].tasks,t=0;t<D.length;t+=1){const n=R(l,D,t);H[t]?(H[t].p(n,e),w(H[t],1)):(H[t]=G(n),H[t].c(),w(H[t],1),H[t].m(j.parentNode,j))}for(y(),t=D.length;t<H.length;t+=1)P(t);S()}},i(l){if(!q){for(let l=0;l<D.length;l+=1)w(H[l]);q=!0}},o(l){H=H.filter(Boolean);for(let l=0;l<H.length;l+=1)x(H[l]);q=!1},d(l){l&&o(e),l&&o(p),l&&o(g),l&&o(b),l&&o($),l&&o(K),l&&o(N),v(H,l),l&&o(j)}}}async function Q({params:l,query:t}){const e=t.moto,n=await this.fetch("https://ramblenride.github.io/motorcycle-service-db/"+e),s=await n.json();if(200===n.status){const l=Object.values(s.motorcycles)[0];return l.tasks.sort((l,t)=>l.name.localeCompare(t.name)),{moto:l}}this.error(n.status,s.message)}function W(l,t,e){let{moto:n}=t;return l.$$set=l=>{"moto"in l&&e(0,n=l.moto)},[n]}export default class extends l{constructor(l){super(),t(this,l,W,J,e,{moto:0})}}export{Q as preload};
