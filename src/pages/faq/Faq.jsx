import "./faq.css";
// import { useState, useEffect } from "react";
// import { client } from "../../client";

const Faq = () => {
  // const [faqs, setFaqs] = useState([]);

  // useEffect(() => {
  //   const query = '*[_type == "faqs"]';

  //   client.fetch(query).then((data) => {
  //     setFaqs(data);
  //   });
  // }, []);
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
          <div class="row">
            <div class="col-sm-12">
              <div
                class="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab">
                    <h4 class="panel-title">
                      <a
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        My wife is not allowing me to see my children,what can I
                        do?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseOne"
                    class="panel-collapse collapse in"
                    role="tabpanel"
                    aria-labelledby="headingOne"
                  >
                    <div class="panel-body">
                      - As per Supreme Court judgement, wife is expected to move
                      in with the relatives of their husbands, follow the rules
                      and customs of their home, and ideally, blend in
                      seamlessly as a new daughter. - Further, the court granted
                      divorce to a man on the grounds of “cruelty” after his
                      wife refused to share a home with her in-laws. - Further,
                      If wife is not supporting her husband for the enjoyment of
                      life and denying relation, then the husband can get
                      divorce after filing a divorce petition before the court
                      on this ground. - If she is not interested to live with
                      you , then she can take mutual divorce under the Muslim
                      Law legally . - Further , as per law, A mother usually
                      gets custody of the minor child, under the age of five and
                      fathers get custody of older boys, but it is not a strict
                      rule and is primarily decided based on the child’s
                      interests. - The choice of a child above the age of nine
                      is considered, and further a mother who is proven to
                      neglect or ill-treat the child is not given custody. -
                      Hence, for getting custody of the child , you can file a
                      petition before the court.
                    </div>
                  </div>
                </div>

                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingTwo">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        What paperwork do I need to complete to file for
                        divorce?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseTwo"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingTwo"
                  >
                    <div class="panel-body">
                      it can be noted that the process of getting a divorce in
                      Nigeria is a bit longer process compared to divorce
                      processes in foreign jurisdictions. And for a suit of
                      dissolution of marriage to be successful in Nigeria, the
                      Petitioner must have brought his or her petition in line
                      with the ground and facts stated under the Matrimonial
                      Causes Act and must satisfy the various requirements of
                      the law. It is important to know that a divorce may be
                      very expensive in Nigeria. The cost of divorce in Nigeria
                      is usually determined by facts or the nature of the
                      divorce. The fact of the case is what would determine the
                      time and industry a lawyer handling the matter would put
                      into it. And the legal fee in Nigeria is usually based on
                      the quantum of work done by the lawyer(s) on a client’s
                      case.
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingThree">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How to make a General Diary and How much monEy is spent?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseThree"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div class="panel-body">
                      Diaries are wonderful objects that allow you to discuss
                      your emotions, record dreams or ideas, and reflect on
                      daily life in a safe, private space. While there's no
                      single, definitive way to write a diary, there are some
                      basic tricks you can use to get the most out of your
                      writing. If you aren't sure what to write about, using
                      prompts like inspirational quotes can help get started on
                      new entries.
                    </div>
                  </div>
                </div>
                <div class="panel panel-default">
                  <div class="panel-heading" role="tab" id="headingThree">
                    <h4 class="panel-title">
                      <a
                        class="collapsed"
                        role="button"
                        data-toggle="collapse"
                        data-parent="#accordion"
                        href="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Why, how, where do we need to keep corporate records?
                      </a>
                    </h4>
                  </div>
                  <div
                    id="collapseFour"
                    class="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby="headingThree"
                  >
                    <div class="panel-body">
                      In addition to being legally required, keeping corporate
                      records has practical value for your business. For
                      example, your records help you track your corporation’s
                      progress over the years, and your tax returns from
                      previous years will help you complete future tax returns.
                      Corporate records also maintain what is commonly called
                      the “corporate veil,” which is the division between the
                      corporation’s assets and the personal assets of the
                      corporation’s members. These records prove that your
                      business is compliant, and without that compliance, your
                      personal assets could be in jeopardy. Essentially, proper
                      records protect you and your business during any lawsuits
                      and audits. Finally, good records could increase the value
                      of your company by proving your corporation’s worth. If
                      you ever wish to sell your business, the buyer will want
                      to see your records to back up the “sticker price” you
                      set.
                    </div>
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

export default Faq;
