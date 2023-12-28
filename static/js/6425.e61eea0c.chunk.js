"use strict";(self.webpackChunkmongkol_serey_cms=self.webpackChunkmongkol_serey_cms||[]).push([[6425],{46425:function(e,n,t){t.r(n),t.d(n,{default:function(){return Q}});var r=t(29439),i=t(13967),o=t(63466),s=t(36151),a=t(10266),l=t(53767),c=t(35855),d=t(53994),u=t(12065),f=t(86544),x=t(62643),h=t(19373),m=t(85871),p=t(58536),Z=t(64370),v=t(26995),j=t(17139),g=t(72791),b=t(1413),C=t(39709),S=t(32451),k=t(40997),y=t(84753),w=t(61134),R=t(14485),z=t(80184),U=function(e){var n=e.onClose,t=e.id,r=(0,w.cI)({defaultValues:{description:"",name:""}}),i=r.control,o=r.handleSubmit,a=r.setValue,c=(0,S.Z)(k.y1.unitAction,{manual:!0,onError:function(){return console.log("error")},onSuccess:n}),d=c.run,u=c.loading,f=(0,S.Z)((function(){return k.y1.unitDetail({id:t})}),{onSuccess:function(e){a("id",e.id),a("name",e.name),a("description",e.description)},ready:!!t}).loading;return(0,z.jsxs)(l.Z,{spacing:2,component:"form",onSubmit:o((function(e){d(e)})),children:[(0,z.jsx)(w.Qr,{control:i,name:"name",render:function(e){var n=e.field,t=e.fieldState;return(0,z.jsx)(y.Z,(0,b.Z)({size:"small",label:"Unit name",fieldState:t},n))}}),(0,z.jsx)(w.Qr,{control:i,name:"description",render:function(e){var n=e.field,t=e.fieldState;return(0,z.jsx)(y.Z,(0,b.Z)({size:"small",label:"Description",fieldState:t},n))}}),(0,z.jsxs)(l.Z,{direction:"row",spacing:2,pt:2,children:[(0,z.jsx)(s.Z,{onClick:n,size:"large",variant:"outlined",sx:{flex:1},children:"Cancel"}),(0,z.jsx)(C.Z,{loading:f||u,type:"submit",size:"large",variant:"contained",sx:{flex:1,background:R.Z.goldGradientMain},children:"Save"})]})]})},T=t(1507),W=t(64094),D=t(39421),I=t(13949),B=t(29562),M=t(28819);function Q(){var e=(0,i.Z)(),n=(0,g.useRef)(),t=(0,g.useRef)(),b=(0,g.useState)(""),C=(0,r.Z)(b,2),y=C[0],w=C[1],R=(0,W.Z)(y,{wait:500}),Q=(0,S.Z)((function(){return k.y1.unitList({search:R})}),{refreshDeps:[R]}),_=Q.data,A=Q.loading,F=Q.error,G=Q.refresh,L=(0,S.Z)(k.y1.deleteUnit,{manual:!0,onSuccess:G}).run;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(h.Z,{ref:n,cusWidth:400,cusTitle:"Add New Unit",alternateTitle:"Update Unit",content:function(e){return(0,z.jsx)(U,{id:e,onClose:function(){var e;G(),null===(e=n.current)||void 0===e||e.close()}})}}),(0,z.jsx)(h.Z,{ref:t,content:function(e){return(0,z.jsx)(I.Z,{title:"Delete Unit",onConfirm:function(){var n;L({id:e}),null===(n=t.current)||void 0===n||n.close()},onClose:function(){var e;return null===(e=t.current)||void 0===e?void 0:e.close()}})}}),(0,z.jsxs)(m.Z,{pageTitle:"Inventory Unit",children:[(0,z.jsx)(x.Z,{value:y,onChange:function(e){return w(e.target.value)},placeholder:"Search...",size:"small",sx:{bgcolor:"common.white",mr:2},InputProps:{endAdornment:(0,z.jsx)(o.Z,{position:"end",children:(0,z.jsx)(p.Z,{size:18})})}}),(0,z.jsx)(s.Z,{onClick:function(){var e;return null===(e=n.current)||void 0===e?void 0:e.open()},variant:"contained",size:"small",disableElevation:!0,sx:{color:"common.white",minWidth:0},children:(0,z.jsx)(Z.Z,{})})]}),(0,z.jsx)(a.Z,{maxWidth:"xl",children:A?(0,z.jsx)(l.Z,{height:"80vh",alignItems:"center",justifyContent:"center",children:(0,z.jsx)(D.W,{})}):F?(0,z.jsx)(B.Z,{height:"80vh",errorMessage:null===F||void 0===F?void 0:F.message}):_&&_.length>0?(0,z.jsx)(T.Z,{headers:["No.","Name","Description",""],body:_.map((function(r){return(0,z.jsxs)(c.Z,{sx:{background:function(e){return e.palette.common.white},"&> td:first-of-type":{borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"},"&> td:last-child":{borderTopRightRadius:"10px",borderBottomRightRadius:"10px"}},children:[(0,z.jsx)(d.Z,{children:r.id}),(0,z.jsx)(d.Z,{children:r.name}),(0,z.jsx)(d.Z,{children:r.description}),(0,z.jsx)(d.Z,{align:"right",children:(0,z.jsxs)(l.Z,{spacing:2,direction:"row",alignItems:"center",justifyContent:"end",children:[(0,z.jsx)(f.Q,{onClick:function(){var e;return null===(e=n.current)||void 0===e?void 0:e.open(r.id)},sx:{boxShadow:0,background:function(e){return(0,u.Fq)(e.palette.info.main,.1)}},children:(0,z.jsx)(v.Z,{size:"20",color:e.palette.info.main,variant:"Bold"})}),(0,z.jsx)(f.Q,{onClick:function(){var e;return null===(e=t.current)||void 0===e?void 0:e.open(r.id)},sx:{boxShadow:0,background:function(e){return(0,u.Fq)(e.palette.error.main,.1)}},children:(0,z.jsx)(j.Z,{size:"20",color:e.palette.error.main,variant:"Bold"})})]})})]},r.id)}))}):(0,z.jsx)(M.Z,{height:"80vh"})})]})}},10266:function(e,n,t){var r=t(77184),i=t(14036),o=t(66934),s=t(31402),a=(0,r.Z)({createStyledComponent:(0,o.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState;return[n.root,n["maxWidth".concat((0,i.Z)(String(t.maxWidth)))],t.fixed&&n.fixed,t.disableGutters&&n.disableGutters]}}),useThemeProps:function(e){return(0,s.Z)({props:e,name:"MuiContainer"})}});n.Z=a}}]);
//# sourceMappingURL=6425.e61eea0c.chunk.js.map