import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import footer from '../images/footer.png'

const LaptopListPage = () => {
  const [loading, setLoading] = useState(true)
  const [laptop, setLaptop] = useState()

  useEffect(() => {
    const getLaptops = async () => {
      const data = await axios.get(
        'https://pcfy.redberryinternship.ge/api/laptops?token=93809131a5c595ceaf54d7ab8db53252'
      )

      console.log()
      setLaptop(data.data.data)
      setLoading(false)
    }

    getLaptops()
  }, [])

  return (
    <div>
      <div className='infoBody1' style={{ backgroundColor: 'white' }}>
        <Link to='/'>
          <button className='backButton left'>
            <i className='fa-solid fa-chevron-left'></i>
          </button>
        </Link>
        <div className='nav'>
          <p className='navTitle1' style={{ marginBottom: '100px' }}>
            ჩანაწერების სია
          </p>
        </div>
        <div className='cardContainer'>
          {loading ? (
            <p>loading</p>
          ) : (
            laptop.map((l) => (
              <div className='card'>
                <div className='cardInfo'>
                  <img src={l.laptop.image}></img>
                </div>
                <div className='cardInfo'>
                  <p
                    style={{
                      marginTop: '5px',
                      marginLeft: '5px',
                      fontSize: '20px',
                      fontWeight: 'bold',
                    }}
                  >
                    {l.user.name}
                  </p>
                  <p
                    style={{
                      marginTop: '5px',
                      marginLeft: '5px',
                      fontSize: '16px',
                      fontWeight: 'normal',
                    }}
                  >
                    {l.laptop.name}
                  </p>
                  <p>
                    <Link
                      style={{
                        marginTop: '5px',
                        marginLeft: '5px',
                        color: '#4d9ac3',
                        textDecoration: 'underline',
                      }}
                      to={`/laptopinfo/${l.laptop.id}`}
                    >
                      მეტის ნახვა
                    </Link>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <div>
          <img className='footer' src={footer} style={{ bottom: '0' }} />
        </div>
      </div>
    </div>
  )
}

export default LaptopListPage