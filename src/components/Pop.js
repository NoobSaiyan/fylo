import React from 'react'
import '../css/pop.css'

const Pop = () => {
  return (
    <div className='popup'>
      <div className='box'>
        <p className='msg'>
          <span className='value'>185</span> GB Left
        </p>
      </div>
      <div className='arrow'></div>
    </div>
  )
}

export default Pop
