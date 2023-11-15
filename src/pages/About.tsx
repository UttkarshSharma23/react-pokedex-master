import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/Profile.jpeg";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile">
      <img src={avatarImage} alt="" className="profile-image" />
      <h1 className="profile-text">Hi I am Uttkarsh Sharma</h1>
      <h2 className="profile-text">The creator of this awesome pokedex</h2>
      <h4 className="profile-text">
        This project is created for react 
      </h4>
      <div className="profile-links">
        <a href="https://github.com/UttkarshSharma23">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/uttkarsh-sharma-93b8411b6/">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Wrapper(About);
