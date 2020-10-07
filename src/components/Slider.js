import React from 'react'
import Pop from './Pop'
import '../css/slider.css'

const Slider = () => {
  return (
    <div className='rightside'>
      <Pop />
      <div className='slider'>
        <div className='heading'>
          You’ve used <b>815 GB</b> of your storage
        </div>
        <div className='slide'>
          <div className='meter'>
            <span className='bar'></span>
          </div>
        </div>
        <div className='units'>
          <p className='min'>
            <b>0 GB</b>
          </p>
          <p className='max'>
            <b>1000 GB</b>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Slider
