import{u as l,i as g,R as i,r as h,s as x,y as m,k as f,j as o}from"./app-CcFxKgAD.js";import{P as S}from"./index-GB2D_wLG.js";import{g as j,A as v,D as w,a as b,H as y,P}from"./app-thunk-oF5RaxxL.js";import k from"./logout-section-DW95o4NO.js";import{t as A}from"./DefaultPropsProvider-CP8Dzdx4.js";import"./createSvgIcon-Hk2aX3dH.js";import"./useTheme-BAygJoIP.js";import"./index-4kJsEyVd.js";import"./ListSubheader-B8cgNDZ-.js";import"./ownerWindow-CO8Ksk3k.js";import"./Modal-CSdbskgH.js";import"./ButtonBase-DSh1E41x.js";import"./resolveComponentProps-DWerkNmX.js";import"./useSlot-BkWWeJSN.js";import"./utils-B0SWmCla.js";import"./useSlotProps-nnbFR5-n.js";import"./useControlled-CX5DjXqW.js";import"./useId-K_MTrqA2.js";import"./Grow-R3vvtVcN.js";import"./IconButton-BiEa_APH.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./Paper-CNqsZyLv.js";import"./Popover-rJp2u0B9.js";import"./isHostComponent-DVu5iVWx.js";import"./debounce-Be36O1Ab.js";import"./Box-cMi0Rkwc.js";import"./extendSxProp-BQ60it6R.js";import"./index-C7QlkSNc.js";import"./react-is.production.min-DUDD-a5e.js";import"./Snackbar-CcrDZD18.js";import"./Button-DebYElXm.js";import"./Typography-DHBjKxG2.js";import"./listItemTextClasses-C8sEiXa3.js";import"./Drawer-BHkQdjtz.js";import"./Slide-CO8eoVxi.js";import"./Collapse-COE6-5hc.js";import"./user-service-D-rG01MN.js";const D=[{kind:"header",title:"Main items"},{segment:"dashboard",title:"Dashboard",icon:o.jsx(b,{})},{segment:"subjects",title:"Subjects",icon:o.jsx(y,{})},{kind:"divider"},{kind:"header",title:"Analytics"},{segment:"logout",title:"Logout",icon:o.jsx(P,{})}],L=A({cssVariables:{colorSchemeSelector:"data-toolpad-color-scheme"},colorSchemes:{light:!0,dark:!0},breakpoints:{values:{xs:0,sm:600,md:600,lg:1200,xl:1536}}});function R({children:a},n){const{pathname:r}=l(t=>t.app),{window:e}=n,p=g(),[c,s]=i.useState(!1);h.useEffect(()=>{x.dispatch(j())},[]);const d=i.useMemo(()=>({pathname:r,searchParams:new URLSearchParams,navigate:t=>{t=="/logout"?s(!0):(t=="/instructor"||t=="/students/registered"||t=="/students/enrollment"?m.visit("/instructor"+t+"?page=1"):m.visit("/instructor"+t),p(f(t)))}}),[r]),u=e!==void 0?e():void 0;return o.jsx(v,{navigation:D,router:d,theme:L,window:u,branding:{logo:o.jsx("img",{src:"/images/logo.png"}),title:"CSR Grading System"},children:o.jsxs(w,{children:[o.jsx(k,{open:c,setOpen:s}),o.jsx("div",{className:"p-4",children:a})]})})}R.propTypes={window:S.func};export{R as default};