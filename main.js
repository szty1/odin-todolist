(()=>{"use strict";var t={890:(t,e,n)=>{n.d(e,{Z:()=>v});var a=n(81),r=n.n(a),o=n(645),i=n.n(o),s=n(667),l=n.n(s),u=new URL(n(117),n.b),d=new URL(n(563),n.b),c=new URL(n(467),n.b),f=i()(r()),h=l()(u),m=l()(d),g=l()(c);f.push([t.id,'@font-face {\n  font-family: "Nunito";\n  src: url('+h+');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "Nunito";\n  src: url('+m+');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: "Nunito";\n  src: url('+g+');\n  font-weight: 1000;\n  font-style: normal;\n}\n\nbody {\n  min-height: 100vh;\n  margin: 0;\n  padding: 0;\n  font-size: 18px;\n  font-family: "Nunito";\n  font-weight: 600;\n  display: flex;\n}\n\na {\n  text-decoration: none;\n  padding: 5px 10px;\n}\n\na:hover {\n  background-color: #ffffff33;\n  border-radius: 4px;\n}\n\nli {\n  list-style-type: none;\n}\n\n.content {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 300px 1fr;\n  grid-template-rows: 70px 1fr 40px;\n}\n\n.header {\n  grid-column: 1 / 3;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: rgb(0, 48, 104);\n  padding: 0 20px 0 30px;\n}\n\n.header .logo {\n  font-size: 30px;\n  font-weight: 1000;\n  color: #ffffff;\n}\n\n.header ul {\n  display: flex;\n  flex-direction: row;\n  gap: 5px;\n  margin: 0;\n}\n\n.header ul a {\n  color: #ffffff;\n}\n\n.sidebar {\n  display: flex;\n  flex-direction: column;\n  justify-items: left;\n  background-color: #dddddd;\n  padding: 20px;\n}\n\n.sidebar ul {\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  gap: 5px;\n  margin: 0;\n  padding: 0;\n}\n\n.sidebar ul li {\n  display: flex;\n  justify-content: stretch;\n}\n\n.sidebar ul li a {\n  color: rgb(0, 48, 104);\n  width: 100%;\n}\n\n.sidebar ul li a.deleteproject {\n  color: rgb(0, 48, 104);\n  width: 20px;\n}\n\n.projectsheader {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 30px 0 20px 8px;\n}\n\n.projectsheader span {\n  font-size: 20px;\n  font-weight: 1000;\n}\n\n.projectsheader a {\n  color: rgb(0, 48, 104);\n}\n\n.tasks {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n  padding: 20px;\n}\n\n.tasklist {\n  flex: 0 1 800px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.task {\n  width: 100%;\n  display: grid;\n  grid-template-columns: 30px 1fr 60px;\n  flex-direction: column;\n  background-color: #f3f3f3;\n  border-radius: 4px;\n  padding: 20px;\n}\n\n.task p {\n  margin: 0;\n}\n\n.task a {\n  padding: 0 5px;\n}\n\n.task .title {\n  font-size: 18px;\n  font-weight: 600;\n}\n\n.task .description {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.task .duedate {\n  font-size: 14px;\n  font-weight: 400;\n}\n\n.footer {\n  grid-column: 1 / 3;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgb(0, 48, 104);\n}\n\n.footer span {\n  color: #ffffff99;\n}\n\n',""]);const v=f},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",a=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),a&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),a&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,a,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(a)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);a&&i[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,a=0;a<e.length;a++)if(e[a].identifier===t){n=a;break}return n}function a(t,a){for(var o={},i=[],s=0;s<t.length;s++){var l=t[s],u=a.base?l[0]+a.base:l[0],d=o[u]||0,c="".concat(u," ").concat(d);o[u]=d+1;var f=n(c),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var m=r(h,a);a.byIndex=s,e.splice(s,0,{identifier:c,updater:m,references:1})}i.push(c)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var o=a(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=n(o[i]);e[s].references--}for(var l=a(t,r),u=0;u<o.length;u++){var d=n(o[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=l}}},569:t=>{var e={};t.exports=function(t,n){var a=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,r&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},467:(t,e,n)=>{t.exports=n.p+"969e95ce4a719e43f654.ttf"},117:(t,e,n)=>{t.exports=n.p+"99a3b019e7727ac19479.ttf"},563:(t,e,n)=>{t.exports=n.p+"77c1e330694154d3efed.ttf"}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return t[a](o,o.exports,n),o.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var a=e.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{function t(t,e){if(e.length<t)throw new TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e(t)}function a(n){t(1,arguments);var a=Object.prototype.toString.call(n);return n instanceof Date||"object"===e(n)&&"[object Date]"===a?new Date(n.getTime()):"number"==typeof n||"[object Number]"===a?new Date(n):("string"!=typeof n&&"[object String]"!==a||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function r(e){t(1,arguments);var n=a(e);return n.setHours(0,0,0,0),n}function o(t){if(null===t||!0===t||!1===t)return NaN;var e=Number(t);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}var i={};function s(){return i}function l(e,n){var r,i,l,u,d,c,f,h;t(1,arguments);var m=s(),g=o(null!==(r=null!==(i=null!==(l=null!==(u=null==n?void 0:n.weekStartsOn)&&void 0!==u?u:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==l?l:m.weekStartsOn)&&void 0!==i?i:null===(f=m.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==r?r:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=a(e),p=v.getDay(),w=(p<g?7:0)+p-g;return v.setDate(v.getDate()-w),v.setHours(0,0,0,0),v}class u{constructor(){this.tasks=new Map,this.projects=new Map}addProject(t){this.projects.set(t.id,t)}getProject(t){return this.projects.get(t)}deleteProject(t){this.projects.has(t)&&this.projects.delete(t)}getProjectsArray(){return Array.from(this.projects.values())}addTask(t){this.tasks.set(t.id,t)}getTask(t){return this.tasks.get(t)}deleteTask(t){this.tasks.has(t)&&this.tasks.delete(t)}getTasksArray(){return Array.from(this.tasks.values())}getTodayTasksArray(){return Array.from(this.tasks.values()).filter((e=>function(e){return t(1,arguments),function(e,n){t(2,arguments);var a=r(e),o=r(n);return a.getTime()===o.getTime()}(e,Date.now())}(e.getDueDate())))}getWeekTasksArray(){return Array.from(this.tasks.values()).filter((e=>function(e,n){return t(1,arguments),function(e,n,a){t(2,arguments);var r=l(e,a),o=l(n,a);return r.getTime()===o.getTime()}(e,Date.now(),n)}(e.getDueDate())))}getTasksInProjectArray(t){const e=[];return this.tasks.forEach((n=>{n.getProject()===t&&e.push(n)})),e}}var d=n(379),c=n.n(d),f=n(795),h=n.n(f),m=n(569),g=n.n(m),v=n(565),p=n.n(v),w=n(216),y=n.n(w),b=n(589),T=n.n(b),k=n(890),x={};x.styleTagTransform=T(),x.setAttributes=p(),x.insert=g().bind(null,"head"),x.domAPI=h(),x.insertStyleElement=y(),c()(k.Z,x),k.Z&&k.Z.locals&&k.Z.locals;class S{static loadPage(){S.loadPageSkeleton(),S.loadHeader(),S.loadSidebar(),S.loadTasksAll(),S.loadFooter(),S.addListeners()}static loadPageSkeleton(){document.querySelector(".content").innerHTML='\n    <div class="header"></div>\n    <div class="sidebar"></div>\n    <div class="tasks">\n      <div class="tasklist"></div>\n    </div>\n    <div class="footer"></div>\n    '}static loadHeader(){document.querySelector(".header").innerHTML='\n    <span class="logo"><i class="fa-regular fa-calendar-check"></i> TODOLIST</span>\n    <ul>\n      <li><a href="#" class="addtask"><i class="fa-solid fa-plus"></i> Add Task</a></li>\n      <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i> Find Task</a></li>\n    </ul>\n    '}static loadSidebar(){document.querySelector(".sidebar").innerHTML='\n    <ul>\n      <li><a href="#" class="listall"><i class="fa-solid fa-list-check"></i> All Tasks</a></li>\n      <li><a href="#" class="listtoday"><i class="fa-solid fa-calendar-day"></i> Due Today</a></li>\n      <li><a href="#" class="listweek"><i class="fa-solid fa-calendar-week"></i> Due This Week</a></li>\n    </ul>\n    <div class="projectsheader">\n    <span>Projects</span>\n    <a href="#" class="addproject"><i class="fa-solid fa-plus"></i></a>\n    </div>\n    <ul class="projects">\n    </ul>\n    ',S.updateProjects()}static loadTask(t){const e=document.querySelector(".tasklist"),n=t.completed?"fa-circle-check":"fa-circle";e.innerHTML+=`\n    <div class="task">\n      <div class="checkbox">\n        <a href="#" class="completetask" data-id="${t.id}"><i class="fa-regular ${n}"></i></a>\n      </div>\n      <div class="data">\n        <p class="title">${t.title}</p>\n        <p class="description">${t.description}</p>\n        <p class="duedate">${t.getFormattedDate()}</p>\n      </div>\n      <div class="buttons">\n        <a href="#" class="edittaks" data-id="${t.id}"><i class="fa-regular fa-pen-to-square"></i></a>\n        <a href="#" class="deletetask" data-id="${t.id}"><i class="fa-regular fa-trash-can"></i></a>\n      </div>\n    </div>\n  `}static clearTasks(){document.querySelector(".tasklist").innerHTML=""}static loadTasksAll(){S.clearTasks(),gt.todolist.getTasksArray().forEach((t=>{S.loadTask(t)})),S.addTaskListeners()}static loadTasksToday(){S.clearTasks(),gt.todolist.getTodayTasksArray().forEach((t=>{S.loadTask(t)})),S.addTaskListeners()}static loadTasksWeek(){S.clearTasks(),gt.todolist.getWeekTasksArray().forEach((t=>{S.loadTask(t)})),S.addTaskListeners()}static loadTasksProject(t){}static completeTask(t){gt.todolist.getTask(Number(this.dataset.id)).toggleCompleted(),S.loadTasksAll()}static editTask(t){}static deleteTask(t){gt.todolist.deleteTask(Number(this.dataset.id)),S.loadTasksAll()}static loadFooter(){document.querySelector(".footer").innerHTML='\n    <span><i class="fa-regular fa-calendar-check"></i> TODOLIST by szty1 for Odin Project</span>\n    '}static updateProjects(){const t=document.querySelector(".projects");gt.todolist.getProjectsArray().forEach((e=>{"All"!==e.name&&(t.innerHTML+=`<li><a href="#" class="listproject" data-name="${e.name}"><i class="fa-solid fa-folder-open"></i> ${e.name}</a><a href="#" class="deleteproject" data-name="${e.name}"><i class="fa-solid fa-xmark"></i></a></li>`)}))}static addListeners(){const t=document.querySelector(".listall"),e=document.querySelector(".listtoday"),n=document.querySelector(".listweek");document.querySelector(".addproject"),t.addEventListener("click",S.loadTasksAll),e.addEventListener("click",S.loadTasksToday),n.addEventListener("click",S.loadTasksWeek)}static addTaskListeners(){const t=document.querySelectorAll(".completetask"),e=document.querySelectorAll(".edittask"),n=document.querySelectorAll(".deletetask");t.forEach((t=>t.addEventListener("click",S.completeTask))),e.forEach((t=>t.addEventListener("click",S.editTask))),n.forEach((t=>t.addEventListener("click",S.deleteTask)))}}function M(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function C(e,n){return t(2,arguments),function(e,n){t(2,arguments);var r=a(e).getTime(),i=o(n);return new Date(r+i)}(e,-o(n))}function P(e){t(1,arguments);var n=a(e),r=n.getUTCDay(),o=(r<1?7:0)+r-1;return n.setUTCDate(n.getUTCDate()-o),n.setUTCHours(0,0,0,0),n}function j(e){t(1,arguments);var n=a(e),r=n.getUTCFullYear(),o=new Date(0);o.setUTCFullYear(r+1,0,4),o.setUTCHours(0,0,0,0);var i=P(o),s=new Date(0);s.setUTCFullYear(r,0,4),s.setUTCHours(0,0,0,0);var l=P(s);return n.getTime()>=i.getTime()?r+1:n.getTime()>=l.getTime()?r:r-1}function U(e,n){var r,i,l,u,d,c,f,h;t(1,arguments);var m=s(),g=o(null!==(r=null!==(i=null!==(l=null!==(u=null==n?void 0:n.weekStartsOn)&&void 0!==u?u:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.weekStartsOn)&&void 0!==l?l:m.weekStartsOn)&&void 0!==i?i:null===(f=m.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.weekStartsOn)&&void 0!==r?r:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=a(e),p=v.getUTCDay(),w=(p<g?7:0)+p-g;return v.setUTCDate(v.getUTCDate()-w),v.setUTCHours(0,0,0,0),v}function E(e,n){var r,i,l,u,d,c,f,h;t(1,arguments);var m=a(e),g=m.getUTCFullYear(),v=s(),p=o(null!==(r=null!==(i=null!==(l=null!==(u=null==n?void 0:n.firstWeekContainsDate)&&void 0!==u?u:null==n||null===(d=n.locale)||void 0===d||null===(c=d.options)||void 0===c?void 0:c.firstWeekContainsDate)&&void 0!==l?l:v.firstWeekContainsDate)&&void 0!==i?i:null===(f=v.locale)||void 0===f||null===(h=f.options)||void 0===h?void 0:h.firstWeekContainsDate)&&void 0!==r?r:1);if(!(p>=1&&p<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var w=new Date(0);w.setUTCFullYear(g+1,0,p),w.setUTCHours(0,0,0,0);var y=U(w,n),b=new Date(0);b.setUTCFullYear(g,0,p),b.setUTCHours(0,0,0,0);var T=U(b,n);return m.getTime()>=y.getTime()?g+1:m.getTime()>=T.getTime()?g:g-1}function W(t,e){for(var n=t<0?"-":"",a=Math.abs(t).toString();a.length<e;)a="0"+a;return n+a}const O=function(t,e){var n=t.getUTCFullYear(),a=n>0?n:1-n;return W("yy"===e?a%100:a,e.length)},N=function(t,e){var n=t.getUTCMonth();return"M"===e?String(n+1):W(n+1,2)},L=function(t,e){return W(t.getUTCDate(),e.length)},q=function(t,e){return W(t.getUTCHours()%12||12,e.length)},A=function(t,e){return W(t.getUTCHours(),e.length)},Y=function(t,e){return W(t.getUTCMinutes(),e.length)},H=function(t,e){return W(t.getUTCSeconds(),e.length)},F=function(t,e){var n=e.length,a=t.getUTCMilliseconds();return W(Math.floor(a*Math.pow(10,n-3)),e.length)};var z={G:function(t,e,n){var a=t.getUTCFullYear()>0?1:0;switch(e){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});default:return n.era(a,{width:"wide"})}},y:function(t,e,n){if("yo"===e){var a=t.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return O(t,e)},Y:function(t,e,n,a){var r=E(t,a),o=r>0?r:1-r;return"YY"===e?W(o%100,2):"Yo"===e?n.ordinalNumber(o,{unit:"year"}):W(o,e.length)},R:function(t,e){return W(j(t),e.length)},u:function(t,e){return W(t.getUTCFullYear(),e.length)},Q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"Q":return String(a);case"QQ":return W(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(t,e,n){var a=Math.ceil((t.getUTCMonth()+1)/3);switch(e){case"q":return String(a);case"qq":return W(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(t,e,n){var a=t.getUTCMonth();switch(e){case"M":case"MM":return N(t,e);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(t,e,n){var a=t.getUTCMonth();switch(e){case"L":return String(a+1);case"LL":return W(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,n,r,i){var l=function(e,n){t(1,arguments);var r=a(e),i=U(r,n).getTime()-function(e,n){var a,r,i,l,u,d,c,f;t(1,arguments);var h=s(),m=o(null!==(a=null!==(r=null!==(i=null!==(l=null==n?void 0:n.firstWeekContainsDate)&&void 0!==l?l:null==n||null===(u=n.locale)||void 0===u||null===(d=u.options)||void 0===d?void 0:d.firstWeekContainsDate)&&void 0!==i?i:h.firstWeekContainsDate)&&void 0!==r?r:null===(c=h.locale)||void 0===c||null===(f=c.options)||void 0===f?void 0:f.firstWeekContainsDate)&&void 0!==a?a:1),g=E(e,n),v=new Date(0);return v.setUTCFullYear(g,0,m),v.setUTCHours(0,0,0,0),U(v,n)}(r,n).getTime();return Math.round(i/6048e5)+1}(e,i);return"wo"===n?r.ordinalNumber(l,{unit:"week"}):W(l,n.length)},I:function(e,n,r){var o=function(e){t(1,arguments);var n=a(e),r=P(n).getTime()-function(e){t(1,arguments);var n=j(e),a=new Date(0);return a.setUTCFullYear(n,0,4),a.setUTCHours(0,0,0,0),P(a)}(n).getTime();return Math.round(r/6048e5)+1}(e);return"Io"===n?r.ordinalNumber(o,{unit:"week"}):W(o,n.length)},d:function(t,e,n){return"do"===e?n.ordinalNumber(t.getUTCDate(),{unit:"date"}):L(t,e)},D:function(e,n,r){var o=function(e){t(1,arguments);var n=a(e),r=n.getTime();n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0);var o=r-n.getTime();return Math.floor(o/864e5)+1}(e);return"Do"===n?r.ordinalNumber(o,{unit:"dayOfYear"}):W(o,n.length)},E:function(t,e,n){var a=t.getUTCDay();switch(e){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"e":return String(o);case"ee":return W(o,2);case"eo":return n.ordinalNumber(o,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(t,e,n,a){var r=t.getUTCDay(),o=(r-a.weekStartsOn+8)%7||7;switch(e){case"c":return String(o);case"cc":return W(o,e.length);case"co":return n.ordinalNumber(o,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(t,e,n){var a=t.getUTCDay(),r=0===a?7:a;switch(e){case"i":return String(r);case"ii":return W(r,e.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(t,e,n){var a=t.getUTCHours()/12>=1?"pm":"am";switch(e){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(t,e,n){var a,r=t.getUTCHours();switch(a=12===r?"noon":0===r?"midnight":r/12>=1?"pm":"am",e){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(t,e,n){var a,r=t.getUTCHours();switch(a=r>=17?"evening":r>=12?"afternoon":r>=4?"morning":"night",e){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(t,e,n){if("ho"===e){var a=t.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return q(t,e)},H:function(t,e,n){return"Ho"===e?n.ordinalNumber(t.getUTCHours(),{unit:"hour"}):A(t,e)},K:function(t,e,n){var a=t.getUTCHours()%12;return"Ko"===e?n.ordinalNumber(a,{unit:"hour"}):W(a,e.length)},k:function(t,e,n){var a=t.getUTCHours();return 0===a&&(a=24),"ko"===e?n.ordinalNumber(a,{unit:"hour"}):W(a,e.length)},m:function(t,e,n){return"mo"===e?n.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):Y(t,e)},s:function(t,e,n){return"so"===e?n.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):H(t,e)},S:function(t,e){return F(t,e)},X:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();if(0===r)return"Z";switch(e){case"X":return I(r);case"XXXX":case"XX":return Q(r);default:return Q(r,":")}},x:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"x":return I(r);case"xxxx":case"xx":return Q(r);default:return Q(r,":")}},O:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"O":case"OO":case"OOO":return"GMT"+R(r,":");default:return"GMT"+Q(r,":")}},z:function(t,e,n,a){var r=(a._originalDate||t).getTimezoneOffset();switch(e){case"z":case"zz":case"zzz":return"GMT"+R(r,":");default:return"GMT"+Q(r,":")}},t:function(t,e,n,a){var r=a._originalDate||t;return W(Math.floor(r.getTime()/1e3),e.length)},T:function(t,e,n,a){return W((a._originalDate||t).getTime(),e.length)}};function R(t,e){var n=t>0?"-":"+",a=Math.abs(t),r=Math.floor(a/60),o=a%60;if(0===o)return n+String(r);var i=e||"";return n+String(r)+i+W(o,2)}function I(t,e){return t%60==0?(t>0?"-":"+")+W(Math.abs(t)/60,2):Q(t,e)}function Q(t,e){var n=e||"",a=t>0?"-":"+",r=Math.abs(t);return a+W(Math.floor(r/60),2)+n+W(r%60,2)}const G=z;var $=function(t,e){switch(t){case"P":return e.date({width:"short"});case"PP":return e.date({width:"medium"});case"PPP":return e.date({width:"long"});default:return e.date({width:"full"})}},B=function(t,e){switch(t){case"p":return e.time({width:"short"});case"pp":return e.time({width:"medium"});case"ppp":return e.time({width:"long"});default:return e.time({width:"full"})}};const X={p:B,P:function(t,e){var n,a=t.match(/(P+)(p+)?/)||[],r=a[1],o=a[2];if(!o)return $(t,e);switch(r){case"P":n=e.dateTime({width:"short"});break;case"PP":n=e.dateTime({width:"medium"});break;case"PPP":n=e.dateTime({width:"long"});break;default:n=e.dateTime({width:"full"})}return n.replace("{{date}}",$(r,e)).replace("{{time}}",B(o,e))}};var _=["D","DD"],J=["YY","YYYY"];function Z(t,e,n){if("YYYY"===t)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("YY"===t)throw new RangeError("Use `yy` instead of `YY` (in `".concat(e,"`) for formatting years to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("D"===t)throw new RangeError("Use `d` instead of `D` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));if("DD"===t)throw new RangeError("Use `dd` instead of `DD` (in `".concat(e,"`) for formatting days of the month to the input `").concat(n,"`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))}var V={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function K(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const tt={date:K({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:K({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:K({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var et={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function nt(t){return function(e,n){var a;if("formatting"===(null!=n&&n.context?String(n.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,o=null!=n&&n.width?String(n.width):r;a=t.formattingValues[o]||t.formattingValues[r]}else{var i=t.defaultWidth,s=null!=n&&n.width?String(n.width):t.defaultWidth;a=t.values[s]||t.values[i]}return a[t.argumentCallback?t.argumentCallback(e):e]}}const at={ordinalNumber:function(t,e){var n=Number(t),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:nt({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:nt({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:nt({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:nt({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:nt({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function rt(t){return function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,r=a&&t.matchPatterns[a]||t.matchPatterns[t.defaultMatchWidth],o=e.match(r);if(!o)return null;var i,s=o[0],l=a&&t.parsePatterns[a]||t.parsePatterns[t.defaultParseWidth],u=Array.isArray(l)?function(t,e){for(var n=0;n<t.length;n++)if(t[n].test(s))return n}(l):function(t,e){for(var n in t)if(t.hasOwnProperty(n)&&t[n].test(s))return n}(l);return i=t.valueCallback?t.valueCallback(u):u,{value:i=n.valueCallback?n.valueCallback(i):i,rest:e.slice(s.length)}}}var ot,it={ordinalNumber:(ot={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(t){return parseInt(t,10)}},function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(ot.matchPattern);if(!n)return null;var a=n[0],r=t.match(ot.parsePattern);if(!r)return null;var o=ot.valueCallback?ot.valueCallback(r[0]):r[0];return{value:o=e.valueCallback?e.valueCallback(o):o,rest:t.slice(a.length)}}),era:rt({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:rt({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:rt({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:rt({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:rt({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};const st={code:"en-US",formatDistance:function(t,e,n){var a,r=V[t];return a="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",e.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:tt,formatRelative:function(t,e,n,a){return et[t]},localize:at,match:it,options:{weekStartsOn:0,firstWeekContainsDate:1}};var lt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ut=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,dt=/^'([^]*?)'?$/,ct=/''/g,ft=/[a-zA-Z]/;function ht(e,n,r){var i,l,u,d,c,f,h,m,g,v,p,w,y,b,T,k,x,S;t(2,arguments);var P=String(n),j=s(),U=null!==(i=null!==(l=null==r?void 0:r.locale)&&void 0!==l?l:j.locale)&&void 0!==i?i:st,E=o(null!==(u=null!==(d=null!==(c=null!==(f=null==r?void 0:r.firstWeekContainsDate)&&void 0!==f?f:null==r||null===(h=r.locale)||void 0===h||null===(m=h.options)||void 0===m?void 0:m.firstWeekContainsDate)&&void 0!==c?c:j.firstWeekContainsDate)&&void 0!==d?d:null===(g=j.locale)||void 0===g||null===(v=g.options)||void 0===v?void 0:v.firstWeekContainsDate)&&void 0!==u?u:1);if(!(E>=1&&E<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var W=o(null!==(p=null!==(w=null!==(y=null!==(b=null==r?void 0:r.weekStartsOn)&&void 0!==b?b:null==r||null===(T=r.locale)||void 0===T||null===(k=T.options)||void 0===k?void 0:k.weekStartsOn)&&void 0!==y?y:j.weekStartsOn)&&void 0!==w?w:null===(x=j.locale)||void 0===x||null===(S=x.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==p?p:0);if(!(W>=0&&W<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!U.localize)throw new RangeError("locale must contain localize property");if(!U.formatLong)throw new RangeError("locale must contain formatLong property");var O=a(e);if(!function(e){if(t(1,arguments),!function(e){return t(1,arguments),e instanceof Date||"object"===D(e)&&"[object Date]"===Object.prototype.toString.call(e)}(e)&&"number"!=typeof e)return!1;var n=a(e);return!isNaN(Number(n))}(O))throw new RangeError("Invalid time value");var N=C(O,M(O)),L={firstWeekContainsDate:E,weekStartsOn:W,locale:U,_originalDate:O};return P.match(ut).map((function(t){var e=t[0];return"p"===e||"P"===e?(0,X[e])(t,U.formatLong):t})).join("").match(lt).map((function(t){if("''"===t)return"'";var a,o,i=t[0];if("'"===i)return(o=(a=t).match(dt))?o[1].replace(ct,"'"):a;var s,l=G[i];if(l)return null!=r&&r.useAdditionalWeekYearTokens||(s=t,-1===J.indexOf(s))||Z(t,n,String(e)),null!=r&&r.useAdditionalDayOfYearTokens||!function(t){return-1!==_.indexOf(t)}(t)||Z(t,n,String(e)),l(N,t,U.localize,L);if(i.match(ft))throw new RangeError("Format string contains an unescaped latin alphabet character `"+i+"`");return t})).join("")}class mt{static#t=-1;static#e(){return mt.#t++,mt.#t}constructor(t,e,n){this.title=t,this.description=e,this.dueDate=new Date(n),this.id=mt.#e(),this.completed=!1,this.priority=1,this.project=null}getTitle(){return this.title}setTitle(t){this.title=t}getDescription(){return this.description}setDescription(t){this.title=title}getDueDate(){return this.dueDate}setDueDate(t){this.dueDate=a(t)}toggleCompleted(){this.completed=!this.completed}getFormattedDate(){return function(e,n,i){var l,u,d,c,f,h,m,g,v,p;t(2,arguments);var w=a(e),y=a(n),b=s(),T=null!==(l=null!==(u=null==i?void 0:i.locale)&&void 0!==u?u:b.locale)&&void 0!==l?l:st,k=o(null!==(d=null!==(c=null!==(f=null!==(h=null==i?void 0:i.weekStartsOn)&&void 0!==h?h:null==i||null===(m=i.locale)||void 0===m||null===(g=m.options)||void 0===g?void 0:g.weekStartsOn)&&void 0!==f?f:b.weekStartsOn)&&void 0!==c?c:null===(v=b.locale)||void 0===v||null===(p=v.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==d?d:0);if(!T.localize)throw new RangeError("locale must contain localize property");if(!T.formatLong)throw new RangeError("locale must contain formatLong property");if(!T.formatRelative)throw new RangeError("locale must contain formatRelative property");var x,S=function(e,n){t(2,arguments);var a=r(e),o=r(n),i=a.getTime()-M(a),s=o.getTime()-M(o);return Math.round((i-s)/864e5)}(w,y);if(isNaN(S))throw new RangeError("Invalid time value");x=S<-6?"other":S<-1?"lastWeek":S<0?"yesterday":S<1?"today":S<2?"tomorrow":S<7?"nextWeek":"other";var D=C(w,M(w)),P=C(y,M(y));return ht(w,T.formatRelative(x,D,P,{locale:T,weekStartsOn:k}),{locale:T,weekStartsOn:k})}(this.dueDate,new Date)}getCompleted(){return this.completed}getPriority(){return this.priority}setPriority(t){!Number.isInteger(t)||t<0||t>4||(this.priority=t)}setCompleted(t){this.completed=t}getProject(){return this.project}setProject(t){this.project=t}}class gt{static todolist;static init(){gt.todolist=new u,gt.loadTestData(),S.loadPage()}static loadTestData(){gt.todolist.addTask(new mt("Test","Test","2023-04-20T08:00:00")),gt.todolist.addTask(new mt("Test2","test3","2023-04-21T08:00:00")),gt.todolist.addTask(new mt("Test3","test3","2023-04-28T08:00:00"))}}document.addEventListener("DOMContentLoaded",gt.init())})()})();