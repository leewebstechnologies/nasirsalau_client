import "./footer.css";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p>Copyright © {year} Nasir Salau & Co</p>
            </div>
            <div className="col-sm-6">
              <div className="footer-social">
                <a href="https://m.facebook.com/profile.php/?id=662818000&name=STSDirectNavUserDecorator">
                  <i class="fa-brands fa-square-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/nasir-salau-06894861?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a href="https://twitter.com/nasirlawfirm">
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
