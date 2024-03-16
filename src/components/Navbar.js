import React from 'react'
import propTypes from 'prop-types'
import {Link} from 'react-router-dom';



export default function Navbar(props) {
  
  return (
    
    <div>
    <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link  className="navbar-brand" to="/">News Teller</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link  className="nav-link active" aria-current="page" to="">Home</Link>
            </li>
            <li className="nav-item"><Link  className="nav-link" to="/business">Business</Link></li>
            <li className="nav-item"><Link  className="nav-link" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link  className="nav-link" to="/general">General</Link></li>
            <li className="nav-item"><Link  className="nav-link" to="/health">Health</Link></li>
            <li className="nav-item"><Link  className="nav-link" to="/science">Science</Link></li>
            <li className="nav-item"><Link  className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link  className="nav-link" to="/technology">Technology</Link></li>
            </ul>
            </div>
        </div>
    </nav>
  </div>
)
}
Navbar.propTypes={ //esko hum rules bool skte props assign krne ke liye ab agar mai app.js mai jaake glti se number pass krdunga toh error show hoga
    title:propTypes.string.isRequired, //es case mai error aajyega agar maine defaultprop ni banaya h toh
    aboutText:propTypes.string
}

Navbar.defaultProps={ //agar hum value text .js mai pass ni krege toh fir yaha ki value pass ho jayenge
    title:'set title for this navbar',
    aboutText:'set about for this '
}
