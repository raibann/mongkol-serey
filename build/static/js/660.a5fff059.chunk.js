"use strict";(self.webpackChunkmongkol_serey_cms=self.webpackChunkmongkol_serey_cms||[]).push([[660],{25660:(e,r,o)=>{o.r(r),o.d(r,{default:()=>de});var n=o(35527),t=o(53767),i=o(72466),a=o(63466),s=o(39281),l=o(79836),d=o(53382),c=o(35855),x=o(53994),p=o(20890),u=o(57246),h=o(58536),m=o(50841),j=o(72791),Z=o(39421),g=o(62643),v=o(60826),y=o(85871),f=o(69780),b=o(66254),w=o(55931),S=o(5574),P=o(80184);const C=j.forwardRef((function(e,r){return(0,P.jsx)(w.Z,{direction:"up",ref:r,...e,unmountOnExit:!0})})),k=e=>{const{open:r,onCloseDialog:o,children:n,size:t,...i}=e,{isMdDown:a}=(0,f.Z)();return(0,P.jsx)(S.Z,{open:r,onClose:o,maxWidth:t||"lg",fullWidth:!0,TransitionComponent:C,PaperProps:{sx:{height:["100%","100%","sm"===t?"50vh":"90vh"]}},fullScreen:a,...i,children:n})};var D=o(96349),R=o(76509),T=o(68870),I=o(61889),z=o(90493),E=o(15021),W=o(20653),A=o(49900),B=o(84395),F=o(34663),N=o(36151),V=o(12065),M=o(79971),O=o(94668),_=o(48072),q=o(16725),Q=o(59941),$=o(64370),G=o(61134),L=o(82139),K=o(64884),U=o(93025),H=o(66172),J=o(51505),X=o(17139),Y=o(8694),ee=o(86544);const re=function(e){let{index:r,onRemove:o,defaultTitle:n}=e;const{control:i,setValue:s,getValues:l}=(0,G.Gc)(),{isSmDown:d}=(0,f.Z)();return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(t.Z,{direction:d?"column":"row",spacing:2,children:[(0,P.jsx)(G.Qr,{control:i,name:"expenseRowData.".concat(r,".title"),rules:{required:{value:!0,message:"Title is required"}},defaultValue:n,render:e=>{let{field:r,fieldState:{error:o}}=e;return(0,P.jsx)(U.Z,{placeholder:"Title",size:"small",error:Boolean(o),helperText:null===o||void 0===o?void 0:o.message,...r})}}),(0,P.jsx)(G.Qr,{control:i,name:"expenseRowData.".concat(r,".totalPrice"),defaultValue:0,rules:{required:{value:!0,message:"Total price is required"},pattern:{value:Y.V0.numberOnly,message:"Price is number only"}},render:e=>{let{field:r,fieldState:{error:o}}=e;return(0,P.jsx)(U.Z,{placeholder:"Total price",size:"small",error:Boolean(o),helperText:null===o||void 0===o?void 0:o.message,InputProps:{startAdornment:(0,P.jsx)(a.Z,{position:"start",children:(0,P.jsx)(J.Z,{size:"16",color:b.Z.palette.primary.main})})},...r})}}),(0,P.jsx)(G.Qr,{control:i,name:"expenseRowData.".concat(r,".paidBy"),defaultValue:"",render:e=>{let{field:{onChange:o,...n}}=e;return(0,P.jsx)(H.Z,{freeSolo:!0,disableClearable:!0,openOnFocus:!0,fullWidth:!0,...n,onInputChange:(e,o)=>{s("expenseRowData.".concat(r,".paidBy"),o)},renderInput:e=>(0,P.jsx)(U.Z,{...e,placeholder:"Paid by",size:"small",sx:{"& .MuiOutlinedInput-root":{bgcolor:L.cF[l("expenseRowData.".concat(r,".paidBy"))]||b.Z.palette.common.white,color:L.cF[l("expenseRowData.".concat(r,".paidBy"))]?b.Z.palette.common.white:b.Z.palette.common.black,borderColor:L.cF[l("expenseRowData.".concat(r,".paidBy"))]}}}),options:L.u7.map((e=>e))})}}),(0,P.jsx)(G.Qr,{control:i,name:"expenseRowData.".concat(r,".other"),defaultValue:"",render:e=>{let{field:r}=e;return(0,P.jsx)(U.Z,{placeholder:"Other",...r,size:"small"})}}),(0,P.jsx)(ee.Q,{onClick:o,sx:{background:e=>e.palette.error.main,color:e=>e.palette.common.white,"&:hover":{background:e=>(0,V.Fq)(e.palette.error.main,.8)}},children:(0,P.jsx)(X.Z,{size:"24"})})]})})};var oe=o(72426),ne=o.n(oe),te=o(5247),ie=o(59860);const ae=function(e){var r,o,i,a,s;let{onAddExpenseSuccess:l,orderDetail:d,onCloseDialogClick:c}=e;const x=(0,K.Z)(D.Z.addExpense,{manual:!0,onSuccess:()=>l(),onError:()=>k(!0)}),u=(0,G.cI)(),{handleSubmit:h,setValue:m,watch:g}=u,[v,y]=(0,j.useState)(!0),[w,S]=(0,j.useState)([]),[C,k]=(0,j.useState)(!1),{isSmDown:R}=(0,f.Z)(),U=(null===d||void 0===d||null===(r=d.finalInvoices)||void 0===r?void 0:r.reduce(((e,r)=>e+r.price),0))||0,H=(null===d||void 0===d||null===(o=d.expenses)||void 0===o?void 0:o.reduce(((e,r)=>e+r.price),0))||0,J=U-H;return(0,j.useEffect)((()=>{if(null!==d&&void 0!==d&&d.expenses&&d.expenses.length>0){const e=d.expenses.map((e=>({id:e.id,title:e.expense_on,other:e.note,paidBy:e.paidBy,totalPrice:e.price})));S(e),m("expenseRowData",e)}else S(L.lE);setTimeout((()=>{y(!1)}),500)}),[]),v?(0,P.jsx)(t.Z,{height:"100%",justifyContent:"center",alignItems:"center",children:(0,P.jsx)(T.Z,{sx:{bgcolor:"common.white",p:10,borderRadius:4},children:(0,P.jsx)(Z.W,{})})}):(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(te.Z,{open:C,onCloseDialog:()=>k(!1),errorTitle:"Internal Server Error",errorMessage:(null===(i=x.error)||void 0===i?void 0:i.message)||"Something went wrong! Couldn't add expense to this order."}),(0,P.jsx)(G.RV,{...u,children:(0,P.jsx)("form",{onSubmit:h((e=>{var r;null!==d&&void 0!==d&&d.id&&x.run(d.id,null===(r=e.expenseRowData)||void 0===r?void 0:r.map((e=>({id:(null===e||void 0===e?void 0:e.id)||void 0,expense_on:e.title||"",note:e.other||"",paidBy:e.paidBy||"",price:+e.totalPrice||0}))))})),children:(0,P.jsxs)(I.ZP,{container:!0,sx:{height:["auto","auto","90vh"]},children:[(0,P.jsx)(I.ZP,{item:!0,xs:12,md:3,sx:{background:"transparent",position:"relative",height:["auto","auto","100%"]},children:(0,P.jsxs)(n.Z,{sx:{overflow:"hidden",borderRadius:{xs:0,md:2}},children:[(0,P.jsxs)(z.Z,{disablePadding:!0,children:[(0,P.jsxs)(E.ZP,{children:[(0,P.jsx)(W.Z,{children:(0,P.jsx)(M.Z,{size:"24",color:b.Z.palette.primary.main})}),(0,P.jsx)(A.Z,{primary:null!==d&&void 0!==d&&d.id?(e=>{const r="00000";return r.substring(0,r.length-e.length)+e})(d.id.toString()):"N/A",secondary:"Invoice ID"})]}),(0,P.jsxs)(E.ZP,{children:[(0,P.jsx)(W.Z,{children:(0,P.jsx)(O.Z,{size:"24",color:b.Z.palette.primary.main})}),(0,P.jsx)(A.Z,{primary:(null===d||void 0===d||null===(a=d.customer)||void 0===a?void 0:a.customer_name)||"No Customer",secondary:"Customer"})]}),(0,P.jsxs)(E.ZP,{children:[(0,P.jsx)(W.Z,{children:(0,P.jsx)(_.Z,{size:"24",color:b.Z.palette.primary.main})}),(0,P.jsx)(A.Z,{primary:(null===d||void 0===d||null===(s=d.customer)||void 0===s?void 0:s.contact_number)||"No phone number",secondary:"Phone Number"})]}),(0,P.jsxs)(E.ZP,{children:[(0,P.jsx)(W.Z,{children:(0,P.jsx)(q.Z,{size:"24",color:b.Z.palette.primary.main})}),(0,P.jsx)(A.Z,{primary:ne()(null===d||void 0===d?void 0:d.date).format("DD-MM-yyyy")||"N/A",secondary:"Event Date"})]}),(0,P.jsxs)(E.ZP,{children:[(0,P.jsx)(W.Z,{children:(0,P.jsx)(Q.Z,{size:"24",color:b.Z.palette.primary.main})}),(0,P.jsx)(A.Z,{primary:(null===d||void 0===d?void 0:d.location)||"N/A",secondary:"Location"})]})]}),(0,P.jsxs)(z.Z,{disablePadding:!0,children:[(0,P.jsx)(E.ZP,{sx:{bgcolor:e=>e.palette.success.main},children:(0,P.jsx)(A.Z,{primary:"$".concat(Intl.NumberFormat().format(U)),secondary:"Total Income",primaryTypographyProps:{fontSize:24,fontWeight:"medium",letterSpacing:0,color:"white"}})}),(0,P.jsx)(E.ZP,{sx:{bgcolor:e=>e.palette.primary.main},children:(0,P.jsx)(A.Z,{primary:"$".concat(Intl.NumberFormat().format(H)),secondary:"Total Expense",primaryTypographyProps:{fontSize:24,fontWeight:"medium",letterSpacing:0,color:"white"}})}),(0,P.jsx)(E.ZP,{sx:{bgcolor:e=>e.palette.info.main},children:(0,P.jsx)(A.Z,{primary:"$".concat(Intl.NumberFormat().format(J)),secondary:"Total Net Profit",primaryTypographyProps:{fontSize:24,fontWeight:"medium",letterSpacing:0,color:"white"}})})]})]})}),(0,P.jsx)(I.ZP,{item:!0,xs:12,md:9,sx:{height:["auto","auto","100%"],px:{xs:0,md:2},mt:{xs:2,md:0}},children:(0,P.jsxs)(n.Z,{sx:{height:"100%",px:2,overflow:"auto",borderRadius:{xs:0,md:2}},children:[(0,P.jsx)(B.Z,{sx:{position:"sticky",bgcolor:e=>e.palette.common.white,boxShadow:0,borderRadius:0,borderTopLeftRadius:{xs:0,md:2},borderTopRightRadius:{xs:0,md:2},mb:2,"&.css-hyum1k-MuiToolbar-root":{px:0}},children:(0,P.jsx)(F.Z,{children:(0,P.jsxs)(t.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{width:"100%"},children:[(0,P.jsx)(p.Z,{variant:"h6",children:"Add Expense"}),(0,P.jsxs)(t.Z,{direction:"row",spacing:4,sx:{width:["auto","30%"]},children:[(0,P.jsx)(N.Z,{variant:"contained",fullWidth:!0,onClick:()=>c(),sx:{borderRadius:2,textTransform:"capitalize",boxShadow:1,color:e=>e.palette.common.white,background:e=>e.palette.error.main,"&:hover":{color:e=>e.palette.common.white,background:e=>e.palette.error.main}},children:"Cancel"}),(0,P.jsx)(ie.Z,{type:"submit",variant:"contained",fullWidth:!0,loading:x.loading,sx:{borderRadius:2,textTransform:"capitalize",boxShadow:1,color:e=>e.palette.common.white,"&:hover":{background:e=>e.palette.primary.main}},children:"Save"})]})]})})}),!R&&(0,P.jsxs)(t.Z,{direction:"row",children:[(0,P.jsx)(p.Z,{sx:{flex:1},children:"Title"}),(0,P.jsx)(p.Z,{sx:{flex:1},children:"Total Price"}),(0,P.jsx)(p.Z,{sx:{flex:1},children:"Paid By"}),(0,P.jsx)(p.Z,{sx:{flex:1},children:"Other"}),(0,P.jsx)("div",{style:{width:40}})]}),(0,P.jsxs)(t.Z,{spacing:2,sx:{py:2},children:[(0,P.jsx)(P.Fragment,{children:w.map(((e,r)=>(0,P.jsx)(re,{defaultTitle:e.title,index:r,onRemove:()=>(e=>{const r=g("expenseRowData");r.splice(e,1),m("expenseRowData",[...r]),S([...r])})(r)},r)))}),(0,P.jsx)(N.Z,{variant:"contained",startIcon:(0,P.jsx)($.Z,{}),fullWidth:!0,onClick:()=>{S([...w,{id:void 0,title:"",totalPrice:0,paidBy:"",other:""}])},size:"small",sx:{color:b.Z.palette.primary.main,boxShadow:b.Z.shadows[0],borderRadius:2,border:"1px dashed ".concat(b.Z.palette.primary.main),background:e=>(0,V.Fq)(e.palette.primary.main,.2),"&:hover":{background:e=>(0,V.Fq)(e.palette.primary.main,.2),boxShadow:b.Z.shadows[0]}},children:"Add New"})]})]})})]})})})]})};var se=o(71856),le=o(31029);function de(){var e,r;const o=(0,K.Z)(D.Z.getExpense,{manual:!0}),w=(0,K.Z)(o.runAsync,{manual:!0,debounceWait:500}),S=null===(e=o.data)||void 0===e?void 0:e.data,[C,T]=(0,j.useState)("pending"),[I,z]=(0,j.useState)(1),[E,W]=(0,j.useState)(""),[A,B]=(0,j.useState)(),{isSmDown:F}=(0,f.Z)();(0,j.useEffect)((()=>{""===E?o.run({page:I-1,status:C,search:""}):w.run({page:I-1,status:C,search:E})}),[C,I,E]);const N=(0,j.useCallback)((e=>B(S[e])),[S]);return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(y.Z,{pageTitle:"Expense"}),(0,P.jsxs)(n.Z,{elevation:1,sx:{mx:2,borderRadius:4,height:"calc(100vh - 100px)",maxWidth:"100%",overflow:"hidden",position:"relative",display:"flex",flexDirection:"column"},children:[(0,P.jsxs)(t.Z,{direction:F?"column":"row",alignItems:"flex-start",justifyContent:"space-between",spacing:2,sx:{width:"100%",p:2},children:[(0,P.jsxs)(i.Z,{value:C,exclusive:!0,fullWidth:!0,size:"small",onChange:(e,r)=>{null!==r&&(T(r),z(1))},sx:{width:["100%","50%","30%"]},children:[(0,P.jsx)(v.Z,{value:"pending",children:"Pending"}),(0,P.jsx)(v.Z,{value:"complete",children:"Completed"}),(0,P.jsx)(v.Z,{value:"all",children:"All"})]}),(0,P.jsx)(g.Z,{placeholder:"Search...",size:"small",fullWidth:F,value:E,onKeyUp:e=>{"Enter"===e.key&&o.run({page:I-1,status:C,search:E})},onChange:e=>{W(e.target.value),z(1)},InputProps:{endAdornment:(0,P.jsx)(a.Z,{position:"end",children:(0,P.jsx)(h.Z,{size:"20",color:b.Z.palette.primary.main})})}})]}),(0,P.jsx)(s.Z,{className:"hide-scrollbar",sx:{flexGrow:1,overflow:"auto"},children:o.loading&&!S?(0,P.jsx)(t.Z,{direction:"column",alignItems:"center",justifyContent:"center",sx:{height:"100%"},children:(0,P.jsx)(Z.W,{})}):S&&S.length>0?(0,P.jsxs)(l.Z,{sx:{minWidth:1e3,"& thead tr th":{background:e=>e.palette.background.paper,fontWeight:"600",whiteSpace:"nowrap"}},children:[(0,P.jsx)(R.f,{showAction:!1}),(0,P.jsxs)(d.Z,{children:[(0,P.jsx)(se.M,{exitBeforeEnter:!0,children:o.loading&&(0,P.jsx)(c.Z,{component:le.E.tr,layout:!0,initial:{scale:0,opacity:0},animate:{scale:1,opacity:1,transition:{delay:.3,ease:"easeInOut"}},exit:{scale:0,opacity:0,transition:{delay:0,ease:"easeInOut"}},children:(0,P.jsx)(x.Z,{colSpan:8,sx:{textAlign:"center"},children:(0,P.jsx)(Z.W,{})})})}),(0,P.jsx)(R.Z,{data:o.loading?[]:S,onAddExpenseClick:N,isExpense:!0})]})]}):(0,P.jsxs)(t.Z,{direction:"column",alignItems:"center",justifyContent:"center",spacing:1,sx:{height:"100%"},children:[(0,P.jsx)(m.Z,{size:"80",color:b.Z.palette.error.main}),(0,P.jsx)(p.Z,{variant:"h6",color:"error",children:"No Expense Data"})]})}),(0,P.jsx)(t.Z,{alignItems:"center",width:"100%",p:1.5,sx:{bgcolor:"background.paper"},children:(0,P.jsx)(u.Z,{page:I,onChange:(e,r)=>{z(r)},count:null===(r=o.data)||void 0===r?void 0:r.totalPage,color:"primary",variant:"outlined",sx:{"& .MuiPaginationItem-root":{borderWidth:0}}})})]}),(0,P.jsx)(k,{onCloseDialog:()=>{},open:void 0!==A,PaperProps:{elevation:0,sx:{height:{xs:"100vh",md:"90vh"},backgroundColor:"transparent",borderRadius:0}},children:(0,P.jsx)(ae,{orderDetail:A,onCloseDialogClick:()=>B(void 0),onAddExpenseSuccess:()=>{o.refresh(),B(void 0)}})})]})}}}]);
//# sourceMappingURL=660.a5fff059.chunk.js.map