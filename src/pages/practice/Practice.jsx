import { useEffect, useState } from "react";
import Consultation from "../../components/consultation/Consultation";
import "./practice.css";
import { urlFor, client } from "../../client";

const Practice = () => {
  const [practices, setPractices] = useState([]);

  useEffect(() => {
    const query = '*[_type == "practices"]';

    client.fetch(query).then((data) => {
      setPractices(data);
    }, []);
  });
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
            {practices.map((practice) => (
              <div className="col-sm-6 col-md-4">
                <div className="practice-box">
                  <img
                    className="img-responsive img-full"
                    src={urlFor(practice.imgUrl)}
                    alt={practice.name}
                  />
                  <div className="overlay">
                    <div className="c-table">
                      <div className="ct-cell">
                        <span className="paractice-icon ion-heart-broken" />
                        <h3 className="practice-title">{practice.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="col-sm-6 col-md-4">
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
                      <h3 className="practice-title">BANKING AND FINANCE</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="practice-box">
                <img
                  className="img-responsive img-full"
                  src="assets/images/Prac-8.jpg"
                  alt="practice areas"
                />
                <div className="overlay">
                  <div className="c-table">
                    <div className="ct-cell">
                      <span className="paractice-icon ion-android-car" />
                      <h3 className="practice-title">
                        CORPORATE RESTRUCTURING, MERGERS AND ACQUISITION
                      </h3>
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
                      <h3 className="practice-title">
                        LABOUR AND INDUSTRIAL RELATIONS
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="practice-box">
                <img
                  className="img-responsive img-full"
                  src="assets/images/Prac-9.jpg"
                  alt="practice areas"
                />
                <div className="overlay">
                  <div className="c-table">
                    <div className="ct-cell">
                      <span className="paractice-icon ion-person" />
                      <h3 className="practice-title">PROJECT FINANCE</h3>
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
                      <h3 className="practice-title">
                        GENERAL COMMERCIAL PRACTICE
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="practice-box">
              <img
                className="img-responsive img-full"
                src="assets/images/Prac-12.jpg"
                alt="practice areas"
              />
              <div className="overlay">
                <div className="c-table">
                  <div className="ct-cell">
                    <span className="paractice-icon ion-heart-broken" />
                    <h3 className="practice-title">MARITIME</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="practice-box">
              <img
                className="img-responsive img-full"
                src="assets/images/Prac-0.jpg"
                alt="practice areas"
              />
              <div className="overlay">
                <div className="c-table">
                  <div className="ct-cell">
                    <span className="paractice-icon ion-ios-people" />
                    <h3 className="practice-title">AVIATION</h3>
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
                    <h3 className="practice-title">TRANSPORT LAW</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="practice-box">
              <img
                className="img-responsive img-full"
                src="assets/images/Prac-7.jpg"
                alt="practice areas"
              />
              <div className="overlay">
                <div className="c-table">
                  <div className="ct-cell">
                    <span className="paractice-icon ion-ios-home" />
                    <h3 className="practice-title">CAPITAL MARKET</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="practice-box">
              <img
                className="img-responsive img-full"
                src="assets/images/Prac-10.jpg"
                alt="practice areas"
              />
              <div className="overlay">
                <div className="c-table">
                  <div className="ct-cell">
                    <span className="paractice-icon ion-person" />
                    <h3 className="practice-title">ENERGY AND ENVIRONMENT</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4">
            <div className="practice-box">
              <img
                className="img-responsive img-full"
                src="assets/images/Prac-11.jpg"
                alt="practice areas"
              />
              <div className="overlay">
                <div className="c-table">
                  <div className="ct-cell">
                    <span className="paractice-icon ion-social-usd" />
                    <h3 className="practice-title">COMMUNICATIONS</h3>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <Consultation />
    </>
  );
};

export default Practice;
