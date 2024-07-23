import "./static/figureCSS.css"

export default function FigureLayout(props) {
  const {image, text, title, index} = props;
  
  return (
    <>
    <li key = {index}>
      <figure className="figure bottom-0 position-relative">
  <img src={"https://image.tmdb.org/t/p/original" + image} className="figure-img img-fluid rounded" alt={index} />
  <figcaption className="figure-caption">{title}</figcaption>
</figure>
    </li>
    </>
  )
}