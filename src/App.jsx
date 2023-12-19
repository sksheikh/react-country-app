import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries';
import Search from './components/Search';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries,setCountries] = useState([]);
  const [filteredCountries, setFilterdCountries] = useState(countries);

  const url = ' https://restcountries.com/v3.1/all';

  const fetchData = async(url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilterdCountries(data)
      setIsLoading(false);
      setError(null);

    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
   
  }

  useEffect(() => {
    fetchData(url)
  },[])

  const handleRemoveCountry = (name) => {
    const filter = filteredCountries.filter((country) => 
      country.name.common !== name
    );

    setFilterdCountries(filter);
  }

  const handleSearch = (searchValue) => {
    if(searchValue != ''){
      // alert('hlw')
      const value = searchValue.toLowerCase();
      const newCountries = filteredCountries.filter((country) => {
          const newCountry = country.name.common.toLowerCase();
          return newCountry.startsWith(value);
      });
      setFilterdCountries(newCountries);
    }else{

      setFilterdCountries(countries)
    }

  }

  return (
    <>
      <h1>Country App</h1>
      <Search onSearch={handleSearch}/>
      { isLoading && <h2>Loading...</h2>}
      { error && <h4>{error.message}</h4>}
      { countries && <Countries countries={filteredCountries} 
        onRemoveCountry={handleRemoveCountry}/>}
    </>
  )
}

export default App
