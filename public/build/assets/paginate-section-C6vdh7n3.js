import{u as p,j as a,y as c}from"./app-BQ3qUyPU.js";import{S as m}from"./Stack-DvnPXmTV.js";import{P as u}from"./Pagination-D7xjqKVl.js";import"./DefaultPropsProvider-C_DMwbwV.js";import"./useThemeProps-COM4Chhy.js";import"./useTheme-Cjl9AGst.js";import"./extendSxProp-LMD2tYuT.js";import"./createSimplePaletteValueFilter-CVjiaD3x.js";import"./createSvgIcon-D_rqtzAi.js";import"./useSlot-Bd5N1r9K.js";function v(){const{loan_records:t}=p(e=>e.loan_records),r=window.location.href,s=new URL(r),o=s.searchParams.get("page"),i=s.searchParams.get("status");return a.jsx("div",{className:"py-5 flex items-center justify-end",children:a.jsx(m,{spacing:2,children:a.jsx(u,{defaultPage:parseInt(o),onChange:(e,n)=>c.visit("?page="+n+"&status="+i),count:(t==null?void 0:t.last_page)??0,variant:"outlined",shape:"rounded"})})})}export{v as default};
