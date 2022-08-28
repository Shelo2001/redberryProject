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
        <button className='button'>
          <Link to='/workerinfo'>ჩანაწერის დამატება</Link>
        </button>
      </div>
      <div>
        <button className='button'>
          <Link to='/laptoplist'>ჩანაწერების სია</Link>
        </button>
      </div>
    </div>
  )
}

export default LandingPage
