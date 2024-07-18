import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import MainFrag from "../Fragments/mainFrag";

export default function MainLayout(props) {
  return (
    <section className="bsb-hero-5 px-3 bsb-overlay bg-dark" style={{backgroundImage : 'url("./assets/img/hero-img-1.webp")'}}>
  <div className="container">
    <div className="row justify-content-md-center align-items-center">
      <div className="col-12 col-md-11 col-lg-9 col-xl-8 col-xxl-7">
        <h2 className="display-1 text-white text-center fw-bold mb-4">Dream of Success</h2>
        <p className="lead text-white text-center mb-5 d-flex justify-content-sm-center">
          <span className="col-12 col-sm-10 col-md-8 col-xxl-7">There are three ways to ultimate success: The first way is to be kind. The second way is to be kind. The third way is to be kind.</span>
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" className="btn bsb-btn-2xl btn-outline-light">Free Consultation</button>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}