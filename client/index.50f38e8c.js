import{S as t,i as n,s as e,e as l,t as s,c as o,b as c,d as r,f as a,h as m,j as i,k as h,l as u,a as f,g as d,m as v,y as p,A as g,n as k,p as $,r as E,u as b,v as y,w,x as K,N as M,J as N,K as x,q as S}from"./client.a18bb448.js";import{g as I,d as j,m as A}from"./download.bcb9ad50.js";function B(t,n,e){const l=t.slice();return l[3]=n[e],l}function D(t){let n,e,f,d=t[0].level+"";return{c(){n=l("span"),e=s(d),this.h()},l(t){n=o(t,"SPAN",{class:!0});var l=c(n);e=r(l,d),l.forEach(a),this.h()},h(){m(n,"class",f="level "+t[0].level+" svelte-ck2cfg")},m(t,l){i(t,n,l),h(n,e)},p(t,l){1&l&&d!==(d=t[0].level+"")&&u(e,d),1&l&&f!==(f="level "+t[0].level+" svelte-ck2cfg")&&m(n,"class",f)},d(t){t&&a(n)}}}function O(t){let n,e,m,u,v=t[0].intervalKm&&T(t),p=t[0].intervalKm&&t[0].intervalMonths&&H(),g=t[0].intervalMonths&&J(t);return{c(){n=l("p"),e=s("Service Interval:\n        "),v&&v.c(),m=f(),p&&p.c(),u=f(),g&&g.c()},l(t){n=o(t,"P",{});var l=c(n);e=r(l,"Service Interval:\n        "),v&&v.l(l),m=d(l),p&&p.l(l),u=d(l),g&&g.l(l),l.forEach(a)},m(t,l){i(t,n,l),h(n,e),v&&v.m(n,null),h(n,m),p&&p.m(n,null),h(n,u),g&&g.m(n,null)},p(t,e){t[0].intervalKm?v?v.p(t,e):(v=T(t),v.c(),v.m(n,m)):v&&(v.d(1),v=null),t[0].intervalKm&&t[0].intervalMonths?p||(p=H(),p.c(),p.m(n,u)):p&&(p.d(1),p=null),t[0].intervalMonths?g?g.p(t,e):(g=J(t),g.c(),g.m(n,null)):g&&(g.d(1),g=null)},d(t){t&&a(n),v&&v.d(),p&&p.d(),g&&g.d()}}}function T(t){let n,e,l=t[0].intervalKm+"";return{c(){n=s(l),e=s(" km")},l(t){n=r(t,l),e=r(t," km")},m(t,l){i(t,n,l),i(t,e,l)},p(t,e){1&e&&l!==(l=t[0].intervalKm+"")&&u(n,l)},d(t){t&&a(n),t&&a(e)}}}function H(t){let n;return{c(){n=s("/")},l(t){n=r(t,"/")},m(t,e){i(t,n,e)},d(t){t&&a(n)}}}function J(t){let n,e,l=t[0].intervalMonths+"";return{c(){n=s(l),e=s(" months")},l(t){n=r(t,l),e=r(t," months")},m(t,l){i(t,n,l),i(t,e,l)},p(t,e){1&e&&l!==(l=t[0].intervalMonths+"")&&u(n,l)},d(t){t&&a(n),t&&a(e)}}}function P(t){let n,e,m,u,v=t[0].km&&U(t),p=t[0].km&&t[0].months&&V(),g=t[0].months&&q(t);return{c(){n=l("p"),e=s("Fixed Service:\n        "),v&&v.c(),m=f(),p&&p.c(),u=f(),g&&g.c()},l(t){n=o(t,"P",{});var l=c(n);e=r(l,"Fixed Service:\n        "),v&&v.l(l),m=d(l),p&&p.l(l),u=d(l),g&&g.l(l),l.forEach(a)},m(t,l){i(t,n,l),h(n,e),v&&v.m(n,null),h(n,m),p&&p.m(n,null),h(n,u),g&&g.m(n,null)},p(t,e){t[0].km?v?v.p(t,e):(v=U(t),v.c(),v.m(n,m)):v&&(v.d(1),v=null),t[0].km&&t[0].months?p||(p=V(),p.c(),p.m(n,u)):p&&(p.d(1),p=null),t[0].months?g?g.p(t,e):(g=q(t),g.c(),g.m(n,null)):g&&(g.d(1),g=null)},d(t){t&&a(n),v&&v.d(),p&&p.d(),g&&g.d()}}}function U(t){let n,e,l=t[0].km+"";return{c(){n=s(l),e=s(" km")},l(t){n=r(t,l),e=r(t," km")},m(t,l){i(t,n,l),i(t,e,l)},p(t,e){1&e&&l!==(l=t[0].km+"")&&u(n,l)},d(t){t&&a(n),t&&a(e)}}}function V(t){let n;return{c(){n=s("/")},l(t){n=r(t,"/")},m(t,e){i(t,n,e)},d(t){t&&a(n)}}}function q(t){let n,e,l=t[0].months+"";return{c(){n=s(l),e=s(" months")},l(t){n=r(t,l),e=r(t," months")},m(t,l){i(t,n,l),i(t,e,l)},p(t,e){1&e&&l!==(l=t[0].months+"")&&u(n,l)},d(t){t&&a(n),t&&a(e)}}}function F(t){let n,e=t[0].links,s=[];for(let n=0;n<e.length;n+=1)s[n]=L(B(t,e,n));return{c(){n=l("ul");for(let t=0;t<s.length;t+=1)s[t].c()},l(t){n=o(t,"UL",{});var e=c(n);for(let t=0;t<s.length;t+=1)s[t].l(e);e.forEach(a)},m(t,e){i(t,n,e);for(let t=0;t<s.length;t+=1)s[t].m(n,null)},p(t,l){if(1&l){let o;for(e=t[0].links,o=0;o<e.length;o+=1){const c=B(t,e,o);s[o]?s[o].p(c,l):(s[o]=L(c),s[o].c(),s[o].m(n,null))}for(;o<s.length;o+=1)s[o].d(1);s.length=e.length}},d(t){t&&a(n),v(s,t)}}}function L(t){let n,e,v,p,g,k=t[3].name+"";return{c(){n=l("li"),e=l("a"),v=s(k),g=f(),this.h()},l(t){n=o(t,"LI",{});var l=c(n);e=o(l,"A",{href:!0});var s=c(e);v=r(s,k),s.forEach(a),g=d(l),l.forEach(a),this.h()},h(){m(e,"href",p=t[3].url)},m(t,l){i(t,n,l),h(n,e),h(e,v),h(n,g)},p(t,n){1&n&&k!==(k=t[3].name+"")&&u(v,k),1&n&&p!==(p=t[3].url)&&m(e,"href",p)},d(t){t&&a(n)}}}function C(t){let n,e,f,d=t[0].notes+"";return{c(){n=s("Notes:\n      "),e=l("div"),f=s(d),this.h()},l(t){n=r(t,"Notes:\n      "),e=o(t,"DIV",{class:!0});var l=c(e);f=r(l,d),l.forEach(a),this.h()},h(){m(e,"class","notes svelte-ck2cfg")},m(t,l){i(t,n,l),i(t,e,l),h(e,f)},p(t,n){1&n&&d!==(d=t[0].notes+"")&&u(f,d)},d(t){t&&a(n),t&&a(e)}}}function R(t){let n,e,v,$,E,b,y,w,K,M,N,x,S,I,j=t[0].name+"",A=t[0].description+"",B=t[0].level&&D(t),T=(t[0].intervalKm||t[0].intervalMonths)&&O(t),H=(t[0].km||t[0].months)&&P(t),J=t[0].links&&F(t),U=t[0].notes&&C(t);return{c(){n=l("div"),e=l("button"),v=s(j),$=s(" - "),E=s(A),b=f(),B&&B.c(),y=f(),w=l("div"),T&&T.c(),K=f(),H&&H.c(),M=f(),J&&J.c(),N=f(),U&&U.c(),this.h()},l(t){n=o(t,"DIV",{});var l=c(n);e=o(l,"BUTTON",{class:!0});var s=c(e);v=r(s,j),$=r(s," - "),E=r(s,A),b=d(s),B&&B.l(s),s.forEach(a),y=d(l),w=o(l,"DIV",{class:!0});var m=c(w);T&&T.l(m),K=d(m),H&&H.l(m),M=d(m),J&&J.l(m),N=d(m),U&&U.l(m),m.forEach(a),l.forEach(a),this.h()},h(){m(e,"class","accordion svelte-ck2cfg"),p(e,"active",t[1]),m(w,"class",x="panel "+(t[1]?"":"hidden")+" svelte-ck2cfg")},m(l,s){i(l,n,s),h(n,e),h(e,v),h(e,$),h(e,E),h(e,b),B&&B.m(e,null),h(n,y),h(n,w),T&&T.m(w,null),h(w,K),H&&H.m(w,null),h(w,M),J&&J.m(w,null),h(w,N),U&&U.m(w,null),S||(I=g(e,"click",t[2]),S=!0)},p(t,[n]){1&n&&j!==(j=t[0].name+"")&&u(v,j),1&n&&A!==(A=t[0].description+"")&&u(E,A),t[0].level?B?B.p(t,n):(B=D(t),B.c(),B.m(e,null)):B&&(B.d(1),B=null),2&n&&p(e,"active",t[1]),t[0].intervalKm||t[0].intervalMonths?T?T.p(t,n):(T=O(t),T.c(),T.m(w,K)):T&&(T.d(1),T=null),t[0].km||t[0].months?H?H.p(t,n):(H=P(t),H.c(),H.m(w,M)):H&&(H.d(1),H=null),t[0].links?J?J.p(t,n):(J=F(t),J.c(),J.m(w,N)):J&&(J.d(1),J=null),t[0].notes?U?U.p(t,n):(U=C(t),U.c(),U.m(w,null)):U&&(U.d(1),U=null),2&n&&x!==(x="panel "+(t[1]?"":"hidden")+" svelte-ck2cfg")&&m(w,"class",x)},i:k,o:k,d(t){t&&a(n),B&&B.d(),T&&T.d(),H&&H.d(),J&&J.d(),U&&U.d(),S=!1,I()}}}function z(t,n,e){let{task:l}=n,s=!1;return t.$$set=t=>{"task"in t&&e(0,l=t.task)},[l,s,()=>{e(1,s=!s)}]}class G extends t{constructor(t){super(),n(this,t,z,R,e,{task:0})}}function Q(t,n,e){const l=t.slice();return l[1]=n[e],l}function W(t){let n,e;return n=new G({props:{task:t[1]}}),{c(){$(n.$$.fragment)},l(t){E(n.$$.fragment,t)},m(t,l){b(n,t,l),e=!0},p(t,e){const l={};1&e&&(l.task=t[1]),n.$set(l)},i(t){e||(y(n.$$.fragment,t),e=!0)},o(t){w(n.$$.fragment,t),e=!1},d(t){K(n,t)}}}function X(t){let n,e,p,g,k,$,E,b,K,S,I=t[0].name+"",j=t[0].description+"",A=t[0].tasks,B=[];for(let n=0;n<A.length;n+=1)B[n]=W(Q(t,A,n));const D=t=>w(B[t],1,1,()=>{B[t]=null});return{c(){n=l("h1"),e=s(I),p=f(),g=l("h3"),k=s(j),$=f(),E=l("hr"),b=f();for(let t=0;t<B.length;t+=1)B[t].c();K=M(),this.h()},l(t){n=o(t,"H1",{});var l=c(n);e=r(l,I),l.forEach(a),p=d(t),g=o(t,"H3",{class:!0});var s=c(g);k=r(s,j),s.forEach(a),$=d(t),E=o(t,"HR",{class:!0}),b=d(t);for(let n=0;n<B.length;n+=1)B[n].l(t);K=M(),this.h()},h(){m(g,"class","svelte-vyo4y4"),m(E,"class","solid svelte-vyo4y4")},m(t,l){i(t,n,l),h(n,e),i(t,p,l),i(t,g,l),h(g,k),i(t,$,l),i(t,E,l),i(t,b,l);for(let n=0;n<B.length;n+=1)B[n].m(t,l);i(t,K,l),S=!0},p(t,[n]){if((!S||1&n)&&I!==(I=t[0].name+"")&&u(e,I),(!S||1&n)&&j!==(j=t[0].description+"")&&u(k,j),1&n){let e;for(A=t[0].tasks,e=0;e<A.length;e+=1){const l=Q(t,A,e);B[e]?(B[e].p(l,n),y(B[e],1)):(B[e]=W(l),B[e].c(),y(B[e],1),B[e].m(K.parentNode,K))}for(N(),e=A.length;e<B.length;e+=1)D(e);x()}},i(t){if(!S){for(let t=0;t<A.length;t+=1)y(B[t]);S=!0}},o(t){B=B.filter(Boolean);for(let t=0;t<B.length;t+=1)w(B[t]);S=!1},d(t){t&&a(n),t&&a(p),t&&a(g),t&&a($),t&&a(E),t&&a(b),v(B,t),t&&a(K)}}}function Y(t,n,e){let{moto:l}=n;return t.$$set=t=>{"moto"in t&&e(0,l=t.moto)},[l]}class Z extends t{constructor(t){super(),n(this,t,Y,X,e,{moto:0})}}function _(t){let n,e,u,v,p,k,M,N,x,I;return document.title=n="Braap! - "+t[0].name,v=new Z({props:{moto:t[0]}}),{c(){e=l("meta"),u=f(),$(v.$$.fragment),p=f(),k=l("button"),M=s("Download (as JSON)"),this.h()},l(t){const n=S('[data-svelte="svelte-1wmlcf8"]',document.head);e=o(n,"META",{name:!0,content:!0}),n.forEach(a),u=d(t),E(v.$$.fragment,t),p=d(t),k=o(t,"BUTTON",{type:!0});var l=c(k);M=r(l,"Download (as JSON)"),l.forEach(a),this.h()},h(){m(e,"name","description"),m(e,"content","A viewer for motorcycle service intervals"),m(k,"type","submit")},m(n,l){h(document.head,e),i(n,u,l),b(v,n,l),i(n,p,l),i(n,k,l),h(k,M),N=!0,x||(I=g(k,"click",t[1]),x=!0)},p(t,[e]){(!N||1&e)&&n!==(n="Braap! - "+t[0].name)&&(document.title=n);const l={};1&e&&(l.moto=t[0]),v.$set(l)},i(t){N||(y(v.$$.fragment,t),N=!0)},o(t){w(v.$$.fragment,t),N=!1},d(t){a(e),t&&a(u),K(v,t),t&&a(p),t&&a(k),x=!1,I()}}}async function tt({params:t,query:n}){const e=n.moto,l=await this.fetch("https://ramblenride.github.io/motorcycle-service-db/"+e),s=await l.json();if(200===l.status){const t=Object.values(s.motorcycles)[0];return t.tasks.sort((t,n)=>t.name.localeCompare(n.name)),{moto:t}}this.error(l.status,s.message)}function nt(t,n,e){let{moto:l}=n;return t.$$set=t=>{"moto"in t&&e(0,l=t.moto)},[l,function(){const t=I(l);j(t,A(l))}]}export default class extends t{constructor(t){super(),n(this,t,nt,_,e,{moto:0})}}export{tt as preload};
