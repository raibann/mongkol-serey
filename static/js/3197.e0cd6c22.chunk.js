"use strict";(self.webpackChunkmongkol_serey_cms=self.webpackChunkmongkol_serey_cms||[]).push([[3197],{20685:function(e,r,t){var n=t(74165),a=t(15861),s=t(38233),i=t(17657),l={getSupplierList:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,l,o,u;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.page,a=r.search,l=r.size,o=r.type,e.next=3,s.Z.get(i.J.suppliersList,{params:{page:t,size:l||10,search:a,type:o}});case 3:return u=e.sent,e.abrupt("return",u);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),getSupplierDetails:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.id,e.next=3,s.Z.get(i.J.suppliersDetails.replace(":id","".concat(t)));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),postNewSupplier:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.payload,e.next=3,s.Z.post(i.J.addNewSupplier,t);case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),updateSupplier:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.payload,a=r.id,e.next=3,s.Z.put(i.J.updateSupplier.replace(":id","".concat(a)),t);case 3:return l=e.sent,e.abrupt("return",l);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),deleteSupplier:function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t,a;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.id,e.next=3,s.Z.delete(i.J.deleteSupplier.replace(":id","".concat(t)));case 3:return a=e.sent,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()};r.Z=l},23197:function(e,r,t){t.r(r);var n=t(1413),a=t(74165),s=t(15861),i=t(39709),l=t(35527),o=t(10266),u=t(53767),c=t(23786),d=t(36151),m=t(32451),p=t(20685),f=t(5247),Z=t(62643),h=t(84753),v=t(89437),x=t(37072),g=t(85451),j=t(72791),S=t(61134),y=t(57689),b=t(82139),w=t(17657),N=t(40967),E=t(98507),k=t(20473),T=t(80184);r.default=function(){var e=(0,E.Z)(),r=e.errorState,t=e.setErorrState,V=(0,S.cI)(),z=V.control,F=V.handleSubmit,P=V.setValue,q=V.resetField,L=V.getValues,C=V.watch,Q=(0,g.Z)({disName:L("district"),proName:L("province")}),D=Q.provinces,A=Q.districts,W=Q.communes,G=Q.setDistrictId,B=Q.setProvinceId,J=Q.communeLoading,M=Q.districtLoading,O=Q.provinceLoading,H=Q.errorGeo,R=(0,y.s0)(),_=(0,y.UO)(),I=_&&_.id;(0,j.useEffect)((function(){H&&t(H)}),[H]);var U=(0,m.Z)((0,s.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.Z.getSupplierDetails({id:I&&+I||void 0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),{manual:!1,ready:void 0!==I,refreshDeps:[I],onError:function(e){return t({error:!0,message:e.message})},onSuccess:function(e){var r=e.data.telegram||e.data.facebook,t=e.data.telegram?b.cW.TG:b.cW.FB;P("firstName",e.data.firstName),P("lastName",e.data.lastName),P("gender",e.data.gender||b.qs.OTHER),P("phoneNumber",e.data.phoneNumber),P("street",e.data.street),P("house",e.data.house),P("province",e.data.province),P("district",e.data.district),P("commune",e.data.commune),P("payment",e.data.defaultPayment),P("socialType",t),P("social",r||""),P("images",e.data.images||"")}}).loading,K=(0,m.Z)(p.Z.postNewSupplier,{manual:!0,onError:function(e){return t({error:!0,message:e.message})},onSuccess:function(e){return e&&R(w.u.suppliers.root)}}),X=K.loading,Y=K.run,$=(0,m.Z)(p.Z.updateSupplier,{manual:!0,onError:function(e){return t({error:!0,message:e.message})},onSuccess:function(){R(w.u.suppliers.root)}}),ee=$.loading,re=$.run,te=(0,m.Z)(k.Z.uploadFile,{manual:!0,onError:function(e){return t({error:!0,message:e.message})},onSuccess:function(e){P("images",e.path)}}),ne=te.run,ae=te.loading;return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(f.Z,{open:r.error,onCloseDialog:function(){t({error:!r.error,message:""})},errorMessage:r.message}),(0,T.jsx)(v.Z,{title:_.id?"Update Supplier":"Create New Supplier"}),(0,T.jsx)(l.Z,{sx:{m:3,mt:0,p:2},children:(0,T.jsx)(o.Z,{maxWidth:"sm",component:"form",onSubmit:F((function(e){var r=e.socialType===b.cW.TG?e.social:"",t=e.socialType===b.cW.FB?e.social:"";_.id?re({id:_.id,payload:{firstName:e.firstName,lastName:e.lastName,gender:e.gender,phoneNumber:e.phoneNumber,defaultPayment:e.payment,district:e.district,house:e.house,province:"".concat(e.province),street:e.street,commune:e.commune,facebook:t,telegram:r,others:"",images:e.images}}):Y({payload:{firstName:e.firstName,lastName:e.lastName,gender:e.gender,phoneNumber:e.phoneNumber,defaultPayment:e.payment,district:e.district,house:e.house,province:"".concat(e.province),street:e.street,commune:e.commune,facebook:t,telegram:r,others:"",images:e.images}})})),children:(0,T.jsx)(u.Z,{direction:"column",spacing:2,children:U?(0,T.jsx)(N.Z,{}):(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(u.Z,{direction:"row",spacing:2,children:(0,T.jsx)(x.Z,{src:C("images"),onChange:function(e,r){ne(r),P("images",e)}})}),(0,T.jsxs)(u.Z,{direction:"row",spacing:2,children:[(0,T.jsx)(S.Qr,{defaultValue:"",control:z,name:"firstName",rules:{required:{value:!0,message:"Field is required"}},render:function(e){var r=e.field,t=e.fieldState;return(0,T.jsx)(h.Z,(0,n.Z)({label:"Frist Name",size:"small",fieldState:t},r))}}),(0,T.jsx)(S.Qr,{defaultValue:"",control:z,name:"lastName",rules:{required:{value:!0,message:"Field is required"}},render:function(e){var r=e.field,t=e.fieldState;return(0,T.jsx)(h.Z,(0,n.Z)({label:"Last Name",size:"small",fieldState:t},r))}})]}),(0,T.jsxs)(u.Z,{direction:"row",spacing:2,children:[(0,T.jsx)(S.Qr,{defaultValue:"",control:z,name:"phoneNumber",rules:{required:{value:!0,message:"Field is required"}},render:function(e){var r=e.field,t=e.fieldState;return(0,T.jsx)(h.Z,(0,n.Z)({label:"Phone Number",size:"small",fieldState:t},r))}}),(0,T.jsx)(S.Qr,{defaultValue:b.qs.OTHER,control:z,name:"gender",render:function(e){var r,t=e.field,a=e.fieldState;return(0,T.jsx)(h.Z,{label:"Gender",children:(0,T.jsxs)(Z.Z,(0,n.Z)((0,n.Z)({select:!0,SelectProps:{displayEmpty:!0},size:"small",helperText:null===(r=a.error)||void 0===r?void 0:r.message},t),{},{children:[(0,T.jsx)(c.Z,{value:b.qs.OTHER,children:"Other"}),(0,T.jsx)(c.Z,{value:b.qs.MALE,children:"Male"}),(0,T.jsx)(c.Z,{value:b.qs.FEMALE,children:"Female"})]}))})}})]}),(0,T.jsxs)(u.Z,{direction:"row",spacing:2,children:[(0,T.jsx)(S.Qr,{defaultValue:"",control:z,name:"street",render:function(e){var r=e.field,t=e.fieldState;return(0,T.jsx)(h.Z,(0,n.Z)({label:"Street",size:"small",fieldState:t},r))}}),(0,T.jsx)(S.Qr,{defaultValue:"",control:z,name:"house",render:function(e){var r=e.field,t=e.fieldState;return(0,T.jsx)(h.Z,(0,n.Z)({label:"House",size:"small",fieldState:t},r))}})]}),(0,T.jsxs)(u.Z,{direction:"row",spacing:2,children:[(0,T.jsx)(S.Qr,{defaultValue:"",control:z,name:"province",rules:{required:{value:!0,message:"Field is required"}},render:function(e){var r,t=e.field,a=e.fieldState;return(0,T.jsx)(h.Z,{label:"Province",children:(0,T.jsxs)(Z.Z,(0,n.Z)((0,n.Z)({select:!0,SelectProps:{displayEmpty:!0},size:"small",helperText:null===(r=a.error)||void 0===r?void 0:r.message},t),{},{children:[(0,T.jsx)(c.Z,{value:"",children:O?"Loading...":"Select Provicne"}),!O&&(null===D||void 0===D?void 0:D.map((function(e){return(0,T.jsx)(c.Z,{value:e.name,onClick:function(){B("".concat(e.id)),q("district"),q("commune")},children:e.name},e.name)})))]}))})}}),(0,T.jsx)(S.Qr,{defaultValue:"",control:z,name:"district",render:function(e){var r,t=e.field,a=e.fieldState;return(0,T.jsx)(h.Z,{label:"District",children:(0,T.jsxs)(Z.Z,(0,n.Z)((0,n.Z)({select:!0,SelectProps:{displayEmpty:!0},size:"small",helperText:null===(r=a.error)||void 0===r?void 0:r.message},t),{},{children:[(0,T.jsx)(c.Z,{value:"",children:M?"Loading...":"Select District"}),!M&&(null===A||void 0===A?void 0:A.map((function(e){return(0,T.jsx)(c.Z,{value:e.name,onClick:function(){G("".concat(e.id)),q("commune")},children:e.name},e.name)})))]}))})}})]}),(0,T.jsxs)(u.Z,{direction:"row",spacing:2,children:[(0,T.jsx)(S.Qr,{defaultValue:"",control:z,name:"commune",render:function(e){var r,t=e.field,a=e.fieldState;return(0,T.jsx)(h.Z,{label:"Commune",children:(0,T.jsxs)(Z.Z,(0,n.Z)((0,n.Z)({select:!0,SelectProps:{displayEmpty:!0},size:"small",helperText:null===(r=a.error)||void 0===r?void 0:r.message},t),{},{children:[(0,T.jsx)(c.Z,{value:"",children:J?"Loading...":"Select Commune"}),!J&&(null===W||void 0===W?void 0:W.map((function(e){return(0,T.jsx)(c.Z,{value:e.name,children:e.name},e.name)})))]}))})}}),(0,T.jsx)(S.Qr,{defaultValue:"",control:z,name:"payment",render:function(e){var r=e.field,t=e.fieldState;return(0,T.jsx)(h.Z,{label:"Default Payment",fieldState:t,children:(0,T.jsxs)(Z.Z,(0,n.Z)((0,n.Z)({select:!0,defaultValue:"",SelectProps:{displayEmpty:!0},size:"small"},r),{},{children:[(0,T.jsx)(c.Z,{value:"ABA",children:"ABA"}),(0,T.jsx)(c.Z,{value:"ACLEDA",children:"ACLEDA"})]}))})}})]}),(0,T.jsx)(u.Z,{direction:"row",children:(0,T.jsx)(h.Z,{label:"Social Media",size:"small",children:(0,T.jsxs)(u.Z,{direction:"row",spacing:1,children:[(0,T.jsx)(S.Qr,{defaultValue:"TG",control:z,name:"socialType",render:function(e){var r=e.field;return(0,T.jsxs)(Z.Z,(0,n.Z)((0,n.Z)({select:!0,defaultValue:"",SelectProps:{displayEmpty:!0},size:"small",sx:{width:"40%"}},r),{},{children:[(0,T.jsx)(c.Z,{value:"FB",children:"Facebook"}),(0,T.jsx)(c.Z,{value:"TG",children:"Telegram"})]}))}}),(0,T.jsx)(S.Qr,{defaultValue:"",control:z,name:"social",render:function(e){var r=e.field;return(0,T.jsx)(Z.Z,(0,n.Z)({fullWidth:!0,size:"small"},r))}})]})})}),(0,T.jsxs)(u.Z,{direction:"row",justifyContent:"space-between",spacing:2,py:2,children:[(0,T.jsx)(d.Z,{variant:"outlined",fullWidth:!0,children:"Reset"}),(0,T.jsx)(i.Z,{loading:X||ee||ae,type:"submit",variant:"contained",fullWidth:!0,children:"Save"})]})]})})})})]})}}}]);
//# sourceMappingURL=3197.e0cd6c22.chunk.js.map