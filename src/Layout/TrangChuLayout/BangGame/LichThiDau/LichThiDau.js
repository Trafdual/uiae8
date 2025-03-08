import React, { useState, useEffect } from 'react'
import { getApiUrl } from '../../../../api'

const LichThiDau = () => {
  const today = new Date()
  const generateDates = () => {
    return Array.from({ length: 4 }, (_, i) => {
      const date = new Date()
      date.setDate(today.getDate() + i)
      return date.toISOString().split('T')[0]
    })
  }

  const [dates] = useState(generateDates())
  const [activeDate, setActiveDate] = useState(dates[0])
  const [data, setdata] = useState([])

  const fetchtrandau = async () => {
    try {
      const response = await fetch(
        `${getApiUrl('searchtrantheongay')}?date=${activeDate}`
      )
      const data = await response.json()
      if (data.message) {
        console.log(data.message)
      } else {
        setdata(data)
      }
    } catch (error) {
      console.error('Failed to fetch API: ', error)
    }
  }

  useEffect(() => {
    fetchtrandau()
  }, [activeDate])

  console.log(data)

  return (
    <div className='lichthidau' id='lichthidau'>
      <div className='divinputsearch'>
        <div className='inputtk'>
          <input type='text' placeholder='Tìm kiếm trận đấu' />
          <img src='/assets/images/search2.png' alt='' />
        </div>
      </div>
      <div className='lichtyso'>
        {dates.map((date, index) => (
          <div
            className={
              activeDate === date ? 'item-lich item-lich-active' : 'item-lich'
            }
            key={index}
            onClick={() => setActiveDate(date)}
          >
            <p>{date}</p>
          </div>
        ))}
      </div>
      {data.map((item, index) => (
        <div className='divitemtyso'>
          <div className='item-tyso'>
            <div className='tieudescore'>
              <h4>Iran Division 2</h4>
              <p>17:45 {dates[0]}</p>
            </div>
            <div className='doibongtong'>
              <div className='divdoibong'>
                <div className='doibong'>
                  <img
                    src='https://okebet.vin/app/soccer/team/oghab-tehran.jpg'
                    alt=''
                  />
                  <p>KIA Academy</p>
                </div>
                <div className='doibong'>
                  <img
                    src='https://okebet.vin/app/soccer/team/oghab-tehran.jpg'
                    alt=''
                  />
                  <p>KIA Academy</p>
                </div>
              </div>
              <div className='divtyso'>
                <p>[FT] Chẵn</p>
                <p>@80%</p>
                <div className='thanh'>
                  <span className='percentage'>60%</span>
                  <div className='progress'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LichThiDau
