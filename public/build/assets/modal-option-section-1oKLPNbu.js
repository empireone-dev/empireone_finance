import{r as l,j as e}from"./app-PvUrJiW8.js";import{C as h}from"./Close-C9uTtWE1.js";import a from"./approve-button-section-Bovnj-lK.js";import{B as m}from"./Button-CvjSp1Hx.js";import{D as p}from"./Dialog-BKjxCzi9.js";import{T as x,a as j,b as r,c as s,d as b}from"./TableRow-BYSNjp-e.js";import{I as u}from"./IconButton-BF3BQisD.js";import{D as f}from"./DialogActions-D62S0WUf.js";import"./createSvgIcon-YkvDxnXz.js";import"./DefaultPropsProvider-fJ6Czbzk.js";import"./loan-record-thunk-CEJ8FNVp.js";import"./createSimplePaletteValueFilter-r6HtAYP3.js";import"./Paper-d2hKnMdX.js";import"./useTheme-D9m5OIJo.js";import"./Modal-Cx4lTk_Q.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./useSlot-P_nQH-Vq.js";import"./utils-Bwu84FNj.js";function z({data:o}){var n;const[c,t]=l.useState(!1);l.useState(!1),l.useState(!1);const d=()=>{t(!0)},i=()=>{t(!1)};return e.jsxs(l.Fragment,{children:[e.jsx(m,{variant:"outlined",onClick:d,children:"APPROVE"}),e.jsxs(p,{fullWidth:!0,open:c,onClose:i,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[e.jsxs(x,{"aria-label":"simple table",children:[e.jsx(j,{children:e.jsxs(r,{children:[e.jsx(s,{children:e.jsx("div",{className:"font-black",children:"Loan Information (PENDING)"})}),e.jsx(s,{align:"right",children:e.jsx(u,{edge:"start",color:"inherit",onClick:i,"aria-label":"close",children:e.jsx(h,{})})})]})}),e.jsxs(b,{children:[e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Fullname"}),e.jsxs(s,{children:[o.user.employee_fname," ",o.user.employee_lname]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Position"}),e.jsx(s,{children:((n=o==null?void 0:o.employee)==null?void 0:n.position)??"NA"})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Desired Amount"}),e.jsxs(s,{children:["₱ ",o.desired_amount??0]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Term"}),e.jsxs(s,{children:[o.term," months"]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Interest"}),e.jsxs(s,{children:["₱ ",o.interest]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Net"}),e.jsxs(s,{children:["₱ ",o.net]})]}),e.jsxs(r,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[e.jsx(s,{component:"th",scope:"row",children:"Bi-Monthly Amortization"}),e.jsxs(s,{children:["₱ ",o.bi_amortization.toFixed(2)]})]})]})]}),e.jsx(f,{children:e.jsx(a,{setOpen:t,data:o})})]})]})}export{z as default};
