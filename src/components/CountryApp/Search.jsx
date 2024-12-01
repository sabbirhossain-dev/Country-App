import React, { useEffect, useState } from 'react'

const Search = (props) => {



    const [searchValue, setSearchValue] = useState("")

    const handleChange =(e)=>{
        setSearchValue(e.target.value)
    }

    useEffect(()=>{
        props.onSearch(searchValue)
    },[searchValue])


  return (
    <div>
      <input type='text' placeholder='Search' onChange={handleChange} value={searchValue} className='border-gray-600 border px-3 py-2 rounded-md mb-10 w-72 outline-none'/>
    </div>
  )
}

export default Search
