"use strict";(self.webpackChunkmongkol_serey_cms=self.webpackChunkmongkol_serey_cms||[]).push([[595],{65172:(e,t,i)=>{i.d(t,{Z:()=>x});var r=i(72791),o=i(5574),n=i(55931),d=i(53767),a=i(20890),l=i(36151),s=i(20124),c=i(66254),u=i(59860),h=i(80184);const p=r.forwardRef((function(e,t){return(0,h.jsx)(n.Z,{direction:"up",ref:t,...e})}));function x(e){const{open:t,title:i,confirm:r,cancel:n,loading:x,...m}=e;return(0,h.jsx)(o.Z,{open:t,TransitionComponent:p,maxWidth:e.maxWidth,onClose:n,...m,children:(0,h.jsxs)(d.Z,{alignItems:"center",sx:{p:4},spacing:3,children:[(0,h.jsxs)(d.Z,{alignItems:"center",children:[(0,h.jsx)(s.Z,{size:"60",color:c.Z.palette.error.main,variant:"Bulk"}),(0,h.jsx)(a.Z,{variant:"body1",color:"error",children:i})]}),(0,h.jsxs)(d.Z,{direction:"row",spacing:4,children:[(0,h.jsx)(l.Z,{variant:"outlined",color:"error",sx:{"&:hover":{bgcolor:c.Z.palette.error.main,color:c.Z.palette.common.white}},onClick:n,children:"Cancel"}),(0,h.jsx)(u.Z,{onClick:r,loading:x,variant:"outlined",color:"info",loadingIndicator:"Deletting\u2026",children:"Confirm"})]})]})})}},73618:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(73974),o=(i(72791),i(80184));function n(e){const{open:t,onCloseDrawer:i,children:n,...d}=e;return(0,o.jsx)(r.ZP,{anchor:"right",open:t,onClose:i,PaperProps:{sx:{borderRadius:0,width:["100vw","100vw","50vw"]}},...d,children:n})}},86544:(e,t,i)=>{i.d(t,{Q:()=>o});var r=i(13400);const o=(0,i(66934).ZP)(r.Z)((e=>{let{theme:t}=e;return{borderRadius:t.spacing(1),background:t.palette.common.white,boxShadow:t.shadows[1]}}))},39421:(e,t,i)=>{i.d(t,{W:()=>n});var r=i(72791),o=i(80184);const n=r.memo((()=>(0,o.jsxs)("div",{className:"lds-facebook",children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]})))},93025:(e,t,i)=>{i.d(t,{Z:()=>o});var r=i(19218);const o=(0,i(66934).ZP)(r.Z)((e=>{let{theme:t}=e;return{width:"100%","& .MuiOutlinedInput-root":{borderRadius:t.spacing(1),background:t.palette.common.white,borderColor:t.palette.primary.main}}}))},62643:(e,t,i)=>{i.d(t,{Z:()=>o});var r=i(19218);const o=(0,i(66934).ZP)(r.Z)((e=>{let{theme:t}=e;return{background:t.palette.common.white,borderRadius:t.spacing(1),boxShadow:t.shadows[1],"& fieldset":{border:"1px solid ".concat(t.palette.divider),borderRadius:t.spacing(1)}}}))},84753:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(53767),o=i(20890),n=(i(72791),i(80184));const d=e=>{let{label:t,children:i}=e;return(0,n.jsxs)(r.Z,{spacing:1,width:"100%",children:[(0,n.jsx)(o.Z,{fontSize:14,children:t}),i]})}},85871:(e,t,i)=>{i.d(t,{Z:()=>h});var r=i(84395),o=i(34663),n=i(61889),d=i(20890),a=i(86544),l=(i(72791),i(69543)),s=i(69780),c=i(24296),u=i(80184);const h=e=>{let{children:t,pageTitle:i,endComponent:h}=e;const{isMdDown:p}=(0,s.Z)(),{openDrawer:x,setOpenDrawer:m}=(0,c.M$)();return(0,u.jsx)(r.Z,{position:"sticky",sx:{bgcolor:p?e=>e.palette.common.white:"background.paper",boxShadow:"none",borderRadius:0,mb:1},children:(0,u.jsx)(o.Z,{sx:{py:2,px:{sm:0}},children:(0,u.jsxs)(n.ZP,{container:!0,px:2,children:[(0,u.jsx)(n.ZP,{item:!0,xs:12,md:"auto",children:(0,u.jsxs)(n.ZP,{container:!0,children:[(0,u.jsx)(n.ZP,{item:!0,xs:!0,children:(0,u.jsx)(a.Q,{onClick:()=>m(!x),color:"primary",sx:{height:40,display:{xs:"block",md:"none"}},children:(0,u.jsx)(l.Z,{size:"24",variant:"Outline"})})}),(0,u.jsx)(n.ZP,{item:!0,xs:!0,children:(0,u.jsx)(d.Z,{variant:"h4",fontWeight:"bolder",children:i})}),(0,u.jsx)(n.ZP,{item:!0,xs:!0,sx:{display:"flex",justifyContent:"flex-end"},children:p&&h})]})}),(0,u.jsx)(n.ZP,{item:!0,xs:12,md:!0,children:t})]})})})}},69780:(e,t,i)=>{i.d(t,{Z:()=>n});var r=i(13967),o=i(95193);const n=()=>{const e=(0,r.Z)(),t=(0,o.Z)(e.breakpoints.down("sm")),i=(0,o.Z)(e.breakpoints.down("md")),n=(0,o.Z)(e.breakpoints.down("lg"));return{theme:e,isSmDown:t,isLgDown:n,isMdDown:i}}},40595:(e,t,i)=>{i.r(t),i.d(t,{default:()=>X});var r=i(59860),o=i(35527),n=i(53767),d=i(36151),a=i(63466),l=i(39281),s=i(20890),c=i(79836),u=i(53382),h=i(5574),p=i(61889),x=i(64884),m=i(64094),Z=i(38233),j=i(42877);const v={getStockList:async e=>{let{search:t}=e;return await Z.Z.get(j.J.stockList,{params:{search:t}})},addStock:async e=>{let{stockReq:t}=e;return await Z.Z.post(j.J.addStock,t)},deleteStock:async e=>{let{id:t}=e;return await Z.Z.delete(j.J.deleteStock.replace(":id","".concat(t)))}};var y=i(65172),g=i(73618),b=i(39421),f=i(62643),k=i(93025),S=i(85871),w=i(69780),B=i(60592),P=i(58536),C=i(50841),N=i(72791),A=i(61134),q=i(66254),D=i(8694),E=i(58406),I=i(23786),O=i(66172),R=i(56598),T=i(86544),Q=i(84753),W=i(16856),z=i(82139),F=i(80184);function V(e){let{handleOpenDrawer:t,openDrawer:i,methods:o,handleSubmitStock:l,addNewStock:c}=e;const{control:u,handleSubmit:h,setValue:p}=o,{isSmDown:x}=(0,w.Z)();return(0,F.jsx)(F.Fragment,{children:(0,F.jsxs)(R.Z,{children:[(0,F.jsxs)(n.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",py:3,children:[(0,F.jsxs)(s.Z,{variant:"h4",color:"secondary.main",fontWeight:"bold",children:[i," Stocks"]}),(0,F.jsx)(T.Q,{color:"error",onClick:()=>{t(""),o.clearErrors()},children:(0,F.jsx)(W.FU5,{})})]}),(0,F.jsx)("form",{onSubmit:h(l),children:(0,F.jsxs)(n.Z,{spacing:4,children:[(0,F.jsxs)(n.Z,{direction:x?"column":"row",spacing:4,children:[(0,F.jsx)(A.Qr,{control:u,name:"productName",defaultValue:"",rules:{required:{value:!0,message:"Product is required"}},render:e=>{let{field:t,fieldState:{error:i}}=e;return(0,F.jsx)(Q.Z,{label:"Product Name",children:(0,F.jsx)(k.Z,{placeholder:"Enter product name",error:Boolean(i),helperText:null===i||void 0===i?void 0:i.message,...t})})}}),(0,F.jsx)(A.Qr,{control:u,name:"price",rules:{required:{value:!0,message:"Price is required"},pattern:{value:D.V0.numberOnly,message:"Require number only"}},defaultValue:"",render:e=>{let{field:t,fieldState:{error:i}}=e;return(0,F.jsx)(Q.Z,{label:"Price",children:(0,F.jsx)(k.Z,{placeholder:"Enter price",...t,error:Boolean(i),helperText:null===i||void 0===i?void 0:i.message,InputProps:{startAdornment:(0,F.jsx)(a.Z,{position:"start",sx:{ml:-1.7},children:(0,F.jsx)(A.Qr,{control:u,name:"currency",defaultValue:"$",render:e=>{let{field:t}=e;return(0,F.jsxs)(E.Z,{...t,sx:{"& fieldset":{display:"none"}},children:[(0,F.jsx)(I.Z,{value:"$",children:"USD"}),(0,F.jsx)(I.Z,{value:"\u17db",children:"KHR"})]})}})})}})})}})]}),(0,F.jsxs)(n.Z,{direction:x?"column":"row",spacing:4,children:[(0,F.jsx)(A.Qr,{control:u,name:"quantity",defaultValue:"",rules:{required:{value:!0,message:"Quantity is required"},pattern:{value:D.V0.numberOnly,message:"Required only number"}},render:e=>{let{field:t,fieldState:{error:i}}=e;return(0,F.jsx)(Q.Z,{label:"Quantity",children:(0,F.jsx)(k.Z,{placeholder:"Enter quantity",error:Boolean(i),helperText:null===i||void 0===i?void 0:i.message,...t})})}}),(0,F.jsx)(A.Qr,{control:u,name:"unit",defaultValue:"",rules:{required:{value:!0,message:"Unit is required"}},render:e=>{let{field:t,fieldState:{error:i}}=e;return(0,F.jsx)(Q.Z,{label:"Unit",children:(0,F.jsx)(k.Z,{placeholder:"Enter unit",...t,error:Boolean(i),helperText:null===i||void 0===i?void 0:i.message,type:"text"})})}})]}),(0,F.jsxs)(n.Z,{direction:x?"column":"row",spacing:4,children:[(0,F.jsx)(A.Qr,{control:u,name:"shopName",defaultValue:"",render:e=>{let{field:t,fieldState:{error:i}}=e;return(0,F.jsx)(Q.Z,{label:"Shop Name",children:(0,F.jsx)(k.Z,{placeholder:"Enter shop name",error:Boolean(i),helperText:null===i||void 0===i?void 0:i.message,...t})})}}),(0,F.jsx)(A.Qr,{control:u,name:"paidBy",defaultValue:"",rules:{required:{value:!0,message:"Paid By is required"}},render:e=>{let{field:{onChange:t,...i},fieldState:{error:r}}=e;return(0,F.jsx)(Q.Z,{label:"Paid By",children:(0,F.jsx)(O.Z,{freeSolo:!0,disableClearable:!0,openOnFocus:!0,id:"paidby",...i,onInputChange:(e,t)=>{p("paidBy",t)},renderInput:e=>(0,F.jsx)(k.Z,{...e,error:Boolean(r),helperText:null===r||void 0===r?void 0:r.message,placeholder:"Enter paid by"}),options:z.u7.map(((e,t)=>e))})})}})]}),(0,F.jsx)(n.Z,{direction:"row",spacing:4,children:(0,F.jsx)(A.Qr,{control:u,name:"note",defaultValue:"",render:e=>{let{field:t}=e;return(0,F.jsx)(Q.Z,{label:"Note",children:(0,F.jsx)(k.Z,{placeholder:"Type something here...",...t,multiline:!0,rows:4})})}})}),(0,F.jsxs)(n.Z,{direction:"row",spacing:4,sx:{py:3},children:[(0,F.jsx)(d.Z,{onClick:()=>{t("")},variant:"contained",fullWidth:!0,sx:{borderRadius:3,p:2,textTransform:"capitalize",boxShadow:1,color:e=>e.palette.common.white,background:e=>e.palette.error.main,"&:hover":{background:e=>e.palette.error.main}},children:"Cancel"}),(0,F.jsx)(r.Z,{type:"submit",variant:"contained",fullWidth:!0,loading:c.loading,sx:{borderRadius:3,p:2,textTransform:"capitalize",boxShadow:1,color:e=>e.palette.common.white,"&:hover":{background:e=>e.palette.primary.main}},children:"Save"})]})]})})]})})}var M=i(35855),U=i(53994),$=i(81918),J=i(20068),L=i(56890),_=i(62634),G=i(13141),H=i(17139);const Y=e=>{let{stockList:t,handleOpenDrawer:i,setConfirmDelete:r,setUseStock:o,setOpenStock:d}=e;return(0,F.jsx)(F.Fragment,{children:null===t||void 0===t?void 0:t.data.map(((e,a)=>(0,F.jsxs)(M.Z,{sx:{"&:last-child td, &:last-child th":{border:0}},children:[(0,F.jsx)(U.Z,{children:a+1}),(0,F.jsx)(U.Z,{children:e.productName}),(0,F.jsx)(U.Z,{children:" ".concat(e.quantity," ").concat(e.unit)}),(0,F.jsxs)(U.Z,{children:[e.currency," ",Intl.NumberFormat().format(e.price)]}),(0,F.jsx)(U.Z,{children:(0,F.jsx)($.Z,{label:e.paidBy||"Cash",size:"small",sx:{backgroundColor:z.cF[e.paidBy||"Cash"]||q.Z.palette.info.main,color:"#fff"}})}),(0,F.jsx)(U.Z,{children:e.shopName}),(0,F.jsxs)(U.Z,{children:[e.usedStock," ",e.unit]}),(0,F.jsx)(U.Z,{children:(0,F.jsxs)(n.Z,{direction:"row",justifyContent:"flex-end",alignItems:"center",children:[(0,F.jsx)(J.Z,{title:"Edit",arrow:!0,children:(0,F.jsx)(T.Q,{color:"info",sx:{p:.5,mx:.5},onClick:()=>{i("Edit");let r=null===t||void 0===t?void 0:t.data.find((t=>t.id===e.id));o(r)},children:(0,F.jsx)(_.Z,{size:18})})}),(0,F.jsx)(J.Z,{title:"Use Stocks",arrow:!0,children:(0,F.jsx)(T.Q,{color:"info",sx:{p:.5,mx:.5},onClick:()=>{let i=null===t||void 0===t?void 0:t.data.find((t=>t.id===e.id));o(i),d(!0)},children:(0,F.jsx)(G.Z,{size:"18",color:q.Z.palette.warning.main})})}),(0,F.jsx)(J.Z,{title:"Delete",arrow:!0,children:(0,F.jsx)(T.Q,{color:"info",sx:{p:.5,mx:.5},onClick:()=>{r(e.id)},children:(0,F.jsx)(H.Z,{size:"18",color:q.Z.palette.error.main})})})]})})]},a)))})},K=()=>(0,F.jsx)(L.Z,{children:(0,F.jsxs)(M.Z,{children:[(0,F.jsx)(U.Z,{children:"No."}),(0,F.jsx)(U.Z,{children:"PRODUCT NAME"}),(0,F.jsx)(U.Z,{children:"QUANTITY"}),(0,F.jsx)(U.Z,{children:"PRICE"}),(0,F.jsx)(U.Z,{children:"PAID BY"}),(0,F.jsx)(U.Z,{children:"SHOP NAME"}),(0,F.jsx)(U.Z,{children:"Used Stock"}),(0,F.jsx)(U.Z,{})]})}),X=()=>{const[e,t]=(0,N.useState)(""),[i,Z]=(0,N.useState)(""),[j,E]=(0,N.useState)(),[I,O]=(0,N.useState)(),[R,T]=(0,N.useState)(!1),[Q,W]=(0,N.useState)(""),z=(0,A.cI)(),{setValue:M,control:U,handleSubmit:$}=z,{data:J,run:L,loading:_,refresh:G}=(0,x.Z)(v.getStockList,{manual:!0}),H=(0,x.Z)(v.addStock,{manual:!0,onSuccess:()=>{t(""),G(),T(!1),W("")}}),X=(0,x.Z)(v.deleteStock,{manual:!0,onSuccess:()=>{G(),E(void 0)}}),ee=(0,m.Z)(i,{wait:500});(0,N.useEffect)((()=>{L({search:ee})}),[ee]),(0,N.useEffect)((()=>{"Edit"===e?I&&(M("productName",I.productName),M("price",I.price.toString()),M("quantity",I.quantity.toString()),M("currency",I.currency),M("unit",I.unit),M("shopName",I.shopName),M("paidBy",I.paidBy),M("note",I.note)):(M("productName",""),M("price",""),M("quantity",""),M("unit",""),M("shopName",""),M("paidBy",""),M("note",""),z.clearErrors())}),[e,R,I]);const te=e=>{t(e)},{isMdDown:ie}=(0,w.Z)();return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(S.Z,{pageTitle:"Stocks"}),(0,F.jsxs)(o.Z,{elevation:1,sx:{mx:2,borderRadius:4,height:"calc(100vh - 100px)",maxWidth:"100%",overflow:"hidden",px:2,position:"relative"},children:[(0,F.jsxs)(n.Z,{direction:"row",justifyContent:"space-between",alignItems:"center",sx:{width:"100%",py:2},spacing:2,children:[(0,F.jsx)(d.Z,{variant:"contained",startIcon:(0,F.jsx)(B.Z,{}),sx:{color:q.Z.palette.common.white,boxShadow:q.Z.shadows[1],borderRadius:2,whiteSpace:"nowrap",height:40},onClick:()=>te("Add"),children:ie?"New":"Add New"}),(0,F.jsx)(f.Z,{onChange:e=>Z(e.currentTarget.value),placeholder:"Search...",size:"small",InputProps:{endAdornment:(0,F.jsx)(a.Z,{position:"end",children:(0,F.jsx)(P.Z,{size:"20",color:q.Z.palette.primary.main})})}})]}),(0,F.jsx)(l.Z,{sx:{height:"100%",overflow:"auto",pb:{xs:22,md:15,lg:0}},children:_?(0,F.jsx)(n.Z,{direction:"column",alignItems:"center",justifyContent:"center",sx:{height:"100%"},children:(0,F.jsx)(b.W,{})}):J&&0===J.data.length?(0,F.jsxs)(n.Z,{direction:"column",alignItems:"center",justifyContent:"center",spacing:1,sx:{height:"100%"},children:[(0,F.jsx)(C.Z,{size:"80",color:q.Z.palette.error.main}),(0,F.jsx)(s.Z,{variant:"h6",color:"error",children:"No Stock Data"})]}):(0,F.jsxs)(c.Z,{stickyHeader:!0,sx:{"& thead tr th":{background:e=>e.palette.background.paper,fontWeight:"600",whiteSpace:"nowrap"}},children:[(0,F.jsx)(K,{}),(0,F.jsx)(u.Z,{children:(0,F.jsx)(Y,{stockList:J,handleOpenDrawer:te,setConfirmDelete:E,setUseStock:O,setOpenStock:T})})]})})]}),(0,F.jsx)(y.Z,{open:void 0!==j,maxWidth:"xs",title:"Are you sure to delete?",cancel:()=>{E(void 0)},confirm:()=>{X.run({id:j||0})},loading:X.loading}),(0,F.jsxs)(A.RV,{...z,children:[(0,F.jsx)(g.Z,{open:!!e,onCloseDrawer:()=>{},children:(0,F.jsx)(V,{handleOpenDrawer:te,openDrawer:e,methods:z,handleSubmitStock:e=>{H.run({stockReq:{id:(null===I||void 0===I?void 0:I.id)||void 0,productName:e.productName,shopName:e.shopName,currency:e.currency,note:e.note,paidBy:e.paidBy,price:+e.price,quantity:+e.quantity,unit:e.unit,usedStock:0}})},addNewStock:H})}),(0,F.jsx)(h.Z,{open:R,maxWidth:"xs",onClose:()=>{T(!1),W(""),M("usedStock","")},children:(0,F.jsxs)(n.Z,{alignItems:"center",sx:{p:4},spacing:2,children:[(0,F.jsx)(s.Z,{variant:"h5",fontWeight:"medium",children:"Stocks Control"}),(0,F.jsxs)(n.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{width:"100%"},children:[(0,F.jsxs)(n.Z,{children:[(0,F.jsxs)(s.Z,{children:["Total : ",(0,F.jsx)("b",{children:null===I||void 0===I?void 0:I.quantity})," ",null===I||void 0===I?void 0:I.unit]}),(0,F.jsxs)(s.Z,{children:["Used : ",(0,F.jsx)("b",{children:null===I||void 0===I?void 0:I.usedStock})," ",null===I||void 0===I?void 0:I.unit]})]}),(0,F.jsx)(n.Z,{children:(0,F.jsxs)(s.Z,{children:["Current :"," ",(0,F.jsx)("b",{children:(null===I||void 0===I?void 0:I.quantity)&&(null===I||void 0===I?void 0:I.usedStock)&&(null===I||void 0===I?void 0:I.quantity)-(null===I||void 0===I?void 0:I.usedStock)||(null===I||void 0===I?void 0:I.quantity)})," ",null===I||void 0===I?void 0:I.unit]})})]}),(0,F.jsx)("form",{children:(0,F.jsxs)(p.ZP,{container:!0,columnSpacing:2,rowSpacing:2,children:[(0,F.jsx)(p.ZP,{item:!0,xs:12,sm:6,children:(0,F.jsx)(A.Qr,{control:U,name:"usedStock",defaultValue:"",rules:{pattern:{value:D.V0.numberOnly,message:"Required only number"}},render:e=>{let{field:t,fieldState:{error:i}}=e;return(0,F.jsxs)(n.Z,{direction:"column",children:[(0,F.jsx)(k.Z,{placeholder:"Enter value",error:Boolean(i)||!!Q,...t}),(0,F.jsx)(s.Z,{color:"error",variant:"caption",sx:{visibility:null!==i&&void 0!==i&&i.message||Q?"visible":"hidden"},children:(null===i||void 0===i?void 0:i.message)||Q})]})}})}),(0,F.jsx)(p.ZP,{item:!0,xs:6,sm:3,children:(0,F.jsx)(r.Z,{loading:H.loading,variant:"contained",fullWidth:!0,sx:{boxShadow:0,height:56,borderRadius:2},onClick:$((e=>{I&&+e.usedStock+I.usedStock>I.quantity?I.quantity-I.usedStock===0?W("Empty stock"):W("It over stocks"):I&&H.run({stockReq:{id:I.id,productName:I.productName,shopName:I.shopName,currency:I.currency,note:I.note,paidBy:I.paidBy,price:+I.price,quantity:+I.quantity,unit:I.unit,usedStock:I.usedStock?I.usedStock+ +e.usedStock:+e.usedStock}})})),children:"Use"})}),(0,F.jsx)(p.ZP,{item:!0,xs:6,sm:3,children:(0,F.jsx)(r.Z,{loading:H.loading,variant:"contained",color:"info",fullWidth:!0,sx:{boxShadow:0,height:56,color:e=>e.palette.common.white,borderRadius:2},onClick:$((e=>{I&&H.run({stockReq:{id:I.id,productName:I.productName,shopName:I.shopName,currency:I.currency,note:I.note,paidBy:I.paidBy,price:+I.price,quantity:+I.quantity+ +e.usedStock,unit:I.unit,usedStock:I.usedStock}}),W("")})),children:"Add"})})]})})]})})]})]})}},82139:(e,t,i)=>{i.d(t,{F5:()=>c,Pk:()=>s,V2:()=>u,Xk:()=>d,cF:()=>n,d9:()=>a,lE:()=>r,oQ:()=>l,u7:()=>o});const r=[{id:void 0,title:"\u1780\u1798\u17d2\u179b\u17b6\u17c6\u1784\u1785\u17bb\u1784\u1797\u17c5",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1790\u17d2\u179b\u17c3\u1787\u17bd\u179b\u179f\u1798\u17d2\u1797\u17b6\u179a\u17c8",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u17a1\u17b6\u1793\u178a\u17b9\u1780",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u17a0\u17d2\u1782\u17b6\u179f",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u179f\u17b6\u1785\u17cb\u1787\u17d2\u179a\u17bc\u1780",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u179f\u17b6\u1785\u17cb\u1791\u17b6",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u179f\u17b6\u1785\u17cb\u1782\u17c4",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u179f\u17b6\u1785\u17cb\u1798\u17b6\u1793\u17cb",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1782\u17d2\u179a\u17bf\u1784\u179f\u1798\u17bb\u1791\u17d2\u179a",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u179f\u17b6\u1785\u17cb\u1796\u1796\u17c2",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u178f\u17d2\u179a\u17b8\u1786\u17d2\u178a\u17c4\u179a",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u178f\u17d2\u179a\u17b8\u1786\u17d2\u178a\u17bb\u1784",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u178f\u17d2\u179a\u17b8\u178f\u17bb\u1780\u17c2",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u178f\u17d2\u179a\u17b8\u179f\u17bb\u1784\u17a0\u17ba",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1787\u17d2\u179a\u17bc\u1780\u1781\u17d2\u179c\u17c3",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1791\u17b6\u1781\u17d2\u179c\u17c3",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1794\u1793\u17d2\u179b\u17c2",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1794\u17d2\u179a\u17a0\u17b7\u178f\u1794\u17b6\u1780\u17cb\u179f\u17c0\u1794 \u1787\u17be\u1784\u1791\u17b6",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1785\u17b6\u17a0\u17bd\u1799",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u179a\u17c4\u1784\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1780\u1798\u17d2\u179a\u17b6\u179b\u1796\u17d2\u179a\u17c6",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1780\u17d2\u178a\u17b6\u1796\u17b7\u179f",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u17a2\u17c6\u1796\u17bc\u179b \u1780\u1784\u17d2\u17a0\u17b6\u179a",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u17a2\u17c6\u1796\u17bc\u179b \u1782\u17d2\u179a\u17b8\u179f\u179f\u17d2\u1791\u17b6\u179b\u17cb",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1798\u17c9\u17b6\u179f\u17ca\u17b8\u1793\u1797\u17d2\u179b\u17be\u1784",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1785\u17b6\u1794\u17cb\u1780\u17d2\u179a\u178e\u17b6\u178f\u17cb\u1798\u17bb\u1781\u179a\u17c4\u1784",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u179f\u17c1\u179c\u17b6\u1796\u17b7\u1792\u17b8\u1780\u17b6\u179a",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1793\u17c6\u1794\u17bb\u17d0\u1784",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1786\u17b6\u1781\u17d2\u179c\u17c3 \u179f\u178e\u17d2\u178a\u17c2\u1780",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1794\u1784\u17d2\u17a2\u17c2\u1798",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u178f\u17d2\u179a\u17b8\u1786\u17d2\u17a2\u17be\u179a",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1796\u1784\u178f\u17d2\u179a\u17b8",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u1791\u17b9\u1780\u1780\u1780\u17a2\u1793\u17b6\u1798\u17d0\u1799",totalPrice:0,paidBy:"",other:""},{id:void 0,title:"\u17a2\u1784\u17d2\u1780\u179a",totalPrice:0,paidBy:"",other:""}],o=["ACLEDA","ABA","WING","BAKONG","CANADIA","TRUE MONEY","Cash"],n={ACLEDA:"#143c6d",ABA:"#005b7a",WING:"#a4c535",BAKONG:"#dc222c",CANADIA:"#D61229","TRUE MONEY":"#f88a30",Cash:"#BB9300"},d=["\u1798\u17a0\u17b6\u179f\u1798\u17d2\u1794\u178f\u17d2\u178f\u17b7\u1791\u17b6\u17c6\u1784\u17e5","\u1786\u17b6\u1794\u17c9\u17b6\u179c\u17a0\u17bb\u17ba \u178f\u17c5\u17a0\u17ca\u17bc\u1796\u1784\u1798\u17b6\u1793\u17cb 10\u1780\u17d2\u179a\u17a1","\u1797\u17d2\u179b\u17b6\u1798\u17c9\u17b6\u1789\u17c9\u17b6\u178e\u17c1\u179f\u17b6\u1785\u17cb\u1782\u17c4 ","\u1794\u1784\u17d2\u1782\u17b6\u1794\u17c6\u1796\u1784\u1781\u17d2\u1791\u17b9\u1798\u179f","\u178f\u17d2\u179a\u17b8\u1786\u17d2\u1796\u17bb\u1784\u1785\u17c6\u17a0\u17bb\u1799\u1780\u17d2\u179a\u17bc\u1785\u1786\u17d2\u1798\u17b6 \u1791\u17b9\u1780\u178a\u17c4\u17c7\u1782\u17c4\u1786\u17c5","\u1798\u17d2\u1787\u17bc\u179a\u1799\u17bd\u1793\u1794\u1784\u17d2\u1780\u1784","\u1794\u17b6\u1799\u1786\u17b6\u1782\u17d2\u179a\u17b6\u1794\u17cb\u1788\u17bc\u1780 & \u1794\u17b6\u1799\u179f","\u1794\u1784\u17d2\u17a2\u17c2\u1798\u179f\u1784\u1781\u17d2\u1799\u17b63\u179f\u17d2\u179a\u1791\u17b6\u1794\u17cb","\u1780\u17d2\u1784\u17b6\u1793\u1781\u17d2\u179c\u17c3\u1791\u17b9\u1780\u1783\u17d2\u1798\u17bb\u17c6 \u1791\u17b6\u1781\u17d2\u179c\u17c3\u1794\u17c9\u17c1\u1780\u17b6\u17c6\u1784","\u1786\u17b6\u1795\u17d2\u179f\u17b7\u178f\u178f\u17bb\u1784\u1780\u17bc\u179c \u1794\u1793\u17d2\u179b\u17c2\u1794\u1789\u17d2\u1787\u17c7\u1796\u178e\u17cd","\u1798\u17d2\u1787\u17bc\u179a\u1782\u17d2\u179a\u17bf\u1784\u1796\u17c4\u17c7\u1782\u17c4","\u1794\u17b6\u1799\u1786\u17b6\u1796\u1784\u1791\u17b6\u1794\u17d2\u179a\u17c3 & \u1794\u17b6\u1799\u179f","\u1794\u1784\u17d2\u17a2\u17c2\u1798\u1785\u17c1\u1780\u1781\u17d2\u1791\u17b7\u17c7 \u1796\u1784\u1798\u17b6\u1793\u17cb","\u1794\u17d2\u179a\u17a0\u17b7\u178f\u178f\u17d2\u179a\u17b8\u179f\u17d2\u179b\u17b6\u178f","\u1782\u17b6\u179c\u1794\u17c6\u1796\u1784","\u1794\u17d2\u179a\u17a0\u17b7\u178f\u17a2\u17c6\u1796\u17c5","\u1791\u17b6\u1795\u17d2\u179b\u17b7\u178f \u1787\u17d2\u179a\u1780\u17cb\u1786\u17c3\u1790\u17b6\u179c","\u1798\u17b6\u1793\u17cb\u1791\u17b9\u1798\u1785\u17c6\u17a0\u17bb\u1799","\u1794\u1784\u17d2\u1782\u17b6\u179a\u17bb\u17c6\u179f\u17d2\u1794\u17c3","\u178f\u17d2\u179a\u17b8\u179f\u17bb\u1784\u17a0\u17ba\u1785\u17c6\u17a0\u17bb\u1799\u1780\u17d2\u179a\u17bc\u1785\u1786\u17d2\u1798\u17b6","\u178f\u17bb\u1784\u1799\u17b6\u17c6\u1780\u17bc\u1793\u1780\u17b6\u178f\u17cb","\u1794\u17b6\u1799\u1786\u17b6\u1799\u17c9\u17b6\u1784\u1785\u17bc\u179c \u1794\u17b6\u1799\u179f","\u1794\u1784\u17d2\u17a2\u17c2\u1798\u1782\u17d2\u179a\u17b6\u1794\u17cb\u1788\u17bc\u1780","\u1794\u1784\u17d2\u17a2\u17c2\u1798\u178f\u17d2\u1793\u17c4\u178f","\u178f\u17d2\u179a\u17b8\u1794\u17d2\u179a\u1798\u17c9\u17b6\u1785\u17c0\u1793","\u178f\u17b8\u17d2\u179a\u1794\u17d2\u179a\u1798\u17c9\u17b6 \u1785\u17c6\u17a0\u17bb\u1799\u1796\u1784\u1791\u17b6","\u178f\u17d2\u179a\u17b8\u1794\u17c6\u1796\u1784\u179f\u17b6\u17d2\u179c\u1799 \u1791\u17b9\u1780\u178f\u17d2\u179a\u17b8\u17a2\u17c6\u1796\u17b7\u179b\u1791\u17bb\u17c6","\u1798\u17d2\u1787\u17bc\u1799\u17bd\u1793\u1782\u17d2\u179a\u17bf\u1784\u179f\u1798\u17bb\u1791\u17d2\u179a","\u179a\u17c4\u1784\u1780\u1798\u17d2\u1798\u179c\u17b7\u1792\u17b8\u1785\u17b6\u1794\u17cb\u1780\u17d2\u179a\u178e\u17b6\u178f\u17cb\u1798\u17c9\u17bc\u178f\u1790\u17d2\u1798\u17b8","\u17a2\u17c6\u1796\u17bc\u179b\u1782\u17d2\u179a\u17b8\u179f\u17d2\u178f\u17b6\u179b\u17cb","\u1780\u1784\u17d2\u17a0\u17b6\u179a\u178f\u17d2\u179a\u1787\u17b6\u1780\u17cb","\u1796\u17d2\u179a\u17c6\u1780\u17d2\u179a\u17a0\u1798\u1798\u17bd\u1799\u1795\u17d2\u179b\u17bb\u179c\u178a\u17be\u179a","\u1791\u17b9\u1780\u1780\u1780\u17a2\u1793\u17b6\u1798\u17d0\u1799","\u1780\u17d2\u1794\u17b6\u179b\u1787\u17d2\u179a\u17bc\u1780\u17e1 \u1798\u17b6\u1793\u17cb\u179f\u17d2\u1784\u17c4\u179a\u17e1\u1782\u17bc","\u17a2\u17b6\u17a0\u17b6\u179a\u179f\u17c2\u1793\u1780\u17bb\u1784\u1798\u17c9\u17b6","\u179f\u17c1\u179c\u17b6\u1796\u17b7\u1792\u17b8\u1780\u17b6\u179a \u17e7\u1793\u17b6\u1780\u17cb","\u1794\u1794\u179a\u1796\u17c1\u179b\u1796\u17d2\u179a\u17b9\u1780 \u17e2\u1781\u17d2\u1791\u17c7 (\u179b\u17be\u179f 25\u17e0$/\u1781\u17d2\u1791\u17c7)","\u1794\u17b6\u1799\u1790\u17d2\u1784\u17c3\u178f\u17d2\u179a\u1784\u17cb \u17e1\u17e1\u178f\u17bb (\u179b\u17be\u179f 8\u17e0$/\u178f\u17bb)","\u1780\u17d2\u178f\u17b6\u1796\u17b8\u179f 3$/m2","\u1794\u1793\u17d2\u1791\u1794\u17cb\u1791\u17b9\u1780\u1785\u179b\u17d0\u178f 100$/pc","\u178f\u17d2\u179a\u17b8\u1794\u17d2\u179a\u1798\u17c9\u17b6\u1785\u17c6\u17a0\u17bb\u1799","\u178f\u17d2\u179a\u17b8\u1794\u17c6\u1796\u1784\u17a1\u1794\u17cb\u17a1\u17c2","\u179f\u17ca\u17bb\u1794\u1785\u17b6\u1794\u17cb\u1786\u17b6\u1799\u1782\u17d2\u179a\u17bf\u1784\u179f\u1798\u17bb\u1791\u17d2\u179a","\u1786\u17b6\u1786\u17d2\u17a2\u17b9\u1784\u1787\u17c6\u1793\u17b8\u1794\u17c6\u1796\u1784\u1794\u1793\u17d2\u179b\u17c2\u1787\u17bc\u179a\u17a2\u17c2\u1798","\u178f\u17bb\u1784\u1799\u17b6\u17c6\u1782\u17d2\u179a\u17bf\u1784\u179f\u1798\u17bb\u1791\u17d2\u179a","\u178f\u17d2\u179a\u17b8\u179f\u17bb\u1784\u17a0\u17ba\u1794\u17c6\u1796\u1784\u1794\u17d2\u179a\u17b6\u17c6\u179a\u179f\u1787\u17b6\u178f\u17b7","\u1789\u17b6\u17c6\u1787\u17be\u1784\u1791\u17b6\u1782\u17d2\u179a\u17bf\u1784\u179f\u1798\u17bb\u1791\u17d2\u179a","\u1791\u17b6\u1781\u17d2\u179c\u17c3\u1794\u17c9\u17c1\u1780\u17b6\u17c6\u1784","\u1794\u17b6\u1799\u179f\u17c2\u1793\u1780\u17bb\u1784\u1798\u17c9\u17b6 1\u1790\u17b6\u179f","\u1786\u17b6\u1794\u1784\u17d2\u1782\u17b6 \u1781\u17b6\u178f\u17cb\u178e\u17b6\u1785\u17b7\u1793","\u178f\u17d2\u179a\u17b8\u1780\u17d2\u179a\u17a0\u1798\u1785\u17c6\u17a0\u17bb\u1799\u1798\u17b8\u179f\u17bd\u179a","\u179f\u17ca\u17bb\u1794\u1780\u17d2\u179a\u1796\u17c7\u1787\u17d2\u179a\u17bc\u1780\u1781\u17d2\u1785\u17b8","\u179f\u17ca\u17bb\u1794\u1780\u17d2\u178f\u17b6\u1798\u1795\u17d2\u179f\u17b7\u178f\u1798\u17b6\u179f 10\u1780\u17d2\u179a\u17a1","\u178f\u17d2\u179a\u17b8\u1786\u17d2\u1796\u17bb\u1784\u1785\u17c6\u17a0\u17bb\u1799\u1791\u17b9\u1780\u179f\u17ca\u17b8\u17a2\u17c0\u179c\u1785\u17b7\u1793"],a=["\u178f\u17bb","\u1785\u17b6\u1793","\u1781\u17d2\u1791\u17c7","\u1793\u17b6\u1780\u17cb","\u1788\u17bb\u178f","m\xb2","\u1782\u17d2\u179a\u17bf\u1784","\u1794\u17d2\u179a\u17a1\u17c4\u17c7","pcs"],l=["Wedding","Birthday","Party","House Warming","Engagement"];let s;!function(e){e[e.Jan=1]="Jan",e[e.Feb=2]="Feb",e[e.Mar=3]="Mar",e[e.Apr=4]="Apr",e[e.May=5]="May",e[e.Jun=6]="Jun",e[e.Jul=7]="Jul",e[e.Aug=8]="Aug",e[e.Sep=9]="Sep",e[e.Oct=10]="Oct",e[e.Nov=11]="Nov",e[e.Dec=12]="Dec"}(s||(s={}));const c={January:"\u1798\u1780\u179a\u17b6",February:"\u1780\u17bb\u1798\u17d2\u1797\u17c8",March:"\u1798\u17b7\u1793\u17b6",April:"\u1798\u17c1\u179f\u17b6",May:"\u17a7\u179f\u1797\u17b6",June:"\u1798\u17b7\u1790\u17bb\u1793\u17b6",July:"\u1780\u1780\u17d2\u1780\u178a\u17b6",August:"\u179f\u17b8\u17a0\u17b6",September:"\u1780\u1789\u17d2\u1789\u17b6",October:"\u178f\u17bb\u179b\u17b6",November:"\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6",December:"\u1792\u17d2\u1793\u17bc"},u={week:0,month:1,year:2}},8694:(e,t,i)=>{i.d(t,{EA:()=>o,V0:()=>r,ZZ:()=>n,_8:()=>d,mX:()=>l,p7:()=>a});const r={phoneNumber:/0[0-9]{8}$|0[0-9]{9}$/,numberOnly:/^-?[0-9]\d*(\.\d+)?$/,positiveNumberOnly:/^(0*[1-9][0-9]*(\.[0-9]+)?|0+\.[0-9]*[1-9][0-9]*)$/,positiveNumberOnlyandEmpty:/$^|^[0-9]\d*(\.\d+)?\.?$/,email:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,textOnly:/^[a-zA-Z ]*$/},o=e=>e<1e3||e>=1e3&&e<1e6?e.toLocaleString(void 0,{minimumFractionDigits:2}):e>=1e6&&e<1e9?+(e/1e6).toFixed(1)+"M":e>=1e9&&e<1e12?+(e/1e9).toFixed(1)+"B":e>=1e12?+(e/1e12).toFixed(1)+"T":void 0,n=e=>{var t=0;let i;if(e)for(i=0;i<e.length;i+=1)t=e.charCodeAt(i)+((t<<5)-t);let r="#";for(i=0;i<3;i+=1){r+="00".concat((t>>8*i&255).toString(16)).slice(-2)}return r},d=e=>{const t="00000";return t.substring(0,t.length-e.length)+e},a=e=>Intl.NumberFormat("en-US",{notation:"compact",compactDisplay:"short"}).format(e),l=" @page {\n  size: A4;\n  margin:2.54cm;\n}\n\n@media all {\n  .pagebreak {\n    display: none;\n  }\n}\n\n@media print {\n  .pagebreak {\n    page-break-before: always;\n  }\n}"}}]);
//# sourceMappingURL=595.76d9ce56.chunk.js.map