import{S as e,i as t,s,e as a,t as l,a as n,b as o,g as c,h as i,d as r,f as h,k as u,v,m as f,l as p,w as m,x as d,y,z as x,o as g,A as E,B as k,C as L,D as T,c as b,j as N,n as A,p as $,r as B,u as R,E as P,F as I,G as U,H as O,I as _,J as S,K as D,L as j,M as q}from"./client.2e82c8a6.js";function M(e){let t,s,k,L,T,b,N,A,$,B,R,P,I,U,O,_,S,D,j,q,M=(e[0].name||"-")+"";return{c(){t=a("div"),s=a("button"),k=l(M),L=n(),T=a("div"),b=a("span"),N=l("x"),A=n(),$=a("label"),B=l("Name:\n      "),R=a("input"),P=n(),I=a("br"),U=n(),O=a("label"),_=l("URL:\n      "),S=a("input"),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=c(t);s=o(a,"BUTTON",{type:!0,class:!0});var l=c(s);k=i(l,M),l.forEach(r),L=h(a),T=o(a,"DIV",{class:!0});var n=c(T);b=o(n,"SPAN",{class:!0});var u=c(b);N=i(u,"x"),u.forEach(r),A=h(n),$=o(n,"LABEL",{class:!0});var v=c($);B=i(v,"Name:\n      "),R=o(v,"INPUT",{class:!0,required:!0,type:!0,maxlength:!0,autocomplete:!0,placeholder:!0}),v.forEach(r),P=h(n),I=o(n,"BR",{class:!0}),U=h(n),O=o(n,"LABEL",{class:!0});var f=c(O);_=i(f,"URL:\n      "),S=o(f,"INPUT",{class:!0,required:!0,type:!0,maxlength:!0,placeholder:!0}),f.forEach(r),n.forEach(r),a.forEach(r),this.h()},h(){u(s,"type","button"),u(s,"class","accordion svelte-1jan4hy"),v(s,"active",e[2]),u(b,"class","close svelte-1jan4hy"),u(R,"class","rounded-input svelte-1jan4hy"),R.required="true",u(R,"type","text"),u(R,"maxlength","40"),u(R,"autocomplete","off"),u(R,"placeholder","Ex: Video how-to"),u($,"class","svelte-1jan4hy"),u(I,"class","svelte-1jan4hy"),u(S,"class","rounded-input svelte-1jan4hy"),S.required="true",u(S,"type","url"),u(S,"maxlength","120"),u(S,"placeholder","Ex: https://example.com"),u(O,"class","svelte-1jan4hy"),u(T,"class",D="panel "+(e[2]?"":"hidden")+" svelte-1jan4hy"),u(t,"class","svelte-1jan4hy")},m(a,l){f(a,t,l),p(t,s),p(s,k),p(t,L),p(t,T),p(T,b),p(b,N),p(T,A),p(T,$),p($,B),p($,R),e[6](R),m(R,e[0].name),p(T,P),p(T,I),p(T,U),p(T,O),p(O,_),p(O,S),m(S,e[0].url),j||(q=[d(s,"click",e[5]),d(b,"click",(function(){y(e[1](e[0]))&&e[1](e[0]).apply(this,arguments)})),d(R,"input",e[7]),d(R,"invalid",e[4]),d(S,"input",e[8]),d(S,"invalid",e[4])],j=!0)},p(t,[a]){e=t,1&a&&M!==(M=(e[0].name||"-")+"")&&x(k,M),4&a&&v(s,"active",e[2]),1&a&&R.value!==e[0].name&&m(R,e[0].name),1&a&&m(S,e[0].url),4&a&&D!==(D="panel "+(e[2]?"":"hidden")+" svelte-1jan4hy")&&u(T,"class",D)},i:g,o:g,d(s){s&&r(t),e[6](null),j=!1,E(q)}}}function w(e,t,s){let{onRemove:a}=t,{link:l={}}=t;const n=k();let o,c=!0;L(()=>{setTimeout(()=>{o.focus()},200)});return e.$$set=e=>{"onRemove"in e&&s(1,a=e.onRemove),"link"in e&&s(0,l=e.link)},[l,a,c,o,function(){n("invalid"),s(2,c=!0)},()=>{s(2,c=!c)},function(e){T[e?"unshift":"push"](()=>{o=e,s(3,o)})},function(){l.name=this.value,s(0,l)},function(){l.url=this.value,s(0,l)}]}class F extends e{constructor(e){super(),t(this,e,w,M,s,{onRemove:1,link:0})}}function K(e,t,s){const a=e.slice();return a[17]=t[s],a}function z(e){let t,s,n,h=e[0].technicalLevel+"";return{c(){t=a("span"),s=l(h),this.h()},l(e){t=o(e,"SPAN",{class:!0});var a=c(t);s=i(a,h),a.forEach(r),this.h()},h(){u(t,"class",n="level "+e[0].technicalLevel+" svelte-yh5f2o")},m(e,a){f(e,t,a),p(t,s)},p(e,a){1&a&&h!==(h=e[0].technicalLevel+"")&&x(s,h),1&a&&n!==(n="level "+e[0].technicalLevel+" svelte-yh5f2o")&&u(t,"class",n)},d(e){e&&r(t)}}}function V(e){let t,s;return t=new F({props:{onRemove:e[5],link:e[17]}}),t.$on("invalid",e[6]),{c(){b(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,a){A(t,e,a),s=!0},p(e,s){const a={};1&s&&(a.link=e[17]),t.$set(a)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){B(t.$$.fragment,e),s=!1},d(e){R(t,e)}}}function H(e){let t,s,g,k,L,T,b,N,A,R,j,q,M,w,F,H,C,J,G,X,Q,W,Y,Z,ee,te,se,ae,le,ne,oe,ce,ie,re,he,ue,ve,fe,pe,me,de,ye,xe,ge,Ee,ke,Le,Te,be,Ne,Ae,$e,Be,Re,Pe,Ie,Ue,Oe,_e,Se,De,je,qe,Me,we,Fe,Ke=(e[0].name||"")+"",ze=(e[0].description||"")+"",Ve=e[0].technicalLevel&&z(e),He=e[0].links,Ce=[];for(let t=0;t<He.length;t+=1)Ce[t]=V(K(e,He,t));const Je=e=>B(Ce[e],1,1,()=>{Ce[e]=null});return{c(){t=a("div"),s=a("button"),g=l(Ke),k=l(" - "),L=l(ze),T=n(),Ve&&Ve.c(),b=n(),N=a("div"),A=a("span"),R=l("x"),j=n(),q=a("label"),M=l("Name:\n      "),w=a("input"),F=n(),H=a("br"),C=n(),J=a("label"),G=l("Description:\n      "),X=a("input"),Q=n(),W=a("label"),Y=l("Technical Level:\n      "),Z=a("select"),ee=a("option"),te=a("option"),se=l("easy"),ae=a("option"),le=l("intermediate"),ne=a("option"),oe=l("pro"),ce=n(),ie=a("div"),re=a("label"),he=l("Fixed distance (KM):\n        "),ue=a("input"),ve=n(),fe=a("label"),pe=l("Fixed months:\n        "),me=a("input"),de=n(),ye=a("div"),xe=a("label"),ge=l("Recurring distance (KM):\n        "),Ee=a("input"),ke=n(),Le=a("label"),Te=l("Recurring months:\n        "),be=a("input"),Ne=n(),Ae=a("label"),$e=l("Notes:\n      "),Be=a("textarea"),Re=n(),Pe=a("h3"),Ie=l("Links:"),Ue=n(),Oe=a("p");for(let e=0;e<Ce.length;e+=1)Ce[e].c();_e=n(),Se=a("p"),De=a("button"),je=l("Add Link"),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=c(t);s=o(a,"BUTTON",{type:!0,class:!0});var l=c(s);g=i(l,Ke),k=i(l," - "),L=i(l,ze),T=h(l),Ve&&Ve.l(l),l.forEach(r),b=h(a),N=o(a,"DIV",{class:!0});var n=c(N);A=o(n,"SPAN",{class:!0});var u=c(A);R=i(u,"x"),u.forEach(r),j=h(n),q=o(n,"LABEL",{class:!0});var v=c(q);M=i(v,"Name:\n      "),w=o(v,"INPUT",{class:!0,required:!0,type:!0,maxlength:!0,autocomplete:!0,placeholder:!0}),v.forEach(r),F=h(n),H=o(n,"BR",{class:!0}),C=h(n),J=o(n,"LABEL",{class:!0});var f=c(J);G=i(f,"Description:\n      "),X=o(f,"INPUT",{class:!0,required:!0,type:!0,maxlength:!0,placeholder:!0}),f.forEach(r),Q=h(n),W=o(n,"LABEL",{class:!0});var p=c(W);Y=i(p,"Technical Level:\n      "),Z=o(p,"SELECT",{class:!0});var m=c(Z);ee=o(m,"OPTION",{selected:!0,value:!0,class:!0}),c(ee).forEach(r),te=o(m,"OPTION",{value:!0,class:!0});var d=c(te);se=i(d,"easy"),d.forEach(r),ae=o(m,"OPTION",{value:!0,class:!0});var y=c(ae);le=i(y,"intermediate"),y.forEach(r),ne=o(m,"OPTION",{value:!0,class:!0});var x=c(ne);oe=i(x,"pro"),x.forEach(r),m.forEach(r),p.forEach(r),ce=h(n),ie=o(n,"DIV",{class:!0});var E=c(ie);re=o(E,"LABEL",{class:!0,style:!0});var $=c(re);he=i($,"Fixed distance (KM):\n        "),ue=o($,"INPUT",{class:!0,type:!0,maxlength:!0}),$.forEach(r),ve=h(E),fe=o(E,"LABEL",{class:!0,style:!0});var B=c(fe);pe=i(B,"Fixed months:\n        "),me=o(B,"INPUT",{class:!0,type:!0,maxlength:!0}),B.forEach(r),E.forEach(r),de=h(n),ye=o(n,"DIV",{class:!0});var P=c(ye);xe=o(P,"LABEL",{class:!0,style:!0});var I=c(xe);ge=i(I,"Recurring distance (KM):\n        "),Ee=o(I,"INPUT",{class:!0,type:!0,style:!0,maxlength:!0}),I.forEach(r),ke=h(P),Le=o(P,"LABEL",{class:!0,style:!0});var U=c(Le);Te=i(U,"Recurring months:\n        "),be=o(U,"INPUT",{class:!0,type:!0,maxlength:!0}),U.forEach(r),P.forEach(r),Ne=h(n),Ae=o(n,"LABEL",{class:!0});var O=c(Ae);$e=i(O,"Notes:\n      "),Be=o(O,"TEXTAREA",{class:!0,type:!0,rows:!0,maxlength:!0}),c(Be).forEach(r),O.forEach(r),Re=h(n),Pe=o(n,"H3",{class:!0});var _=c(Pe);Ie=i(_,"Links:"),_.forEach(r),Ue=h(n),Oe=o(n,"P",{class:!0});var S=c(Oe);for(let e=0;e<Ce.length;e+=1)Ce[e].l(S);S.forEach(r),_e=h(n),Se=o(n,"P",{class:!0});var D=c(Se);De=o(D,"BUTTON",{type:!0,class:!0});var K=c(De);je=i(K,"Add Link"),K.forEach(r),D.forEach(r),n.forEach(r),a.forEach(r),this.h()},h(){u(s,"type","button"),u(s,"class","accordion svelte-yh5f2o"),v(s,"active",e[2]),u(A,"class","close svelte-yh5f2o"),u(w,"class","rounded-input svelte-yh5f2o"),w.required="true",u(w,"type","text"),u(w,"maxlength","40"),u(w,"autocomplete","off"),u(w,"placeholder","Ex: Engine oil"),u(q,"class","svelte-yh5f2o"),u(H,"class","svelte-yh5f2o"),u(X,"class","rounded-input svelte-yh5f2o"),X.required="true",u(X,"type","text"),u(X,"maxlength","120"),u(X,"placeholder","Ex: Replace the engine oil and filter."),u(J,"class","svelte-yh5f2o"),ee.selected=!0,ee.__value="",ee.value=ee.__value,u(ee,"class","svelte-yh5f2o"),te.__value="easy",te.value=te.__value,u(te,"class","svelte-yh5f2o"),ae.__value="intermediate",ae.value=ae.__value,u(ae,"class","svelte-yh5f2o"),ne.__value="pro",ne.value=ne.__value,u(ne,"class","svelte-yh5f2o"),u(Z,"class","rounded-input svelte-yh5f2o"),void 0===e[0].technicalLevel&&P(()=>e[11].call(Z)),u(W,"class","svelte-yh5f2o"),u(ue,"class","rounded-input svelte-yh5f2o"),u(ue,"type","number"),u(ue,"maxlength","7"),u(re,"class","halfSize svelte-yh5f2o"),I(re,"margin-top","auto"),u(me,"class","rounded-input svelte-yh5f2o"),u(me,"type","number"),u(me,"maxlength","4"),u(fe,"class","halfSize svelte-yh5f2o"),I(fe,"margin-left","5px"),I(fe,"margin-top","auto"),u(ie,"class","horizontalForms svelte-yh5f2o"),u(Ee,"class","rounded-input svelte-yh5f2o"),u(Ee,"type","number"),I(Ee,"margin-right","5px"),u(Ee,"maxlength","7"),u(xe,"class","halfSize svelte-yh5f2o"),I(xe,"margin-top","auto"),u(be,"class","rounded-input svelte-yh5f2o"),u(be,"type","number"),u(be,"maxlength","4"),u(Le,"class","halfSize svelte-yh5f2o"),I(Le,"margin-left","5px"),I(Le,"margin-top","auto"),u(ye,"class","horizontalForms svelte-yh5f2o"),u(Be,"class","rounded-input svelte-yh5f2o"),u(Be,"type","text"),u(Be,"rows","4"),u(Be,"maxlength","2000"),u(Ae,"class","svelte-yh5f2o"),u(Pe,"class","svelte-yh5f2o"),u(Oe,"class","svelte-yh5f2o"),u(De,"type","button"),u(De,"class","svelte-yh5f2o"),u(Se,"class","svelte-yh5f2o"),u(N,"class",qe="panel "+(e[2]?"":"hidden")+" svelte-yh5f2o"),u(t,"class","svelte-yh5f2o")},m(a,l){f(a,t,l),p(t,s),p(s,g),p(s,k),p(s,L),p(s,T),Ve&&Ve.m(s,null),p(t,b),p(t,N),p(N,A),p(A,R),p(N,j),p(N,q),p(q,M),p(q,w),e[8](w),m(w,e[0].name),p(N,F),p(N,H),p(N,C),p(N,J),p(J,G),p(J,X),m(X,e[0].description),p(N,Q),p(N,W),p(W,Y),p(W,Z),p(Z,ee),p(Z,te),p(te,se),p(Z,ae),p(ae,le),p(Z,ne),p(ne,oe),U(Z,e[0].technicalLevel),p(N,ce),p(N,ie),p(ie,re),p(re,he),p(re,ue),m(ue,e[0].km),p(ie,ve),p(ie,fe),p(fe,pe),p(fe,me),m(me,e[0].months),p(N,de),p(N,ye),p(ye,xe),p(xe,ge),p(xe,Ee),m(Ee,e[0].intervalKm),p(ye,ke),p(ye,Le),p(Le,Te),p(Le,be),m(be,e[0].intervalMonths),p(N,Ne),p(N,Ae),p(Ae,$e),p(Ae,Be),m(Be,e[0].notes),p(N,Re),p(N,Pe),p(Pe,Ie),p(N,Ue),p(N,Oe);for(let e=0;e<Ce.length;e+=1)Ce[e].m(Oe,null);p(N,_e),p(N,Se),p(Se,De),p(De,je),Me=!0,we||(Fe=[d(s,"click",e[7]),d(A,"click",(function(){y(e[1](e[0]))&&e[1](e[0]).apply(this,arguments)})),d(w,"input",e[9]),d(w,"invalid",e[6]),d(X,"input",e[10]),d(X,"invalid",e[6]),d(Z,"change",e[11]),d(ue,"input",e[12]),d(me,"input",e[13]),d(Ee,"input",e[14]),d(be,"input",e[15]),d(Be,"input",e[16]),d(De,"click",e[4])],we=!0)},p(t,[a]){if(e=t,(!Me||1&a)&&Ke!==(Ke=(e[0].name||"")+"")&&x(g,Ke),(!Me||1&a)&&ze!==(ze=(e[0].description||"")+"")&&x(L,ze),e[0].technicalLevel?Ve?Ve.p(e,a):(Ve=z(e),Ve.c(),Ve.m(s,null)):Ve&&(Ve.d(1),Ve=null),4&a&&v(s,"active",e[2]),1&a&&w.value!==e[0].name&&m(w,e[0].name),1&a&&X.value!==e[0].description&&m(X,e[0].description),1&a&&U(Z,e[0].technicalLevel),1&a&&O(ue.value)!==e[0].km&&m(ue,e[0].km),1&a&&O(me.value)!==e[0].months&&m(me,e[0].months),1&a&&O(Ee.value)!==e[0].intervalKm&&m(Ee,e[0].intervalKm),1&a&&O(be.value)!==e[0].intervalMonths&&m(be,e[0].intervalMonths),1&a&&m(Be,e[0].notes),97&a){let t;for(He=e[0].links,t=0;t<He.length;t+=1){const s=K(e,He,t);Ce[t]?(Ce[t].p(s,a),$(Ce[t],1)):(Ce[t]=V(s),Ce[t].c(),$(Ce[t],1),Ce[t].m(Oe,null))}for(_(),t=He.length;t<Ce.length;t+=1)Je(t);S()}(!Me||4&a&&qe!==(qe="panel "+(e[2]?"":"hidden")+" svelte-yh5f2o"))&&u(N,"class",qe)},i(e){if(!Me){for(let e=0;e<He.length;e+=1)$(Ce[e]);Me=!0}},o(e){Ce=Ce.filter(Boolean);for(let e=0;e<Ce.length;e+=1)B(Ce[e]);Me=!1},d(s){s&&r(t),Ve&&Ve.d(),e[8](null),D(Ce,s),we=!1,E(Fe)}}}function C(e,t,s){let{onRemove:a}=t,{task:l={}}=t;l.links=void 0===l.links?[]:l.links;let n,o=!0;L(()=>{setTimeout(()=>{n.focus()},200)});return e.$$set=e=>{"onRemove"in e&&s(1,a=e.onRemove),"task"in e&&s(0,l=e.task)},[l,a,o,n,function(){s(0,l.links=l.links.concat({}),l)},function(e){s(0,l.links=l.links.filter(t=>t!=e),l)},function(){s(2,o=!0)},()=>{s(2,o=!o)},function(e){T[e?"unshift":"push"](()=>{n=e,s(3,n)})},function(){l.name=this.value,s(0,l)},function(){l.description=this.value,s(0,l)},function(){l.technicalLevel=j(this),s(0,l)},function(){l.km=O(this.value),s(0,l)},function(){l.months=O(this.value),s(0,l)},function(){l.intervalKm=O(this.value),s(0,l)},function(){l.intervalMonths=O(this.value),s(0,l)},function(){l.notes=this.value,s(0,l)}]}class J extends e{constructor(e){super(),t(this,e,C,H,s,{onRemove:1,task:0})}}function G(e,t,s){const a=e.slice();return a[6]=t[s],a}function X(e){let t,s;return t=new J({props:{onRemove:e[3],task:e[6]}}),{c(){b(t.$$.fragment)},l(e){N(t.$$.fragment,e)},m(e,a){A(t,e,a),s=!0},p(e,s){const a={};1&s&&(a.task=e[6]),t.$set(a)},i(e){s||($(t.$$.fragment,e),s=!0)},o(e){B(t.$$.fragment,e),s=!1},d(e){R(t,e)}}}function Q(e){let t,s,v,x,g,k,L,T,b,N,A,R,P,I,U,O,j,M,w,F,K,z,V,H,C,J,Q=e[0].tasks,W=[];for(let t=0;t<Q.length;t+=1)W[t]=X(G(e,Q,t));const Y=e=>B(W[e],1,1,()=>{W[e]=null});return{c(){t=a("form"),s=a("label"),v=l("Name:\n    "),x=a("input"),g=n(),k=a("br"),L=n(),T=a("label"),b=l("Description:\n    "),N=a("input"),A=n(),R=a("h3"),P=l("Tasks:"),I=n(),U=a("p");for(let e=0;e<W.length;e+=1)W[e].c();O=n(),j=a("p"),M=a("button"),w=l("Add Task"),F=n(),K=a("p"),z=a("button"),V=l("Download (as JSON)"),this.h()},l(e){t=o(e,"FORM",{autocomplete:!0,class:!0});var a=c(t);s=o(a,"LABEL",{class:!0});var l=c(s);v=i(l,"Name:\n    "),x=o(l,"INPUT",{class:!0,required:!0,type:!0,maxlength:!0,autocomplete:!0,placeholder:!0}),l.forEach(r),g=h(a),k=o(a,"BR",{class:!0}),L=h(a),T=o(a,"LABEL",{class:!0});var n=c(T);b=i(n,"Description:\n    "),N=o(n,"INPUT",{class:!0,required:!0,type:!0,maxlength:!0,placeholder:!0}),n.forEach(r),A=h(a),R=o(a,"H3",{class:!0});var u=c(R);P=i(u,"Tasks:"),u.forEach(r),I=h(a),U=o(a,"P",{class:!0});var f=c(U);for(let e=0;e<W.length;e+=1)W[e].l(f);f.forEach(r),O=h(a),j=o(a,"P",{class:!0});var p=c(j);M=o(p,"BUTTON",{type:!0,class:!0});var m=c(M);w=i(m,"Add Task"),m.forEach(r),p.forEach(r),F=h(a),K=o(a,"P",{class:!0});var d=c(K);z=o(d,"BUTTON",{type:!0,class:!0});var y=c(z);V=i(y,"Download (as JSON)"),y.forEach(r),d.forEach(r),a.forEach(r),this.h()},h(){u(x,"class","rounded-input svelte-aot4xx"),x.required="true",u(x,"type","text"),u(x,"maxlength","40"),u(x,"autocomplete","off"),u(x,"placeholder","Ex: Honda Africa Twin 2016-2019"),u(s,"class","svelte-aot4xx"),u(k,"class","svelte-aot4xx"),u(N,"class","rounded-input svelte-aot4xx"),N.required="true",u(N,"type","text"),u(N,"maxlength","120"),u(N,"placeholder","Ex: All variants of the Honda Africa Twin (CRF1000L) from 2016 to 2019."),u(T,"class","svelte-aot4xx"),u(R,"class","svelte-aot4xx"),u(U,"class","svelte-aot4xx"),u(M,"type","button"),u(M,"class","svelte-aot4xx"),u(j,"class","svelte-aot4xx"),u(z,"type","submit"),u(z,"class","svelte-aot4xx"),u(K,"class","svelte-aot4xx"),u(t,"autocomplete","off"),u(t,"class","svelte-aot4xx")},m(a,l){f(a,t,l),p(t,s),p(s,v),p(s,x),m(x,e[0].name),p(t,g),p(t,k),p(t,L),p(t,T),p(T,b),p(T,N),m(N,e[0].description),p(t,A),p(t,R),p(R,P),p(t,I),p(t,U);for(let e=0;e<W.length;e+=1)W[e].m(U,null);p(t,O),p(t,j),p(j,M),p(M,w),p(t,F),p(t,K),p(K,z),p(z,V),H=!0,C||(J=[d(x,"input",e[4]),d(N,"input",e[5]),d(M,"click",e[2]),d(t,"submit",q((function(){y(e[1])&&e[1].apply(this,arguments)})))],C=!0)},p(t,[s]){if(e=t,1&s&&x.value!==e[0].name&&m(x,e[0].name),1&s&&N.value!==e[0].description&&m(N,e[0].description),9&s){let t;for(Q=e[0].tasks,t=0;t<Q.length;t+=1){const a=G(e,Q,t);W[t]?(W[t].p(a,s),$(W[t],1)):(W[t]=X(a),W[t].c(),$(W[t],1),W[t].m(U,null))}for(_(),t=Q.length;t<W.length;t+=1)Y(t);S()}},i(e){if(!H){for(let e=0;e<Q.length;e+=1)$(W[e]);H=!0}},o(e){W=W.filter(Boolean);for(let e=0;e<W.length;e+=1)B(W[e]);H=!1},d(e){e&&r(t),D(W,e),C=!1,E(J)}}}function W(e,t,s){let{onSubmit:a}=t,{motorcycle:l={}}=t;return l.tasks=void 0===l.tasks?[]:l.tasks,e.$$set=e=>{"onSubmit"in e&&s(1,a=e.onSubmit),"motorcycle"in e&&s(0,l=e.motorcycle)},[l,a,function(){s(0,l.tasks=l.tasks.concat({}),l)},function(e){s(0,l.tasks=l.tasks.filter(t=>t!=e),l)},function(){l.name=this.value,s(0,l)},function(){l.description=this.value,s(0,l)}]}class Y extends e{constructor(e){super(),t(this,e,W,Q,s,{onSubmit:1,motorcycle:0})}}export{Y as M};
