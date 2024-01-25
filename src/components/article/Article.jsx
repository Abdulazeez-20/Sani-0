import React from 'react'
import './article.css'


const Artical = ({ imageUrl, date, title }) => {
  return (
    <div className='blog_container_article'>
      <div className="blog_article_image">
        <img src={imageUrl} alt="blog image" />
      </div>
      <div className="blog_article_content">
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Atricle</p>
      </div>
    </div>
  )
}

export default Artical