//! remember to put leading slashes on the imports/
import menuIcon from '/src/assets/menu-icon.png'

function Nav() {
    
    const buttonStyle = {
       backgroundImage: `url(${menuIcon})`, // Set the PNG image as the background
        backgroundSize: '60px 60px', //? make larger
        backgroundRepeat: 'no-repeat',
        width: '60px', 
        height: '60px', //? make larger 
        border: 'none',
        cursor: 'pointer', // Add a pointer cursor to indicate it's clickable

      };

      return (
        <div id="nav-container"> 
          <a
            style={buttonStyle}
            id="menu-button"
            className="navbar-toggler" // Remove this class
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a href="/" className='nav-link'>About Me</a>
              </li>
              <li className='nav-item'>
                <a href="/" className='nav-link'>Portfolio</a>
              </li>
              <li className='nav-item'>
                <a href="/" className='nav-link'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      );
    }

export default Nav;