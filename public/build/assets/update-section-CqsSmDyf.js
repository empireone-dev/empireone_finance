import{r as n,u as w,j as e,s as v}from"./app-omUNyjzv.js";import{u as k,g as I}from"./subject-thunk-BYmY1KlH.js";import{a as N}from"./academic-year-C6aMm3Jl.js";import{S as E,A as F}from"./Snackbar-Dz7gOaef.js";import{B as b}from"./Modal-CNH0lrZ1.js";import{E as A}from"./Edit-BrJiEbxV.js";import{D as B}from"./Drawer-WCcvh9I0.js";import{B as D}from"./Box-RdddCxhl.js";import{T as g}from"./TextField-iCpMh_rU.js";import{F as o,I as m,S as c}from"./Select-hxIEynWP.js";import{M as r}from"./MenuItem-DLz4QJDp.js";import{C as T}from"./CircularProgress-5SrN-7rm.js";import"./DefaultPropsProvider-VQKvwWmR.js";import"./useSlot-BJX2j-m7.js";import"./resolveComponentProps-CyQwpA92.js";import"./ButtonBase-DgU_byNd.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-QzAHz-7Z.js";import"./Paper-D9NQaLyB.js";import"./useTheme-DFbGCw3n.js";import"./IconButton-C1HpFZye.js";import"./useSlotProps-COFXV-j8.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-iQ_WIjqf.js";import"./utils-tDi9NdlV.js";import"./index-CQAXQtBe.js";import"./Slide-h9ROQ5uP.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-Dir5kXy-.js";import"./useId-DFXX_8az.js";import"./InputBase-DF531pHd.js";import"./isHostComponent-DVu5iVWx.js";import"./index-CuTuWY8S.js";import"./Popover-DfKuNKZD.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-Dy34LR35.js";import"./listItemTextClasses-jPZP3obW.js";function be({data:S}){const[y,u]=n.useState(!1),[a,l]=n.useState({}),[s,p]=n.useState({}),[C,h]=n.useState(!1),[x,d]=n.useState(!1),{instructors:_}=w(t=>t.instructors);n.useEffect(()=>{l(S)},[]);const f=t=>()=>{u(t)};async function Y(t){d(!0);const i=await v.dispatch(k({id:a.id,code:a.code,name:a.name,semester:a.semester,academic_year:a.academic_year,year:a.year,instructor_id:a.instructor_id}));i.status==200?(await v.dispatch(I()),h(!0),p({}),d(!1)):(d(!1),p(i.response.data.errors))}const j=(t,i)=>{i!=="clickaway"&&(h(!1),u(!1))};return e.jsxs("div",{children:[e.jsx(E,{open:C,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:j,children:e.jsx(F,{onClose:j,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Updated!"})}),e.jsx(b,{size:"small",variant:"contained",onClick:f(!0),children:e.jsx(A,{})}),e.jsx(B,{anchor:"right",open:y,onClose:f(!1),children:e.jsx(D,{className:"w-[500px] h-full flex",role:"presentation",children:e.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[e.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[e.jsx("div",{className:"text-2xl font-black",children:"Update subject"}),e.jsx(g,{onChange:t=>l({...a,[t.target.name]:t.target.value}),error:!!(s!=null&&s.name),helperText:(s==null?void 0:s.name)??"",name:"name",type:"text",value:a.name,id:"outlined-basic",label:"Name of Subject",variant:"outlined"}),e.jsx(g,{onChange:t=>l({...a,[t.target.name]:t.target.value}),error:!!(s!=null&&s.code),helperText:(s==null?void 0:s.code)??"",value:a.code,name:"code",type:"text",id:"outlined-basic",label:"Subject Code",variant:"outlined"}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Academic Year"}),e.jsx(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:(a==null?void 0:a.academic_year)??"",name:"academic_year",label:"Academic Year",onChange:t=>l({...a,[t.target.name]:t.target.value}),children:N().map((t,i)=>e.jsx(r,{value:t,children:t},i))})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Semester"}),e.jsxs(c,{id:"demo-simple-select",name:"semester",label:"Semester",value:(a==null?void 0:a.semester)??"",onChange:t=>l({...a,[t.target.name]:t.target.value}),children:[e.jsx(r,{value:"1st Semester",children:"1st Semester"}),e.jsx(r,{value:"2nd Semester",children:"2nd Semester"}),e.jsx(r,{value:"Summer",children:"Summer"})]})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Instructor"}),e.jsx(c,{id:"demo-simple-select",name:"instructor_id",label:"Instructor",value:a.instructor_id,onChange:t=>l({...a,[t.target.name]:t.target.value}),children:_.data.map((t,i)=>e.jsxs(r,{value:t.user_id,children:[t.fname," ",t.lname]}))})]}),e.jsxs(o,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Year"}),e.jsxs(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"year",label:"Year",value:a.year,onChange:t=>l({...a,[t.target.name]:t.target.value}),children:[e.jsx(r,{value:"1st Year",children:"1st Year"}),e.jsx(r,{value:"2nd Year",children:"2nd Year"}),e.jsx(r,{value:"3rd Year",children:"3rd Year"}),e.jsx(r,{value:"4th Year",children:"4th Year"})]})]})]}),e.jsx(b,{onClick:Y,disabled:x,variant:"contained",className:" w-full",children:x?e.jsx(T,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{be as default};
