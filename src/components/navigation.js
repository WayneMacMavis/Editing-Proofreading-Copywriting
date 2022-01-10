import * as React from "react"
import { Link } from "gatsby"

import "../components/styles/navigation.css"

const Navigation = ({ menuLinks }) => {

  return (
  <nav className="navigation">
    <div className="container">
    <div className="navsite">ChantyJoe.com</div>
      <div>
          <nav>
            <ul>
              {menuLinks.map(link => (
                <li
                  key={link.name}
                >
                  <Link className="nav-links" to={link.link} activeStyle={{color: `rgba(255, 177, 216, 1)`, textDecoration: 'underline'}}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
    </div>
  </nav>
  )
              }
            

export default Navigation
