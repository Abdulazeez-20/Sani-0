import React from 'react'
import './whatSani0.css'
import { Feature } from '../../components'

const WhatSani0 = () => {
  return (
    <div className='whatSani section_margin' id='whatIsSani'>
      <div className="whatSani_feature">
        <Feature title="What is Sani-0" text="Lorem ipsum, dolor sit amet consectetur adipisicing
         elit. Minus veniam, fugit dolorum inventore aspernatur aliquam?" />
      </div>

      <div className='whatSani_heading'>
        <h1 className='gradient_text'>
          The possibilities are beyond your imagination
        </h1>
        <p >Explor The Library</p>
      </div>

      <div className='whatSani_container'>
        <Feature title="Chatbots" text="Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum dolor sit,adipisicing elit  delectus!" />
        <Feature title="Knowledgebase" text="Lorem ipsum Lorem ipsum  Lorem ipsum  Lorem ipsum dolor sit, adipisicing elit   delectus!" />
        <Feature title="Education" text="Lorem ipsum dolor sit,adipisicing elit  adipisicing elit" />
      </div>
    </div>
  )
}

export default WhatSani0