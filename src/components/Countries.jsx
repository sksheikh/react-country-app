import React from 'react'
import {v4 as uuid4} from 'uuid'

import Country from './Country';
import style from './countries.module.css'

export default function Countries(props) {
  const {countries} = props;
  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name)
  }
  return (
    <section className={style.countries}>
      {countries.map((country) => {
        const countryNew = {country, id: uuid4()}
        return <Country {...countryNew} key={countryNew.id}
          onRemoveCountry={handleRemoveCountry}/>
      })}
    </section>
  )
}

