import{r as a,f as ye,j as M,g as Re}from"./app-0Cr446pr.js";import{g as ue,a as de,s as V,u as fe,c as G,b as pe,m as Te}from"./DefaultPropsProvider-Bue_U7EK.js";import{o as j}from"./ownerDocument-DW-IO8s5.js";import{o as X}from"./ownerWindow-HkKU3E4x.js";import{u as $,a as te,s as ne,b as oe}from"./createSimplePaletteValueFilter-BmyParhM.js";import{u as Y,e as ve}from"./useSlot-CQaegQ-F.js";import{u as Pe}from"./Paper-DovkDiMN.js";import{g as J,T as ke,r as Ie,a as re}from"./utils-1eV8cu5T.js";function se(...e){return e.reduce((t,o)=>o==null?t:function(...s){t.apply(this,s),o.apply(this,s)},()=>{})}let ie=0;function Se(e){const[t,o]=a.useState(e),n=e||t;return a.useEffect(()=>{t==null&&(ie+=1,o(`mui-${ie}`))},[t]),n}const ae=ye.useId;function dt(e){if(ae!==void 0){const t=ae();return e??t}return Se(e)}function Ce(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function we(e){const t=j(e);return t.body===e?X(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function W(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function ce(e){return parseInt(X(e).getComputedStyle(e).paddingRight,10)||0}function Me(e){const o=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,n=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return o||n}function le(e,t,o,n,s){const r=[t,o,...n];[].forEach.call(e.children,i=>{const l=r.indexOf(i)===-1,u=!Me(i);l&&u&&W(i,s)})}function q(e,t){let o=-1;return e.some((n,s)=>t(n)?(o=s,!0):!1),o}function Ne(e,t){const o=[],n=e.container;if(!t.disableScrollLock){if(we(n)){const i=Ce(j(n));o.push({value:n.style.paddingRight,property:"padding-right",el:n}),n.style.paddingRight=`${ce(n)+i}px`;const l=j(n).querySelectorAll(".mui-fixed");[].forEach.call(l,u=>{o.push({value:u.style.paddingRight,property:"padding-right",el:u}),u.style.paddingRight=`${ce(u)+i}px`})}let r;if(n.parentNode instanceof DocumentFragment)r=j(n).body;else{const i=n.parentElement,l=X(n);r=(i==null?void 0:i.nodeName)==="HTML"&&l.getComputedStyle(i).overflowY==="scroll"?i:n}o.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{o.forEach(({value:r,el:i,property:l})=>{r?i.style.setProperty(l,r):i.style.removeProperty(l)})}}function Fe(e){const t=[];return[].forEach.call(e.children,o=>{o.getAttribute("aria-hidden")==="true"&&t.push(o)}),t}class Ae{constructor(){this.modals=[],this.containers=[]}add(t,o){let n=this.modals.indexOf(t);if(n!==-1)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&W(t.modalRef,!1);const s=Fe(o);le(o,t.mount,t.modalRef,s,!0);const r=q(this.containers,i=>i.container===o);return r!==-1?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:o,restore:null,hiddenSiblings:s}),n)}mount(t,o){const n=q(this.containers,r=>r.modals.indexOf(t)!==-1),s=this.containers[n];s.restore||(s.restore=Ne(s,o))}remove(t,o=!0){const n=this.modals.indexOf(t);if(n===-1)return n;const s=q(this.containers,i=>i.modals.indexOf(t)!==-1),r=this.containers[s];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(n,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&W(t.modalRef,o),le(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(s,1);else{const i=r.modals[r.modals.length-1];i.modalRef&&W(i.modalRef,!1)}return n}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}const Oe=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function Be(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function De(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=n=>e.ownerDocument.querySelector(`input[type="radio"]${n}`);let o=t(`[name="${e.name}"]:checked`);return o||(o=t(`[name="${e.name}"]`)),o!==e}function Le(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||De(e))}function je(e){const t=[],o=[];return Array.from(e.querySelectorAll(Oe)).forEach((n,s)=>{const r=Be(n);r===-1||!Le(n)||(r===0?t.push(n):o.push({documentOrder:s,tabIndex:r,node:n}))}),o.sort((n,s)=>n.tabIndex===s.tabIndex?n.documentOrder-s.documentOrder:n.tabIndex-s.tabIndex).map(n=>n.node).concat(t)}function Ue(){return!0}function Ke(e){const{children:t,disableAutoFocus:o=!1,disableEnforceFocus:n=!1,disableRestoreFocus:s=!1,getTabbable:r=je,isEnabled:i=Ue,open:l}=e,u=a.useRef(!1),h=a.useRef(null),b=a.useRef(null),E=a.useRef(null),R=a.useRef(null),x=a.useRef(!1),d=a.useRef(null),N=$(J(t),d),T=a.useRef(null);a.useEffect(()=>{!l||!d.current||(x.current=!o)},[o,l]),a.useEffect(()=>{if(!l||!d.current)return;const c=j(d.current);return d.current.contains(c.activeElement)||(d.current.hasAttribute("tabIndex")||d.current.setAttribute("tabIndex","-1"),x.current&&d.current.focus()),()=>{s||(E.current&&E.current.focus&&(u.current=!0,E.current.focus()),E.current=null)}},[l]),a.useEffect(()=>{if(!l||!d.current)return;const c=j(d.current),g=P=>{T.current=P,!(n||!i()||P.key!=="Tab")&&c.activeElement===d.current&&P.shiftKey&&(u.current=!0,b.current&&b.current.focus())},v=()=>{var B,C;const P=d.current;if(P===null)return;if(!c.hasFocus()||!i()||u.current){u.current=!1;return}if(P.contains(c.activeElement)||n&&c.activeElement!==h.current&&c.activeElement!==b.current)return;if(c.activeElement!==R.current)R.current=null;else if(R.current!==null)return;if(!x.current)return;let k=[];if((c.activeElement===h.current||c.activeElement===b.current)&&(k=r(d.current)),k.length>0){const D=!!((B=T.current)!=null&&B.shiftKey&&((C=T.current)==null?void 0:C.key)==="Tab"),O=k[0],U=k[k.length-1];typeof O!="string"&&typeof U!="string"&&(D?U.focus():O.focus())}else P.focus()};c.addEventListener("focusin",v),c.addEventListener("keydown",g,!0);const y=setInterval(()=>{c.activeElement&&c.activeElement.tagName==="BODY"&&v()},50);return()=>{clearInterval(y),c.removeEventListener("focusin",v),c.removeEventListener("keydown",g,!0)}},[o,n,s,i,l,r]);const I=c=>{E.current===null&&(E.current=c.relatedTarget),x.current=!0,R.current=c.target;const g=t.props.onFocus;g&&g(c)},S=c=>{E.current===null&&(E.current=c.relatedTarget),x.current=!0};return M.jsxs(a.Fragment,{children:[M.jsx("div",{tabIndex:l?0:-1,onFocus:S,ref:h,"data-testid":"sentinelStart"}),a.cloneElement(t,{ref:N,onFocus:I}),M.jsx("div",{tabIndex:l?0:-1,onFocus:S,ref:b,"data-testid":"sentinelEnd"})]})}function We(e){return typeof e=="function"?e():e}const $e=a.forwardRef(function(t,o){const{children:n,container:s,disablePortal:r=!1}=t,[i,l]=a.useState(null),u=$(J(n),o);if(te(()=>{r||l(We(s)||document.body)},[s,r]),te(()=>{if(i&&!r)return ne(o,i),()=>{ne(o,null)}},[o,i,r]),r){if(a.isValidElement(n)){const h={ref:u};return a.cloneElement(n,h)}return M.jsx(a.Fragment,{children:n})}return M.jsx(a.Fragment,{children:i&&Re.createPortal(n,i)})}),ze={entering:{opacity:1},entered:{opacity:1}},He=a.forwardRef(function(t,o){const n=Pe(),s={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{addEndListener:r,appear:i=!0,children:l,easing:u,in:h,onEnter:b,onEntered:E,onEntering:R,onExit:x,onExited:d,onExiting:N,style:T,timeout:I=s,TransitionComponent:S=ke,...c}=t,g=a.useRef(null),v=$(g,J(l),o),y=m=>w=>{if(m){const f=g.current;w===void 0?m(f):m(f,w)}},P=y(R),k=y((m,w)=>{Ie(m);const f=re({style:T,timeout:I,easing:u},{mode:"enter"});m.style.webkitTransition=n.transitions.create("opacity",f),m.style.transition=n.transitions.create("opacity",f),b&&b(m,w)}),B=y(E),C=y(N),D=y(m=>{const w=re({style:T,timeout:I,easing:u},{mode:"exit"});m.style.webkitTransition=n.transitions.create("opacity",w),m.style.transition=n.transitions.create("opacity",w),x&&x(m)}),O=y(d),U=m=>{r&&r(g.current,m)};return M.jsx(S,{appear:i,in:h,nodeRef:g,onEnter:k,onEntered:B,onEntering:P,onExit:D,onExited:O,onExiting:C,addEndListener:U,timeout:I,...c,children:(m,w)=>a.cloneElement(l,{style:{opacity:0,visibility:m==="exited"&&!h?"hidden":void 0,...ze[m],...T,...l.props.style},ref:v,...w})})});function Ye(e){return ue("MuiBackdrop",e)}de("MuiBackdrop",["root","invisible"]);const qe=e=>{const{classes:t,invisible:o}=e;return pe({root:["root",o&&"invisible"]},Ye,t)},Ge=V("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.invisible&&t.invisible]}})({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",variants:[{props:{invisible:!0},style:{backgroundColor:"transparent"}}]}),Ve=a.forwardRef(function(t,o){const n=fe({props:t,name:"MuiBackdrop"}),{children:s,className:r,component:i="div",invisible:l=!1,open:u,components:h={},componentsProps:b={},slotProps:E={},slots:R={},TransitionComponent:x,transitionDuration:d,...N}=n,T={...n,component:i,invisible:l},I=qe(T),S={transition:x,root:h.Root,...R},c={...b,...E},g={slots:S,slotProps:c},[v,y]=Y("root",{elementType:Ge,externalForwardedProps:g,className:G(I.root,r),ownerState:T}),[P,k]=Y("transition",{elementType:He,externalForwardedProps:g,ownerState:T});return delete k.ownerState,M.jsx(P,{in:u,timeout:d,...N,...k,children:M.jsx(v,{"aria-hidden":!0,...y,classes:I,ref:o,children:s})})});function Xe(e){return typeof e=="function"?e():e}function Je(e){return e?e.props.hasOwnProperty("in"):!1}const Qe=new Ae;function Ze(e){const{container:t,disableEscapeKeyDown:o=!1,disableScrollLock:n=!1,manager:s=Qe,closeAfterTransition:r=!1,onTransitionEnter:i,onTransitionExited:l,children:u,onClose:h,open:b,rootRef:E}=e,R=a.useRef({}),x=a.useRef(null),d=a.useRef(null),N=$(d,E),[T,I]=a.useState(!b),S=Je(u);let c=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(c=!1);const g=()=>j(x.current),v=()=>(R.current.modalRef=d.current,R.current.mount=x.current,R.current),y=()=>{s.mount(v(),{disableScrollLock:n}),d.current&&(d.current.scrollTop=0)},P=oe(()=>{const f=Xe(t)||g().body;s.add(v(),f),d.current&&y()}),k=a.useCallback(()=>s.isTopModal(v()),[s]),B=oe(f=>{x.current=f,f&&(b&&k()?y():d.current&&W(d.current,c))}),C=a.useCallback(()=>{s.remove(v(),c)},[c,s]);a.useEffect(()=>()=>{C()},[C]),a.useEffect(()=>{b?P():(!S||!r)&&C()},[b,C,S,r,P]);const D=f=>p=>{var F;(F=f.onKeyDown)==null||F.call(f,p),!(p.key!=="Escape"||p.which===229||!k())&&(o||(p.stopPropagation(),h&&h(p,"escapeKeyDown")))},O=f=>p=>{var F;(F=f.onClick)==null||F.call(f,p),p.target===p.currentTarget&&h&&h(p,"backdropClick")};return{getRootProps:(f={})=>{const p=ve(e);delete p.onTransitionEnter,delete p.onTransitionExited;const F={...p,...f};return{role:"presentation",...F,onKeyDown:D(F),ref:N}},getBackdropProps:(f={})=>{const p=f;return{"aria-hidden":!0,...p,onClick:O(p),open:b}},getTransitionProps:()=>{const f=()=>{I(!1),i&&i()},p=()=>{I(!0),l&&l(),r&&C()};return{onEnter:se(f,u==null?void 0:u.props.onEnter),onExited:se(p,u==null?void 0:u.props.onExited)}},rootRef:N,portalRef:B,isTopModal:k,exited:T,hasTransition:S}}function _e(e){return ue("MuiModal",e)}de("MuiModal",["root","hidden","backdrop"]);const et=e=>{const{open:t,exited:o,classes:n}=e;return pe({root:["root",!t&&o&&"hidden"],backdrop:["backdrop"]},_e,n)},tt=V("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.open&&o.exited&&t.hidden]}})(Te(({theme:e})=>({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0,variants:[{props:({ownerState:t})=>!t.open&&t.exited,style:{visibility:"hidden"}}]}))),nt=V(Ve,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),ft=a.forwardRef(function(t,o){const n=fe({name:"MuiModal",props:t}),{BackdropComponent:s=nt,BackdropProps:r,classes:i,className:l,closeAfterTransition:u=!1,children:h,container:b,component:E,components:R={},componentsProps:x={},disableAutoFocus:d=!1,disableEnforceFocus:N=!1,disableEscapeKeyDown:T=!1,disablePortal:I=!1,disableRestoreFocus:S=!1,disableScrollLock:c=!1,hideBackdrop:g=!1,keepMounted:v=!1,onBackdropClick:y,onClose:P,onTransitionEnter:k,onTransitionExited:B,open:C,slotProps:D={},slots:O={},theme:U,...m}=n,w={...n,closeAfterTransition:u,disableAutoFocus:d,disableEnforceFocus:N,disableEscapeKeyDown:T,disablePortal:I,disableRestoreFocus:S,disableScrollLock:c,hideBackdrop:g,keepMounted:v},{getRootProps:f,getBackdropProps:p,getTransitionProps:F,portalRef:me,isTopModal:he,exited:Q,hasTransition:Z}=Ze({...w,rootRef:o}),K={...w,exited:Q},A=et(K),z={};if(h.props.tabIndex===void 0&&(z.tabIndex="-1"),Z){const{onEnter:L,onExited:H}=F();z.onEnter=L,z.onExited=H}const _={slots:{root:R.Root,backdrop:R.Backdrop,...O},slotProps:{...x,...D}},[be,ge]=Y("root",{elementType:tt,externalForwardedProps:_,getSlotProps:f,additionalProps:{ref:o,as:E},ownerState:K,className:G(l,A==null?void 0:A.root,!K.open&&K.exited&&(A==null?void 0:A.hidden))}),[Ee,ee]=Y("backdrop",{elementType:s,externalForwardedProps:_,additionalProps:r,getSlotProps:L=>p({...L,onClick:H=>{y&&y(H),L!=null&&L.onClick&&L.onClick(H)}}),className:G(r==null?void 0:r.className,A==null?void 0:A.backdrop),ownerState:K}),xe=$(r==null?void 0:r.ref,ee.ref);return!v&&!C&&(!Z||Q)?null:M.jsx($e,{ref:me,container:b,disablePortal:I,children:M.jsxs(be,{...ge,...m,children:[!g&&s?M.jsx(Ee,{...ee,ref:xe}):null,M.jsx(Ke,{disableEnforceFocus:N,disableAutoFocus:d,disableRestoreFocus:S,isEnabled:he,open:C,children:a.cloneElement(h,z)})]})})});export{Ve as B,He as F,ft as M,$e as P,Ke as a,Ce as g,dt as u};