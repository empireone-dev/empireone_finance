import{r as c,c as l,j as p,s as t,e as u}from"./app-Df293AES.js";import{l as d,g as f}from"./loan-record-thunk-BfC1rx6G.js";import{h}from"./moment-C5S46NFB.js";import{B as m}from"./Button-12ARyf5L.js";import"./DefaultPropsProvider-BmWCYhTN.js";import"./createSimplePaletteValueFilter-diuU9Obj.js";function R({data:e,setOpen:s}){const[o,a]=c.useState(!1),r=l();async function n(_){a(!0);try{await t.dispatch(d({...e,status:"Released",released_at:h().format("LLL")})),await t.dispatch(f()),s(!1),a(!1),r(u({open:!0,type:"success",message:"Loan applicant has already been approved!"}))}catch(i){console.error("Error in approving loan:",i),a(!1)}}return p.jsx(m,{disabled:o,variant:"contained",onClick:n,autoFocus:!0,children:"RELEASED"})}export{R as default};
