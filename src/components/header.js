// import { Link } from "gatsby"

import React from "react"

const Header = () => (
  <header>
    <span id="brand">M</span>
    <span>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Work
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            About
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Contact
          </a>
        </li>
      </ul>
    </span>
  </header>
)

export default Header
