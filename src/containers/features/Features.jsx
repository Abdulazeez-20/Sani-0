import React from 'react'
import './features.css'
import { Feature } from '../../components'

const featureData = [
  {
    title: "Improving and distrusts instantly",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt voluptates Aspernatur nesciunt voluptates"
  },
  {
    title: "All the packages you need",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt voluptates Aspernatur nesciunt voluptates"
  },
  {
    title: "No need to spend time on debug",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt voluptates Aspernatur nesciunt voluptates"
  },
  {
    title: "Adapt with your routine",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nesciunt voluptates Aspernatur nesciunt voluptates"
  }
]

const Features = () => {
  return (
    <div>
      <div className="features section_padding" id="features">
        <div className="features_heading">
          <h1 className="gradient_text">
            The Future is Now and You Just Need To Realize It.
            Step into Future and With Sani-0 Make Your Dreams True
          </h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className='features_container'>
          {featureData.map((item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features