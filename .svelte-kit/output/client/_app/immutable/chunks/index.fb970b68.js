function E(){}function se(e,t){for(const n in t)e[n]=t[n];return e}function K(e){return e()}function G(){return Object.create(null)}function v(e){e.forEach(K)}function B(e){return typeof e=="function"}function ve(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let M;function Ne(e,t){return M||(M=document.createElement("a")),M.href=t,e===M.href}function ce(e){return Object.keys(e).length===0}function le(e,...t){if(e==null)return E;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function Se(e,t,n){e.$$.on_destroy.push(le(t,n))}function Ae(e,t,n,i){if(e){const r=Q(e,t,n,i);return e[0](r)}}function Q(e,t,n,i){return e[1]&&i?se(n.ctx.slice(),e[1](i(t))):n.ctx}function ke(e,t,n,i){if(e[2]&&i){const r=e[2](i(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(t.dirty.length,r.length);for(let o=0;o<s;o+=1)u[o]=t.dirty[o]|r[o];return u}return t.dirty|r}return t.dirty}function Me(e,t,n,i,r,u){if(r){const s=Q(t,n,i,u);e.p(s,r)}}function Te(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let i=0;i<n;i++)t[i]=-1;return t}return-1}function je(e){return e??""}function Ce(e){return e&&B(e.destroy)?e.destroy:E}const U=typeof window<"u";let De=U?()=>window.performance.now():()=>Date.now(),V=U?e=>requestAnimationFrame(e):E;const b=new Set;function X(e){b.forEach(t=>{t.c(e)||(b.delete(t),t.f())}),b.size!==0&&V(X)}function qe(e){let t;return b.size===0&&V(X),{promise:new Promise(n=>{b.add(t={c:e,f:n})}),abort(){b.delete(t)}}}const Le=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;let j=!1;function oe(){j=!0}function ue(){j=!1}function ae(e,t,n,i){for(;e<t;){const r=e+(t-e>>1);n(r)<=i?e=r+1:t=r}return e}function fe(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if(e.nodeName==="HEAD"){const c=[];for(let l=0;l<t.length;l++){const f=t[l];f.claim_order!==void 0&&c.push(f)}t=c}const n=new Int32Array(t.length+1),i=new Int32Array(t.length);n[0]=-1;let r=0;for(let c=0;c<t.length;c++){const l=t[c].claim_order,f=(r>0&&t[n[r]].claim_order<=l?r+1:ae(1,r,d=>t[n[d]].claim_order,l))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,r=Math.max(_,r)}const u=[],s=[];let o=t.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(t[c-1]);o>=c;o--)s.push(t[o]);o--}for(;o>=0;o--)s.push(t[o]);u.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<u.length&&s[c].claim_order>=u[l].claim_order;)l++;const f=l<u.length?u[l]:null;e.insertBefore(s[c],f)}}function de(e,t){if(j){for(fe(e),(e.actual_end_child===void 0||e.actual_end_child!==null&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);e.actual_end_child!==null&&e.actual_end_child.claim_order===void 0;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?(t.claim_order!==void 0||t.parentNode!==e)&&e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else(t.parentNode!==e||t.nextSibling!==null)&&e.appendChild(t)}function Oe(e,t,n){j&&!n?de(e,t):(t.parentNode!==e||t.nextSibling!=n)&&e.insertBefore(t,n||null)}function _e(e){e.parentNode&&e.parentNode.removeChild(e)}function Pe(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function he(e){return document.createElement(e)}function me(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function H(e){return document.createTextNode(e)}function ze(){return H(" ")}function Be(){return H("")}function He(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Fe(e){return function(t){return t.preventDefault(),e.call(this,t)}}function Re(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function pe(e){return Array.from(e.childNodes)}function ye(e){e.claim_info===void 0&&(e.claim_info={last_index:0,total_claimed:0})}function Y(e,t,n,i,r=!1){ye(e);const u=(()=>{for(let s=e.claim_info.last_index;s<e.length;s++){const o=e[s];if(t(o)){const c=n(o);return c===void 0?e.splice(s,1):e[s]=c,r||(e.claim_info.last_index=s),o}}for(let s=e.claim_info.last_index-1;s>=0;s--){const o=e[s];if(t(o)){const c=n(o);return c===void 0?e.splice(s,1):e[s]=c,r?c===void 0&&e.claim_info.last_index--:e.claim_info.last_index=s,o}}return i()})();return u.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,u}function Z(e,t,n,i){return Y(e,r=>r.nodeName===t,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||u.push(o.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(t))}function We(e,t,n){return Z(e,t,n,he)}function Ge(e,t,n){return Z(e,t,n,me)}function ge(e,t){return Y(e,n=>n.nodeType===3,n=>{const i=""+t;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(t),!0)}function Ie(e){return ge(e," ")}function Je(e,t){t=""+t,e.data!==t&&(e.data=t)}function Ke(e,t,n,i){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,i?"important":"")}function Qe(e,t,n){e.classList[n?"add":"remove"](t)}function Ue(e,t){const n=[];let i=0;for(const r of t.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${e}_END`?(i-=1,n.push(r)):u===`HEAD_${e}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ve(e,t){return new e(t)}let S;function N(e){S=e}function ee(){if(!S)throw new Error("Function called outside component initialization");return S}function Xe(e){ee().$$.on_mount.push(e)}function Ye(e){ee().$$.after_update.push(e)}const x=[],I=[];let $=[];const J=[],te=Promise.resolve();let P=!1;function ne(){P||(P=!0,te.then(ie))}function Ze(){return ne(),te}function z(e){$.push(e)}const O=new Set;let w=0;function ie(){if(w!==0)return;const e=S;do{try{for(;w<x.length;){const t=x[w];w++,N(t),we(t.$$)}}catch(t){throw x.length=0,w=0,t}for(N(null),x.length=0,w=0;I.length;)I.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];O.has(n)||(O.add(n),n())}$.length=0}while(x.length);for(;J.length;)J.pop()();P=!1,O.clear(),N(e)}function we(e){if(e.fragment!==null){e.update(),v(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}function xe(e){const t=[],n=[];$.forEach(i=>e.indexOf(i)===-1?t.push(i):n.push(i)),n.forEach(i=>i()),$=t}const T=new Set;let g;function et(){g={r:0,c:[],p:g}}function tt(){g.r||v(g.c),g=g.p}function re(e,t){e&&e.i&&(T.delete(e),e.i(t))}function nt(e,t,n,i){if(e&&e.o){if(T.has(e))return;T.add(e),g.c.push(()=>{T.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}else i&&i()}function it(e,t){e.d(1),t.delete(e.key)}function rt(e,t,n,i,r,u,s,o,c,l,f,_){let d=e.length,m=u.length,h=d;const C={};for(;h--;)C[e[h].key]=h;const A=[],D=new Map,q=new Map,F=[];for(h=m;h--;){const a=_(r,u,h),p=n(a);let y=s.get(p);y?i&&F.push(()=>y.p(a,t)):(y=l(p,a),y.c()),D.set(p,A[h]=y),p in C&&q.set(p,Math.abs(h-C[p]))}const R=new Set,W=new Set;function L(a){re(a,1),a.m(o,f),s.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=A[m-1],p=e[d-1],y=a.key,k=p.key;a===p?(f=a.first,d--,m--):D.has(k)?!s.has(y)||R.has(y)?L(a):W.has(k)?d--:q.get(y)>q.get(k)?(W.add(y),L(a)):(R.add(k),d--):(c(p,s),d--)}for(;d--;){const a=e[d];D.has(a.key)||c(a,s)}for(;m;)L(A[m-1]);return v(F),A}function st(e){e&&e.c()}function ct(e,t){e&&e.l(t)}function be(e,t,n,i){const{fragment:r,after_update:u}=e.$$;r&&r.m(t,n),i||z(()=>{const s=e.$$.on_mount.map(K).filter(B);e.$$.on_destroy?e.$$.on_destroy.push(...s):v(s),e.$$.on_mount=[]}),u.forEach(z)}function $e(e,t){const n=e.$$;n.fragment!==null&&(xe(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Ee(e,t){e.$$.dirty[0]===-1&&(x.push(e),ne(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function lt(e,t,n,i,r,u,s,o=[-1]){const c=S;N(e);const l=e.$$={fragment:null,ctx:[],props:u,update:E,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:G(),dirty:o,skip_bound:!1,root:t.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(e,t.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&Ee(e,_)),d}):[],l.update(),f=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,t.target){if(t.hydrate){oe();const _=pe(t.target);l.fragment&&l.fragment.l(_),_.forEach(_e)}else l.fragment&&l.fragment.c();t.intro&&re(e.$$.fragment),be(e,t.target,t.anchor,t.customElement),ue(),ie()}N(c)}class ot{$destroy(){$e(this,1),this.$destroy=E}$on(t,n){if(!B(n))return E;const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!ce(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}export{be as A,$e as B,me as C,Ge as D,Ne as E,de as F,E as G,Se as H,Ae as I,Me as J,Te as K,ke as L,De as M,qe as N,He as O,v as P,Ue as Q,Qe as R,ot as S,Ce as T,rt as U,Le as V,it as W,B as X,Fe as Y,Pe as Z,je as _,ze as a,Oe as b,Ie as c,nt as d,Be as e,tt as f,re as g,_e as h,lt as i,Ye as j,he as k,We as l,pe as m,Re as n,Xe as o,Ke as p,H as q,ge as r,ve as s,Ze as t,Je as u,et as v,I as w,Ve as x,st as y,ct as z};