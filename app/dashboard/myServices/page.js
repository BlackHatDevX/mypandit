"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

function ProfileServices() {
  const [authToken, setAuthToken] = useState("");
  const [services, setServices] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.replace("/"); // Redirect to home if authToken is missing
      return;
    }
    setAuthToken(localStorage.getItem("authToken") || "");
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          "https://test.backend.urbanoinfotech.com/api/v1/pandit/service?filter=%7B%7D",
          {
            headers: {
              accept: "application/json",
              Authorization: authToken,
            },
          }
        );
        const data = await response.json();
        if (data.statusCode === 200) {
          setServices(data.results.data);
        } else {
          console.error("Failed to fetch services:", data.message);
        }
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setLoading(false);
      }
    };

    if (authToken) fetchServices();
  }, [authToken]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imagesBox = await Promise.all(
          services.map(async (service) => {
            const imgData = await fetch(
              `https://test.backend.urbanoinfotech.com/api/v1/get-presigned-url?url=${service.logo_image}`,
              {
                headers: {
                  accept: "application/json",
                },
              }
            );
            const imageData = await imgData.json();
            return imageData.results.presigned_url;
          })
        );
        setImages(imagesBox);
      } catch (error) {
        console.error("Error fetching services images", error);
      }
    };

    if (services.length) fetchImages();
  }, [services]);

  return (
    <div className="main pt-40">
      {/* Navbar */}
      <div className="navbar lg:block hidden">
        <nav
          style={{ backgroundColor: "#DB2C1D", borderRadius: "20px" }}
          className="lg:absolute block w-[90%] bg-opacity-90 top-3 right-[5%] left-[5%] shadow backdrop-blur-lg backdrop-saturate-150 z-[9999]"
        >
          <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
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
              className="mt-40 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
            >
              <img src="/back-arrow.png" className="w-14" alt="back" />
            </a>
          </div>
        </nav>
      </div>

      {/* Services Section */}
      <div className="heading w-full mb-5">
        <a
          onClick={() => {
            localStorage.clear();
            router.replace("/");
          }}
          className="lg:hidden top-5 right-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
        >
          <img src="/logout.png" className="w-10 invert h-8" alt="back" />
        </a>
        {/* mobile features start  */}
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
        <a
          onClick={() => {
            router.back();
          }}
          className="lg:hidden top-5 left-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
        >
          <img src="/back-arrow.png" className="w-10" alt="back" />
        </a>
        {/* mobile features end  */}

        <p className="font-bold lg:text-4xl text-2xl font-serif text-gray-800 text-center">
          Your services
        </p>
      </div>

      <div className="flex flex-wrap justify-center mt-8 gap-4">
        {loading ? (
          <p>Loading...</p>
        ) : services.length === 0 ? (
          <div className="flex flex-col ">
            <p className="font-semibold lg:text-4xl text-2xl font-sans pt-14 text-gray-800 text-center">
              You have not added any service
            </p>
            <div className=" text-center">
              <button
                className=" bg-white w-auto border-solid border-gray-600 border-2 text-gray-600 py-2 px-10 rounded-lg mt-8 hover:bg-gray-600 hover:text-white transition duration-300  p-3  text-lg font-semibold shadow-lg"
                onClick={() => {
                  router.replace("/dashboard");
                }}
              >
                Add new service
              </button>
            </div>
          </div>
        ) : (
          services.map((service, index) => (
            <div
              key={service.id}
              className="relative bg-white shadow-lg rounded-lg p-4 w-[300px] h-[300px]"
            >
              <button
                className="absolute bottom-5 right-5 bg-red-500 text-white rounded-full p-2"
                onClick={() => {
                  console.log(`Delete service with id: ${service.id}`);
                }}
              >
                X
              </button>
              <img
                src={images[index]}
                alt={service.name}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <div className="p-2">
                <h2 className="text-lg font-bold">{service.name}</h2>
                <p className="text-sm text-gray-500">{service.category_name}</p>
                <p className="mt-2 text-sm">
                  Dakshina:{" "}
                  <span className="font-semibold">₹{service.dakshina}</span>
                </p>
                <p className="text-sm">
                  Duration:{" "}
                  <span className="font-semibold">
                    {service.duration} hours
                  </span>
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default ProfileServices;
