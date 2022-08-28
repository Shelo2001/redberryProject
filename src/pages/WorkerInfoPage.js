import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import footer from '../images/footer.png'
import axios from 'axios'

const WorkerInfoPage = () => {
  const [teamsInfo, setTeamsInfo] = useState([])
  const [positionInfo, setPositionInfo] = useState([])

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [team, setTeam] = useState(0)
  const [position, setPosition] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState('')

  const personInfo = { name, surname, email, team, position, phoneNumber }
  const submitHandler = () => {
    localStorage.setItem('personInfo', JSON.stringify(personInfo))
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
              <p className='label'>სახელი</p>
              <input
                type='text'
                className='input'
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
            <p className='label1'>ემაილი</p>

            <input
              type='text'
              className='input1'
              value={email}
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
              value={phoneNumber}
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
