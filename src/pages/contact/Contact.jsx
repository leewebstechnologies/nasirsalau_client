import "./contact.css";

const Contact = () => {
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
              <form
                id="contactForm"
                action="php/contact_form.php"
                method="post"
              >
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="ion-person" />
                  </span>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Name"
                    name="name"
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
                    defaultValue={""}
                  />
                </div>
                <button
                  id="cfsubmit"
                  type="submit"
                  className="btn btn-default btn-block"
                >
                  Send your Message <span className="ion-paper-airplane" />
                </button>
              </form>
              <div id="contactFormResponse" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
