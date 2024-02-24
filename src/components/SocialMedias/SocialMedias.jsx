import Twitter from './../../assets/twitter.png';
import Linkedin from './../../assets/linkedin.png';
import Github from './../../assets/github.png';
import './style.css';

const SocialMedias = () => {
  return (
    <div className="networks">
      <a className="networks_link" href="/">
        <img className="networks_link_logo" src={Twitter} alt="logo twitter" />
      </a>
      <a className="networks_link" href="/">
        <img
          className="networks_link_logo"
          src={Linkedin}
          alt="logo linkedin"
        />
      </a>
      <a className="networks_link" href="/">
        <img className="networks_link_logo" src={Github} alt="logo github" />
      </a>
    </div>
  );
};

export default SocialMedias;
