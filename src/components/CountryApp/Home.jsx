import React, { useEffect, useState } from 'react'
import Countries from './Countries'
import Search from './Search'


const url = "https://restcountries.com/v3.1/all"


const Home = () => {


    const [isLoading, setIsLoading]= useState(true)
    const [error, setError]= useState(null)
    const [countries, setCountries] = useState([])
    const [filterCountries, setFilterCountries] = useState(countries)


    const fetchData = async(url) => {
        setIsLoading(true);
        try{
            const response = await fetch(url)
            const data = await response.json()
            setCountries(data)
            setFilterCountries(data)
            setIsLoading(false)
            setError(null)
        }
        catch(error){
            setIsLoading(false)
            setError(error.message)
        }
    }

    useEffect(()=>{
        fetchData(url)
    },[])

    const handleRemove =(name)=>{
        const filtered = filterCountries.filter((country) => country.name.common !== name)
        setFilterCountries(filtered)
        
    }

    const handleSearch =(searchValue)=>{
        let value = searchValue.toLowerCase()
        const countryNew = countries.filter((country)=>{
            const countryName = country.name.common.toLowerCase()
            return countryName.startsWith(value)
        })
        setFilterCountries(countryNew)
    }

  return (
    <div className="text-center px-3 sm:px-4 md:px-10 lg:px-20 mx-auto">
      <h1 className='text-2xl sm:text-3xl md:text-4xl font-serif pt-10 pb-6'>Find Your Country Here</h1>
      <Search onSearch={handleSearch} />
      {isLoading && <p className='text-gray-700'>Loading...</p>}
      {error && <p className="text-red-500 tracking-wider">{error+" :)"}</p>}

    <Countries countries={filterCountries} onRemove={handleRemove} />

    </div>
  )
}

export default Home






















