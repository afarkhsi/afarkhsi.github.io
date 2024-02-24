import './style.css';
import ReactLogo from './../../assets/react-logo.png';
import JsLogo from './../../assets/JavaScript-logo.png';
import NodeLogo from './../../assets/node-js-log.png';
import Logo from './../../assets/logo.png';

const About = () => {
  return (
    <section className="about">
      <img src={Logo} className="bg-logo" alt="logo" />
      <h1 className="about_title">ABDOURRAHMAN FARKHSI</h1>
      <div className="about_description">
        <h2 className="about_description_title">DEVELOPPEUR FULL-STACK</h2>
        <div className="about_description_container">
          &lt; &gt;
          <div className="about_description_container_languages">
            <span>
              <img src={JsLogo} alt="logo js" className="language-logo" />
              <p>JavaScript</p>
            </span>
            <span>
              <img src={ReactLogo} alt="logo react" className="language-logo" />
              <p>React</p>
            </span>
            <span>
              <img src={NodeLogo} alt="logo node" className="language-logo" />
              <p>Node.js</p>
            </span>
          </div>
          &lt; /&gt;
        </div>
        <p className="about_description_details">
          Intéressé par la création et le development web, je mets en pratique
          mes appetences et compétences pour produire des applications web
          performantes
        </p>
      </div>
      <a className="about_description_link" href="/">
        MES PROJETS
      </a>
    </section>
  );
};

export default About;
