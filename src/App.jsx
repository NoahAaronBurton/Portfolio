
import Nav from './components/nav';
import './App.css';

function App() {
  return (
    <div className="container-fluid">
      {/* Header Row */}
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
          
        </div>
      </div>
    </div>
  );
}

export default App;
