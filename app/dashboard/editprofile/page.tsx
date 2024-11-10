"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

function ProfilePage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [userId, setUserId] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Fetch data from local storage when component mounts

    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        router.replace("/"); // Redirect to home if authToken is missing
        return;
      }

      setAuthToken(localStorage.getItem("authToken") || "");
      setContactNumber(localStorage.getItem("contact_number") || "");
      setUserId(localStorage.getItem("user_id") || "");
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  useEffect(() => {
    // Fetch user details when authToken and userId are set
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(
          `https://test.backend.urbanoinfotech.com/api/v1/pandit/${userId}`,
          {
            headers: {
              accept: "application/json",
              Authorization: authToken,
            },
          }
        );
        const data = await response.json();
        if (response.ok) {
          setFirstName(data.results.first_name);
          setLastName(data.results.last_name);
        } else {
          console.error("Failed to fetch user details:", data.message);
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    if (authToken && userId) fetchUserDetails();
  }, [authToken, userId]);

  const handleSave = async () => {
    try {
      const response = await fetch(
        `https://test.backend.urbanoinfotech.com/api/v1/pandit/${userId}`,
        {
          method: "PATCH",
          headers: {
            accept: "application/json",
            Authorization: authToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            contact_number: contactNumber,
            profile_image: "https://picsum.photos/200/300",
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage("An error occurred while updating the profile.");
      console.error(error);
    }
  };
  return (
    <div>
      <div className="main">
        <div
          onClick={() => {
            router.back();
          }}
          className="lg:hidden top-5 left-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
        >
          <img src="/back-arrow.png" className="w-10" alt="back" />
        </div>
        <div className="flex lg:flex-row flex-col">
          {/* Navbar */}
          <div className="navbar lg:block hidden">
            <nav
              style={{ backgroundColor: "#DB2C1D", borderRadius: "20px" }}
              className="lg:absolute block w-[90%] bg-opacity-90 top-3 right-[5%] left-[5%] shadow backdrop-blur-lg backdrop-saturate-150 z-[9999]"
            >
              <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
                {/* Logo */}
                <Link
                  href="/"
                  className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
                >
                  <img src="/logo.png" className="w-14" alt="Logo" />
                </Link>

                {/* Menu Options */}
                <div className="hidden lg:block">
                  <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                    <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                      <img
                        src="/logout.png"
                        className="w-10 cursor-pointer"
                        onClick={() => {
                          localStorage.clear();
                          router.replace("/");
                        }}
                      />
                    </li>
                  </ul>
                </div>
                <div
                  onClick={() => {
                    router.back();
                  }}
                  className=" mt-40 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
                >
                  <img src="/back-arrow.png" className="w-14" alt="back" />
                </div>
              </div>
            </nav>
          </div>

          <div className="left-panel flex w-full items-center">
            <div
              onClick={() => {
                localStorage.clear();
                router.replace("/");
              }}
              className="lg:hidden top-5 right-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
            >
              <img src="/logout.png" className="w-10 invert h-8" alt="back" />
            </div>
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

            {/* Profile Form */}
            <div className="login z-0 flex items-center mx-auto flex-col h-screen justify-center">
              <div className="heading w-[40vw] mb-5">
                <p className="font-bold text-4xl font-serif text-gray-800 text-center">
                  Profile Details
                </p>
              </div>
              <div className="browseProfileImg">
                <img src="/pandit-browse.png" className=" h-[15vh]" alt="" />
              </div>
              <div className="form flex w-[25vw] flex-col">
                <p className="text-gray-700">First Name</p>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-red-500"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <br />
                <p className="text-gray-700">Last Name</p>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-red-500"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <br />
                <p className="text-gray-700">Phone Number</p>
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-red-500"
                  value={contactNumber}
                  disabled
                />
                <br />

                <button
                  onClick={handleSave}
                  className="bg-red-500 w-[100%] text-white py-2 rounded-lg mt-8 hover:bg-red-600 transition duration-300"
                >
                  Save
                </button>
                {message && (
                  <p className="mt-4 text-center text-gray-700">{message}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
