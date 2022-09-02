import { Logo } from "../../assets/images";

const Navbar = () => {
  const links = [
    {
      link: "About Us",
      isActive: false,
    },
    {
      link: "Services",
      isActive: false,
    },
    {
      link: "Projects",
      isActive: false,
    },
    {
      link: "Solutions",
      isActive: false,
    },
    {
      link: "Blogs",
      isActive: true,
    },
  ];

  return (
    <nav id="nav-bar">
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="links">
        {links.map(({ link, isActive }, index) => (
          <li>
            <a href="#" className={isActive ? "active" : ""}>
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
