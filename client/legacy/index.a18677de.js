import{_ as n,a as t,b as r,c as o,i as c,s as e,d as i,S as u,e as a,t as f,g as l,h as s,j as m,k as v,m as h,n as d,o as p,p as g,f as k,l as y,v as $,F as R,H as E,r as w,u as x,z as D,A as j,B as S,C as b,D as K,E as M,V as N,Q as B,R as I,x as P,y as O,q as H}from"./client.8e69d259.js";import{g as T,d as V,m as q}from"./download.f636f66d.js";function A(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,e=t(n);if(o){var i=t(this).constructor;c=Reflect.construct(e,arguments,i)}else c=e.apply(this,arguments);return r(this,c)}}function F(n,t,r){var o=n.slice();return o[3]=t[r],o}function U(n){var t,r,o,c=n[0].level+"";return{c:function(){t=a("span"),r=f(c),this.h()},l:function(n){t=l(n,"SPAN",{class:!0});var o=s(t);r=m(o,c),o.forEach(v),this.h()},h:function(){h(t,"class",o="level "+n[0].level+" svelte-1we6jo0")},m:function(n,o){d(n,t,o),p(t,r)},p:function(n,e){1&e&&c!==(c=n[0].level+"")&&g(r,c),1&e&&o!==(o="level "+n[0].level+" svelte-1we6jo0")&&h(t,"class",o)},d:function(n){n&&v(t)}}}function C(n){var t,r,o,c,e=n[0].intervalKm&&J(n),i=n[0].intervalKm&&n[0].intervalMonths&&L(),u=n[0].intervalMonths&&z(n);return{c:function(){t=a("p"),r=f("Service Interval:\n        "),e&&e.c(),o=k(),i&&i.c(),c=k(),u&&u.c()},l:function(n){t=l(n,"P",{});var a=s(t);r=m(a,"Service Interval:\n        "),e&&e.l(a),o=y(a),i&&i.l(a),c=y(a),u&&u.l(a),a.forEach(v)},m:function(n,a){d(n,t,a),p(t,r),e&&e.m(t,null),p(t,o),i&&i.m(t,null),p(t,c),u&&u.m(t,null)},p:function(n,r){n[0].intervalKm?e?e.p(n,r):((e=J(n)).c(),e.m(t,o)):e&&(e.d(1),e=null),n[0].intervalKm&&n[0].intervalMonths?i||((i=L()).c(),i.m(t,c)):i&&(i.d(1),i=null),n[0].intervalMonths?u?u.p(n,r):((u=z(n)).c(),u.m(t,null)):u&&(u.d(1),u=null)},d:function(n){n&&v(t),e&&e.d(),i&&i.d(),u&&u.d()}}}function J(n){var t,r,o=n[0].intervalKm+"";return{c:function(){t=f(o),r=f(" km")},l:function(n){t=m(n,o),r=m(n," km")},m:function(n,o){d(n,t,o),d(n,r,o)},p:function(n,r){1&r&&o!==(o=n[0].intervalKm+"")&&g(t,o)},d:function(n){n&&v(t),n&&v(r)}}}function L(n){var t;return{c:function(){t=f("/")},l:function(n){t=m(n,"/")},m:function(n,r){d(n,t,r)},d:function(n){n&&v(t)}}}function z(n){var t,r,o=n[0].intervalMonths+"";return{c:function(){t=f(o),r=f(" months")},l:function(n){t=m(n,o),r=m(n," months")},m:function(n,o){d(n,t,o),d(n,r,o)},p:function(n,r){1&r&&o!==(o=n[0].intervalMonths+"")&&g(t,o)},d:function(n){n&&v(t),n&&v(r)}}}function Q(n){var t,r,o,c,e=n[0].km&&_(n),i=n[0].km&&n[0].months&&G(),u=n[0].months&&W(n);return{c:function(){t=a("p"),r=f("Fixed Service:\n        "),e&&e.c(),o=k(),i&&i.c(),c=k(),u&&u.c()},l:function(n){t=l(n,"P",{});var a=s(t);r=m(a,"Fixed Service:\n        "),e&&e.l(a),o=y(a),i&&i.l(a),c=y(a),u&&u.l(a),a.forEach(v)},m:function(n,a){d(n,t,a),p(t,r),e&&e.m(t,null),p(t,o),i&&i.m(t,null),p(t,c),u&&u.m(t,null)},p:function(n,r){n[0].km?e?e.p(n,r):((e=_(n)).c(),e.m(t,o)):e&&(e.d(1),e=null),n[0].km&&n[0].months?i||((i=G()).c(),i.m(t,c)):i&&(i.d(1),i=null),n[0].months?u?u.p(n,r):((u=W(n)).c(),u.m(t,null)):u&&(u.d(1),u=null)},d:function(n){n&&v(t),e&&e.d(),i&&i.d(),u&&u.d()}}}function _(n){var t,r,o=n[0].km+"";return{c:function(){t=f(o),r=f(" km")},l:function(n){t=m(n,o),r=m(n," km")},m:function(n,o){d(n,t,o),d(n,r,o)},p:function(n,r){1&r&&o!==(o=n[0].km+"")&&g(t,o)},d:function(n){n&&v(t),n&&v(r)}}}function G(n){var t;return{c:function(){t=f("/")},l:function(n){t=m(n,"/")},m:function(n,r){d(n,t,r)},d:function(n){n&&v(t)}}}function W(n){var t,r,o=n[0].months+"";return{c:function(){t=f(o),r=f(" months")},l:function(n){t=m(n,o),r=m(n," months")},m:function(n,o){d(n,t,o),d(n,r,o)},p:function(n,r){1&r&&o!==(o=n[0].months+"")&&g(t,o)},d:function(n){n&&v(t),n&&v(r)}}}function X(n){for(var t,r=n[0].links,o=[],c=0;c<r.length;c+=1)o[c]=Y(F(n,r,c));return{c:function(){t=a("ul");for(var n=0;n<o.length;n+=1)o[n].c()},l:function(n){t=l(n,"UL",{});for(var r=s(t),c=0;c<o.length;c+=1)o[c].l(r);r.forEach(v)},m:function(n,r){d(n,t,r);for(var c=0;c<o.length;c+=1)o[c].m(t,null)},p:function(n,c){if(1&c){var e;for(r=n[0].links,e=0;e<r.length;e+=1){var i=F(n,r,e);o[e]?o[e].p(i,c):(o[e]=Y(i),o[e].c(),o[e].m(t,null))}for(;e<o.length;e+=1)o[e].d(1);o.length=r.length}},d:function(n){n&&v(t),$(o,n)}}}function Y(n){var t,r,o,c,e,i=n[3].name+"";return{c:function(){t=a("li"),r=a("a"),o=f(i),e=k(),this.h()},l:function(n){t=l(n,"LI",{});var c=s(t);r=l(c,"A",{href:!0});var u=s(r);o=m(u,i),u.forEach(v),e=y(c),c.forEach(v),this.h()},h:function(){h(r,"href",c=n[3].url)},m:function(n,c){d(n,t,c),p(t,r),p(r,o),p(t,e)},p:function(n,t){1&t&&i!==(i=n[3].name+"")&&g(o,i),1&t&&c!==(c=n[3].url)&&h(r,"href",c)},d:function(n){n&&v(t)}}}function Z(n){var t,r,o,c=n[0].notes+"";return{c:function(){t=f("Notes:\n      "),r=a("div"),o=f(c),this.h()},l:function(n){t=m(n,"Notes:\n      "),r=l(n,"DIV",{class:!0});var e=s(r);o=m(e,c),e.forEach(v),this.h()},h:function(){h(r,"class","notes svelte-1we6jo0")},m:function(n,c){d(n,t,c),d(n,r,c),p(r,o)},p:function(n,t){1&t&&c!==(c=n[0].notes+"")&&g(o,c)},d:function(n){n&&v(t),n&&v(r)}}}function nn(n){var t,r,o,c,e,i,u,$,D,j,S,b,K,M,N=n[0].name+"",B=n[0].description+"",I=n[0].level&&U(n),P=(n[0].intervalKm||n[0].intervalMonths)&&C(n),O=(n[0].km||n[0].months)&&Q(n),H=n[0].links&&X(n),T=n[0].notes&&Z(n);return{c:function(){t=a("div"),r=a("button"),o=f(N),c=f(" - "),e=f(B),i=k(),I&&I.c(),u=k(),$=a("div"),P&&P.c(),D=k(),O&&O.c(),j=k(),H&&H.c(),S=k(),T&&T.c(),this.h()},l:function(n){t=l(n,"DIV",{});var a=s(t);r=l(a,"BUTTON",{class:!0});var f=s(r);o=m(f,N),c=m(f," - "),e=m(f,B),i=y(f),I&&I.l(f),f.forEach(v),u=y(a),$=l(a,"DIV",{class:!0});var h=s($);P&&P.l(h),D=y(h),O&&O.l(h),j=y(h),H&&H.l(h),S=y(h),T&&T.l(h),h.forEach(v),a.forEach(v),this.h()},h:function(){h(r,"class","accordion svelte-1we6jo0"),R(r,"active",n[1]),h($,"class",b="panel "+(n[1]?"":"hidden")+" svelte-1we6jo0")},m:function(a,f){d(a,t,f),p(t,r),p(r,o),p(r,c),p(r,e),p(r,i),I&&I.m(r,null),p(t,u),p(t,$),P&&P.m($,null),p($,D),O&&O.m($,null),p($,j),H&&H.m($,null),p($,S),T&&T.m($,null),K||(M=E(r,"click",n[2]),K=!0)},p:function(n,t){var c=w(t,1)[0];1&c&&N!==(N=n[0].name+"")&&g(o,N),1&c&&B!==(B=n[0].description+"")&&g(e,B),n[0].level?I?I.p(n,c):((I=U(n)).c(),I.m(r,null)):I&&(I.d(1),I=null),2&c&&R(r,"active",n[1]),n[0].intervalKm||n[0].intervalMonths?P?P.p(n,c):((P=C(n)).c(),P.m($,D)):P&&(P.d(1),P=null),n[0].km||n[0].months?O?O.p(n,c):((O=Q(n)).c(),O.m($,j)):O&&(O.d(1),O=null),n[0].links?H?H.p(n,c):((H=X(n)).c(),H.m($,S)):H&&(H.d(1),H=null),n[0].notes?T?T.p(n,c):((T=Z(n)).c(),T.m($,null)):T&&(T.d(1),T=null),2&c&&b!==(b="panel "+(n[1]?"":"hidden")+" svelte-1we6jo0")&&h($,"class",b)},i:x,o:x,d:function(n){n&&v(t),I&&I.d(),P&&P.d(),O&&O.d(),H&&H.d(),T&&T.d(),K=!1,M()}}}function tn(n,t,r){var o=t.task,c=!1;return n.$$set=function(n){"task"in n&&r(0,o=n.task)},[o,c,function(){r(1,c=!c)}]}var rn=function(t){n(a,u);var r=A(a);function a(n){var t;return o(this,a),t=r.call(this),c(i(t),n,tn,nn,e,{task:0}),t}return a}();function on(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,e=t(n);if(o){var i=t(this).constructor;c=Reflect.construct(e,arguments,i)}else c=e.apply(this,arguments);return r(this,c)}}function cn(n,t,r){var o=n.slice();return o[1]=t[r],o}function en(n){var t,r;return t=new rn({props:{task:n[1]}}),{c:function(){D(t.$$.fragment)},l:function(n){j(t.$$.fragment,n)},m:function(n,o){S(t,n,o),r=!0},p:function(n,r){var o={};1&r&&(o.task=n[1]),t.$set(o)},i:function(n){r||(b(t.$$.fragment,n),r=!0)},o:function(n){K(t.$$.fragment,n),r=!1},d:function(n){M(t,n)}}}function un(n){for(var t,r,o,c,e,i,u,R,E,x,D=n[0].name+"",j=n[0].description+"",S=n[0].tasks,M=[],P=0;P<S.length;P+=1)M[P]=en(cn(n,S,P));var O=function(n){return K(M[n],1,1,(function(){M[n]=null}))};return{c:function(){t=a("h1"),r=f(D),o=k(),c=a("h3"),e=f(j),i=k(),u=a("hr"),R=k();for(var n=0;n<M.length;n+=1)M[n].c();E=N(),this.h()},l:function(n){t=l(n,"H1",{});var a=s(t);r=m(a,D),a.forEach(v),o=y(n),c=l(n,"H3",{class:!0});var f=s(c);e=m(f,j),f.forEach(v),i=y(n),u=l(n,"HR",{class:!0}),R=y(n);for(var h=0;h<M.length;h+=1)M[h].l(n);E=N(),this.h()},h:function(){h(c,"class","svelte-vyo4y4"),h(u,"class","solid svelte-vyo4y4")},m:function(n,a){d(n,t,a),p(t,r),d(n,o,a),d(n,c,a),p(c,e),d(n,i,a),d(n,u,a),d(n,R,a);for(var f=0;f<M.length;f+=1)M[f].m(n,a);d(n,E,a),x=!0},p:function(n,t){var o=w(t,1)[0];if((!x||1&o)&&D!==(D=n[0].name+"")&&g(r,D),(!x||1&o)&&j!==(j=n[0].description+"")&&g(e,j),1&o){var c;for(S=n[0].tasks,c=0;c<S.length;c+=1){var i=cn(n,S,c);M[c]?(M[c].p(i,o),b(M[c],1)):(M[c]=en(i),M[c].c(),b(M[c],1),M[c].m(E.parentNode,E))}for(B(),c=S.length;c<M.length;c+=1)O(c);I()}},i:function(n){if(!x){for(var t=0;t<S.length;t+=1)b(M[t]);x=!0}},o:function(n){M=M.filter(Boolean);for(var t=0;t<M.length;t+=1)K(M[t]);x=!1},d:function(n){n&&v(t),n&&v(o),n&&v(c),n&&v(i),n&&v(u),n&&v(R),$(M,n),n&&v(E)}}}function an(n,t,r){var o=t.moto;return n.$$set=function(n){"moto"in n&&r(0,o=n.moto)},[o]}var fn=function(t){n(a,u);var r=on(a);function a(n){var t;return o(this,a),t=r.call(this),c(i(t),n,an,un,e,{moto:0}),t}return a}();function ln(n){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var c,e=t(n);if(o){var i=t(this).constructor;c=Reflect.construct(e,arguments,i)}else c=e.apply(this,arguments);return r(this,c)}}function sn(n){var t,r,o,c,e,i,u,g,$;return document.title=t="Braap! - "+n[0].name,o=new fn({props:{moto:n[0]}}),{c:function(){r=k(),D(o.$$.fragment),c=k(),e=a("button"),i=f("Download (as JSON)"),this.h()},l:function(n){H('[data-svelte="svelte-1osql8v"]',document.head).forEach(v),r=y(n),j(o.$$.fragment,n),c=y(n),e=l(n,"BUTTON",{type:!0});var t=s(e);i=m(t,"Download (as JSON)"),t.forEach(v),this.h()},h:function(){h(e,"type","submit")},m:function(t,a){d(t,r,a),S(o,t,a),d(t,c,a),d(t,e,a),p(e,i),u=!0,g||($=E(e,"click",n[1]),g=!0)},p:function(n,r){var c=w(r,1)[0];(!u||1&c)&&t!==(t="Braap! - "+n[0].name)&&(document.title=t);var e={};1&c&&(e.moto=n[0]),o.$set(e)},i:function(n){u||(b(o.$$.fragment,n),u=!0)},o:function(n){K(o.$$.fragment,n),u=!1},d:function(n){n&&v(r),M(o,n),n&&v(c),n&&v(e),g=!1,$()}}}function mn(n){return vn.apply(this,arguments)}function vn(){return(vn=P(O.mark((function n(t){var r,o,c,e,i;return O.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.params,r=t.query,o=r.moto,n.next=4,this.fetch("https://ramblenride.github.io/motorcycle-service-db/".concat(o));case 4:return c=n.sent,n.next=7,c.json();case 7:if(e=n.sent,200!==c.status){n.next=14;break}return(i=Object.values(e.motorcycles)[0]).tasks.sort((function(n,t){return n.name.localeCompare(t.name)})),n.abrupt("return",{moto:i});case 14:this.error(c.status,e.message);case 15:case"end":return n.stop()}}),n,this)})))).apply(this,arguments)}function hn(n,t,r){var o=t.moto;return n.$$set=function(n){"moto"in n&&r(0,o=n.moto)},[o,function(){var n=T(o);V(n,q(o))}]}var dn=function(t){n(a,u);var r=ln(a);function a(n){var t;return o(this,a),t=r.call(this),c(i(t),n,hn,sn,e,{moto:0}),t}return a}();export default dn;export{mn as preload};
