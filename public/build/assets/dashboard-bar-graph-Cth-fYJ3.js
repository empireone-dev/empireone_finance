import{j as m}from"./app-CbLgWqYV.js";import{C as p,a as d,L as g,B as _,p as y,b as u,c as b,d as h}from"./index-CqOIAFXK.js";p.register(d,g,_,y,u,b);const S=()=>{const t=[{semester:"Spring",academic_year:"2023"},{semester:"Fall",academic_year:"2023"},{semester:"Spring",academic_year:"2024"}],n=[{course_name:"Math 101",enrollments:[{semester:"Spring",academic_year:"2023",total:50},{semester:"Fall",academic_year:"2023",total:45},{semester:"Spring",academic_year:"2024",total:60}]},{course_name:"Physics 101",enrollments:[{semester:"Spring",academic_year:"2023",total:40},{semester:"Fall",academic_year:"2023",total:50},{semester:"Spring",academic_year:"2024",total:55}]}],r=["rgb(255, 0, 0)","rgb(0, 255, 0)"],o=n.map(a=>({label:a.course_name,data:t.map(e=>{const s=a.enrollments.find(l=>l.semester===e.semester&&l.academic_year===e.academic_year);return s?s.total:0})})),c={labels:t.map(a=>`${a.semester} ${a.academic_year}`),datasets:o.map((a,e)=>({label:a.label,data:a.data,backgroundColor:r[e%r.length]}))},i={responsive:!0,plugins:{legend:{position:"top"},title:{display:!0,text:"Loan Application"}}};return m.jsx(h,{data:c,options:i})},B=S;export{B as default};
