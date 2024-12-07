import React, { useState } from "react";
import axios from "axios";

import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Complain() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    file: null,
  });

  function helpChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function handleFileChange(e) {
    setFormData((prevData) => ({
      ...prevData,
      file: e.target.files[0],
    }));
  }

  const resetForm = {
    name: "",
    email: "",
    mobile: "",
    message: "",
    file: null,
  };

  function helpForms(e) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("mobile", formData.mobile);
    data.append("message", formData.message);
    if (formData.file) {
      data.append("file", formData.file);
    }

    axios
      .post("http://localhost:5000/help", data)
      .then((res) => {
        console.log(res);
        setFormData(resetForm);
        toast.success("Your complain successfully registered", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          transition: "Bounce",
          style: {
            backgroundColor: "#1b6392",
            color: "white",
            fontSize: "14px",
            fontWeight: 700,
          },
          icon: "🟢",
        });
      })
      .catch((err) => {
        console.log(err);
        toast.error("There was an error submitting the form.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            backgroundColor: "#f44336",
            color: "white",
            fontSize: "16px",
          },
          icon: "❌",
        });
      });
  }

  return (
    <>
      <div className="flex justify-center px-[14rem] py-5  dark:bg-[#162544]">
        <div className="w-1/3 bg-white p-5 dark:bg-[#233a66] ">
          <div className="companyNumber mb-3">
            <div className="iconNumber flex items-center mb-2">
              <LocalPhoneIcon
                className="text-[#1b6392] dark:bg-[#fff1dc]  border-2 border-[#c8c8c8] rounded-full p-2"
                sx={{ fontSize: 50 }}
              />
              <h4 className="ml-4 dark:text-[#fff1dc]">Call To Us</h4>
            </div>
            <h1 className="dark:text-[#fff1dc]">We are available 24/7</h1>
            <a
              href="tel:03409444789"
              className="text-black dark:text-[#fff1dc]"
            >
              <span>Phone: </span>03409444789
            </a>
          </div>
          <div className="mb-5 w-[90%] h-[1px] ml-[10px] bg-[#162544] dark:bg-[#fff1dc]"></div>
          <div className="companyNumber">
            <div className="iconNumber flex items-center mb-2">
              <EmailIcon
                className="help-icon text-[#1b6392] border-2 border-[#c8c8c8] dark:bg-[#fff1dc] rounded-full p-2"
                sx={{ fontSize: 50 }}
              />
              <h4 className="ml-4 dark:text-[#fff1dc]">Write To Us</h4>
            </div>
            {/* <h6 className="dark:text-[#fff1dc]">
              we will get in touch within 24 hours
            </h6> */}
            <a
              href="mailto:hs@gmail.com"
              className="text-black dark:text-[#fff1dc]"
            >
              <span>Email: </span>marketMind@gmail.com
            </a>
          </div>
        </div>
        <div className="messageHelp bg-white dark:bg-[#233a66]  p-5 ml-5 w-3/4 overflow-hidden">
          <form onSubmit={helpForms}>
            <div className="flex">
              {" "}
              <input
                type="text"
                placeholder="Your Name *"
                required
                className=" me-1 w-1/3 p-2 bg-[#e0e0e0] dark:bg-[#162544] text-[#515353]  border-none outline-none  "
                name="name"
                value={formData.name}
                onChange={helpChange}
              />
              <input
                type="email"
                placeholder="Your Email *"
                required
                className="me-1 w-1/3 p-2 bg-[#e0e0e0] dark:bg-[#162544] text-[#515353] border-none outline-none  "
                name="email"
                value={formData.email}
                onChange={helpChange}
              />
              <input
                type="text"
                placeholder="Your Contact *"
                required
                className="helpInput w-1/3 p-2 bg-[#e0e0e0] dark:bg-[#162544] text-[#515353] border-none outline-none  "
                name="mobile"
                value={formData.mobile}
                onChange={helpChange}
              />
            </div>

            <textarea
              placeholder="Write Support message *"
              required
              className="mt-1 w-full h-[180px] p-2 bg-[#e0e0e0] dark:bg-[#162544] text-[#515353] border-none outline-none mb-3 resize-none"
              name="message"
              value={formData.message}
              onChange={helpChange}
            ></textarea>
            <div className="flex justify-between relative">
              <input
                type="file"
                name="file"
                onChange={handleFileChange}
                className="dark:text-[#fff1dc]"
              />
              <button
                className="absolute -right-[25px]  dark:bg-[#fff1dc] text-[#ff6e80] top-[12px] py-2 px-8"
                style={{
                  borderRadius: "5px",
                  boxShadow: "inset 2px 2px 5px rgba(0, 0, 0, 0.3)",
                }}
              >
                send message{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default Complain;
