import React, { useState } from 'react'
import Filter from '../components/Filter'
import JobLists from '../components/JobLists'
import Footer from '../components/Footer'

const LandingPage = () => {
  //using landingpage.js to share props between filter and joblist since they have the same parent
  const [filterValue, setFilterValue] = useState({ categories: '', salary: '' });

  const handleFilterChange = (newValue) => {
    setFilterValue(newValue);
  };
  console.log('LP',filterValue)

  return (
    <>
    <div className='block w-full sm:flex gap-10  px-[] pt-[24px] pb-[32px] sm:px-[124px] sm:pt-[72px]'>
        <div className='lg:w-[234px]'>
      <Filter  onFilterChange={handleFilterChange}/>
        </div>
        <div className='w-full mx-auto'>
      <JobLists filterValue={filterValue} />
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default LandingPage
