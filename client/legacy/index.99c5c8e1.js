import{_ as t,a as n,b as o,c as r,i as a,s as e,d as i,S as c,f as s,e as f,t as l,V as u,q as d,k as m,l as h,g as p,h as v,j as y,n as g,o as E,r as S,D as I,R as $,C as x,Q as N,m as R,H as k,u as j,J,z as O,A as b,B as q,E as z}from"./client.8e69d259.js";import{M as D}from"./MotorcycleEdit.dd7700a8.js";import{g as F,d as H,m as M}from"./download.f636f66d.js";function T(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,e=n(t);if(r){var i=n(this).constructor;a=Reflect.construct(e,arguments,i)}else a=e.apply(this,arguments);return o(this,a)}}function w(t){var n,o,r,a,e,i,c,u,d,S;return{c:function(){n=f("h2"),o=l("Import from an existing file"),r=s(),a=f("div"),e=f("input"),i=s(),c=f("button"),u=l("Import"),this.h()},l:function(t){n=p(t,"H2",{});var s=v(n);o=y(s,"Import from an existing file"),s.forEach(m),r=h(t),a=p(t,"DIV",{class:!0});var f=v(a);e=p(f,"INPUT",{type:!0,class:!0,accept:!0}),i=h(f),c=p(f,"BUTTON",{type:!0,class:!0});var l=v(c);u=y(l,"Import"),l.forEach(m),f.forEach(m),this.h()},h:function(){R(e,"type","file"),R(e,"class","rounded-input largeSize svelte-1ktqo9x"),R(e,"accept","application/json"),R(c,"type","submit"),R(c,"class","smallSize svelte-1ktqo9x"),R(a,"class","horizontalForms svelte-1ktqo9x")},m:function(s,f){g(s,n,f),E(n,o),g(s,r,f),g(s,a,f),E(a,e),E(a,i),E(a,c),E(c,u),d||(S=[k(e,"change",t[4]),k(c,"click",t[3])],d=!0)},p:j,i:j,o:j,d:function(t){t&&m(n),t&&m(r),t&&m(a),d=!1,J(S)}}}function B(t){var n,o;return n=new D({props:{onSubmit:t[2],motorcycle:t[1]}}),{c:function(){O(n.$$.fragment)},l:function(t){b(n.$$.fragment,t)},m:function(t,r){q(n,t,r),o=!0},p:function(t,o){var r={};2&o&&(r.motorcycle=t[1]),n.$set(r)},i:function(t){o||(x(n.$$.fragment,t),o=!0)},o:function(t){I(n.$$.fragment,t),o=!1},d:function(t){z(n,t)}}}function C(t){var n,o,r,a,e,i,c,R,k,j,J,O=[B,w],b=[];function q(t,n){return void 0!==t[1]?0:1}return R=q(t),k=b[R]=O[R](t),{c:function(){n=s(),o=f("h1"),r=l("Motorcycle Service Information"),a=s(),e=f("h1"),i=l("Editor"),c=s(),k.c(),j=u(),this.h()},l:function(t){d('[data-svelte="svelte-7t74km"]',document.head).forEach(m),n=h(t),o=p(t,"H1",{});var s=v(o);r=y(s,"Motorcycle Service Information"),s.forEach(m),a=h(t),e=p(t,"H1",{});var f=v(e);i=y(f,"Editor"),f.forEach(m),c=h(t),k.l(t),j=u(),this.h()},h:function(){document.title="Braap! - Editor"},m:function(t,s){g(t,n,s),g(t,o,s),E(o,r),g(t,a,s),g(t,e,s),E(e,i),g(t,c,s),b[R].m(t,s),g(t,j,s),J=!0},p:function(t,n){var o=S(n,1)[0],r=R;(R=q(t))===r?b[R].p(t,o):(N(),I(b[r],1,1,(function(){b[r]=null})),$(),(k=b[R])||(k=b[R]=O[R](t)).c(),x(k,1),k.m(j.parentNode,j))},i:function(t){J||(x(k),J=!0)},o:function(t){I(k),J=!1},d:function(t){t&&m(n),t&&m(o),t&&m(a),t&&m(e),t&&m(c),b[R].d(t),t&&m(j)}}}function A(t,n,o){var r,a=[];return[a,r,function(){var t=F(r);H(t,M(r))},function(){if(a.length<=0)return!1;var t=new FileReader;t.onerror=function(t){alert("Failed to load the file")},t.onload=function(t){try{var n=JSON.parse(t.target.result);void 0===n.motorcycles||1!=n.motorcycles.length?alert("Invalid JSON file. Could not find the motorcycle list."):(o(1,r=n.motorcycles[0]),void 0!==r.name&&void 0!==r.description||(o(1,r=void 0),alert("Invalid JSON file. Could not find a valid motorcycle.")))}catch(t){alert("Failed to parse imported JSON file:",t)}},t.readAsText(a.item(0))},function(){a=this.files,o(0,a)}]}var P=function(n){t(s,c);var o=T(s);function s(t){var n;return r(this,s),n=o.call(this),a(i(n),t,A,C,e,{}),n}return s}();export default P;
