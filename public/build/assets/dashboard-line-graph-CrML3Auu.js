import{u as g,j as r}from"./app-0Cr446pr.js";import{C as u,a as b,L as f,P as _,e as h,p as x,b as y,c as E,f as C}from"./index-BhX8R4c9.js";u.register(b,f,_,h,x,y,E);const j=()=>{const{dashboards:i}=g(a=>a.dashboards),s=i.courseEnrollments,t=i.uniqueSemesters,d=["rgb(255, 0, 0)","rgb(0, 255, 0)","rgb(0, 0, 255)","rgb(255, 255, 0)","rgb(0, 255, 255)","rgb(255, 0, 255)","rgb(128, 0, 128)","rgb(255, 165, 0)"];let o=[];t&&s&&(o=s.map(a=>{const{enrollments:l}=a;return{...a,data:t.map(e=>{const n=l.find(c=>c.semester===e.semester&&c.academic_year===e.academic_year);return{...e,total:n?n.total:0}})}})),console.log("Processed Data:",o);const m={labels:t==null?void 0:t.map(a=>`${a.semester} ${a.academic_year}`),datasets:o==null?void 0:o.map((a,l)=>{var e;return{label:a==null?void 0:a.course_name,data:(e=a==null?void 0:a.data)==null?void 0:e.map(n=>n.total),fill:!1,borderColor:d[l],tension:.1}})},p={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Student Enrollment Analytics"}}};return r.jsx(r.Fragment,{children:t&&s&&r.jsx(C,{data:m,options:p})})};export{j as default};