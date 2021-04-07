// import { Link } from "gatsby"

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header className="border">
    <span id="brand">
      <StaticImage
        src="../images/MLogo.svg"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={22}
        height={22}
      />
    </span>
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
