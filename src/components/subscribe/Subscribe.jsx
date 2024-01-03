import "./subscribe.css";

const Subscribe = () => {
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
                        placeholder="Email address"
                        required
                      />
                    </div>
                  </div>
                </div>
                <button style={{backgroundColor: "#a0636a"}} type="submit" class="btn btn-default btn-block">
                  Get it
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Subscribe;
