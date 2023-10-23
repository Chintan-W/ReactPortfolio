/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { FirstName, LastName } from "../../utils/getName";

import './About.css';

import profile from '../../assets/profile.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const About = () => {
  const classes = useStyles();
  const greetings = "Hello there!";
  const aboutme = `Hello there! I'm ${FirstName} ${LastName}, a versatile full-stack developer with a passion for crafting exceptional web solutions. My journey in the world of technology has been an exciting one, always embracing new challenges and opportunities.

  As a full-stack developer, I excel in both front-end and back-end development, combining the art of user interface design with the intricacies of server-side logic. I specialize in creating beautifully formatted websites and robust web applications that deliver outstanding user experiences.
  
  My projects span a wide range of technologies, including but not limited to HTML, CSS, JavaScript, React, Node.js, and databases like SQL and NoSQL. With a keen eye for detail and a commitment to best practices, I strive to ensure that every line of code I write contributes to the success of the project.
  
  Whether you need a stunning user interface, seamless functionality, or optimized server performance, I'm here to bring your ideas to life. Let's collaborate and turn your vision into reality!
  
  Feel free to reach out and send me a message to discuss your next project or just to say hello. I'm always eager to connect and explore new opportunities in the world of web development.`;
  

  return (
    <section id="about">
      <Container component="main" className={classes.main} maxWidth="md">
        <div className="about">
          <div className="_img"
            style={{ 
              background: "url(" + profile + ")",
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
          </div>
          <div className="_content_wrapper">
            <Typography component='h2' variant="h5">
              <TextDecrypt text={`${greetings}`} />
            </Typography>
            <p className="aboutme">
              {aboutme}
            </p>
            <a href="#contact" className="contact-btn">
              <i className="fas fa-terminal"></i>
              <Typography component='span'> Send me a message.</Typography>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};
