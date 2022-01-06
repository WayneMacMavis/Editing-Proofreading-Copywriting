import React from "react"

import Layout from "../components/layout"

import "../components/styles/style.css"
import Image from "../assets/images/image.jpg"
import ImageTwo from "../assets/images/image2.jpg"

import Cards from "../components/cards"

const IndexPage = () => {
  return (
    <Layout>
      <div style={{
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
    position: `relative`,
    width: `100vw`,
    height: `80vh`,
    top: `0`,
    right: `0`,
    bottom: `0`,
    left: `0`,
    backgroundPosition: `center`,
    overflow: `hidden`,
    }}>
  <img src={Image} alt="Hello"
    style={{

      objectFit: `cover`,
      top: `0`,
      left: `0`,
    }}>
    </img>
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
    <div style={{width: `20vw`,  marginRight: `150px`, top: `200px`}}>
    <h1 style={{fontFamily: `'Source Serif Pro', serif`, fontSize: `31px`, color: `grey`,}}>You want your audience to focus on your message, not your mistakes. </h1>
  <p>As your ambassador, your editor will help you with this. She’ll protect your credibility and your unique style of writing.
  The alternative? You could skip the editing stage. But distracting language errors and inconsistencies create the impression that you don’t respect your reader. Or worse, that you’re incompetent!
  Working with an inexperienced editor is just as risky. If she over-edits your work, this will water down your persona and make it harder to distinguish yourself from competitors.
  The solution? Team up with a certified word nerd with expertise in your genre. If that’s marketing, academia or non-fiction, I can help!</p>
  <a style={{color: 'red'}} className="content-link" 
  href="mailto:chantaljosepheditor@gmail.com" type="email" name="email" rel="reply-to" autoComplete="email">Email me for an obligation-free quote.</a>
  </div>
    </div>
    </div>
    <Cards />
    <button>Learn the 7 essential elements of a submission-ready manuscript.</button>
                <h1>So you want better results for your writing?</h1>
  </Layout>
  
    )
  }

export default IndexPage
