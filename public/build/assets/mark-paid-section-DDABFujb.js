import{r as u,c as p,j as t,s as o,e as d}from"./app-DARyH1go.js";import{g as l}from"./loan-record-thunk-Ds_1Zz7T.js";import{p as f}from"./loan-record-payment-thunk-y4Y6OC4X.js";import{B as s}from"./Button-yOzd94Al.js";import"./DefaultPropsProvider-DrQTph9t.js";import"./createSimplePaletteValueFilter-CB325wbi.js";function k({data:a}){const[e,r]=u.useState(!1),i=p();async function n(m){if(window.confirm("Are you sure you want to mark it as paid?")){r(!0);try{await o.dispatch(f({...a,status:"Paid"})),await o.dispatch(l()),r(!1),i(d({open:!0,type:"success",message:"Loan applicant has already been approved!"}))}catch(c){console.error("Error in approving loan:",c),r(!1)}}}return t.jsxs(t.Fragment,{children:[a.status=="Unpaid"&&t.jsx(s,{disabled:e,variant:"contained",onClick:n,autoFocus:!0,fullWidth:!0,children:"MARK AS PAID"}),a.status=="Paid"&&t.jsx(s,{variant:"contained",color:"success",autoFocus:!0,fullWidth:!0,children:"PAID"})]})}export{k as default};