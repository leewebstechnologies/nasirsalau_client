import "./nav.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#main-navbar"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="logo">
              <img
                className="img-responsive"
                src="assets/images/logo.png"
                alt="logo"
              />
              <h2 className="brand-name">Nasir Salau & Co</h2>
            </a>
          </div>

          <div className="collapse navbar-collapse" id="main-navbar">
            <ul className="nav navbar-nav navbar-right">
              <li className="active">
                <a href="#header">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li>
                <a href="#choose">Why us</a>
              </li>
              <li>
                <a href="#practice">practice</a>
              </li>
              <li>
                <a href="#cases">Cases</a>
              </li>
              <li>
                <a href="#team">Our Team</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
