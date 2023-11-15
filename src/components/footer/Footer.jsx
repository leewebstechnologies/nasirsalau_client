import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p>@ 2023 Nasir Salau & Co</p>
            </div>
            <div className="col-sm-6">
              <div className="footer-social">
                <a href="#">
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="ion-social-skype-outline" />
                </a>
                <a href="#">
                  <i class="fa-brands fa-square-x-twitter"></i>
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
