import React from 'react'
import '../css/pop.css'

const Pop = () => {
  return (
    <div className='popup'>
      <div className='box'>
        <p className='msg'>
          <b className='value'>185</b> GB Left
        </p>
      </div>
      <div className='arrow'></div>
    </div>
  )
}

export default Pop
