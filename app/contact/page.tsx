"use client";

import useColorMode from "@/redux/hooks/useColorMode";
import React from "react";

const Contact = () => {
  const [details, setDetails] = React.useState({
    email: "",
    message: "",
  });

  const { colorMode } = useColorMode();

  return (
    <section
      className={`${colorMode === "dark" ? "bg-[#131417]" : "bg-[#eee]"} `}
    >
      <div className="py-8 px-4 mx-auto max-w-screen-md">
        <h2
          className={`mb-4 text-2xl md:text-4xl tracking-tight font-extrabold text-center ${
            colorMode === "dark" ? "text-white" : "text-gray-900"
          }`}
        >
          Contact Us
        </h2>
        <p
          className={`mb-8 font-light text-center text-lg md:text-xl text-[#777777]`}
        >
          Found a Bug? Feedback about a Blog?
          <br />
          Want to Contribute? Let us know.
        </p>
        <form
          action=""
          method="POST"
          className="space-y-8"
          onSubmit={async (e) => {
            e.preventDefault();
            console.log(details);
            setDetails({ email: "", message: "" });
          }}
        >
          <div>
            <label
              htmlFor="email"
              className={`block mb-2 text-sm font-medium ${
                colorMode === "dark" ? "text-gray-300" : "text-gray-900"
              }`}
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              value={details.email}
              className={`border text-sm rounded-lg w-full p-2.5 placeholder-[#777777] shadow-sm  ${
                colorMode === "dark"
                  ? "text-white bg-[#222222] border-[#333333] focus:bg-[#444444] focus:border-[#555]"
                  : "text-gray-900 bg-[#ffffff] border-[#bbbbbb] focus:bg-[#dddddd]"
              }`}
              placeholder="name@provider.com"
              required
              onChange={(e) => {
                setDetails({ ...details, email: e.target.value });
              }}
            ></input>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className={`block mb-2 text-sm font-medium ${
                colorMode === "dark" ? "text-gray-300" : "text-gray-900"
              }`}
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              value={details.message}
              className={`border text-sm rounded-lg w-full p-2.5 placeholder-[#777777] shadow-sm  ${
                colorMode === "dark"
                  ? "text-white bg-[#222222] border-[#333333] focus:bg-[#444444] focus:border-[#555]"
                  : "text-gray-900 bg-[#ffffff] border-[#bbbbbb] focus:bg-[#ddd]"
              }`}
              placeholder="Leave a comment..."
              onChange={(e) => {
                setDetails({ ...details, message: e.target.value });
              }}
            ></textarea>
          </div>
          <button
            type="submit"
            className={`py-3 px-5 text-sm font-medium shadow-md text-center rounded-lg sm:w-fit  ${
              colorMode === "dark"
                ? "text-white bg-[#222222] border-[#333333] focus:bg-[#444444] focus:border-[#555]"
                : "text-gray-900 bg-[#ffffff] border-[#bbb] focus:bg-[#dddddd]"
            }}`}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
