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
        `https://pcfy.redberryinternship.ge/api/laptop/${params.id}?token=93809131a5c595ceaf54d7ab8db53252`
      )

      setUser(data.data.data.user)
      setLaptop(data.data.data.laptop)
      setLoading(false)
    }

    getLaptops()
  }, [])

  return (
    <div>
      {loading ? (
        <p>loading</p>
      ) : (
        <div className='card'>
          <p>{laptop.name}</p>
          <p>{user.name}</p>
        </div>
      )}
    </div>
  )
}

export default LaptopDetailsPage
