import{r as a,j as t,s as d}from"./app-DQDxnOfp.js";import{s as C,g as v}from"./department-thunk-D9rzl3JN.js";import{S as w,A as S}from"./Snackbar-BteSaWQ1.js";import{B as u}from"./Modal-bu-jwfa5.js";import{D as b}from"./Drawer-DKvXnFRX.js";import{B as y}from"./Box-L3NIJbfK.js";import{T as D}from"./TextField-BWkiKJ3N.js";import{C as k}from"./CircularProgress-DVWudVEg.js";import"./DefaultPropsProvider-DdVOhqmJ.js";import"./useSlot-BqF-2hfD.js";import"./resolveComponentProps-CO6ykobW.js";import"./ButtonBase-MVHKbA71.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-CZmGVfe_.js";import"./Paper-BdoXdpby.js";import"./useTheme-DQbIEwX4.js";import"./IconButton-DQw9S4be.js";import"./useSlotProps-BIvbgZtd.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-DRXRbByZ.js";import"./utils-CX4RDxMJ.js";import"./index-y3-B0pri.js";import"./Slide-BXZpRrLO.js";import"./debounce-Be36O1Ab.js";import"./extendSxProp-C8ro94IS.js";import"./Select-BSW9y4bG.js";import"./InputBase-DtegRC3b.js";import"./isHostComponent-DVu5iVWx.js";import"./index-Df825rcD.js";import"./Popover-CAGWHWNZ.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-CSSODqAg.js";import"./useId-DAVJPCuZ.js";function it(){const[x,i]=a.useState(!1),[n,o]=a.useState(!1),[l,h]=a.useState({}),[e,m]=a.useState({}),[j,p]=a.useState(!1),c=r=>()=>{i(r)};async function g(r){o(!0);const s=await d.dispatch(C(l));s.status==200?(await d.dispatch(v()),p(!0),m({}),o(!1)):(o(!1),m(s.response.data.errors))}const f=(r,s)=>{s!=="clickaway"&&(p(!1),i(!1))};return t.jsxs("div",{children:[t.jsx(w,{open:j,anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:3e3,onClose:f,children:t.jsx(S,{onClose:f,severity:"success",variant:"filled",sx:{width:"100%"},children:"Successfully Created!"})}),t.jsx(u,{variant:"contained",onClick:c(!0),children:"Create Department"}),t.jsx(b,{anchor:"right",open:x,onClose:c(!1),children:t.jsx(y,{className:"w-[500px] h-full flex",role:"presentation",children:t.jsxs("div",{className:"pt-20 px-3 w-full flex flex-col items-center justify-between pb-5",children:[t.jsxs("div",{className:"flex flex-col gap-3  w-full",children:[t.jsx("div",{className:"text-2xl font-black",children:"Create Department"}),t.jsx(D,{onChange:r=>h({...l,[r.target.name]:r.target.value}),error:!!(e!=null&&e.name),helperText:(e==null?void 0:e.name)??"",name:"name",type:"text",id:"outlined-basic",label:"Name of Department",variant:"outlined"})]}),t.jsx(u,{onClick:g,disabled:n,variant:"contained",className:" w-full",children:n?t.jsx(k,{size:24,color:"inherit"}):"Submit"})]})})})]})}export{it as default};