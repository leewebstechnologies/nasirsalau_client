import "./faq.css";
import { useState, useEffect } from "react";
import { client } from "../../client";

// const data = [
//   {
//     question: "HOW CAN I CAN FILE A DIVORCE?",
//     answer:
//       "Getting a divorce in Nigeria is not as easy as getting married. One cannot just wake up and ask the court for a divorce without such reason falling under the grounds stipulated by the Matrimonial Causes Act LFN 1990, which provides the framework for divorce processes in Nigeria. A decree of dissolution of marriage shall not be made if the petitioner, in bringing or prosecuting the proceedings, has been guilty of collusion with intent to cause a perversion of justice. Even when both husband and wife both mutually agree to get a divorce for whatever reason, a decree of dissolution of marriage may still not be granted if there is evidence of collusion between them.",
//   },
//   {
//     question: "I WANT TO GET A US GREEN CARD.",
//     answer:
//       "To apply for a Green Card, you must be eligible under one of the categories listed below. Once you find the category that may fit your situation, click on the link provided to get information on eligibility requirements, how to apply, and whether your family members can also apply with you.",
//   },
//   {
//     question: "WHAT PAPERWORK DO I NEED TO COMPLETE TO FILE FOR DIVORCE?",
//     answer:
//       "Finally, it can be noted that the process of getting a divorce in Nigeria is a bit longer process compared to divorce processes in foreign jurisdictions. And for a suit of dissolution of marriage to be successful in Nigeria, the Petitioner must have brought his or her petition in line with the ground and facts stated under the Matrimonial Causes Act and must satisfy the various requirements of the law. It is important to know that a divorce may be very expensive in Nigeria. The cost of divorce in Nigeria is usually determined by facts or the nature of the divorce. The fact of the case is what would determine the time and industry a lawyer handling the matter would put into it. And the legal fee in Nigeria is usually based on the quantum of work done by the lawyer(s) on a client’s case.",
//   },
// ];

const Faq = () => {
  const [faqs, setFaqs] = useState([]);
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  useEffect(() => {
    const query = '*[_type == "faqs"]';

    client.fetch(query).then((data) => {
      setFaqs(data);
    }, []);
  });
  return (
    <>
      <section id="faq" class="faq overlay-light">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="title-box">
                <p class="section-subtitle">You may want to know</p>
                <h2 class="section-title">frequently asked questions</h2>
              </div>
            </div>
          </div>

          <div className="wrapper">
            <div className="accordion">
              {faqs.map((faq, i) => (
                <div className="items">
                  <div className="title" onClick={() => toggle(i)}>
                    <h4>{faq.question}</h4>
                    <span>{selected === i ? "-" : "+"}</span>
                  </div>
                  <div className={selected === i ? "content show" : "content"}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
