import {useState, useEffect} from "react"
import axios from 'axios'

export default function Main() {
  const [data, setData] = useState([])

  
  useEffect(() => {
    const api_key = process.env.API_KEY   
     axios.get("https://api.themoviedb.org/3/movie/popular?api_key=" + api_key).then(response => {
  console.log(response.data)
  setData(response)
}, [])
    
  })
  console.log(data)
  return (
    <main>
      
      
    </main>
  );
}