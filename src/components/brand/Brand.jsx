import React from 'react'
import { googel, atlassin, slack, dropbox, shopify } from './import'
import './brand.css'

const brand = () => {
  return (
    <div className='brand section'>
      <div>
        <img src={googel} alt='google' />
      </div>
      <div>
        <img src={atlassin} alt='atlassin' />
      </div>
      <div>
        <img src={slack} alt='slack' />
      </div>
      <div>
        <img src={dropbox} alt='dropbox' />
      </div>
      <div>
        <img src={shopify} alt='shopify' />
      </div>
    </div>
  )
}

export default brand