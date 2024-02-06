import React, { useState } from "react";
import logo from "../assets/2659b20b00bfeeb5e7c1ab922273a0b3.jpg";
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
// import terraform from "../assets/terraform.png";
// import dropbox from "../assets/dropbox.png";
// import nomad from "../assets/nomad.png";

const JobDetails = () => {
  const { id } = useParams();

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
    <div className=" ">
      <header className="">
        <div className="flex justify-between border pl-24">
          <div className="flex justify-between w-[382px] h-[58px] mt-5">
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
      <section className="bg-neutral-100 pl-24 pt-5 pb-5">
        <div className="ml-28 flex mt-5 mb-5">
          <p className="text-gray-800 text-opacity-50 text-xl font-normal font-['Epilogue'] leading-relaxed">
            Home / Companies / Nomad /
          </p>
          <h3 className="text-gray-800 text-xl font-normal font-['Epilogue'] leading-relaxed">
            {filteredItem.title}
          </h3>
        </div>

        <div className="w-[1150px] h-[139.24px] p-5 mb-16 bg-white border border-zinc-200 justify-between items-center inline-flex">
          <div className="w-[463px] h-[91.24px] justify-center items-center gap-8 inline-flex">
            <img
              className="w-[91px] h-[91px] object-contain"
              src={filteredItem.logo}
            />
            <div className="w-[351px] h-[78px] flex-col justify-center items-start gap-2 inline-flex">
              <p className="text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                {filteredItem.title}
              </p>
              <div className="justify-center items-center gap-2 inline-flex">
                <p class="text-slate-600 text-xl font-normal font-['Epilogue'] leading-loose">
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
          <div className="w-64 h-[58.06px] justify-center items-center gap-[30px] inline-flex">
            <img
              className="w-8 h-[33.18px] object-contain"
              src={icon}
              alt="icon"
            />
            <button className="w-[164px] h-[57px] px-14 py-3.5 bg-indigo-600 justify-center items-center gap-2.5 text-center text-white text-lg font-bold font-['Epilogue'] leading-[28.80px]">
              Apply
            </button>
          </div>
        </div>
      </section>
      <div className="flex pl-28 mt-[32px]">
        <div className="w-[752px] flex-col justify-start items-start gap-10 inline-flex">
          <h3 class="text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
            Description
          </h3>
          <p className="w-[630px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed">
            {filteredItem.description}
          </p>
          <h3 class="text-slate-800 text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">
            Responsibilities
          </h3>
          <ul className="w-[630px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed">
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
          <h3 class="text-slate-800 text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">
            Who You Are
          </h3>
          <ul className="w-[630px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed">
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
          <h3 class="text-slate-800 text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">
            Nice-To-Haves
          </h3>
          <ul className="w-[630px] text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed">
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
          <h3 class="text-slate-800 text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">
            About this role
          </h3>
          <div className="w-[300px] h-[74px] border border-neutral-100 bg-neutral-100">
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
          <h3 class="text-slate-800 text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">
            Categories
          </h3>
          <div className="flex gap-4">
            <p className=" text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed border-cyan-100 bg-cyan-100 rounded-full p-4">
              {filteredItem.categories[0]}
            </p>
            <p className=" text-slate-600 text-lg font-normal font-['Epilogue'] leading-relaxed border-cyan-100 bg-cyan-100 rounded-full p-4">
              {filteredItem.categories[1]}
            </p>
          </div>
          <h3 class="text-slate-800 text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">
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
      <div className="pl-28">
        <h3 className="w-[296.48px] text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
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

      <section className="flex  mt-20 justify-between items-center pl-28">
        <div className="w-[577.45px] h-[202px] flex-col justify-start items-start gap-8 inline-flex">
          <div className="flex gap-12">
            <img class="w-2[64px] h-[64px]" src={filteredItem.logo} />
            <div className="w-[351px] h-[78px] flex-col justify-center items-start gap-2 inline-flex">
              <p className="text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
                {filteredItem.company}
              </p>
              <p className="text-center text-indigo-600 text-xl font-semibold font-['Epilogue'] leading-relaxed">
                Read more about {filteredItem.company}
              </p>
            </div>
          </div>
          <p className="w-[577.45px] text-slate-600 text-xl font-normal font-['Epilogue'] leading-relaxed">
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
          <div className="flex justify-between w-[1100px] mt-10">
            <p className="text-slate-800 text-2xl pl-28 font-semibold font-['Clash Display Variable'] leading-[28.80px] sm:text-[32px] sm:leading-[38.40px]">
              Similar Jobs
            </p>
            <Link to="/all-jobs">
            <p className="text-center text-indigo-600 text-xl font-semibold font-['Epilogue'] leading-relaxed">
              Show all jobs
            </p>
            </Link>
          </div>

          <div className="w-[680px]  grid grid-cols-2 mx-auto gap-10 mt-10 mb-10">
            {data.slice(0, 8).map((item) => (
              <div
                key={item.id}
                className="w-full  sm:px-8 p-4 bg-white border border-zinc-200 flex-col justify-start items-start gap-6 flex sm:flex-row sm:justify-between sm:items-center "
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
