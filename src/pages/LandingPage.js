import React, { useEffect, useState } from 'react'
import logo from '../images/logo.png'
import landingImg from '../images/landingImg.png'
import group from '../images/Group.png'
import { Link } from 'react-router-dom'
import { useMediaQueries } from '@react-hook/media-query'

const LandingPage = () => {
  const [image, setImage] = useState('')
  const { matches, matchesAny, matchesAll } = useMediaQueries({
    screen: 'screen',
    width: '(max-width: 390px)',
  })

  useEffect(() => {
    if (matches.width) {
      setImage(group)
    } else {
      setImage(landingImg)
    }
  }, [matches.width, setImage, image])

  return (
    <div className='container'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>

      <div className='landing'>
        <img src={image} alt='landinglogo' />
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
