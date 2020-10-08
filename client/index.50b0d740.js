import{S as t,i as e,s as o,e as a,a as r,t as s,N as n,q as c,b as i,d as l,f as d,g as m,h as f,k as p,l as u,m as h,r as v,J as y,p as g,I as E,x as I,o as S,A as x,c as $,j as N,n as b,u as j}from"./client.620553a4.js";import{M as k}from"./MotorcycleEdit.14bc4de6.js";import{g as J,d as M,m as O}from"./download.bcb9ad50.js";function T(t){let e,o,n,c,v,y,g,E,$,N;return{c(){e=a("h3"),o=s("Import from an existing file"),n=r(),c=a("div"),v=a("input"),y=r(),g=a("button"),E=s("Import"),this.h()},l(t){e=i(t,"H3",{});var a=m(e);o=f(a,"Import from an existing file"),a.forEach(l),n=d(t),c=i(t,"DIV",{class:!0});var r=m(c);v=i(r,"INPUT",{type:!0,class:!0,accept:!0}),y=d(r),g=i(r,"BUTTON",{type:!0,class:!0});var s=m(g);E=f(s,"Import"),s.forEach(l),r.forEach(l),this.h()},h(){p(v,"type","file"),p(v,"class","rounded-input largeSize svelte-1ktqo9x"),p(v,"accept","application/json"),p(g,"type","submit"),p(g,"class","smallSize svelte-1ktqo9x"),p(c,"class","horizontalForms svelte-1ktqo9x")},m(a,r){h(a,e,r),u(e,o),h(a,n,r),h(a,c,r),u(c,v),u(c,y),u(c,g),u(g,E),$||(N=[I(v,"change",t[4]),I(g,"click",t[3])],$=!0)},p:S,i:S,o:S,d(t){t&&l(e),t&&l(n),t&&l(c),$=!1,x(N)}}}function q(t){let e,o;return e=new k({props:{onSubmit:t[2],motorcycle:t[1]}}),{c(){$(e.$$.fragment)},l(t){N(e.$$.fragment,t)},m(t,a){b(e,t,a),o=!0},p(t,o){const a={};2&o&&(a.motorcycle=t[1]),e.$set(a)},i(t){o||(g(e.$$.fragment,t),o=!0)},o(t){v(e.$$.fragment,t),o=!1},d(t){j(e,t)}}}function w(t){let e,o,I,S,x,$,N,b,j,k,J,M;const O=[q,T],w=[];function A(t,e){return void 0!==t[1]?0:1}return j=A(t),k=w[j]=O[j](t),{c(){e=a("meta"),o=r(),I=a("h1"),S=s("Motorcycle Service Information"),x=r(),$=a("h2"),N=s("Editor"),b=r(),k.c(),J=n(),this.h()},l(t){const a=c('[data-svelte="svelte-1wpvc4u"]',document.head);e=i(a,"META",{name:!0,content:!0}),a.forEach(l),o=d(t),I=i(t,"H1",{});var r=m(I);S=f(r,"Motorcycle Service Information"),r.forEach(l),x=d(t),$=i(t,"H2",{});var s=m($);N=f(s,"Editor"),s.forEach(l),b=d(t),k.l(t),J=n(),this.h()},h(){document.title="Braap! - Editor",p(e,"name","description"),p(e,"content","An editor for motorcycle service intervals")},m(t,a){u(document.head,e),h(t,o,a),h(t,I,a),u(I,S),h(t,x,a),h(t,$,a),u($,N),h(t,b,a),w[j].m(t,a),h(t,J,a),M=!0},p(t,[e]){let o=j;j=A(t),j===o?w[j].p(t,e):(E(),v(w[o],1,1,()=>{w[o]=null}),y(),k=w[j],k||(k=w[j]=O[j](t),k.c()),g(k,1),k.m(J.parentNode,J))},i(t){M||(g(k),M=!0)},o(t){v(k),M=!1},d(t){l(e),t&&l(o),t&&l(I),t&&l(x),t&&l($),t&&l(b),w[j].d(t),t&&l(J)}}}function A(t,e,o){let a,r=[];return[r,a,function(){const t=J(a);M(t,O(a))},function(){if(r.length<=0)return!1;const t=new FileReader;t.onerror=function(t){alert("Failed to load the file")},t.onload=function(t){try{const e=JSON.parse(t.target.result);void 0===e.motorcycles||1!=e.motorcycles.length?alert("Invalid JSON file. Could not find the motorcycle list."):(o(1,a=e.motorcycles[0]),void 0!==a.name&&void 0!==a.description||(o(1,a=void 0),alert("Invalid JSON file. Could not find a valid motorcycle.")))}catch(t){alert("Failed to parse imported JSON file:",t)}},t.readAsText(r.item(0))},function(){r=this.files,o(0,r)}]}export default class extends t{constructor(t){super(),e(this,t,A,w,o,{})}}