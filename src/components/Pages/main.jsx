import {useState, useEffect} from "react"
import "dotenv/config"



export default function Main() {
  const [image, setImage] = useState("https://img.freepik.com/free-vector/youtube-player-icon-with-flat-design_23-2147837753.jpg?size=338&ext=jpg")
  console.log(process.env.REACT_APP_API_KEY)
  
  return (
    
    <main>
      <img src = {image} onClick = {() => setImage("https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-1024.png")} />
      
      
    </main>
  );
}