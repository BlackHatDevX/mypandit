"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [contactNumber, setContactNumber] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  useEffect(() => {
    try {
      const token = localStorage.getItem("authToken") || "";
      if (token.length != 0) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error accessing localStorage:", error);
    }
  }, []);

  const sendOtp = async () => {
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://test.backend.urbanoinfotech.com/api/v1/send-otp",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({ contact_number: contactNumber }),
        }
      );

      const data = await response.json();

      if (data.statusCode === 201) {
        setOtpSent(true); // OTP sent successfully
      } else {
        setErrorMessage("ERROR API: OTP NOT SENT");
      }
    } catch (error) {
      setErrorMessage("ERROR API: OTP NOT SENT");
      console.log(error);
    }
  };

  const verifyOtp = async () => {
    setErrorMessage("");

    try {
      const response = await fetch(
        "https://test.backend.urbanoinfotech.com/api/v1/pandit-login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify({ contact_number: contactNumber, otp: otp }),
        }
      );

      const data = await response.json();

      if (data.statusCode === 200) {
        const authToken = "Bearer " + data.results.access;
        localStorage.setItem("authToken", authToken);
        localStorage.setItem("user_id", data.results.data.user_id);
        localStorage.setItem("contact_number", contactNumber);

        router.push("/dashboard");
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("ERROR API: OTP Verification failed");
      console.log(error);
    }
  };

  return (
    <div className="main">
      <div className="flex lg:flex-row flex-col">
        {/* Navbar */}
        <div className="navbar lg:block hidden">
          <nav
            style={{ backgroundColor: "#DB2C1D", borderRadius: "20px" }}
            className="lg:absolute block w-[90%] bg-opacity-90 top-3 right-[5%] left-[5%] shadow backdrop-blur-lg backdrop-saturate-150 z-[9999]"
          >
            <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
              <Link
                href="/"
                className="mr-4 block cursor-pointer py-1.5 text-base text-slate-800 font-semibold"
              >
                <img src="/logo.png" className="w-14" alt="Logo" />
              </Link>
              <div className="hidden lg:block"></div>
            </div>
          </nav>
        </div>

        {/* Left Side - Login Section */}
        <div className="left-panel flex lg:w-1/2 items-center}">
          <div className="lg:-z-10 lg:block hidden">
            <img
              className="lg:absolute relative w-1/2 bottom-0"
              src="/login-back.png"
              alt="Background"
            />
          </div>
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

          {/* Login Form */}
          <div className="login z-0 flex items-center mx-auto flex-col h-screen justify-center">
            <div className="heading w-72 mb-10">
              <div className="block lg:hidden cursor-pointer mb-20">
                <img src="/logo.png" className="w-14 mx-auto" alt="Logo" />
              </div>
              <p className="font-bold text-5xl font-serif text-gray-800">
                Log In
              </p>
            </div>
            <div className="form flex flex-col">
              <p className="text-gray-700">Enter Mobile Number</p>
              <input
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                placeholder="your mobile number"
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-red-500"
                disabled={otpSent}
              />

              {/* OTP Field */}
              {otpSent && (
                <div className="mt-4">
                  <p className="text-gray-700">Enter OTP</p>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="OTP"
                    className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-red-500"
                  />
                </div>
              )}
              <button
                onClick={otpSent ? verifyOtp : sendOtp}
                className="bg-red-500 w-72 text-white py-2 rounded-lg mt-8 hover:bg-red-600 transition duration-300"
              >
                {otpSent ? "Submit OTP" : "Send OTP"}
              </button>

              {/* Error Message */}
              {errorMessage && (
                <p className="text-red-500 mt-4">{errorMessage}</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Side - Information Section */}
        <div className="right-panel lg:w-1/2 flex">
          <div className="hindi absolute lg:z-10 lg:right-1/4 right-2/4 lg:top-1/3 ">
            <p className="lg:text-3xl font-bold text-gray-800">
              पूजा पाठ हो या अनुष्ठान,
            </p>
            <div className="h-2"></div>
            <p className="lg:text-3xl font-bold text-gray-800">
              <span className="text-red-600">पंडित</span> मिलना हुआ आसान।
            </p>
          </div>
          <div className="panditcontainer z-0">
            <img
              src="/pandit.png"
              className="bottom-0 lg:absolute lg:w-2/5 lg:right-0"
              alt="Pandit Ji"
            />
          </div>
          <div className="panditcontainer lg:block hidden -z-10">
            <img
              src="/pandit-back.png"
              className="bottom-0 absolute lg:w-1/2"
              alt="Background"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
