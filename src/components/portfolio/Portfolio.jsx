import React from 'react';
import IMG2 from '../../assets/todo.png';
import cover3 from '../../assets/cover3.png';
import streamlit from '../../assets/streamlit.png';
import node_mcu from '../../assets/node_mcu.jpg';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'To-Do App',
      img: IMG2,
      description:
        'User friendly app to plan your day and manage tasks built using React Js. and Integrated Mantine UI library to style the Application',
      technologies: 'JavaScript | Mantine UI',
      link: 'https://todo-react-abdullah.netlify.app',
      github: 'https://github.com/abdullah-jamil/todo-react',
    },
    {
      id: 2,
      title: 'Thank You Ceremony Speech',
      img: cover3,
      description:
        'As the Class Representative, I took the initiative to organize a heartfelt thank you ceremony for our professors at the conclusion of our 2nd semester. This event served to express our deep appreciation for their invaluable guidance provided by our professors throughout the semester',
      technologies: 'Public Speaking | Leadership',
      link: 'https://youtu.be/RmQzc2sOE50',
      github: 'https://youtu.be/RmQzc2sOE50',
    },
    {
      id: 3,
      title: 'Flights Prices Prediction',
      img: streamlit,
      description:
        'Developed a flight price prediction model by downloading and cleaning the dataset from Kaggle. Conducted EDA to identify feature correlations. Trained a Random Forest Regressor on selected features using transformer pipelines and deployed the model as a Streamlit Web Application',
      technologies: 'Python | Datascience | Streamlit',
      link: 'https://flight-prediction.streamlit.app',
      github: 'https://github.com/abdullah-jamil/flight-prediction-streamlit',
    },
    {
      id: 4,
      title: 'Smart Farming',
      img: node_mcu,
      description:
        'The Smart Farming System is an innovative and automated solution designed to enhance agricultural practices by integrating modern technologies. This system utilizes NodeMCU, DHT11 temperature and humidity sensor, soil moisture sensor, and an IoT-controlled motor to create a comprehensive Smart Farming Environment',
      technologies: 'IoT Based Group Project | Arduino IDE',
      link: 'https://mycollegeproject.xyz/SmartIrrigation/login',
      github: 'https://github.com/abdullah-jamil/smart-farming-iot',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
