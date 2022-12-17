import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
      <div className="container-fluid">
        {/* <Link className={`navbar-brand text-${props.mode ==="light"?"dark":"light"}`} to="/">{props.title}</Link> */}
        <a className={`navbar-brand text-${props.mode ==="light"?"dark":"light"}`} href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {/* <Link className={`nav-link active text-${props.mode ==="light"?"dark":"light"}`} aria-current="page" to="#">Home</Link> */}
              <a className={`nav-link active text-${props.mode ==="light"?"dark":"light"}`} aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              {/* <Link className={`nav-link text-${props.mode ==="light"?"dark":"light"}`} href="#">{props.abouttext}</Link> */}
              <a className={`nav-link text-${props.mode ==="light"?"dark":"light"}`} href="#">{props.abouttext}</a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label mx-2 text-${props.mode ==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">Enable {props.mode ==="light"?"dark":"light"} Mode</label>
          </div>

          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.yellowmode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label mx-2 text-${props.mode ==="light"?"dark":"light"}`}  htmlFor="flexSwitchCheckDefault">Enable Yellow Mode</label>
          </div>

          <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.bluemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className={`form-check-label mx-2 text-${props.mode ==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">Enable Blue Mode</label>
          </div>

        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  abouttext: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Set title here",
  abouttext: "Set text here"
};