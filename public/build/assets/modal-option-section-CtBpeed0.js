import{r as i,j as e}from"./app-CNImu97b.js";import{C as d}from"./Close-ChRKvtbu.js";import j from"./approve-button-section-BwJxNIOz.js";import b from"./declined-button-section-DqS7Go0Y.js";import{B as u}from"./Button-JsEWklQB.js";import{D as f}from"./Dialog-iMPZJwU1.js";import{T as y,a as C,b as r,c as o,d as g}from"./TableRow-DZ43YIsg.js";import{I as w}from"./IconButton-Cg9hvULa.js";import{D as T}from"./DialogActions-6sKhNtnp.js";import"./createSvgIcon-9g7ZtoZg.js";import"./DefaultPropsProvider-CMIDbiw-.js";import"./loan-record-thunk-Bpm9YgM5.js";import"./createSimplePaletteValueFilter-DvsgyIzK.js";import"./Paper-B9Ldy-qS.js";import"./useTheme-C9JPVmdv.js";import"./Modal-C5MnrpSE.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./useSlot-CQ89QTUh.js";import"./utils-DcvnE28P.js";function W({data:s}){var t,c,h;const[m,l]=i.useState(!1);i.useState(!1),i.useState(!1);const p=parseFloat((c=(t=s==null?void 0:s.employee)==null?void 0:t.salary)==null?void 0:c.budgetCost)*.8,x=()=>{l(!0)},n=()=>{l(!1)};return e.jsxs(i.Fragment,{children:[e.jsx(u,{variant:"outlined",onClick:x,children:"ACTION"}),e.jsxs(f,{fullWidth:!0,open:m,onClose:n,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsxs(y,{"aria-label":"simple table",children:[e.jsx(C,{children:e.jsxs(r,{children:[e.jsx(o,{children:e.jsx("div",{className:"font-black",children:"Loan Information (PENDING)"})}),e.jsx(o,{align:"right",children:e.jsx(w,{edge:"start",color:"inherit",onClick:n,"aria-label":"close",children:e.jsx(d,{})})})]})}),e.jsxs(g,{children:[e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Fullname"}),e.jsxs(o,{children:[s==null?void 0:s.user.employee_fname," ",s==null?void 0:s.user.employee_lname]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Position"}),e.jsx(o,{children:((h=s==null?void 0:s.employee)==null?void 0:h.position)??"NA"})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Desired Amount"}),e.jsxs(o,{children:["₱ ",(s==null?void 0:s.desired_amount)??0]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Maximum loan amount.(amount 80% of basic salary)."}),e.jsxs(o,{children:["₱ ",p??9600]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Term"}),e.jsxs(o,{children:[s==null?void 0:s.term," months"]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Interest"}),e.jsxs(o,{children:["₱ ",s==null?void 0:s.interest]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Net"}),e.jsxs(o,{children:["₱ ",s==null?void 0:s.net]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(o,{component:"th",scope:"row",children:"Bi-Monthly Amortization"}),e.jsxs(o,{children:["₱ ",s==null?void 0:s.bi_amortization.toFixed(2)]})]})]})]}),e.jsxs(T,{children:[e.jsx(b,{setOpen:l,data:s}),e.jsx(j,{setOpen:l,data:s})]})]})]})}export{W as default};