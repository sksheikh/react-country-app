import { useEffect, useState } from 'react'
import './App.css'
import Countries from './components/Countries';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries,setCountries] = useState([]);

  const url = ' https://restcountries.com/v3.1/all';

  const fetchData = async(url) => {
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
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

  return (
    <>
      <h1>Country App</h1>
      { isLoading && <h2>Loading...</h2>}
      { error && <h4>{error.message}</h4>}
      { countries && <Countries countries={countries} />}
    </>
  )
}

export default App
