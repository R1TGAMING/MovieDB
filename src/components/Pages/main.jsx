import {useState, useEffect} from "react"
import axios from 'axios'

export default function Main() {
  // Create a state variable for the data
  const [data, setData] = useState([])

  // Get the api key from env
  const api_key = proccess.env.API_KEY
  
  useEffect(() => {
    //Get the API data and set it to the state
axios.get("https://api.themoviedb.org/3/movie/popular?api_key=" + api_key)
    .then(res => {
      setData(res.data.results)
    })
    .catch(err => {
      console.log(err)
    })
    
  }, [])
  
  return (
    <main>
      {data.map((item) => {
      return (
        <p>{item.title}</p>
      )
      })}
      
    </main>
  );
}