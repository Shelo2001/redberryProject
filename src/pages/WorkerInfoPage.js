import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import footer from '../images/footer.png'
const WorkerInfoPage = () => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [team, setTeam] = useState('')
  const [position, setPosition] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const personInfo = { name, surname, email, team, position, phoneNumber }

  const submitHandler = () => {
    localStorage.setItem('personInfo', JSON.stringify(personInfo))
  }
  {
    console.log(personInfo)
  }
  return (
    <div>
      <div className='infoBody'>
        <Link to='/'>
          <button className='backButton left'>
            <i class='fa-solid fa-chevron-left'></i>
          </button>
        </Link>
        <div className='nav'>
          <p className='navTitle'>თანამშრომლის ინფო</p>
          <p className='navTitle'>ლეპტოპის მახასიათებლები</p>
        </div>
        <div className='infobody'>
          <div className='infoPerson'>
            <div>
              <p className='label'>სახელი</p>
              <input
                type='text'
                className='input'
                placeholder='გრიშა'
                onChange={(e) => setName(e.target.value)}
              />
              <p className='label3'>მინიმუმ 2 სიმბოლო ქართული ასოებით</p>
            </div>
            <div>
              <p className='label'>გვარი</p>

              <input
                type='text'
                className='input'
                placeholder='ბაგრატიონი'
                onChange={(e) => setSurname(e.target.value)}
              />
              <p className='label3'>მინიმუმ 2 სიმბოლო ქართული ასოებით</p>
            </div>
          </div>
          <div>
            <select
              value={team}
              className='select'
              onChange={(e) => setTeam(e.target.value)}
            >
              <option disabled selected>
                თიმი
              </option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>
          <div>
            <select
              value={position}
              className='select'
              onChange={(e) => setPosition(e.target.value)}
            >
              <option disabled selected>
                პოზიცია
              </option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </div>
          <div>
            <p className='label1'>ემაილი</p>

            <input
              type='text'
              className='input1'
              placeholder='grisha@redburry.com'
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className='label2'>უნდა მთავრდებოდეს @redburry.com</p>
          </div>
          <div>
            <p className='label1'>ტელეფონის ნომერი</p>

            <input
              type='text'
              className='input1'
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <p className='label2'>უნდა აკმაყოფილებდეს ქართული ნომრის ფორმატს</p>
          </div>
          <Link to='/laptopinfo'>
            <button onClick={submitHandler} className='button1'>
              შემდეგი
            </button>
          </Link>
        </div>
        <img className='footer' src={footer}></img>
      </div>
    </div>
  )
}

export default WorkerInfoPage
