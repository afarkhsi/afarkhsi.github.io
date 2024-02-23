import './style.css';

const About = () => {
  return (
    <section className="about">
      <h1 className="about_title">ABDOURRAHMAN FARKHSI</h1>
      <div className="about_description">
        <h2 className="about_description_title">DEVELOPPEUR FULL-STACK</h2>
        <div className="about_description_container">
          &lt; &gt;
          <div className="about_description_container_languages">
            <span>
              <img src="" alt="" />
              <p>JavaScript</p>
            </span>
            <span>
              <img src="" alt="" />
              <p>React</p>
            </span>
            <span>
              <img src="" alt="" />
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
    </section>
  );
};

export default About;
