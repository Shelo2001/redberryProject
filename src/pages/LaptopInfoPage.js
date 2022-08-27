import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import footer from '../images/footer.png'

const LaptopInfoPage = () => {
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
  }

  const submitHandler = () => {
    const personInfo = JSON.parse(localStorage.getItem('personInfo'))
    localStorage.setItem('laptopInfo', JSON.stringify(laptopDetails))
    const laptopInfo = JSON.parse(localStorage.getItem('laptopInfo'))
    const { name, surname, email, team, position, phoneNumber } = personInfo
    const info = {
      name,
      surname,
      email,
      team,
      position,
      phoneNumber,
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
    }
  }
  return (
    <div>
      <div className='infoBody1'>
        <Link to='/workerinfo'>
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
              <button className='button2'>ატვირთე</button>
            </div>
          </div>
          <div className='infoPerson'>
            <div>
              <p className='label'>ლეპტოპის სახელი</p>
              <input
                type='text'
                className='input'
                placeholder='HP'
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
                <option value='2'>2</option>
                <option value='3'>3</option>
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
                <option value='2'>2</option>
                <option value='3'>3</option>
              </select>
            </div>
            <div>
              <p className='label'>CPU-ს ბირთვი</p>
              <input
                type='text'
                className='laptopInfoInput'
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
                className='laptopInfoInput2'
                placeholder='0'
                onChange={(e) => setLaptopRam(e.target.value)}
              />
              <p className='label3'>მხოლოდ ციფრები</p>
            </div>

            <div onChange={(e) => setLaptopMemoryType(e.target.value)}>
              <p className='label'>მეხსიერების ტიპი</p>
              <input type='radio' name='memoryType' value='ssd'></input>
              <label className='radioLabel'>SSD</label>

              <input
                type='radio'
                className='radioButton'
                name='memoryType'
                value='hdd'
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
                onChange={(e) => setLaptopPrice(e.target.value)}
              />
              <p className='label3'>მხოლოდ ციფრები</p>
            </div>

            <div
              style={{ marginRight: '465px' }}
              onChange={(e) => setLaptopCondition(e.target.value)}
            >
              <p className='label'>ლეპტოპის მდგომარეობა</p>
              <input
                type='radio'
                name='laptopCondition'
                value='meoradi'
              ></input>
              <label className='radioLabel'>მეორადი</label>

              <input
                type='radio'
                className='radioButton'
                name='laptopCondition'
                value='axali'
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

          <Link to='/laptopinfo'>
            <button
              className='button1'
              style={{ marginBottom: '40px' }}
              onClick={submitHandler}
            >
              შემდეგი
            </button>
          </Link>
        </div>
        <img className='footer' src={footer}></img>
      </div>
    </div>
  )
}

export default LaptopInfoPage
