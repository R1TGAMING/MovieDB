import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import CardFrag from "../Fragments/cardFrag";

export default function CardLayout(props) {
  const {image, text, title, index} = props;
  
  return (
    <>
      <li key = {index}>
    <div className="card-group">
  <div className="card">
    <img className="card-img-top" 
      srcSet= "http://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg"
      src="http://image.tmdb.org/t/p/w500/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg" alt={index}/>
    <div className="card-body">
      <CardFrag textChild = {text} titleChild = {title}/>
    </div>
  </div>
    </div>
      </li>
    </>
  )
}