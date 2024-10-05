import{r,u as C,j as a,s as x}from"./app-DQDxnOfp.js";import{a as w,g as y}from"./instructor-thunk-oJKajH-j.js";import{S,A as T}from"./Snackbar-BteSaWQ1.js";import{B as h}from"./Modal-bu-jwfa5.js";import{D as _}from"./Drawer-DKvXnFRX.js";import{B as D}from"./Box-L3NIJbfK.js";import{T as n}from"./TextField-BWkiKJ3N.js";import{F as N,I as k,S as I}from"./Select-BSW9y4bG.js";import{M as E}from"./MenuItem-BTYMnbQC.js";import{C as F}from"./CircularProgress-DVWudVEg.js";import"./user-service-D804pACj.js";import"./DefaultPropsProvider-DdVOhqmJ.js";import"./useSlot-BqF-2hfD.js";import"./resolveComponentProps-CO6ykobW.js";import"./ButtonBase-MVHKbA71.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-CZmGVfe_.js";import"./Paper-BdoXdpby.js";import"./useTheme-DQbIEwX4.js";import"./IconButton-DQw9S4be.js";import"./useSlotProps-BIvbgZtd.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-DRXRbByZ.js";import"./utils-CX4RDxMJ.js";import"./index-y3-B0pri.js";import"./Slide-BXZpRrLO.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-C8ro94IS.js";import"./useId-DAVJPCuZ.js";import"./InputBase-DtegRC3b.js";import"./isHostComponent-DVu5iVWx.js";import"./index-Df825rcD.js";import"./Popover-CAGWHWNZ.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-CSSODqAg.js";import"./listItemTextClasses-Bo94VE3q.js";function xe(){const[g,m]=r.useState(!1),[d,o]=r.useState(!1),[s,i]=r.useState({}),[e,p]=r.useState({}),[b,u]=r.useState(!1),{departments:v}=C(t=>t.department),c=t=>()=>{m(t)};async function j(t){o(!0);const l=await x.dispatch(w({...s,user_type:2}));l.status==200?(await x.dispatch(y()),u(!0),p({}),o(!1)):(o(!1),p(l.response.data.errors))}const f=(t,l)=>{l!=="clickaway"&&(u(!1),m(!1))};return a.jsxs("div",{children:[a.jsx(S,{open:b,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:f,children:a.jsx(T,{onClose:f,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),a.jsx(h,{variant:"contained",onClick:c(!0),children:"Create Instructor"}),a.jsx(_,{anchor:"right",open:g,onClose:c(!1),children:a.jsx(D,{className:"w-[500px] h-full flex",role:"presentation",children:a.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[a.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[a.jsx("div",{className:"text-2xl font-black",children:"Create Instructor"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.user_id),helperText:(e==null?void 0:e.user_id)??"",name:"user_id",type:"text",id:"outlined-basic",label:"Employee ID",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.fname),helperText:(e==null?void 0:e.fname)??"",name:"fname",type:"text",id:"outlined-basic",label:"First Name",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.lname),helperText:(e==null?void 0:e.lname)??"",name:"lname",type:"text",id:"outlined-basic",label:"Last Name",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.email),helperText:(e==null?void 0:e.email)??"",name:"email",type:"email",id:"outlined-basic",label:"Email",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.password),helperText:(e==null?void 0:e.password)??"",name:"password",type:"password",id:"outlined-basic",label:"Password",variant:"outlined"}),a.jsxs(N,{fullWidth:!0,children:[a.jsx(k,{id:"demo-simple-select-label",children:"Department"}),a.jsx(I,{id:"demo-simple-select",name:"department_id",label:"Department",onChange:t=>i({...s,[t.target.name]:t.target.value}),children:v.data.map((t,l)=>a.jsx(E,{value:t.id,children:t.name},l))})]}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.dob),helperText:(e==null?void 0:e.dob)??"",name:"dob",type:"date",id:"outlined-basic",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.address),helperText:(e==null?void 0:e.address)??"",name:"address",id:"outlined-basic",label:"Address",variant:"outlined"})]}),a.jsx(h,{onClick:j,disabled:d,variant:"contained",className:" w-full",children:d?a.jsx(F,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{xe as default};