import React, { useEffect, useState } from 'react'


const Country = (props) => {

    const {name, flags, area, population , capital} = props.country

    const handleClick =(name)=>{
      props.onRemove(name)
    }
     
  return (
    <article className="bg-black bg-gradient-to-r from-gray-800 to-slate-600 p-6 flex items-center flex-col gap-2 rounded-md  shadow-md text-gray-200 relative pb-20">
      <h3 className='text-gray-100 text-xl font-semibold pb-2'><span className='font-light'>Name: </span>{name.common}</h3>
      <img src={flags.png} alt={name.common} className='w-[250px] h-[130px]'/>
      <p className='text-base font-medium'><span className='font-light'>Capital:</span> {capital}</p>
      <p className='text-base font-medium'><span className='font-light'>Area:</span> {area}</p>
      <p className='text-base font-medium'><span className='font-light'>population:</span> {population}</p>
      <div className='absolute left-[50%] translate-x-[-50%] bottom-5'>
      <button className="text-center border border-red-600 px-2 py-1 text-red-600 rounded-md hover:bg-red-800  hover:text-white transition-all duration-300 text-sm" onClick={()=>{handleClick(name.common)}}>Delete</button>
      </div>
    </article>
  )
}

export default Country
























