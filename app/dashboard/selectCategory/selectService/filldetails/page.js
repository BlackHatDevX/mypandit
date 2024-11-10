"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function DetailsPage() {
  const [dakshina, setDakshina] = useState("");
  const [duration, setDuration] = useState("");
  const [authToken, setAuthToken] = useState("");
  const [message, setMessage] = useState("");
  const [serviceDetails, setServiceDetails] = useState(null); // Default as null to prevent undefined errors
  const [simage, setSimage] = useState(null); // Default to null for image
  const [categoryId, setCategoryId] = useState(null); // Set to null by default
  const router = useRouter();

  useEffect(() => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        router.replace("/"); // Redirect to home if authToken is missing
        return;
      }

      setAuthToken(token);
      setSimage(localStorage.getItem("service_img"));
      setCategoryId(localStorage.getItem("category_id"));
    } catch (error) {
      console.log("Error accessing localStorage:", error);
    }
  }, []);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      const serviceId = localStorage.getItem("service_id");
      if (!serviceId) return; // Exit early if no serviceId

      try {
        const response = await fetch(
          `https://test.backend.urbanoinfotech.com/api/v1/service/${serviceId}`,
          {
            headers: {
              accept: "application/json",
              Authorization: authToken,
            },
          }
        );
        const data = await response.json();
        if (data.statusCode === 200) {
          setServiceDetails(data.results);
        } else {
          console.error("Failed to fetch service details:", data.message);
        }
      } catch (error) {
        console.log("Error fetching service details:", error);
      }
    };

    if (authToken) {
      fetchServiceDetails();
    }
  }, [authToken]);

  const handleSave = async () => {
    if (!dakshina || !duration || !categoryId) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(
        `https://test.backend.urbanoinfotech.com/api/v1/pandit/service`,
        {
          method: "POST",
          headers: {
            accept: "application/json",
            Authorization: authToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service: serviceDetails.id,
            dakshina: dakshina,
            duration: duration.toString(),
            category: categoryId,
          }),
        }
      );

      const data = await response.json();

      if (data.statusCode === 201) {
        setMessage(data.message);
        router.push("/dashboard/saveSuccess"); // Redirect to /success after save
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage("An error occurred while saving the service.");
      console.log(error);
    }
  };

  if (!serviceDetails) {
    return <p>Loading service details...</p>; // Show a loading message until service details are fetched
  }

  return (
    <div>
      <div className="main">
        <Link
          onClick={() => router.back()}
          className="lg:hidden top-5 left-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
        >
          <img src="/back-arrow.png" className="w-10" alt="back" />
        </Link>
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
                        className="w-10"
                        onClick={() => {
                          localStorage.clear();
                          router.replace("/");
                        }}
                      />
                    </li>
                  </ul>
                </div>
                <Link
                  onClick={() => router.back()}
                  className=" mt-40 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
                >
                  <img src="/back-arrow.png" className="w-14" alt="back" />
                </Link>
              </div>
            </nav>
          </div>

          {/* Left Panel */}
          <div className="left-panel flex w-full items-center">
            <Link
              onClick={() => {
                localStorage.clear();
                router.replace("/");
              }}
              className="lg:hidden top-5 right-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
            >
              <img src="/logout.png" className="w-10 invert h-8" alt="logout" />
            </Link>

            {/* Service Image */}
            <div className="service_image">
              {simage && (
                <img
                  src={simage}
                  className="h-[15vh]"
                  alt={serviceDetails.name}
                />
              )}
            </div>

            {/* Service Form */}
            <div className="login z-0 flex items-center mx-auto flex-col h-screen justify-center">
              <div className="heading w-[40vw] mb-5">
                <p className="font-bold lg:text-4xl text-2xl font-serif text-gray-800 text-center">
                  Fill Service Details
                </p>
                <p className=" text-center lg:text-2xl">
                  {serviceDetails.name}
                </p>
                <p className=" text-center lg:text-xl text-xs font-mono ">
                  {serviceDetails.category?.map((cat) => cat.name).join(", ")}
                </p>
              </div>

              <div className="form flex w-[25vw] flex-col">
                <br />
                <p className="text-gray-700">Dakshina</p>
                <input
                  type="number"
                  placeholder="Enter amount in ₹"
                  className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-red-500"
                  value={dakshina}
                  onChange={(e) => setDakshina(e.target.value)}
                />
                <p className="text-gray-700">Duration</p>
                <input
                  type="number"
                  placeholder="Enter duration in Hours"
                  className="border border-gray-300 rounded-lg p-1 focus:outline-none focus:border-red-500"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
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

export default DetailsPage;
