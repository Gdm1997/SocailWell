import { FGithub, FLinkedin, FMail, FTwitter, Logo } from "../../assets/images";

const Footer = () => {
  return (
    <footer>
      <div className="footer-info">
        <div className="social-info">
          <p>
            Let’s keep in touch
            <br /> Find us on any of these platforms.
          </p>
          <ul className="social-links">
            <li>
              <a href="/">
                <img src={FGithub} alt="github" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={FLinkedin} alt="linkedin" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={FMail} alt="mail" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={FTwitter} alt="twitter" />
              </a>
            </li>
          </ul>
        </div>
        <div className="address">
          <span>address</span>
          <address>
            Flat T-11/805, Tata Ariana, Mahalaxmi Vihar, Bhubaneswar, Odisha
            751029 IN
          </address>
        </div>
      </div>
      <div className="footer-nav">
        <div className="logo">
          <img src={Logo} alt="socialwell" />
        </div>
        <div className="company-name">
          SocialWell Technologies Private Limited
        </div>
      </div>
    </footer>
  );
};

export default Footer;
