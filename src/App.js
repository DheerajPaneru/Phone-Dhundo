
import React from 'react'
import './App.css';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Search from './search';
const App = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light  text-info">
  <div className="container-fluid text-info">
    <a href="/" style={{textDecoration:'none'}}>
      
<h2 style={{'color':'white',letterSpacing:'0.1rem'}}> Phone Dhundo</h2>
    </a>
    <button className="navbar-toggler text-info" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-info"></span>
    </button>
    <div className="collapse navbar-collapse text-info" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-info">
        <li className="nav-item text-info">

        </li>
      </ul>
    </div>
  </div>
</nav>
<Search/>

    </>
  );
}

export default App