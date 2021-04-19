import React from "react"

const Header = () => (
  <header className="border">
    <span id="brand">
      Muhammad
    </span>
    <span>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#work">
            Works
          </a>
        </li>
      </ul>
    </span>
  </header>
)

export default Header
