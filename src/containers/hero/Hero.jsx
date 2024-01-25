import React from 'react'
import userProfiles from '../../assets/people.png'
import ai from '../../assets/ai.png'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero section-padding' id="home">
      <div className="hero_content">
        <h1 className='gradient_text'>Let's Build Something amazing with SANI-0 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Pariatur similique dolores eos magni explicabo repellat architecto perspiciatis,
        </p>
        <div className='hero_input'>
          <input type="email" placeholder='Enter Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='hero_userProfiles'>
          <img src={userProfiles}></img>
          <p>2,400 people visited the page in last 24 hours</p>
        </div>
      </div>

      <div className="hero_image">
        <img src={ai} alt="AI image" />
      </div>
    </div>
  )
}

export default Hero