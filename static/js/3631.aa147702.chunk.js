"use strict";(self.webpackChunkmongkol_serey_cms=self.webpackChunkmongkol_serey_cms||[]).push([[3631],{71467:function(e,n,r){var t=r(74165),s=r(15861),o=r(38233),i=r(17657),a={getListFoods:function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(i.J.listFoods);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getListMenu:function(){var e=(0,s.Z)((0,t.Z)().mark((function e(){var n;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get(i.J.listMenus);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()};n.Z=a},5247:function(e,n,r){var t=r(1413),s=r(45987),o=r(5574),i=r(39157),a=r(53767),c=r(20890),l=r(36151),u=r(69780),d=r(82281),x=r(66254),h=r(80184),m=["open","errorMessage","errorTitle","onCloseDialog","onClose"];n.Z=function(e){var n=e.open,r=e.errorMessage,p=e.errorTitle,Z=e.onCloseDialog,f=(e.onClose,(0,s.Z)(e,m)),g=(0,u.Z)().isSmDown;return(0,h.jsx)(o.Z,(0,t.Z)((0,t.Z)({open:n,fullWidth:!0,maxWidth:"xs",onClose:Z},f),{},{children:(0,h.jsx)(i.Z,{children:(0,h.jsxs)(a.Z,{alignItems:"center",sx:{px:4},spacing:2,children:[(0,h.jsx)(d.Z,{size:g?"40":"80",color:x.Z.palette.primary.main,variant:"Bulk"}),(0,h.jsx)(c.Z,{variant:g?"subtitle1":"h5",noWrap:!0,sx:{fontWeight:function(e){return e.typography.fontWeightBold}},children:p||"OOP!"}),(0,h.jsx)(c.Z,{sx:{color:function(e){return e.palette.error.main}},textAlign:"center",variant:g?"caption":"h5",children:r}),(0,h.jsx)(l.Z,{onClick:Z,variant:"contained",sx:{borderRadius:3,px:3,boxShadow:0},children:(0,h.jsx)(c.Z,{color:"white",sx:{textTransform:"capitalize"},children:"OK, cool"})})]})})}))}},85871:function(e,n,r){var t=r(84395),s=r(34663),o=r(61889),i=r(20890),a=(r(72791),r(69780)),c=r(80184);n.Z=function(e){var n=e.children,r=e.pageTitle,l=(0,a.Z)().isSmDown;return(0,c.jsx)(t.Z,{position:"sticky",sx:{bgcolor:"background.paper",boxShadow:"none",borderRadius:0,mb:1},children:(0,c.jsx)(s.Z,{sx:{py:2,px:{sm:0}},children:(0,c.jsxs)(o.ZP,{container:!0,px:l?0:3,rowGap:l?2:0,children:[(0,c.jsx)(o.ZP,{item:!0,xs:6,md:"auto",children:(0,c.jsx)(i.Z,{variant:"h6",fontWeight:"600",children:r})}),(0,c.jsx)(o.ZP,{item:!0,xs:6,md:!0,display:"flex",justifyContent:"flex-end",children:n})]})})})}},98507:function(e,n,r){r.d(n,{Z:function(){return o}});var t=r(29439),s=r(72791);function o(){var e=(0,s.useState)({message:"Something went wrong",error:!1}),n=(0,t.Z)(e,2);return{errorState:n[0],setErorrState:n[1]}}},83631:function(e,n,r){r.r(n),r.d(n,{default:function(){return y}});var t=r(63466),s=r(36151),o=r(10266),i=r(61889),a=r(85871),c=r(57621),l=r(42169),u=r(39504),d=r(20890),x=r(72363),h=r(80184),m=function(e){var n=e.menu;return(0,h.jsxs)(c.Z,{children:[(0,h.jsx)(l.Z,{image:"https://api.telegram.org/file/bot5683327648:AAForuzEywsdCCXFlR04En_Gl7pD34poVl4/documents/file_39.jpg",title:n.name,sx:{aspectRatio:"4 / 3"}}),(0,h.jsxs)(u.Z,{sx:{height:100},children:[(0,h.jsx)(d.Z,{noWrap:!0,variant:"h6",lineHeight:1.5,component:"div",children:n.name}),n.items.map((function(e){return(0,h.jsx)(d.Z,{variant:"body2",color:"text.secondary",children:e.name},e.id)}))]}),(0,h.jsxs)(x.Z,{children:[(0,h.jsx)(s.Z,{size:"small",children:"Edit"}),(0,h.jsx)(s.Z,{size:"small",children:"Remove"})]})]})},p=r(62643),Z=r(58536),f=r(64370),g=r(57689),j=r(17657),v=r(32451),w=r(98507),b=r(71467),k=r(5247);function y(){var e=(0,g.s0)(),n=(0,w.Z)(),r=n.errorState,c=n.setErorrState,l=(0,v.Z)(b.Z.getListMenu,{manual:!1,onError:function(e){return c({error:!r.error,message:e.message})},refreshOnWindowFocus:!0}).data;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(k.Z,{open:r.error,onCloseDialog:function(){c({error:!r.error,message:r.message})},errorMessage:r.message}),(0,h.jsxs)(a.Z,{pageTitle:"Menu",children:[(0,h.jsx)(p.Z,{placeholder:"Search...",size:"small",sx:{bgcolor:"common.white",mr:2},InputProps:{endAdornment:(0,h.jsx)(t.Z,{position:"end",children:(0,h.jsx)(Z.Z,{size:18})})}}),(0,h.jsx)(s.Z,{onClick:function(){return e(j.u.menus.createMenuPackage)},variant:"contained",size:"small",disableElevation:!0,sx:{color:"common.white",minWidth:0},children:(0,h.jsx)(f.Z,{})})]}),(0,h.jsx)(o.Z,{maxWidth:"xl",children:(0,h.jsx)(i.ZP,{container:!0,spacing:3,children:null===l||void 0===l?void 0:l.map((function(e,n){return(0,h.jsx)(i.ZP,{item:!0,xs:3,children:(0,h.jsx)(m,{menu:e})},e.id)}))})})]})}}}]);
//# sourceMappingURL=3631.aa147702.chunk.js.map