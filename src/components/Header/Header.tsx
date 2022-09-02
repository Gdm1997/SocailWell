import { Github, LinkedIn, Mail, Twitter } from "../../assets/images";

const Header = () => {
  return (
    <nav id="nav-header">
      <ul className="social-links">
        <li>
          <a href="#">
            <img src={Github} className="social-icon" alt="github" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={LinkedIn} className="social-icon" alt="github" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Mail} className="social-icon" alt="github" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={Twitter} className="social-icon" alt="github" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
