import{r as c,c as l,j as p,s as a,e as d}from"./app-CbLgWqYV.js";import{l as u,g as f}from"./loan-record-thunk-C-NMmEnD.js";import{B as h}from"./Button-B2WYnikQ.js";import"./DefaultPropsProvider-D_YeXPSa.js";import"./createSimplePaletteValueFilter-d_IwYvX2.js";function y({data:e,setOpen:o}){const[r,t]=c.useState(!1),s=l();async function n(m){t(!0);try{await a.dispatch(u({...e,status:"Declined"})),await a.dispatch(f()),s(d({open:!0,type:"error",message:"Loan applicant has already been declined!"})),o(!1),t(!1)}catch(i){console.error("Error in approving loan:",i),t(!1)}}return p.jsx(h,{color:"error",disabled:r,variant:"contained",onClick:n,autoFocus:!0,children:"DECLINED"})}export{y as default};
