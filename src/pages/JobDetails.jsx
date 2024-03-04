import React, { useState, useEffect } from "react";
import icon from "../assets/Icon.png";
import perk from "../assets/perk.png";
import listicon from "../assets/listicon.png";
import imgone from "../assets/leon-6awfTPLGaCE-unsplash.png";
import imgtwo from "../assets/leon-wVh5grSMYaY-unsplash 1.png";
import imgthree from "../assets/imgthree.png";
import group from "../assets/Group.png";
import commuter from "../assets/commuter.png";
import remote from "../assets/remote.png";
import com from "../assets/com.png";
import skill from "../assets/skill.png";
import job from "../assets/job.png";
import team from "../assets/team.png";
import data from "../data/Jobs.json";
import { useParams } from "react-router";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import close from "../assets/close.png";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    background: 'transparent',
    border: 'none',
    width: '100%',
    left: '0',
  },
};

const JobDetails = () => {
  const { id } = useParams();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  
  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }
  
  useEffect(() => {document.body.style.overflow = modalIsOpen == true ? "hidden" : "unset"}, [modalIsOpen]);


  // const contentStyle = { marginLeft: 'auto', marginRight: 'auto'};

  // const itemsPerPage = 5;

  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const dataItem = data.slice(indexOfFirstItem, indexOfLastItem);
  // const [currentPage, setCurrentPage] = useState(1);

  console.log(data);
  // console.log(id);
  // console.log(dataItem);

  const filteredItem = data.find((item) => {
    if (item.id === Number(id)) {
      return item;
    }
  });

  console.log(filteredItem);

  return (
    <div className="">
      <header className="">
        <div className=" block lg:flex justify-between border pl-24">
          <div className=" block lg:flex justify-between w-[250px] lg:w-[382px] h-[58px] mt-5">
            <img
              src={job}
              alt=""
              className="object-contain w-[160px] h-[36px]"
            />
            <div className="flex gap-6 mt-4">
              <a
                href=""
                className="text-black text-lg font-normal font-['Epilogue'] leading-relaxed"
              >
                Find Jobs
              </a>
              <a
                href=""
                className="text-indigo-600 text-lg font-normal font-['Epilogue'] leading-relaxed"
              >
                Browse Companies
              </a>
            </div>
          </div>
          <div className="flex justify-around w-[232px] h-[78px]">
            <button className="text-indigo-600 text-lg font-normal font-['Epilogue'] leading-relaxed">
              Login
            </button>
            <button className="w-[78px] h-[40px] mt-6 px-[4px] bg-indigo-600 justify-center items-center gap-1.5 text-center text-white text-lg font-bold font-['Epilogue'] leading-[28.80px]">
              Sign Up
            </button>
          </div>
        </div>
      </header>
      <section className="bg-neutral-100 pl-5 pr-5 lg:pr-0 lg:pl-24 pt-5 pb-5 ">
        <div className="ml-28 flex mt-5 mb-5">
          <p className="text-gray-800 text-opacity-50 text-xl font-normal font-['Epilogue'] leading-relaxed">
            Home / Companies / {filteredItem.company} /
          </p>
          <h3 className="text-gray-800 text-xl font-normal font-['Epilogue'] leading-relaxed">
            {filteredItem.title}
          </h3>
        </div>

        <div className="lg:w-[1150px] block w-[300px] h-[250px] lg:h-[139.24px] ml-0 lg:p-5 mb-16 bg-white border border-zinc-200 justify-between items-center lg:inline-flex">
          <div className="lg:w-[463px] w-[200px] block h-[91.24px] justify-center items-center gap-8 lg:inline-flex">
            <img
              className="w-[91px] h-[91px] object-contain pl-10 lg:pl-0"
              src={filteredItem.logo}
            />
            <div className="w-[351px] h-[78px] flex-col justify-center items-start gap-2 inline-flex">
              <p className="text-slate-800 text-[20px] pl-10 lg:pl-0 lg:text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                {filteredItem.title}
              </p>
              <div className="justify-center items-center gap-2 inline-flex">
                <p class="text-slate-600 text-xl pl-10 lg:pl-0 font-normal font-['Epilogue'] leading-loose">
                  {filteredItem.company}
                </p>
                <p class="text-slate-600 text-xl font-normal font-['Epilogue'] leading-loose">
                  {filteredItem.location}
                </p>
                <p class="text-slate-600 text-xl font-normal font-['Epilogue'] leading-loose">
                  {filteredItem.jobType}
                </p>
              </div>
            </div>
          </div>
          <div className="w-64 h-[58.06px] justify-center items-center gap-[20px] inline-flex">
            <img
              className=" hidden sm:block lg:block w-8 h-[33.18px] object-contain"
              src={icon}
              alt="icon"
            />
            
                <button onClick={openModal} className="w-[104px] h-[57px] mt-[150px] sm:mt-0 lg:mt-0 px-5 py-3.5 bg-indigo-600 justify-center 
                items-center gap-2.5 text-center text-white text-lg font-bold font-['Epilogue'] leading-[28.80px]">
                  Apply
                </button>
                <Modal
        isOpen={modalIsOpen}
        // className="w-[50%]"
        style={customStyles}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
                <div className="mt-10 mx-0 bg-white px-10 shadow-md border-white rounded-xl lg:w-[50%] lg:mx-auto">
                  <div className=" w-[300px] lg:w-[500px] ml-0 lg:mx-auto p-5 mb-16 bg-white border-b-2 border-zinc-200">
                  <div className="flex justify-end mt-10">
                  <img src={close} alt="logo" className="w-[24px] h-[24px] cursor-pointer" onClick={closeModal}/>
                          <div></div>
                        </div>
                    <div className=" ml-0 pl-0 w-[250px] lg:w-[463px] h-[91.24px] lg:justify-center lg:items-center gap-8 inline-flex">
                      <img
                        className=" w-[50px] lg:w-[91px] h-[91px] object-contain"
                        src={filteredItem.logo}
                      />
                      <div className=" w-[250px] lg:w-[351px] h-[78px] flex-col justify-center items-start gap-2 inline-flex">
                        <p className="text-slate-800 text-[16px] lg:text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                          {filteredItem.title}
                        </p>
                        <div className="justify-center items-center gap-2 flex">
                          <ul className="flex gap-5">
                            <li className="text-slate-600 text-xl font-normal font-['Epilogue'] leading-loose">
                              {filteredItem.company}
                            </li>
                            <li className="text-slate-600 text-xl font-normal font-['Epilogue'] leading-loose">
                              {filteredItem.location}
                            </li>
                            <li className="text-slate-600 text-xl font-normal font-['Epilogue'] leading-loose">
                              {filteredItem.jobType}
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4 className="text-2xl font-semibold text-black w-[250px] lg:w-[580px] lg:mx-auto mb-10">
                    Submit your application
                  </h4>
                  <p className="w-[250px] lg:w-full lg:mx-auto font-normal text-base font-['Epilogue'] text-neutral-500 leading-6 mb-10">
                    The following is required and will only be shared with{" "}
                    {filteredItem.company}
                  </p>
                   <Formik
                    initialValues={{
                      fullName: "",
                      email: "",
                      phone: "",
                      jobTitle: "",
                      linkedIn: "",
                      portfolio: "",
                      additionalInfo: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.fullName) {
                        errors.fullName = "Full Name is required";
                      }
                      if (!values.phone) {
                        errors.phone = "Phone Number is required";
                      } else if (
                        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(
                          values.phone
                        )
                      ) {
                        errors.phone = "Enter a valid phone number";
                      }
                      if (!values.jobTitle) {
                        errors.jobTitle = "Current or previous job is required";
                      }
                      if (
                        !/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(
                          values.linkedIn
                        )
                      ) {
                        errors.linkedIn = " Enter a valid URL";
                      }
                      if (
                        !/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/.test(
                          values.portfolio
                        )
                      ) {
                        errors.portfolio = " Enter a valid URL";
                      }
                      if (!values.email) {
                        errors.email = "Email is required";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                          values.email
                        )
                      ) {
                        errors.email = "Invalid email address";
                      }
                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      isDirty,
                      /* and other goodies */
                    }) => (
                      
                      <form
                        onSubmit={handleSubmit}
                        className="flex flex-col lg:w-[480px] [300px] mx-auto my-auto"
                      >
                        {/* <div style={{
                display: "flex",
                flexDirection: "column"
              }}> */}
                        <label
                          htmlFor=""
                          className=" text-base font-semibold font-epilogue leading-6 text-neutral-400 mb-2"
                        >
                          Full Name
                        </label>
                        <input
                          type="fullName"
                          name="fullName"
                          placeholder="Enter your full name"
                          className=" border-neutral-100 rounded w-[250px] md:w-[400px]
                           lg:w-[480px] px-3 py-4 bg-neutral-100 text-base font-normal font-['Epilogue'] 
                           leading-6 text-neutral-400 mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.fullName}
                        />
                        <span className=" text-red-500 pb-2">
                          {" "}
                          {errors.fullName &&
                            touched.fullName &&
                            errors.fullName}
                        </span>
                        <label
                          htmlFor=""
                          className=" text-base font-semibold font-epilogue leading-6 text-neutral-400 mb-2"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          className=" border-neutral-100 rounded font-normal w-[250px] lg:w-[480px] 
                          px-3 py-4 bg-neutral-100 text-base font-epilogue leading-6 text-neutral-400 mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          {" "}
                          {errors.email && touched.email && errors.email}
                        </span>
                        <label
                          htmlFor=""
                          className=" text-base font-semibold font-epilogue leading-6 text-neutral-400 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          placeholder="Enter your phone number"
                          className=" border-neutral-100 rounded font-normal 
                          w-[250px] lg:w-[480px] px-3 py-4 bg-neutral-100 text-base font-epilogue leading-6 text-neutral-400 mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                        />
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          {" "}
                          {errors.phone && touched.phone && errors.phone}
                        </span>
                        <label
                          htmlFor=""
                          className=" text-base font-semibold font-epilogue leading-6 text-neutral-400 mb-2"
                        >
                          Current or previous job title
                        </label>
                        <input
                          type="text"
                          name="jobTitle"
                          placeholder="What's your current or previous job title?"
                          className=" border-neutral-100 rounded font-normal 
                          w-[250px] lg:w-[480px] px-3 py-4 bg-neutral-100 text-base font-epilogue leading-6 text-neutral-400 mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.jobTitle}
                        />
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          {" "}
                          {errors.jobTitle &&
                            touched.jobTitle &&
                            errors.jobTitle}
                        </span>

                        <label
                          htmlFor=""
                          className=" text-base font-semibold font-epilogue leading-6 text-neutral-400 mb-2"
                        >
                          LinkedIn URL
                        </label>
                        <input
                          type="text"
                          name="linkedIn"
                          placeholder="Link to your LinkedIn URL"
                          className=" border-neutral-100 rounded w-[250px] lg:w-[480px] font-normal px-3 py-4
                           bg-neutral-100 text-base font-epilogue leading-6 text-neutral-400 mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.linkedIn}
                        />
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          {" "}
                          {errors.linkedIn &&
                            touched.linkedIn &&
                            errors.linkedIn}
                        </span>

                        <label
                          htmlFor=""
                          className=" text-base font-semibold font-epilogue leading-6 text-neutral-400 mb-2"
                        >
                          Portfolio URL
                        </label>
                        <input
                          type="text"
                          name="portfolio"
                          placeholder="Link to your portfolio URL"
                          className=" border-neutral-100 font-normal rounded
                          w-[250px] lg:w-[480px] px-3 py-4 bg-neutral-100 text-base font-epilogue leading-6 text-neutral-400 mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.portfolio}
                        />
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          {" "}
                          {errors.portfolio &&
                            touched.portfolio &&
                            errors.portfolio}
                        </span>

                        <label
                          htmlFor=""
                          className=" text-base font-semibold font-epilogue leading-6 text-neutral-400 mb-2"
                        >
                          Additional Information
                        </label>
                        <textarea
                          type="text"
                          name="additionalInfo"
                          placeholder="Add a cover letter or anything else you want to share"
                          className=" border-neutral-100 font-normal rounded 
                          w-[250px] lg:w-[480px] h-[230px] px-3 py-4 bg-neutral-100 text-base font-['Epilogue'] leading-6 text-neutral-400 mb-5"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.additionalInfo}
                        />
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          {" "}
                          {/* {errors.linkedIn &&
                touched.linkedIn &&
                errors.linkedIn} */}
                        </span>

                        <div className=" block lg:flex justify-between mb-10">
                          <p>Attach your resume</p>
                          <input
                            type=""
                            placeholder="Attach Resume/CV"
                            className="font-['Epilogue'] leading-6 text-base py-4
                             px-4 font-medium border border-dashed border-blue-400"
                          />
                        </div>
                        <button
                          id="button"
                          type="submit"
                          disabled={isSubmitting}
                          className="bg-blue-700 border mb-14 w-[200px] text-white px-0 py-[10px] lg:px-[12px]
                           lg:py-[16px] font-['Epilogue'] font-bold text-base leading-6"
                        >
                          Submit
                        </button>
                      
                      </form>
                    )}
                  </Formik> 
                  <p className=" w-[250px] lg:w-[520px] h-[52px] lg:mx-auto">
                    By sending the request you can confirm that you accept our
                    Terms of Service and Privacy Policy.
                  </p>
                </div>
                </Modal>
          </div>
        </div>
      </section>
      <div className="lg:flex pl-10 lg:pl-28 mt-[32px] block">
        <div className="w-[752px] flex-col justify-start items-start gap-10 inline-flex">
          <h3 class="text-slate-800 text-[20px] lg:text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
            Description
          </h3>
          <p className=" w-[280px] lg:w-[630px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed">
            {filteredItem.description}
          </p>
          <h3 class="text-slate-800 text-[20px] lg:text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">
            Responsibilities
          </h3>
          <ul className=" w-[280px] lg:w-[630px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed">
            <div className="flex gap-2 mb-2.5">
              <img
                src={listicon}
                alt=""
                className="w-[17px] h-[17px] object-contain"
              />
              <li>{filteredItem.responsibilities[0]}</li>
            </div>
            <div className="flex gap-2 mb-2.5">
              <img src={listicon} alt="" className="w-[17px] h-[17px]" />
              <li>{filteredItem.responsibilities[1]}</li>
            </div>
            <div className="flex gap-2 mb-2.5">
              <img src={listicon} alt="" className="w-[17px] h-[17px]" />
              <li>{filteredItem.responsibilities[2]}</li>
            </div>
            <div className="flex gap-2 mb-2.5">
              <img src={listicon} alt="" className="w-[17px] h-[17px]" />
              <li>{filteredItem.responsibilities[3]}</li>
            </div>
          </ul>
          <h3 class="text-slate-800 text-[20px] lg:text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">
            Who You Are
          </h3>
          <ul className=" w-[280px] lg:w-[630px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed">
            <div className="flex gap-2 mb-2.5">
              <img src={listicon} alt="" className="w-[17px] h-[17px]" />
              <li>{filteredItem.whoYouAre[0]}</li>
            </div>
            <div className="flex gap-2 mb-2.5">
              <img src={listicon} alt="" className="w-[17px] h-[17px]" />
              <li>{filteredItem.whoYouAre[1]}</li>
            </div>
            <div className="flex gap-2 mb-2.5">
              <img src={listicon} alt="" className="w-[17px] h-[17px]" />
              <li>{filteredItem.whoYouAre[2]}</li>
            </div>
          </ul>
          <h3 class="text-slate-800 text-[20px] lg:text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">
            Nice-To-Haves
          </h3>
          <ul className=" w-[280px] lg:w-[630px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed">
            <div className="flex gap-2 mb-2.5">
              <img src={listicon} alt="" className="w-[17px] h-[17px]" />
              <li>{filteredItem.niceToHave[0]}</li>
            </div>
            <div className="flex gap-2 mb-2.5">
              <img src={listicon} alt="" className="w-[17px] h-[17px]" />
              <li>{filteredItem.niceToHave[1]}</li>
            </div>
          </ul>
        </div>
        <div className="w-[300px] h-[762px] flex-col justify-start items-start gap-10 inline-flex">
          <h3 class="text-slate-800 text-[20px] lg:text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">
            About this role
          </h3>
          <div className="w-[250px] sm:w-[300px] lg:w-[300px] h-[74px] border border-neutral-100 bg-neutral-100">
            <div className="text-center p-5">
              <span className="text-slate-800 text-sm font-semibold  leading-snug">
                5 applied
              </span>
              <span className="text-black text-sm font-normal  leading-snug">
                {" "}
              </span>
              <span className="text-slate-500 text-sm font-normal  leading-snug">
                of 10 capacity
              </span>
            </div>
            <div className="self-stretch justify-start items-start inline-flex w-[250px] h-[74px] p-4">
              <div className="grow shrink basis-0 h-1.5 bg-emerald-300"></div>
              <div className="grow shrink basis-0 h-1.5 bg-emerald-300"></div>
              <div className="grow shrink basis-0 h-1.5 bg-zinc-200"></div>
              <div className="grow shrink basis-0 h-1.5 bg-zinc-200"></div>
              <div className="grow shrink basis-0 h-1.5 bg-zinc-200"></div>
            </div>
          </div>
          <div className="flex w-[250px] h-[16px] justify-between">
            <p className=" text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed">
              Apply before
            </p>
            <p className=" text-black font-semibold font-['Epilogue'] leading-relaxed">
              {filteredItem.deadline}
            </p>
          </div>
          <div className="flex w-[250px] h-[16px] justify-between">
            <p className=" text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed">
              Job Posted On
            </p>
            <p className="  text-black font-semibold font-['Epilogue'] leading-relaxed">
              {filteredItem.postedAt}
            </p>
          </div>
          <div className="flex w-[250px] h-[16px] justify-between">
            <p className=" text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed">
              Job Type
            </p>
            <p className=" text-black font-semibold font-['Epilogue'] leading-relaxed">
              {filteredItem.jobType}
            </p>
          </div>
          <div className="flex w-[250px] h-[16px] justify-between">
            <p className=" text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed">
              Salary
            </p>
            <p className=" text-black font-semibold font-['Epilogue'] leading-relaxed">
              {filteredItem.salary}
            </p>
          </div>
          <h3 class="text-slate-800 text-[20px] lg:text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">
            Categories
          </h3>
          <div>
            <div className="flex gap-4">
              <p className=" text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed border-cyan-100 bg-cyan-100 rounded-full p-4">
                {filteredItem.categories[0]}
              </p>
              <p className=" text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed border-cyan-100 bg-cyan-100 rounded-full p-4">
                {filteredItem.categories[1]}
              </p>
            </div>
            <h3 class="text-slate-800 text-[20px] lg:text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">
              Required Skills
            </h3>
            <div className="flex gap-4 flex-wrap">
              <p className=" text-blue-500 text-lg font-normal font-['Epilogue'] leading-relaxed border-neutral-100 bg-neutral-100 rounded-full p-4">
                {filteredItem.requiredSkills[0]}
              </p>
              <p className=" text-blue-500 text-lg font-normal font-['Epilogue'] leading-relaxed border-neutral-100 bg-neutral-100 rounded-full p-4">
                {filteredItem.requiredSkills[1]}
              </p>
              <p className=" text-blue-500 text-lg font-normal font-['Epilogue'] leading-relaxed border-neutral-100 bg-neutral-100 rounded-full p-4">
                {filteredItem.requiredSkills[2]}
              </p>
              <p className=" text-blue-500 text-lg font-normal font-['Epilogue'] leading-relaxed border-neutral-100 bg-neutral-100 rounded-full p-4">
                {filteredItem.requiredSkills[3]}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pl-28 pl-10">
        <h3 className="w-[296.48px] text-slate-800 text-[20px] lg:text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
          Perks & Benefits
        </h3>
        <p class="w-[1036.92px] text-slate-600 text-lg mt-4 font-normal font-['Epilogue'] leading-relaxed">
          This job comes with several perks and benefits
        </p>
        <div className="flex flex-wrap gap-8 mt-8">
          <div>
            <img
              className="w-[48px] h-[48px] object-contain"
              src={perk}
              alt="perk"
            />
            <p class="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal pt-4">
              Full Healthcare
            </p>
            <p class="w-[274px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed pt-4">
              We believe in thriving communities and that starts with our team
              being happy and healthy.
            </p>
          </div>
          <div>
            <img
              className="w-[48px] h-[48px] object-contain"
              src={com}
              alt="perk"
            />
            <p class="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal pt-4">
              Unlimited Vacation
            </p>
            <p class="w-[274px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed pt-4">
              We believe you should have a flexible schedule that makes space
              for family, wellness, and fun.
            </p>
          </div>
          <div>
            <img
              className="w-[48px] h-[48px] object-contain"
              src={skill}
              alt="perk"
            />
            <p class="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal pt-4">
              Skill Development
            </p>
            <p class="w-[274px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed pt-4">
              We believe in always learning and leveling up our skills. Whether
              it's a conference or online course.
            </p>
          </div>
          <div>
            <img
              className="w-[48px] h-[48px] object-contain"
              src={team}
              alt="perk"
            />
            <p class="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal pt-4">
              Team Summits
            </p>
            <p class="w-[274px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed pt-4">
              Every 6 months we have a full team summit where we have fun,
              reflect, and plan for the upcoming quarter.
            </p>
          </div>
          <div>
            <img
              className="w-[48px] h-[48px] object-contain"
              src={remote}
              alt="perk"
            />
            <p class="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal pt-4">
              Remote Working
            </p>
            <p class="w-[274px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed pt-4">
              You know how you perform your best. Work from home, coffee shop or
              anywhere when you feel like it.
            </p>
          </div>
          <div>
            <img
              className="w-[48px] h-[48px] object-contain"
              src={commuter}
              alt="perk"
            />
            <p class="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal pt-4">
              Commuter Benefits
            </p>
            <p class="w-[274px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed pt-4">
              We’re grateful for all the time and energy each team member puts
              into getting to work every day.
            </p>
          </div>
          <div className="">
            <img
              className="w-[48px] h-[48px] object-contain"
              src={group}
              alt="perk"
            />
            <p class="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal pt-4">
              We give back.
            </p>
            <p class="w-[274px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed pt-4">
              We anonymously match any donation our employees make (up to $/€
              600) so they can support the organizations they care about
              most—times two.{" "}
            </p>
          </div>
        </div>
      </div>

      <section className="lg:flex  mt-20 justify-between items-center lg:pl-28 block pl-10">
        <div className="lg:w-[577.45px] lg:h-[202px] w-[300px] flex-col justify-start items-start gap-8 inline-flex">
          <div className="flex gap-12">
            <img class="w-2[64px] h-[64px]" src={filteredItem.logo} />
            <div className="lg:w-[351px] lg:h-[78px] sm:w-[100px] sm:h-[40px] flex-col justify-center items-start gap-2 inline-flex">
              <p className="text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                {filteredItem.company}
              </p>
              <p className="text-center text-indigo-600 text-xl font-semibold font-['Epilogue'] leading-relaxed">
                Read more about {filteredItem.company}
              </p>
            </div>
          </div>
          <p className="w-[250px] lg:w-[577.45px] pb-20 text-slate-600 text-xl font-normal font-['Epilogue'] leading-relaxed">
            {filteredItem.description}
          </p>
        </div>
        <div className="flex mr-10">
          <img
            className="w-[316px] h-[217px] rounded object-contain"
            src={imgtwo}
            alt=""
          />
          <div>
            <img
              className="w-[150px] h-[133px] object-contain"
              src={imgone}
              alt=""
            />
            <img
              className="w-[150px] h-[133px] object-contain"
              src={imgthree}
              alt=""
            />
          </div>
        </div>
      </section>

      <div className="p-4 mt-10">
        <div className=" bg-white gap-6">
          <div className="lg:flex justify-between w-[1100px] mt-10 sm:block">
            <p className="text-slate-800 text-2xl pl-28 font-semibold font-['Clash Display Variable'] leading-[28.80px] sm:text-[32px] sm:leading-[38.40px]">
              Similar Jobs
            </p>
            <Link to="/all-jobs">
              <p className="text-center text-indigo-600 text-xl font-semibold font-['Epilogue'] leading-relaxed">
                Show all jobs
              </p>
            </Link>
          </div>

          <div className="lg:w-[680px] lg:grid grid-cols-2 mx-auto lg:gap-10 mt-10 block w-[320px] mb-10">
            {data.slice(0, 8).map((item) => (
              <div
                key={item.id}
                className="w-full px-8 4 p-4 bg-white border border-zinc-200 flex-col mb-10 gap-6 flex sm:flex-row sm:justify-between items-center "
              >
                <div className="sm:flex sm:flex-row sm:gap-10">
                  <div className="">
                    <img
                      src={item.logo}
                      alt=""
                      className="w-12 sm:w-16 h-12 sm:h-16 relative mb-10 mt-2"
                    />
                  </div>
                  <div className="flex-col  justify-start items-start gap-2 flex">
                    <p className="text-slate-800 text-xl font-semibold  leading-normal">
                      {item.title}
                    </p>
                    <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                      <p className="text-slate-500 text-base font-normal  leading-relaxed">
                        {item.company}
                      </p>
                      <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                      <p className="text-slate-500 text-base font-normal  leading-relaxed">
                        {item.location}
                      </p>
                    </div>
                    <div className="justify-start items-start gap-2 inline-flex">
                      <button className=" text-emerald-300 text-sm font-semibold  leading-snug px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                        {item.jobType}
                      </button>
                      <div className="w-px self-stretch bg-zinc-200"></div>
                      <button className=" text-amber-400 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                        {item.categories[0]}
                      </button>
                      <button className=" text-indigo-600 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                        {item.categories[1]}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobDetails;
