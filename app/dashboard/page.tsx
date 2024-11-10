"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function ProfilePage() {
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.replace("/"); // Redirect to home if authToken is missing
      return;
    }
  });
  const router = useRouter();

  return (
    <div>
      <div className="main">
        <div className="flex lg:flex-row flex-col">
          {/* Navbar */}
          <div className="navbar lg:block hidden">
            <nav
              style={{ backgroundColor: "#DB2C1D", borderRadius: "20px" }}
              className="lg:absolute block w-[90%] bg-opacity-90 top-3 right-[5%] left-[5%] shadow backdrop-blur-lg backdrop-saturate-150 z-[9999]"
            >
              <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
                {/* Logo */}
                <a
                  href="/"
                  className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
                >
                  <img src="/logo.png" className="w-14" alt="Logo" />
                </a>

                <div className="hidden lg:block">
                  <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                      <img
                        src="/logout.png"
                        className="w-10"
                        onClick={() => {
                          localStorage.clear();
                          router.replace("/");
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          {/* back button  */}
          <div className="left-panel flex w-full items-center}">
            ,
            <a
              onClick={() => {
                router.back();
              }}
              className="lg:hidden top-5 left-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
            >
              <img src="/back-arrow.png" className="w-10" alt="back" />
            </a>
            <a
              onClick={() => {
                localStorage.clear();
                router.replace("/");
              }}
              className="lg:hidden top-5 right-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
            >
              <img src="/logout.png" className="w-10 invert h-8" alt="back" />
            </a>
            {/* Background Image */}
            <div className="lg:-z-10 lg:block hidden">
              <img
                className="lg:absolute relative w-fit -bottom-[4vh]"
                src="/edit-profile-bg.png"
                alt="Background"
              />
            </div>
            <div className="-z-20 block lg:hidden ">
              <img
                className="absolute w-fit bottom-0 "
                src="/edit-profile-bg.png"
                alt="Background"
              />
              <div
                style={{ color: "black" }}
                className="lg:-z-10 lg:hidden absolute -left-56 top-48 rotate-90 opacity-60"
              >
                <img
                  className="lg:absolute relative w-1/2 bottom-0"
                  src="/pandit-back.png"
                  alt="Background"
                />
              </div>
            </div>
            {/* Login Form */}
            <div className="login z-0 flex items-center mx-auto flex-col h-screen justify-center">
              <div className="heading w-[40vw] mb-5">
                <p className="font-bold text-4xl font-serif text-gray-800 text-center">
                  Pandit's Portal
                </p>
              </div>
              <div className="browseProfileImg">
                <img src="/pandit-browse.png" className=" h-[15vh]" alt="" />
              </div>
              <div className="form flex w-full lg:w-[25vw] lg:flex-row flex-col justify-around">
                <button
                  className="bg-red-500 px-10 lg:w-[40%] text-white py-2 rounded-lg mt-8 hover:bg-red-600 transition duration-300"
                  onClick={() => {
                    router.push("/dashboard/editprofile");
                  }}
                >
                  View/Edit Profile
                </button>
                <button
                  className="bg-red-500 px-10 lg:w-[40%] text-white py-2 rounded-lg mt-8 hover:bg-red-600 transition duration-300"
                  onClick={() => {
                    router.push("/dashboard/myServices");
                  }}
                >
                  My Services
                </button>
              </div>
              <div className="form flex w-full flex-row justify-around">
                <button
                  className="bg-red-500 px-10 lg:w-[40%]  text-white py-2 rounded-lg mt-8 hover:bg-red-600 transition duration-300"
                  onClick={() => {
                    router.push("/dashboard/selectCategory");
                  }}
                >
                  Add Service
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
