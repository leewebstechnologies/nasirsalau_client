import { useEffect, useState } from "react";
import "./team.css";
import { urlFor, client } from "../../client";
// import { images } from "../../constants";

const Team = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const query = '*[_type == "teams"]';

    client.fetch(query).then((data) => {
      setTeams(data);
    }, []);
  });
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
            {teams.map((team) => (
              <div className="col-sm-4">
                <div className="team-box">
                  <img
                    className="img-responsive img-full"
                    src={urlFor(team.imgUrl)}
                    alt={team.title}
                  />
                  <div className="team-detail">
                    <ul>
                      <li>
                        <h3>{team.name}</h3>
                      </li>
                      <li>
                        <h4>{team.position}</h4>
                      </li>
                      <li>{team.specialisation_a}</li>
                      <li>{team.specialisation_b}</li>
                      <li>{team.specialisation_c}</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-sm-4">
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
            </div> */}
            {/* <div className="col-sm-4">
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
