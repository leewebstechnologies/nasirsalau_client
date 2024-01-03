import "./team.css";

const Team = () => {
  return (
    <>
      <section id="team" className="team">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box">
                <p className="section-subtitle">You may want to</p>
                <h2 className="section-title">Know the attorneys</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="team-box">
                <img
                  className="img-responsive img-full"
                  src="assets/images/team-1.jpg"
                  alt="team"
                />
                <div className="team-detail">
                  <ul>
                    <li>
                      <h3>Nasir Salau</h3>
                    </li>
                    <li>
                      <h4>Lead Counsel</h4>
                    </li>
                    <li>Family Law</li>
                    <li>Commercial Lending,</li>
                    <li>Real Estate</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-box">
                <img
                  className="img-responsive img-full"
                  src="assets/images/team-2.jpg"
                  alt="team"
                />
                <div className="team-detail">
                  <ul>
                    <li>
                      <h3>Mariam Adeniyi</h3>
                    </li>
                    <li>
                      <h4>Member</h4>
                    </li>
                    <li>Personal Injury</li>
                    <li>Medical Malpractice,</li>
                    <li>Real Estate</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="team-box">
                <img
                  className="img-responsive img-full"
                  src="assets/images/team-3.jpg"
                  alt="team"
                />
                <div className="team-detail">
                  <ul>
                    <li>
                      <h3>Ifeanyi Alex</h3>
                    </li>
                    <li>
                      <h4>Member</h4>
                    </li>
                    <li>Vehicle accident</li>
                    <li>Commercial Lending,</li>
                    <li>Personal Injury</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
