// import { Link } from "gatsby"

import React from "react"

const Header = () => (
  <header className='border'>
    <span id="brand">M</span>
    <span>
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#work">
            Works
          </a>
        </li>
      </ul>
    </span>
  </header>
)

export default Header
