import "./home.css";
import { useState, useEffect } from "react";
import { client } from "../../client";

// eslint-disable-next-line
// const homes = [
//   {
//     figure: 2001,
//     percentage: 97,
//     amount: 30,
//   },
// ];

const Home = () => {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const query = '*[_type == "homes"]';

    client.fetch(query).then((data) => {
      setHomes(data);
    });
  }, []);
  return (
    <>
      <header id="header" class="header overlay-dark">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <div class="intro-box c-table">
                <div class="intro ct-cell">
                  <h1 className="profession">LEGAL PRACTITIONERS</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="fun" className="fun">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <p className="section-subtitle">We are known by</p>
                <h2 className="section-title">Who we are</h2>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <div className="fun-box">
                {/* <p class="fun-number">2000+</p> */}
                {homes.map((home) => (
                  <p className="fun-number">{home.figure}+</p>
                ))}
                <p className="fun-title">Cases were faught</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="fun-box">
                {/* <p className="fun-number">96.5%</p> */}
                {homes.map((home) => (
                  <p className="fun-number">{home.percentage}%</p>
                ))}
                <p className="fun-title">Cases have been won</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="fun-box">
                {/* <p className="fun-number">$25k</p> */}
                {homes.map((home) => (
                  <p className="fun-number">{home.amount}k</p>
                ))}
                <p className="fun-title">Money Recovered</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section id="cta" className="cta">
        <div className="container">
          <div className="cta-bg">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1">
                <p>
                  The Firm (Nasir Salau & Co.) was established on 1st January,
                  1996 and registered with the corporate Affairs Commission with
                  Certificate No. LAZ 037964 with a vision to becoming one of
                  Nigeria’s foremost corporate legal practice firms in terms of
                  quality of practice and clientele. It provides top-notch legal
                  services to both local and international clients.It has its
                  registered office address at No. 78A, Lewis Street, Lagos
                  Island, Lagos.
                </p>
              </div>
              <div className="col-sm-6">
                <h1>
                  Get your free
                  <br />
                  <small style={{ color: "#fff" }}>Consultation today</small>
                </h1>
              </div>
              <div className="col-sm-6">
                <div className="cta-btn">
                  <a href="tel:(234) 803 301 6444">
                    <span className="ion-android-call" /> +234 803 301 6444
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
