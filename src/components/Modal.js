import React from "react"
import {useSpring, animated} from "react-spring"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import "./styles/modal.css";


const Modal = ({ closeModal }) => {

  const fadeDown = useSpring({
    from:{
    top: '10%',
    opacity: 0,
    },
    to:{
    top: '50%',
    opacity: 1,
    },
    config: { 
      duration: 600, 
    },
});

    return (
      <div>
      <animated.div style={fadeDown}>

        <div className="modal">
          <div role = "button" aria-label="overlay" tabIndex={0} onClick={() => {closeModal(false)}} onKeyDown={closeModal} className="overlay"></div>
          <animated.div style={fadeDown} className="modal-content">
  <form className="modal-form" 
  action="https://formspree.io/f/mzbyrkql"
  method="POST"
  >
  <h3 className="modal-title">Submit to receive yours!</h3>
          <div>
            <li className="item">
              <input className="modal-box" type="text" name="name" placeholder="NAME AND SURNAME" />
            </li>
            <li className="item">
              <input className="modal-box" type="email" name="email" rel="reply-to" placeholder="EMAIL" autoComplete="email"/>
            </li>
            <div className="submitBtn">
              <button className="btn" type="submit">SUBMIT</button>
            </div>
          </div>
    </form>
    <button className="closeBtn" onClick={() => {closeModal(false)}}>
    <FontAwesomeIcon icon={faTimes} size="1x" />
    </button>
    </animated.div>
</div>
  </animated.div>
  </div>
)
    }

export default Modal