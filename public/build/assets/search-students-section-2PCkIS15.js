import{j as e,u as n,i as x,r as S,v as u,s as b}from"./app-4zaeLUIG.js";import{a as v}from"./academic-year-jLIKql7A.js";import{s as f}from"./instructor-thunk-DYzt7deK.js";import{F as c,I as m,S as d}from"./Select-nmPnboQC.js";import{M as r}from"./MenuItem-SCPksU3s.js";import{B as g}from"./Modal-BEimG7iS.js";import{c as Y}from"./createSvgIcon-BA_QHjjU.js";import"./user-service-bcXBH8vy.js";import"./DefaultPropsProvider-KEunUbnd.js";import"./InputBase-Dbncs1Sn.js";import"./isHostComponent-DVu5iVWx.js";import"./index-DfeEFFw8.js";import"./useTheme-pStYO19w.js";import"./ButtonBase-DLXIb26o.js";import"./extendSxProp-CCFeVLg-.js";import"./ownerWindow-6z4QwRpV.js";import"./debounce-Be36O1Ab.js";import"./Popover-D_v2rG0t.js";import"./useSlot-DCW9KenC.js";import"./resolveComponentProps-66Eu5LAc.js";import"./Paper-Dg8SvZFW.js";import"./Grow-BENwxKdU.js";import"./utils-Cxt2Du0-.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./react-is.production.min-DUDD-a5e.js";import"./index-CQObzbwy.js";import"./useSlotProps-Dr7-rmYK.js";import"./useControlled-DjFGmbVV.js";import"./useId-BL6g8VD4.js";import"./listItemTextClasses-DmkqpYkL.js";const _=Y([e.jsx("circle",{cx:"10",cy:"8",r:"4"},"0"),e.jsx("path",{d:"M10.35 14.01C7.62 13.91 2 15.27 2 18v2h9.54c-2.47-2.76-1.23-5.89-1.19-5.99m9.08 4.01c.36-.59.57-1.28.57-2.02 0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4c.74 0 1.43-.22 2.02-.57L20.59 22 22 20.59zM16 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2"},"1")],"PersonSearch");function ee(){var p;const{sections:l}=n(s=>s.sections),{search:a}=n(s=>s.instructors);n(s=>s.courses);const{handleds:o}=n(s=>s.subjects),h=x();S.useEffect(()=>{var s;h(u({...a,section_id:(s=l==null?void 0:l.data[0])==null?void 0:s.id}))},[(p=l==null?void 0:l.data[0])==null?void 0:p.id]);function t(s){h(u({...a,[s.target.name]:s.target.value}))}async function j(s){await b.dispatch(f(a))}return console.log("handleds",o),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(c,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Subject"}),e.jsx(d,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a.subject_code??"",name:"subject_code",label:"Subject",onChange:t,children:o.map((s,i)=>e.jsx(r,{value:s.code,children:s.name},i))})]}),e.jsxs(c,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Academic Year"}),e.jsx(d,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a.academic_year??"",name:"academic_year",label:"Academic Year",onChange:t,children:v().map((s,i)=>e.jsx(r,{value:s,children:s},i))})]}),e.jsxs(c,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Year"}),e.jsxs(d,{id:"demo-simple-select",name:"year",label:"year",value:a.year??"",onChange:t,children:[e.jsx(r,{value:"1st Year",children:"1st Year"}),e.jsx(r,{value:"2nd Year",children:"2nd Year"}),e.jsx(r,{value:"3rd Year",children:"3rd Year"}),e.jsx(r,{value:"4th Year",children:"4th Year"})]})]}),e.jsxs(c,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Section"}),e.jsx(d,{id:"demo-simple-select",name:"section_id",label:"Section",value:a.section_id??"",onChange:t,children:l.data.map((s,i)=>e.jsx(r,{value:s.id,children:s.name},i))})]}),e.jsxs(c,{fullWidth:!0,children:[e.jsx(m,{id:"demo-simple-select-label",children:"Semester"}),e.jsxs(d,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a.semester??"",name:"semester",label:"Semester",onChange:t,children:[e.jsx(r,{value:"1st Semester",children:"1st Semester"}),e.jsx(r,{value:"2nd Semester",children:"2nd Semester"}),e.jsx(r,{value:"Summer",children:"Summer"})]})]}),e.jsxs(g,{onClick:j,variant:"contained",className:"w-1/2",children:[e.jsx(_,{}),"Search"]})]})})}export{ee as default};
