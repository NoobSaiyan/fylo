import React from 'react'
import '../css/header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='name'>
        <img src='/images/logo.svg' alt=''></img>
      </div>
      <div className='icons'>
        <div className='icon'>
          <img src='/images/icon-document.svg' alt='' />{' '}
        </div>
        <div className='icon'>
          <img src='/images/icon-folder.svg' alt='' />
        </div>
        <div className='icon'>
          <img src='/images/icon-upload.svg' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Header
