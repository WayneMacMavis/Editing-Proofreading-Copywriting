import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"


const footer = () => (
  <div>
  <div style={{
    position: `relative`,
    background: `aqua`,
    height: `120px`,
    width: `100%`,
    // padding: `5px`,
    zIndex: `1`,
    margin: `0`,
  }}>
     Built by
          {` `}
          <a href="https://web.facebook.com/Wayne.mac.mavis/">Wayne Mac Mavis</a>,
          © {new Date().getFullYear()}
          <div style={{position: 'absolute', left: '0', textAlign: `center`,}} className="icons">
          <a className="icon" href="https://web.facebook.com/ChantalJosephEditor" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} color="white" size="2x" />
          </a>
          <a className="icon" href="/">
          <FontAwesomeIcon icon={faInstagram} color="rgb(228,64,95)" size="2x" />
          </a>
          <a className="icon" href="/">
          <FontAwesomeIcon icon={faLinkedin} color="rgb(0,119,181)" size="2x" />
          </a>
          <a className="icon" href="/">
          <FontAwesomeIcon icon={faYoutube} color="rgb(205,32,31)" size="2x" />
          </a>
          </div>
          </div>
  </div>
)

export default footer