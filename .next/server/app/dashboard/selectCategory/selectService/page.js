(()=>{var e={};e.id=134,e.ids=[134],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},7983:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>o.a,__next_app__:()=>p,pages:()=>d,routeModule:()=>m,tree:()=>c});var r=s(5735),a=s(2712),l=s(1402),o=s.n(l),i=s(9005),n={};for(let e in i)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(n[e]=()=>i[e]);s.d(t,n);let c=["",{children:["dashboard",{children:["selectCategory",{children:["selectService",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,6026)),"/Users/jashan/Desktop/projectForIntern/mypandit/app/dashboard/selectCategory/selectService/page.js"]}]},{}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7188))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,8129)),"/Users/jashan/Desktop/projectForIntern/mypandit/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,2630,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,7188))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["/Users/jashan/Desktop/projectForIntern/mypandit/app/dashboard/selectCategory/selectService/page.js"],p={require:s,loadChunk:()=>Promise.resolve()},m=new r.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/dashboard/selectCategory/selectService/page",pathname:"/dashboard/selectCategory/selectService",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},9950:(e,t,s)=>{Promise.resolve().then(s.bind(s,6026))},8406:(e,t,s)=>{Promise.resolve().then(s.bind(s,3498))},1610:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,9468,23)),Promise.resolve().then(s.t.bind(s,2378,23)),Promise.resolve().then(s.t.bind(s,1402,23)),Promise.resolve().then(s.t.bind(s,4689,23)),Promise.resolve().then(s.t.bind(s,412,23)),Promise.resolve().then(s.t.bind(s,6523,23)),Promise.resolve().then(s.t.bind(s,304,23))},4658:(e,t,s)=>{Promise.resolve().then(s.t.bind(s,2852,23)),Promise.resolve().then(s.t.bind(s,1034,23)),Promise.resolve().then(s.t.bind(s,1306,23)),Promise.resolve().then(s.t.bind(s,8505,23)),Promise.resolve().then(s.t.bind(s,6052,23)),Promise.resolve().then(s.t.bind(s,6923,23)),Promise.resolve().then(s.t.bind(s,4728,23))},4472:()=>{},9320:()=>{},3498:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>i});var r=s(3021),a=s(8689),l=s(4503),o=s(3256);let i=function(){let[e,t]=(0,o.useState)(""),[s,i]=(0,o.useState)([]),[n,c]=(0,o.useState)([]),[d,p]=(0,o.useState)(),[m,g]=(0,o.useState)(!0),[u,h]=(0,o.useState)(null),[x,b]=(0,o.useState)(""),v=(0,l.useRouter)(),f=(e,t)=>{h(e),b(s[t])};return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"main",children:[(0,r.jsxs)("div",{className:"flex lg:flex-row flex-col",children:[(0,r.jsx)("div",{className:"navbar lg:block hidden",children:(0,r.jsx)("nav",{style:{backgroundColor:"#DB2C1D",borderRadius:"20px"},className:"lg:absolute block w-[90%] bg-opacity-90 top-3 right-[5%] left-[5%] shadow backdrop-blur-lg backdrop-saturate-150 z-[9999]",children:(0,r.jsxs)("div",{className:"container flex flex-wrap items-center justify-between mx-auto text-slate-800",children:[(0,r.jsx)(a.default,{href:"/",className:"mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,r.jsx)("img",{src:"/logo.png",className:"w-14",alt:"Logo"})}),(0,r.jsx)("div",{className:"hidden lg:block",children:(0,r.jsx)("ul",{className:"flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",children:(0,r.jsx)("li",{className:"flex items-center p-1 text-sm gap-x-2 text-slate-600",children:(0,r.jsx)("img",{src:"/logout.png",className:"w-10",onClick:()=>{localStorage.clear(),v.replace("/")},alt:"Logout"})})})}),(0,r.jsx)("div",{onClick:()=>{v.back()},className:" mt-40 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,r.jsx)("img",{src:"/back-arrow.png",className:"w-14",alt:"back"})})]})})}),(0,r.jsxs)("div",{className:"left-panel flex w-full items-center",children:[(0,r.jsx)("a",{onClick:()=>{v.back()},className:"lg:hidden top-5 left-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,r.jsx)("img",{src:"/back-arrow.png",className:"w-10",alt:"back"})}),(0,r.jsx)("a",{onClick:()=>{localStorage.clear(),v.replace("/")},className:"lg:hidden top-5 right-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,r.jsx)("img",{src:"/logout.png",className:"w-10 invert h-8",alt:"back"})}),(0,r.jsx)("div",{className:"lg:-z-10 lg:block hidden",children:(0,r.jsx)("img",{className:"lg:absolute relative w-fit",src:"/cat-page-bg.png",alt:"Background"})}),(0,r.jsxs)("div",{className:"-z-20 block lg:hidden ",children:[(0,r.jsx)("img",{className:"absolute w-fit bottom-0 ",src:"/edit-profile-bg.png",alt:"Background"}),(0,r.jsx)("div",{style:{color:"black"},className:"lg:-z-10 lg:hidden absolute -left-56 top-48 rotate-90 opacity-60",children:(0,r.jsx)("img",{className:"lg:absolute relative w-1/2 bottom-0",src:"/pandit-back.png",alt:"Background"})})]})]})]}),m?(0,r.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,r.jsx)("p",{className:"text-2xl font-semibold",children:"Loading..."})}):(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"heading w-full mb-5 mt-36",children:(0,r.jsx)("p",{className:"font-bold text-4xl font-serif text-gray-800 text-center",children:"Services Of Pooja"})}),(0,r.jsx)("div",{className:"services-container grid grid-cols-1 lg:grid-cols-3 gap-4 p-4",children:n.map((e,t)=>(0,r.jsxs)("div",{onClick:()=>f(e.id,t),className:`service-card flex items-center p-4 border rounded-lg shadow-lg ${u===e.id?"border-red-500":"border-gray-300"}`,style:{backgroundColor:"white",cursor:"pointer"},children:[(0,r.jsx)("img",{src:s[t],alt:e.name,className:"w-20 h-20 rounded-full mr-4"}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"text-lg font-semibold",children:[e.name," (",e.name_local_lang,")"]}),(0,r.jsx)("p",{className:"text-gray-600",children:e.description})]})]},e.id))}),(0,r.jsx)("button",{onClick:()=>{u?(localStorage.setItem("service_id",u),localStorage.setItem("service_img",x),v.push("/dashboard/selectCategory/selectService/filldetails")):alert("Please select a service.")},className:"fixed bg-red-500 w-auto text-white py-2 px-10 rounded-lg mt-8 hover:bg-red-600 transition duration-300 bottom-8 right-1/2 translate-x-1/2 p-3  text-lg font-semibold shadow-lg",children:"Next"})]})]})})}},6026:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>r});let r=(0,s(8171).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jashan/Desktop/projectForIntern/mypandit/app/dashboard/selectCategory/selectService/page.js\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jashan/Desktop/projectForIntern/mypandit/app/dashboard/selectCategory/selectService/page.js","default")},8129:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c,metadata:()=>n});var r=s(6965),a=s(4329),l=s.n(a),o=s(2484),i=s.n(o);s(5779);let n={title:"BookYouPandi - Pandit Panel",description:"Generated by create next app"};function c({children:e}){return(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:`${l().variable} ${i().variable} antialiased`,children:e})})}},7188:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});var r=s(3578);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},5779:()=>{}};var t=require("../../../../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),r=t.X(0,[57,166,392,689],()=>s(7983));module.exports=r})();