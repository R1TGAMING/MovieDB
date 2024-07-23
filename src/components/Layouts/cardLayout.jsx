import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import CardFrag from "../Fragments/cardFrag";

export default function CardLayout(props) {
  const {image, text, title, index} = props;
  
  return (
      <li key = {index}>
    <div className="card-group">
  <div className="card">
    <img className="card-img-top img-thumbnail"      src={"https://image.tmdb.org/t/p/original" + image} alt={index}/>
    <div className="card-body">
      <CardFrag textChild = {text} titleChild = {title}/>
    </div>
  </div>
    </div>
      </li> 
  )
}