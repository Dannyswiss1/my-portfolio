import React from "react";
import "./intro.css";
import bg from "../../assets/VAD_6799-removebg-preview.png";
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Dannyswiss</span> <br />
          Website Designer
        </span>
        <p className="introPara">
          I'm a skilled web designer with experience in creating <br />visually
          appealing and user friendly websites
        </p>
        <Link><button className="btn"><img src={btnImg} alt='btnImg' className='btnImg' />Hire Me</button></Link>
      </div>
      <img src={bg} alt="profile" className="bg" />
    </section>
  );
};

export default Intro;
