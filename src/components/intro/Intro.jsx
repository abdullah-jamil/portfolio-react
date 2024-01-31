import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import abdullah from '../../assets/abdullah.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h4>Hi there! This is</h4>
      <h1>Abdullah Jamil</h1>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={abdullah} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Education</h5>
              <small>Netaji Subhas University of Technology, New Delhi</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Interests</h5>
              <small>Machine Learning</small>
              <br></br>
              <small>Deep Learning</small>
              <br></br>
              <small>Computer Vision</small>
            </article>
          </div>
          <p>I am a seasoned full-stack developer based in India, proficient in crafting end-to-end solutions for web applications. My expertise spans a wide range of development skills, allowing me to navigate seamlessly between front-end and back-end technologies. In addition to my proficiency in full-stack development, I hold a strong command over C++ with a focus on Data Structures and Algorithms (DSA), enabling me to build efficient and optimized solutions. Beyond my technical prowess, I am also a passionate public speaker, sharing insights and knowledge in the tech community. This combination of technical proficiency and effective communication skills allows me to not only develop robust solutions but also effectively convey complex concepts to diverse audiences.</p>
        </div>
      </div>
    </section>
  )
}

export default Intro