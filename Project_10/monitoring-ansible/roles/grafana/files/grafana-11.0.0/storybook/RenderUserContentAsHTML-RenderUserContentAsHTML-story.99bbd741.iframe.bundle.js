"use strict";(self.webpackChunk_grafana_ui=self.webpackChunk_grafana_ui||[]).push([[6022],{"../../node_modules/@mdx-js/react/lib/index.js":function(P,f,o){o.d(f,{BN:function(){return m},RP:function(){return d},gz:function(){return y},xA:function(){return g}});var s=o("../../node_modules/react/index.js");const m=s.createContext({});function y(i){return v;function v(l){const c=d(l.components);return s.createElement(i,{...l,allComponents:c})}}function d(i){const v=s.useContext(m);return s.useMemo(()=>typeof i=="function"?i(v):{...v,...i},[v,i])}const x={};function g({components:i,children:v,disableParentContext:l}){let c;return l?c=typeof i=="function"?i({}):i||x:c=d(i),s.createElement(m.Provider,{value:c},v)}},"../../node_modules/react/cjs/react-jsx-runtime.production.min.js":function(P,f,o){/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s=o("../../node_modules/react/index.js"),m=Symbol.for("react.element"),y=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,x=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function i(v,l,c){var a,h={},O=null,T=null;c!==void 0&&(O=""+c),l.key!==void 0&&(O=""+l.key),l.ref!==void 0&&(T=l.ref);for(a in l)d.call(l,a)&&!g.hasOwnProperty(a)&&(h[a]=l[a]);if(v&&v.defaultProps)for(a in l=v.defaultProps,l)h[a]===void 0&&(h[a]=l[a]);return{$$typeof:m,type:v,key:O,ref:T,props:h,_owner:x.current}}f.Fragment=y,f.jsx=i,f.jsxs=i},"../../node_modules/react/jsx-runtime.js":function(P,f,o){P.exports=o("../../node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/RenderUserContentAsHTML/RenderUserContentAsHTML.story.tsx":function(P,f,o){o.r(f),o.d(f,{Basic:function(){return j},default:function(){return z}});var s=o("../../node_modules/react/index.js"),m=o("../grafana-data/src/text/index.ts"),y=Object.defineProperty,d=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,i=(t,e,r)=>e in t?y(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,v=(t,e)=>{for(var r in e||(e={}))x.call(e,r)&&i(t,r,e[r]);if(d)for(var r of d(e))g.call(e,r)&&i(t,r,e[r]);return t},l=(t,e)=>{var r={};for(var _ in t)x.call(t,_)&&e.indexOf(_)<0&&(r[_]=t[_]);if(t!=null&&d)for(var _ of d(t))e.indexOf(_)<0&&g.call(t,_)&&(r[_]=t[_]);return r};function c(t){var e=t,{component:r,content:_}=e,B=l(e,["component","content"]);return s.createElement(r||"span",v({dangerouslySetInnerHTML:{__html:m.sQ.sanitize(_)}},B))}try{c.displayName="RenderUserContentAsHTML",c.__docgenInfo={description:"",displayName:"RenderUserContentAsHTML",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"enum",value:[{value:'"object"'},{value:'"link"'},{value:'"search"'},{value:'"table"'},{value:'"label"'},{value:'"a"'},{value:'"abbr"'},{value:'"address"'},{value:'"area"'},{value:'"article"'},{value:'"aside"'},{value:'"audio"'},{value:'"b"'},{value:'"base"'},{value:'"bdi"'},{value:'"bdo"'},{value:'"big"'},{value:'"blockquote"'},{value:'"body"'},{value:'"br"'},{value:'"button"'},{value:'"canvas"'},{value:'"caption"'},{value:'"center"'},{value:'"cite"'},{value:'"code"'},{value:'"col"'},{value:'"colgroup"'},{value:'"data"'},{value:'"datalist"'},{value:'"dd"'},{value:'"del"'},{value:'"details"'},{value:'"dfn"'},{value:'"dialog"'},{value:'"div"'},{value:'"dl"'},{value:'"dt"'},{value:'"em"'},{value:'"embed"'},{value:'"fieldset"'},{value:'"figcaption"'},{value:'"figure"'},{value:'"footer"'},{value:'"form"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'},{value:'"head"'},{value:'"header"'},{value:'"hgroup"'},{value:'"hr"'},{value:'"html"'},{value:'"i"'},{value:'"iframe"'},{value:'"img"'},{value:'"input"'},{value:'"ins"'},{value:'"kbd"'},{value:'"keygen"'},{value:'"legend"'},{value:'"li"'},{value:'"main"'},{value:'"map"'},{value:'"mark"'},{value:'"menu"'},{value:'"menuitem"'},{value:'"meta"'},{value:'"meter"'},{value:'"nav"'},{value:'"noscript"'},{value:'"ol"'},{value:'"optgroup"'},{value:'"option"'},{value:'"output"'},{value:'"p"'},{value:'"param"'},{value:'"picture"'},{value:'"pre"'},{value:'"progress"'},{value:'"q"'},{value:'"rp"'},{value:'"rt"'},{value:'"ruby"'},{value:'"s"'},{value:'"samp"'},{value:'"slot"'},{value:'"script"'},{value:'"section"'},{value:'"select"'},{value:'"small"'},{value:'"source"'},{value:'"span"'},{value:'"strong"'},{value:'"style"'},{value:'"sub"'},{value:'"summary"'},{value:'"sup"'},{value:'"template"'},{value:'"tbody"'},{value:'"td"'},{value:'"textarea"'},{value:'"tfoot"'},{value:'"th"'},{value:'"thead"'},{value:'"time"'},{value:'"title"'},{value:'"tr"'},{value:'"track"'},{value:'"u"'},{value:'"ul"'},{value:'"var"'},{value:'"video"'},{value:'"wbr"'},{value:'"webview"'}]}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/RenderUserContentAsHTML/RenderUserContentAsHTML.tsx#RenderUserContentAsHTML"]={docgenInfo:c.__docgenInfo,name:"RenderUserContentAsHTML",path:"src/components/RenderUserContentAsHTML/RenderUserContentAsHTML.tsx#RenderUserContentAsHTML"})}catch{}var a=o("../../node_modules/react/jsx-runtime.js"),h=o("../../node_modules/@mdx-js/react/lib/index.js"),O=o("../../node_modules/@storybook/blocks/dist/index.mjs");function T(t){const e=Object.assign({h1:"h1",p:"p",h3:"h3",code:"code",pre:"pre"},(0,h.RP)(),t.components),{Meta:r}=e;return r||M("Meta",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r,{title:"MDX|RenderUserContentAsHTML",component:c}),`
`,(0,a.jsx)(e.h1,{id:"renderusercontentashtml",children:"RenderUserContentAsHTML"}),`
`,(0,a.jsx)(e.p,{children:"Abstraction layer component for sanitizing and rendering an html content."}),`
`,(0,a.jsx)(e.h3,{id:"when-to-use",children:"When to use"}),`
`,(0,a.jsxs)(e.p,{children:["This should be use as replacement for ",(0,a.jsx)(e.code,{children:"dangerouslySetInnerHTML"})," as this centralizes the sanitation of contents over the app."]}),`
`,(0,a.jsx)(e.h3,{id:"usage",children:"Usage"}),`
`,(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-jsx",children:`<RenderUserContentAsHTML content="sample content" />
`})}),`
`,(0,a.jsx)(e.h3,{id:"props",children:"Props"}),`
`,(0,a.jsx)(O.ov,{of:c})]})}function E(t={}){const{wrapper:e}=Object.assign({},(0,h.RP)(),t.components);return e?(0,a.jsx)(e,Object.assign({},t,{children:(0,a.jsx)(T,t)})):T(t)}var b=E;function M(t,e){throw new Error("Expected "+(e?"component":"object")+" `"+t+"` to be defined: you likely forgot to import, pass, or provide it.")}var A=Object.defineProperty,L=Object.defineProperties,U=Object.getOwnPropertyDescriptors,C=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable,R=(t,e,r)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,n=(t,e)=>{for(var r in e||(e={}))S.call(e,r)&&R(t,r,e[r]);if(C)for(var r of C(e))D.call(e,r)&&R(t,r,e[r]);return t},u=(t,e)=>L(t,U(e)),p,w,H;const I={title:"General/RenderUserContentAsHTML",component:c,parameters:{docs:{page:b}},argTypes:{content:{control:{type:"text"}},component:{control:{type:"text"}}}},j=t=>s.createElement(c,n({},t));j.args={content:'<a href="#">sample html anchor tag link</a>'};var z=I;j.parameters=u(n({},j.parameters),{docs:u(n({},(p=j.parameters)==null?void 0:p.docs),{source:n({originalSource:`props => {
  return <RenderUserContentAsHTML {...props} />;
}`},(H=(w=j.parameters)==null?void 0:w.docs)==null?void 0:H.source)})})},"../grafana-data/src/text/index.ts":function(P,f,o){o.d(f,{sQ:function(){return m}});var s=o("../grafana-data/src/text/sanitize.ts");const m={escapeHtml:s.ZD,hasAnsiCodes:s.kE,sanitize:s.aj,sanitizeTextPanelContent:s.G$,sanitizeUrl:s.Jf,sanitizeSVGContent:s.rX,sanitizeTrustedTypes:s.oI,sanitizeTrustedTypesRSS:s.kc}},"../grafana-data/src/text/sanitize.ts":function(P,f,o){o.d(f,{G$:function(){return U},Jf:function(){return S},ZD:function(){return R},aj:function(){return M},kE:function(){return D},kc:function(){return A},oI:function(){return L},rX:function(){return C}});var s=o("../../node_modules/@braintree/sanitize-url/dist/index.js"),m=o("../../node_modules/dompurify/dist/purify.js"),y=o.n(m),d=o("../../node_modules/xss/lib/index.js"),x=o.n(d),g=Object.defineProperty,i=Object.defineProperties,v=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,h=(n,u,p)=>u in n?g(n,u,{enumerable:!0,configurable:!0,writable:!0,value:p}):n[u]=p,O=(n,u)=>{for(var p in u||(u={}))c.call(u,p)&&h(n,p,u[p]);if(l)for(var p of l(u))a.call(u,p)&&h(n,p,u[p]);return n},T=(n,u)=>i(n,v(u));const E=Object.keys(d.whiteList).reduce((n,u)=>{var p;return n[u]=(p=d.whiteList[u])==null?void 0:p.concat(["class","style"]),n},{}),b=new d.FilterXSS({whiteList:E,css:{whiteList:T(O({},d.getDefaultCSSWhiteList()),{"flex-direction":!0,"flex-wrap":!0,"flex-basis":!0,"flex-grow":!0,"flex-shrink":!0,"flex-flow":!0,gap:!0,order:!0,"justify-content":!0,"justify-items":!0,"justify-self":!0,"align-items":!0,"align-content":!0,"align-self":!0})}});function M(n){try{return y().sanitize(n,{USE_PROFILES:{html:!0},FORBID_TAGS:["form","input"]})}catch{return console.error("String could not be sanitized",n),R(n)}}function A(n){return y().sanitize(n,{RETURN_TRUSTED_TYPE:!0,ADD_ATTR:["xmlns:atom","version","property","content"],ADD_TAGS:["rss","meta","channel","title","link","description","atom:link","item","pubDate","guid"],PARSER_MEDIA_TYPE:"application/xhtml+xml"})}function L(n){return y().sanitize(n,{RETURN_TRUSTED_TYPE:!0})}function U(n){try{return b.process(n)}catch{return console.error("String could not be sanitized",n),"Text string could not be sanitized"}}function C(n){return y().sanitize(n,{USE_PROFILES:{svg:!0,svgFilters:!0}})}function S(n){return(0,s.J)(n)}function D(n){return/\u001b\[\d{1,2}m/.test(n)}function R(n){return String(n).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")}}}]);
