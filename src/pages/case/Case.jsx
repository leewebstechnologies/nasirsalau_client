import "./case.css";

const Case = () => {
  return (
    <>
      <section id="card-1" className="card-1 card-1 overlay-light">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 hidden-xs"></div>
            <div className="col-sm-7 col-sm-offset-1">
              <div id="card_1" className="owl-carousel">
                <div className="item">
                  <div className="card-1-item-box">
                    <img
                      className="itemImage"
                      src="../assets/images/house.png"
                      alt="itemImage"
                    />
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Case;
