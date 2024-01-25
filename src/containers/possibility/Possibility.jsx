import React from 'react'
import './possibility.css'
import possibilityImage from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div>
      <div className="possibility section_padding" id="possibility">
        <div className="possibility_image">
          <img src={possibilityImage} alt="possibility image" />
        </div>
        <div className="possibility_content">
          <h4>Request Eary Access to Get Started</h4>
          <h1 className='gradient_text'>The Possibilities are beyond your imagination</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus assumenda iste dolorem cupiditate </p>
          <h4>Request Eary Access to Get Started</h4>
        </div>
      </div>
    </div>
  )
}

export default Possibility