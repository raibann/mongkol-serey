"use strict";(self.webpackChunkmongkol_serey_cms=self.webpackChunkmongkol_serey_cms||[]).push([[4846],{92630:function(e,n,r){var t=r(74165),o=r(15861),i=r(38233),s=r(17657),a={getCustomerList:function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var r,o,a,c,l;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.page,o=n.search,a=n.size,c=n.type,e.next=3,i.Z.get(s.J.customersList,{params:{page:r,size:a||10,search:o,customerType:c}});case 3:return l=e.sent,e.abrupt("return",l);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),getCustomerDetails:function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var r,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,e.next=3,i.Z.get(s.J.customerDetails.replace(":id","".concat(r)));case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),postNewCustomer:function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var r,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.cusRequest,e.next=3,i.Z.post(s.J.addCustomer,r);case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),updateCustomer:function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var r,o,a;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.cusRequest,o=n.id,e.next=3,i.Z.put(s.J.updateCustomer.replace(":id","".concat(o)),r);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),deleteCustomer:function(){var e=(0,o.Z)((0,t.Z)().mark((function e(n){var r,o;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.id,e.next=3,i.Z.delete(s.J.deletCustomer.replace(":id","".concat(r)));case 3:return o=e.sent,e.abrupt("return",o);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()};n.Z=a},5247:function(e,n,r){var t=r(1413),o=r(45987),i=r(5574),s=r(39157),a=r(53767),c=r(20890),l=r(36151),u=r(69780),d=r(82281),h=r(66254),x=r(80184),m=["open","errorMessage","errorTitle","onCloseDialog","onClose"];n.Z=function(e){var n=e.open,r=e.errorMessage,p=e.errorTitle,f=e.onCloseDialog,Z=(e.onClose,(0,o.Z)(e,m)),g=(0,u.Z)().isSmDown;return(0,x.jsx)(i.Z,(0,t.Z)((0,t.Z)({open:n,fullWidth:!0,maxWidth:"xs",onClose:f},Z),{},{children:(0,x.jsx)(s.Z,{children:(0,x.jsxs)(a.Z,{alignItems:"center",sx:{px:4},spacing:2,children:[(0,x.jsx)(d.Z,{size:g?"40":"80",color:h.Z.palette.primary.main,variant:"Bulk"}),(0,x.jsx)(c.Z,{variant:g?"subtitle1":"h5",noWrap:!0,sx:{fontWeight:function(e){return e.typography.fontWeightBold}},children:p||"OOP!"}),(0,x.jsx)(c.Z,{sx:{color:function(e){return e.palette.error.main}},textAlign:"center",variant:g?"caption":"h5",children:r}),(0,x.jsx)(l.Z,{onClick:f,variant:"contained",sx:{borderRadius:3,px:3,boxShadow:0},children:(0,x.jsx)(c.Z,{color:"white",sx:{textTransform:"capitalize"},children:"OK, cool"})})]})})}))}},39421:function(e,n,r){r.d(n,{W:function(){return i}});var t=r(72791),o=r(80184),i=t.memo((function(){return(0,o.jsxs)("div",{className:"lds-facebook",children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]})}))},85871:function(e,n,r){var t=r(84395),o=r(34663),i=r(61889),s=r(20890),a=(r(72791),r(69780)),c=r(80184);n.Z=function(e){var n=e.children,r=e.pageTitle,l=(0,a.Z)().isSmDown;return(0,c.jsx)(t.Z,{position:"sticky",sx:{bgcolor:"background.paper",boxShadow:"none",borderRadius:0,mb:1},children:(0,c.jsx)(o.Z,{sx:{py:2,px:{sm:0}},children:(0,c.jsxs)(i.ZP,{container:!0,px:l?0:3,rowGap:l?2:0,children:[(0,c.jsx)(i.ZP,{item:!0,xs:6,md:"auto",children:(0,c.jsx)(s.Z,{variant:"h6",fontWeight:"600",children:r})}),(0,c.jsx)(i.ZP,{item:!0,xs:6,md:!0,display:"flex",justifyContent:"flex-end",children:n})]})})})}},28819:function(e,n,r){var t=r(13967),o=r(68870),i=r(12065),s=r(20890),a=r(50841),c=r(80184);n.Z=function(e){var n=e.disableBackground,r=void 0!==n&&n,l=e.height,u=void 0===l?"auto":l,d=e.width,h=void 0===d?"auto":d,x=e.title,m=void 0===x?"No Data":x,p=e.flexGrow,f=void 0!==p&&p,Z=e.icons,g=(0,t.Z)();return(0,c.jsx)(o.Z,{sx:{display:"grid",placeItems:"center",height:u,width:h,flexGrow:f?1:void 0},children:(0,c.jsxs)(o.Z,{sx:{p:r?0:2,background:r?"transparent":(0,i.Fq)(g.palette.error.light,.25),borderRadius:2,minWidth:r?"auto":200,maxWidth:300,minHeight:r?"auto":150,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Z||(0,c.jsx)(a.Z,{variant:"Bulk",size:50,color:g.palette.error.main}),(0,c.jsx)(s.Z,{fontWeight:"bold",color:"error",textAlign:"center",mt:1,children:m})]})})}},29562:function(e,n,r){var t=r(13967),o=r(68870),i=r(20890),s=r(53767),a=r(36151),c=r(82281),l=r(80184);n.Z=function(e){var n=e.background,r=e.height,u=void 0===r?"auto":r,d=e.width,h=void 0===d?"auto":d,x=e.boxWidth,m=void 0===x?300:x,p=e.errorTitle,f=void 0===p?"Fetch Error":p,Z=e.errorMessage,g=void 0===Z?"Something went wrong.":Z,v=e.errorIcon,j=e.onRetry,C=e.onClose,b=e.loading,w=void 0!==b&&b,y=e.buttonText,k=void 0===y?"Retry":y,T=e.buttonTextLoading,S=void 0===T?"Retrying...":T,A=e.flexGrow,O=void 0!==A&&A,E=(0,t.Z)();return(0,l.jsx)(o.Z,{sx:{display:"grid",placeItems:"center",height:u,width:h,flexGrow:O?1:void 0},children:(0,l.jsxs)(o.Z,{sx:{p:2,background:n||E.palette.background.paper,borderRadius:2,width:m,minHeight:200,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[v||(0,l.jsx)(c.Z,{variant:"Bulk",size:50,color:E.palette.error.main}),(0,l.jsx)(i.Z,{variant:"h6",fontWeight:"bold",color:"error",textAlign:"center",mt:1,children:f}),(0,l.jsx)(i.Z,{variant:"body2",fontWeight:"normal",color:"error",textAlign:"center",mb:2,children:g}),(0,l.jsxs)(s.Z,{direction:"row",spacing:2,children:[C&&(0,l.jsx)(a.Z,{size:"small",onClick:C,autoFocus:!0,children:"OK"}),j&&(0,l.jsx)(a.Z,{onClick:j,size:"small",disabled:w,children:w?S:k})]})]})})}},14846:function(e,n,r){r.r(n),r.d(n,{default:function(){return U}});var t=r(29439),o=r(63466),i=r(36151),s=r(10266),a=r(53767),c=r(63033),l=r(64094),u=r(32451),d=r(92630),h=r(39421),x=r(62643),m=r(85871),p=r(28819),f=r(29562),Z=r(69780),g=r(58536),v=r(64370),j=r(1413),C=r(13967),b=r(61889),w=r(93044),y=r(20890),k=r(71715),T=r(23786),S=r(13239),A=r(68870),O=r(12065),E=r(5247),R=r(86544),M=r(35585),P=r(89749),W=r(48072),D=r(26995),N=r(61547),B=r(17139),z=r(72791),I=r(58617),F=r(57689),_=r(82139),J=r(17657),L=r(14485),G=r(80184);function K(e){var n,r=(0,z.useState)(null),o=(0,t.Z)(r,2),i=o[0],c=o[1],l=(0,z.useState)(),h=(0,t.Z)(l,2),x=h[0],m=h[1],p=(0,z.useState)(!1),f=(0,t.Z)(p,2),Z=f[0],g=f[1],v=Boolean(i),K=(0,C.Z)(),U=(0,F.s0)(),q=(0,u.Z)(d.Z.deleteCustomer,{manual:!0,onSuccess:function(){c(null),e.onSuccess()}}),H=q.run,V=q.loading,Q=q.error,Y=(0,u.Z)(d.Z.updateCustomer,{manual:!0,onSuccess:function(){c(null),e.onSuccess()}}),X=Y.loading,$=Y.error,ee=Y.run,ne=(0,u.Z)(d.Z.getCustomerDetails,{manual:!1,onSuccess:function(e){ee({cusRequest:(0,j.Z)((0,j.Z)({},e.customer),{},{customerType:_.lh.CUSTOMER}),id:"".concat(e.customer.id)})}}),re=ne.run,te=ne.error,oe=ne.cancel;(0,z.useEffect)((function(){(Q||te||$)&&g(!Z)}),[Q,te,$]),(0,z.useEffect)((function(){x||oe()}),[x]);var ie=function(){x&&(U(J.u.customers.updatePotentialCustomer.replace(":id","".concat(x))),c(null))},se=function(){x&&H({id:x})},ae=function(){x&&re({id:x})};return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(E.Z,{open:Z,onCloseDialog:function(){g(!Z)},errorTitle:"Delete fail!",errorMessage:(null===Q||void 0===Q?void 0:Q.message)||"Something went wrong!"}),(0,G.jsx)(s.Z,{maxWidth:"xl",children:(0,G.jsx)(b.ZP,{container:!0,spacing:2,children:null===(n=e.data)||void 0===n?void 0:n.map((function(e){return(0,G.jsx)(b.ZP,{item:!0,xs:12,sm:4,children:(0,G.jsxs)(a.Z,{direction:"column",bgcolor:"common.white",p:2,borderRadius:2.5,children:[(0,G.jsxs)(a.Z,{direction:"row",alignItems:"center",width:"100%",justifyContent:"space-between",children:[(0,G.jsxs)(a.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,G.jsx)(w.Z,{src:e.images,variant:"circular",sx:{height:40,width:40},children:e.customer_name.slice(0,1)}),(0,G.jsxs)(a.Z,{direction:"column",children:[(0,G.jsx)(y.Z,{variant:"body2",noWrap:!0,overflow:"hidden",textOverflow:"ellipsis",width:92,display:"inline-block",children:e.customer_name}),(0,G.jsxs)(a.Z,{direction:"row",spacing:.5,alignItems:"center",children:[e.telegram_name&&(0,G.jsx)(M.Z,{size:"14",color:L.Z.telegramColor,variant:"Bold"})||e.facebook_name&&(0,G.jsx)(P.Z,{size:"14",color:L.Z.facebookColor,variant:"Bold"})||e.contact_number&&(0,G.jsx)(W.Z,{size:"14",color:K.palette.success.main,variant:"Bold"}),(0,G.jsx)(y.Z,{variant:"caption",noWrap:!0,color:"text.secondary",children:e.facebook_name||e.telegram_name||e.contact_number})]})]})]}),(0,G.jsx)(R.Q,{sx:{boxShadow:0,color:function(e){return e.palette.text.secondary}},onClick:function(n){var r,t;r=n,t=e.id,c(r.currentTarget),m(t)},children:(0,G.jsx)(I.JEI,{})}),(0,G.jsxs)(k.Z,{id:"basic-menu",anchorEl:i,open:v,onClose:function(){c(null)},MenuListProps:{"aria-labelledby":"basic-button"},elevation:1,children:[(0,G.jsxs)(T.Z,{onClick:ie,children:[(0,G.jsx)(D.Z,{size:"18",color:K.palette.info.main,style:{marginRight:8},variant:"Bold"}),"Edit"]}),(0,G.jsx)(T.Z,{onClick:ae,children:X?(0,G.jsx)(S.Z,{size:"small"}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(N.Z,{variant:"Bold",size:"18",color:K.palette.primary.main,style:{marginRight:8}}),"To Customer"]})}),(0,G.jsx)(T.Z,{onClick:se,children:V?(0,G.jsx)(S.Z,{size:"small"}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(B.Z,{variant:"Bold",size:"18",color:K.palette.error.main,style:{marginRight:8}}),"Delete"]})})]})]}),(0,G.jsx)(A.Z,{mt:1,sx:{bgcolor:function(e){return(0,O.Fq)(e.palette.warning.light,.1)},borderRadius:2,height:100,overflow:"auto",p:1},children:(0,G.jsx)(y.Z,{whiteSpace:"pre-line",variant:"caption",color:e.remarks?void 0:"text.secondary",children:e.remarks?e.remarks:"\u1798\u17b7\u1793\u1791\u17b6\u1793\u17cb\u1798\u17b6\u1793\u1780\u178f\u17cb\u1785\u17c6\u178e\u17b6\u17c6..."})})]})},e.id)}))})})]})}function U(){var e=(0,z.useState)(0),n=(0,t.Z)(e,2),r=n[0],j=n[1],C=(0,z.useState)(10),b=(0,t.Z)(C,2),w=b[0],y=b[1],k=(0,z.useState)(""),T=(0,t.Z)(k,2),S=T[0],A=T[1],O=(0,Z.Z)().isSmDown,E=(0,F.s0)(),R=(0,l.Z)(S,{wait:500}),M=(0,u.Z)(d.Z.getCustomerList,{manual:!1}),P=M.data,W=M.loading,D=M.run,N=M.error,B=M.refresh;(0,z.useEffect)((function(){D({type:_.lh.POTENTIAL_CUSTOMER,page:r,size:10,search:R})}),[r,R]);return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(m.Z,{pageTitle:"Potentials",children:[(0,G.jsx)(x.Z,{fullWidth:!!O,placeholder:"Search...",size:"small",onChange:function(e){var n;n=e.currentTarget.value,A(n)},sx:{bgcolor:"common.white",mr:2},InputProps:{endAdornment:(0,G.jsx)(o.Z,{position:"end",children:(0,G.jsx)(g.Z,{size:18})})}}),(0,G.jsx)(i.Z,{onClick:function(){return E(J.u.customers.createPotentialCustomer)},variant:"contained",size:"small",disableElevation:!0,sx:{color:"common.white",minWidth:0},children:(0,G.jsx)(v.Z,{})})]}),(0,G.jsx)(s.Z,{maxWidth:"xl",sx:{position:"relative",overflow:"hidden",display:"flex",flexDirection:"column","&> .css-19r6kue-MuiContainer-root":{px:0}},children:W?(0,G.jsx)(a.Z,{direction:"column",justifyContent:"center",alignItems:"center",sx:{height:["calc(100vh - 176px)"]},children:(0,G.jsx)(h.W,{})}):N?(0,G.jsx)(f.Z,{errorMessage:"Internal Server Error!"}):(0,G.jsx)(G.Fragment,{children:0===(null===P||void 0===P?void 0:P.response.length)?(0,G.jsx)(p.Z,{}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(K,{data:null===P||void 0===P?void 0:P.response,onSuccess:B}),(0,G.jsx)(c.Z,{rowsPerPageOptions:O?[]:[10,25,100],component:"div",count:(null===P||void 0===P?void 0:P.totalRecord)||0,rowsPerPage:w,page:r,onPageChange:function(e,n){j(n)},onRowsPerPageChange:function(e){y(+e.target.value),j(0)},labelRowsPerPage:O?"":"Rows per page"})]})})})]})}},82139:function(e,n,r){r.d(n,{F5:function(){return f},Pk:function(){return t},V2:function(){return Z},VC:function(){return g},cF:function(){return l},cW:function(){return m},d9:function(){return u},lh:function(){return h},mV:function(){return p},oQ:function(){return d},qs:function(){return x},u7:function(){return c}});var t,o=r(76053),i=r(16856),s=r(66254),a=r(80184),c=["Cash","ABA","ACLEDA","WING","BAKONG","CANADIA","TRUE MONEY"],l={ACLEDA:"#143c6d",ABA:"#005b7a",WING:"#a4c535",BAKONG:"#dc222c",CANADIA:"#D61229",Cash:"#BB9300","TRUE MONEY":"#f88a30"},u=["\u178f\u17bb","\u1785\u17b6\u1793","\u1781\u17d2\u1791\u17c7","\u1793\u17b6\u1780\u17cb","\u1788\u17bb\u178f","m\xb2","\u1782\u17d2\u179a\u17bf\u1784","\u1794\u17d2\u179a\u17a1\u17c4\u17c7","pcs"],d=["Wedding","Birthday","Party","House Warming","Engagement"];o.OhZ,i.Tbc,s.Z.palette.common.black;!function(e){e[e.Jan=1]="Jan",e[e.Feb=2]="Feb",e[e.Mar=3]="Mar",e[e.Apr=4]="Apr",e[e.May=5]="May",e[e.Jun=6]="Jun",e[e.Jul=7]="Jul",e[e.Aug=8]="Aug",e[e.Sep=9]="Sep",e[e.Oct=10]="Oct",e[e.Nov=11]="Nov",e[e.Dec=12]="Dec"}(t||(t={}));var h,x,m,p,f={January:"\u1798\u1780\u179a\u17b6",February:"\u1780\u17bb\u1798\u17d2\u1797\u17c8",March:"\u1798\u17b7\u1793\u17b6",April:"\u1798\u17c1\u179f\u17b6",May:"\u17a7\u179f\u1797\u17b6",June:"\u1798\u17b7\u1790\u17bb\u1793\u17b6",July:"\u1780\u1780\u17d2\u1780\u178a\u17b6",August:"\u179f\u17b8\u17a0\u17b6",September:"\u1780\u1789\u17d2\u1789\u17b6",October:"\u178f\u17bb\u179b\u17b6",November:"\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6",December:"\u1792\u17d2\u1793\u17bc"},Z={week:0,month:1,year:2};!function(e){e.POTENTIAL_CUSTOMER="POTENTIAL_CUSTOMER",e.CUSTOMER="CUSTOMER"}(h||(h={})),function(e){e.OTHER="OTHER",e.MALE="MALE",e.FEMALE="FEMALE"}(x||(x={})),function(e){e.FB="FB",e.TG="TG"}(m||(m={})),function(e){e.STOCK="STOCK",e.NON_STOCK="NON_STOCK"}(p||(p={}));var g={STOCK:"\u1798\u17b6\u1793\u1780\u17d2\u1793\u17bb\u1784\u179f\u17d2\u178f\u17bb\u1780",NON_STOCK:"\u1798\u17b7\u1793\u1798\u17b6\u1793\u179f\u17d2\u178f\u17bb\u1780"}}}]);
//# sourceMappingURL=4846.23a5ad96.chunk.js.map