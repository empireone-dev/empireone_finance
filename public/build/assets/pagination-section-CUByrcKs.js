import{u as m,j as s,y as u}from"./app-CB4Xp2J3.js";import{P as l}from"./Pagination-CUIgr5gN.js";import"./DefaultPropsProvider-BPyW3-4X.js";import"./useControlled-BBo9fFeG.js";import"./index-CXdS6Qlj.js";import"./createSimplePaletteValueFilter-bm0fmN_7.js";import"./createSvgIcon-yak5rwkc.js";import"./useSlot-BT9FRa30.js";import"./resolveComponentProps-lWwltuXh.js";import"./ButtonBase-DER0a6QF.js";function Q(){const{students:e}=m(t=>t.students);console.log("students",e);const r=window.location.pathname,i=r+window.location.search,o=((t,a)=>new URLSearchParams(t.split("?")[1]).get(a))(i,"page"),c=o?parseInt(o,10):1;function p(t,a){const n=r+"?page="+a;u.visit(n)}return s.jsx("div",{className:"flex w-full items-center justify-end",children:s.jsx(l,{onChange:p,count:e.last_page,defaultPage:c,color:"primary",shape:"rounded"})})}export{Q as default};