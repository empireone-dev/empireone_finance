import{r as l,j as o,u as ce,c as pe,s as K,e as Q}from"./app-lbZC4vOA.js";import{h as X}from"./moment-C5S46NFB.js";import de from"./request-calculation-section-iBBpwMkJ.js";import{s as me,a as ue}from"./loan-record-thunk-TaTlWmTW.js";import ve from"./loan-agreement-section-C3rCt6X5.js";import fe from"./promissory-note-section-D-M4-3-z.js";import xe from"./signature-section-DKXepj3g.js";import{T as be}from"./Toolbar-CDzR9gc0.js";import{F as Se,I as he,S as Ce,a as ge,T as Le}from"./TextField-BJhniC6O.js";import{M as T}from"./MenuItem-DmMO-0ZJ.js";import{B as $}from"./Button-Ch9SYbWu.js";import{D as je}from"./Dialog-BJWrApsl.js";import{B as Z}from"./Box-CpUsOKjq.js";import{g as A,a as D,s as L,u as U,c as k,b as B,m as E,d as ae}from"./DefaultPropsProvider-DDovwS48.js";import{u as ee}from"./useSlot-BOj7wW92.js";import{c as se,S as ye}from"./createSvgIcon-CId6qftK.js";import{T as q}from"./Typography-BAnwyHGp.js";import{C as re}from"./Collapse-CZAJ2EGT.js";import{F as te}from"./FormControlLabel-BKcZvSuu.js";import{C as oe}from"./Checkbox-DKd00xqW.js";import{P as Me}from"./Paper-DXhz1w8P.js";import"./Close-DQKdTc2Y.js";import"./TableRow-B19hJdXN.js";import"./IconButton-BRZP79q3.js";import"./createSimplePaletteValueFilter-B-qsfPz3.js";import"./index-BZoOOJrr.js";import"./InputBase-DQ2ZHYLG.js";import"./isHostComponent-DVu5iVWx.js";import"./index-BukyO2rX.js";import"./useTheme-DHYDNh39.js";import"./extendSxProp-sJJDRZb9.js";import"./ownerWindow-HkKU3E4x.js";import"./ownerDocument-DW-IO8s5.js";import"./debounce-Be36O1Ab.js";import"./Popover-CWc81wr2.js";import"./Modal-Cgj5QhO0.js";import"./utils-B3QBah7D.js";import"./Grow-CdgukWr4.js";import"./useThemeProps-Cur90-j2.js";import"./listItemTextClasses-3-KFMcOu.js";const W=l.createContext({}),V=l.createContext({});function Re(e){return A("MuiStep",e)}D("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const _e=e=>{const{classes:n,orientation:t,alternativeLabel:a,completed:i}=e;return B({root:["root",t,a&&"alternativeLabel",i&&"completed"]},Re,n)},Ie=L("div",{name:"MuiStep",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.orientation],t.alternativeLabel&&n.alternativeLabel,t.completed&&n.completed]}})({variants:[{props:{orientation:"horizontal"},style:{paddingLeft:8,paddingRight:8}},{props:{alternativeLabel:!0},style:{flex:1,position:"relative"}}]}),Ne=l.forwardRef(function(n,t){const a=U({props:n,name:"MuiStep"}),{active:i,children:r,className:s,component:c="div",completed:v,disabled:u,expanded:p=!1,index:d,last:f,...b}=a,{activeStep:x,connector:h,alternativeLabel:_,orientation:I,nonLinear:N}=l.useContext(W);let[g=!1,P=!1,M=!1]=[i,v,u];x===d?g=i!==void 0?i:!0:!N&&x>d?P=v!==void 0?v:!0:!N&&x<d&&(M=u!==void 0?u:!0);const F=l.useMemo(()=>({index:d,last:f,expanded:p,icon:d+1,active:g,completed:P,disabled:M}),[d,f,p,g,P,M]),j={...a,active:g,orientation:I,alternativeLabel:_,completed:P,disabled:M,expanded:p,component:c},y=_e(j),w=o.jsxs(Ie,{as:c,className:k(y.root,s),ref:t,ownerState:j,...b,children:[h&&_&&d!==0?h:null,r]});return o.jsx(V.Provider,{value:F,children:h&&!_&&d!==0?o.jsxs(l.Fragment,{children:[h,w]}):w})}),Pe=se(o.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),we=se(o.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function Te(e){return A("MuiStepIcon",e)}const Y=D("MuiStepIcon",["root","active","completed","error","text"]);var ne;const ze=e=>{const{classes:n,active:t,completed:a,error:i}=e;return B({root:["root",t&&"active",a&&"completed",i&&"error"],text:["text"]},Te,n)},O=L(ye,{name:"MuiStepIcon",slot:"Root",overridesResolver:(e,n)=>n.root})(E(({theme:e})=>({display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),color:(e.vars||e).palette.text.disabled,[`&.${Y.completed}`]:{color:(e.vars||e).palette.primary.main},[`&.${Y.active}`]:{color:(e.vars||e).palette.primary.main},[`&.${Y.error}`]:{color:(e.vars||e).palette.error.main}}))),Fe=L("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(e,n)=>n.text})(E(({theme:e})=>({fill:(e.vars||e).palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily}))),ke=l.forwardRef(function(n,t){const a=U({props:n,name:"MuiStepIcon"}),{active:i=!1,className:r,completed:s=!1,error:c=!1,icon:v,...u}=a,p={...a,active:i,completed:s,error:c},d=ze(p);if(typeof v=="number"||typeof v=="string"){const f=k(r,d.root);return c?o.jsx(O,{as:we,className:f,ref:t,ownerState:p,...u}):s?o.jsx(O,{as:Pe,className:f,ref:t,ownerState:p,...u}):o.jsxs(O,{className:f,ref:t,ownerState:p,...u,children:[ne||(ne=o.jsx("circle",{cx:"12",cy:"12",r:"12"})),o.jsx(Fe,{className:d.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:p,children:v})]})}return v});function $e(e){return A("MuiStepLabel",e)}const z=D("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),Ae=e=>{const{classes:n,orientation:t,active:a,completed:i,error:r,disabled:s,alternativeLabel:c}=e;return B({root:["root",t,r&&"error",s&&"disabled",c&&"alternativeLabel"],label:["label",a&&"active",i&&"completed",r&&"error",s&&"disabled",c&&"alternativeLabel"],iconContainer:["iconContainer",a&&"active",i&&"completed",r&&"error",s&&"disabled",c&&"alternativeLabel"],labelContainer:["labelContainer",c&&"alternativeLabel"]},$e,n)},De=L("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.orientation]]}})({display:"flex",alignItems:"center",[`&.${z.alternativeLabel}`]:{flexDirection:"column"},[`&.${z.disabled}`]:{cursor:"default"},variants:[{props:{orientation:"vertical"},style:{textAlign:"left",padding:"8px 0"}}]}),Ue=L("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(e,n)=>n.label})(E(({theme:e})=>({...e.typography.body2,display:"block",transition:e.transitions.create("color",{duration:e.transitions.duration.shortest}),[`&.${z.active}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${z.completed}`]:{color:(e.vars||e).palette.text.primary,fontWeight:500},[`&.${z.alternativeLabel}`]:{marginTop:16},[`&.${z.error}`]:{color:(e.vars||e).palette.error.main}}))),Be=L("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(e,n)=>n.iconContainer})({flexShrink:0,display:"flex",paddingRight:8,[`&.${z.alternativeLabel}`]:{paddingRight:0}}),Ee=L("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(e,n)=>n.labelContainer})(E(({theme:e})=>({width:"100%",color:(e.vars||e).palette.text.secondary,[`&.${z.alternativeLabel}`]:{textAlign:"center"}}))),G=l.forwardRef(function(n,t){const a=U({props:n,name:"MuiStepLabel"}),{children:i,className:r,componentsProps:s={},error:c=!1,icon:v,optional:u,slots:p={},slotProps:d={},StepIconComponent:f,StepIconProps:b,...x}=a,{alternativeLabel:h,orientation:_}=l.useContext(W),{active:I,disabled:N,completed:g,icon:P}=l.useContext(V),M=v||P;let F=f;M&&!F&&(F=ke);const j={...a,active:I,alternativeLabel:h,completed:g,disabled:N,error:c,orientation:_},y=Ae(j),w={slots:p,slotProps:{stepIcon:b,...s,...d}},[m,S]=ee("label",{elementType:Ue,externalForwardedProps:w,ownerState:j}),[R,C]=ee("stepIcon",{elementType:F,externalForwardedProps:w,ownerState:j});return o.jsxs(De,{className:k(y.root,r),ref:t,ownerState:j,...x,children:[M||R?o.jsx(Be,{className:y.iconContainer,ownerState:j,children:o.jsx(R,{completed:g,active:I,error:c,icon:M,...C})}):null,o.jsxs(Ee,{className:y.labelContainer,ownerState:j,children:[i?o.jsx(m,{...S,className:k(y.label,S==null?void 0:S.className),children:i}):null,u]})]})});G&&(G.muiName="StepLabel");function We(e){return A("MuiStepConnector",e)}D("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const He=e=>{const{classes:n,orientation:t,alternativeLabel:a,active:i,completed:r,disabled:s}=e,c={root:["root",t,a&&"alternativeLabel",i&&"active",r&&"completed",s&&"disabled"],line:["line",`line${ae(t)}`]};return B(c,We,n)},Ve=L("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.orientation],t.alternativeLabel&&n.alternativeLabel,t.completed&&n.completed]}})({flex:"1 1 auto",variants:[{props:{orientation:"vertical"},style:{marginLeft:12}},{props:{alternativeLabel:!0},style:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"}}]}),qe=L("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.line,n[`line${ae(t.orientation)}`]]}})(E(({theme:e})=>{const n=e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600];return{display:"block",borderColor:e.vars?e.vars.palette.StepConnector.border:n,variants:[{props:{orientation:"horizontal"},style:{borderTopStyle:"solid",borderTopWidth:1}},{props:{orientation:"vertical"},style:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}]}})),Ye=l.forwardRef(function(n,t){const a=U({props:n,name:"MuiStepConnector"}),{className:i,...r}=a,{alternativeLabel:s,orientation:c="horizontal"}=l.useContext(W),{active:v,disabled:u,completed:p}=l.useContext(V),d={...a,alternativeLabel:s,orientation:c,active:v,completed:p,disabled:u},f=He(d);return o.jsx(Ve,{className:k(f.root,i),ref:t,ownerState:d,...r,children:o.jsx(qe,{className:f.line,ownerState:d})})});function Oe(e){return A("MuiStepContent",e)}D("MuiStepContent",["root","last","transition"]);const Ge=e=>{const{classes:n,last:t}=e;return B({root:["root",t&&"last"],transition:["transition"]},Oe,n)},Je=L("div",{name:"MuiStepContent",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,t.last&&n.last]}})(E(({theme:e})=>({marginLeft:12,paddingLeft:20,paddingRight:8,borderLeft:e.vars?`1px solid ${e.vars.palette.StepContent.border}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[600]}`,variants:[{props:{last:!0},style:{borderLeft:"none"}}]}))),Ke=L(re,{name:"MuiStepContent",slot:"Transition",overridesResolver:(e,n)=>n.transition})({}),Qe=l.forwardRef(function(n,t){const a=U({props:n,name:"MuiStepContent"}),{children:i,className:r,TransitionComponent:s=re,transitionDuration:c="auto",TransitionProps:v,...u}=a;l.useContext(W);const{active:p,last:d,expanded:f}=l.useContext(V),b={...a,last:d},x=Ge(b);let h=c;return c==="auto"&&!s.muiSupportAuto&&(h=void 0),o.jsx(Je,{className:k(x.root,r),ref:t,ownerState:b,...u,children:o.jsx(Ke,{as:s,in:p||f,className:x.transition,ownerState:b,timeout:h,unmountOnExit:!0,...v,children:i})})});function Xe(e){return A("MuiStepper",e)}D("MuiStepper",["root","horizontal","vertical","nonLinear","alternativeLabel"]);const Ze=e=>{const{orientation:n,nonLinear:t,alternativeLabel:a,classes:i}=e;return B({root:["root",n,t&&"nonLinear",a&&"alternativeLabel"]},Xe,i)},et=L("div",{name:"MuiStepper",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:t}=e;return[n.root,n[t.orientation],t.alternativeLabel&&n.alternativeLabel,t.nonLinear&&n.nonLinear]}})({display:"flex",variants:[{props:{orientation:"horizontal"},style:{flexDirection:"row",alignItems:"center"}},{props:{orientation:"vertical"},style:{flexDirection:"column"}},{props:{alternativeLabel:!0},style:{alignItems:"flex-start"}}]}),tt=o.jsx(Ye,{}),ot=l.forwardRef(function(n,t){const a=U({props:n,name:"MuiStepper"}),{activeStep:i=0,alternativeLabel:r=!1,children:s,className:c,component:v="div",connector:u=tt,nonLinear:p=!1,orientation:d="horizontal",...f}=a,b={...a,nonLinear:p,alternativeLabel:r,orientation:d,component:v},x=Ze(b),h=l.Children.toArray(s).filter(Boolean),_=h.map((N,g)=>l.cloneElement(N,{index:g,last:g+1===h.length,...N.props})),I=l.useMemo(()=>({activeStep:i,alternativeLabel:r,connector:u,nonLinear:p,orientation:d}),[i,r,u,p,d]);return o.jsx(W.Provider,{value:I,children:o.jsx(et,{as:v,ownerState:b,className:k(x.root,c),ref:t,...f,children:_})})});function Ht(){var w;const[e,n]=l.useState(!1),[t,a]=l.useState({term:3,desired_amount:null,interest:0,net:0,bi_amortization:0,interest_rate:.05,schedule:[],signature:""}),[i,r]=l.useState(0);l.useState([]);const[s,c]=l.useState({}),[v,u]=l.useState(!1),{user:p}=ce(m=>m.app),d=pe(),f=parseFloat((w=p==null?void 0:p.salary)==null?void 0:w.budgetCost)*.8,[b,x]=l.useState({value1:!1,value2:!1});function h(m,S,R,C){const ie=X().date(10),J=[];for(let H=0;H<C;H++){const le=ie.clone().add(Math.floor(H/2),"months").date(H%2===0?10:25);J.push({date:le.format("LL"),payment:S.toFixed(2)})}return J}l.useEffect(()=>{const m=h(t.net,t.bi_amortization,t.term,6);a({...t,interest:(t.desired_amount??0)*(t.interest_rate??0)*(t.term??0),net:(t.desired_amount??0)-(t.desired_amount??0)*(t.interest_rate??0)*(t.term??0),bi_amortization:(t.desired_amount??0)/(t.term??1)/2,schedule:m,...p,balance:t.desired_amount})},[(t==null?void 0:t.desired_amount)??""]),console.log("formssssss",t);const _=()=>{r(0),n(!0),x({value1:!1,value2:!1})},I=()=>{n(!1),r(0),x({value1:!1,value2:!1})};function N(m){a({...t,[m.target.name]:Number(m.target.value)})}async function g(m){var S,R;try{u(!0);const C=await K.dispatch(me({...t,loan_record_id:X().format("MMDDYYYYHHmmss"),status:"Pending"}));console.log("result.status ",C.status),C.status==200?(await K.dispatch(ue(p.employee_id)),d(Q({open:!0,type:"success",message:"Will be reviewed"})),u(!1),n(!1),r(0),c({})):(x({value1:!1,value2:!1}),a({term:3,desired_amount:0,interest:0,net:0,bi_amortization:0,interest_rate:.05,schedule:[]}),(R=(S=C==null?void 0:C.response)==null?void 0:S.data)!=null&&R.errors?(c(C.response.data.errors),u(!1)):(console.log("result",C),u(!1),c({notification:C.data.response}),d(Q({open:!0,type:"error",message:C.data.response})),setTimeout(()=>{c({})},2e3)),n(!1),u(!1))}catch{u(!1)}}const P=()=>{r(m=>m+1)},M=()=>{r(m=>m-1)},F=()=>{r(0)},j=()=>{r(m=>m+1)},y=[{label:"Loan Information",component:o.jsxs(o.Fragment,{children:[o.jsx(de,{handleClose:I,user:p,form:t,setForm:a}),o.jsxs(be,{className:"flex-col gap-3 flex",children:[(s==null?void 0:s.notification)&&o.jsx("div",{className:"text-red-500",children:s==null?void 0:s.notification}),o.jsxs(Se,{fullWidth:!0,children:[o.jsx(he,{id:"demo-simple-select-label",children:"Purpose of Borrowing"}),o.jsxs(Ce,{labelId:"demo-simple-select-label",id:"demo-simple-select",name:"purpose",label:"Purpose of Borrowing",onChange:m=>a({...t,[m.target.name]:m.target.value}),value:t.purpose??"",children:[o.jsx(T,{selected:!0,disabled:!0}),o.jsx(T,{value:"Medical Bills",children:"Medical Bills"}),o.jsx(T,{value:"Vehicle Financing",children:"Vehicle Financing"}),o.jsx(T,{value:"Home Improvements and Repair",children:"Home Improvements and Repair"}),o.jsx(T,{value:"Parties & Events",children:"Parties & Events"}),o.jsx(T,{value:"Vacation Fund",children:"Vacation Fund"}),o.jsx(T,{value:"Personal Equipments (Gadgets etc.)",children:"Personal Equipments (Gadgets etc.)"}),o.jsx(T,{value:"Family Support",children:"Family Support"})]}),(s==null?void 0:s.purpose)&&o.jsx(ge,{children:s.purpose})]}),o.jsx(Le,{onChange:m=>N(m),error:!!(s!=null&&s.desired_amount),value:(t==null?void 0:t.desired_amount)??"",helperText:(s==null?void 0:s.desired_amount)??"",name:"desired_amount",type:"number",label:"Desired Amount",variant:"outlined",fullWidth:!0})]})]})},{label:"Loan Agreement Template",component:o.jsx(ve,{data:t})},{label:"Signature",component:o.jsx(xe,{onNext:j,setForm:a,data:t})},{label:"Promissory Note",component:o.jsx(fe,{data:t})}];return console.log("formform",t),o.jsxs(l.Fragment,{children:[o.jsx($,{variant:"outlined",onClick:_,children:"Create Loan Request"}),o.jsx(je,{maxWidth:!0,open:e,onClose:I,children:o.jsxs(Z,{sx:{width:1e3},className:"m-10",children:[o.jsx(ot,{activeStep:i,orientation:"vertical",children:y.map((m,S)=>o.jsxs(Ne,{children:[o.jsx(G,{optional:S===y.length-1?o.jsx(q,{variant:"caption",children:"Last step"}):null,children:m.label}),o.jsxs(Qe,{children:[o.jsx(q,{children:m.component}),o.jsxs(Z,{sx:{mb:2},children:[S===y.length-1?o.jsxs("div",{className:"flex flex-col",children:[o.jsx(te,{control:o.jsx(oe,{name:"isPayAll",onChange:R=>x({...b,value2:R.target.checked})}),label:"I Agree"}),o.jsx($,{disabled:v||!b.value2,variant:"contained",onClick:g,sx:{mt:1,mr:1},children:"SUBMIT"})]}):o.jsxs("div",{className:"flex flex-col",children:[S==0&&o.jsx($,{disabled:t.purpose==null||t.desired_amount==null||t.desired_amount==""||t.desired_amount>(f??9600),variant:"contained",onClick:P,sx:{mt:1,mr:1},children:"Continue"}),S==1&&o.jsxs(o.Fragment,{children:[o.jsx(te,{control:o.jsx(oe,{name:"isPayAll",onChange:R=>x({...b,value1:R.target.checked})}),label:"I Agree"}),o.jsx($,{disabled:!b.value1,variant:"contained",onClick:P,sx:{mt:1,mr:1},children:"Continue"})]})]}),o.jsx("div",{className:"flex flex-col mt-3",children:o.jsx($,{disabled:S===0,onClick:M,sx:{mt:1,mr:1},children:"Back"})})]})]})]},m.label))}),i===y.length&&o.jsxs(Me,{square:!0,elevation:0,sx:{p:3},children:[o.jsx(q,{children:"All steps completed - you're finished"}),o.jsx($,{onClick:F,sx:{mt:1,mr:1},children:"Reset"})]})]})})]})}export{Ht as default};
