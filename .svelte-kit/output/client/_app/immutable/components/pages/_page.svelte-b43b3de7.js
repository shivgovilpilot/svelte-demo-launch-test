import{R as z,T as tt,S as X,i as Y,s as Z,e as v,E as L,a as $,t as U,c as g,b as _,F as A,f,g as D,d as j,o as n,z as F,h as H,j as r,r as J,k as Q,n as K,w as et,l as st,I as rt,m as at,J as nt,G as ot,K as lt,O as ct,P as it,Q as dt}from"../../chunks/index-9b4b4e1c.js";import{w as ut}from"../../chunks/index-776f5eed.js";function W(t){return Object.prototype.toString.call(t)==="[object Date]"}function V(t,s,e,a){if(typeof e=="number"||W(e)){const o=a-e,l=(e-s)/(t.dt||1/60),i=t.opts.stiffness*o,c=t.opts.damping*l,p=(i-c)*t.inv_mass,u=(l+p)*t.dt;return Math.abs(u)<t.opts.precision&&Math.abs(o)<t.opts.precision?a:(t.settled=!1,W(e)?new Date(e.getTime()+u):e+u)}else{if(Array.isArray(e))return e.map((o,l)=>V(t,s[l],e[l],a[l]));if(typeof e=="object"){const o={};for(const l in e)o[l]=V(t,s[l],e[l],a[l]);return o}else throw new Error(`Cannot spring ${typeof e} values`)}}function ft(t,s={}){const e=ut(t),{stiffness:a=.15,damping:o=.8,precision:l=.01}=s;let i,c,p,u=t,M=t,S=1,x=0,E=!1;function O(h,m={}){M=h;const T=p={};return t==null||m.hard||b.stiffness>=1&&b.damping>=1?(E=!0,i=z(),u=h,e.set(t=M),Promise.resolve()):(m.soft&&(x=1/((m.soft===!0?.5:+m.soft)*60),S=0),c||(i=z(),E=!1,c=tt(k=>{if(E)return E=!1,c=null,!1;S=Math.min(S+x,1);const w={inv_mass:S,opts:b,settled:!0,dt:(k-i)*60/1e3},y=V(w,u,t,M);return i=k,u=t,e.set(t=y),w.settled&&(c=null),!w.settled})),new Promise(k=>{c.promise.then(()=>{T===p&&k()})}))}const b={set:O,update:(h,m)=>O(h(M,t),m),subscribe:e.subscribe,stiffness:a,damping:o,precision:l};return b}function mt(t){let s,e,a,o,l,i,c,p,u=Math.floor(t[1]+1)+"",M,S,x,E=Math.floor(t[1])+"",O,b,h,m,T,k,w;return{c(){s=v("div"),e=v("button"),a=L("svg"),o=L("path"),l=$(),i=v("div"),c=v("div"),p=v("strong"),M=U(u),S=$(),x=v("strong"),O=U(E),b=$(),h=v("button"),m=L("svg"),T=L("path"),this.h()},l(y){s=g(y,"DIV",{class:!0});var d=_(s);e=g(d,"BUTTON",{"aria-label":!0,class:!0});var I=_(e);a=A(I,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var R=_(a);o=A(R,"path",{d:!0,class:!0}),_(o).forEach(f),R.forEach(f),I.forEach(f),l=D(d),i=g(d,"DIV",{class:!0});var B=_(i);c=g(B,"DIV",{class:!0,style:!0});var C=_(c);p=g(C,"STRONG",{class:!0,"aria-hidden":!0});var N=_(p);M=j(N,u),N.forEach(f),S=D(C),x=g(C,"STRONG",{class:!0});var P=_(x);O=j(P,E),P.forEach(f),C.forEach(f),B.forEach(f),b=D(d),h=g(d,"BUTTON",{"aria-label":!0,class:!0});var G=_(h);m=A(G,"svg",{"aria-hidden":!0,viewBox:!0,class:!0});var q=_(m);T=A(q,"path",{d:!0,class:!0}),_(T).forEach(f),q.forEach(f),G.forEach(f),d.forEach(f),this.h()},h(){n(o,"d","M0,0.5 L1,0.5"),n(o,"class","svelte-y96mxt"),n(a,"aria-hidden","true"),n(a,"viewBox","0 0 1 1"),n(a,"class","svelte-y96mxt"),n(e,"aria-label","Decrease the counter by one"),n(e,"class","svelte-y96mxt"),n(p,"class","hidden svelte-y96mxt"),n(p,"aria-hidden","true"),n(x,"class","svelte-y96mxt"),n(c,"class","counter-digits svelte-y96mxt"),F(c,"transform","translate(0, "+100*t[2]+"%)"),n(i,"class","counter-viewport svelte-y96mxt"),n(T,"d","M0,0.5 L1,0.5 M0.5,0 L0.5,1"),n(T,"class","svelte-y96mxt"),n(m,"aria-hidden","true"),n(m,"viewBox","0 0 1 1"),n(m,"class","svelte-y96mxt"),n(h,"aria-label","Increase the counter by one"),n(h,"class","svelte-y96mxt"),n(s,"class","counter svelte-y96mxt")},m(y,d){H(y,s,d),r(s,e),r(e,a),r(a,o),r(s,l),r(s,i),r(i,c),r(c,p),r(p,M),r(c,S),r(c,x),r(x,O),r(s,b),r(s,h),r(h,m),r(m,T),k||(w=[J(e,"click",t[4]),J(h,"click",t[5])],k=!0)},p(y,[d]){d&2&&u!==(u=Math.floor(y[1]+1)+"")&&Q(M,u),d&2&&E!==(E=Math.floor(y[1])+"")&&Q(O,E),d&4&&F(c,"transform","translate(0, "+100*y[2]+"%)")},i:K,o:K,d(y){y&&f(s),k=!1,et(w)}}}function pt(t,s){return(t%s+s)%s}function ht(t,s,e){let a,o,l=0;const i=ft();st(t,i,u=>e(1,o=u));const c=()=>e(0,l-=1),p=()=>e(0,l+=1);return t.$$.update=()=>{t.$$.dirty&1&&i.set(l),t.$$.dirty&2&&e(2,a=pt(o,1))},[l,o,a,i,c,p]}class _t extends X{constructor(s){super(),Y(this,s,ht,mt,Z,{})}}const vt=""+new URL("../../assets/svelte-welcome-c18bcf5a.webp",import.meta.url).href,gt=""+new URL("../../assets/svelte-welcome-6c300099.png",import.meta.url).href;function yt(t){let s,e,a,o,l,i,c,p,u,M,S,x,E,O,b,h,m,T,k,w,y;return w=new _t({}),{c(){s=v("meta"),e=$(),a=v("section"),o=v("h1"),l=v("span"),i=v("picture"),c=v("source"),p=$(),u=v("img"),S=U(`

		to your new`),x=v("br"),E=U("SvelteKit app"),O=$(),b=v("h2"),h=U("try editing "),m=v("strong"),T=U("src/routes/+page.svelte"),k=$(),rt(w.$$.fragment),this.h()},l(d){const I=at("svelte-t32ptj",document.head);s=g(I,"META",{name:!0,content:!0}),I.forEach(f),e=D(d),a=g(d,"SECTION",{class:!0});var R=_(a);o=g(R,"H1",{class:!0});var B=_(o);l=g(B,"SPAN",{class:!0});var C=_(l);i=g(C,"PICTURE",{});var N=_(i);c=g(N,"SOURCE",{srcset:!0,type:!0}),p=D(N),u=g(N,"IMG",{src:!0,alt:!0,class:!0}),N.forEach(f),C.forEach(f),S=j(B,`

		to your new`),x=g(B,"BR",{}),E=j(B,"SvelteKit app"),B.forEach(f),O=D(R),b=g(R,"H2",{});var P=_(b);h=j(P,"try editing "),m=g(P,"STRONG",{});var G=_(m);T=j(G,"src/routes/+page.svelte"),G.forEach(f),P.forEach(f),k=D(R),nt(w.$$.fragment,R),R.forEach(f),this.h()},h(){document.title="Home",n(s,"name","description"),n(s,"content","Svelte demo app"),n(c,"srcset",vt),n(c,"type","image/webp"),ot(u.src,M=gt)||n(u,"src",M),n(u,"alt","Welcome"),n(u,"class","svelte-19xx0bt"),n(l,"class","welcome svelte-19xx0bt"),n(o,"class","svelte-19xx0bt"),n(a,"class","svelte-19xx0bt")},m(d,I){r(document.head,s),H(d,e,I),H(d,a,I),r(a,o),r(o,l),r(l,i),r(i,c),r(i,p),r(i,u),r(o,S),r(o,x),r(o,E),r(a,O),r(a,b),r(b,h),r(b,m),r(m,T),r(a,k),lt(w,a,null),y=!0},p:K,i(d){y||(ct(w.$$.fragment,d),y=!0)},o(d){it(w.$$.fragment,d),y=!1},d(d){f(s),d&&f(e),d&&f(a),dt(w)}}}class wt extends X{constructor(s){super(),Y(this,s,null,yt,Z,{})}}export{wt as default};