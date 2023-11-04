//! remember to put leading slashes on the imports/
import menuIcon from '/src/assets/menu-icon.png'

function Nav() {
    
    const buttonStyle = {
       backgroundImage: `url(${menuIcon})`, // Set the PNG image as the background
        backgroundSize: '40px 40px', // Adjust the size as needed
        backgroundRepeat: 'no-repeat',
        width: '40px', 
        height: '40px', 
        border: 'none',
        cursor: 'pointer', // Add a pointer cursor to indicate it's clickable
      };

    return (
        <nav className="navbar navbar-dark bg-transparent">
            <div className="container">
                {/* <a className="navbar-brand" href="#">logo</a> */}
                <a 
                    style={buttonStyle}                           
                    id="menu-button" 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNav" 
                    aria-controls="navbarNav" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                    >
                
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav;