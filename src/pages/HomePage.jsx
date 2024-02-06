import React from "react";
import Footer from "../components/Footer";
import Desktop from "../assets/Desktop.svg";
import { Link } from "react-router-dom";
import data from "../data/Jobs.json";

const HomePage = () => {
  return (
    <div className="flex flex-col items-stretch bg-white">
      <div className="flex flex-col items-stretch w-full bg-slate-50 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-stretch w-full max-w-[1192px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between items-stretch max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2 items-stretch py-0.5 my-auto">
                <div className="flex overflow-hidden relative flex-col justify-center items-center w-8 aspect-square">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f26f819edd3b5c5440add75e8aab940e73afa891856df15651d3bb1e907f0e29?"
                    className="object-cover object-center absolute inset-0 size-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8bf0f9e49321ef0654922a7a16bc189784100058b5e0633a220c4012e2deed8?"
                    className="object-center w-full aspect-square"
                    alt=""
                  />
                </div>
                <div className="grow text-2xl font-bold tracking-tight leading-9 text-slate-800">
                  JobHuntly
                </div>
              </div>
              <div className="flex gap-4 justify-between items-stretch pt-6 text-base font-medium leading-6 whitespace-nowrap text-slate-600">
                <Link to={'/all-jobs'}>
                <p className="grow items-stretch pb-7">Find Jobs</p>
                </Link>
                <p className="grow items-stretch pb-7">Browse Companies</p>
              </div>
            </div>
            <div className="flex gap-5 justify-between items-stretch py-3.5 pl-6 text-base font-bold leading-6 text-center whitespace-nowrap">
              <button className="my-auto text-indigo-600">Login</button>
              <button className="justify-center items-stretch px-6 py-3 text-white bg-indigo-600 max-md:px-5">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        <div className="self-center mt-20 w-full max-w-[1315px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
            <div className="flex flex-col items-stretch w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-stretch px-5 pt-4 text-base leading-6 max-md:mt-10 max-md:max-w-full">
                <div className="text-7xl font-semibold text-sky-400 leading-[79px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                  <span className="text-slate-800">Discover more than</span>{" "}
                  <span className="text-sky-400">5000+ Jobs</span>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/977c5f1dccb921a1bfdd2bb6104d63a9a2a4d9139b376c40b7962b80dc0c6bf1?"
                  className="object-center self-center mt-7 aspect-[16.67] w-[629px] max-md:max-w-full"
                />
                <div className="mt-6 text-xl leading-8 text-slate-600 max-md:max-w-full font--[Manrope]">
                  Great platform for the job seeker that searching for new
                  career heights and passionate about startups.
                </div>
                <div className="flex gap-0 justify-center items-stretch py-4 pl-4 mt-6 bg-white shadow-md max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-4 justify-between items-stretch px-4 text-slate-500">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f7d2d193db6251ea4757715e35a2f044527b213a4c7437134260b59ad135df2?"
                      className="object-center justify-center items-center my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col flex-1 justify-between items-stretch pt-5">
                      <div className="">Job title or keyword</div>
                      <div className="flex flex-col shrink-0 mt-2.5 h-px bg-zinc-200" />
                    </div>
                  </div>
                  <div className="flex gap-4 justify-between items-stretch pr-6 pl-2 text-slate-800 max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3611dfed57339ce8e7fb4603be9b4c1c4474aa341b5a3b76d9cbcfcd5e74bcf5?"
                      className="object-center justify-center items-center my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col flex-1 justify-between items-stretch pt-5">
                      <div className="flex gap-5 justify-between items-stretch">
                        <p className="flex-auto font--[Manrope]">Florence, Italy</p>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ceaea7452a10fb9ba305e14e244e5f9f93d5d70bd93dfa98ef7c51aae884a18?"
                          className="object-center justify-center items-center my-auto w-4 aspect-square"
                        />
                      </div>
                      <div className="flex flex-col shrink-0 mt-2.5 h-px bg-zinc-200" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center w-0.5 bg-indigo-600 h-[57px]" />
                </div>
                <div className="mt-4 text-gray-800 max-md:max-w-full font--[Manrope]">
                  Popular :{" "}
                  <span className="font-medium font--[Manrope]">
                    UI Designer, UX Researcher, Android, Admin
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch ml-5 w-[46%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1c3f2f0e3dbc3aec9dd0c9adf50f3039288a53a20752035117cd42f23dd3e89?"
                className="object-center grow mt-96 w-full aspect-[2.33] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-stretch w-full max-w-[1194px] max-md:max-w-full">
          <div className="text-lg leading-7 text-gray-800 max-md:max-w-full">
            Companies we helped grow
          </div>
          <div className="flex gap-5 justify-between items-start mt-8 max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cabeaf3d06dd7f915839d9d6cb6fc1ae0488178dcb9f3a1150a3fba5c43b2828?"
              className="object-center self-stretch max-w-full aspect-[3.85] w-[154px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c69d0861ef1f5cc813a7c0546566a34b53a30d2b011510cc1831fcb51a4f3e81?"
              className="object-center aspect-[2.56] w-[82px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a82d0ca1d227e92c5c7f8d575eb8c8c5ba61e22bdff7d29aa5a7fab5138618c1?"
              className="object-center max-w-full aspect-[7.69] w-[183px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d98bc47c9fa04fb3291e1dbda4c2ba029d40ab1d13e3913d57d18a9cdb61f3?"
              className="object-center max-w-full aspect-[4.17] w-[116px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b05b9a1a9363f1a3b9842be50df994608c934dd3de5128341186f524ae00ee57?"
              className="object-center max-w-full aspect-[3.33] w-[108px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end items-center px-16 pt-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-stretch mt-6 w-full max-w-[1192px] max-md:max-w-full">
          <div className="flex gap-5 justify-between items-stretch w-full font-semibold max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-5xl text-black-400 leading-[52.8px] max-md:max-w-full max-md:text-4xl">
              Explore by <span className="text-sky-400">category</span>
            </div>
            <div className="flex gap-4 justify-end items-stretch self-end mt-7 text-base leading-6 text-center text-indigo-600">
              <Link to="/all-jobs">
              <p className="flex-auto">Show all jobs</p>
              </Link>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d09976ba153d5f9151e87ea7b95f986fd2286bbc2ee738bca2f229d18eb4531?"
                className="object-center justify-center items-center self-start w-6 aspect-square"
              />
            </div>
          </div>
        
        </div>
      </div>
      <div className=" grid grid-cols-4 gap-10 ">
      {data.slice(0, 8).map((item, index) => 
          <div className="mt-8">
                <div 
                key={index}
                className=" w-{30px} mx-auto gap-10 p-8  bg-white border border-solid border-[color:var(--Neutrals-20,#D6DDEB)] max-md:px-5 max-md:mt-8">
                  <img
                    loading="lazy"
                    // src={item.logo}
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b06cae18e90c02ffde152882439e6366cc3ee48f814452c3761e0125765374b?"
                    className="object-center w-12 aspect-square"
                  />
                  <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                    {item.categories}
                  </div>
                  <div className="flex gap-4 justify-between items-stretch px-px mt-3 text-lg leading-7 text-slate-500">
                    <p className="grow">{item.jobsavailaible} jobs available</p>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6a70f1233c4d17efac61197dd66bc73a81bb45f71a6de5469b076c9c7a664a6?"
                      className="object-center justify-center items-center my-auto w-6 aspect-square"
                    />
                  </div>
                </div>
              
          </div>
          )}
          </div>
             <img src={Desktop} alt="" className="object-contain"/>
      <div className="flex flex-col items-center px-16 pb-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-stretch mb-6 w-full max-w-[1192px] max-md:max-w-full">
          <div className="flex gap-5 justify-between items-stretch w-full font-semibold max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-5xl text-sky-400 leading-[52.8px] max-md:text-4xl">
              Featured <span className="text-sky-400">jobs</span>
            </div>
            <div className="flex gap-4 justify-end items-stretch self-end mt-7 text-base leading-6 text-center text-indigo-600">
              <div className="flex-auto">Show all jobs</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/033f377da370568b64111805c91f7aa1008af66fc9cde9446584af54e8de2c21?"
                className="object-center justify-center items-center self-start w-6 aspect-square"
              />
            </div>
          </div>
  
        </div>
      </div>
      <div className="w-[680px]  grid grid-cols-2 mx-auto gap-10 mt-10 mb-20">
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
     
      <Footer/>
    </div>
  );
}

export default HomePage;
