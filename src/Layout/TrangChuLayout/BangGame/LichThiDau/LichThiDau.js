import React, { useState, useEffect } from 'react'
import { getApiUrl } from '../../../../api'

const removeVietnameseTones = str => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
}

const LichThiDau = () => {
  const today = new Date()

  const generateDates = () => {
    return Array.from({ length: 4 }, (_, i) => {
      const date = new Date()
      date.setDate(today.getDate() + i)
      return date.toISOString().split('T')[0]
    })
  }

  const convertTimestampToTime = timestamp => {
    const date = new Date(timestamp * 1000)
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  const [dates] = useState(generateDates())
  const [activeDate, setActiveDate] = useState(dates[0])
  const [data, setData] = useState([])
  const [searchText, setSearchText] = useState('')
  const [percentages, setPercentages] = useState({})
  const [imageUrls, setImageUrls] = useState({})

  const fetchTranDau = async () => {
    try {
      const response = await fetch(
        `${getApiUrl('searchtrantheongay')}?date=${activeDate}`
      )
      const data = await response.json()
      if (data.message) {
        console.log(data.message)
      } else {
        setData(data)

        const newPercentages = {}
        data.forEach(item => {
          newPercentages[item.id] = (Math.random() * (5 - 2) + 2).toFixed(2)
        })
        setPercentages(newPercentages)
      }
    } catch (error) {
      console.error('Failed to fetch API: ', error)
    }
  }

  const fetchImages = async matches => {
    const urls = {}
    for (const item of matches) {
      try {
        const homeresponse = await fetch(
          `${getApiUrl('linkanh')}/${item.homeIcon}`
        )
        const homeblob = await homeresponse.blob()
        urls[item.homeIcon] = URL.createObjectURL(homeblob)
        const awayresponse = await fetch(
          `${getApiUrl('linkanh')}/${item.awayIcon}`
        )
        const awayblob = await awayresponse.blob()
        urls[item.awayIcon] = URL.createObjectURL(awayblob)
      } catch (error) {
        console.error('Lỗi tải ảnh:', error)
      }
    }
    setImageUrls(urls)
  }

  useEffect(() => {
    fetchTranDau()
  }, [activeDate])

  useEffect(() => {
    fetchImages(data)
  }, [data])

  const filteredData = data.filter(item => {
    const leagueName = removeVietnameseTones(item.leagueName.toLowerCase())
    const homeTeam = removeVietnameseTones(item.homeTeam.toLowerCase())
    const awayTeam = removeVietnameseTones(item.awayTeam.toLowerCase())

    const keyword = removeVietnameseTones(searchText.trim().toLowerCase())

    return (
      leagueName.includes(keyword) ||
      homeTeam.includes(keyword) ||
      awayTeam.includes(keyword)
    )
  })

  return (
    <div className='lichthidau' id='lichthidau'>
      <div className='divinputsearch'>
        <div className='inputtk'>
          <input
            type='text'
            placeholder='Tìm kiếm trận đấu'
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
          />
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
      {filteredData.length > 0 ? (
        filteredData.map(item => (
          <div className='divitemtyso' key={item.id}>
            <div className='item-tyso'>
              <div className='tieudescore'>
                <h4>{item.leagueName}</h4>
                <p>{convertTimestampToTime(item.started)}</p>
              </div>
              <div className='doibongtong'>
                <div className='divdoibong'>
                  <div className='doibong'>
                    <img src={imageUrls[item.homeIcon]} alt='' />
                    <p>{item.homeTeam}</p>
                  </div>
                  <div className='doibong'>
                    <img src={imageUrls[item.awayIcon]} alt='' />
                    <p>{item.awayTeam}</p>
                  </div>
                </div>
                <div className='divtyso'>
                  <p>[FT] 0:0</p>
                  <p>{percentages[item.id]}%</p>
                  <div className='thanh'>
                    <span className='percentage'>{percentages[item.id]}%</span>
                    <div
                      className='progress'
                      style={{ width: `${percentages[item.id]}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div
          className='list-bottom center'
          style={{ justifyContent: 'center' }}
        >
          <div className='nodata'>
            <h4 className='data'>
              <span>Không có dữ liệu</span>
            </h4>
          </div>
        </div>
      )}
    </div>
  )
}

export default LichThiDau
