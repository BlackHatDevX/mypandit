(()=>{var e={};e.id=771,e.ids=[771],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},3873:e=>{"use strict";e.exports=require("path")},9551:e=>{"use strict";e.exports=require("url")},655:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>l.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>m,tree:()=>d});var s=r(5735),a=r(2712),o=r(1402),l=r.n(o),n=r(9005),i={};for(let e in n)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(i[e]=()=>n[e]);r.d(t,i);let d=["",{children:["dashboard",{children:["editprofile",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1339)),"/Users/jashan/Desktop/projectForIntern/mypandit/app/dashboard/editprofile/page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7188))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,8129)),"/Users/jashan/Desktop/projectForIntern/mypandit/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,2630,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,7188))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/jashan/Desktop/projectForIntern/mypandit/app/dashboard/editprofile/page.tsx"],p={require:r,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:a.RouteKind.APP_PAGE,page:"/dashboard/editprofile/page",pathname:"/dashboard/editprofile",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},7665:(e,t,r)=>{Promise.resolve().then(r.bind(r,1339))},7937:(e,t,r)=>{Promise.resolve().then(r.bind(r,4571))},1610:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,9468,23)),Promise.resolve().then(r.t.bind(r,2378,23)),Promise.resolve().then(r.t.bind(r,1402,23)),Promise.resolve().then(r.t.bind(r,4689,23)),Promise.resolve().then(r.t.bind(r,412,23)),Promise.resolve().then(r.t.bind(r,6523,23)),Promise.resolve().then(r.t.bind(r,304,23))},4658:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,2852,23)),Promise.resolve().then(r.t.bind(r,1034,23)),Promise.resolve().then(r.t.bind(r,1306,23)),Promise.resolve().then(r.t.bind(r,8505,23)),Promise.resolve().then(r.t.bind(r,6052,23)),Promise.resolve().then(r.t.bind(r,6923,23)),Promise.resolve().then(r.t.bind(r,4728,23))},4472:()=>{},9320:()=>{},4571:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>n});var s=r(3021),a=r(8689),o=r(4503),l=r(3256);let n=function(){let[e,t]=(0,l.useState)(""),[r,n]=(0,l.useState)(""),[i,d]=(0,l.useState)(""),[c,p]=(0,l.useState)(""),[m,u]=(0,l.useState)(""),[x,b]=(0,l.useState)(""),h=(0,o.useRouter)(),g=async()=>{try{let t=await fetch(`https://test.backend.urbanoinfotech.com/api/v1/pandit/${m}`,{method:"PATCH",headers:{accept:"application/json",Authorization:c,"Content-Type":"application/json"},body:JSON.stringify({first_name:e,last_name:r,contact_number:i,profile_image:"https://picsum.photos/200/300"})}),s=await t.json();t.ok?b(s.message):b(`Error: ${s.message}`)}catch(e){b("An error occurred while updating the profile."),console.error(e)}};return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"main",children:[(0,s.jsx)("div",{onClick:()=>{h.back()},className:"lg:hidden top-5 left-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,s.jsx)("img",{src:"/back-arrow.png",className:"w-10",alt:"back"})}),(0,s.jsxs)("div",{className:"flex lg:flex-row flex-col",children:[(0,s.jsx)("div",{className:"navbar lg:block hidden",children:(0,s.jsx)("nav",{style:{backgroundColor:"#DB2C1D",borderRadius:"20px"},className:"lg:absolute block w-[90%] bg-opacity-90 top-3 right-[5%] left-[5%] shadow backdrop-blur-lg backdrop-saturate-150 z-[9999]",children:(0,s.jsxs)("div",{className:"container flex flex-wrap items-center justify-between mx-auto text-slate-800",children:[(0,s.jsx)(a.default,{href:"/",className:"mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,s.jsx)("img",{src:"/logo.png",className:"w-14",alt:"Logo"})}),(0,s.jsx)("div",{className:"hidden lg:block",children:(0,s.jsx)("ul",{className:"flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",children:(0,s.jsx)("li",{className:"flex items-center p-1 text-sm gap-x-2 text-slate-600",children:(0,s.jsx)("img",{src:"/logout.png",className:"w-10 cursor-pointer",onClick:()=>{localStorage.clear(),h.replace("/")}})})})}),(0,s.jsx)("div",{onClick:()=>{h.back()},className:" mt-40 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,s.jsx)("img",{src:"/back-arrow.png",className:"w-14",alt:"back"})})]})})}),(0,s.jsxs)("div",{className:"left-panel flex w-full items-center",children:[(0,s.jsx)("div",{onClick:()=>{localStorage.clear(),h.replace("/")},className:"lg:hidden top-5 right-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,s.jsx)("img",{src:"/logout.png",className:"w-10 invert h-8",alt:"back"})}),(0,s.jsx)("div",{className:"lg:-z-10 lg:block hidden",children:(0,s.jsx)("img",{className:"lg:absolute relative w-fit -bottom-[4vh]",src:"/edit-profile-bg.png",alt:"Background"})}),(0,s.jsxs)("div",{className:"-z-20 block lg:hidden ",children:[(0,s.jsx)("img",{className:"absolute w-fit bottom-0 ",src:"/edit-profile-bg.png",alt:"Background"}),(0,s.jsx)("div",{style:{color:"black"},className:"lg:-z-10 lg:hidden absolute -left-56 top-48 rotate-90 opacity-60",children:(0,s.jsx)("img",{className:"lg:absolute relative w-1/2 bottom-0",src:"/pandit-back.png",alt:"Background"})})]}),(0,s.jsxs)("div",{className:"login z-0 flex items-center mx-auto flex-col h-screen justify-center",children:[(0,s.jsx)("div",{className:"heading w-[40vw] mb-5",children:(0,s.jsx)("p",{className:"font-bold text-4xl font-serif text-gray-800 text-center",children:"Profile Details"})}),(0,s.jsx)("div",{className:"browseProfileImg",children:(0,s.jsx)("img",{src:"/pandit-browse.png",className:" h-[15vh]",alt:""})}),(0,s.jsxs)("div",{className:"form flex w-[25vw] flex-col",children:[(0,s.jsx)("p",{className:"text-gray-700",children:"First Name"}),(0,s.jsx)("input",{type:"text",className:"border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-red-500",value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{className:"text-gray-700",children:"Last Name"}),(0,s.jsx)("input",{type:"text",className:"border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-red-500",value:r,onChange:e=>n(e.target.value)}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{className:"text-gray-700",children:"Phone Number"}),(0,s.jsx)("input",{type:"text",className:"border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-red-500",value:i,disabled:!0}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{onClick:g,className:"bg-red-500 w-[100%] text-white py-2 rounded-lg mt-8 hover:bg-red-600 transition duration-300",children:"Save"}),x&&(0,s.jsx)("p",{className:"mt-4 text-center text-gray-700",children:x})]})]})]})]})]})})}},1339:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});let s=(0,r(8171).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/Users/jashan/Desktop/projectForIntern/mypandit/app/dashboard/editprofile/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/Users/jashan/Desktop/projectForIntern/mypandit/app/dashboard/editprofile/page.tsx","default")},8129:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>i});var s=r(6965),a=r(4329),o=r.n(a),l=r(2484),n=r.n(l);r(5779);let i={title:"BookYouPandi - Pandit Panel",description:"Generated by create next app"};function d({children:e}){return(0,s.jsx)("html",{lang:"en",children:(0,s.jsx)("body",{className:`${o().variable} ${n().variable} antialiased`,children:e})})}},7188:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var s=r(3578);let a=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,s.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},5779:()=>{}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[57,166,392,689],()=>r(655));module.exports=s})();