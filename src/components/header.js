// import { Link } from "gatsby"

import React from "react"

const Header = () => (
  <header>
    <span id="brand">M</span>
    <span>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#work">
            Work
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">
            About
          </a>
        </li>
      </ul>
    </span>
  </header>
)

export default Header
