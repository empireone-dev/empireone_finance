import{j as s}from"./app-CB4Xp2J3.js";import{j as l,i as a}from"./DefaultPropsProvider-BPyW3-4X.js";import{a as u}from"./useTheme-DNxFxZkl.js";import{G as i}from"./ButtonBase-DER0a6QF.js";import{e as f}from"./extendSxProp-DhUrNJf4.js";function c(t){return t==null||Object.keys(t).length===0}function p(t){const{styles:e,defaultTheme:n={}}=t,o=typeof e=="function"?r=>e(c(r)?n:r):e;return s.jsx(i,{styles:o})}function m({styles:t,themeId:e,defaultTheme:n={}}){const o=u(n),r=typeof t=="function"?t(e&&o[e]||o):t;return s.jsx(p,{styles:r})}function x(t){return s.jsx(m,{...t,defaultTheme:l,themeId:a})}function d(t){return function(n){return s.jsx(x,{styles:typeof t=="function"?o=>t({theme:o,...n}):t})}}function g(){return f}export{p as G,d as g,g as i};