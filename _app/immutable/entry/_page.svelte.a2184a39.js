import{S as T,i as R,s as U,k as h,q as y,a as E,l as p,m as g,r as $,h as o,c as D,b as j,D as t,E as H,C as ue,n as w,u as J,y as K,z as O,A as Q,g as W,d as X,B as Y}from"../chunks/index.13786dfa.js";function he(d){let e,n,m,r,c;return{c(){e=h("h3"),n=y("Bio:"),m=E(),r=h("p"),c=y("3rd year computer science student at innopolis university")},l(a){e=p(a,"H3",{});var _=g(e);n=$(_,"Bio:"),_.forEach(o),m=D(a),r=p(a,"P",{});var f=g(r);c=$(f,"3rd year computer science student at innopolis university"),f.forEach(o)},m(a,_){j(a,e,_),t(e,n),j(a,m,_),j(a,r,_),t(r,c)},p:H,i:H,o:H,d(a){a&&o(e),a&&o(m),a&&o(r)}}}class pe extends T{constructor(e){super(),R(this,e,null,he,U,{})}}const _e=""+new URL("../assets/loading.1e745bb5.jpg",import.meta.url).href;function ge(d){let e,n,m,r,c,a,_,f,v,u,i;return{c(){e=h("div"),n=h("h3"),m=y(d[0]),r=E(),c=h("img"),_=E(),f=h("h4"),v=y(d[3]),u=E(),i=y(d[4]),this.h()},l(l){e=p(l,"DIV",{id:!0,class:!0});var s=g(e);n=p(s,"H3",{});var A=g(n);m=$(A,d[0]),A.forEach(o),r=D(s),c=p(s,"IMG",{src:!0,alt:!0}),_=D(s),f=p(s,"H4",{});var b=g(f);v=$(b,d[3]),u=D(b),i=$(b,d[4]),b.forEach(o),s.forEach(o),this.h()},h(){ue(c.src,a=d[1])||w(c,"src",a),w(c,"alt",d[2]),w(e,"id","joke"),w(e,"class","svelte-14aprtu")},m(l,s){j(l,e,s),t(e,n),t(n,m),t(e,r),t(e,c),t(e,_),t(e,f),t(f,v),t(f,u),t(f,i)},p(l,[s]){s&1&&J(m,l[0]),s&2&&!ue(c.src,a=l[1])&&w(c,"src",a),s&4&&w(c,"alt",l[2]),s&8&&J(v,l[3]),s&16&&J(i,l[4])},i:H,o:H,d(l){l&&o(e)}}}async function Z(){let n=await(await fetch("https://fwd.innopolis.app/api/hw2?email=m.awadallah@innopolis.university")).json(),m=Number(n);return console.log(m),m}function de(d,e,n){let m="Loading comic",r=_e,c="loading",a,_;async function f(u){var i="https://getxkcd.vercel.app/api/comic?num="+u;let s=await(await fetch(i)).json();n(0,m=s.title),n(1,r=s.img),n(2,c=s.alt);const A=parseInt(s.year),b=parseInt(s.month),M=parseInt(s.day),P=new Date(A,b-1,M),L={weekday:"long",year:"numeric",month:"long",day:"numeric"};n(3,a=P.toLocaleDateString("ar-EG",L)),n(4,_=P.toLocaleDateString("en-US",L))}Z().then(u=>v(u)).catch(u=>console.log(u.message));function v(u){console.log(u),f(u).catch(i=>console.log(i.message))}return[m,r,c,a,_,Z,f,v]}class ve extends T{constructor(e){super(),R(this,e,de,ge,U,{getComicID:5,getComic:6,processComicID:7})}get getComicID(){return Z}get getComic(){return this.$$.ctx[6]}get processComicID(){return this.$$.ctx[7]}}function ye(d){let e,n,m,r,c,a,_,f,v,u,i,l,s,A,b,M,P,L,x,z,k,S,N,V,G,q,F;return{c(){e=h("h3"),n=y("Main projects:"),m=E(),r=h("ul"),c=h("li"),a=h("a"),_=y("Basic Delivery system"),f=E(),v=h("li"),u=h("a"),i=y("Remote file system"),l=E(),s=h("li"),A=h("a"),b=y("Accompaniment Generation"),M=E(),P=h("li"),L=h("a"),x=y("Multiple worlds modelling of system errors"),z=E(),k=h("li"),S=h("a"),N=y("Distributed system using raft algorithm"),V=E(),G=h("li"),q=h("a"),F=y("Differential-equations solver"),this.h()},l(C){e=p(C,"H3",{});var B=g(e);n=$(B,"Main projects:"),B.forEach(o),m=D(C),r=p(C,"UL",{});var I=g(r);c=p(I,"LI",{});var ee=g(c);a=p(ee,"A",{href:!0});var te=g(a);_=$(te,"Basic Delivery system"),te.forEach(o),ee.forEach(o),f=D(I),v=p(I,"LI",{});var re=g(v);u=p(re,"A",{href:!0});var ae=g(u);i=$(ae,"Remote file system"),ae.forEach(o),re.forEach(o),l=D(I),s=p(I,"LI",{});var se=g(s);A=p(se,"A",{href:!0});var oe=g(A);b=$(oe,"Accompaniment Generation"),oe.forEach(o),se.forEach(o),M=D(I),P=p(I,"LI",{});var ne=g(P);L=p(ne,"A",{href:!0});var ie=g(L);x=$(ie,"Multiple worlds modelling of system errors"),ie.forEach(o),ne.forEach(o),z=D(I),k=p(I,"LI",{});var le=g(k);S=p(le,"A",{href:!0});var ce=g(S);N=$(ce,"Distributed system using raft algorithm"),ce.forEach(o),le.forEach(o),V=D(I),G=p(I,"LI",{});var me=g(G);q=p(me,"A",{href:!0});var fe=g(q);F=$(fe,"Differential-equations solver"),fe.forEach(o),me.forEach(o),I.forEach(o),this.h()},h(){w(a,"href","https://github.com/Maves1/SSADProject"),w(u,"href","https://github.com/PATH242/System-network-Adminstration-project"),w(A,"href","https://github.com/PATH242/Accompaniment-Generation"),w(L,"href","https://github.com/PATH242/Internship-codes-2021"),w(S,"href","https://github.com/mariammaher550/raft-grpc"),w(q,"href","https://github.com/PATH242/Differential-equations")},m(C,B){j(C,e,B),t(e,n),j(C,m,B),j(C,r,B),t(r,c),t(c,a),t(a,_),t(r,f),t(r,v),t(v,u),t(u,i),t(r,l),t(r,s),t(s,A),t(A,b),t(r,M),t(r,P),t(P,L),t(L,x),t(r,z),t(r,k),t(k,S),t(S,N),t(r,V),t(r,G),t(G,q),t(q,F)},p:H,i:H,o:H,d(C){C&&o(e),C&&o(m),C&&o(r)}}}class $e extends T{constructor(e){super(),R(this,e,null,ye,U,{})}}function Ee(d){let e,n,m,r,c,a,_,f,v,u;return n=new pe({}),r=new $e({}),a=new ve({}),{c(){e=h("p"),K(n.$$.fragment),m=E(),K(r.$$.fragment),c=E(),K(a.$$.fragment),_=E(),f=h("h3"),v=y("Connect on:")},l(i){e=p(i,"P",{});var l=g(e);O(n.$$.fragment,l),m=D(l),O(r.$$.fragment,l),c=D(l),O(a.$$.fragment,l),_=D(l),l.forEach(o),f=p(i,"H3",{});var s=g(f);v=$(s,"Connect on:"),s.forEach(o)},m(i,l){j(i,e,l),Q(n,e,null),t(e,m),Q(r,e,null),t(e,c),Q(a,e,null),t(e,_),j(i,f,l),t(f,v),u=!0},p:H,i(i){u||(W(n.$$.fragment,i),W(r.$$.fragment,i),W(a.$$.fragment,i),u=!0)},o(i){X(n.$$.fragment,i),X(r.$$.fragment,i),X(a.$$.fragment,i),u=!1},d(i){i&&o(e),Y(n),Y(r),Y(a),i&&o(f)}}}class Ie extends T{constructor(e){super(),R(this,e,null,Ee,U,{})}}export{Ie as default};