"use client";

import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function AddService() {
  const [authToken, setAuthToken] = useState("");
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      router.replace("/");
      return;
    }
    setAuthToken(token);
  }, [router]);

  useEffect(() => {
    if (!authToken) return;
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://test.backend.urbanoinfotech.com/api/v1/category",
          {
            headers: {
              accept: "application/json",
              Authorization: authToken,
            },
          }
        );
        const data = await response.json();
        if (data.statusCode === 200) {
          setCategories(data.results.data);
        } else {
          console.error("Failed to fetch categories:", data.message);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [authToken]);

  useEffect(() => {
    const fetchImages = async () => {
      if (categories.length === 0) return;
      try {
        const imagesBox = await Promise.all(
          categories.map(async (category) => {
            const imgData = await fetch(
              `https://test.backend.urbanoinfotech.com/api/v1/get-presigned-url?url=${category.image}`,
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
        console.error("Error fetching category images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, [categories]);

  const handleCategoryClick = (categoryId) => {
    setSelectedCategory(categoryId);
  };

  const handleNextClick = () => {
    if (selectedCategory) {
      localStorage.setItem("category_id", selectedCategory);
      router.push("/dashboard/selectCategory/selectService");
    } else {
      alert("Please select a category first.");
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
                  className="mt-40 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
                >
                  <img src="/back-arrow.png" className="w-14" alt="back" />
                </div>
              </div>
            </nav>
          </div>

          <div className="left-panel flex w-full items-center">
            <div
              onClick={() => {
                router.back();
              }}
              className="lg:hidden top-5 left-5 absolute mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
            >
              <img src="/back-arrow.png" className="w-10" alt="back" />
            </div>
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
          /* Display Categories */
          <div>
            <div className="heading w-full mb-5 mt-36">
              <p className="font-bold text-4xl font-serif text-gray-800 text-center">
                Select Category Of Pooja
              </p>
            </div>
            <div className="categories-container grid grid-cols-1 lg:grid-cols-3 gap-4 p-4">
              {categories.map((category, i) => (
                <div
                  key={category.id}
                  onClick={() => handleCategoryClick(category.id)}
                  className={`category-card flex items-center p-4 border rounded-lg shadow-lg cursor-pointer ${
                    selectedCategory === category.id
                      ? "border-red-500 border-2"
                      : "border-gray-300 border-2"
                  }`}
                  style={{ backgroundColor: "white" }}
                >
                  <img
                    src={images[i]}
                    alt={category.name}
                    className="w-20 h-20 rounded-md mr-4"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">
                      {category.name} ({category.name_local_lang})
                    </h2>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Button */}
        <button
          onClick={handleNextClick}
          className="fixed bg-red-500 w-auto text-white py-2 px-10 rounded-lg mt-8 hover:bg-red-600 transition duration-300 bottom-8 right-1/2 translate-x-1/2 p-3  text-lg font-semibold shadow-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default AddService;
