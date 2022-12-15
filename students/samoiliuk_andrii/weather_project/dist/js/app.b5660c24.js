(function(){"use strict";var e={1950:function(e,t,a){var s=a(9242),i=a(3396),r=a(7139);const o={class:"page__header"},n={class:"page__main"},l={class:"container"},c={class:"row mobile"},d={class:"col-9 col-sm-12 mobile__mainWindow"},p={class:"page__footer"};function _(e,t,a,s,_,u){const m=(0,i.up)("wx-brief-header"),h=(0,i.up)("wx-brief-sidebar"),g=(0,i.up)("wx-brief-main-window"),f=(0,i.up)("wx-brief-footer");return(0,i.wg)(),(0,i.iD)("div",{class:"page",onClick:t[0]||(t[0]=(...e)=>u.closeSidebar&&u.closeSidebar(...e))},[(0,i._)("header",o,[(0,i.Wm)(m)]),(0,i._)("main",n,[(0,i._)("div",l,[(0,i._)("div",c,[(0,i._)("aside",{class:(0,r.C_)("col-3 col-sm-6 col-xs-12 mobile__sidebar "+this.closed)},[(0,i.Wm)(h,{groups:_.groups,isDisabled:_.isDisabled,onAddGroup:u.addGroup,onRemoveGroup:u.removeGroup,onDisplayMetarTaf:u.displayMetarTaf},null,8,["groups","isDisabled","onAddGroup","onRemoveGroup","onDisplayMetarTaf"])],2),(0,i._)("div",d,[(0,i.Wm)(g,{currentDisplay:_.currentDisplay,onDisplaySidebar:u.displaySidebar},null,8,["currentDisplay","onDisplaySidebar"])])])])]),(0,i._)("footer",p,[(0,i.Wm)(f)])])}a(7658),a(541);var u=a.p+"img/logo.b61e415a.svg";const m={class:"container"},h=(0,i._)("div",{class:"row"},[(0,i._)("div",{class:"col-3 col-sm-4 col-xs-12"},[(0,i._)("a",{href:"#",class:"header__link"},[(0,i._)("img",{src:u,alr:"logo",class:"header__image"})])]),(0,i._)("div",{class:"col-9 col-sm-8 hiddenBlock"},[(0,i._)("h1",{class:"header__text"},[(0,i.Uk)(" Weather Briefing "),(0,i._)("span",{class:"header__text_subtext"},"Get latest aviation weather reports and forecasts")])])],-1),g=[h];function f(e,t,a,s,r,o){return(0,i.wg)(),(0,i.iD)("div",m,g)}var w={},y=a(89);const b=(0,y.Z)(w,[["render",f]]);var v=b;const k={class:"mainWindow"},D={class:"mainWindow__header"},x={class:"tabsWrapper"},T={class:"mainWindow__tabs tabs"},C=(0,i._)("span",{class:"hiddenText"},"METAR/TAF",-1),z=(0,i._)("span",{class:"hiddenText"},"METAR/TAF",-1),S={version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 122.88 122.88",style:{"enable-background":"new 0 0 122.88 122.88"},"xml:space":"preserve"},G=(0,i._)("g",null,[(0,i._)("path",{class:"st0",d:"M16.63,105.75c0.01-4.03,2.3-7.97,6.03-12.38L1.09,79.73c-1.36-0.59-1.33-1.42-0.54-2.4l4.57-3.9\n    \t\tc0.83-0.51,1.71-0.73,2.66-0.47l26.62,4.5l22.18-24.02L4.8,18.41c-1.31-0.77-1.42-1.64-0.07-2.65l7.47-5.96l67.5,18.97L99.64,7.45\n    \t\tc6.69-5.79,13.19-8.38,18.18-7.15c2.75,0.68,3.72,1.5,4.57,4.08c1.65,5.06-0.91,11.86-6.96,18.86L94.11,43.18l18.97,67.5\n    \t\tl-5.96,7.47c-1.01,1.34-1.88,1.23-2.65-0.07L69.43,66.31L45.41,88.48l4.5,26.62c0.26,0.94,0.05,1.82-0.47,2.66l-3.9,4.57\n    \t\tc-0.97,0.79-1.81,0.82-2.4-0.54l-13.64-21.57c-4.43,3.74-8.37,6.03-12.42,6.03C16.71,106.24,16.63,106.11,16.63,105.75\n    \t\tL16.63,105.75z"})],-1),N=[G],I={class:"mainWindow__display display"},M={key:0,class:"display__decoded"},W={key:1,class:"display__raw"};function A(e,t,a,s,o,n){const l=(0,i.up)("wx-brief-decoded-display"),c=(0,i.up)("wx-brief-raw-display");return(0,i.wg)(),(0,i.iD)("div",k,[(0,i._)("h2",D," Briefing for airport group: "+(0,r.zw)(a.currentDisplay.name),1),(0,i._)("div",x,[(0,i._)("div",T,[(0,i._)("button",{class:(0,r.C_)(o.tabOne),onClick:t[0]||(t[0]=(...e)=>n.displayDecoded&&n.displayDecoded(...e))},[(0,i.Uk)(" Decoded "),C],2),(0,i._)("button",{class:(0,r.C_)(o.tabTwo),onClick:t[1]||(t[1]=(...e)=>n.displayRaw&&n.displayRaw(...e))},[(0,i.Uk)(" Raw "),z],2)]),(0,i._)("div",{class:"mobileMenuButton",onClick:t[2]||(t[2]=(...e)=>n.displaySidebar&&n.displaySidebar(...e))},[((0,i.wg)(),(0,i.iD)("svg",S,N))])]),(0,i._)("div",I,[o.decoded?((0,i.wg)(),(0,i.iD)("div",M,[(0,i.Wm)(l,{currentDisplay:a.currentDisplay},null,8,["currentDisplay"])])):(0,i.kq)("",!0),o.raw?((0,i.wg)(),(0,i.iD)("div",W,[(0,i.Wm)(c,{currentDisplay:a.currentDisplay},null,8,["currentDisplay"])])):(0,i.kq)("",!0)])])}const O={class:"weatherCard__airport airportName"},P={key:0,class:"airportName__category airportName__category_green"},R={key:1,class:"airportName__category airportName__category_yellow"},B={key:2,class:"airportName__category airportName__category_amber"},U={key:3,class:"airportName__category airportName__category_red"},q={class:"airportName__icao"},K={class:"airportName__name"},j={class:"weatherCard__metar metar"},L={key:0},E={class:"metar__text"},F={class:"metar__raw"},Z={key:1},H={class:"weatherCard__taf taf"},J={key:0},$={class:"taf__text"},V={key:1};function Y(e,t,a,s,o,n){return(0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.currentDisplay.data.data,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.icao,class:"weatherCard"},[(0,i._)("div",O,["VFR"===e.flight_category?((0,i.wg)(),(0,i.iD)("p",P,(0,r.zw)(e.flight_category),1)):(0,i.kq)("",!0),"MVFR"===e.flight_category?((0,i.wg)(),(0,i.iD)("p",R,(0,r.zw)(e.flight_category),1)):(0,i.kq)("",!0),"IFR"===e.flight_category?((0,i.wg)(),(0,i.iD)("p",B,(0,r.zw)(e.flight_category),1)):(0,i.kq)("",!0),"LIFR"===e.flight_category?((0,i.wg)(),(0,i.iD)("p",U,(0,r.zw)(e.flight_category),1)):(0,i.kq)("",!0),(0,i._)("p",q,(0,r.zw)(e.icao),1),(0,i._)("p",K,(0,r.zw)(e.station.name),1)]),(0,i._)("div",j,[e.observed?((0,i.wg)(),(0,i.iD)("div",L,[(0,i._)("p",E,[(0,i._)("span",F," METAR "+(0,r.zw)(e.raw_text),1)])])):((0,i.wg)(),(0,i.iD)("div",Z,"No data"))]),(0,i._)("div",H,[e.forecast.icao?((0,i.wg)(),(0,i.iD)("div",J,[(0,i._)("p",$,(0,r.zw)(e.forecast.raw_text),1)])):((0,i.wg)(),(0,i.iD)("div",V,"No data"))])])))),128)}var X={props:{currentDisplay:Object}};const Q=(0,y.Z)(X,[["render",Y]]);var ee=Q;const te={class:"weatherCard__airport airportName"},ae={key:0,class:"airportName__category airportName__category_green"},se={key:1,class:"airportName__category airportName__category_yellow"},ie={key:2,class:"airportName__category airportName__category_amber"},re={key:3,class:"airportName__category airportName__category_red"},oe={class:"airportName__icao"},ne={class:"airportName__name"},le={class:"weatherCard__metar metar"},ce={key:0},de={class:"metar__header"},pe={class:"metar__header_bold"},_e={class:"metar__text"},ue={class:"metar__wind metar__item"},me={key:0},he={class:"metar__visibility metar__item"},ge={key:0,class:"metar__conditions metar__item"},fe={class:"metar__clouds metar__item"},we={key:0},ye={class:"metar__temperature metar__item"},be={class:"metar__dewpoint metar__item"},ve={class:"metar__pressure metar__item"},ke={key:1},De={class:"weatherCard__taf taf"},xe={key:0},Te={class:"taf__header"},Ce={class:"taf__periods"},ze={class:"tafPeriod__header"},Se={key:0},Ge={key:0,class:"tafPeriod__item"},Ne={key:0},Ie={key:1,class:"tafPeriod__item"},Me={key:2,class:"tafPeriod__item"},We={class:"tafPeriod__list"},Ae={key:0},Oe={key:3,class:"tafPeriod__item"},Pe={class:"tafPeriod__list"},Re={key:1};function Be(e,t,a,s,o,n){return(0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.currentDisplay.data.data,(e=>((0,i.wg)(),(0,i.iD)("div",{key:e.icao,class:"weatherCard"},[(0,i._)("div",te,["VFR"===e.flight_category?((0,i.wg)(),(0,i.iD)("p",ae,(0,r.zw)(e.flight_category),1)):(0,i.kq)("",!0),"MVFR"===e.flight_category?((0,i.wg)(),(0,i.iD)("p",se,(0,r.zw)(e.flight_category),1)):(0,i.kq)("",!0),"IFR"===e.flight_category?((0,i.wg)(),(0,i.iD)("p",ie,(0,r.zw)(e.flight_category),1)):(0,i.kq)("",!0),"LIFR"===e.flight_category?((0,i.wg)(),(0,i.iD)("p",re,(0,r.zw)(e.flight_category),1)):(0,i.kq)("",!0),(0,i._)("p",oe,(0,r.zw)(e.icao),1),(0,i._)("p",ne,(0,r.zw)(e.station.name),1)]),(0,i._)("div",le,[e.observed?((0,i.wg)(),(0,i.iD)("div",ce,[(0,i._)("p",de,[(0,i.Uk)(" Present weather at "),(0,i._)("span",pe,(0,r.zw)(e.observed.slice(-6,-1))+" UTC, "+(0,r.zw)(e.observed.slice(0,10)),1)]),(0,i._)("p",_e,[(0,i._)("span",ue,[(0,i.Uk)(" Wind: "+(0,r.zw)(e.wind.degrees)+" degrees, "+(0,r.zw)(e.wind.speed_kts)+" knots",1),e.wind.gust_kts?((0,i.wg)(),(0,i.iD)("span",me,", gusting "+(0,r.zw)(e.wind.gust_kts)+" knots",1)):(0,i.kq)("",!0)]),(0,i._)("span",he," Visibility: "+(0,r.zw)(e.visibility.meters)+" meters ",1),e.conditions?((0,i.wg)(),(0,i.iD)("span",ge,[(0,i.Uk)(" Conditions: "),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.conditions,(e=>((0,i.wg)(),(0,i.iD)("span",{class:"metar__conditionItem",key:e},(0,r.zw)(e.text)+", ",1)))),128))])):(0,i.kq)("",!0),(0,i._)("span",fe,[(0,i.Uk)(" Clouds: "),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.clouds,(e=>((0,i.wg)(),(0,i.iD)("span",{class:"metar__cloudsItem",key:e},[(0,i.Uk)((0,r.zw)(e.text)+" "+(0,r.zw)(e.feet)+" ",1),e.feet?((0,i.wg)(),(0,i.iD)("span",we,"ft, ")):(0,i.kq)("",!0)])))),128))]),(0,i._)("span",ye," Temperature: "+(0,r.zw)(e.temperature.celsius)+"°C ",1),(0,i._)("span",be," Dew point: "+(0,r.zw)(e.dewpoint.celsius)+"°C ",1),(0,i._)("span",ve," Pressure: "+(0,r.zw)(Math.round(10*e.barometer.kpa))+" hPa ",1)])])):((0,i.wg)(),(0,i.iD)("div",ke,"No data"))]),(0,i._)("div",De,[e.forecast.icao?((0,i.wg)(),(0,i.iD)("div",xe,[(0,i._)("p",Te," Forecast issued at: "+(0,r.zw)(e.forecast.timestamp.issued.slice(-6,-1))+" UTC, "+(0,r.zw)(e.forecast.timestamp.issued.slice(0,10)),1),(0,i._)("div",Ce,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.forecast.forecast,(e=>((0,i.wg)(),(0,i.iD)("ul",{class:"taf__periodsItem tafPeriod",key:e.timestamp.from},[(0,i._)("li",ze,[e.change?((0,i.wg)(),(0,i.iD)("span",Se,(0,r.zw)(e.change.indicator.text),1)):(0,i.kq)("",!0),(0,i.Uk)(" "+(0,r.zw)(e.timestamp.from.slice(-6,-1))+" to "+(0,r.zw)(e.timestamp.to.slice(-6,-1))+" UTC ",1)]),e.wind?((0,i.wg)(),(0,i.iD)("li",Ge,[(0,i.Uk)(" Wind: "+(0,r.zw)(e.wind.degrees)+" degrees, "+(0,r.zw)(e.wind.speed_kts)+" knots",1),e.wind.gust_kts?((0,i.wg)(),(0,i.iD)("span",Ne,", gusting "+(0,r.zw)(e.wind.gust_kts)+" knots;",1)):(0,i.kq)("",!0),(0,i.Uk)("; ")])):(0,i.kq)("",!0),e.visibility?((0,i.wg)(),(0,i.iD)("li",Ie," Visibility: "+(0,r.zw)(e.visibility.meters)+" meters; ",1)):(0,i.kq)("",!0),e.clouds.length>0?((0,i.wg)(),(0,i.iD)("li",Me,[(0,i.Uk)(" Clouds: "),(0,i._)("ul",We,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.clouds,(e=>((0,i.wg)(),(0,i.iD)("li",{class:"tafPeriod__listItem",key:e},[(0,i.Uk)((0,r.zw)(e.text)+" "+(0,r.zw)(e.feet)+" ",1),e.feet?((0,i.wg)(),(0,i.iD)("span",Ae,"ft")):(0,i.kq)("",!0)])))),128))])])):(0,i.kq)("",!0),e.conditions?((0,i.wg)(),(0,i.iD)("li",Oe,[(0,i.Uk)(" Conditions: "),(0,i._)("ul",Pe,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.conditions,(e=>((0,i.wg)(),(0,i.iD)("li",{class:"tafPeriod__listItem",key:e.text},(0,r.zw)(e.text),1)))),128))])])):(0,i.kq)("",!0)])))),128))])])):((0,i.wg)(),(0,i.iD)("div",Re,"No data"))])])))),128)}var Ue={props:{currentDisplay:Object}};const qe=(0,y.Z)(Ue,[["render",Be]]);var Ke=qe,je={emits:["displaySidebar"],components:{WxBriefRawDisplay:ee,WxBriefDecodedDisplay:Ke},props:{currentDisplay:Object},data(){return{decoded:!0,raw:!1,tabOne:"tabs__button tabs__selected",tabTwo:"tabs__button"}},methods:{displayDecoded(){this.decoded=!0,this.raw=!1,this.tabOne="tabs__button tabs__selected",this.tabTwo="tabs__button"},displayRaw(){this.decoded=!1,this.raw=!0,this.tabTwo="tabs__button tabs__selected",this.tabOne="tabs__button"},displaySidebar(){this.$emit("displaySidebar")}}};const Le=(0,y.Z)(je,[["render",A]]);var Ee=Le;const Fe={class:"sidebar"},Ze={class:"sidebar__headerWrapper"},He=(0,i._)("h3",{class:"sidebar__header"},"My Airport Groups",-1);function Je(e,t,a,s,r,o){const n=(0,i.up)("wx-brief-sidebar-create"),l=(0,i.up)("wx-brief-sidebar-display");return(0,i.wg)(),(0,i.iD)("div",Fe,[(0,i._)("div",Ze,[He,(0,i._)("div",{class:"sidebar__close closeButton",onClick:t[0]||(t[0]=(...t)=>e.closeSidebar&&e.closeSidebar(...t))}," X ")]),(0,i.Wm)(n,{class:"sidebar__create",onAddGroup:o.addGroup},null,8,["onAddGroup"]),(0,i.Wm)(l,{class:"sidebar__display",onRemoveGroup:o.removeGroup,onDisplayMetarTaf:o.displayMetarTaf,groups:a.groups,isDisabled:a.isDisabled},null,8,["onRemoveGroup","onDisplayMetarTaf","groups","isDisabled"])])}const $e={class:"create"},Ve=(0,i._)("label",{for:"groupName",class:"create__name"},"Name:",-1),Ye=(0,i._)("label",{for:"airports",class:"create__airports"},"Airports:",-1);function Xe(e,t,a,r,o,n){return(0,i.wg)(),(0,i.iD)("div",$e,[Ve,(0,i.wy)((0,i._)("input",{id:"groupName","onUpdate:modelValue":t[0]||(t[0]=e=>o.name=e),type:"text",class:"create__nameInput",placeholder:"Enter name"},null,512),[[s.nr,o.name]]),Ye,(0,i.wy)((0,i._)("textarea",{id:"airports","onUpdate:modelValue":t[1]||(t[1]=e=>o.airports=e),class:"create__airportsInput",placeholder:"Enter 4 letter ICAO airport codes"},"\n        ",512),[[s.nr,o.airports]]),(0,i._)("button",{class:"create__button",onClick:t[2]||(t[2]=(...e)=>n.addGroup&&n.addGroup(...e))},"Create group")])}var Qe={data(){return{name:"",airports:""}},emits:["addGroup"],methods:{addGroup(){this.name&&this.airports&&this.$emit("addGroup",this.name,this.airports),this.name="",this.airports=""}}};const et=(0,y.Z)(Qe,[["render",Xe]]);var tt=et;const at={class:"displayGroups"},st={class:"group__name"},it={class:"group__text"},rt={class:"group__buttons"},ot=["onClick"],nt=["onClick","disabled"];function lt(e,t,a,s,o,n){return(0,i.wg)(),(0,i.iD)("div",at,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(a.groups,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"displayGroups__item group",key:e.index},[(0,i._)("h3",st,(0,r.zw)(e.name),1),(0,i._)("p",it,(0,r.zw)(e.airports.join(", ")),1),(0,i._)("div",rt,[(0,i._)("button",{class:"group__remove",onClick:t=>n.removeGroup(e.index)}," Delete ",8,ot),(0,i._)("button",{class:"group__display",onClick:t=>n.displayMetarTaf(e.index),disabled:a.isDisabled}," Display ",8,nt)])])))),128))])}var ct={props:{groups:Array,isDisabled:Boolean},emits:["removeGroup","displayMetarTaf"],methods:{removeGroup(e){this.$emit("removeGroup",e)},displayMetarTaf(e){this.$emit("displayMetarTaf",e)}}};const dt=(0,y.Z)(ct,[["render",lt]]);var pt=dt,_t={components:{WxBriefSidebarCreate:tt,WxBriefSidebarDisplay:pt},props:{groups:Array,isDisabled:Boolean},emits:["addGroup","removeGroup","displayMetarTaf"],methods:{addGroup(e,t){this.$emit("addGroup",e,t)},removeGroup(e){this.$emit("removeGroup",e)},displayMetarTaf(e){this.$emit("displayMetarTaf",e)}}};const ut=(0,y.Z)(_t,[["render",Je]]);var mt=ut;const ht={class:"container"},gt=(0,i.uE)('<div class="row footer"><div class="col-3 col-xxs-12 footer__name">Weather Briefing</div><div class="col-9 col-xxs-12 footer__wrapper"><div class="footer__disclaimer"> Disclamer: this is front-end student project, do not use for operations. </div><div class="footer__contacts"><a class="footer__link" href="mailto:andrewsamoiliuk@gmail.com">Contact author</a><a class="footer__link" href="https://www.checkwxapi.com/" target="blanc">Aviation Weather API</a><a class="footer__link" href="https://beetroot.academy/" target="blanc">Beetroot academy</a></div></div></div>',1),ft=[gt];function wt(e,t){return(0,i.wg)(),(0,i.iD)("div",ht,ft)}const yt={},bt=(0,y.Z)(yt,[["render",wt]]);var vt=bt,kt={name:"App",components:{WxBriefSidebar:mt,WxBriefMainWindow:Ee,WxBriefHeader:v,WxBriefFooter:vt},data(){return{groups:[],defaultGroups:[{index:1,name:"Poland",airports:["EPWA","EPKK","EPRZ"]},{index:2,name:"London",airports:["EGKK","EGLL","EGLC","EGSS"]},{index:3,name:"USA",airports:["KJFK","KMIA","KORD"]}],metarTafCache:[],currentDisplay:{index:"",data:"",time:"",name:""},isDisabled:!1,closedStyle:"mobile__sidebar_closed",closed:""}},mounted:function(){JSON.parse(localStorage.getItem("userAirports"))&&this.groups.push(...JSON.parse(localStorage.getItem("userAirports"))),0===this.groups.length&&this.groups.push(...this.defaultGroups),JSON.parse(localStorage.getItem("metarTafCache"))?this.metarTafCache.push(...JSON.parse(localStorage.getItem("metarTafCache"))):this.displayMetarTaf(1),this.metarTafCache[0]&&(this.currentDisplay={name:this.groups[0].name,data:this.metarTafCache[0].data,time:this.metarTafCache[0].time,taf:this.metarTafCache[0].taf}),this.closed=this.closedStyle},methods:{addGroup(e,t){this.groups.unshift({name:e,airports:this.validateAirports(t),index:this.setIndex()}),localStorage.setItem("userAirports",JSON.stringify(this.groups)),this.displayMetarTaf(this.groups[0].index)},validateAirports(e){let t=e.replace(/[^a-zA-Z ]/g,"");t=t.toUpperCase();let a=t.split(" ");return a.filter((e=>4===e.length))},setIndex(){return 0===this.groups.length?1:Math.max(...this.groups.map((function(e){return e.index})))+1},getIndex(e,t){return t.findIndex((function(t){if(t.index===e)return!0}))},removeGroup(e){this.groups.splice(this.getIndex(e,this.groups),1),this.metarTafCache.splice(this.getIndex(e,this.metarTafCache),1),localStorage.setItem("userAirports",JSON.stringify(this.groups)),localStorage.setItem("metarTafCache",JSON.stringify(this.metarTafCache))},getMetar(e){this.isDisabled=!0;const t="435ea74fd7424bf1ac1065acf9",a=`https://api.checkwx.com/metar/${e}/decoded`,s={method:"GET",headers:{"X-API-Key":t}};return fetch(a,s).then((e=>e.json()))},getTaf(e){this.isDisabled=!0;const t="435ea74fd7424bf1ac1065acf9",a=`https://api.checkwx.com/taf/${e}/decoded`,s={method:"GET",headers:{"X-API-Key":t}};return fetch(a,s).then((e=>e.json()))},async displayMetarTaf(e){let t=this.getIndex(e,this.metarTafCache);const a=9e5,s=this.groups[this.getIndex(e,this.groups)].airports.join(",");if(-1===t)this.pushToLocal(await this.getMetar(s),await this.getTaf(s),e),this.isDisabled=!1;else{const i=Date.now();i-this.metarTafCache[t].time>a&&(this.metarTafCache.splice(t,1),this.pushToLocal(await this.getMetar(s),await this.getTaf(s),e),this.isDisabled=!1)}t=this.getIndex(e,this.metarTafCache),this.currentDisplay={index:this.metarTafCache[t].index,data:this.metarTafCache[t].data,time:this.metarTafCache[t].time,name:this.groups[this.getIndex(e,this.groups)].name},this.displaySidebar()},pushToLocal(e,t,a){for(let s=0;s<e.data.length;s++)e.data[s].forecast=t.data.find((function(t){if(t.icao===e.data[s].icao)return!0}));this.metarTafCache.push({index:a,time:Date.now(),data:e}),localStorage.setItem("metarTafCache",JSON.stringify(this.metarTafCache))},displaySidebar(){this.closed===this.closedStyle?this.closed="":""===this.closed&&(this.closed=this.closedStyle)},closeSidebar(e){e.target.closest(".closeButton")?""===this.closed&&(this.closed=this.closedStyle):e.target.closest(".mobileMenuButton")||e.target.closest(".tabs")||e.target.closest(".mobile__sidebar")||""===this.closed&&(this.closed=this.closedStyle)}}};const Dt=(0,y.Z)(kt,[["render",_]]);var xt=Dt;(0,s.ri)(xt).mount("#app"),document.title="Weather Briefing"}},t={};function a(s){var i=t[s];if(void 0!==i)return i.exports;var r=t[s]={exports:{}};return e[s](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,s,i,r){if(!s){var o=1/0;for(d=0;d<e.length;d++){s=e[d][0],i=e[d][1],r=e[d][2];for(var n=!0,l=0;l<s.length;l++)(!1&r||o>=r)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(n=!1,r<o&&(o=r));if(n){e.splice(d--,1);var c=i();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[s,i,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/course-4/students/samoiliuk_andrii/weather_project/dist/"}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,r,o=s[0],n=s[1],l=s[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(i in n)a.o(n,i)&&(a.m[i]=n[i]);if(l)var d=l(a)}for(t&&t(s);c<o.length;c++)r=o[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},s=self["webpackChunkweather_project"]=self["webpackChunkweather_project"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(1950)}));s=a.O(s)})();
//# sourceMappingURL=app.b5660c24.js.map