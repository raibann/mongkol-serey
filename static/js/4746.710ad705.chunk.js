"use strict";(self.webpackChunkmongkol_serey_cms=self.webpackChunkmongkol_serey_cms||[]).push([[4746],{19373:function(e,n,t){var i=t(29439),r=t(1413),l=t(72791),s=t(5574),o=t(65661),a=t(39157),c=t(97123),d=t(13400),u=t(55931),x=t(16856),m=t(80184),Z=l.forwardRef((function(e,n){return(0,m.jsx)(u.Z,(0,r.Z)({direction:"up",ref:n},e))})),f=function(e,n){var t=e.cusTitle,u=void 0===t?"":t,f=e.alternateTitle,j=void 0===f?"":f,h=e.cusHeight,p=void 0===h?"auto":h,v=e.cusWidth,g=void 0===v?"auto":v,S=e.children,b=void 0===S?null:S,P=e.content,y=void 0===P?function(){return null}:P,w=e.fullScreen,C=void 0!==w&&w,z=e.action,k=void 0===z?null:z,Q=e.disableCloseButton,I=void 0!==Q&&Q,T=e.disablePadding,M=void 0!==T&&T,q=e.dialogActionProps,A=e.dialogContentProps,B=e.paperProps,D=e.dialogTitleProps,W=(0,l.useState)(!1),_=(0,i.Z)(W,2),E=_[0],F=_[1],G=(0,l.useState)(),R=(0,i.Z)(G,2),H=R[0],V=R[1];(0,l.useImperativeHandle)(n,(function(){return{open:function(e){F(!0),V(e)},close:L}}));var L=function(){V(void 0),F(!1)};return(0,m.jsx)(m.Fragment,{children:(0,m.jsxs)(s.Z,{open:E,TransitionComponent:Z,fullScreen:C,onClose:L,PaperProps:(0,r.Z)({sx:(0,r.Z)({p:M?0:void 0,maxWidth:"100vw",maxHeight:"100vh",width:C?void 0:g,height:C?void 0:p},null===B||void 0===B?void 0:B.sx)},B),children:[(u||j)&&(0,m.jsxs)(o.Z,(0,r.Z)((0,r.Z)({component:"div",display:"flex",justifyContent:"space-between",alignItems:"center",p:M?0:void 0},D),{},{children:[void 0===H||""===j?u:j,!I&&(0,m.jsx)(d.Z,{onClick:L,children:(0,m.jsx)(x.lTq,{})})]})),(0,m.jsx)(a.Z,(0,r.Z)((0,r.Z)({sx:(0,r.Z)({p:M?0:void 0},null===A||void 0===A?void 0:A.sx)},A),{},{children:y(H)||b})),null!==k&&(0,m.jsx)(c.Z,(0,r.Z)((0,r.Z)({},q),{},{children:k}))]})})};n.Z=(0,l.forwardRef)(f)},24746:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var i=t(1413),r=t(68870),l=t(61889),s=t(53767),o=t(35527),a=t(89437),c=t(61134),d=t(36151),u=t(20890),x=t(84753),m=t(36571),Z=t(58377),f=t(69783),j=t(82139),h=t(80184),p=function(){var e=(0,c.Gc)(),n=e.control,t=e.setValue;return(0,h.jsxs)(l.ZP,{container:!0,maxWidth:"sm",width:"100%",spacing:2,alignSelf:"center",children:[(0,h.jsx)(l.ZP,{item:!0,xs:9,children:(0,h.jsxs)(s.Z,{spacing:1,children:[(0,h.jsx)(c.Qr,{control:n,name:"eventType",render:function(e){var n=e.field,t=e.fieldState;return(0,h.jsx)(x.Z,(0,i.Z)({size:"small",label:"Event type",fieldState:t},n))}}),(0,h.jsx)(s.Z,{direction:"row",spacing:1,children:j.oQ.map((function(e){return(0,h.jsx)(d.Z,{size:"small",sx:{height:20,minWidth:0,p:.5},onClick:function(){return t("eventType",e)},children:(0,h.jsx)(u.Z,{variant:"caption",textTransform:"none",whiteSpace:"nowrap",color:"primary.dark",children:e})},e)}))})]})}),(0,h.jsx)(l.ZP,{item:!0,xs:3,children:(0,h.jsx)(c.Qr,{control:n,name:"quantity",render:function(e){var n=e.field,t=e.fieldState;return(0,h.jsx)(x.Z,(0,i.Z)({size:"small",type:"number",label:"Quantity",fieldState:t},n))}})}),(0,h.jsx)(l.ZP,{item:!0,xs:6,children:(0,h.jsx)(c.Qr,{control:n,name:"bookingDate",render:function(e){var n=e.field,t=e.fieldState;return(0,h.jsx)(m._,{dateAdapter:f.Z,children:(0,h.jsx)(Z.M,(0,i.Z)({renderInput:function(e){return(0,h.jsx)(x.Z,(0,i.Z)((0,i.Z)({},e),{},{fieldState:t,size:"small",label:"Booking date"}))}},n))})}})}),(0,h.jsx)(l.ZP,{item:!0,xs:6,children:(0,h.jsx)(c.Qr,{control:n,name:"eventDate",render:function(e){var n=e.field,t=e.fieldState;return(0,h.jsx)(m._,{dateAdapter:f.Z,children:(0,h.jsx)(Z.M,(0,i.Z)({renderInput:function(e){return(0,h.jsx)(x.Z,(0,i.Z)((0,i.Z)({},e),{},{fieldState:t,size:"small",label:"Event date"}))}},n))})}})}),(0,h.jsx)(l.ZP,{item:!0,xs:12,children:(0,h.jsx)(c.Qr,{control:n,name:"eventLocation",render:function(e){var n=e.field,t=e.fieldState;return(0,h.jsx)(x.Z,(0,i.Z)({size:"small",label:"Event location",fieldState:t},n))}})}),(0,h.jsx)(l.ZP,{item:!0,xs:6,children:(0,h.jsx)(c.Qr,{control:n,name:"deposit",render:function(e){var n=e.field,t=e.fieldState;return(0,h.jsx)(x.Z,(0,i.Z)({size:"small",type:"number",label:"Deposit amount",fieldState:t},n))}})}),(0,h.jsx)(l.ZP,{item:!0,xs:6,children:(0,h.jsx)(c.Qr,{control:n,name:"depositText",render:function(e){var n=e.field,t=e.fieldState;return(0,h.jsx)(x.Z,(0,i.Z)({size:"small",label:"Amount in Khmer",fieldState:t},n))}})}),(0,h.jsx)(l.ZP,{item:!0,xs:6,children:(0,h.jsx)(c.Qr,{control:n,name:"paidBy",render:function(e){var n=e.field,t=e.fieldState;return(0,h.jsx)(x.Z,(0,i.Z)({size:"small",label:"Payment method",fieldState:t},n))}})}),(0,h.jsx)(l.ZP,{item:!0,xs:6,children:(0,h.jsx)(c.Qr,{control:n,name:"discount",render:function(e){var n=e.field,t=e.fieldState;return(0,h.jsx)(x.Z,(0,i.Z)({size:"small",label:"Discount",type:"number",fieldState:t},n))}})})]})},v=t(13967),g=t(96174),S=t(64370),b=t(72791),P=t(93044),y=t(12065),w=t(86544),C=t(62643),z=t(17139),k=function(e){var n=e.index,t=(0,v.Z)(),i=(0,c.Gc)().control,r=(0,c.Dq)({control:i,name:"listMenu.".concat(n,".menuItem")});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g.Z,{container:function(){return document.getElementById("append-item-button-".concat(n))},children:(0,h.jsx)(d.Z,{variant:"text",size:"small",sx:{textTransform:"none"},onClick:function(){return r.append({title:""})},children:"Add"})}),r.fields.map((function(e,n){return(0,h.jsxs)(l.ZP,{container:!0,alignItems:"flex-end",columnGap:2,mb:2,children:[(0,h.jsx)(l.ZP,{item:!0,xs:"auto",children:(0,h.jsxs)(u.Z,{variant:"body2",children:[n+1,"."]})}),(0,h.jsx)(l.ZP,{item:!0,xs:"auto",children:(0,h.jsx)(P.Z,{variant:"rounded",sx:{width:40,height:40},children:"M"})}),(0,h.jsx)(l.ZP,{item:!0,xs:!0,children:(0,h.jsx)(C.Z,{variant:"standard",size:"small",placeholder:"Item title",fullWidth:!0})}),(0,h.jsx)(l.ZP,{item:!0,xs:"auto",children:(0,h.jsx)(w.Q,{onClick:function(){return r.remove(n)},sx:{width:40,height:40,boxShadow:0,background:(0,y.Fq)(t.palette.error.main,.1)},children:(0,h.jsx)(z.Z,{size:"20",color:t.palette.error.main,variant:"Bold"})})})]})}))]})},Q=2.4,I=function(){(0,v.Z)();var e=(0,c.Gc)().control,n=(0,c.Dq)({control:e,name:"listMenu"});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(g.Z,{container:function(){return document.getElementById("order-form-endcomponent")},children:(0,h.jsx)(d.Z,{startIcon:(0,h.jsx)(S.Z,{}),onClick:function(){return n.append({id:void 0,title:"",unit:"",price:0,quantity:0,unitPrice:0,menuItem:[{title:""}]})},variant:"contained",size:"small",sx:{color:"common.white"},children:"Add package"})}),n.fields.map((function(t,s){return(0,h.jsx)(o.Z,{sx:{p:2,mb:2},children:(0,h.jsxs)(l.ZP,{container:!0,rowSpacing:2,columnSpacing:1,children:[(0,h.jsxs)(l.ZP,{item:!0,xs:12,display:"flex",alignItems:"center",children:[(0,h.jsxs)(u.Z,{variant:"subtitle1",fontWeight:"bold",children:["\u1788\u17bb\u178f\u1791\u17b8 ",s+1]}),(0,h.jsx)(r.Z,{flexGrow:1}),(0,h.jsx)(r.Z,{id:"append-item-button-".concat(s)}),(0,h.jsx)(d.Z,{variant:"text",size:"small",color:"error",sx:{textTransform:"none"},onClick:function(){return n.remove(s)},children:"Remove"})]}),(0,h.jsx)(l.ZP,{item:!0,xs:Q,children:(0,h.jsx)(c.Qr,{control:e,name:"listMenu.".concat(s,".title"),render:function(e){var n=e.field,t=e.fieldState;return(0,h.jsx)(x.Z,(0,i.Z)({size:"small",label:"Name",fieldState:t},n))}})}),(0,h.jsx)(l.ZP,{item:!0,xs:Q,children:(0,h.jsx)(c.Qr,{control:e,name:"listMenu.".concat(s,".quantity"),render:function(e){var n=e.field,t=e.fieldState;return(0,h.jsx)(x.Z,(0,i.Z)({size:"small",label:"Qty",fieldState:t},n))}})}),(0,h.jsx)(l.ZP,{item:!0,xs:Q,children:(0,h.jsx)(c.Qr,{control:e,name:"listMenu.".concat(s,".unit"),render:function(e){var n=e.field,t=e.fieldState;return(0,h.jsx)(x.Z,(0,i.Z)({size:"small",label:"Unit",fieldState:t},n))}})}),(0,h.jsx)(l.ZP,{item:!0,xs:Q,children:(0,h.jsx)(c.Qr,{control:e,name:"listMenu.".concat(s,".unitPrice"),render:function(e){var n=e.field,t=e.fieldState;return(0,h.jsx)(x.Z,(0,i.Z)({size:"small",label:"Price",fieldState:t},n))}})}),(0,h.jsx)(l.ZP,{item:!0,xs:Q,children:(0,h.jsx)(c.Qr,{control:e,name:"listMenu.".concat(s,".price"),render:function(e){var n=e.field,t=e.fieldState;return(0,h.jsx)(x.Z,(0,i.Z)({size:"small",label:"Total",fieldState:t},n))}})}),(0,h.jsx)(l.ZP,{item:!0,xs:12,children:(0,h.jsx)(k,{index:s})})]})},t.id)}))]})},T=t(29439),M=t(45484),q=t(46112),A=t(20653),B=t(49900),D=t(64094),W=t(32451),_=t(92630),E=t(19373),F=t(20593),G=t(26486),R=t(39421),H=function(){var e=(0,v.Z)(),n=(0,b.useRef)(),t=(0,c.Gc)(),i=t.setValue,l=(0,t.watch)("customer"),o=(0,b.useState)(""),a=(0,T.Z)(o,2),x=a[0],m=a[1],Z=(0,D.Z)(x,{wait:500}),f=(0,W.Z)((function(){return _.Z.getCustomerList({size:5,type:j.lh.CUSTOMER,search:x})}),{refreshDeps:[Z]}),p=f.data,g=f.loading;return(0,b.useEffect)((function(){var e;(m(""),l)&&(null===(e=n.current)||void 0===e||e.close())}),[l]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(E.Z,{ref:n,cusTitle:"Select Customer",cusHeight:"80vh",cusWidth:800,content:function(){return(0,h.jsxs)(s.Z,{spacing:2,children:[(0,h.jsx)(C.Z,{value:x,onChange:function(e){return m(e.target.value)},size:"small",placeholder:"Search customer..."}),g?(0,h.jsx)(r.Z,{display:"grid",sx:{placeItems:"center"},children:(0,h.jsx)(R.W,{})}):(0,h.jsx)(G.Z,{data:null===p||void 0===p?void 0:p.response,disableAction:!0,onSelect:function(e){return i("customer",e)}})]})}}),l?(0,h.jsxs)(M.ZP,{secondaryAction:(0,h.jsx)(q.Z,{children:(0,h.jsx)(w.Q,{onClick:function(){return i("customer",void 0)},children:(0,h.jsx)(z.Z,{variant:"Bold",color:e.palette.error.main})})}),children:[(0,h.jsx)(A.Z,{children:(0,h.jsx)(P.Z,{variant:"rounded",src:l.images})}),(0,h.jsx)(B.Z,{primary:l.customer_name,secondary:l.contact_number})]}):(0,h.jsx)(d.Z,{disabled:g,onClick:function(){var e;return null===(e=n.current)||void 0===e?void 0:e.open()},children:(0,h.jsxs)(s.Z,{direction:"row",justifyContent:"space-between",width:"100%",children:[(0,h.jsx)(u.Z,{children:"Select Customer"}),(0,h.jsx)(F.Z,{color:e.palette.secondary.main})]})})]})},V=function(){var e=(0,c.cI)({defaultValues:{eventDate:null,listMenu:[{title:"",unit:"",price:0,quantity:0,unitPrice:0,menuItem:[{title:""}]}]}});return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(a.Z,{title:"Create New Order",sticky:!0,endComponent:(0,h.jsx)(r.Z,{id:"order-form-endcomponent"}),appBarSx:{bgcolor:"background.paper"}}),(0,h.jsx)("form",{children:(0,h.jsx)(c.RV,(0,i.Z)((0,i.Z)({},e),{},{children:(0,h.jsxs)(l.ZP,{container:!0,p:3,pt:0,spacing:3,children:[(0,h.jsxs)(l.ZP,{item:!0,xs:6,children:[(0,h.jsx)(s.Z,{component:o.Z,p:2,mb:2,children:(0,h.jsx)(H,{})}),(0,h.jsx)(s.Z,{component:o.Z,p:2,children:(0,h.jsx)(p,{})})]}),(0,h.jsx)(l.ZP,{item:!0,xs:6,children:(0,h.jsx)(I,{})})]})}))})]})}}}]);
//# sourceMappingURL=4746.710ad705.chunk.js.map