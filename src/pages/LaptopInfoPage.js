import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import footer from '../images/footer.png'
import frame from '../images/Frame.png'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    minHeight: '400px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
}
const LaptopInfoPage = () => {
  const [cpuInfo, setCpuInfo] = useState([])
  const [brandInfo, setBrandInfo] = useState([])

  const [laptopName, setLaptopName] = useState('')
  const [laptopBrand, setLaptopBrand] = useState('')
  const [laptopCpu, setLaptopCpu] = useState('')
  const [laptopCpuCore, setLaptopCpuCore] = useState(0)
  const [laptopCpuStream, setLaptopCpuStream] = useState(0)
  const [laptopRam, setLaptopRam] = useState(0)
  const [laptopMemoryType, setLaptopMemoryType] = useState('')
  const [laptopDate, setLaptopDate] = useState('')
  const [laptopPrice, setLaptopPrice] = useState(0)
  const [laptopCondition, setLaptopCondition] = useState('')
  const [file, setFile] = useState(null)
  const inputRef = useRef()
  const token = '93809131a5c595ceaf54d7ab8db53252'

  let subtitle
  const [modalIsOpen, setIsOpen] = useState(false)

  const laptopDetails = {
    laptopName,
    laptopBrand,
    laptopCpu,
    laptopCpuCore,
    laptopCpuStream,
    laptopRam,
    laptopMemoryType,
    laptopDate,
    laptopPrice,
    laptopCondition,
    file,
  }

  useEffect(() => {
    const laptopInfo = JSON.parse(localStorage.getItem('laptopInfo'))
    if (laptopInfo) {
      setLaptopName(laptopInfo.laptopName)
      setLaptopBrand(laptopInfo.laptopBrand)
      setLaptopCpu(laptopInfo.laptopCpu)
      setLaptopCpuCore(laptopInfo.laptopCpuCore)
      setLaptopRam(laptopInfo.laptopRam)
      setLaptopCpuStream(laptopInfo.laptopCpuStream)
      setLaptopMemoryType(laptopInfo.laptopMemoryType)
      setLaptopDate(laptopInfo.laptopDate)
      setLaptopPrice(laptopInfo.laptopPrice)
      setLaptopCondition(laptopInfo.laptopCondition)
    }
  }, [])

  useEffect(() => {
    const getCpu = async () => {
      const { data } = await axios.get(
        'https://pcfy.redberryinternship.ge/api/cpus'
      )
      setCpuInfo(data.data)
    }
    const getBrands = async () => {
      const { data } = await axios.get(
        'https://pcfy.redberryinternship.ge/api/brands'
      )
      setBrandInfo(data.data)
    }

    getBrands()
    getCpu()
  }, [])

  const submitHandler = () => {
    const personInfo = JSON.parse(localStorage.getItem('personInfo'))
    localStorage.setItem('laptopInfo', JSON.stringify(laptopDetails))
    const { name, surname, email, team, position, phoneNumber } = personInfo

    axios({
      method: 'post',
      url: 'https://pcfy.redberryinternship.ge/api/laptop/create',
      data: {
        name,
        surname,
        email,
        team_id: team,
        position_id: position,
        phone_number: phoneNumber,
        laptop_name: laptopName,
        laptop_brand_id: laptopBrand,
        laptop_cpu: laptopCpu,
        laptop_cpu_cores: laptopCpuCore,
        laptop_cpu_threads: laptopCpuStream,
        laptop_ram: laptopRam,
        laptop_hard_drive_type: laptopMemoryType,
        laptop_price: laptopPrice,
        laptop_state: laptopCondition,
        laptop_image: file,
        laptop_purchase_date: laptopDate,
        token,
      },
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(function (response) {
        setIsOpen(true)
      })
      .catch(function (response) {
        console.log(response)
      })
  }

  console.log(file)

  return (
    <div>
      <div className='infoBody1'>
        <Link to='/'>
          <button className='backButton left'>
            <i class='fa-solid fa-chevron-left'></i>
          </button>
        </Link>
        <div className='nav' style={{ marginTop: '70px' }}>
          <p className='navTitle'>თანამშრომლის ინფო</p>
          <p className='navTitle'>ლეპტოპის მახასიათებლები</p>
        </div>
        <div className='infobody1'>
          <div className='infoPerson'>
            <div className='file'>
              <p className='laptopFile'>ჩააგდე ან ატვირთე</p>
              <p className='laptopFile'> ლეპტოპის ფოტო</p>
              <label for='file-upload' class='fileAppearance'>
                ატვირთე
              </label>
              <input
                id='file-upload'
                accept='image/*'
                type='file'
                onChange={() => setFile(inputRef.current.files[0])}
                ref={inputRef}
              />
            </div>
          </div>
          <div className='infoPerson'>
            <div>
              <p className='label'>ლეპტოპის სახელი</p>
              <input
                type='text'
                className='input'
                placeholder='HP'
                value={laptopName}
                onChange={(e) => setLaptopName(e.target.value)}
              />
              <p className='label3'>
                მხოლოდ ლათინურ სიმბოლოებს "!@#$%^&*()_+="
              </p>
            </div>
            <div>
              <select
                className='select1'
                onChange={(e) => setLaptopBrand(e.target.value)}
              >
                <option disabled selected>
                  ლეპტოპის ბრენდი
                </option>
                {brandInfo.map((brandItem) => (
                  <option value={brandItem.id} key={brandItem.id}>
                    {brandItem.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <hr className='line' />

          <div class='laptopInfo'>
            <div>
              <select
                className='laptopInfoSelect'
                onChange={(e) => setLaptopCpu(e.target.value)}
              >
                <option disabled selected>
                  CPU
                </option>
                {cpuInfo.map((item) => (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <p className='label'>CPU-ს ბირთვი</p>
              <input
                type='text'
                className='laptopInfoInput'
                value={Number(laptopCpuCore)}
                placeholder='0'
                onChange={(e) => setLaptopCpuCore(e.target.value)}
              />
              <p className='label3'>მხოლოდ ციფრები</p>
            </div>
            <div>
              <p className='label'>CPU-ს ნაკადი</p>
              <input
                type='text'
                className='laptopInfoInput'
                value={Number(laptopCpuStream)}
                placeholder='0'
                onChange={(e) => setLaptopCpuStream(e.target.value)}
              />
              <p className='label3'>მხოლოდ ციფრები</p>
            </div>
          </div>

          <div class='laptopInfoSecondRow'>
            <div>
              <p className='label'>ლეპტოპის RAM (GB)</p>
              <input
                type='text'
                value={Number(laptopRam)}
                className='laptopInfoInput2'
                placeholder='0'
                onChange={(e) => setLaptopRam(e.target.value)}
              />
              <p className='label3'>მხოლოდ ციფრები</p>
            </div>

            <div onChange={(e) => setLaptopMemoryType(e.target.value)}>
              <p className='label'>მეხსიერების ტიპი</p>
              <input type='radio' name='memoryType' value='SSD'></input>
              <label className='radioLabel'>SSD</label>

              <input
                type='radio'
                className='radioButton'
                name='memoryType'
                value='HDD'
              ></input>
              <label className='radioLabel'>HDD</label>
            </div>
          </div>

          <hr className='line' />

          <div class='laptopInfoSecondRow'>
            <div>
              <p className='label'>შეძენის რიცხვი (არჩევითი)</p>
              <input
                type='date'
                value={laptopDate}
                placeholder='დდ/თთ/წწწწ'
                onChange={(e) => setLaptopDate(e.target.value)}
              />
            </div>
            <div>
              <p className='label'>ლეპტოპის ფასი</p>
              <input
                type='text'
                className='laptopInfoInput2'
                placeholder='0'
                value={Number(laptopPrice)}
                onChange={(e) => setLaptopPrice(e.target.value)}
              />
              <i
                class='fa-solid fa-lari-sign'
                style={{ marginLeft: '5px' }}
              ></i>
              <p className='label3'>მხოლოდ ციფრები</p>
            </div>

            <div
              style={{ marginRight: '465px' }}
              value={laptopCondition}
              onChange={(e) => setLaptopCondition(e.target.value)}
            >
              <p className='label'>ლეპტოპის მდგომარეობა</p>
              <input
                type='radio'
                name='laptopCondition'
                value='secondhand'
              ></input>
              <label className='radioLabel'>მეორადი</label>

              <input
                type='radio'
                className='radioButton'
                name='laptopCondition'
                value='new'
              ></input>
              <label className='radioLabel'>ახალი</label>
            </div>
          </div>

          <Link to='/workerinfo'>
            <button
              className='button1'
              style={{
                float: 'left',
                marginLeft: '40px',
                backgroundColor: 'white',
                color: '#84bbf3',
                border: '1px solid white',
              }}
            >
              უკან
            </button>
          </Link>

          <button
            className='button1'
            style={{ marginBottom: '40px' }}
            onClick={submitHandler}
          >
            დამახსოვრება
          </button>

          <div>
            <Modal
              isOpen={modalIsOpen}
              style={customStyles}
              contentLabel='Example Modal'
            >
              <img src={frame} />
              <p className='navTitle1'>ჩანაწერი დამატებულია !</p>
              <Link to='/laptoplist'>
                <button className='button'>სიაში გადაყვანა</button>
              </Link>
              <Link to='/'>
                <button
                  style={{
                    backgroundColor: 'white',
                    color: '#84bbf3',
                    border: '1px solid white',
                    marginTop: '40px',
                  }}
                  className='button'
                >
                  მთავარი
                </button>
              </Link>
            </Modal>
          </div>
        </div>
        <div>
          <img className='footer' src={footer} style={{ bottom: '0' }} />
        </div>
      </div>
    </div>
  )
}

export default LaptopInfoPage
