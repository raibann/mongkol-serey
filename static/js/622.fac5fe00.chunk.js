"use strict";(self.webpackChunkmongkol_serey_cms=self.webpackChunkmongkol_serey_cms||[]).push([[622],{92630:function(n,e,r){var t=r(74165),o=r(15861),i=r(38233),a=r(17657),c={getCustomerList:function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e){var r,o,c,s,u;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.page,o=e.search,c=e.size,s=e.type,n.next=3,i.Z.get(a.J.customersList,{params:{page:r,size:c||10,search:o,customerType:s}});case 3:return u=n.sent,n.abrupt("return",u);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),getCustomerDetails:function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e){var r,o;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.id,n.next=3,i.Z.get(a.J.customerDetails.replace(":id","".concat(r)));case 3:return o=n.sent,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),postNewCustomer:function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e){var r,o;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.cusRequest,n.next=3,i.Z.post(a.J.addCustomer,r);case 3:return o=n.sent,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),updateCustomer:function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e){var r,o,c;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.cusRequest,o=e.id,n.next=3,i.Z.put(a.J.updateCustomer.replace(":id","".concat(o)),r);case 3:return c=n.sent,n.abrupt("return",c);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),deleteCustomer:function(){var n=(0,o.Z)((0,t.Z)().mark((function n(e){var r,o;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.id,n.next=3,i.Z.delete(a.J.deletCustomer.replace(":id","".concat(r)));case 3:return o=n.sent,n.abrupt("return",o);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()};e.Z=c},65172:function(n,e,r){r.d(e,{Z:function(){return m}});var t=r(45987),o=r(1413),i=r(72791),a=r(5574),c=r(55931),s=r(53767),u=r(20890),l=r(36151),d=r(20124),p=r(66254),f=r(39709),x=r(80184),h=["open","title","confirm","cancel","loading"],Z=i.forwardRef((function(n,e){return(0,x.jsx)(c.Z,(0,o.Z)({direction:"up",ref:e},n))}));function m(n){var e=n.open,r=n.title,i=n.confirm,c=n.cancel,m=n.loading,g=(0,t.Z)(n,h);return(0,x.jsx)(a.Z,(0,o.Z)((0,o.Z)({open:e,TransitionComponent:Z,maxWidth:n.maxWidth,onClose:c},g),{},{children:(0,x.jsxs)(s.Z,{alignItems:"center",sx:{p:4},spacing:3,children:[(0,x.jsxs)(s.Z,{alignItems:"center",children:[(0,x.jsx)(d.Z,{size:"60",color:p.Z.palette.error.main,variant:"Bulk"}),(0,x.jsx)(u.Z,{variant:"body1",color:"error",children:r})]}),(0,x.jsxs)(s.Z,{direction:"row",spacing:4,children:[(0,x.jsx)(l.Z,{variant:"contained",color:"error",sx:{"&:hover":{bgcolor:p.Z.palette.error.main,color:p.Z.palette.common.white}},onClick:c,children:"Cancel"}),(0,x.jsx)(f.Z,{onClick:i,loading:m,variant:"contained",color:"info",loadingIndicator:"Deletting\u2026",children:"Confirm"})]})]})}))}},5247:function(n,e,r){var t=r(1413),o=r(45987),i=r(5574),a=r(39157),c=r(53767),s=r(20890),u=r(36151),l=r(69780),d=r(82281),p=r(66254),f=r(80184),x=["open","errorMessage","errorTitle","onCloseDialog","onClose"];e.Z=function(n){var e=n.open,r=n.errorMessage,h=n.errorTitle,Z=n.onCloseDialog,m=(n.onClose,(0,o.Z)(n,x)),g=(0,l.Z)().isSmDown;return(0,f.jsx)(i.Z,(0,t.Z)((0,t.Z)({open:e,fullWidth:!0,maxWidth:"xs",onClose:Z},m),{},{children:(0,f.jsx)(a.Z,{children:(0,f.jsxs)(c.Z,{alignItems:"center",sx:{px:4},spacing:2,children:[(0,f.jsx)(d.Z,{size:g?"40":"80",color:p.Z.palette.primary.main,variant:"Bulk"}),(0,f.jsx)(s.Z,{variant:g?"subtitle1":"h5",noWrap:!0,sx:{fontWeight:function(n){return n.typography.fontWeightBold}},children:h||"OOP!"}),(0,f.jsx)(s.Z,{sx:{color:function(n){return n.palette.error.main}},textAlign:"center",variant:g?"caption":"h5",children:r}),(0,f.jsx)(u.Z,{onClick:Z,variant:"contained",sx:{borderRadius:3,px:3,boxShadow:0},children:(0,f.jsx)(s.Z,{color:"white",sx:{textTransform:"capitalize"},children:"OK, cool"})})]})})}))}},39421:function(n,e,r){r.d(e,{W:function(){return i}});var t=r(72791),o=r(80184),i=t.memo((function(){return(0,o.jsxs)("div",{className:"lds-facebook",children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]})}))},1507:function(n,e,r){r.d(e,{Y:function(){return p},Z:function(){return d}});var t=r(1413),o=r(39281),i=r(79836),a=r(56890),c=r(35855),s=r(53994),u=r(53382),l=r(80184);function d(n){var e,r,d,f;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(o.Z,{sx:(0,t.Z)({},null===(e=n.sx)||void 0===e?void 0:e.container),children:(0,l.jsxs)(i.Z,{sx:(0,t.Z)({width:"100%",borderCollapse:"separate",borderSpacing:"0px 12px"},null===(r=n.sx)||void 0===r?void 0:r.table),children:[(0,l.jsx)(a.Z,{sx:(0,t.Z)({},null===(d=n.sx)||void 0===d?void 0:d.header),children:(0,l.jsx)(c.Z,{sx:p.headRow,children:n.headers.map((function(n,e){return(0,l.jsx)(s.Z,{sx:p.headCell,children:n},e)}))})}),(0,l.jsx)(u.Z,{sx:(0,t.Z)({},null===(f=n.sx)||void 0===f?void 0:f.body),children:n.body})]})})})}var p={headRow:{background:"transparent","&> th":{pt:0,borderBottom:0}},headCell:{fontWeight:function(n){return n.typography.fontWeightBold},whiteSpace:"nowrap"},bodyRow:{background:function(n){return n.palette.common.white},"&> td:first-of-type":{borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"},"&> td:last-child":{borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}}}},26486:function(n,e,r){r.d(e,{Z:function(){return O}});var t=r(29439),o=r(35855),i=r(53994),a=r(53767),c=r(93044),s=r(20890),u=r(12065),l=r(36151),d=r(32451),p=r(92630),f=r(65172),x=r(5247),h=r(86544),Z=r(1507),m=r(35585),g=r(89749),v=r(59941),j=r(26995),C=r(17139),b=r(72791),y=r(57689),w=r(66254),A=r(17657),k=r(14485),S=r(80184),T=["No","Name","Phone Number","Address",""];function O(n){var e=(0,b.useState)(!1),r=(0,t.Z)(e,2),O=r[0],N=r[1],R=(0,b.useState)(!1),B=(0,t.Z)(R,2),E=B[0],M=B[1],W=(0,b.useState)(),D=(0,t.Z)(W,2),_=D[0],F=D[1],I=(0,y.s0)(),J=(0,d.Z)(p.Z.deleteCustomer,{manual:!0,onSuccess:n.onSuccess}),L=J.run,z=J.loading,K=J.error;return(0,b.useEffect)((function(){K&&N(!O)}),[K]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(x.Z,{open:O,onCloseDialog:function(){N(!O)},errorTitle:"Delete fail!",errorMessage:(null===K||void 0===K?void 0:K.message)||"Something went wrong!"}),(0,S.jsx)(f.Z,{open:E,loading:z,onClose:function(){return M(!1)},cancel:function(){return M(!1)},confirm:function(){return _&&L({id:_})},title:"Are you sure?"}),(0,S.jsx)(Z.Z,{headers:T,body:n.data&&n.data.map((function(e){return(0,S.jsxs)(o.Z,{onClick:function(){var r;return null===(r=n.onSelect)||void 0===r?void 0:r.call(n,e)},sx:Z.Y.bodyRow,children:[(0,S.jsx)(i.Z,{children:e.id}),(0,S.jsx)(i.Z,{align:"left",sx:{fontWeight:function(n){return n.typography.fontWeightBold}},children:(0,S.jsxs)(a.Z,{direction:"row",spacing:2,alignItems:"center",children:[(0,S.jsx)(c.Z,{alt:"Remy Sharp",src:e.images,variant:"rounded",sx:{height:40,width:40,borderRadius:2}}),(0,S.jsxs)(a.Z,{direction:"column",children:[(0,S.jsx)(s.Z,{variant:"body2",children:e.customer_name}),(0,S.jsxs)(a.Z,{direction:"row",spacing:.5,alignItems:"center",children:[e.telegram_name&&(0,S.jsx)(m.Z,{size:"14",color:k.Z.telegramColor,variant:"Bold"})||e.facebook_name&&(0,S.jsx)(g.Z,{size:"14",color:k.Z.facebookColor,variant:"Bold"}),(0,S.jsx)(s.Z,{variant:"caption",noWrap:!0,color:"text.secondary",children:e.telegram_name||e.facebook_name})]})]})]})}),(0,S.jsx)(i.Z,{align:"left",children:e.contact_number}),(0,S.jsx)(i.Z,{align:"left",children:(0,S.jsxs)(a.Z,{direction:"row",spacing:.5,alignItems:"center",children:[(0,S.jsx)(v.Z,{size:"14",color:w.Z.palette.primary.main,variant:"Bold"}),(0,S.jsx)(s.Z,{variant:"body2",noWrap:!0,children:e.location||e.province})]})}),(0,S.jsx)(i.Z,{align:"right",children:(0,S.jsxs)(a.Z,{direction:"row",spacing:1,alignItems:"center",justifyContent:"end",children:[!0!==n.disableAction&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h.Q,{sx:{boxShadow:0,background:function(n){return(0,u.Fq)(n.palette.info.main,.1)}},onClick:function(){return I(A.u.customers.updateCustomer.replace(":id","".concat(e.id)))},children:(0,S.jsx)(j.Z,{size:"18",color:w.Z.palette.info.main,variant:"Bold"})}),(0,S.jsx)(h.Q,{sx:{boxShadow:0,background:function(n){return(0,u.Fq)(n.palette.error.main,.1)}},onClick:function(){F(e.id),M(!0)},children:(0,S.jsx)(C.Z,{size:"18",color:w.Z.palette.error.main,variant:"Bold"})})]}),n.onSelect&&(0,S.jsx)(l.Z,{onClick:function(){var r;return null===(r=n.onSelect)||void 0===r?void 0:r.call(n,e)},variant:"contained",size:"small",sx:{color:"common.white"},children:"Select"})]})})]},e.id)}))})]})}},82139:function(n,e,r){r.d(e,{F5:function(){return Z},Pk:function(){return t},V2:function(){return m},VC:function(){return g},cF:function(){return u},cW:function(){return x},d9:function(){return l},lh:function(){return p},mV:function(){return h},oQ:function(){return d},qs:function(){return f},u7:function(){return s}});var t,o=r(76053),i=r(16856),a=r(66254),c=r(80184),s=["Cash","ABA","ACLEDA","WING","BAKONG","CANADIA","TRUE MONEY"],u={ACLEDA:"#143c6d",ABA:"#005b7a",WING:"#a4c535",BAKONG:"#dc222c",CANADIA:"#D61229",Cash:"#BB9300","TRUE MONEY":"#f88a30"},l=["\u178f\u17bb","\u1785\u17b6\u1793","\u1781\u17d2\u1791\u17c7","\u1793\u17b6\u1780\u17cb","\u1788\u17bb\u178f","m\xb2","\u1782\u17d2\u179a\u17bf\u1784","\u1794\u17d2\u179a\u17a1\u17c4\u17c7","pcs"],d=["Wedding","Birthday","Party","House Warming","Engagement"];o.OhZ,i.Tbc,a.Z.palette.common.black;!function(n){n[n.Jan=1]="Jan",n[n.Feb=2]="Feb",n[n.Mar=3]="Mar",n[n.Apr=4]="Apr",n[n.May=5]="May",n[n.Jun=6]="Jun",n[n.Jul=7]="Jul",n[n.Aug=8]="Aug",n[n.Sep=9]="Sep",n[n.Oct=10]="Oct",n[n.Nov=11]="Nov",n[n.Dec=12]="Dec"}(t||(t={}));var p,f,x,h,Z={January:"\u1798\u1780\u179a\u17b6",February:"\u1780\u17bb\u1798\u17d2\u1797\u17c8",March:"\u1798\u17b7\u1793\u17b6",April:"\u1798\u17c1\u179f\u17b6",May:"\u17a7\u179f\u1797\u17b6",June:"\u1798\u17b7\u1790\u17bb\u1793\u17b6",July:"\u1780\u1780\u17d2\u1780\u178a\u17b6",August:"\u179f\u17b8\u17a0\u17b6",September:"\u1780\u1789\u17d2\u1789\u17b6",October:"\u178f\u17bb\u179b\u17b6",November:"\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6",December:"\u1792\u17d2\u1793\u17bc"},m={week:0,month:1,year:2};!function(n){n.POTENTIAL_CUSTOMER="POTENTIAL_CUSTOMER",n.CUSTOMER="CUSTOMER"}(p||(p={})),function(n){n.OTHER="OTHER",n.MALE="MALE",n.FEMALE="FEMALE"}(f||(f={})),function(n){n.FB="FB",n.TG="TG"}(x||(x={})),function(n){n.STOCK="STOCK",n.NON_STOCK="NON_STOCK"}(h||(h={}));var g={STOCK:"\u1798\u17b6\u1793\u1780\u17d2\u1793\u17bb\u1784\u179f\u17d2\u178f\u17bb\u1780",NON_STOCK:"\u1798\u17b7\u1793\u1798\u17b6\u1793\u179f\u17d2\u178f\u17bb\u1780"}}}]);
//# sourceMappingURL=622.fac5fe00.chunk.js.map