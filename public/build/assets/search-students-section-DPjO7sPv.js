import{u as n,i as x,r as b,x as h,j as e,s as S}from"./app-CcFxKgAD.js";import{a as f}from"./academic-year-DpND9pzg.js";import{s as v}from"./instructor-thunk-Cgj4FQqi.js";import{F as m,I as d,S as c}from"./Select-1tlIs-Yj.js";import{M as r}from"./MenuItem-DLxh1JzN.js";import{B as Y}from"./Button-DebYElXm.js";import{P as _}from"./PersonSearch-BYUpLNPk.js";import"./user-service-D-rG01MN.js";import"./DefaultPropsProvider-CP8Dzdx4.js";import"./InputBase-kwyMu21R.js";import"./isHostComponent-DVu5iVWx.js";import"./index-C7QlkSNc.js";import"./useTheme-BAygJoIP.js";import"./ButtonBase-DSh1E41x.js";import"./extendSxProp-BQ60it6R.js";import"./ownerWindow-CO8Ksk3k.js";import"./debounce-Be36O1Ab.js";import"./Popover-rJp2u0B9.js";import"./useSlot-BkWWeJSN.js";import"./resolveComponentProps-DWerkNmX.js";import"./Modal-CSdbskgH.js";import"./utils-B0SWmCla.js";import"./Paper-CNqsZyLv.js";import"./Grow-R3vvtVcN.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./react-is.production.min-DUDD-a5e.js";import"./index-4kJsEyVd.js";import"./useSlotProps-nnbFR5-n.js";import"./useControlled-CX5DjXqW.js";import"./useId-K_MTrqA2.js";import"./createSvgIcon-Hk2aX3dH.js";import"./listItemTextClasses-C8sEiXa3.js";function se(){var u;const{sections:l}=n(s=>s.sections),{search:a}=n(s=>s.instructors);n(s=>s.courses);const{handleds:o}=n(s=>s.subjects),p=x();b.useEffect(()=>{var s;p(h({...a,section_id:(s=l==null?void 0:l.data[0])==null?void 0:s.id}))},[(u=l==null?void 0:l.data[0])==null?void 0:u.id]);function t(s){p(h({...a,[s.target.name]:s.target.value}))}async function j(s){await S.dispatch(v(a))}return console.log("handleds",o),e.jsx("div",{className:"w-full",children:e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(m,{fullWidth:!0,children:[e.jsx(d,{id:"demo-simple-select-label",children:"Subject"}),e.jsx(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a.subject_code??"",name:"subject_code",label:"Subject",onChange:t,children:o.map((s,i)=>e.jsx(r,{value:s.code,children:s.name},i))})]}),e.jsxs(m,{fullWidth:!0,children:[e.jsx(d,{id:"demo-simple-select-label",children:"Academic Year"}),e.jsx(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a.academic_year??"",name:"academic_year",label:"Academic Year",onChange:t,children:f().map((s,i)=>e.jsx(r,{value:s,children:s},i))})]}),e.jsxs(m,{fullWidth:!0,children:[e.jsx(d,{id:"demo-simple-select-label",children:"Year"}),e.jsxs(c,{id:"demo-simple-select",name:"year",label:"year",value:a.year??"",onChange:t,children:[e.jsx(r,{value:"1st Year",children:"1st Year"}),e.jsx(r,{value:"2nd Year",children:"2nd Year"}),e.jsx(r,{value:"3rd Year",children:"3rd Year"}),e.jsx(r,{value:"4th Year",children:"4th Year"})]})]}),e.jsxs(m,{fullWidth:!0,children:[e.jsx(d,{id:"demo-simple-select-label",children:"Section"}),e.jsx(c,{id:"demo-simple-select",name:"section_id",label:"Section",value:a.section_id??"",onChange:t,children:l.data.map((s,i)=>e.jsx(r,{value:s.id,children:s.name},i))})]}),e.jsxs(m,{fullWidth:!0,children:[e.jsx(d,{id:"demo-simple-select-label",children:"Semester"}),e.jsxs(c,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:a.semester??"",name:"semester",label:"Semester",onChange:t,children:[e.jsx(r,{value:"1st Semester",children:"1st Semester"}),e.jsx(r,{value:"2nd Semester",children:"2nd Semester"}),e.jsx(r,{value:"Summer",children:"Summer"})]})]}),e.jsxs(Y,{onClick:j,variant:"contained",className:"w-1/2",children:[e.jsx(_,{}),"Search"]})]})})}export{se as default};