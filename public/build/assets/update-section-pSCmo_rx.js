import{r as l,u as C,j as a,s as h}from"./app-CB4Xp2J3.js";import{u as S,g as y}from"./instructor-thunk-CAmUEDkR.js";import{S as _,A as E}from"./Snackbar-QkYyS9mK.js";import{B as g}from"./Modal-1OmCapNc.js";import{E as N}from"./Edit-BfQcbc85.js";import{D as k}from"./Drawer-7R78Os0g.js";import{B as D}from"./Box-BfjfVhZy.js";import{T as n}from"./TextField-D0wYY-fx.js";import{F,I as T,S as I}from"./Select-BWcEEZ37.js";import{M as B}from"./MenuItem-BgCaGtxL.js";import{C as z}from"./CircularProgress-dNnjAym0.js";import"./user-service-CwVNGMdG.js";import"./DefaultPropsProvider-BPyW3-4X.js";import"./useSlot-BT9FRa30.js";import"./resolveComponentProps-lWwltuXh.js";import"./ButtonBase-DER0a6QF.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-yak5rwkc.js";import"./Paper-Df2NE_pW.js";import"./useTheme-DNxFxZkl.js";import"./IconButton-EGnHbTpu.js";import"./useSlotProps-D-Z-dHxw.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-d8ovLU9m.js";import"./utils-DHS7U2dH.js";import"./index-CXdS6Qlj.js";import"./Slide-asHxzpp1.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-DhUrNJf4.js";import"./useId-C7NdTQ3H.js";import"./InputBase-BhbmT0Kd.js";import"./isHostComponent-DVu5iVWx.js";import"./index-QvFU3MX5.js";import"./Popover-uNPRY9U-.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-BBo9fFeG.js";import"./listItemTextClasses-Bb3NbCwW.js";function ve({data:o}){const[v,p]=l.useState(!1),[s,i]=l.useState({}),[e,d]=l.useState({}),[j,u]=l.useState(!1),[c,m]=l.useState(!1),{departments:b}=C(t=>t.department);l.useEffect(()=>{i(o)},[]);const f=t=>()=>{p(t)};async function w(t){m(!0);const r=await h.dispatch(S(s));r.status==200?(await h.dispatch(y()),u(!0),d({}),m(!1)):(m(!1),d(r.response.data.errors))}const x=(t,r)=>{r!=="clickaway"&&(u(!1),p(!1))};return a.jsxs("div",{children:[a.jsx(_,{open:j,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:x,children:a.jsx(E,{onClose:x,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Updated!"})}),a.jsx(g,{size:"small",variant:"contained",onClick:f(!0),children:a.jsx(N,{})}),a.jsx(k,{anchor:"right",open:v,onClose:f(!1),children:a.jsx(D,{className:"w-[500px] h-full flex",role:"presentation",children:a.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[a.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[a.jsx("div",{className:"text-2xl font-black",children:"Edit Instructor"}),a.jsx(n,{onChange:t=>i({...o,[t.target.name]:t.target.value}),value:s.user_id,error:!!(e!=null&&e.user_id),helperText:(e==null?void 0:e.user_id)??"",name:"user_id",type:"text",id:"outlined-basic",label:"Employee ID",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),value:s.fname,error:!!(e!=null&&e.fname),helperText:(e==null?void 0:e.fname)??"",name:"fname",type:"text",id:"outlined-basic",label:"First Name",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),value:s.lname,error:!!(e!=null&&e.lname),helperText:(e==null?void 0:e.lname)??"",name:"lname",type:"text",id:"outlined-basic",label:"Last Name",variant:"outlined"}),a.jsx(n,{onChange:t=>i({...s,[t.target.name]:t.target.value}),error:!!(e!=null&&e.password),helperText:(e==null?void 0:e.password)??"",name:"password",type:"password",id:"outlined-basic",label:"Password",variant:"outlined"}),a.jsxs(F,{fullWidth:!0,children:[a.jsx(T,{id:"demo-simple-select-label",children:"Department"}),a.jsx(I,{id:"demo-simple-select",name:"department_id",label:"Department",value:s.department_id,onChange:t=>i({...o,[t.target.name]:t.target.value}),children:b.data.map((t,r)=>a.jsx(B,{value:t.id,children:t.name},r))})]})]}),a.jsx(g,{onClick:w,disabled:c,variant:"contained",className:" w-full",children:c?a.jsx(z,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{ve as default};