import * as React from "react"

import "../components/styles/cards.css"

import Picone from "../assets/images/pic1.jpg"
import Pictwo from "../assets/images/pic2.jpg"
import Picthree from "../assets/images/pic3.jpg"


const cards = () => (
    <div>
        <h1 className="head-title">How Can I Help You</h1>
  <div className="cards">
  <div class="main-section">
      <div className="card-container">
      <div className="overlay">
      <h1 className="title">Editing</h1>
      </div>
  <img class="card" alt="pic1" src={Picone} />
      </div>
      <div className="card-container">
      <div className="overlay">
      <h1 className="title">Proofreading</h1>
      </div>
  <img class="card" alt="pic2" src={Pictwo} />
      </div>
      <div className="card-container">
          <div className="overlay">
          <h1 className="title">Document Formatting</h1>
          </div>
  <img class="card" alt="pic3" src={Picthree} />
      </div>
</div>
  </div>
  </div>
)

export default cards