import React, { useState } from "react"
import VisibilitySensor from "react-visibility-sensor";
import { useSpring, animated } from "react-spring"

import Modal from '../components/Modal';

import Layout from "../components/layout"
import Seo from "../components/seo"

import "../components/styles/style.css"
import Image from "../assets/images/image.jpg"
import ImageTwo from "../assets/images/image2.jpg"
import ImageThree from "../assets/images/image3.jpg"

import Cards from "../components/cards"

const MoveRight = ({ isVisible, children }) => {
  const props = useSpring({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateX(0px)" : "translateX(-50%)",
    config: { 
      duration: 900, 
    },
  });
  return <animated.div style={props}>{children}</animated.div>;
};

export const FadeInContainer = ({ children }) => {
  const [isVisible, setVisibility] = useState(false);

  const onChange = visiblity => {
    visiblity && setVisibility(visiblity);
  };

  return (
    <VisibilitySensor onChange={onChange}>
      <MoveRight isVisible={isVisible}>{children}</MoveRight>
    </VisibilitySensor>
  );
};
const IndexPage = () => {
  const [modal, setModal] = useState(false);

  const fadeIn = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    delay: 1000,
    config: { duration: 2000, tension: 100 }
});

  return (
    <Layout>
      <Seo title="Home" />
      <div style={{
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
    position: `relative`,
    width: `100vw`,
    height: `90vh`,
    top: `0`,
    right: `0`,
    bottom: `0`,
    left: `0`,
    backgroundPosition: `center`,
    overflow: `hidden`,
    }}>
  <img src={Image} alt="Hello"
    style={{
      overflow: `hidden`,
      objectFit: `cover`,
      top: `0`,
      left: `0`,
    }}>
    </img>
    <animated.div style={fadeIn}>
    <h1 style={{
      position: `absolute`,
      bottom: `15vh`,
      right: `0px`,
      paddingLeft: `55px`,
      paddingTop: `35px`,
      paddingRight: `55px`,
      paddingBottom: `35px`,
      textShadow: `2px 2px black`,
      textAlign: `center`,
      fontSize: `80px`,
      fontWeight: `200`,
      background: `red`,
      color: `white`,
      fontFamily: `'Great Vibes', cursive`,
      opacity: `0.8`,
      }}>Editorial peace of mind for non-fiction writers
      </h1>
      </animated.div>
    </div>
    <div>
    <div style={{height: `100vh`, width: `100vw`, left: `0px`, top: `400px`, display: `flex`, flexDirection: `row-reverse`, flexWrap: `wrap`, justifyContent: `center`, alignItems: `center`}}>
        <div>
    <img src={ImageTwo} alt="Hello"
    style={{
      width: `550px`,
      height: `550px`,
    }}>
    </img>
    </div>
    <FadeInContainer>
    <div style={{width: `20vw`,  marginRight: `150px`, top: `200px`}}>
    <h1 style={{fontFamily: `'Source Serif Pro', serif`, fontSize: `31px`, color: `grey`,}}>You want your audience to focus on your message, not your mistakes. </h1>
  <p>As your ambassador, your editor will help you with this. She’ll protect your credibility and your unique style of writing.
  The alternative? You could skip the editing stage. But distracting language errors and inconsistencies create the impression that you don’t respect your reader. Or worse, that you’re incompetent!
  Working with an inexperienced editor is just as risky. If she over-edits your work, this will water down your persona and make it harder to distinguish yourself from competitors.
  The solution? Team up with a certified word nerd with expertise in your genre. If that’s marketing, academia or non-fiction, I can help!</p>
  <a style={{color: 'red'}} className="content-link" 
  href="mailto:chantaljosepheditor@gmail.com" type="email" name="email" rel="reply-to" autoComplete="email">Email me for an obligation-free quote.</a>
  </div>
  </FadeInContainer>
    </div>
    </div>
    <Cards />
    <div className="manuscript"
    style={{ position: `relative`, height: '60vh', width: '100vw', backgroundImage: `linear-gradient(to right, rgba(206, 5, 5, 1) , rgba(4, 167, 167, 0.8))`, color: 'white', textAlign: 'center', marginTop: '150px', paddingTop: '10%', }}>
                <animated.header config={{duration: 1000000}}>
              {modal && <Modal closeModal={setModal} />}
                <h2 style={{marginBottom: `80px`, fontFamily: `'Great Vibes', cursive`, fontSize: '70px', fontWeight: '200'}}>So you want better results for your writing?</h2>
                <button style={{fontFamily: `'Cormorant', serif`, fontSize: `30px`, border: `none`, background: `none`, cursor: `pointer`, margin: `0`, color: `white`,}} onClick={() => {setModal(true)}}>Learn the 7 essential elements of a submission-ready manuscript.</button>
            </animated.header>
                <img alt="image3" src={ImageThree} style={{position: 'absolute',height: `60vh`, width: `100vw`, top: '0', right: '0', zIndex: `-3`}}/>
                
               
                </div>
            
  </Layout>
  
    )
  }

export default IndexPage;
