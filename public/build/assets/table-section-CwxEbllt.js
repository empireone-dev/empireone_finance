import{u as n,j as i,h as e,y as l}from"./app-4zaeLUIG.js";import d from"./update-section-CXMdaJnZ.js";import c from"./delete-section-heJTMOfs.js";import{T as x,a as h,b as j,c as a,d as r,e as b}from"./TableRow-TM8vObMc.js";import{P as f}from"./Paper-Dg8SvZFW.js";import{B as u}from"./Modal-BEimG7iS.js";import{V as T}from"./Visibility-DAG46cv6.js";import"./instructor-thunk-DYzt7deK.js";import"./user-service-bcXBH8vy.js";import"./Snackbar-BiRA8y8c.js";import"./DefaultPropsProvider-KEunUbnd.js";import"./useSlot-DCW9KenC.js";import"./resolveComponentProps-66Eu5LAc.js";import"./ButtonBase-DLXIb26o.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-BA_QHjjU.js";import"./IconButton-Ck6aPjQ-.js";import"./useTheme-pStYO19w.js";import"./useSlotProps-Dr7-rmYK.js";import"./ownerWindow-6z4QwRpV.js";import"./Grow-BENwxKdU.js";import"./utils-Cxt2Du0-.js";import"./Edit-C8HmKYwz.js";import"./Drawer-DGze2q5f.js";import"./index-CQObzbwy.js";import"./Slide-DMVtGXjE.js";import"./debounce-Be36O1Ab.js";import"./Box-DtzXDXe-.js";import"./extendSxProp-CCFeVLg-.js";import"./TextField-BOC8-Ijy.js";import"./Select-nmPnboQC.js";import"./InputBase-Dbncs1Sn.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DfeEFFw8.js";import"./Popover-D_v2rG0t.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-DjFGmbVV.js";import"./useId-BL6g8VD4.js";import"./MenuItem-SCPksU3s.js";import"./listItemTextClasses-DmkqpYkL.js";import"./CircularProgress-C34daSCh.js";import"./Delete-CeZ-2yCz.js";import"./Typography-CWneYVd9.js";function ni(){const{instructors:o}=n(t=>t.instructors);return i.jsx(x,{component:f,children:i.jsxs(h,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(j,{children:i.jsxs(a,{children:[i.jsx(r,{children:"Employee ID"}),i.jsx(r,{children:"Firstname"}),i.jsx(r,{children:"Lastname"}),i.jsx(r,{children:"Email"}),i.jsx(r,{children:"Department"}),i.jsx(r,{children:"Action"})]})}),i.jsx(b,{children:o==null?void 0:o.data.map((t,s)=>{var m;const p=e(t.dob,"YYYY-MM-DD");return e().diff(p,"years"),i.jsxs(a,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsx(r,{component:"th",scope:"row",children:t.user_id}),i.jsx(r,{children:t.fname}),i.jsx(r,{children:t.lname}),i.jsx(r,{children:t.email}),i.jsx(r,{children:((m=t==null?void 0:t.department)==null?void 0:m.name)??""}),i.jsx(r,{children:i.jsxs("div",{className:"flex gap-2",children:[i.jsx(d,{data:t}),i.jsx(c,{data:t}),i.jsx(u,{onClick:()=>l.visit(`/administrator/instructor/${t.user_id}/create_grades`),size:"small",variant:"contained",color:"success",children:i.jsx(T,{})})]})})]},s)})})]})})}export{ni as default};
