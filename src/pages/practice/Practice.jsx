import "./practice.css";

const Practice = () => {
  return (
    <>
      <section id="practice" className="practice">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <p className="section-subtitle">Check out our</p>
                <h2 className="section-title">Practice Areas</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="practice-box">
                <img
                  className="img-responsive img-full"
                  src="assets/images/Prac-1.jpg"
                  alt="practice areas"
                />
                <div className="overlay">
                  <div className="c-table">
                    <div className="ct-cell">
                      <span className="paractice-icon ion-heart-broken" />
                      <h3 className="practice-title">Medical malpractice</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="practice-box">
                <img
                  className="img-responsive img-full"
                  src="assets/images/Prac-2.jpg"
                  alt="practice areas"
                />
                <div className="overlay">
                  <div className="c-table">
                    <div className="ct-cell">
                      <span className="paractice-icon ion-ios-people" />
                      <h3 className="practice-title">Medical malpractice</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="practice-box">
                <img
                  className="img-responsive img-full"
                  src="assets/images/Prac-3.jpg"
                  alt="practice areas"
                />
                <div className="overlay">
                  <div className="c-table">
                    <div className="ct-cell">
                      <span className="paractice-icon ion-android-car" />
                      <h3 className="practice-title">Medical malpractice</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="practice-box">
                <img
                  className="img-responsive img-full"
                  src="assets/images/Prac-4.jpg"
                  alt="practice areas"
                />
                <div className="overlay">
                  <div className="c-table">
                    <div className="ct-cell">
                      <span className="paractice-icon ion-ios-home" />
                      <h3 className="practice-title">Medical malpractice</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="practice-box">
                <img
                  className="img-responsive img-full"
                  src="assets/images/Prac-5.jpg"
                  alt="practice areas"
                />
                <div className="overlay">
                  <div className="c-table">
                    <div className="ct-cell">
                      <span className="paractice-icon ion-person" />
                      <h3 className="practice-title">Medical malpractice</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="practice-box">
                <img
                  className="img-responsive img-full"
                  src="assets/images/Prac-6.jpg"
                  alt="practice areas"
                />
                <div className="overlay">
                  <div className="c-table">
                    <div className="ct-cell">
                      <span className="paractice-icon ion-social-usd" />
                      <h3 className="practice-title">Medical malpractice</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="consultation" className="consultation">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <p className="section-subtitle">
                  Fill out the form below to recieve a free and confidential
                  intial consultation.
                </p>
                <h2 className="section-title">REQUEST A FREE CONSULTATION</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <form id="consultation-form" className="consultation-form">
              <div className="form-group">
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-4">
                  <select
                    className="selectpicker"
                    data-live-search="true"
                    data-width="100%"
                  >
                    <option data-tokens="family">Family Law</option>
                    <option data-tokens="business">Business Law</option>
                    <option data-tokens="civil litigation">
                      Civil Litigation
                    </option>
                    <option data-tokens="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <textarea
                    className="form-control"
                    rows={8}
                    placeholder="Case Description..."
                    id="case-des"
                    name="case-des"
                    defaultValue={""}
                  />
                  {/* <input type="text" class="form-control" id="case-des" placeholder="Case Description..."> */}
                </div>
              </div>
              <div className="col-sm-4 col-sm-offset-4">
                <button
                  id="cnfsubmit"
                  type="submit"
                  className="btn btn-default btn-block btn-cn"
                >
                  Get Consultation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Practice;
