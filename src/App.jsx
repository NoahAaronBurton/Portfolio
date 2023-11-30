
import Nav from './components/nav';
import Project from './components/project';
import './App.css';

function App() {
  const projects = [
    { 
      title: 'My Tech Blog',
      src: 'assets/tech-blog.png',
      link: 'https://github.com/NoahAaronBurton/noahs-tech-blog'
    },
    { 
      title: 'Park Planner',
      src: 'assets/parks-planner.png',
      link: 'https://github.com/Leucisticboi/ParksPlanner'
    },
    { 
      title: 'Social API',
      src: 'assets/social-api.png',
      link: 'https://github.com/NoahAaronBurton/social-api'
    },
    { 
      title: 'Quick SVG',
      src: 'assets/quick-svg.png',
      link: 'https://github.com/NoahAaronBurton/quick-svg'
    },
    { 
      title: 'pokesquads',
      src: 'assets/pokeball-background.JPG',
      link: 'https://github.com/NoahAaronBurton/pokesquad'
    },
    { 
      title: 'READ.ME Express',
      src: 'assets/readme.png',
      link: 'https://github.com/NoahAaronBurton/readme-cli-express'
    },
  ]

  return (
    <div className="container-fluid">
      {/* Header/Nav Row */}
      <div id="header-row">
        <div className="row align-items-start" >
          <div id="nav-col" className="col-2">
          <Nav />
          </div>
          <div className="col-10">
            <div id="header">
              <img
                src="assets/name-header.png"
                alt="Noah-Aaron-Burton"
                id="name-header"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
      {/* About Me Row */}
      <div className="row align-items-start" id="about-row">
        <div className="col-2"></div>
        <div className="col-10">
              <h2>About Me</h2>
              <img 
                id='noah-headshot' 
                className='left-floated-image' 
                src="assets/noah-headshot.jpg" 
                alt="noah-headshot-smiling" />
              <p>
                Hello, I'm Noah Burton, a dedicated and passionate student currently enrolled in the University of Utah's coding bootcamp. With a strong desire to pursue a career in front-end software development, I am actively seeking employment opportunities that will allow me to utilize my skills and contribute to a dynamic web development team. Apart from my academic pursuits, I find immense joy in creating music, strumming my guitar, and camping.
              </p>
              <p>
                As a potential addition to your team, you can trust that I bring a combination of technical proficiency and a genuine love for crafting remarkable user experiences. With my training from the University of Utah's bootcamp, I have gained hands-on experience in front-end technologies such as HTML, CSS, and JavaScript. I possess a keen eye for design, ensuring visually appealing and user-friendly interfaces. By collaborating effectively and demonstrating adaptability, I believe I would make a valuable addition to your web development team. I am excited to contribute my skills, passion, and dedication to creating exceptional digital experiences.
              </p>
      </div>


        </div>
      {/* Projects */}
    <div className='row align-items-start' id="projects">
      <div className='col-2'></div>
      <div className='col-10'>
        <div className='row'>
            <h2>My Work</h2>

            <Project projects={projects}></Project>
            
            {/* {projects.map((project, index) => (
              <Project
              //* these values should match the component args PLUS a key value
                key={index}
                title={project.title}
                src={project.src}
                link={project.link}
              />
          ))} */}

        </div>  
      </div>
    </div>


    
  </div>
    
  );
}

export default App;
