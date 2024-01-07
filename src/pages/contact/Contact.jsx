import "./contact.css";
import { useState } from "react";
import { client } from "../../client";

const Contact = () => {
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line
  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.message === ""
    ) {
      setError("Empty field(s) ");
      return;
    }
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
      e.preventDefault();
    });
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <p className="section-subtitle">You may want to</p>
                <h2 className="section-title">Contact us</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <img src="assets/images/logo.png" alt="logo" className="logo" />
              <p>
                The Firm (Nasir Salau & Co.) was established on 1st January,
                1996 and registered with the corporate Affairs Commission with
                Certificate No. LAZ 037964 with a vision to becoming one of
                Nigeria’s foremost corporate legal practice firms in terms of
                quality of practice and clientele. It has its registered office
                address at No.
              </p>
              <ul>
                <li>
                  <span className="ion-location" />
                  78A, Lewis Street, Lagos Island, Lagos.
                </li>
                <li>
                  <span className="ion-android-call" />
                  +234 803 301 6444
                </li>
                <li>
                  <span className="ion-paper-airplane" />
                  nasirsalau@gmail.com
                </li>
              </ul>
            </div>
            <div className="col-sm-6">
              {!isFormSubmitted ? (
                <form id="contactForm" method="post" onSubmit={handleSubmit}>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="ion-person" />
                    </span>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Name"
                      value={username}
                      onChange={handleChangeInput}
                      name="username"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="ion-email" />
                    </span>
                    <input
                      className="form-control"
                      name="email"
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={handleChangeInput}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <span className="input-group-addon custom-addon">
                      <i className="ion-chatbubbles" />
                    </span>
                    <textarea
                      className="form-control"
                      rows={8}
                      placeholder="Write Message"
                      name="message"
                      value={message}
                      onChange={handleChangeInput}
                      defaultValue={""}
                    />
                  </div>
                  <button
                    id="cfsubmit"
                    type="submit"
                    className="btn-default btn-block btn-cn"
                    onClick={handleSubmit}
                  >
                    {!loading ? "Send your Message" : "Sending..."}
                  </button>
                  {error !== "" && <p>{error}</p>}
                </form>
              ) : (
                <div>
                  <h3 className="head-text">Thank you for getting in touch!</h3>
                </div>
              )}

              <div id="contactFormResponse" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
