(()=>{"use strict";var e,r={149:(e,r,t)=>{const o=window.wp.blocks,a=window.React;var l=t.n(a);window.wp.i18n;const n=window.wp.blockEditor;window.wp.components;class s extends l().Component{render(){const{attributes:e,setAttributes:r}=this.props;return(0,a.createElement)(n.InspectorControls,null,(0,a.createElement)(n.PanelColorSettings,{title:"Colors",colorSettings:[{label:"Card Color",value:e.cardColor,onChange:e=>r({cardColor:e})},{label:"Heading Color",value:e.headingColor,onChange:e=>r({headingColor:e})},{label:"Text Color",value:e.textColor,onChange:e=>r({textColor:e})}]}))}}window.wp.serverSideRender;const i=JSON.parse('{"N9":"hp/staff-list"}');(0,o.registerBlockType)(i.N9,{edit:function({attributes:e,setAttributes:r}){return(0,a.createElement)("div",{...(0,n.useBlockProps)()},(0,a.createElement)(s,{attributes:e,setAttributes:r}),(0,a.createElement)("div",{className:"flip-card"},(0,a.createElement)("div",{className:"flip-card-inner"},(0,a.createElement)("div",{className:"flip-card-front"},(0,a.createElement)("img",{src:"https://2.gravatar.com/avatar/ea8b076b398ee48b71cfaecf898c582b?s=250&d=mm&r=g"})),(0,a.createElement)("div",{className:"flip-card-back",style:{backgroundColor:e.cardColor}},(0,a.createElement)("h3",{className:"name",style:{color:e.headingColor}},"Red Forman"),(0,a.createElement)("div",{className:"position"},"Manager"),(0,a.createElement)("div",{className:"bio",style:{color:e.textColor}},(0,a.createElement)("p",null,"If I Was A Bird, I’d Fly Into A Ceiling Fan."))))))}})}},t={};function o(e){var a=t[e];if(void 0!==a)return a.exports;var l=t[e]={exports:{}};return r[e](l,l.exports,o),l.exports}o.m=r,e=[],o.O=(r,t,a,l)=>{if(!t){var n=1/0;for(d=0;d<e.length;d++){for(var[t,a,l]=e[d],s=!0,i=0;i<t.length;i++)(!1&l||n>=l)&&Object.keys(o.O).every((e=>o.O[e](t[i])))?t.splice(i--,1):(s=!1,l<n&&(n=l));if(s){e.splice(d--,1);var c=a();void 0!==c&&(r=c)}}return r}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[t,a,l]},o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e={732:0,692:0};o.O.j=r=>0===e[r];var r=(r,t)=>{var a,l,[n,s,i]=t,c=0;if(n.some((r=>0!==e[r]))){for(a in s)o.o(s,a)&&(o.m[a]=s[a]);if(i)var d=i(o)}for(r&&r(t);c<n.length;c++)l=n[c],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(d)},t=globalThis.webpackChunkhigh_pulp_blocks=globalThis.webpackChunkhigh_pulp_blocks||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var a=o.O(void 0,[692],(()=>o(149)));a=o.O(a)})();