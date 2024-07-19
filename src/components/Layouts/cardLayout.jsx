import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import CardFrag from "../Fragments/cardFrag";

export default function CardLayout(props) {
  const {image, text, title} = props;
  
  return (
    <>
    <div className="card-group">
  <div className="card">
    <img className="card-img-top" src={"http://image.tmdb.org/t/p/w500/" + image} alt="Card image cap" />
    <div className="card-body">
      <CardFrag textChild = {text} titleChild = {title}/>
    </div>
  </div>
    </div>
    </>
  )
}