import React from 'react'


import {v4 as uuidv4} from 'uuid'
import Country from './Country'

const Countries = (props) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
        {props.countries.map((country)=>{
            const newCountry = {country, id: uuidv4()}
            return <Country {...newCountry} key={newCountry.id} onRemove={props.onRemove}/>
        })}
    </section>
  )
}

export default Countries



















