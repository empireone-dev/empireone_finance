import{u as s,j as i}from"./app-PvUrJiW8.js";import{h as n}from"./moment-C5S46NFB.js";import m from"./modal-option-section-D0Rc5Y6t.js";import{T as c}from"./TableContainer-xnfwiNDF.js";import{P as h}from"./Paper-d2hKnMdX.js";import{T as x,a as p,b as l,c as o,d as j}from"./TableRow-BYSNjp-e.js";import"./Close-C9uTtWE1.js";import"./createSvgIcon-YkvDxnXz.js";import"./DefaultPropsProvider-fJ6Czbzk.js";import"./declined-button-section-BmIxr2ZW.js";import"./loan-record-thunk-CEJ8FNVp.js";import"./Button-CvjSp1Hx.js";import"./createSimplePaletteValueFilter-r6HtAYP3.js";import"./release-section-sVt31xR9.js";import"./Dialog-BKjxCzi9.js";import"./Modal-Cx4lTk_Q.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./useSlot-P_nQH-Vq.js";import"./utils-Bwu84FNj.js";import"./IconButton-BF3BQisD.js";import"./DialogActions-D62S0WUf.js";import"./useTheme-D9m5OIJo.js";function H(){var r;const{loan_records:e}=s(t=>t.loan_records);return console.log("loan_records",e),i.jsx(c,{component:h,children:i.jsxs(x,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(p,{children:i.jsxs(l,{children:[i.jsx(o,{children:"Fullname"}),i.jsx(o,{children:"Loan ID"}),i.jsx(o,{children:"Desired Amount"}),i.jsx(o,{children:"Net"}),i.jsx(o,{children:"Interest"}),i.jsx(o,{children:"Bi Amortization"}),i.jsx(o,{children:"Term"}),i.jsx(o,{children:"Balance"}),i.jsx(o,{children:"Status"}),i.jsx(o,{children:"Action"})]})}),i.jsx(j,{children:(r=e==null?void 0:e.data)==null?void 0:r.map((t,a)=>{const d=n(t.dob,"YYYY-MM-DD");return n().diff(d,"years"),i.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsxs(o,{children:[t.user.employee_fname," ",t.user.employee_lname]}),i.jsx(o,{children:t.loan_record_id}),i.jsx(o,{children:(t==null?void 0:t.desired_amount)??""}),i.jsx(o,{children:(t==null?void 0:t.net)??""}),i.jsx(o,{children:t.interest}),i.jsx(o,{children:t.bi_amortization.toFixed(2)}),i.jsxs(o,{children:[t.term," Months"]}),i.jsx(o,{children:t.balance==0?"FULLY PAID":t.balance}),i.jsx(o,{children:t.status}),i.jsx(o,{children:i.jsx(m,{data:t})})]},a)})})]})})}export{H as default};
