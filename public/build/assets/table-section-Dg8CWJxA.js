import{u as s,j as i}from"./app-lbZC4vOA.js";import{h as n}from"./moment-C5S46NFB.js";import m from"./modal-option-section-Gsum_NW7.js";import{T as c}from"./TableContainer-CIw2jegp.js";import{P as h}from"./Paper-DXhz1w8P.js";import{T as x,a as p,b as l,c as o,d as j}from"./TableRow-B19hJdXN.js";import"./Close-DQKdTc2Y.js";import"./createSvgIcon-CId6qftK.js";import"./DefaultPropsProvider-DDovwS48.js";import"./release-section-B0VNFFgQ.js";import"./loan-record-thunk-TaTlWmTW.js";import"./Button-Ch9SYbWu.js";import"./createSimplePaletteValueFilter-B-qsfPz3.js";import"./Dialog-BJWrApsl.js";import"./Modal-Cgj5QhO0.js";import"./ownerDocument-DW-IO8s5.js";import"./ownerWindow-HkKU3E4x.js";import"./useSlot-BOj7wW92.js";import"./utils-B3QBah7D.js";import"./IconButton-BRZP79q3.js";import"./DialogActions-QQoEVOVc.js";import"./useTheme-DHYDNh39.js";function E(){var r;const{loan_records:e}=s(t=>t.loan_records);return console.log("loan_records",e),i.jsx(c,{component:h,children:i.jsxs(x,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(p,{children:i.jsxs(l,{children:[i.jsx(o,{children:"Fullname"}),i.jsx(o,{children:"Loan ID"}),i.jsx(o,{children:"Desired Amount"}),i.jsx(o,{children:"Net"}),i.jsx(o,{children:"Interest"}),i.jsx(o,{children:"Bi Amortization"}),i.jsx(o,{children:"Term"}),i.jsx(o,{children:"Balance"}),i.jsx(o,{children:"Status"}),i.jsx(o,{children:"Action"})]})}),i.jsx(j,{children:(r=e==null?void 0:e.data)==null?void 0:r.map((t,a)=>{const d=n(t.dob,"YYYY-MM-DD");return n().diff(d,"years"),i.jsxs(l,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsxs(o,{children:[t.user.employee_fname," ",t.user.employee_lname]}),i.jsx(o,{children:t.loan_record_id}),i.jsx(o,{children:(t==null?void 0:t.desired_amount)??""}),i.jsx(o,{children:(t==null?void 0:t.net)??""}),i.jsx(o,{children:t.interest}),i.jsx(o,{children:t.bi_amortization.toFixed(2)}),i.jsxs(o,{children:[t.term," Months"]}),i.jsx(o,{children:t.balance==0?"FULLY PAID":t.balance}),i.jsx(o,{children:t.status}),i.jsx(o,{children:i.jsx(m,{data:t})})]},a)})})]})})}export{E as default};