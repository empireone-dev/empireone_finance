import{u as y,r as b,j as e}from"./app-B0bHOfih.js";import{K as T,a as k}from"./KeyboardArrowUp-Vs3MoLp0.js";import{T as C,a as m,e as p,c,d as s,b as u}from"./TableRow-BJDYmhgc.js";import{P as N}from"./Paper-C-sOm2Yd.js";import{I as R}from"./IconButton-DkW2QO_A.js";import{C as v}from"./Collapse-DVQpAdVl.js";import{B as z}from"./Box-DZw61azB.js";import{T as P}from"./Typography-xk2R4KBk.js";import"./createSvgIcon-BtCKQIPz.js";import"./DefaultPropsProvider-BzymfuE9.js";import"./useTheme-CiYPMNkT.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./ButtonBase-DVACMu4K.js";import"./utils-CcX-u7l0.js";import"./extendSxProp-CsbjH1Y7.js";import"./index-SVhwstkE.js";function h({categoryName:l,grades:o}){var x,j,i;return e.jsxs(z,{className:"py-6 w-full",sx:{margin:1},children:[e.jsx(P,{variant:"h6",gutterBottom:!0,component:"div",children:e.jsx("div",{className:"font-black",children:l})}),e.jsx("div",{className:"font-bold text-lg",children:"Prelim"}),e.jsxs(m,{size:"small","aria-label":"grades",children:[e.jsx(u,{children:e.jsxs(c,{children:[e.jsx(s,{children:"Score"}),e.jsx(s,{children:"Total"}),e.jsx(s,{children:"Percent"}),e.jsx(s,{children:"Remarks"}),e.jsx(s,{children:"Date"})]})}),e.jsx(p,{children:(x=o.prelim)==null?void 0:x.map((r,d)=>e.jsxs(c,{children:[e.jsx(s,{children:r.score}),e.jsx(s,{children:r.total}),e.jsxs(s,{children:[r.percent,"%"]}),e.jsx(s,{children:r.remarks}),e.jsx(s,{children:r.date})]},d))})]}),e.jsx("div",{className:"font-bold text-lg",children:"Midterm"}),e.jsxs(m,{size:"small","aria-label":"grades",children:[e.jsx(u,{children:e.jsxs(c,{children:[e.jsx(s,{children:"Score"}),e.jsx(s,{children:"Total"}),e.jsx(s,{children:"Percent"}),e.jsx(s,{children:"Remarks"}),e.jsx(s,{children:"Date"})]})}),e.jsx(p,{children:(j=o.midterm)==null?void 0:j.map((r,d)=>e.jsxs(c,{children:[e.jsx(s,{children:r.score}),e.jsx(s,{children:r.total}),e.jsxs(s,{children:[r.percent,"%"]}),e.jsx(s,{children:r.remarks}),e.jsx(s,{children:r.date})]},d))})]}),e.jsx("div",{className:"font-bold text-lg",children:"Final"}),e.jsxs(m,{size:"small","aria-label":"grades",children:[e.jsx(u,{children:e.jsxs(c,{children:[e.jsx(s,{children:"Score"}),e.jsx(s,{children:"Total"}),e.jsx(s,{children:"Percent"}),e.jsx(s,{children:"Remarks"}),e.jsx(s,{children:"Date"})]})}),e.jsx(p,{children:(i=o.final)==null?void 0:i.map((r,d)=>e.jsxs(c,{children:[e.jsx(s,{children:r.score}),e.jsx(s,{children:r.total}),e.jsxs(s,{children:[r.percent,"%"]}),e.jsx(s,{children:r.remarks}),e.jsx(s,{children:r.date})]},d))})]})]})}function S({row:l,isOpen:o,onClick:x}){var f,g;const j=l.examination.reduce((n,a)=>{const t=a.assessment.toLowerCase();return n[t]||(n[t]=[]),n[t].push(a),n},{}),i=l.quiz.reduce((n,a)=>{const t=a.assessment.toLowerCase();return n[t]||(n[t]=[]),n[t].push(a),n},{}),r=l.project.reduce((n,a)=>{const t=a.assessment.toLowerCase();return n[t]||(n[t]=[]),n[t].push(a),n},{}),d=l.class_participation.reduce((n,a)=>{const t=a.assessment.toLowerCase();return n[t]||(n[t]=[]),n[t].push(a),n},{});return e.jsxs(b.Fragment,{children:[e.jsxs(c,{sx:{"& > *":{borderBottom:"unset"},cursor:"pointer"},onClick:x,children:[e.jsxs(s,{children:[e.jsx(R,{"aria-label":"expand row",size:"small",children:o?e.jsx(T,{}):e.jsx(k,{})}),(f=l==null?void 0:l.user)==null?void 0:f.fname," ",(g=l==null?void 0:l.user)==null?void 0:g.lname]}),e.jsx(s,{component:"th",scope:"row"})]}),e.jsx(c,{children:e.jsx(s,{style:{paddingBottom:0,paddingTop:0},colSpan:6,children:e.jsxs(v,{in:o,timeout:"auto",unmountOnExit:!0,children:[e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(h,{categoryName:"Examination",grades:j??[]}),e.jsx(h,{categoryName:"Quizzes",grades:i??[]})]}),e.jsxs("div",{className:"flex gap-3 w-full",children:[e.jsx(h,{categoryName:"Projects / Assignments",grades:r??[]}),e.jsx(h,{categoryName:"Class Participation",grades:d??[]})]})]})})})]})}function U(){const{students:l}=y(i=>i.instructors),[o,x]=b.useState(null),j=i=>{x(r=>r===i?null:i)};return console.log("students",l),e.jsx(C,{component:N,children:e.jsx(m,{"aria-label":"collapsible table",children:e.jsx(p,{children:l.map((i,r)=>e.jsx(S,{row:i,isOpen:o===r,onClick:()=>j(r)},r))})})})}export{U as default};