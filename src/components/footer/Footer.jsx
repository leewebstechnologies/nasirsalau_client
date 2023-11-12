import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p>@ Nasir Salau & co</p>
            </div>
            <div className="col-sm-6">
              <div className="footer-social">
                <a href="#">
                  <i className="ion-social-facebook" />
                </a>
                <a href="#">
                  <i className="ion-social-linkedin-outline" />
                </a>
                <a href="#">
                  <i className="ion-social-skype-outline" />
                </a>
                <a href="#">
                  <i className="ion-social-twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
