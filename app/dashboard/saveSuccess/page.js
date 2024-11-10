"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

function addService() {
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
        <a
          onClick={() => {
            router.back();
          }}
          className="lg:hidden top-5 left-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
        >
          <img src="/back-arrow.png" className="w-10" alt="back" />
        </a>
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
                        alt="Logout"
                      />
                    </li>
                  </ul>
                </div>
                <a
                  onClick={() => {
                    router.back();
                  }}
                  className=" mt-40 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
                >
                  <img src="/back-arrow.png" className="w-14" alt="back" />
                </a>
              </div>
            </nav>
          </div>

          <div className="left-panel flex w-full items-center">
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
                className="lg:absolute relative w-fit"
                src="/cat-page-bg.png"
                alt="Background"
              />
            </div>
          </div>
        </div>
        <div>
          <div className=" heading w-full h-max mb-20 mt-56 text-center">
            <img src="/tick.png" className="mx-auto lg:w-[5vw]" />
            <p className="font-semibold lg:text-4xl text-2xl font-sans pt-14 text-gray-800 text-center">
              Your services has been updated
            </p>
            <button
              className=" bg-white w-auto border-solid border-gray-600 border-2 text-gray-600 py-2 px-10 rounded-lg mt-8 hover:bg-gray-600 hover:text-white transition duration-300  p-3  text-lg font-semibold shadow-lg"
              onClick={() => {
                router.replace("/dashboard");
              }}
            >
              Go to my dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default addService;
