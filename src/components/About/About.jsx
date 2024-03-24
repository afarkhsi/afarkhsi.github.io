import './style.css';
import ReactLogo from './../../assets/logo/react-logo.png';
import JsLogo from './../../assets/logo/JavaScript-logo.png';
import NodeLogo from './../../assets/logo/node-js-log.png';
import Logo from './../../assets/logo/logo.png';
import TsLogo from './../../assets/logo/ts-logo.png';

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
              <img src={TsLogo} alt="logo ts" className="language-logo" />
              <p>TypeScript</p>
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
          &lt;/&gt;
        </div>
        <p className="about_description_details">
          Captivé par la création et le dévelopment web, je mets en pratique mes
          conaissances ainsi que mes compétences pour produire des applications
          web performantes et dynamiques.
        </p>
      </div>
      <a className="about_description_link" href="#/mesprojets">
        MES PROJETS
      </a>
    </section>
  );
};

export default About;
