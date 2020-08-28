import{S as t,i as e,s as o,a,e as s,t as r,L as i,q as n,f as c,g as l,c as d,b as f,d as m,j as p,k as u,w as h,I as v,v as y,H as g,h as I,A as E,n as S,C as x,p as $,r as N,u as b,x as k}from"./client.e3c48718.js";import{M as j}from"./MotorcycleEdit.d02765f8.js";import{g as O,d as q,m as w}from"./download.bcb9ad50.js";function F(t){let e,o,i,n,h,v,y,g,$,N;return{c(){e=s("h2"),o=r("Import from an existing file"),i=a(),n=s("div"),h=s("input"),v=a(),y=s("button"),g=r("Import"),this.h()},l(t){e=d(t,"H2",{});var a=f(e);o=m(a,"Import from an existing file"),a.forEach(c),i=l(t),n=d(t,"DIV",{class:!0});var s=f(n);h=d(s,"INPUT",{type:!0,class:!0,accept:!0}),v=l(s),y=d(s,"BUTTON",{type:!0,class:!0});var r=f(y);g=m(r,"Import"),r.forEach(c),s.forEach(c),this.h()},h(){I(h,"type","file"),I(h,"class","rounded-input largeSize svelte-1ktqo9x"),I(h,"accept","application/json"),I(y,"type","submit"),I(y,"class","smallSize svelte-1ktqo9x"),I(n,"class","horizontalForms svelte-1ktqo9x")},m(a,s){p(a,e,s),u(e,o),p(a,i,s),p(a,n,s),u(n,h),u(n,v),u(n,y),u(y,g),$||(N=[E(h,"change",t[4]),E(y,"click",t[3])],$=!0)},p:S,i:S,o:S,d(t){t&&c(e),t&&c(i),t&&c(n),$=!1,x(N)}}}function H(t){let e,o;return e=new j({props:{onSubmit:t[2],motorcycle:t[1]}}),{c(){$(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){b(e,t,a),o=!0},p(t,o){const a={};2&o&&(a.motorcycle=t[1]),e.$set(a)},i(t){o||(y(e.$$.fragment,t),o=!0)},o(t){h(e.$$.fragment,t),o=!1},d(t){k(e,t)}}}function J(t){let e,o,I,E,S,x,$,N,b,k,j;const O=[H,F],q=[];function w(t,e){return void 0!==t[1]?0:1}return N=w(t),b=q[N]=O[N](t),{c(){e=a(),o=s("h1"),I=r("Motorcycle Service Information"),E=a(),S=s("h1"),x=r("Editor"),$=a(),b.c(),k=i(),this.h()},l(t){n('[data-svelte="svelte-7t74km"]',document.head).forEach(c),e=l(t),o=d(t,"H1",{});var a=f(o);I=m(a,"Motorcycle Service Information"),a.forEach(c),E=l(t),S=d(t,"H1",{});var s=f(S);x=m(s,"Editor"),s.forEach(c),$=l(t),b.l(t),k=i(),this.h()},h(){document.title="Braap! - Editor"},m(t,a){p(t,e,a),p(t,o,a),u(o,I),p(t,E,a),p(t,S,a),u(S,x),p(t,$,a),q[N].m(t,a),p(t,k,a),j=!0},p(t,[e]){let o=N;N=w(t),N===o?q[N].p(t,e):(g(),h(q[o],1,1,()=>{q[o]=null}),v(),b=q[N],b||(b=q[N]=O[N](t),b.c()),y(b,1),b.m(k.parentNode,k))},i(t){j||(y(b),j=!0)},o(t){h(b),j=!1},d(t){t&&c(e),t&&c(o),t&&c(E),t&&c(S),t&&c($),q[N].d(t),t&&c(k)}}}function M(t,e,o){let a,s=[];return[s,a,function(){const t=O(a);q(t,w(a))},function(){if(s.length<=0)return!1;const t=new FileReader;t.onerror=function(t){alert("Failed to load the file")},t.onload=function(t){try{const e=JSON.parse(t.target.result);void 0===e.motorcycles||1!=e.motorcycles.length?alert("Invalid JSON file. Could not find the motorcycle list."):(o(1,a=e.motorcycles[0]),void 0!==a.name&&void 0!==a.description||(o(1,a=void 0),alert("Invalid JSON file. Could not find a valid motorcycle.")))}catch(t){alert("Failed to parse imported JSON file:",t)}},t.readAsText(s.item(0))},function(){s=this.files,o(0,s)}]}export default class extends t{constructor(t){super(),e(this,t,M,J,o,{})}}
