import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaAngellist } from 'react-icons/fa'
import { IoMdMail } from "react-icons/io";
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#about" className="footer__logo">Abdullah Jamil</a>
      <ul className="permalinks">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/abdullah-jamill/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/abdullah-jamil" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://wellfound.com/u/abdullah-jamill" target="_blank" rel="noreferrer" ><FaAngellist /></a>
      <a href="mailto:abdullah.jamil.work@gmail.com" target="_blank" rel="noreferrer" ><IoMdMail /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; ET {getYear()}. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
