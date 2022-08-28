import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import footer from '../images/footer.png'
import axios from 'axios'

const WorkerInfoPage = () => {
  const navigate = useNavigate()
  const [teamsInfo, setTeamsInfo] = useState([])
  const [positionInfo, setPositionInfo] = useState([])

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [team, setTeam] = useState(0)
  const [position, setPosition] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [emailError, setEmailError] = useState('')
  const [nameError, setNameError] = useState('')
  const [surnameError, setSurnameError] = useState('')

  const res = /^[ა-ჰ]+$/

  const personInfo = { name, surname, email, team, position, phoneNumber }
  const submitHandler = () => {
    localStorage.setItem('personInfo', JSON.stringify(personInfo))
    if (email.split('@')[1] != 'redberry.ge') {
      setEmailError('უნდა მთავრდებოდეს @redburry.ge')
    }
    if (!res.test(`${name}`)) {
      setNameError('error')
    }
    if (!res.test(`${surname}`)) {
      console.log('error')
    } else {
      navigate('/laptopinfo')
    }
  }

  useEffect(() => {
    const getTeams = async () => {
      const { data } = await axios.get(
        'https://pcfy.redberryinternship.ge/api/teams'
      )
      setTeamsInfo(data.data)
    }

    const getPositions = async () => {
      const { data } = await axios.get(
        'https://pcfy.redberryinternship.ge/api/positions'
      )
      setPositionInfo(data.data)
    }
    getTeams()
    getPositions()
  }, [setPositionInfo])

  useEffect(() => {
    const getPerson = JSON.parse(localStorage.getItem('personInfo'))
    if (getPerson) {
      setName(getPerson.name)
      setSurname(getPerson.surname)
      setEmail(getPerson.email)
      setTeam(getPerson.team)
      setPosition(getPerson.position)
      setPhoneNumber(getPerson.phoneNumber)
    }
  }, [])

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
              {nameError ? (
                <p style={{ color: 'red', fontWeight: 'bold' }}>სახელი</p>
              ) : (
                <p className='label'>სახელი</p>
              )}
              <input
                type='text'
                className={nameError ? 'inputError' : 'input'}
                placeholder='გრიშა'
                value={name}
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
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
              />
              <p className='label3'>მინიმუმ 2 სიმბოლო ქართული ასოებით</p>
            </div>
          </div>
          <div>
            <select
              onChange={(e) => setTeam(e.target.value)}
              className='select'
            >
              {teamsInfo.map((team) => (
                <option value={team.id} key={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              className='select'
              onChange={(e) => setPosition(e.target.value)}
            >
              {positionInfo
                .filter((position) => position.team_id == team)
                .map((p) => (
                  <option value={p.id} key={p.id}>
                    {p.name}
                  </option>
                ))}
            </select>
          </div>
          <div>
            {emailError ? (
              <p className='label1' style={{ color: 'red' }}>
                ემაილი
              </p>
            ) : (
              <p className='label1'>ემაილი</p>
            )}

            <input
              type='text'
              className={emailError ? 'errorInput' : 'input1'}
              value={email}
              placeholder='grisha@redburry.com'
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError ? (
              <p className='errorLabel'>{emailError}</p>
            ) : (
              <p className='label2'>უნდა მთავრდებოდეს @redburry.ge</p>
            )}
          </div>
          <div>
            <p className='label1'>ტელეფონის ნომერი</p>

            <input
              type='text'
              className='input1'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <p className='label2'>უნდა აკმაყოფილებდეს ქართული ნომრის ფორმატს</p>
          </div>

          <button onClick={submitHandler} className='button1'>
            შემდეგი
          </button>
        </div>
        <div>
          <img className='footer' src={footer} style={{ bottom: '0' }} />
        </div>
      </div>
    </div>
  )
}

export default WorkerInfoPage
