import React from 'react'
import Filter from './Filter';

const FilterComponent = () => {
    const employmentTypes = ["Full Time", "Part Time", "Internship", "Contract"];
    const categories = ["Design", "Sales", "Marketing", "Business", "Human Resource", "Finance", "Engineering", "Technology"];
    const jobLevels = ["Entry Level", "Mid Level", "Senior Level", "Director", "VP or Above"];
    const salaryRanges = ["$700 - $1000", "$100 - $1500", "$1500 - $2000", "$3000 or above"];
  
    return (
      <div>
        <Filter
          employmentTypes={employmentTypes}
          categories={categories}
          jobLevels={jobLevels}
          salaryRanges={salaryRanges}
        />
      </div>
    )
}

export default FilterComponent

