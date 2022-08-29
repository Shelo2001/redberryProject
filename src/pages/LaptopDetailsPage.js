import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import footer from '../images/footer.png'

const LaptopDetailsPage = () => {
  const [user, setUser] = useState({})
  const [laptop, setLaptop] = useState({})
  const [loading, setLoading] = useState(true)
  const params = useParams()

  useEffect(() => {
    const getLaptops = async () => {
      const data = await axios.get(
        `https://pcfy.redberryinternship.ge/api/laptop/${params.id}?token=9416272e2b43dd04ac6786836a8a340e`
      )

      setUser(data.data.data.user)
      setLaptop(data.data.data.laptop)
      setLoading(false)
    }

    getLaptops()
  }, [])

  return (
    <div>
      <Link to='/'>
        <button className='backButton left'>
          <i class='fa-solid fa-chevron-left'></i>
        </button>
      </Link>
      <p
        className='navTitle1'
        style={{ width: '20%', margin: 'auto', marginTop: '40px' }}
      >
        ლეპტოპის ინფო
      </p>
      <div class='wrapper'>
        <div class='column'>
          <div class='product-wrap'>
            <div>
              <img
                style={{
                  minHeight: '260px',
                  minWidth: '360px',
                  maxWidth: '360px',
                }}
                src={`https://pcfy.redberryinternship.ge${laptop.image}`}
                alt=''
              />
            </div>
          </div>
        </div>

        <div className='information'>
          <div className='column1 label1'>
            <p>სახელი:</p>
            <p>თიმი:</p>
            <p>პოზიცია:</p>
            <p>მეილი:</p>
            <p>ტელ. ნომერი:</p>
          </div>
          <div className='column1 label4'>
            <p>
              {user.name} {user.surname}
            </p>
            <p>{user.team_id}</p>
            <p>{user.position_id}</p>
            <p>{user.email}</p>
            <p>{user.phone_number}</p>
          </div>
        </div>
      </div>
      <hr className='line' style={{ width: '50%' }} />

      <div class='wrapper'>
        <div class='column'>
          <div className='information'>
            <div className='column1 label1'>
              <p>ლეპტოპის სახელი:</p>
              <p>ბრენდი:</p>
              <p>RAM:</p>
              <p>მეხსიერების ტიპი:</p>
            </div>
            <div className='column1 label4'>
              {console.log(laptop)}
              <p>{laptop.name}</p>
              <p>{laptop.brand_id}</p>
              <p>{laptop.ram}</p>
              <p>{laptop.hard_drive_type}</p>
            </div>
          </div>
        </div>

        <div class='column'>
          <div className='information'>
            <div className='column1 label1'>
              <p>CPU:</p>
              <p>CPU_ს ბირთვი:</p>
              <p>CPU_ს ნაკადი:</p>
            </div>
            <div className='column1 label4'>
              <p>{laptop.cpu_id}</p>
              <p>{laptop.ram}</p>
              <p>{laptop.hard_drive_type}</p>
            </div>
          </div>
        </div>
      </div>

      <hr className='line' style={{ width: '50%' }} />

      <div class='wrapper'>
        <div class='column'>
          <div className='information'>
            <div className='column1 label1'>
              <p>ლეპტოპის მდგომარეობა:</p>
              <p>ლეპტოპის ფასი:</p>
            </div>
            <div className='column1 label4'>
              {laptop.state == 'used' ? <p>მეორადი</p> : <p>ახალი</p>}
              <p style={{ marginTop: '40px' }}>{laptop.price}</p>
            </div>
          </div>
        </div>

        <div class='column'>
          <div className='information'>
            <div className='column1 label1'>
              <p>შევსების რიცხვი:</p>
            </div>
            <div className='column1 label4'>
              <p>{laptop.purchase_date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaptopDetailsPage
