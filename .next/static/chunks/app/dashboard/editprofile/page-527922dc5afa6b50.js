(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[771],{3983:(e,t,a)=>{Promise.resolve().then(a.bind(a,1279))},1279:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(3528),l=a(7369),r=a(3275),o=a(5316);let c=function(){let[e,t]=(0,o.useState)(""),[a,c]=(0,o.useState)(""),[n,i]=(0,o.useState)(""),[d,m]=(0,o.useState)(""),[g,u]=(0,o.useState)(""),[x,b]=(0,o.useState)(""),p=(0,r.useRouter)();(0,o.useEffect)(()=>{try{if(!localStorage.getItem("authToken")){p.replace("/");return}m(localStorage.getItem("authToken")||""),i(localStorage.getItem("contact_number")||""),u(localStorage.getItem("user_id")||"")}catch(e){console.error("Error accessing localStorage:",e)}},[]),(0,o.useEffect)(()=>{let e=async()=>{try{let e=await fetch("https://test.backend.urbanoinfotech.com/api/v1/pandit/".concat(g),{headers:{accept:"application/json",Authorization:d}}),a=await e.json();e.ok?(t(a.results.first_name),c(a.results.last_name)):console.error("Failed to fetch user details:",a.message)}catch(e){console.error("Error fetching user details:",e)}};d&&g&&e()},[d,g]);let h=async()=>{try{let t=await fetch("https://test.backend.urbanoinfotech.com/api/v1/pandit/".concat(g),{method:"PATCH",headers:{accept:"application/json",Authorization:d,"Content-Type":"application/json"},body:JSON.stringify({first_name:e,last_name:a,contact_number:n,profile_image:"https://picsum.photos/200/300"})}),s=await t.json();t.ok?b(s.message):b("Error: ".concat(s.message))}catch(e){b("An error occurred while updating the profile."),console.error(e)}};return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:"main",children:[(0,s.jsx)("div",{onClick:()=>{p.back()},className:"lg:hidden top-5 left-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,s.jsx)("img",{src:"/back-arrow.png",className:"w-10",alt:"back"})}),(0,s.jsxs)("div",{className:"flex lg:flex-row flex-col",children:[(0,s.jsx)("div",{className:"navbar lg:block hidden",children:(0,s.jsx)("nav",{style:{backgroundColor:"#DB2C1D",borderRadius:"20px"},className:"lg:absolute block w-[90%] bg-opacity-90 top-3 right-[5%] left-[5%] shadow backdrop-blur-lg backdrop-saturate-150 z-[9999]",children:(0,s.jsxs)("div",{className:"container flex flex-wrap items-center justify-between mx-auto text-slate-800",children:[(0,s.jsx)(l.default,{href:"/",className:"mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,s.jsx)("img",{src:"/logo.png",className:"w-14",alt:"Logo"})}),(0,s.jsx)("div",{className:"hidden lg:block",children:(0,s.jsx)("ul",{className:"flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",children:(0,s.jsx)("li",{className:"flex items-center p-1 text-sm gap-x-2 text-slate-600",children:(0,s.jsx)("img",{src:"/logout.png",className:"w-10 cursor-pointer",onClick:()=>{localStorage.clear(),p.replace("/")}})})})}),(0,s.jsx)("div",{onClick:()=>{p.back()},className:" mt-40 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,s.jsx)("img",{src:"/back-arrow.png",className:"w-14",alt:"back"})})]})})}),(0,s.jsxs)("div",{className:"left-panel flex w-full items-center",children:[(0,s.jsx)("div",{onClick:()=>{localStorage.clear(),p.replace("/")},className:"lg:hidden top-5 right-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold",children:(0,s.jsx)("img",{src:"/logout.png",className:"w-10 invert h-8",alt:"back"})}),(0,s.jsx)("div",{className:"lg:-z-10 lg:block hidden",children:(0,s.jsx)("img",{className:"lg:absolute relative w-fit -bottom-[4vh]",src:"/edit-profile-bg.png",alt:"Background"})}),(0,s.jsxs)("div",{className:"-z-20 block lg:hidden ",children:[(0,s.jsx)("img",{className:"absolute w-fit bottom-0 ",src:"/edit-profile-bg.png",alt:"Background"}),(0,s.jsx)("div",{style:{color:"black"},className:"lg:-z-10 lg:hidden absolute -left-56 top-48 rotate-90 opacity-60",children:(0,s.jsx)("img",{className:"lg:absolute relative w-1/2 bottom-0",src:"/pandit-back.png",alt:"Background"})})]}),(0,s.jsxs)("div",{className:"login z-0 flex items-center mx-auto flex-col h-screen justify-center",children:[(0,s.jsx)("div",{className:"heading w-[40vw] mb-5",children:(0,s.jsx)("p",{className:"font-bold text-4xl font-serif text-gray-800 text-center",children:"Profile Details"})}),(0,s.jsx)("div",{className:"browseProfileImg",children:(0,s.jsx)("img",{src:"/pandit-browse.png",className:" h-[15vh]",alt:""})}),(0,s.jsxs)("div",{className:"form flex w-[25vw] flex-col",children:[(0,s.jsx)("p",{className:"text-gray-700",children:"First Name"}),(0,s.jsx)("input",{type:"text",className:"border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-red-500",value:e,onChange:e=>t(e.target.value)}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{className:"text-gray-700",children:"Last Name"}),(0,s.jsx)("input",{type:"text",className:"border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-red-500",value:a,onChange:e=>c(e.target.value)}),(0,s.jsx)("br",{}),(0,s.jsx)("p",{className:"text-gray-700",children:"Phone Number"}),(0,s.jsx)("input",{type:"text",className:"border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-red-500",value:n,disabled:!0}),(0,s.jsx)("br",{}),(0,s.jsx)("button",{onClick:h,className:"bg-red-500 w-[100%] text-white py-2 rounded-lg mt-8 hover:bg-red-600 transition duration-300",children:"Save"}),x&&(0,s.jsx)("p",{className:"mt-4 text-center text-gray-700",children:x})]})]})]})]})]})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[635,465,743,358],()=>t(3983)),_N_E=e.O()}]);