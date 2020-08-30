import{_ as t,a as n,b as o,c as r,i as e,s as a,d as c,S as i,f as s,e as f,t as l,V as u,q as d,k as m,l as h,g as p,h as v,j as y,n as g,o as E,r as S,D as I,R as $,C as x,Q as N,m as R,H as k,u as b,J as j,z as J,A as O,B as q,E as z}from"./client.3fc22b19.js";import{M as D}from"./MotorcycleEdit.fce83ec0.js";import{g as F,d as H,m as M}from"./download.f636f66d.js";function T(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,a=n(t);if(r){var c=n(this).constructor;e=Reflect.construct(a,arguments,c)}else e=a.apply(this,arguments);return o(this,e)}}function w(t){var n,o,r,e,a,c,i,u,d,S;return{c:function(){n=f("h2"),o=l("Import from an existing file"),r=s(),e=f("div"),a=f("input"),c=s(),i=f("button"),u=l("Import"),this.h()},l:function(t){n=p(t,"H2",{});var s=v(n);o=y(s,"Import from an existing file"),s.forEach(m),r=h(t),e=p(t,"DIV",{class:!0});var f=v(e);a=p(f,"INPUT",{type:!0,class:!0,accept:!0}),c=h(f),i=p(f,"BUTTON",{type:!0,class:!0});var l=v(i);u=y(l,"Import"),l.forEach(m),f.forEach(m),this.h()},h:function(){R(a,"type","file"),R(a,"class","rounded-input largeSize svelte-1ktqo9x"),R(a,"accept","application/json"),R(i,"type","submit"),R(i,"class","smallSize svelte-1ktqo9x"),R(e,"class","horizontalForms svelte-1ktqo9x")},m:function(s,f){g(s,n,f),E(n,o),g(s,r,f),g(s,e,f),E(e,a),E(e,c),E(e,i),E(i,u),d||(S=[k(a,"change",t[4]),k(i,"click",t[3])],d=!0)},p:b,i:b,o:b,d:function(t){t&&m(n),t&&m(r),t&&m(e),d=!1,j(S)}}}function B(t){var n,o;return n=new D({props:{onSubmit:t[2],motorcycle:t[1]}}),{c:function(){J(n.$$.fragment)},l:function(t){O(n.$$.fragment,t)},m:function(t,r){q(n,t,r),o=!0},p:function(t,o){var r={};2&o&&(r.motorcycle=t[1]),n.$set(r)},i:function(t){o||(x(n.$$.fragment,t),o=!0)},o:function(t){I(n.$$.fragment,t),o=!1},d:function(t){z(n,t)}}}function C(t){var n,o,r,e,a,c,i,R,k,b,j,J=[B,w],O=[];function q(t,n){return void 0!==t[1]?0:1}return R=q(t),k=O[R]=J[R](t),{c:function(){n=s(),o=f("h1"),r=l("Motorcycle Service Information"),e=s(),a=f("h1"),c=l("Editor"),i=s(),k.c(),b=u(),this.h()},l:function(t){d('[data-svelte="svelte-7t74km"]',document.head).forEach(m),n=h(t),o=p(t,"H1",{});var s=v(o);r=y(s,"Motorcycle Service Information"),s.forEach(m),e=h(t),a=p(t,"H1",{});var f=v(a);c=y(f,"Editor"),f.forEach(m),i=h(t),k.l(t),b=u(),this.h()},h:function(){document.title="Braap! - Editor"},m:function(t,s){g(t,n,s),g(t,o,s),E(o,r),g(t,e,s),g(t,a,s),E(a,c),g(t,i,s),O[R].m(t,s),g(t,b,s),j=!0},p:function(t,n){var o=S(n,1)[0],r=R;(R=q(t))===r?O[R].p(t,o):(N(),I(O[r],1,1,(function(){O[r]=null})),$(),(k=O[R])||(k=O[R]=J[R](t)).c(),x(k,1),k.m(b.parentNode,b))},i:function(t){j||(x(k),j=!0)},o:function(t){I(k),j=!1},d:function(t){t&&m(n),t&&m(o),t&&m(e),t&&m(a),t&&m(i),O[R].d(t),t&&m(b)}}}function A(t,n,o){var r,e=[];return[e,r,function(){var t=F(r);H(t,M(r))},function(){if(e.length<=0)return!1;var t=new FileReader;t.onerror=function(t){alert("Failed to load the file")},t.onload=function(t){try{var n=JSON.parse(t.target.result);void 0===n.motorcycles||1!=n.motorcycles.length?alert("Invalid JSON file. Could not find the motorcycle list."):(o(1,r=n.motorcycles[0]),void 0!==r.name&&void 0!==r.description||(o(1,r=void 0),alert("Invalid JSON file. Could not find a valid motorcycle.")))}catch(t){alert("Failed to parse imported JSON file:",t)}},t.readAsText(e.item(0))},function(){e=this.files,o(0,e)}]}var P=function(n){t(s,i);var o=T(s);function s(t){var n;return r(this,s),n=o.call(this),e(c(n),t,A,C,a,{}),n}return s}();export default P;