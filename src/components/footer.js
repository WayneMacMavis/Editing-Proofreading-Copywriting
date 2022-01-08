import * as React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons"


const footer = () => (
  <div>
  <div style={{
    position: `relative`,
    background: `navy`,
    height: `120px`,
    width: `100%`,
    paddingTop: `-100`,
    zIndex: `1`,
    margin: `0`,
  }}>
    <div style={{position: `relative`, top: `80px`, margin: `0`, zIndex: `2`}}>
     Built by
          {` `}
          <a style={{color: `red`, }} href="https://web.facebook.com/Wayne.mac.mavis/">Wayne Mac Mavis</a>,
          © {new Date().getFullYear()}
          </div>
          <div style={{position: `relative`, textAlign: 'center', color: 'white', zIndex: `10`}}>
          <p style={{margin: `-10px`}}>Terms and conditions | Privacy Policy | Earning Disclaimer | Terms of Service</p>
          <p style={{margin: `10px`}}>@2022 ChantyJoe PTY LTD</p>
          </div>
          <div style={{position: 'relative', textAlign: `center`, marginTop: `10px`, zIndex: `10`,}} className="icons">
          <a style={{paddingRight: `15px`, fontSize: `15px`}}className="icon" href="https://web.facebook.com/ChantalJosephEditor" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookSquare} color="white" size="2x" />
          </a>
          <a style={{paddingRight: `15px`, fontSize: `15px`}} className="icon" href="/">
          <FontAwesomeIcon icon={faInstagram} color="white" size="2x" />
          </a>
          <a style={{paddingRight: `15px`, fontSize: `15px`}} className="icon" href="/">
          <FontAwesomeIcon icon={faLinkedin} color="white" size="2x" />
          </a>
          <a style={{fontSize: `15px`}} className="icon" href="/">
          <FontAwesomeIcon icon={faYoutube} color="white" size="2x" />
          </a>
          </div>
          </div>
  </div>
)

export default footer