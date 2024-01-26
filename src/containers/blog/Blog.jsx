import React from 'react'
import './blog.css'
import Artical from '../../components/article/Article'
import { blog01, blog02, blog03, blog04, blog05 } from "./imports"

const Blog = () => {
  return (
    <div className='blog section_padding' id="blog">
      <div className="blog_heading">
        <h1 className='gradient_text'>A lot is happening, We are blogging about it</h1>
      </div>

      <div className="blog_container">
        <div className="blog_container_groupA">
          <Artical imageUrl={blog01} date="jan 26, 2000" title="Sani-0 AI is the feautre do not miss the chance" />
        </div>

        <div className="blog_container_groupB">
          <Artical imageUrl={blog02} date="jan 26, 2000" title="Sani-0 AI is the feautre do not miss the chance" />
          <Artical imageUrl={blog03} date="jan 26, 2000" title="Sani-0 AI is the feautre do not miss the chance" />
          <Artical imageUrl={blog04} date="jan 26, 2000" title="Sani-0 AI is the feautre do not miss the chance" />
          <Artical imageUrl={blog05} date="jan 26, 2000" title="Sani-0 AI is the feautre do not miss the chance" />
        </div>
      </div>
    </div>
  )
}

export default Blog