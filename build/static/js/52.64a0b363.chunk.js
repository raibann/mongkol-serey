"use strict";(self.webpackChunkmongkol_serey_cms=self.webpackChunkmongkol_serey_cms||[]).push([[52],{69783:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(72426),o=n.n(r),a={normalDateWithWeekday:"ddd, MMM D",normalDate:"D MMMM",shortDate:"MMM D",monthAndDate:"MMMM D",dayOfMonth:"D",year:"YYYY",month:"MMMM",monthShort:"MMM",monthAndYear:"MMMM YYYY",weekday:"dddd",weekdayShort:"ddd",minutes:"mm",hours12h:"hh",hours24h:"HH",seconds:"ss",fullTime:"LT",fullTime12h:"hh:mm A",fullTime24h:"HH:mm",fullDate:"ll",fullDateWithWeekday:"dddd, LL",fullDateTime:"lll",fullDateTime12h:"ll hh:mm A",fullDateTime24h:"ll HH:mm",keyboardDate:"L",keyboardDateTime:"L LT",keyboardDateTime12h:"L hh:mm A",keyboardDateTime24h:"L HH:mm"},c=function(e){var t=this,n=void 0===e?{}:e,r=n.locale,c=n.formats,i=n.instance;this.lib="moment",this.is12HourCycleInCurrentLocale=function(){return/A|a/.test(t.moment.localeData(t.getCurrentLocaleCode()).longDateFormat("LT"))},this.getFormatHelperText=function(e){return e.match(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})|./g).map((function(e){var n=e[0];return"L"===n||";"===n?t.moment.localeData(t.getCurrentLocaleCode()).longDateFormat(e):e})).join("").replace(/a/gi,"(a|p)m").toLocaleLowerCase()},this.getCurrentLocaleCode=function(){return t.locale||t.moment.locale()},this.parseISO=function(e){return t.moment(e,!0)},this.toISO=function(e){return e.toISOString()},this.parse=function(e,n){return""===e?null:t.locale?t.moment(e,n,t.locale,!0):t.moment(e,n,!0)},this.date=function(e){if(null===e)return null;var n=t.moment(e);return n.locale(t.locale),n},this.toJsDate=function(e){return e.toDate()},this.isValid=function(e){return t.moment(e).isValid()},this.isNull=function(e){return null===e},this.getDiff=function(e,t,n){return e.diff(t,n)},this.isAfter=function(e,t){return e.isAfter(t)},this.isBefore=function(e,t){return e.isBefore(t)},this.isAfterDay=function(e,t){return e.isAfter(t,"day")},this.isBeforeDay=function(e,t){return e.isBefore(t,"day")},this.isBeforeYear=function(e,t){return e.isBefore(t,"year")},this.isAfterYear=function(e,t){return e.isAfter(t,"year")},this.startOfDay=function(e){return e.clone().startOf("day")},this.endOfDay=function(e){return e.clone().endOf("day")},this.format=function(e,n){return t.formatByString(e,t.formats[n])},this.formatByString=function(e,n){var r=e.clone();return r.locale(t.locale),r.format(n)},this.formatNumber=function(e){return e},this.getHours=function(e){return e.get("hours")},this.addSeconds=function(e,t){return t<0?e.clone().subtract(Math.abs(t),"seconds"):e.clone().add(t,"seconds")},this.addMinutes=function(e,t){return t<0?e.clone().subtract(Math.abs(t),"minutes"):e.clone().add(t,"minutes")},this.addHours=function(e,t){return t<0?e.clone().subtract(Math.abs(t),"hours"):e.clone().add(t,"hours")},this.addDays=function(e,t){return t<0?e.clone().subtract(Math.abs(t),"days"):e.clone().add(t,"days")},this.addWeeks=function(e,t){return t<0?e.clone().subtract(Math.abs(t),"weeks"):e.clone().add(t,"weeks")},this.addMonths=function(e,t){return t<0?e.clone().subtract(Math.abs(t),"months"):e.clone().add(t,"months")},this.addYears=function(e,t){return t<0?e.clone().subtract(Math.abs(t),"years"):e.clone().add(t,"years")},this.setHours=function(e,t){return e.clone().hours(t)},this.getMinutes=function(e){return e.get("minutes")},this.setMinutes=function(e,t){return e.clone().minutes(t)},this.getSeconds=function(e){return e.get("seconds")},this.setSeconds=function(e,t){return e.clone().seconds(t)},this.getMonth=function(e){return e.get("month")},this.getDaysInMonth=function(e){return e.daysInMonth()},this.isSameDay=function(e,t){return e.isSame(t,"day")},this.isSameMonth=function(e,t){return e.isSame(t,"month")},this.isSameYear=function(e,t){return e.isSame(t,"year")},this.isSameHour=function(e,t){return e.isSame(t,"hour")},this.setMonth=function(e,t){return e.clone().month(t)},this.getMeridiemText=function(e){return t.is12HourCycleInCurrentLocale()?t.moment.localeData(t.getCurrentLocaleCode()).meridiem("am"===e?0:13,0,!1):"am"===e?"AM":"PM"},this.startOfYear=function(e){return e.clone().startOf("year")},this.endOfYear=function(e){return e.clone().endOf("year")},this.startOfMonth=function(e){return e.clone().startOf("month")},this.endOfMonth=function(e){return e.clone().endOf("month")},this.startOfWeek=function(e){return e.clone().startOf("week")},this.endOfWeek=function(e){return e.clone().endOf("week")},this.getNextMonth=function(e){return e.clone().add(1,"month")},this.getPreviousMonth=function(e){return e.clone().subtract(1,"month")},this.getMonthArray=function(e){for(var n=[e.clone().startOf("year")];n.length<12;){var r=n[n.length-1];n.push(t.getNextMonth(r))}return n},this.getYear=function(e){return e.get("year")},this.setYear=function(e,t){return e.clone().set("year",t)},this.getDate=function(e){return e.get("date")},this.setDate=function(e,t){return e.clone().set("date",t)},this.mergeDateAndTime=function(e,t){return e.hour(t.hour()).minute(t.minute()).second(t.second())},this.getWeekdays=function(){return t.moment.weekdaysShort(!0)},this.isEqual=function(e,n){return null===e&&null===n||t.moment(e).isSame(n)},this.getWeekArray=function(e){for(var t=e.clone().startOf("month").startOf("week"),n=e.clone().endOf("month").endOf("week"),r=0,o=t,a=[];o.isBefore(n);){var c=Math.floor(r/7);a[c]=a[c]||[],a[c].push(o),o=o.clone().add(1,"day"),r+=1}return a},this.getYearRange=function(e,n){for(var r=t.moment(e).startOf("year"),o=t.moment(n).endOf("year"),a=[],c=r;c.isBefore(o);)a.push(c),c=c.clone().add(1,"year");return a},this.isWithinRange=function(e,t){var n=t[0],r=t[1];return e.isBetween(n,r,null,"[]")},this.moment=i||o(),this.locale=r,this.formats=Object.assign({},a,c)}},65661:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(87462),o=n(63366),a=n(72791),c=n(28182),i=n(94419),s=n(20890),l=n(66934),u=n(31402),h=n(17673),d=n(85090),m=n(80184);const f=["className","id"],M=(0,l.ZP)(s.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(e,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),k=a.forwardRef((function(e,t){const n=(0,u.Z)({props:e,name:"MuiDialogTitle"}),{className:s,id:l}=n,k=(0,o.Z)(n,f),p=n,v=(e=>{const{classes:t}=e;return(0,i.Z)({root:["root"]},h.a,t)})(p),{titleId:Z=l}=a.useContext(d.Z);return(0,m.jsx)(M,(0,r.Z)({component:"h2",className:(0,c.Z)(v.root,s),ownerState:p,ref:t,variant:"h6",id:Z},k))}))},13141:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(97573),o=n(72791),a=n(52007),c=n.n(a),i=["variant","color","size"],s=function(e){var t=e.color;return o.createElement(o.Fragment,null,o.createElement("path",{d:"M16 2H8C5.24 2 3 4.24 3 7v10c0 2.76 2.24 5 5 5h8c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5ZM8.86 18.63c-.19.19-.44.29-.7.29a.99.99 0 0 1-.71-.29 1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.09-.09.2-.16.32-.21.25-.1.52-.1.77 0 .06.02.12.05.17.09.06.03.11.08.15.12.19.19.3.45.3.71a1 1 0 0 1-.3.71Zm-1.71-4.71c0-.13.03-.26.08-.38A.998.998 0 0 1 8.54 13c.06.02.12.05.17.09.06.03.11.08.15.12.09.1.17.2.22.33.05.12.07.25.07.38a.99.99 0 0 1-1.38.92 1 1 0 0 1-.62-.92Zm5.71 4.71c-.09.09-.2.16-.32.21a.984.984 0 0 1-1.09-.21 1 1 0 0 1-.3-.71c0-.07.01-.13.02-.2l.06-.18.09-.18c.04-.05.08-.1.13-.15a1.017 1.017 0 0 1 1.41 0c.19.19.29.45.29.71 0 .27-.1.52-.29.71Zm0-4a.99.99 0 0 1-.71.29c-.26 0-.51-.1-.7-.29a1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.37-.37 1.04-.37 1.41 0 .09.1.17.2.22.33.05.12.07.25.07.38 0 .27-.1.52-.29.71ZM9 10.46c-1.03 0-1.88-.84-1.88-1.88v-1c0-1.03.84-1.88 1.88-1.88h6c1.03 0 1.88.84 1.88 1.88v1c0 1.03-.84 1.88-1.88 1.88H9Zm7.86 8.17a.99.99 0 0 1-1.09.21.988.988 0 0 1-.32-.21.99.99 0 0 1-.29-.71c0-.26.1-.52.29-.71.27-.28.72-.36 1.09-.21.12.05.23.12.32.21.19.19.29.45.29.71 0 .27-.1.52-.29.71Zm.22-4.33a.99.99 0 0 1-.93.62c-.26 0-.51-.1-.7-.29a1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.37-.37 1.04-.37 1.41 0 .19.19.3.45.3.71 0 .13-.03.26-.08.38Z",fill:t}))},l=function(e){var t=e.color;return o.createElement(o.Fragment,null,o.createElement("path",{d:"M3 12.97V15c0 5 2 7 7 7h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M16.5 7.578v1c0 .82-.67 1.5-1.5 1.5H9c-.82 0-1.5-.67-1.5-1.5v-1c0-.82.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M8.136 14h.012M11.995 14h.012M15.855 14h.011M8.136 17.5h.012M11.995 17.5h.012M15.855 17.5h.011",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},u=function(e){var t=e.color;return o.createElement(o.Fragment,null,o.createElement("path",{opacity:".4",d:"M8 22h8c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H8C5.24 2 3 4.24 3 7v10c0 2.76 2.24 5 5 5Z",fill:t}),o.createElement("path",{d:"M15.001 5.71h-6c-1.03 0-1.88.84-1.88 1.88v1c0 1.03.84 1.88 1.88 1.88h6c1.03 0 1.88-.84 1.88-1.88v-1c0-1.04-.84-1.88-1.88-1.88ZM8.158 14.919c-.14 0-.27-.03-.39-.08a1 1 0 0 1-.62-.92c0-.13.03-.26.08-.38a.998.998 0 0 1 1.31-.54c.06.02.12.05.17.09.06.03.11.08.15.12.09.1.17.2.22.33.05.12.07.25.07.38a.99.99 0 0 1-.99 1ZM12.148 14.921c-.26 0-.51-.1-.7-.29a1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.37-.37 1.04-.37 1.41 0 .09.1.17.2.22.33.05.12.07.25.07.38a.99.99 0 0 1-1 1ZM16.148 14.921c-.26 0-.51-.1-.7-.29a1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.37-.37 1.04-.37 1.41 0 .19.19.3.45.3.71 0 .13-.03.26-.08.38s-.12.23-.22.33a.99.99 0 0 1-.71.29ZM8.158 18.92a.99.99 0 0 1-.71-.29 1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.09-.09.2-.16.32-.21.25-.1.52-.1.77 0 .06.02.12.05.17.09.06.03.11.08.15.12.19.19.3.45.3.71a1 1 0 0 1-.3.71c-.19.19-.44.29-.7.29ZM12.148 18.92c-.26 0-.51-.1-.7-.29a1 1 0 0 1-.3-.71c0-.07.01-.13.02-.2l.06-.18.09-.18c.04-.05.08-.1.13-.15a1.017 1.017 0 0 1 1.41 0c.19.19.29.45.29.71 0 .27-.1.52-.29.71-.09.09-.2.16-.32.21-.12.05-.25.08-.39.08ZM16.15 18.92c-.13 0-.26-.03-.38-.08a.988.988 0 0 1-.32-.21.99.99 0 0 1-.29-.71c0-.26.1-.52.29-.71.27-.28.72-.36 1.09-.21.12.05.23.12.32.21.19.19.29.45.29.71a.99.99 0 0 1-1 1Z",fill:t}))},h=function(e){var t=e.color;return o.createElement(o.Fragment,null,o.createElement("path",{d:"M10 22h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9v6c0 5 2 7 7 7Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M16.5 7.58v1c0 .82-.67 1.5-1.5 1.5H9c-.82 0-1.5-.67-1.5-1.5v-1c0-.82.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M8.136 14h.012M11.995 14h.012M15.854 14h.012M8.136 17.5h.012M11.995 17.5h.012M15.854 17.5h.012",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},d=function(e){var t=e.color;return o.createElement(o.Fragment,null,o.createElement("path",{d:"M14 22.75h-4c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h4c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-4-20C5.39 2.75 3.75 4.39 3.75 9v6c0 4.61 1.64 6.25 6.25 6.25h4c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25h-4Z",fill:t}),o.createElement("path",{d:"M15 10.828H9c-1.24 0-2.25-1.01-2.25-2.25v-1c0-1.24 1.01-2.25 2.25-2.25h6c1.24 0 2.25 1.01 2.25 2.25v1c0 1.24-1.01 2.25-2.25 2.25Zm-6-4c-.41 0-.75.34-.75.75v1c0 .41.34.75.75.75h6c.41 0 .75-.34.75-.75v-1c0-.41-.34-.75-.75-.75H9ZM8.15 14.919c-.13 0-.26-.03-.38-.08a.988.988 0 0 1-.32-.21.99.99 0 0 1-.29-.71.986.986 0 0 1 .29-.71c.04-.04.09-.09.15-.12.05-.04.11-.07.17-.09a.998.998 0 0 1 1.31.54c.05.12.08.25.08.38a1 1 0 0 1-.3.71.99.99 0 0 1-.71.29ZM12.16 14.922a.99.99 0 0 1-1-1 .986.986 0 0 1 .29-.71c.04-.04.09-.09.15-.12.05-.04.11-.07.17-.09a.972.972 0 0 1 .77 0c.12.05.23.12.32.21.09.1.17.2.22.33.05.12.08.25.08.38a1 1 0 0 1-.3.71c-.19.19-.44.29-.7.29ZM16.15 14.921c-.13 0-.26-.03-.38-.08a.988.988 0 0 1-.54-.54.986.986 0 0 1-.07-.38.986.986 0 0 1 .29-.71c.37-.37 1.04-.37 1.41 0 .19.19.3.45.3.71a1 1 0 0 1-.3.71c-.18.18-.43.29-.71.29ZM8.158 18.919a.99.99 0 0 1-.71-.29 1 1 0 0 1-.3-.71 1.017 1.017 0 0 1 .45-.83c.05-.04.11-.07.17-.09.06-.03.13-.05.19-.06.33-.06.67.04.9.27.05.05.09.1.13.15l.09.18.06.18c.01.07.02.13.02.2a1 1 0 0 1-.3.71c-.19.19-.44.29-.7.29ZM12.158 18.919a.99.99 0 0 1-.71-.29 1 1 0 0 1-.3-.71c0-.26.11-.52.3-.71.23-.23.58-.33.9-.27.06.01.13.03.19.06.06.02.12.05.17.09.05.03.1.08.15.12.19.19.29.45.29.71a.99.99 0 0 1-.99 1ZM16.15 18.92a.99.99 0 0 1-.99-1c0-.26.1-.52.29-.71.09-.09.2-.16.32-.21.37-.15.82-.07 1.09.21.19.19.29.45.29.71 0 .27-.1.52-.29.71-.09.09-.2.16-.32.21-.12.05-.25.08-.39.08Z",fill:t}))},m=function(e){var t=e.color;return o.createElement(o.Fragment,null,o.createElement("path",{d:"M10 22h4c5 0 7-2 7-7V9c0-5-2-7-7-7h-4C5 2 3 4 3 9v6c0 5 2 7 7 7Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{opacity:".4",d:"M16.5 7.578v1c0 .82-.67 1.5-1.5 1.5H9c-.82 0-1.5-.67-1.5-1.5v-1c0-.82.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{opacity:".4",d:"M8.136 14h.012M11.995 14h.012M15.855 14h.011M8.136 17.5h.012M11.995 17.5h.012M15.855 17.5h.011",stroke:t,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}))},f=(0,o.forwardRef)((function(e,t){var n=e.variant,a=e.color,c=e.size,f=(0,r._)(e,i);return o.createElement("svg",(0,r.a)({},f,{xmlns:"http://www.w3.org/2000/svg",ref:t,width:c,height:c,viewBox:"0 0 24 24",fill:"none"}),function(e,t){switch(e){case"Bold":return o.createElement(s,{color:t});case"Broken":return o.createElement(l,{color:t});case"Bulk":return o.createElement(u,{color:t});case"Linear":default:return o.createElement(h,{color:t});case"Outline":return o.createElement(d,{color:t});case"TwoTone":return o.createElement(m,{color:t})}}(n,a))}));f.propTypes={variant:c().oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:c().string,size:c().oneOfType([c().string,c().number])},f.defaultProps={variant:"Linear",color:"currentColor",size:"24"},f.displayName="Calculator"},73150:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(97573),o=n(72791),a=n(52007),c=n.n(a),i=["variant","color","size"],s=function(e){var t=e.color;return o.createElement(o.Fragment,null,o.createElement("path",{d:"M7.75 3.5V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.56c.25-.03.48-.06.75-.06h.75ZM15.75 3.56V2c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.5H15c.27 0 .5.03.75.06ZM21.29 14.97a4.491 4.491 0 0 0-5.6.02c-1.04.82-1.69 2.1-1.69 3.51 0 .84.24 1.65.65 2.31.32.52.73.98 1.22 1.33.74.54 1.64.86 2.63.86 1.14 0 2.17-.42 2.96-1.12.35-.29.65-.65.89-1.06a4.49 4.49 0 0 0-1.06-5.85Zm-2.79 5.67c0-1.18-.96-2.14-2.14-2.14 1.18 0 2.14-.96 2.14-2.14 0 1.18.96 2.14 2.14 2.14-1.18 0-2.14.96-2.14 2.14Z",fill:t}),o.createElement("path",{d:"M15.75 3.56V5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.5h-6.5V5c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.56C3.3 3.83 2 5.73 2 8.5V17c0 3 1.5 5 5 5h4.13c.76 0 1.27-.85 1.08-1.59-.14-.54-.21-1.1-.21-1.66 0-2.08.93-4 2.54-5.27A6.706 6.706 0 0 1 18.75 12h.04c.63 0 1.21-.46 1.21-1.09V8.5c0-2.77-1.3-4.67-4.25-4.94ZM9 16.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75Zm3-5H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z",fill:t}))},l=function(e){var t=e.color;return o.createElement(o.Fragment,null,o.createElement("path",{d:"M8 2v3M16 2v3M3 8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5v5.13a5.19 5.19 0 0 0-3.25-1.13c-1.23 0-2.38.43-3.28 1.16a5.188 5.188 0 0 0-1.97 4.09c0 .98.28 1.92.76 2.7.37.61.85 1.14 1.42 1.55H8c-3.5 0-5-2-5-5v-4.43M7 11h6M7 16h2.62",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M23 17.75c0 .98-.28 1.92-.76 2.7-.28.48-.63.9-1.04 1.24-.92.82-2.12 1.31-3.45 1.31-1.15 0-2.21-.37-3.07-1-.57-.41-1.05-.94-1.42-1.55-.48-.78-.76-1.72-.76-2.7 0-1.65.76-3.14 1.97-4.09.9-.73 2.05-1.16 3.28-1.16s2.36.42 3.25 1.13c1.22.96 2 2.45 2 4.12Z",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M17.75 20.25a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1 2.5 2.5Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},u=function(e){var t=e.color;return o.createElement(o.Fragment,null,o.createElement("path",{d:"M7 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM15 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z",fill:t}),o.createElement("path",{opacity:".4",d:"M20 8.5V17c0 3-1.5 5-5 5H7c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z",fill:t}),o.createElement("path",{d:"M13 11.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM10 16.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h3c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 13.63a5.19 5.19 0 0 0-3.25-1.13c-1.23 0-2.38.43-3.28 1.16a5.188 5.188 0 0 0-1.97 4.09c0 .98.28 1.92.76 2.7.37.61.85 1.14 1.42 1.55.86.63 1.92 1 3.07 1 1.33 0 2.53-.49 3.45-1.31.41-.34.76-.76 1.04-1.24.48-.78.76-1.72.76-2.7 0-1.67-.78-3.16-2-4.12Zm-3.25 6.62a2.5 2.5 0 0 0-2.5-2.5 2.5 2.5 0 0 0 2.5-2.5 2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0-2.5 2.5Z",fill:t}))},h=function(e){var t=e.color;return o.createElement(o.Fragment,null,o.createElement("path",{d:"M8 2v3M16 2v3M21 8.5v5.13a5.19 5.19 0 0 0-3.25-1.13c-1.23 0-2.38.43-3.28 1.16a5.188 5.188 0 0 0-1.97 4.09c0 .98.28 1.92.76 2.7.37.61.85 1.14 1.42 1.55H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5ZM7 11h6M7 16h2.62",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M23 17.75c0 .98-.28 1.92-.76 2.7-.28.48-.63.9-1.04 1.24-.92.82-2.12 1.31-3.45 1.31-1.15 0-2.21-.37-3.07-1-.57-.41-1.05-.94-1.42-1.55-.48-.78-.76-1.72-.76-2.7 0-1.65.76-3.14 1.97-4.09.9-.73 2.05-1.16 3.28-1.16s2.36.42 3.25 1.13c1.22.96 2 2.45 2 4.12Z",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M17.75 20.25a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1 2.5 2.5Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},d=function(e){var t=e.color;return o.createElement(o.Fragment,null,o.createElement("path",{d:"M8 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75ZM16 5.75c-.41 0-.75-.34-.75-.75V2c0-.41.34-.75.75-.75s.75.34.75.75v3c0 .41-.34.75-.75.75Z",fill:t}),o.createElement("path",{d:"M14.68 22.75H8c-3.65 0-5.75-2.1-5.75-5.75V8.5c0-3.65 2.1-5.75 5.75-5.75h8c3.65 0 5.75 2.1 5.75 5.75v5.13c0 .29-.17.55-.42.68-.26.12-.57.09-.79-.09-1.58-1.26-4.01-1.26-5.59.03a4.416 4.416 0 0 0-1.69 3.51c0 .82.22 1.62.65 2.31.33.54.74.99 1.22 1.33.26.19.38.53.28.84-.12.3-.4.51-.73.51ZM8 4.25c-2.86 0-4.25 1.39-4.25 4.25V17c0 2.86 1.39 4.25 4.25 4.25h4.89c-.1-.13-.19-.27-.27-.41-.57-.92-.87-1.99-.87-3.09 0-1.85.82-3.55 2.26-4.68 1.71-1.39 4.24-1.69 6.24-.77V8.5c0-2.86-1.39-4.25-4.25-4.25H8Z",fill:t}),o.createElement("path",{d:"M13 11.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h6c.41 0 .75.34.75.75s-.34.75-.75.75ZM9.62 16.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.62a.749.749 0 1 1 0 1.5ZM17.75 23.752a5.988 5.988 0 0 1-5.13-2.91c-.57-.92-.87-1.99-.87-3.09 0-1.85.82-3.55 2.26-4.68 2.08-1.69 5.36-1.7 7.46-.03a5.956 5.956 0 0 1 2.28 4.71c0 1.1-.3 2.17-.87 3.09-.32.55-.73 1.03-1.2 1.42a5.878 5.878 0 0 1-3.93 1.49Zm0-10.5c-1.02 0-2.02.35-2.81.99a4.416 4.416 0 0 0-1.69 3.51c0 .82.22 1.62.65 2.31.33.54.74.99 1.22 1.33.77.56 1.68.86 2.63.86 1.11 0 2.13-.39 2.95-1.12.36-.3.65-.65.89-1.06.43-.7.66-1.5.66-2.32 0-1.39-.62-2.67-1.71-3.53-.8-.64-1.76-.97-2.79-.97Z",fill:t}),o.createElement("path",{d:"M17.75 21c-.41 0-.75-.34-.75-.75 0-.96-.79-1.75-1.75-1.75-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.96 0 1.75-.79 1.75-1.75 0-.41.34-.75.75-.75s.75.34.75.75c0 .96.79 1.75 1.75 1.75.41 0 .75.34.75.75s-.34.75-.75.75c-.96 0-1.75.79-1.75 1.75 0 .41-.34.75-.75.75Zm-.43-3.25c.15.13.3.27.43.43.13-.15.27-.3.43-.43-.15-.13-.3-.27-.43-.43-.13.16-.27.3-.43.43Z",fill:t}))},m=function(e){var t=e.color;return o.createElement(o.Fragment,null,o.createElement("path",{d:"M8 2v3M16 2v3M21 8.5v5.13a5.19 5.19 0 0 0-3.25-1.13c-1.23 0-2.38.43-3.28 1.16a5.188 5.188 0 0 0-1.97 4.09c0 .98.28 1.92.76 2.7.37.61.85 1.14 1.42 1.55H8c-3.5 0-5-2-5-5V8.5c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{opacity:".4",d:"M7 11h6M7 16h2.62",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M23 17.75c0 .98-.28 1.92-.76 2.7-.28.48-.63.9-1.04 1.24-.92.82-2.12 1.31-3.45 1.31-1.15 0-2.21-.37-3.07-1-.57-.41-1.05-.94-1.42-1.55-.48-.78-.76-1.72-.76-2.7 0-1.65.76-3.14 1.97-4.09.9-.73 2.05-1.16 3.28-1.16s2.36.42 3.25 1.13c1.22.96 2 2.45 2 4.12Z",stroke:t,strokeWidth:"1.5",strokeMiterlimit:"10",strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{opacity:".4",d:"M17.75 20.25a2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1 2.5 2.5Z",stroke:t,strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}))},f=(0,o.forwardRef)((function(e,t){var n=e.variant,a=e.color,c=e.size,f=(0,r._)(e,i);return o.createElement("svg",(0,r.a)({},f,{xmlns:"http://www.w3.org/2000/svg",ref:t,width:c,height:c,viewBox:"0 0 24 24",fill:"none"}),function(e,t){switch(e){case"Bold":return o.createElement(s,{color:t});case"Broken":return o.createElement(l,{color:t});case"Bulk":return o.createElement(u,{color:t});case"Linear":default:return o.createElement(h,{color:t});case"Outline":return o.createElement(d,{color:t});case"TwoTone":return o.createElement(m,{color:t})}}(n,a))}));f.propTypes={variant:c().oneOf(["Linear","Bold","Broken","Bulk","Outline","TwoTone"]),color:c().string,size:c().oneOfType([c().string,c().number])},f.defaultProps={variant:"Linear",color:"currentColor",size:"24"},f.displayName="NoteFavorite"},58617:(e,t,n)=>{n.d(t,{GJl:()=>o});var r=n(89983);function o(e){return(0,r.w_)({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 13h6M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"}}]})(e)}}}]);
//# sourceMappingURL=52.64a0b363.chunk.js.map