import{i as u,m as p,r as l,a as m,j as e,s as n,b as y}from"./app-PvUrJiW8.js";import{g as _}from"./loan-record-thunk-CEJ8FNVp.js";import{B as s}from"./Button-CvjSp1Hx.js";import"./DefaultPropsProvider-fJ6Czbzk.js";import"./createSimplePaletteValueFilter-r6HtAYP3.js";async function h(a){try{return await u.post("/api/pay_loan_record",a)}catch(t){return t}}const f=window.location.hash.substring(1);f.split("&")[0];const c=p({name:"loan_record_payments",initialState:{loan_record_payments:{data:[]},loan_record_payment:{}},reducers:{setLoanRecordPayments:(a,t)=>{a.loan_record_payments.data=t.payload},setLoanRecordPayment:(a,t)=>{a.loan_record_payment=t.payload}}});c.actions;c.reducer;function g(a){return async function(t,r){return h(a)}}function k({data:a}){const[t,r]=l.useState(!1),o=m();async function i(w){if(window.confirm("Are you sure you want to mark it as paid?")){r(!0);try{await n.dispatch(g({...a,status:"Paid"})),await n.dispatch(_()),r(!1),o(y({open:!0,type:"success",message:"Loan applicant has already been approved!"}))}catch(d){console.error("Error in approving loan:",d),r(!1)}}}return e.jsxs(e.Fragment,{children:[a.status=="Unpaid"&&e.jsx(s,{disabled:t,variant:"contained",onClick:i,autoFocus:!0,fullWidth:!0,children:"MARK AS PAID"}),a.status=="Paid"&&e.jsx(s,{variant:"contained",color:"success",autoFocus:!0,fullWidth:!0,children:"PAID"})]})}export{k as default};
