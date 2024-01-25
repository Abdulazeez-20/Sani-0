import React from 'react'
import './feature.css'

const Feature = ({ title, text }) => {
  return (
    <div className='whatSani_container-feature'>
      <div className='whatSani_container-feature-title'>
        <div></div>
        <h1>{title}</h1>
      </div>
      <div className='whatSani_container-feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature