import React, { useEffect, useState } from 'react'
import './MatchDetails.scss'
import { Link, useParams } from 'react-router-dom'
import { getApiUrl } from '../../../api'

const MatchDetails = () => {
  const { gameID } = useParams()
  const [showModal, setShowModal] = useState(false)
  const [betAmount, setBetAmount] = useState('')
  const [data, setdata] = useState({})
  const [idtab, setidtab] = useState('1_1')
  const [keodata, setkeodata] = useState({})

  const fetchkeodat = async () => {
    try {
      const response = await fetch(
        `${getApiUrl('keochitiet')}/${gameID}?type=${idtab}`
      )
      const data = await response.json()
      setkeodata(data)
    } catch (error) {
      console.error(error)
    }
  }

  const fetchGameDetails = async () => {
    try {
      const response = await fetch(`${getApiUrl('chitiettran')}/${gameID}`)
      const data = await response.json()
      setdata(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    if (gameID) {
      fetchGameDetails()
    }
  }, [gameID])

  useEffect(() => {
    if (gameID && idtab) {
      fetchkeodat()
    }
  }, [gameID, idtab])

  return (
    <div className='container-detailsmatch'>
      <header className='head'>
        <div className='divimgback'>
          <Link to='/'>
            <img src='/assets/images/back.png' alt='Back' />
          </Link>
        </div>
        <div className='divtttd'>
          <h4>Thông Tin Trận Đấu</h4>
        </div>
      </header>

      <div className='game-info1'>
        <div className='league-name'>
          <h4>{data.leagueName}</h4>
        </div>
        <div className='team-box'>
          <Team
            name={data.homeTeam}
            logo={`${getApiUrl('linkanh')}/${data.homeIcon}`}
          />
          <GameDate date='23:13 28/12' countdown='01:00:00' />
          <Team
            name={data.awayTeam}
            logo={`${getApiUrl('linkanh')}/${data.awayIcon}`}
          />
        </div>
      </div>

      <div className='divnghichtyso'>
        <Tabs idtab={idtab} setidtab={setidtab} />
        <div class='tieudenghich'>
          <h4>Đặt cược</h4>
        </div>

        <ScorePredictions openModal={() => setShowModal(true)} data={keodata} />
      </div>

      {showModal && (
        <BetModal
          closeModal={() => setShowModal(false)}
          betAmount={betAmount}
          setBetAmount={setBetAmount}
        />
      )}
    </div>
  )
}

const Team = ({ name, logo }) => (
  <div className='team-item'>
    <img src={logo} alt={name} className='team-logo' />
    <div className='team-name'>{name}</div>
  </div>
)

const GameDate = ({ date, countdown }) => (
  <div className='game-date'>
    <div className='date'>
      <b>{date}</b>
    </div>
    <div className='time'>
      <span>{countdown}</span>
    </div>
  </div>
)

const Tabs = ({ idtab, setidtab }) => {
  const tabNames = [
    { id: '1_1', name: 'FT Tỷ số', type: 'FT' },
    { id: '1_2', name: 'FT Chẵn lẻ', type: 'FT' },
    { id: '1_3', name: 'FT Thắng Hòa Thua', type: 'FT' },
    { id: '2_1', name: 'HT Tỷ số', type: 'HT' },
    { id: '2_3', name: 'HT Thắng Hòa Thua', type: 'HT' },
    { id: '3_1', name: 'H2T Tỷ số', type: 'H2T' }
  ]

  return (
    <div className='m-tab'>
      {tabNames.map((tab, index) => (
        <button
          key={index}
          className={`m-tab-item ${tab.id === idtab ? 'active' : ''}`}
          onClick={() => setidtab(tab.id)}
        >
          {tab.name}
        </button>
      ))}
    </div>
  )
}

const ScorePredictions = ({ openModal, data }) => {
  const handelgamekey = gamekey => {
    console.log(gamekey)
  }
  return (
    <div className='bodynghich'>
      {Object.entries(data).map(([gamekey, item]) => (
        <div
          key={gamekey}
          className='item-nghich'
          onClick={
            !item.locked
              ? () => {
                  handelgamekey()
                  openModal()
                }
              : null
          }
        >
          <p>{item.name}</p>
          {item.locked ? (
            <img src='../assets/images/cskh/lock2.png' alt='Locked' />
          ) : (
            <p>{item.value}%</p>
          )}
        </div>
      ))}
    </div>
  )
}

const BetModal = ({ closeModal, betAmount, setBetAmount }) => {
  const handleAmountClick = value => {
    setBetAmount(value)
  }

  return (
    <div id='modal' className='modal-detailmatch'>
      <div className='modal-content-detailmatch'>
        <div className='tieudemodal'>
          <button className='close-modal' onClick={closeModal}>
            x
          </button>
          <h4>Đặt cược</h4>
        </div>
        <div className='divtysomodal'>
          <p>FT Tỷ số</p>
          <p>0:0</p>
          <p>@2.22%</p>
        </div>
        <div className='teamtime'>
          <img src='/assets/images/doi1.jpe' alt='Team 1' />
          <div className='ngaygio'>
            <p>18:00</p>
            <p>27/12/2024</p>
            <p>01:36:47</p>
          </div>
          <img src='/assets/images/doi2.webp' alt='Team 2' />
        </div>
        <form>
          <div className='sotien'>
            <p>Số tiền:</p>
            <input
              placeholder='Hạn mức một giao dịch tối thiểu 10 coin'
              id='input-sotien'
              value={betAmount} // Hiển thị giá trị đã chọn
              readOnly // Không cho phép nhập tay
              required
            />
          </div>
          <div className='options'>
            <button type='button' onClick={() => handleAmountClick('200')}>
              200
            </button>
            <button type='button' onClick={() => handleAmountClick('500')}>
              500
            </button>
            <button type='button' onClick={() => handleAmountClick('1000')}>
              1,000
            </button>
            <button type='button' onClick={() => handleAmountClick('2000')}>
              2,000
            </button>
            <button type='button' onClick={() => handleAmountClick('5000')}>
              5,000
            </button>
            <button type='button' onClick={() => handleAmountClick('Toàn bộ')}>
              Toàn bộ
            </button>
          </div>
          <div className='divtyle'>
            <div className='tieudetyle'>
              <p>Tỷ lệ thắng</p>
              <p>Lợi nhuận kì vọng</p>
              <p>Phí thủ tục</p>
              <p>Lợi nhuận ròng</p>
            </div>
            <div className='tyle'>
              <p>x2.22%</p>
              <p>0</p>
              <p>0</p>
              <p>0</p>
            </div>
          </div>
          <div className='btnmodal'>
            <button className='btnhuy' type='button' onClick={closeModal}>
              Hủy bỏ
            </button>
            <button type='submit' className='place-bet'>
              Đặt cược
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default MatchDetails
