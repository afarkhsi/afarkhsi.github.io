import './style.css';

const NavBar = () => {
  return (
    <section className="header">
      <div className="header_title">A.Farkhsi</div>
      <div className="header_nav">
        <a className="header_nav_link" href="#/">
          HOME
        </a>
        <a className="header_nav_link" href="#/mesprojets">
          PROJECTS
        </a>
        <a className="header_nav_link" href="#/contacts">
          CONTACTS
        </a>
      </div>
    </section>
  );
};

export default NavBar;
