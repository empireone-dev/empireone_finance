import{j as t,u,c as g,R as i,r as h,s as f,y as m,i as x}from"./app-CNImu97b.js";import{P as v}from"./index-DUb9y6Co.js";import{g as y,A as j,D as S,a as w,P}from"./app-thunk-Wag7AYnr.js";import{L as b}from"./logout-section-BISqS90R.js";import{N as L}from"./notification-section-CUvskotw.js";import{y as k}from"./DefaultPropsProvider-CMIDbiw-.js";import{c as N}from"./createSvgIcon-9g7ZtoZg.js";import"./Paper-B9Ldy-qS.js";import"./useTheme-C9JPVmdv.js";import"./index-3RQeSx4h.js";import"./ListItem-B_NTsUAN.js";import"./useThemeProps-BqLnQuOS.js";import"./createSimplePaletteValueFilter-DvsgyIzK.js";import"./ownerDocument-DW-IO8s5.js";import"./Modal-C5MnrpSE.js";import"./ownerWindow-HkKU3E4x.js";import"./useSlot-CQ89QTUh.js";import"./utils-DcvnE28P.js";import"./useSlotProps-D2AP9rmw.js";import"./isHostComponent-DVu5iVWx.js";import"./Popover-CCkmaBe5.js";import"./debounce-Be36O1Ab.js";import"./Grow-D9taolCG.js";import"./IconButton-Cg9hvULa.js";import"./Toolbar-CMBuqUvn.js";import"./Box-DsZZ4-yO.js";import"./extendSxProp-BY29OVek.js";import"./index-BBmDnQGu.js";import"./Close-ChRKvtbu.js";import"./react-is.production.min-DUDD-a5e.js";import"./Button-JsEWklQB.js";import"./Typography-CNuaALS9.js";import"./listItemTextClasses-N45HMJIm.js";import"./Stack-GcMcsD9n.js";import"./Collapse-CPjrNxch.js";import"./Dialog-iMPZJwU1.js";import"./DialogContent-ntkaUua4.js";import"./DialogActions-6sKhNtnp.js";const A=N(t.jsx("path",{d:"M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2m-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3m13-6v11c0 1.1-.9 2-2 2H4v-2h17V7z"}),"Payments"),D=[{kind:"header",title:"Main items"},{segment:"dashboard",title:"Dashboard",icon:t.jsx(w,{})},{segment:"loans",title:"Loans",icon:t.jsx(A,{})},{kind:"divider"},{kind:"header",title:"Analytics"},{segment:"logout",title:"Logout",icon:t.jsx(P,{})}],T=k({cssVariables:{colorSchemeSelector:"data-toolpad-color-scheme"},colorSchemes:{light:!0,dark:!0},breakpoints:{values:{xs:0,sm:600,md:600,lg:1200,xl:1536}}});function E({children:a},n){const{pathname:e}=u(o=>o.app),{window:s}=n,p=g(),[c,r]=i.useState(!1);h.useEffect(()=>{f.dispatch(y())},[]);const d=i.useMemo(()=>({pathname:e,searchParams:new URLSearchParams,navigate:o=>{o=="/logout"?r(!0):(o=="/instructor"||o=="/students/registered"||o=="/students/enrollment"?m.visit("/employee"+o+"?page=1"):m.visit("/employee"+o),p(x(o)))}}),[e]),l=s!==void 0?s():void 0;return t.jsxs(j,{navigation:D,router:d,theme:T,window:l,branding:{logo:t.jsx("img",{src:"/images/logo.png"}),title:""},children:[t.jsx(L,{}),t.jsxs(S,{children:[t.jsx(b,{open:c,setOpen:r}),t.jsx("div",{className:"p-4",children:a})]})]})}E.propTypes={window:v.func};export{E as default};