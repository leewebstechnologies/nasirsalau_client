import { useState } from "react";
import "./consult.css";
import { client } from "../../client";

const Consult = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    matter: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line
  const { name, phone, matter, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name === "" ||
      formData.phone === "" ||
      formData.matter === "" ||
      formData.message === ""
    ) {
      setError("Empty field(s) ");
      return;
    }
    setLoading(true);

    const consult = {
      _type: "consult",
      name: formData.name,
      phone: formData.phone,
      matter: formData.matter,
      message: formData.message,
    };

    client.create(consult).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
      e.preventDefault();
    });
  };

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
          {!isFormSubmitted ? (
            <form className="consultation-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="col-sm-4">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={handleChangeInput}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-4">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    value={phone}
                    onChange={handleChangeInput}
                    placeholder="Phone"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-4">
                  <select
                    className="selectpicker"
                    data-live-search="true"
                    data-width="100%"
                    name="matter"
                    value={matter}
                    onChange={handleChangeInput}
                    required
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
                    value={message}
                    onChange={handleChangeInput}
                    name="message"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-4 col-sm-offset-4">
                <button
                  id="cnfsubmit"
                  type="submit"
                  className="btn-default btn-block btn-cn"
                  onClick={handleSubmit}
                >
                  {!loading ? "Get Consultation" : "Sending..."}
                </button>
                {error !== "" && <p>{error}</p>}
              </div>
            </form>
          ) : (
            <div>
              <h3 className="head-text">Thank you for consulting us!</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Consult;
