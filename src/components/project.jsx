import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Project({ projects }) {
  return (
    <Carousel>
      {projects.map((project, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={project.src}
            alt={project.title}
          />
          <Carousel.Caption>
            <h3>{project.title}</h3>
            <a href={project.link} className="btn btn-transparent">
              <img src="/assets/github-mark.png" alt="github-logo" style={{ width: '30px', height: '30px' }} />
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Project;