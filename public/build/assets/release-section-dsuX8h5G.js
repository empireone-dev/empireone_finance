import{r as c,c as l,j as p,s as e,e as u}from"./app-CNImu97b.js";import{l as d,g as f}from"./loan-record-thunk-Bpm9YgM5.js";import{h}from"./moment-C5S46NFB.js";import{B as m}from"./Button-JsEWklQB.js";import"./DefaultPropsProvider-CMIDbiw-.js";import"./createSimplePaletteValueFilter-DvsgyIzK.js";function R({data:t,setOpen:s}){const[o,a]=c.useState(!1),r=l();async function n(_){a(!0);try{await e.dispatch(d({...t,status:"Released",released_at:h().format("LLL")})),await e.dispatch(f()),s(!1),a(!1),r(u({open:!0,type:"success",message:"Loan applicant has already been release!"}))}catch(i){console.error("Error in approving loan:",i),a(!1)}}return p.jsx(m,{disabled:o,variant:"contained",onClick:n,autoFocus:!0,children:"RELEASED"})}export{R as default};