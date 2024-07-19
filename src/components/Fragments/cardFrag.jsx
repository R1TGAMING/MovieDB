
export default function CardFrag(props) {
  const {titleChild, textChild} = props;
  
  return (
    <>
    <h5 className="card-title">{titleChild}</h5>
      <p className="card-text">{textChild}</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </>
  )
}