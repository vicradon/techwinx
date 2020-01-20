import React, {useState} from 'react'

export default function Navbar() {
  const [active, setActive] = useState('');
  return (
    <nav className="navbar navbar-padding navbar-background" role="navigation" aria-label="main navigation">
      <style>
        {
          `
            .navbar-background{
              background-color:lightblue;
            }
            .navbar-padding {
              padding:0 7rem;
            }
          `
        }
      </style>
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
        </a>

        <a onClick = {() => active ? setActive(''): setActive('is-active')} role="button" className={`navbar-burger burger ${active}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${active}`}>
        <div className="navbar-end">
          <a className="navbar-item">Home</a>

          <a className="navbar-item">Emerging Tech</a>
          <a className="navbar-item">Women in tech</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item">Tech for social good</a>
              <a className="navbar-item">Contact</a>
              <a className="navbar-item">Write for us!</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div>
        </div>

        
      </div>
    </nav>
  )
}