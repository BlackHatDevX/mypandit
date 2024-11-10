"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

function ServicesPage() {
  const [authToken, setAuthToken] = useState("");
  const [images, setImages] = useState([]);
  const [services, setServices] = useState([]);
  const [categoryId, setCategoryId] = useState();
  const [loading, setLoading] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [selectedServiceImage, setselectedServiceImage] = useState("");

  const router = useRouter();

  useEffect(() => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        router.replace("/"); // Redirect to home if authToken is missing
        return;
      }

      setAuthToken(localStorage.getItem("authToken") || "");
      setCategoryId(localStorage.getItem("category_id") || "");
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `https://test.backend.urbanoinfotech.com/api/v1/service?filter=%7B%22category%22%20%3A%20%5B${categoryId}%5D%7D`,
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
      }
    };

    if (authToken) fetchServices();
  }, [authToken, categoryId]);

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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching services images", error);
        setLoading(false);
      }
    };

    if (services.length) fetchImages();
  }, [services]);

  const handleServiceSelect = (serviceId, i) => {
    setSelectedServiceId(serviceId);
    setselectedServiceImage(images[i]);
  };

  const handleNextClick = () => {
    if (selectedServiceId) {
      localStorage.setItem("service_id", selectedServiceId);
      localStorage.setItem("service_img", selectedServiceImage);
      router.push("/dashboard/selectCategory/selectService/filldetails");
    } else {
      alert("Please select a service.");
    }
  };

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
                <Link
                  href="/"
                  className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
                >
                  <img src="/logo.png" className="w-14" alt="Logo" />
                </Link>
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
                className="lg:absolute relative w-fit"
                src="/cat-page-bg.png"
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
          </div>
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <p className="text-2xl font-semibold">Loading...</p>
          </div>
        ) : (
          /* Display services */
          <div>
            <div className="heading w-full mb-5 mt-36">
              <p className="font-bold text-4xl font-serif text-gray-800 text-center">
                Services Of Pooja
              </p>
            </div>
            <div className="services-container grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
              {services.map((service, i) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id, i)}
                  className={`service-card flex items-center p-4 border rounded-lg shadow-lg ${
                    selectedServiceId === service.id
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: "white", cursor: "pointer" }}
                >
                  <img
                    src={images[i]}
                    alt={service.name}
                    className="w-20 h-20 rounded-full mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">
                      {service.name} ({service.name_local_lang})
                    </h2>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating "Next" Button */}
            <button
              onClick={handleNextClick}
              className="fixed bg-red-500 w-auto text-white py-2 px-10 rounded-lg mt-8 hover:bg-red-600 transition duration-300 bottom-8 right-1/2 translate-x-1/2 p-3  text-lg font-semibold shadow-lg"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ServicesPage;
