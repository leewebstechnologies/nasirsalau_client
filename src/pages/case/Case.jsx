import "./case.css";

const Case = () => {
  return (
    <>
      <section id="slider-1" className="slider-1 overlay-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 hidden-xs">
              <img
                className="img-responsive img-full mb0"
                src="assets/images/familly.png"
                alt="familly"
              />
            </div>
            <div className="col-sm-7 col-sm-offset-1">
              <div id="slider_1" className="owl-carousel">
                <div className="item">
                  <div className="slider-1-item-box">
                    <span className="slider-icon ion-ios-people"></span>
                    <h2>We won over 200 family cases</h2>
                    <p>
                      A lawyer is a person who practices law, as a barrister,
                      judge, attorney, counsel or solicitor. Working as a lawyer
                      involves the practical application of abstract legal
                      theories and knowledge to solve specific individualized
                      problems.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="slider-1-item-box">
                    <span className="slider-icon ion-heart-broken"></span>
                    <h2>Medical malpractice </h2>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of essentially unchanged.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="slider-1-item-box">
                    <span className="slider-icon ion-ios-home"></span>
                    <h2>Consult before buying a land</h2>
                    <p>
                      A lawyer is a person who practices law, as a barrister,
                      judge, text ever since the 1500s, when an unknown printer
                      took a galley of essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Case;
