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

      {/* CTA */}
      <section id="cta" className="cta">
        <div className="container">
          <div className="cta-bg">
            <div className="row">
              <div className="col-sm-10 col-sm-offset-1">
                <h2>About Us</h2>
                <h4>
                  The Firm (Nasir Salau & Co.) was established on 1st January,
                  1996 and registered with the corporate Affairs Commission with
                  Certificate No. LAZ 037964 with a vision to becoming one of
                  Nigeria’s foremost corporate legal practice firms in terms of
                  quality of practice and clientele. It has its registered
                  office address at No. 84, Lewis Street, Lagos Island, Lagos.
                  CLIENTELE The Firm pays equal attention to organizations and
                  companies as well as individual clients, investors, sole
                  proprietors and partnerships. Consequently our clients include
                  the following:- AREAS OF PRACTICE Our core areas of practice
                  include: (a) Corporate / Company Secretarial Practice We
                  routinely advise clients and negotiate terms of pre
                  incorporation contracts and joint venture agreements on their
                  behalf. We generally advise clients on the requirement of the
                  Companies and Allied Matters Act 1990 and other related
                  legislations governing operations of Companies. We handle
                  Company related issues including incorporation, change of
                  names, conversion from private to public Companies, share
                  increase, winding up proceedings and general Company
                  Secretarial Practice. (b) Government and Community Relations
                  We handle claims from Government agencies particularly in the
                  Aviation, telecommunications Transport and Construction
                  industries and communities and advise the appropriate
                  departments of our client companies on the validity and
                  appropriate steps to take to comply with any demand notice(s).
                  We also assist in preparing objections and challenges to such
                  demands emanating from Taxes, Rates, Levies or Charges. This
                  is an area that impacts on most Companies’ daily operations in
                  view of the increased revenue drive of Government Agencies,
                  Local Government Councils and Communities. We have extensive
                  experience and expertise in dealing with these issues. (c)
                  Aviation Consulting We consult on legal matters relating to
                  the aviation industry for Airlines, clients and Aviation
                  regulatory authorities. (d) Conveyance and Real Property:
                  wenegotiate and prepare Mortgages, Leases and Deeds. We also
                  conduct title investigation on property to be acquired or
                  mortgaged as securities. We assist in negotiating
                  compensation, perfecting title documents and obtaining
                  Governor’s consent under the Land Use Act. (e) Licensing,
                  Permits and Related Matters Applications to Government and
                  Quasi Government Agencies for consents and approvals required
                  for the operation of the Companies, and in its acquisition of
                  proprietary rights to include business permits, expatriates
                  quota, approved status, Telecommunications licenses etc. (f)
                  Litigation We have considerable experience in and have
                  conducted litigation before various Magistrate Courts, High
                  Courts and Appellate Courts. We have also appeared
                  successfully on behalf of our clients before the Arbitration
                  Panels, and other quasi Judicial Tribunals. PROFILE OF PARTNER
                  A.N.SALAU-Partner Salau graduated with LL.B(Hons) from Ahmadu
                  Bello University, Zaria, Nigeria in 1989. He was admitted to
                  the Nigeria bar in 1990. Between 1991 and 1992 he worked with
                  the Corporate Affairs Commission, Abuja during the compulsory
                  National Youth Services Corps scheme where he had first
                  experience in Company related matters. Thereafter he worked
                  with the leading law firm of Paul Usoro until December 1995
                  when he founded Nasir Salau & Co. after honing his skills as
                  an Associate Attorney.    Nasir Salau who is an Associate of
                  the Chartered Institute of Secretaries and
                  Administrators(ACIS) was appointed a Notary Public by the
                  Chief Justice of Nigeria in 1999. He has vast experience in
                  legal issue relating to the aviation, telecommunication and
                  the banking industries.
                </h4>
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
