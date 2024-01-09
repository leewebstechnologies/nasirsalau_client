import { useEffect, useState } from "react";
import Consult from "../../components/consult/Consult";
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
        </div>
      </section>
      <Consult />
    </>
  );
};

export default Practice;
