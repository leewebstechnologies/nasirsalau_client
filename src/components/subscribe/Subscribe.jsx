import "./subscribe.css";
import { useState } from "react";
import { client } from "../../client";

const Subscribe = () => {
  const [error, setError] = useState("");
  // eslint-disable-next-line
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line
  const { email } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email === "") {
      setError("Empty field");
      return;
    }
    setLoading(true);

    const subscribe = {
      _type: "subscribe",
      email: formData.email,
    };

    client.create(subscribe).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
      e.preventDefault();
    });
  };

  return (
    <>
      <div id="subscribe" className="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <h2>Subscribe to our weekly newsletter</h2>
              <p>*Dont worry, we dont spam</p>
            </div>
            <div className="col-sm-6">
              {!isFormSubmitted ? (
                <form className="subscribe-form" id="subscription-form">
                  <div className="form-group">
                    <label className="sr-only" htmlFor="subscriber-email">
                      Email address
                    </label>
                    <div className="form-group has-feedback">
                      <div class="input-group">
                        <span class="input-group-addon">
                          <i class="fa-solid fa-square-envelope"></i>
                        </span>
                        <input
                          class="form-control"
                          name="email"
                          type="email"
                          value={email}
                          onChange={handleChangeInput}
                          placeholder="Email address"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-default btn-block"
                    onClick={handleSubmit}
                  >
                    {!loading ? "Get It" : "Sending..."}
                  </button>
                  {error !== "" && <p>{error}</p>}
                </form>
              ) : (
                <div>
                  <h3 className="head-text">
                    You have subscribed to weekly newsletter!
                  </h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
