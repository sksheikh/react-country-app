import React, { useEffect, useState } from 'react'

export default function Search(props) {
    const [searchText, setSearchtext]= useState('');
    const handleChange = (e) => {
        setSearchtext(e.target.value);
    }

    useEffect(() => {
        props.onSearch(searchText)
    },[searchText])



  return (
    <div>
      <input type="text" placeholder='Search country...'
        value={searchText} 
        onChange={handleChange}/>
    </div>
  )
}
