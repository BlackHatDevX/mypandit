(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[892],{4194:(e,t,s)=>{Promise.resolve().then(s.bind(s,6796))},6796:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>c});var a=s(3528),l=s(3275),r=s(5316);let c=function(){var e;let[t,s]=(0,r.useState)(""),[c,o]=(0,r.useState)(""),[n,i]=(0,r.useState)(""),[d,u]=(0,r.useState)(""),[m,g]=(0,r.useState)(null),[x,h]=(0,r.useState)(null),[p,b]=(0,r.useState)(null),f=(0,l.useRouter)();(0,r.useEffect)(()=>{try{let e=localStorage.getItem("authToken");if(!e){f.replace("/");return}i(e),h(localStorage.getItem("service_img")),b(localStorage.getItem("category_id"))}catch(e){console.log("Error accessing localStorage:",e)}},[]),(0,r.useEffect)(()=>{let e=async()=>{let e=localStorage.getItem("service_id");if(e)try{let t=await fetch("https://test.backend.urbanoinfotech.com/api/v1/service/".concat(e),{headers:{accept:"application/json",Authorization:n}}),s=await t.json();200===s.statusCode?g(s.results):console.error("Failed to fetch service details:",s.message)}catch(e){console.log("Error fetching service details:",e)}};n&&e()},[n]);let v=async()=>{if(!t||!c||!p){u("Please fill in all fields.");return}try{let e=await fetch("https://test.backend.urbanoinfotech.com/api/v1/pandit/service",{method:"POST",headers:{accept:"application/json",Authorization:n,"Content-Type":"application/json"},body:JSON.stringify({service:m.id,dakshina:t,duration:c.toString(),category:p})}),s=await e.json();201===s.statusCode?(u(s.message),f.push("/dashboard/saveSuccess")):u("Error: ".concat(s.message))}catch(e){u("An error occurred while saving the service."),console.log(e)}};return m?(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"main",children:[(0,a.jsx)("div",{onClick:()=>f.back(),className:"lg:hidden top-5 left-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,a.jsx)("img",{src:"/back-arrow.png",className:"w-10",alt:"back"})}),(0,a.jsxs)("div",{className:"flex lg:flex-row flex-col",children:[(0,a.jsx)("div",{className:"navbar lg:block hidden",children:(0,a.jsx)("nav",{style:{backgroundColor:"#DB2C1D",borderRadius:"20px"},className:"lg:absolute block w-[90%] bg-opacity-90 top-3 right-[5%] left-[5%] shadow backdrop-blur-lg backdrop-saturate-150 z-[9999]",children:(0,a.jsxs)("div",{className:"container flex flex-wrap items-center justify-between mx-auto text-slate-800",children:[(0,a.jsx)("div",{href:"/",className:"mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,a.jsx)("img",{src:"/logo.png",className:"w-14",alt:"Logo"})}),(0,a.jsx)("div",{className:"hidden lg:block",children:(0,a.jsx)("ul",{className:"flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",children:(0,a.jsx)("li",{className:"flex items-center p-1 text-sm gap-x-2 text-slate-600",children:(0,a.jsx)("img",{src:"/logout.png",className:"w-10",onClick:()=>{localStorage.clear(),f.replace("/")}})})})}),(0,a.jsx)("div",{onClick:()=>f.back(),className:" mt-40 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,a.jsx)("img",{src:"/back-arrow.png",className:"w-14",alt:"back"})})]})})}),(0,a.jsxs)("div",{className:"left-panel flex w-full items-center",children:[(0,a.jsx)("div",{onClick:()=>{localStorage.clear(),f.replace("/")},className:"lg:hidden top-5 right-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,a.jsx)("img",{src:"/logout.png",className:"w-10 invert h-8",alt:"logout"})}),(0,a.jsxs)("div",{className:"login z-0 flex items-center mx-auto flex-col h-screen justify-center",children:[(0,a.jsxs)("div",{className:"heading w-[40vw] mb-5",children:[(0,a.jsx)("p",{className:"font-bold lg:text-4xl text-2xl font-serif text-gray-800 text-center",children:"Fill Service Details"}),(0,a.jsx)("div",{className:"service_image",children:x&&(0,a.jsx)("img",{src:x,className:"h-[15vh] rounded-md mx-auto mt-4 mb-2",alt:m.name})}),(0,a.jsx)("p",{className:" text-center lg:text-2xl",children:m.name}),(0,a.jsx)("p",{className:" text-center lg:text-xl text-xs font-mono ",children:null===(e=m.category)||void 0===e?void 0:e.map(e=>e.name).join(", ")})]}),(0,a.jsxs)("div",{className:"form flex flex-col",children:[(0,a.jsx)("br",{}),(0,a.jsx)("p",{className:"text-gray-700",children:"Dakshina"}),(0,a.jsx)("input",{type:"number",placeholder:"Enter amount in ₹",className:"border border-gray-300 rounded-lg p-2 w-full sm:w-3/4 lg:w-[25vw] focus:outline-none focus:border-red-500",value:t,onChange:e=>s(e.target.value)}),(0,a.jsx)("p",{className:"text-gray-700",children:"Duration"}),(0,a.jsx)("input",{type:"number",placeholder:"Enter duration in Hours",className:"border border-gray-300 rounded-lg p-2 w-full sm:w-3/4 lg:w-[25vw] focus:outline-none focus:border-red-500",value:c,onChange:e=>o(e.target.value)}),(0,a.jsx)("br",{}),(0,a.jsx)("button",{onClick:v,className:"bg-red-500 w-[100%] text-white py-2 rounded-lg mt-8 hover:bg-red-600 transition duration-300",children:"Save"}),d&&(0,a.jsx)("p",{className:"mt-4 text-center text-gray-700",children:d})]})]})]})]})]})}):(0,a.jsx)("p",{children:"Loading service details..."})}},3275:(e,t,s)=>{"use strict";var a=s(6067);s.o(a,"useRouter")&&s.d(t,{useRouter:function(){return a.useRouter}})}},e=>{var t=t=>e(e.s=t);e.O(0,[465,743,358],()=>t(4194)),_N_E=e.O()}]);