import React from 'react'
import logo from '../images/logo.png'
import landingImg from '../images/landingImg.png'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='container'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>

      <div className='landing'>
        <img src={landingImg} alt='logo' />
      </div>

      <div>
        <Link to='/workerinfo'>
          <button className='button'>ჩანაწერის დამატება</button>
        </Link>
      </div>
      <div>
        <Link to='/laptoplist'>
          {' '}
          <button className='button'>ჩანაწერების სია</button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage
