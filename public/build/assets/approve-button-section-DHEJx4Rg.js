import{r as p,c,j as u,s as t,e as d}from"./app-CbLgWqYV.js";import{l,g as f}from"./loan-record-thunk-C-NMmEnD.js";import{B as h}from"./Button-B2WYnikQ.js";import"./DefaultPropsProvider-D_YeXPSa.js";import"./createSimplePaletteValueFilter-d_IwYvX2.js";function E({data:e,setOpen:o}){const[s,a]=p.useState(!1),r=c();async function n(m){a(!0);try{await t.dispatch(l({...e,status:"Approved"})),await t.dispatch(f()),o(!1),a(!1),r(d({open:!0,type:"success",message:"Loan applicant has already been approved!"}))}catch(i){console.error("Error in approving loan:",i),a(!1)}}return u.jsx(h,{disabled:s,variant:"contained",onClick:n,autoFocus:!0,children:"APPROVED"})}export{E as default};
