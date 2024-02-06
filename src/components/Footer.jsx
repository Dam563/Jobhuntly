import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center px-16 py-11 w-full bg-gray-800 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-stretch mt-4 w-full max-w-[1192px] max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
              <div className="flex flex-col items-stretch w-[34%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-stretch max-md:mt-10">
                  <div className="flex gap-2 items-stretch self-start text-2xl font-bold tracking-tight leading-9 text-white whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6472b373f6623aad0350794d6d6dad702667641bf374c146af38feed01a19bc?"
                      className="object-center w-8 aspect-square"
                    />
                    <div className="grow">JobHuntly</div>
                  </div>
                  <div className="mt-10 text-base leading-7 text-zinc-200">
                    Great platform for the job seeker that passionate about
                    startups. Find your dream job easier.
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-[66%] max-md:ml-0 max-md:w-full">
                <div className="grow max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                    <div className="flex flex-col items-stretch w-1/5 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-stretch text-base leading-6 whitespace-nowrap text-zinc-200 max-md:mt-10">
                        <div className="text-lg font-semibold text-white">
                          About
                        </div>
                        <div className="mt-7">Companies</div>
                        <div className="mt-4">Pricing</div>
                        <div className="mt-4">Terms</div>
                        <div className="mt-4">Advice</div>
                        <div className="mt-4">Privacy Policy</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch ml-5 w-[18%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col items-stretch text-base leading-6 whitespace-nowrap text-zinc-200 max-md:mt-10">
                        <div className="text-lg font-semibold text-white">
                          Resources
                        </div>
                        <div className="mt-8">Help Docs</div>
                        <div className="mt-8">Guide</div>
                        <div className="mt-9">Updates</div>
                        <div className="mt-9">Contact Us</div>
                      </div>
                    </div>
                    <div className="flex flex-col items-stretch ml-5 w-[62%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col items-stretch text-base leading-6 max-md:mt-10">
                        <div className="text-lg font-semibold text-white">
                          Get job notifications
                        </div>
                        <div className="mt-7 leading-7 text-zinc-200">
                          The latest job news, articles, sent to your inbox
                          weekly.
                        </div>
                        <div className="flex gap-2 justify-between items-stretch mt-11 whitespace-nowrap max-md:mt-10">
                          <input 
                          placeholder='Email Address'
                          className="grow justify-center items-start py-3 pr-16 pl-4 text-gray-400 bg-white border border-solid border-[color:var(--Neutrals-20,#D6DDEB)] max-md:pr-5" />
                          
                          <button className="grow justify-center items-stretch px-6 py-3 font-bold text-center text-white bg-indigo-600 max-md:px-5">
                            Subscribe
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between items-stretch mt-32 text-base font-medium leading-6 text-white max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex-auto my-auto">
              2021 @ JobHuntly. All rights reserved.
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddac5565f16886e1ffde1d96d549eb0440cc328883ea806c8136d1709475ad8d?"
              className="object-center w-64 max-w-full aspect-[7.69]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
