import {useState, useEffect} from "react"
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";


import CardLayout from '../Layouts/cardLayout'

export default function Main() {
  // Create a state variable for the data
  const [data, setData] = useState([])
  console.log(data)
  // Get the api key from env
  const api_key = process.env.API_KEY
  
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
    <ul>
      {data.map((item, index) => {
      return (
        <>
          
        <CardLayout title = {item.title} image = {item.poster_path} index = {index} text = {item.overview}/>
          
        </>
      )
      })}
</ul>
  );
}