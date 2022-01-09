import React, { useState } from "react"
import VisibilitySensor from "react-visibility-sensor"
import { useSpring, animated } from "react-spring"

import "../components/styles/cards.css"

import Picone from "../assets/images/pic1.jpg"
import Pictwo from "../assets/images/pic2.jpg"
import Picthree from "../assets/images/pic3.jpg"

const FadeInDirect = ({ isVisible, children }) => {
    const props = useSpring({
      opacity: isVisible ? 1 : 0,
      config: { 
        duration: 800, 
      },
    });
    return <animated.div style={props}>{children}</animated.div>;
  };
  
  const FadeInDirectContainer = ({ children }) => {
    const [isVisible, setVisibility] = useState(false);
  
    const onChange = visiblity => {
      visiblity && setVisibility(visiblity);
    };
  
    return (
      <VisibilitySensor onChange={onChange}>
        <FadeInDirect isVisible={isVisible}>{children}</FadeInDirect>
      </VisibilitySensor>
    );
    
  };


const FadeToRight = ({ isVisible, children }) => {
    const props = useSpring({
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateX(0px)" : "translateX(-50%)",
      config: { 
        duration: 800, 
      },
    });
    return <animated.div style={props}>{children}</animated.div>;
  };
  
  const FadeToRightContainer = ({ children }) => {
    const [isVisible, setVisibility] = useState(false);
  
    const onChange = visiblity => {
      visiblity && setVisibility(visiblity);
    };
  
    return (
      <VisibilitySensor onChange={onChange}>
        <FadeToRight isVisible={isVisible}>{children}</FadeToRight>
      </VisibilitySensor>
    );
    
  };

  const FadeInBottom = ({ isVisible, children }) => {
    const props = useSpring({
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0px)" : "translateY(10%)",
      config: { 
        duration: 800, 
      },
    });
    return <animated.div style={props}>{children}</animated.div>;
  };
  
  const FadeInBottomContainer = ({ children }) => {
    const [isVisible, setVisibility] = useState(false);
  
    const onChange = visiblity => {
      visiblity && setVisibility(visiblity);
    };
  
    return (
      <VisibilitySensor onChange={onChange}>
        <FadeInBottom isVisible={isVisible}>{children}</FadeInBottom>
      </VisibilitySensor>
    );
    
  };

  const FadeToLeft = ({ isVisible, children }) => {
    const props = useSpring({
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateX(0px)" : "translateX(50%)",
      config: { 
        duration: 800, 
      },
    });
    return <animated.div style={props}>{children}</animated.div>;
  };
  
  const FadeToLeftContainer = ({ children }) => {
    const [isVisible, setVisibility] = useState(false);
  
    const onChange = visiblity => {
      visiblity && setVisibility(visiblity);
    };
  
    return (
      <VisibilitySensor onChange={onChange}>
        <FadeToLeft isVisible={isVisible}>{children}</FadeToLeft>
      </VisibilitySensor>
    );
    
  };



const cards = () => {
    return (
    <div>
        <FadeInDirectContainer>
        <h1 className="head-title">How Can I Help You</h1>
        </FadeInDirectContainer>
  <div className="cards">
  <div class="main-section">
      <FadeToRightContainer>
      <div className="card-container">
      <div className="overlay-card">
      <h1 className="title">Editing</h1>
      </div>
  <img class="card" alt="pic1" src={Picone} />
      </div>
      </FadeToRightContainer>
      <FadeInBottomContainer>
      <div className="card-container">
      <div className="overlay-card">
      <h1 className="title">Proofreading</h1>
      </div>
  <img class="card" alt="pic2" src={Pictwo} />
      </div>
      </FadeInBottomContainer>
      <FadeToLeftContainer>
      <div className="card-container">
          <div className="overlay-card">
          <h1 className="title">Document Formatting</h1>
          </div>
  <img class="card" alt="pic3" src={Picthree} />
      </div>
      </FadeToLeftContainer>
</div>
  </div>
  </div>
    )
}

export default cards