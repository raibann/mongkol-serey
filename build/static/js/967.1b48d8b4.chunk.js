"use strict";(self.webpackChunkmongkol_serey_cms=self.webpackChunkmongkol_serey_cms||[]).push([[967],{86544:(e,t,r)=>{r.d(t,{Q:()=>o});var i=r(13400);const o=(0,r(66934).ZP)(i.Z)((e=>{let{theme:t}=e;return{borderRadius:t.spacing(1),background:t.palette.common.white,boxShadow:t.shadows[1]}}))},93025:(e,t,r)=>{r.d(t,{Z:()=>o});var i=r(19218);const o=(0,r(66934).ZP)(i.Z)((e=>{let{theme:t}=e;return{width:"100%","& .MuiOutlinedInput-root":{borderRadius:t.spacing(1),background:t.palette.common.white,borderColor:t.palette.primary.main}}}))},84753:(e,t,r)=>{r.d(t,{Z:()=>l});var i=r(53767),o=r(20890),n=(r(72791),r(80184));const l=e=>{let{label:t,children:r}=e;return(0,n.jsxs)(i.Z,{spacing:1,width:"100%",children:[(0,n.jsx)(o.Z,{fontSize:14,children:t}),r]})}},85871:(e,t,r)=>{r.d(t,{Z:()=>m});var i=r(84395),o=r(34663),n=r(61889),l=r(20890),a=r(86544),s=(r(72791),r(69543)),c=r(69780),d=r(24296),h=r(80184);const m=e=>{let{children:t,pageTitle:r,endComponent:m}=e;const{isMdDown:u}=(0,c.Z)(),{openDrawer:x,setOpenDrawer:p}=(0,d.M$)();return(0,h.jsx)(i.Z,{position:"sticky",sx:{bgcolor:u?e=>e.palette.common.white:"background.paper",boxShadow:"none",borderRadius:0,mb:1},children:(0,h.jsx)(o.Z,{sx:{py:2,px:{sm:0}},children:(0,h.jsxs)(n.ZP,{container:!0,px:2,children:[(0,h.jsx)(n.ZP,{item:!0,xs:12,md:"auto",children:(0,h.jsxs)(n.ZP,{container:!0,children:[(0,h.jsx)(n.ZP,{item:!0,xs:!0,children:(0,h.jsx)(a.Q,{onClick:()=>p(!x),color:"primary",sx:{height:40,display:{xs:"block",md:"none"}},children:(0,h.jsx)(s.Z,{size:"24",variant:"Outline"})})}),(0,h.jsx)(n.ZP,{item:!0,xs:!0,children:(0,h.jsx)(l.Z,{variant:"h4",fontWeight:"bolder",children:r})}),(0,h.jsx)(n.ZP,{item:!0,xs:!0,sx:{display:"flex",justifyContent:"flex-end"},children:u&&m})]})}),(0,h.jsx)(n.ZP,{item:!0,xs:12,md:!0,children:t})]})})})}},69780:(e,t,r)=>{r.d(t,{Z:()=>n});var i=r(13967),o=r(95193);const n=()=>{const e=(0,i.Z)(),t=(0,o.Z)(e.breakpoints.down("sm")),r=(0,o.Z)(e.breakpoints.down("md")),n=(0,o.Z)(e.breakpoints.down("lg"));return{theme:e,isSmDown:t,isLgDown:n,isMdDown:r}}},52764:(e,t,r)=>{r.d(t,{Z:()=>l,u:()=>n.u});var i=r(57689),o=r(11087),n=r(42877);const l=()=>{const e=(0,i.s0)(),t=(0,i.UO)(),r=(0,i.TH)(),[n,l]=(0,o.lr)();return{navigate:e,urlParams:t,location:r,searchParams:n,setSearchParams:l}}},8967:(e,t,r)=>{r.r(t),r.d(t,{default:()=>G});var i=r(35527),o=r(61889),n=r(53767),l=r(36151),a=r(68870),s=r(85871),c=r(72791),d=r(61134),h=r(63466),m=r(93025),u=r(84753),x=r(66172),p=r(12065),Z=r(86544),f=r(17139),g=r(82139),j=r(80184);function v(e){let{data:t,index:r,handleDelete:i}=e;const{control:n,setValue:l,watch:a}=(0,d.Gc)();let s=+a("list.".concat(r,".qty"))*+a("list.".concat(r,".price"));return(0,c.useEffect)((()=>{isNaN(s)?l("list.".concat(r,".subTotal"),0):l("list.".concat(r,".subTotal"),s)}),[s]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.ZP,{item:!0,xs:6,sm:3,children:(0,j.jsx)(d.Qr,{control:n,name:"list.".concat(r,".productName"),defaultValue:t.productName,render:e=>{let{field:t,fieldState:{error:r}}=e;return(0,j.jsx)(m.Z,{placeholder:"Product Name",size:"small",error:Boolean(r),...t})}})}),(0,j.jsx)(o.ZP,{item:!0,xs:6,sm:2,children:(0,j.jsx)(d.Qr,{control:n,name:"list.".concat(r,".qty"),defaultValue:t.qty,render:e=>{let{field:t,fieldState:{error:r}}=e;return(0,j.jsx)(m.Z,{size:"small",placeholder:"Qty",error:Boolean(r),helperText:null===r||void 0===r?void 0:r.message,...t})}})}),(0,j.jsx)(o.ZP,{item:!0,xs:6,sm:2,children:(0,j.jsx)(d.Qr,{control:n,name:"list.".concat(r,".unit"),defaultValue:t.unit,render:e=>{let{field:{onChange:t,...i},fieldState:{error:o}}=e;return(0,j.jsx)(x.Z,{freeSolo:!0,disableClearable:!0,openOnFocus:!0,fullWidth:!0,size:"small",id:"qty",onInputChange:(e,t)=>{l("list.".concat(r,".unit"),t)},renderInput:e=>(0,j.jsx)(m.Z,{...e,error:Boolean(o),helperText:null===o||void 0===o?void 0:o.message,placeholder:"Unit"}),options:g.d9,...i})}})}),(0,j.jsx)(o.ZP,{item:!0,xs:6,sm:2,children:(0,j.jsx)(d.Qr,{control:n,name:"list.".concat(r,".price"),defaultValue:t.price,render:e=>{let{field:t,fieldState:{error:r}}=e;return(0,j.jsx)(m.Z,{placeholder:"Price",error:Boolean(r),helperText:null===r||void 0===r?void 0:r.message,size:"small",InputProps:{startAdornment:(0,j.jsx)(h.Z,{position:"start",children:"$"})},...t})}})}),(0,j.jsxs)(o.ZP,{item:!0,xs:12,sm:3,children:[(0,j.jsx)(d.Qr,{control:n,name:"list.".concat(r,".subTotal"),defaultValue:t.subTotal,render:e=>{let{field:t}=e;return(0,j.jsx)(m.Z,{placeholder:"Subtotal",size:"small",InputProps:{readOnly:!0,startAdornment:(0,j.jsx)(h.Z,{position:"start",children:"$"})},...t})}}),(0,j.jsx)(Z.Q,{onClick:()=>i(r),sx:{background:e=>e.palette.error.main,color:e=>e.palette.common.white,"&:hover":{background:e=>(0,p.Fq)(e.palette.error.main,.8)}},children:(0,j.jsx)(f.Z,{size:"24"})})]})]})}var y=r(69780);function b(e){let{listItem:t,setListItem:r}=e;const{control:i,watch:n,setValue:a}=(0,d.Gc)(),s=e=>{let i=t.filter(((t,r)=>r!==e));r(i)};let x=(n("list")||[]).reduce(((e,t)=>e+t.subTotal),0);(0,c.useEffect)((()=>{a("total",x)}),[x]);const{isSmDown:p}=(0,y.Z)();return(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)(o.ZP,{container:!0,columnSpacing:2,rowSpacing:3,sx:{"& .MuiGrid-item":{display:"flex",alignItems:"center",columnGap:2}},children:[(0,j.jsx)(o.ZP,{item:!0,xs:6,children:(0,j.jsx)(u.Z,{label:p?"":"Customer Name",children:(0,j.jsx)(d.Qr,{control:i,name:"customerName",defaultValue:"",render:e=>{let{field:t,fieldState:{error:r}}=e;return(0,j.jsx)(m.Z,{placeholder:"Customer Name",size:"small",error:Boolean(r),...t})}})})}),(0,j.jsx)(o.ZP,{item:!0,xs:6,children:(0,j.jsx)(u.Z,{label:p?"":"Phone Number",children:(0,j.jsx)(d.Qr,{control:i,name:"phoneNumber",defaultValue:"",render:e=>{let{field:t,fieldState:{error:r}}=e;return(0,j.jsx)(m.Z,{placeholder:"Phone Number",size:"small",error:Boolean(r),...t})}})})}),(0,j.jsx)(o.ZP,{item:!0,xs:6,children:(0,j.jsx)(u.Z,{label:p?"":"Title",children:(0,j.jsx)(d.Qr,{control:i,name:"event",defaultValue:"",render:e=>{let{field:t,fieldState:{error:r}}=e;return(0,j.jsx)(m.Z,{placeholder:"Title",size:"small",error:Boolean(r),...t})}})})}),(0,j.jsx)(o.ZP,{item:!0,xs:6,children:(0,j.jsx)(u.Z,{label:p?"":"Location",children:(0,j.jsx)(d.Qr,{control:i,name:"location",defaultValue:"",render:e=>{let{field:t,fieldState:{error:r}}=e;return(0,j.jsx)(m.Z,{placeholder:"Location",size:"small",error:Boolean(r),...t})}})})}),!p&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(o.ZP,{item:!0,xs:3,children:"Name"}),(0,j.jsx)(o.ZP,{item:!0,xs:2,children:"Qty"}),(0,j.jsx)(o.ZP,{item:!0,xs:2,children:"Unit"}),(0,j.jsx)(o.ZP,{item:!0,xs:2,children:"Price"}),(0,j.jsx)(o.ZP,{item:!0,xs:3,children:"SubTotal"})]}),t.map(((e,t)=>(0,c.createElement)(v,{data:e,index:t,handleDelete:s,key:t}))),(0,j.jsx)(o.ZP,{item:!0,xs:12,children:(0,j.jsx)(u.Z,{label:"Total",children:(0,j.jsx)(d.Qr,{control:i,name:"total",defaultValue:0,render:e=>{let{field:t}=e;return(0,j.jsx)(m.Z,{placeholder:"Total",size:"small",InputProps:{readOnly:!0,startAdornment:(0,j.jsx)(h.Z,{position:"start",children:"$"})},...t})}})})}),(0,j.jsx)(o.ZP,{item:!0,xs:12,mt:2,sx:{position:"relative"},children:(0,j.jsx)(l.Z,{variant:"contained",color:"secondary",fullWidth:!0,onClick:()=>{r((e=>e?[...e,{productName:"",price:"",qty:"",unit:"",subTotal:0}]:[{productName:"",price:"",qty:"",unit:"",subTotal:0}]))},sx:{borderRadius:2,textTransform:"capitalize"},children:"Add More"})})]})})}var P=r(13967),B=r(20890),w=r(93044),M=r(79836),k=r(56890),S=r(35855),A=r(53994),F=r(53382);const z=(0,c.forwardRef)(((e,t)=>{let{quotData:r}=e;const i=(0,P.Z)();return(0,j.jsxs)(a.Z,{ref:t,children:[(0,j.jsxs)(o.ZP,{container:!0,sx:{mb:4},children:[(0,j.jsx)(o.ZP,{item:!0,xs:7,children:(0,j.jsxs)(n.Z,{sx:{height:"100%"},alignItems:"flex-start",spacing:.5,children:[(0,j.jsx)(B.Z,{fontWeight:"bold",fontFamily:"Khmer Busra high",fontSize:16,children:"\u1798\u1784\u17d2\u1782\u179b\u179f\u17b7\u179a\u17b8\u1798\u17d2\u17a0\u17bc\u1794&\u178f\u17bb\u179a\u17c4\u1784\u1780\u17b6\u179a"}),(0,j.jsxs)(n.Z,{direction:"row",spacing:1.5,children:[(0,j.jsx)(B.Z,{fontWeight:"bold",fontFamily:"Khmer Busra high",fontSize:16,children:"\u17a2\u17b6\u179f\u17d0\u1799\u178a\u17d2\u178b\u17b6\u1793\u200b\u17d6"}),(0,j.jsx)(B.Z,{fontWeight:"bold",fontFamily:"Khmer Busra high",fontSize:16,children:"\u1794\u17bb\u179a\u17b8\u1788\u17bc\u1780\u179c\u17b6\u17e0\u17e3 \u1795\u17d2\u179b\u17bc\u179c\u179b\u17c1\u1781\u17e0\u17e3 \u1795\u17d2\u1791\u17c7\u179b\u17c1\u1781\u17e8\u17e2"})]}),(0,j.jsxs)(n.Z,{direction:"row",spacing:1.5,children:[(0,j.jsx)(B.Z,{fontWeight:"bold",fontFamily:"Khmer Busra high",fontSize:16,children:"\u1791\u17bc\u179a\u179f\u17d0\u1796\u17d2\u1791\u179b\u17c1\u1781\u200b\u17d6"}),(0,j.jsx)(B.Z,{fontWeight:"bold",fontFamily:"Khmer Busra high",fontSize:16,children:"+85581951133 | 011951133"})]})]})}),(0,j.jsxs)(o.ZP,{item:!0,xs:5,children:[(0,j.jsx)(w.Z,{variant:"square",src:"/images/mongkol_serey_logo_1000.png",alt:"logo",imgProps:{sx:{objectFit:"contain"}},sx:{mx:"auto",width:167,height:"auto",my:2}}),(0,j.jsxs)(o.ZP,{container:!0,children:[(0,j.jsx)(o.ZP,{item:!0,xs:4,children:(0,j.jsx)(B.Z,{whiteSpace:"nowrap",fontFamily:"Khmer Busra high",fontSize:16,children:"\u17a2\u178f\u17b7\u1790\u17b7\u1787\u1793\u200b"})}),(0,j.jsx)(o.ZP,{item:!0,xs:8,children:(0,j.jsx)(B.Z,{fontFamily:"Khmer Busra high",fontSize:16,children:"\u17d6 ".concat((null===r||void 0===r?void 0:r.customerName)||"....................")})}),(0,j.jsx)(o.ZP,{item:!0,xs:4,children:(0,j.jsx)(B.Z,{whiteSpace:"nowrap",fontFamily:"Khmer Busra high",fontSize:16,children:"\u1791\u17bc\u179a\u179f\u17d0\u1796\u17d2\u1791\u179b\u17c1\u1781\u200b"})}),(0,j.jsx)(o.ZP,{item:!0,xs:8,children:(0,j.jsx)(B.Z,{fontFamily:"Khmer Busra high",fontSize:16,children:"\u17d6 ".concat((null===r||void 0===r?void 0:r.phoneNumber)||"....................")})}),(0,j.jsx)(o.ZP,{item:!0,xs:4,children:(0,j.jsx)(B.Z,{whiteSpace:"nowrap",fontFamily:"Khmer Busra high",fontSize:16,children:"\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u200b"})}),(0,j.jsx)(o.ZP,{item:!0,xs:8,children:(0,j.jsx)(B.Z,{fontFamily:"Khmer Busra high",fontSize:16,children:"\u17d6 ".concat((null===r||void 0===r?void 0:r.event)||"....................")})}),(0,j.jsx)(o.ZP,{item:!0,xs:4,children:(0,j.jsx)(B.Z,{whiteSpace:"nowrap",fontFamily:"Khmer Busra high",fontSize:16,children:"\u1791\u17b8\u178f\u17b6\u17c6\u1784"})}),(0,j.jsx)(o.ZP,{item:!0,xs:8,children:(0,j.jsx)(B.Z,{fontFamily:"Khmer Busra high",fontSize:16,children:"\u17d6 ".concat((null===r||void 0===r?void 0:r.location)||"....................")})})]})]})]}),(0,j.jsx)(B.Z,{textAlign:"center",fontFamily:"Moul",gutterBottom:!0,children:"\u1782\u1798\u17d2\u179a\u17c4\u1784\u1785\u17c6\u178e\u17b6\u1799\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8"}),(0,j.jsxs)(M.Z,{sx:{"& thead  th, tbody  td":{border:"1px solid black",borderCollapse:"collapse",fontFamily:"Khmer Busra high",fontWeight:i.typography.fontWeightBold,py:1,color:"black",fontSize:16},"& thead th":{textAlign:"center"},"& .css-1b87so5-MuiTableCell-root":{color:"black"}},children:[(0,j.jsx)(k.Z,{children:(0,j.jsxs)(S.Z,{children:[(0,j.jsx)(A.Z,{width:"5%",children:(0,j.jsx)(B.Z,{textAlign:"center",fontFamily:"Moul",noWrap:!0,lineHeight:2,children:"\u179b.\u179a"})}),(0,j.jsx)(A.Z,{width:"40%",children:(0,j.jsx)(B.Z,{textAlign:"center",fontFamily:"Moul",noWrap:!0,lineHeight:2,children:"\u1788\u17d2\u1798\u17c4\u17c7\u179f\u1798\u17d2\u1797\u17b6\u179a\u17c8 \u179f\u17c1\u179c\u17b6\u1780\u1798\u17d2\u1798"})}),(0,j.jsx)(A.Z,{width:"15%",children:(0,j.jsx)(B.Z,{textAlign:"center",fontFamily:"Moul",noWrap:!0,lineHeight:2,children:"\u1785\u17c6\u1793\u17bd\u1793"})}),(0,j.jsx)(A.Z,{width:"20%",children:(0,j.jsx)(B.Z,{textAlign:"center",fontFamily:"Moul",noWrap:!0,lineHeight:2,children:"\u178f\u1798\u17d2\u179b\u17c3\u179a\u17b6\u1799"})}),(0,j.jsx)(A.Z,{width:"20%",children:(0,j.jsx)(B.Z,{textAlign:"center",fontFamily:"Moul",noWrap:!0,lineHeight:2,children:"\u179f\u179a\u17bb\u1794\u179a\u1784"})})]})}),(0,j.jsxs)(F.Z,{children:[null===r||void 0===r?void 0:r.list.map(((e,t)=>(0,j.jsxs)(S.Z,{children:[(0,j.jsx)(A.Z,{sx:{textAlign:"center"},children:t+1}),(0,j.jsx)(A.Z,{children:e.productName}),(0,j.jsx)(A.Z,{sx:{textAlign:"center"},children:e.qty}),(0,j.jsx)(A.Z,{sx:{textAlign:"center"},children:e.price}),(0,j.jsx)(A.Z,{sx:{textAlign:"center"},children:e.subTotal>0?e.subTotal:""})]},t))),(0,j.jsx)(S.Z,{children:(0,j.jsxs)(A.Z,{colSpan:5,sx:{textAlign:"center"},children:[(0,j.jsx)(B.Z,{textAlign:"center",fontFamily:"Moul",noWrap:!0,lineHeight:2,children:"\u1785\u17c6\u178e\u17b6\u1799\u179f\u179a\u17bb\u1794\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u1791\u17b6\u17c6\u1784\u1798\u17bc\u179b"}),(0,j.jsx)(B.Z,{fontFamily:"Khmer Busra high",lineHeight:2,fontWeight:"bold",variant:"h6",textAlign:"center",children:null!==r&&void 0!==r&&r.total?"".concat(Intl.NumberFormat().format(null===r||void 0===r?void 0:r.total),"$"):"...............................$"})]})})]})]}),(0,j.jsx)(B.Z,{fontFamily:"Moul",lineHeight:2,mt:2,textAlign:"center",variant:"subtitle1",children:"\u1780\u17b6\u179a\u1785\u17c6\u178e\u17b6\u1799\u17a2\u17b6\u1785\u1798\u17b6\u1793\u1780\u17b6\u179a\u1794\u17d2\u179a\u17c2\u1794\u17d2\u179a\u17bd\u179b\u17a2\u17b6\u179f\u17d2\u179a\u17d0\u1799\u179b\u17be\u1780\u17b6\u179a\u1794\u178f\u17cb\u1794\u17c2\u1793\u1780\u17d2\u1793\u17bb\u1784\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u1787\u17b6\u1780\u17cb\u179f\u17d2\u178a\u17c2\u1784\u17d4"})]})}));var N=r(80175),T=r(51378),E=r(97573),D=r(52007),C=r.n(D),I=["variant","color","size"],W=function(e){var t=e.color;return c.createElement(c.Fragment,null,c.createElement("path",{d:"M20.36 12.732c-.37 0-.68-.28-.72-.65a7.614 7.614 0 0 0-3.24-5.44.723.723 0 0 1-.18-1.01c.23-.33.68-.41 1.01-.18a9.115 9.115 0 0 1 3.86 6.48c.04.4-.25.76-.65.8h-.08ZM3.74 12.781h-.07a.73.73 0 0 1-.65-.8 9.083 9.083 0 0 1 3.8-6.49c.32-.23.78-.15 1.01.17.23.33.15.78-.17 1.01a7.632 7.632 0 0 0-3.19 5.45c-.04.38-.36.66-.73.66ZM15.99 21.1c-1.23.59-2.55.89-3.93.89-1.44 0-2.81-.32-4.09-.97a.715.715 0 0 1-.32-.97c.17-.36.61-.5.97-.33.63.32 1.3.54 1.98.67.92.18 1.86.19 2.78.03.68-.12 1.35-.33 1.97-.63.37-.17.81-.03.97.34.18.36.04.8-.33.97ZM12.05 2.012c-1.55 0-2.82 1.26-2.82 2.82 0 1.56 1.26 2.82 2.82 2.82 1.56 0 2.82-1.26 2.82-2.82 0-1.56-1.26-2.82-2.82-2.82ZM5.05 13.871c-1.55 0-2.82 1.26-2.82 2.82 0 1.56 1.26 2.82 2.82 2.82 1.56 0 2.82-1.26 2.82-2.82 0-1.56-1.27-2.82-2.82-2.82ZM18.95 13.871c-1.55 0-2.82 1.26-2.82 2.82 0 1.56 1.26 2.82 2.82 2.82 1.56 0 2.82-1.26 2.82-2.82 0-1.56-1.26-2.82-2.82-2.82Z",fill:t}))},O=function(e){var t=e.color;return c.createElement(c.Fragment,null,c.createElement("path",{d:"M16.96 6.172c2 1.39 3.38 3.6 3.66 6.15M3.49 12.369a8.601 8.601 0 0 1 3.6-6.15M8.19 20.941c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M9.28 4.92a2.78 2.78 0 1 0 2.78-2.78M4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM21.94 17.14a2.78 2.78 0 1 0-2.78 2.78",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},R=function(e){var t=e.color;return c.createElement(c.Fragment,null,c.createElement("path",{opacity:".4",d:"M20.36 12.732c-.37 0-.68-.28-.72-.65a7.614 7.614 0 0 0-3.24-5.44.723.723 0 0 1-.18-1.01c.23-.33.68-.41 1.01-.18a9.115 9.115 0 0 1 3.86 6.48c.04.4-.25.76-.65.8h-.08ZM3.74 12.781h-.07a.73.73 0 0 1-.65-.8 9.083 9.083 0 0 1 3.8-6.49c.32-.23.78-.15 1.01.17.23.33.15.78-.17 1.01a7.632 7.632 0 0 0-3.19 5.45c-.04.38-.36.66-.73.66ZM15.99 21.1c-1.23.59-2.55.89-3.93.89-1.44 0-2.81-.32-4.09-.97a.715.715 0 0 1-.32-.97c.17-.36.61-.5.97-.33.63.32 1.3.54 1.98.67.92.18 1.86.19 2.78.03.68-.12 1.35-.33 1.97-.63.37-.17.81-.03.97.34.18.36.04.8-.33.97Z",fill:t}),c.createElement("path",{d:"M12.05 2.012c-1.55 0-2.82 1.26-2.82 2.82 0 1.56 1.26 2.82 2.82 2.82 1.56 0 2.82-1.26 2.82-2.82 0-1.56-1.26-2.82-2.82-2.82ZM5.05 13.871c-1.55 0-2.82 1.26-2.82 2.82 0 1.56 1.26 2.82 2.82 2.82 1.56 0 2.82-1.26 2.82-2.82 0-1.56-1.27-2.82-2.82-2.82ZM18.95 13.871c-1.55 0-2.82 1.26-2.82 2.82 0 1.56 1.26 2.82 2.82 2.82 1.56 0 2.82-1.26 2.82-2.82 0-1.56-1.26-2.82-2.82-2.82Z",fill:t}))},L=function(e){var t=e.color;return c.createElement(c.Fragment,null,c.createElement("path",{d:"M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.601 8.601 0 0 1 3.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM19.17 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},Q=function(e){var t=e.color;return c.createElement(c.Fragment,null,c.createElement("path",{d:"M20.62 13.07c-.38 0-.7-.29-.75-.67a7.834 7.834 0 0 0-3.34-5.61.752.752 0 0 1-.19-1.04c.24-.34.71-.42 1.04-.19a9.335 9.335 0 0 1 3.97 6.68c.04.41-.25.78-.67.83h-.06ZM3.49 13.12h-.08a.766.766 0 0 1-.67-.83c.27-2.69 1.7-5.12 3.91-6.69a.753.753 0 1 1 .87 1.23 7.847 7.847 0 0 0-3.29 5.62.74.74 0 0 1-.74.67ZM12.06 22.61c-1.48 0-2.89-.34-4.21-1a.75.75 0 0 1-.33-1.01.75.75 0 0 1 1.01-.33 7.904 7.904 0 0 0 6.94.06c.37-.18.82-.02 1 .35.18.37.02.82-.35 1-1.28.62-2.64.93-4.06.93ZM12.06 8.439a3.53 3.53 0 1 1-.002-7.059 3.53 3.53 0 0 1 .001 7.059Zm0-5.55c-1.12 0-2.03.91-2.03 2.03 0 1.12.91 2.03 2.03 2.03 1.12 0 2.03-.91 2.03-2.03 0-1.12-.92-2.03-2.03-2.03ZM4.83 20.67a3.53 3.53 0 1 1 0-7.06 3.53 3.53 0 0 1 0 7.06Zm0-5.56c-1.12 0-2.03.91-2.03 2.03 0 1.12.91 2.03 2.03 2.03 1.12 0 2.03-.91 2.03-2.03 0-1.12-.91-2.03-2.03-2.03ZM19.17 20.67a3.53 3.53 0 1 1 3.53-3.53c-.01 1.94-1.59 3.53-3.53 3.53Zm0-5.56c-1.12 0-2.03.91-2.03 2.03 0 1.12.91 2.03 2.03 2.03 1.12 0 2.03-.91 2.03-2.03a2.038 2.038 0 0 0-2.03-2.03Z",fill:t}))},$=function(e){var t=e.color;return c.createElement(c.Fragment,null,c.createElement("path",{opacity:".34",d:"M16.96 6.172c2 1.39 3.38 3.6 3.66 6.15M3.49 12.369a8.601 8.601 0 0 1 3.6-6.15M8.19 20.941c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),c.createElement("path",{d:"M12.06 7.7a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM4.83 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56ZM19.17 19.92a2.78 2.78 0 1 0 0-5.56 2.78 2.78 0 0 0 0 5.56Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},K=(0,c.forwardRef)((function(e,t){var r=e.variant,i=e.color,o=e.size,n=(0,E._)(e,I);return c.createElement("svg",(0,E.a)({},n,{xmlns:"http://www.w3.org/2000/svg",ref:t,width:o,height:o,viewBox:"0 0 24 24",fill:"none"}),function(e,t){switch(e){case"Bold":return c.createElement(W,{color:t});case"Broken":return c.createElement(O,{color:t});case"Bulk":return c.createElement(R,{color:t});case"Linear":default:return c.createElement(L,{color:t});case"Outline":return c.createElement(Q,{color:t});case"TwoTone":return c.createElement($,{color:t})}}(r,i))}));K.propTypes={variant:C().oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:C().string,size:C().oneOfType([C().string,C().number])},K.defaultProps={variant:"Linear",color:"currentColor",size:"24"},K.displayName="Share";var V=r(8694),q=r(61146),H=r.n(q),_=r(52764);function G(){const[e,t]=(0,c.useState)([{productName:"",price:"",qty:"",unit:"",subTotal:0}]),[r,h]=(0,c.useState)(),m=(0,c.useRef)(null),{navigate:u}=(0,_.Z)(),{isSmDown:x}=(0,y.Z)(),p=(0,d.cI)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(s.Z,{pageTitle:"Quotation"}),(0,j.jsx)(i.Z,{elevation:1,className:"hide-scrollbar",sx:{mx:2,height:"calc(100vh - 90px)",overflow:"auto"},children:(0,j.jsxs)(o.ZP,{container:!0,children:[(0,j.jsxs)(o.ZP,{item:!0,md:6,sm:12,sx:{px:4},children:[(0,j.jsxs)(n.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",pt:2,pb:6,children:[(0,j.jsx)(l.Z,{onClick:()=>u(-1),sx:{"&:hover":{background:"transparent"},color:e=>e.palette.common.black,fontSize:e=>e.typography.h6,textTransform:"capitalize"},startIcon:(0,j.jsx)(N.Z,{}),children:"Back"}),(0,j.jsxs)(n.Z,{direction:"row",spacing:2,children:[r&&(0,j.jsx)(H(),{pageStyle:V.mX,documentTitle:"Quotation",trigger:()=>(0,j.jsx)(l.Z,{variant:"contained",color:"info",sx:{borderRadius:1.5,textTransform:"capitalize",color:e=>e.palette.common.white},startIcon:(0,j.jsx)(T.Z,{size:"24"}),children:"Print"}),content:()=>m.current}),(0,j.jsx)(l.Z,{variant:"contained",sx:{borderRadius:1.5,textTransform:"capitalize",color:e=>e.palette.common.white},type:"submit",color:"primary",form:"hook-form",startIcon:(0,j.jsx)(K,{size:"24"}),children:"Generate"})]})]}),(0,j.jsx)(d.RV,{...p,children:(0,j.jsx)("form",{onSubmit:p.handleSubmit((e=>h(e))),id:"hook-form",className:"hide-scrollbar",style:{height:"calc(100vh - 198px)",overflow:"auto"},children:(0,j.jsx)(b,{listItem:e,setListItem:t})})})]}),!x&&(0,j.jsx)(o.ZP,{item:!0,md:6,sm:12,children:(0,j.jsx)(a.Z,{className:"hide-scrollbar",sx:{transform:"scale(0.9)",height:"calc(100vh - 90px)",overflow:"auto"},children:(0,j.jsx)(z,{ref:m,quotData:r})})})]})})]})}},82139:(e,t,r)=>{r.d(t,{F5:()=>d,Pk:()=>c,V2:()=>h,Xk:()=>l,cF:()=>n,d9:()=>a,lE:()=>i,oQ:()=>s,u7:()=>o});const i=[{id:void 0,title:"\u1780\u1798\u17d2\u179b\u17b6\u17c6\u1784\u1785\u17bb\u1784\u1797\u17c5",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1790\u17d2\u179b\u17c3\u1787\u17bd\u179b\u179f\u1798\u17d2\u1797\u17b6\u179a\u17c8",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u17a1\u17b6\u1793\u178a\u17b9\u1780",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u17a0\u17d2\u1782\u17b6\u179f",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u179f\u17b6\u1785\u17cb\u1787\u17d2\u179a\u17bc\u1780",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u179f\u17b6\u1785\u17cb\u1791\u17b6",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u179f\u17b6\u1785\u17cb\u1782\u17c4",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u179f\u17b6\u1785\u17cb\u1798\u17b6\u1793\u17cb",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1782\u17d2\u179a\u17bf\u1784\u179f\u1798\u17bb\u1791\u17d2\u179a",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u179f\u17b6\u1785\u17cb\u1796\u1796\u17c2",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u178f\u17d2\u179a\u17b8\u1786\u17d2\u178a\u17c4\u179a",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u178f\u17d2\u179a\u17b8\u1786\u17d2\u178a\u17bb\u1784",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u178f\u17d2\u179a\u17b8\u178f\u17bb\u1780\u17c2",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u178f\u17d2\u179a\u17b8\u179f\u17bb\u1784\u17a0\u17ba",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1787\u17d2\u179a\u17bc\u1780\u1781\u17d2\u179c\u17c3",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1791\u17b6\u1781\u17d2\u179c\u17c3",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1794\u1793\u17d2\u179b\u17c2",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1794\u17d2\u179a\u17a0\u17b7\u178f\u1794\u17b6\u1780\u17cb\u179f\u17c0\u1794 \u1787\u17be\u1784\u1791\u17b6",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1785\u17b6\u17a0\u17bd\u1799",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u179a\u17c4\u1784\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1780\u1798\u17d2\u179a\u17b6\u179b\u1796\u17d2\u179a\u17c6",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1780\u17d2\u178a\u17b6\u1796\u17b7\u179f",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u17a2\u17c6\u1796\u17bc\u179b \u1780\u1784\u17d2\u17a0\u17b6\u179a",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u17a2\u17c6\u1796\u17bc\u179b \u1782\u17d2\u179a\u17b8\u179f\u179f\u17d2\u1791\u17b6\u179b\u17cb",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u1797\u17d2\u179b\u17be\u1784",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1785\u17b6\u1794\u17cb\u1780\u17d2\u179a\u178e\u17b6\u178f\u17cb\u1798\u17bb\u1781\u179a\u17c4\u1784",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u179f\u17c1\u179c\u17b6\u1796\u17b7\u1792\u17b8\u1780\u17b6\u179a",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1793\u17c6\u1794\u17bb\u17d0\u1784",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1786\u17b6\u1781\u17d2\u179c\u17c3 \u179f\u178e\u17d2\u178a\u17c2\u1780",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1794\u1784\u17d2\u17a2\u17c2\u1798",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u178f\u17d2\u179a\u17b8\u1786\u17d2\u17a2\u17be\u179a",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1796\u1784\u178f\u17d2\u179a\u17b8",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1791\u17b9\u1780\u1780\u1780\u17a2\u1793\u17b6\u1798\u17d0\u1799",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u17a2\u1784\u17d2\u1780\u179a",totalPrice:0,paidBy:"",other:""}],o=["ACLEDA","ABA","WING","BAKONG","CANADIA","TRUE MONEY","Cash"],n={ACLEDA:"#143c6d",ABA:"#005b7a",WING:"#a4c535",BAKONG:"#dc222c",CANADIA:"#D61229","TRUE MONEY":"#f88a30",Cash:"#BB9300"},l=["\u1798\u17a0\u17b6\u179f\u1798\u17d2\u1794\u178f\u17d2\u178f\u17b7\u1791\u17b6\u17c6\u1784\u17e5","\u1786\u17b6\u1794\u17c9\u17b6\u179c\u17a0\u17bb\u17ba \u178f\u17c5\u17a0\u17ca\u17bc\u1796\u1784\u1798\u17b6\u1793\u17cb 10\u1780\u17d2\u179a\u17a1","\u1797\u17d2\u179b\u17b6\u1798\u17c9\u17b6\u1789\u17c9\u17b6\u178e\u17c1\u179f\u17b6\u1785\u17cb\u1782\u17c4 ","\u1794\u1784\u17d2\u1782\u17b6\u1794\u17c6\u1796\u1784\u1781\u17d2\u1791\u17b9\u1798\u179f","\u178f\u17d2\u179a\u17b8\u1786\u17d2\u1796\u17bb\u1784\u1785\u17c6\u17a0\u17bb\u1799\u1780\u17d2\u179a\u17bc\u1785\u1786\u17d2\u1798\u17b6 \u1791\u17b9\u1780\u178a\u17c4\u17c7\u1782\u17c4\u1786\u17c5","\u1798\u17d2\u1787\u17bc\u179a\u1799\u17bd\u1793\u1794\u1784\u17d2\u1780\u1784","\u1794\u17b6\u1799\u1786\u17b6\u1782\u17d2\u179a\u17b6\u1794\u17cb\u1788\u17bc\u1780 & \u1794\u17b6\u1799\u179f","\u1794\u1784\u17d2\u17a2\u17c2\u1798\u179f\u1784\u1781\u17d2\u1799\u17b63\u179f\u17d2\u179a\u1791\u17b6\u1794\u17cb","\u1780\u17d2\u1784\u17b6\u1793\u1781\u17d2\u179c\u17c3\u1791\u17b9\u1780\u1783\u17d2\u1798\u17bb\u17c6 \u1791\u17b6\u1781\u17d2\u179c\u17c3\u1794\u17c9\u17c1\u1780\u17b6\u17c6\u1784","\u1786\u17b6\u1795\u17d2\u179f\u17b7\u178f\u178f\u17bb\u1784\u1780\u17bc\u179c \u1794\u1793\u17d2\u179b\u17c2\u1794\u1789\u17d2\u1787\u17c7\u1796\u178e\u17cd","\u1798\u17d2\u1787\u17bc\u179a\u1782\u17d2\u179a\u17bf\u1784\u1796\u17c4\u17c7\u1782\u17c4","\u1794\u17b6\u1799\u1786\u17b6\u1796\u1784\u1791\u17b6\u1794\u17d2\u179a\u17c3 & \u1794\u17b6\u1799\u179f","\u1794\u1784\u17d2\u17a2\u17c2\u1798\u1785\u17c1\u1780\u1781\u17d2\u1791\u17b7\u17c7 \u1796\u1784\u1798\u17b6\u1793\u17cb","\u1794\u17d2\u179a\u17a0\u17b7\u178f\u178f\u17d2\u179a\u17b8\u179f\u17d2\u179b\u17b6\u178f","\u1782\u17b6\u179c\u1794\u17c6\u1796\u1784","\u1794\u17d2\u179a\u17a0\u17b7\u178f\u17a2\u17c6\u1796\u17c5","\u1791\u17b6\u1795\u17d2\u179b\u17b7\u178f \u1787\u17d2\u179a\u1780\u17cb\u1786\u17c3\u1790\u17b6\u179c","\u1798\u17b6\u1793\u17cb\u1791\u17b9\u1798\u1785\u17c6\u17a0\u17bb\u1799","\u1794\u1784\u17d2\u1782\u17b6\u179a\u17bb\u17c6\u179f\u17d2\u1794\u17c3","\u178f\u17d2\u179a\u17b8\u179f\u17bb\u1784\u17a0\u17ba\u1785\u17c6\u17a0\u17bb\u1799\u1780\u17d2\u179a\u17bc\u1785\u1786\u17d2\u1798\u17b6","\u178f\u17bb\u1784\u1799\u17b6\u17c6\u1780\u17bc\u1793\u1780\u17b6\u178f\u17cb","\u1794\u17b6\u1799\u1786\u17b6\u1799\u17c9\u17b6\u1784\u1785\u17bc\u179c \u1794\u17b6\u1799\u179f","\u1794\u1784\u17d2\u17a2\u17c2\u1798\u1782\u17d2\u179a\u17b6\u1794\u17cb\u1788\u17bc\u1780","\u1794\u1784\u17d2\u17a2\u17c2\u1798\u178f\u17d2\u1793\u17c4\u178f","\u178f\u17d2\u179a\u17b8\u1794\u17d2\u179a\u1798\u17c9\u17b6\u1785\u17c0\u1793","\u178f\u17b8\u17d2\u179a\u1794\u17d2\u179a\u1798\u17c9\u17b6 \u1785\u17c6\u17a0\u17bb\u1799\u1796\u1784\u1791\u17b6","\u178f\u17d2\u179a\u17b8\u1794\u17c6\u1796\u1784\u179f\u17b6\u17d2\u179c\u1799 \u1791\u17b9\u1780\u178f\u17d2\u179a\u17b8\u17a2\u17c6\u1796\u17b7\u179b\u1791\u17bb\u17c6","\u1798\u17d2\u1787\u17bc\u1799\u17bd\u1793\u1782\u17d2\u179a\u17bf\u1784\u179f\u1798\u17bb\u1791\u17d2\u179a","\u179a\u17c4\u1784\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u1785\u17b6\u1794\u17cb\u1780\u17d2\u179a\u178e\u17b6\u178f\u17cb\u1798\u17c9\u17bc\u178f\u1790\u17d2\u1798\u17b8","\u17a2\u17c6\u1796\u17bc\u179b\u1782\u17d2\u179a\u17b8\u179f\u17d2\u178f\u17b6\u179b\u17cb","\u1780\u1784\u17d2\u17a0\u17b6\u179a\u178f\u17d2\u179a\u1787\u17b6\u1780\u17cb","\u1796\u17d2\u179a\u17c6\u1780\u17d2\u179a\u17a0\u1798\u1798\u17bd\u1799\u1795\u17d2\u179b\u17bb\u179c\u178a\u17be\u179a","\u1791\u17b9\u1780\u1780\u1780\u17a2\u1793\u17b6\u1798\u17d0\u1799","\u1780\u17d2\u1794\u17b6\u179b\u1787\u17d2\u179a\u17bc\u1780\u17e1 \u1798\u17b6\u1793\u17cb\u179f\u17d2\u1784\u17c4\u179a\u17e1\u1782\u17bc","\u17a2\u17b6\u17a0\u17b6\u179a\u179f\u17c2\u1793\u1780\u17bb\u1784\u1798\u17c9\u17b6","\u179f\u17c1\u179c\u17b6\u1796\u17b7\u1792\u17b8\u1780\u17b6\u179a \u17e7\u1793\u17b6\u1780\u17cb","\u1794\u1794\u179a\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780 \u17e2\u1781\u17d2\u1791\u17c7 (\u179b\u17be\u179f 25\u17e0$/\u1781\u17d2\u1791\u17c7)","\u1794\u17b6\u1799\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb \u17e1\u17e1\u178f\u17bb (\u179b\u17be\u179f 8\u17e0$/\u178f\u17bb)","\u1780\u17d2\u178f\u17b6\u1796\u17b8\u179f 3$/m2","\u1794\u1793\u17d2\u1791\u1794\u17cb\u1791\u17b9\u1780\u1785\u179b\u17d0\u178f 100$/pc","\u178f\u17d2\u179a\u17b8\u1794\u17d2\u179a\u1798\u17c9\u17b6\u1785\u17c6\u17a0\u17bb\u1799","\u178f\u17d2\u179a\u17b8\u1794\u17c6\u1796\u1784\u17a1\u1794\u17cb\u17a1\u17c2","\u179f\u17ca\u17bb\u1794\u1785\u17b6\u1794\u17cb\u1786\u17b6\u1799\u1782\u17d2\u179a\u17bf\u1784\u179f\u1798\u17bb\u1791\u17d2\u179a","\u1786\u17b6\u1786\u17d2\u17a2\u17b9\u1784\u1787\u17c6\u1793\u17b8\u1794\u17c6\u1796\u1784\u1794\u1793\u17d2\u179b\u17c2\u1787\u17bc\u179a\u17a2\u17c2\u1798","\u178f\u17bb\u1784\u1799\u17b6\u17c6\u1782\u17d2\u179a\u17bf\u1784\u179f\u1798\u17bb\u1791\u17d2\u179a","\u178f\u17d2\u179a\u17b8\u179f\u17bb\u1784\u17a0\u17ba\u1794\u17c6\u1796\u1784\u1794\u17d2\u179a\u17b6\u17c6\u179a\u179f\u1787\u17b6\u178f\u17b7","\u1789\u17b6\u17c6\u1787\u17be\u1784\u1791\u17b6\u1782\u17d2\u179a\u17bf\u1784\u179f\u1798\u17bb\u1791\u17d2\u179a","\u1791\u17b6\u1781\u17d2\u179c\u17c3\u1794\u17c9\u17c1\u1780\u17b6\u17c6\u1784","\u1794\u17b6\u1799\u179f\u17c2\u1793\u1780\u17bb\u1784\u1798\u17c9\u17b6 1\u1790\u17b6\u179f","\u1786\u17b6\u1794\u1784\u17d2\u1782\u17b6 \u1781\u17b6\u178f\u17cb\u178e\u17b6\u1785\u17b7\u1793","\u178f\u17d2\u179a\u17b8\u1780\u17d2\u179a\u17a0\u1798\u1785\u17c6\u17a0\u17bb\u1799\u1798\u17b8\u179f\u17bd\u179a","\u179f\u17ca\u17bb\u1794\u1780\u17d2\u179a\u1796\u17c7\u1787\u17d2\u179a\u17bc\u1780\u1781\u17d2\u1785\u17b8","\u179f\u17ca\u17bb\u1794\u1780\u17d2\u178f\u17b6\u1798\u1795\u17d2\u179f\u17b7\u178f\u1798\u17b6\u179f 10\u1780\u17d2\u179a\u17a1","\u178f\u17d2\u179a\u17b8\u1786\u17d2\u1796\u17bb\u1784\u1785\u17c6\u17a0\u17bb\u1799\u1791\u17b9\u1780\u179f\u17ca\u17b8\u17a2\u17c0\u179c\u1785\u17b7\u1793"],a=["\u178f\u17bb","\u1785\u17b6\u1793","\u1781\u17d2\u1791\u17c7","\u1793\u17b6\u1780\u17cb","\u1788\u17bb\u178f","m\xb2","\u1782\u17d2\u179a\u17bf\u1784","\u1794\u17d2\u179a\u17a1\u17c4\u17c7","pcs"],s=["Wedding","Birthday","Party","House Warming","Engagement"];let c;!function(e){e[e.Jan=1]="Jan",e[e.Feb=2]="Feb",e[e.Mar=3]="Mar",e[e.Apr=4]="Apr",e[e.May=5]="May",e[e.Jun=6]="Jun",e[e.Jul=7]="Jul",e[e.Aug=8]="Aug",e[e.Sep=9]="Sep",e[e.Oct=10]="Oct",e[e.Nov=11]="Nov",e[e.Dec=12]="Dec"}(c||(c={}));const d={January:"\u1798\u1780\u179a\u17b6",February:"\u1780\u17bb\u1798\u17d2\u1797\u17c8",March:"\u1798\u17b7\u1793\u17b6",April:"\u1798\u17c1\u179f\u17b6",May:"\u17a7\u179f\u1797\u17b6",June:"\u1798\u17b7\u1790\u17bb\u1793\u17b6",July:"\u1780\u1780\u17d2\u1780\u178a\u17b6",August:"\u179f\u17b8\u17a0\u17b6",September:"\u1780\u1789\u17d2\u1789\u17b6",October:"\u178f\u17bb\u179b\u17b6",November:"\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6",December:"\u1792\u17d2\u1793\u17bc"},h={week:0,month:1,year:2}},8694:(e,t,r)=>{r.d(t,{EA:()=>o,V0:()=>i,ZZ:()=>n,_8:()=>l,mX:()=>s,p7:()=>a});const i={phoneNumber:/0[0-9]{8}$|0[0-9]{9}$/,numberOnly:/^-?[0-9]\d*(\.\d+)?$/,positiveNumberOnly:/^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/,positiveNumberOnlyandEmpty:/$^|^[0-9]\d*(\.\d+)?\.?$/,email:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,textOnly:/^[a-zA-Z ]*$/},o=e=>e<1e3||e>=1e3&&e<1e6?e.toLocaleString(void 0,{minimumFractionDigits:2}):e>=1e6&&e<1e9?+(e/1e6).toFixed(1)+"M":e>=1e9&&e<1e12?+(e/1e9).toFixed(1)+"B":e>=1e12?+(e/1e12).toFixed(1)+"T":void 0,n=e=>{var t=0;let r;if(e)for(r=0;r<e.length;r+=1)t=e.charCodeAt(r)+((t<<5)-t);let i="#";for(r=0;r<3;r+=1){i+="00".concat((t>>8*r&255).toString(16)).slice(-2)}return i},l=e=>{const t="00000";return t.substring(0,t.length-e.length)+e},a=e=>Intl.NumberFormat("en-US",{notation:"compact",compactDisplay:"short"}).format(e),s=" @page {\n  size: A4;\n  margin:2.54cm;\n}\n\n@media all {\n  .pagebreak {\n    display: none;\n  }\n}\n\n@media print {\n  .pagebreak {\n    page-break-before: always;\n  }\n}"},93044:(e,t,r)=>{r.d(t,{Z:()=>v});var i=r(63366),o=r(87462),n=r(72791),l=r(28182),a=r(94419),s=r(66934),c=r(31402),d=r(76189),h=r(80184);const m=(0,d.Z)((0,h.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var u=r(75878),x=r(21217);function p(e){return(0,x.Z)("MuiAvatar",e)}(0,u.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const Z=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],f=(0,s.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((e=>{let{theme:t,ownerState:r}=e;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&(0,o.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),g=(0,s.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),j=(0,s.ZP)(m,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});const v=n.forwardRef((function(e,t){const r=(0,c.Z)({props:e,name:"MuiAvatar"}),{alt:s,children:d,className:m,component:u="div",imgProps:x,sizes:v,src:y,srcSet:b,variant:P="circular"}=r,B=(0,i.Z)(r,Z);let w=null;const M=function(e){let{crossOrigin:t,referrerPolicy:r,src:i,srcSet:o}=e;const[l,a]=n.useState(!1);return n.useEffect((()=>{if(!i&&!o)return;a(!1);let e=!0;const n=new Image;return n.onload=()=>{e&&a("loaded")},n.onerror=()=>{e&&a("error")},n.crossOrigin=t,n.referrerPolicy=r,n.src=i,o&&(n.srcset=o),()=>{e=!1}}),[t,r,i,o]),l}((0,o.Z)({},x,{src:y,srcSet:b})),k=y||b,S=k&&"error"!==M,A=(0,o.Z)({},r,{colorDefault:!S,component:u,variant:P}),F=(e=>{const{classes:t,variant:r,colorDefault:i}=e,o={root:["root",r,i&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,a.Z)(o,p,t)})(A);return w=S?(0,h.jsx)(g,(0,o.Z)({alt:s,src:y,srcSet:b,sizes:v,ownerState:A,className:F.img},x)):null!=d?d:k&&s?s[0]:(0,h.jsx)(j,{className:F.fallback}),(0,h.jsx)(f,(0,o.Z)({as:u,ownerState:A,className:(0,l.Z)(F.root,m),ref:t},B,{children:w}))}))}}]);
//# sourceMappingURL=967.1b48d8b4.chunk.js.map