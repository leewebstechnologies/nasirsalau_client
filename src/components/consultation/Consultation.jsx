import "./consultation.css";

const Consultation = () => {
  return (
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
                className="btn-default btn-block btn-cn"
              >
                Get Consultation
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
