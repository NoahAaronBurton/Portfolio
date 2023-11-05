
import Nav from './components/nav';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      {/* Header/Nav Row */}
      <div className='position-fixed top-0 start-0 '>
        <div className="row align-items-start" id="header-row">
          <div className="col-2">
          <Nav />
          </div>
          <div className="col-10">
            <div id="header">
              <img
                src="src/assets/name-header.png"
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
                src="src/assets/noah-headshot.jpg" 
                alt="noah-headshot-smiling" />
              <p>
                Hello, I'm Noah Burton, a dedicated and passionate student currently enrolled in the University of Utah's coding bootcamp. With a strong desire to pursue a career in front-end software development, I am actively seeking employment opportunities that will allow me to utilize my skills and contribute to a dynamic web development team. Apart from my academic pursuits, I find immense joy in creating music, strumming my guitar, and camping.
              </p>
              <p>As a potential addition to your team, you can trust that I bring a combination of technical proficiency and a genuine love for crafting remarkable user experiences. With my training from the University of Utah's bootcamp, I have gained hands-on experience in front-end technologies such as HTML, CSS, and JavaScript. I possess a keen eye for design, ensuring visually appealing and user-friendly interfaces. By collaborating effectively and demonstrating adaptability, I believe I would make a valuable addition to your web development team. I am excited to contribute my skills, passion, and dedication to creating exceptional digital experiences.
              </p>
          </div>
        </div>
      </div>

  );
}

export default App;
