import{r as t,j as e}from"./app-CNImu97b.js";import{C}from"./Close-ChRKvtbu.js";import a from"./mark-paid-section-DfeVTmdU.js";import w from"./pay-all-section-B0kl8kHb.js";import{B as A}from"./Button-JsEWklQB.js";import{D as y}from"./Dialog-iMPZJwU1.js";import{T as j,a as g,b as o,c as s,d as P}from"./TableRow-DZ43YIsg.js";import{I as T}from"./IconButton-Cg9hvULa.js";import{F as _}from"./FormControlLabel-DnvXXFcc.js";import{C as D}from"./Checkbox-HqrPgygg.js";import"./createSvgIcon-9g7ZtoZg.js";import"./DefaultPropsProvider-CMIDbiw-.js";import"./loan-record-thunk-Bpm9YgM5.js";import"./loan-record-payment-thunk-DGS5Ivqs.js";import"./TextField-CYF3kkoP.js";import"./useSlot-CQ89QTUh.js";import"./createSimplePaletteValueFilter-DvsgyIzK.js";import"./InputBase-D7sf9kdI.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BBmDnQGu.js";import"./useTheme-C9JPVmdv.js";import"./extendSxProp-BY29OVek.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Popover-CCkmaBe5.js";import"./Modal-C5MnrpSE.js";import"./Paper-B9Ldy-qS.js";import"./utils-DcvnE28P.js";import"./Grow-D9taolCG.js";import"./react-is.production.min-DUDD-a5e.js";import"./index-3RQeSx4h.js";import"./useSlotProps-D2AP9rmw.js";import"./useThemeProps-BqLnQuOS.js";import"./MenuItem-ClaMpa16.js";import"./listItemTextClasses-N45HMJIm.js";import"./Typography-CNuaALS9.js";function pe({data:r}){var x;const[n,h]=t.useState(!1),[i,m]=t.useState(!1),b=()=>{h(!0)};t.useEffect(()=>{n&&m(!1)},[n]);const p=()=>{h(!1)};let d=[];return r!=null&&r.loan_records&&(d=[...r==null?void 0:r.loan_records].sort((l,c)=>{const u=new Date(l.due_date),f=new Date(c.due_date);return u-f})),e.jsxs(t.Fragment,{children:[e.jsx(A,{variant:"outlined",onClick:b,fullWidth:!0,children:"PAYMENT"}),e.jsxs(y,{fullWidth:!0,open:n,onClose:p,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsxs(j,{"aria-label":"simple table",children:[e.jsx(g,{children:e.jsxs(o,{children:[e.jsx(s,{children:e.jsx("div",{className:"font-black",children:"Loan Information (CHECK PAYMENT)"})}),e.jsx(s,{align:"right",children:e.jsx(T,{edge:"start",color:"inherit",onClick:p,"aria-label":"close",children:e.jsx(C,{})})})]})}),e.jsxs(P,{children:[e.jsxs(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Fullname"}),e.jsxs(s,{children:[r==null?void 0:r.user.employee_fname," ",r==null?void 0:r.user.employee_lname]})]}),e.jsxs(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Position"}),e.jsx(s,{children:((x=r==null?void 0:r.employee)==null?void 0:x.position)??"NA"})]}),e.jsxs(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Desired Amount"}),e.jsxs(s,{children:["₱ ",(r==null?void 0:r.desired_amount)??0]})]}),e.jsxs(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Term"}),e.jsxs(s,{children:[r==null?void 0:r.term," months"]})]}),e.jsxs(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Interest"}),e.jsxs(s,{children:["₱ ",r==null?void 0:r.interest]})]}),e.jsxs(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Net"}),e.jsxs(s,{children:["₱ ",r==null?void 0:r.net]})]}),e.jsxs(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Balance"}),e.jsxs(s,{children:["₱ ",r==null?void 0:r.balance.toFixed(2)]})]})]})]}),e.jsxs(j,{"aria-label":"simple table",children:[e.jsx(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:e.jsxs(s,{colSpan:3,children:[e.jsx(_,{control:e.jsx(D,{name:"isPayAll",value:i,onChange:l=>m(l.target.checked)}),label:"Is Pay All?"}),i&&e.jsx(w,{data:r})]})}),!i&&e.jsxs(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Due Date"}),e.jsx(s,{children:"Amount"}),e.jsx(s,{children:"Action"})]}),!i&&d.map((l,c)=>e.jsxs(o,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:l.due_date}),e.jsxs(s,{children:["₱ ",r==null?void 0:r.bi_amortization.toFixed(2)]}),e.jsx(s,{children:e.jsx(a,{data:l})})]},c))]})]})]})}export{pe as default};