import React, { useEffect, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Contactform = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Name is required!"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required!"),
    message: yup.string().required("Message is required!"),
    org_name: yup.string().required("Organisation name is required!"),
    contact: yup
      .string()
      .required("Contact number is required!")
      .matches(/^\d{10,}$/, "Contact number must be at least 10 digits"),
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [org_name, setOrgName] = useState("");
  const [contact, setContact] = useState("");

  const contactFormRef = collection(db, "contact-form");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    try {
      await addDoc(contactFormRef, {
        name: name,
        email: email,
        message: message,
        org_name: org_name,
        contact: contact,
      });
      setName("");
      setEmail("");
      setContact("");
      setMessage("");
      setOrgName("");

      toast.success("Form Submitted", {
        autoClose: 5000,
        position: "top-left",
        className: "h-2 w-64 mx-[11rem]  mt-[1.5rem] lg:mx-[75rem] ",
      });
    } catch (err) {
      console.error(err);

      toast.error("Failed to submit form", {
        autoClose: 5000,
        position: "top-left",
        className: "h-2 w-64 mx-[11rem] mt-[1.5rem]",
      });
    }
  };

  return (
    <div className="container-form  h-[825px]  flex justify-center items-center lg:items-start">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-[700px] w-[370px] md:w-[650px] flex flex-col items-center justify-around bg-white rounded-xl p-2 shadow-xl lg:h-[411px] lg:w-[1170px] lg:mt-[5rem] lg:flex lg:items-center "
      >
        <div className="form  lg:h-[271px] lg:w-[1045px] lg:flex lg:p-4 lg:justify-between  h-[700px] w-[370px] flex flex-col justify-between items-center  lg:flex-row ">
          <div className="left lg:flex lg:h-[88px] lg:w-[358px] lg:mt-8 bg- form-text h-[82px] w-[290px]  mb-5 md:h-fit md:w-[35rem] md:mb-0 lg:space-y-4 mt-6 lg:flex-col  lg:relative lg:bottom-24 ">
            <h4 className="text-2xl lg:text-3xl text-[#505050] font-bold font-[montserrat]">
              Got any questions?
            </h4>
            <p className="text-lg text-[#505050] font-medium font-[montserrat] lg:text-base">
              Let’s discuss it over a cup of coffee.
            </p>
          </div>
          <div className="right lg:h-[278px] lg:w-[625px] flex flex-col justify-evenly items-center   p-2 h-[35rem] lg:grid lg:grid-cols-2">
            <div className="input-group w-full mb-4 lg:mb-0">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="border-b-2 border-b-slate-300 w-72 p-2 outline-none md:w-[35rem] lg:w-[300px] lg:h-[37px] "
                {...register("name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <p className="text-red-500 lg:flex lg:justify-center">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="input-group w-full mb-4 lg:mb-0">
              <input
                type="text"
                name="org_name"
                id="org_name"
                placeholder="Organisation Name"
                className="border-b-2 border-b-slate-300 w-72 p-2 outline-none md:w-[35rem] lg:w-[300px] lg:h-[37px] lg:ml-6"
                {...register("org_name")}
                value={org_name}
                onChange={(e) => {
                  setOrgName(e.target.value);
                }}
              />
              {errors.org_name && (
                <p className="text-red-500 lg:flex lg:justify-center">
                  {errors.org_name.message}
                </p>
              )}
            </div>
            <div className="input-group w-full mb-4 lg:mb-0">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email ID"
                className="border-b-2 border-b-slate-300 w-72 p-2 outline-none md:w-[35rem] lg:w-[300px] lg:h-[37px] lg:mt-12"
                {...register("email")}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              {errors.email && (
                <p className="text-red-500 lg:flex lg:justify-center">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="input-group w-full mb-4 lg:mb-0">
              <input
                type="text"
                name="contact"
                id="contact"
                inputMode="numeric"
                pattern="\d*"
                placeholder="Contact Number"
                className="border-b-2 border-b-slate-300 w-72 p-2 outline-none md:w-[35rem] lg:w-[300px] lg:h-[37px] lg:mt-12 lg:ml-6"
                {...register("contact")}
                value={contact}
                onChange={(e) => {
                  setContact(e.target.value);
                }}
              />
              {errors.contact && (
                <p className="text-red-500 lg:flex lg:justify-center">
                  {errors.contact.message}
                </p>
              )}
            </div>
            <div className="input-group w-full mb-4 lg:mb-0 lg:col-span-2">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                className="border-b-2 border-b-slate-300 w-72 pl-2 h-24 outline-none md:w-[35rem] resize-none lg:w-[300px] lg:h-[107px] lg:mt-12"
                {...register("message")}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              {errors.message && (
                <p className="text-red-500 lg:flex lg:justify-center lg:mr-72">
                  {errors.message.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#00ADEE] text-white p-4 w-72 rounded-full text-xl font-semibold cursor-pointer hover:bg-[#00aeee97] md:w-[35rem] lg:h-[50px] lg:w-[143px] lg:absolute lg:bottom-[13.5rem] lg:right-[14.8rem] lg:flex lg:justify-center lg:items-center lg:text-lg"
            >
              Submit &rarr;
            </button>
          </div>
        </div>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Contactform;
