import React from 'react'
import {v4 as uuid4} from 'uuid'
import Country from './country';

export default function Countries(props) {
  const {countries} = props;
  console.log(countries) 
  return (
    <section>
      {countries.map((country) => {
        const countryNew = {country, id: uuid4()}
        return <Country {...countryNew}/>
      })}
    </section>
  )
}

