import{u as s,j as i,h as n}from"./app-y1rag3B6.js";import c from"./update-section-Cvpveu9T.js";import x from"./delete-section-jUC_OodE.js";import h from"./add-enrollment-section-7Dvg_ka7.js";import{T as j,a as b,b as f,c as p,d as o,e as u}from"./TableRow-eFfGQjZI.js";import{P as T}from"./Paper-B6ertVN0.js";import"./student-thunk-DlJPe3x4.js";import"./Snackbar-D72C-FYl.js";import"./DefaultPropsProvider-P21UKgst.js";import"./useSlot-r7Uep_YH.js";import"./resolveComponentProps-CpSXl1wZ.js";import"./ButtonBase-uIdGj_ea.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-RHsXJ-LT.js";import"./IconButton-UbLo4pOA.js";import"./useTheme-BexII04O.js";import"./useSlotProps-DomT0ugK.js";import"./Modal-DMjM8gUU.js";import"./ownerWindow-6z4QwRpV.js";import"./utils-BkrdOhea.js";import"./Grow-D5gwgent.js";import"./Edit-iRrXrL6X.js";import"./Drawer-SwpFR5tR.js";import"./index-H7D3G1rN.js";import"./Slide-CWF9xhAv.js";import"./debounce-Be36O1Ab.js";import"./Box-CVwlxSgh.js";import"./extendSxProp-Do5N4VLF.js";import"./TextField-IUTJTyXb.js";import"./Select-DGqrL5LK.js";import"./InputBase-DJkSRKF7.js";import"./isHostComponent-DVu5iVWx.js";import"./index-uQOUMjJ8.js";import"./Popover-CkagVUBg.js";import"./react-is.production.min-DUDD-a5e.js";import"./useControlled-CmTtYR0b.js";import"./useId-BU7uB5fp.js";import"./MenuItem-BK0SHxeh.js";import"./listItemTextClasses-DDQJR2be.js";import"./CircularProgress-CDV3ypm1.js";import"./Delete-DHMIWhbD.js";import"./Typography-DzGpmCc3.js";import"./academic-year-l8BSYDJ9.js";import"./enrollment-thunk-Co0OTUm1.js";import"./PersonAdd-BEu0w126.js";function si(){const{students:r}=s(t=>t.students);return i.jsx(j,{component:T,children:i.jsxs(b,{sx:{minWidth:650},"aria-label":"simple table",children:[i.jsx(f,{children:i.jsxs(p,{children:[i.jsx(o,{children:"Student ID"}),i.jsx(o,{children:"Firstname"}),i.jsx(o,{children:"Lastname"}),i.jsx(o,{children:"Email"}),i.jsx(o,{children:"Department"}),i.jsx(o,{children:"Course"}),i.jsx(o,{children:"Age"}),i.jsx(o,{children:"Address"}),i.jsx(o,{children:"Action"})]})}),i.jsx(u,{children:r==null?void 0:r.data.map((t,a)=>{var m,e;const l=n(t.dob,"YYYY-MM-DD"),d=n().diff(l,"years");return i.jsxs(p,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[i.jsx(o,{component:"th",scope:"row",children:t.user_id}),i.jsx(o,{children:t.fname}),i.jsx(o,{children:t.lname}),i.jsx(o,{children:t.email}),i.jsx(o,{children:((m=t==null?void 0:t.department)==null?void 0:m.name)??""}),i.jsx(o,{children:((e=t==null?void 0:t.course)==null?void 0:e.name)??""}),i.jsx(o,{children:d}),i.jsx(o,{children:t.address}),i.jsx(o,{children:i.jsxs("div",{className:"flex gap-2",children:[!t.enrollment&&i.jsx(h,{data:t}),i.jsx(c,{data:t}),i.jsx(x,{data:t})]})})]},a)})})]})})}export{si as default};
