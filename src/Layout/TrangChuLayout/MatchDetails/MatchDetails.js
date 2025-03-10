import React, { useEffect, useState } from 'react'
import './MatchDetails.scss'
import { Link, useParams } from 'react-router-dom'
import { getApiUrl } from '../../../api'
import { getFromsessionstorage } from '../../../component/MaHoaDuLieu/MaHoaDuLieu'
import {
  convertTimestampToDate,
  convertTimestampToDateTime,
  convertTimestampToTime
} from '../../../component/ConvertTime'

const MatchDetails = () => {
  const { gameID } = useParams()
  const [showModal, setShowModal] = useState(false)
  const [betAmount, setBetAmount] = useState(0)
  const [data, setdata] = useState({})
  const [idtab, setidtab] = useState('1_1')
  const [keodata, setkeodata] = useState({})
  const [betinfo, setbetinfo] = useState({})
  const [betdata, setbetdata] = useState()
  const [gamekey, setgamekey] = useState()
  const [tabname, settabname] = useState('FT Tỷ số')
  const userdata = JSON.parse(getFromsessionstorage('data_u'))
  console.log(userdata)

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

  const fetchbetinfo = async () => {
    try {
      const response = await fetch(`${getApiUrl('betinfo')}?gameId=${gameID}`)
      const data = await response.json()
      setbetinfo(data)
    } catch (error) {
      console.error(error)
    }
  }
  useEffect(() => {
    if (gameID) {
      fetchGameDetails()
      fetchbetinfo()
    }
  }, [gameID])

  useEffect(() => {
    if (gameID && idtab) {
      fetchkeodat()
    }
  }, [gameID, idtab])

  const handeldatcuoc = async () => {
    try {
      const response = await fetch(`${getApiUrl('datcuoc')}/${userdata.id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          gameKey:gamekey,
          gameId:gameID,
          betAmount,
          betType:idtab,
          profit:betdata.value
        })
      })
      const data = await response.json()
      if(data.message){
        alert(data.message)
      }
      else{
        alert(data.success)
      }
    } catch (error) {
      console.log(error)
    }
  }

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
          <GameDate
            date={
              data?.started ? convertTimestampToDateTime(data.started) : 'N/A'
            }
            countdown='01:00:00'
          />
          <Team
            name={data.awayTeam}
            logo={`${getApiUrl('linkanh')}/${data.awayIcon}`}
          />
        </div>
      </div>

      <div className='divnghichtyso'>
        <Tabs
          idtab={idtab}
          setidtab={setidtab}
          betinfo={betinfo}
          settabname={settabname}
        />
        <div class='tieudenghich'>
          <h4>Đặt cược</h4>
        </div>

        <ScorePredictions
          openModal={() => setShowModal(true)}
          data={keodata}
          setbetdata={setbetdata}
          setgamekey={setgamekey}
        />
      </div>

      {showModal && (
        <BetModal
          closeModal={() => setShowModal(false)}
          betAmount={betAmount}
          setBetAmount={setBetAmount}
          data={data}
          betdata={betdata}
          tabname={tabname}
          handeldatcuoc={handeldatcuoc}
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

const Tabs = ({ idtab, setidtab, betinfo, settabname }) => {
  const tabNames = [
    { id: '1_1', name: 'FT Tỷ số', type: 'FT' },
    { id: '1_2', name: 'FT Chẵn lẻ', type: 'FT' },
    { id: '1_3', name: 'FT Thắng Hòa Thua', type: 'FT' },
    { id: '2_1', name: 'HT Tỷ số', type: 'HT' },
    { id: '2_3', name: 'HT Thắng Hòa Thua', type: 'HT' },
    { id: '3_1', name: 'H2T Tỷ số', type: 'H2T' }
  ]
  const filteredTabs = tabNames.filter(tab => betinfo[tab.id])

  return (
    <div className='m-tab'>
      {filteredTabs.map((tab, index) => (
        <button
          key={index}
          className={`m-tab-item ${tab.id === idtab ? 'active' : ''}`}
          onClick={() => {
            settabname(tab.name)
            setidtab(tab.id)
          }}
        >
          {tab.name}
        </button>
      ))}
    </div>
  )
}

const ScorePredictions = ({ openModal, data, setbetdata, setgamekey }) => {
  const handelgamekey = (gamekey, betdata) => {
    setgamekey(gamekey)
    setbetdata(betdata)
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
                  handelgamekey(gamekey, item)
                  openModal()
                }
              : null
          }
        >
          <p>{item.name}</p>
          {item.locked ? (
            <img src='../assets/images/cskh/lock2.png' alt='Locked' />
          ) : (
            <p>{item.value.toFixed(2)}%</p>
          )}
        </div>
      ))}
    </div>
  )
}

const BetModal = ({
  closeModal,
  betAmount,
  setBetAmount,
  data,
  betdata,
  tabname,
  handeldatcuoc

}) => {
  const handleAmountClick = value => {
    setBetAmount(value)
  }
  const game_bet_fee = 0.05
  const betloinhuan = (betAmount * betdata.value) / 100
  const betffe = -betloinhuan * game_bet_fee
  const betloinhuanrong = betloinhuan - betloinhuan * game_bet_fee

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
          <p>{tabname}</p>
          <p>{betdata.nam}</p>
          <p>@{betdata.value}%</p>
        </div>
        <div className='teamtime'>
          <img src={`${getApiUrl('linkanh')}/${data.homeIcon}`} alt='Team 1' />
          <div className='ngaygio'>
            <p>{convertTimestampToTime(data.started)}</p>
            <p>{convertTimestampToDate(data.started)}</p>
            <p>01:36:47</p>
          </div>
          <img src={`${getApiUrl('linkanh')}/${data.awayIcon}`} alt='Team 2' />
        </div>
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
            <button type='button' onClick={() => handleAmountClick(200)}>
              200
            </button>
            <button type='button' onClick={() => handleAmountClick(500)}>
              500
            </button>
            <button type='button' onClick={() => handleAmountClick(1000)}>
              1,000
            </button>
            <button type='button' onClick={() => handleAmountClick(2000)}>
              2,000
            </button>
            <button type='button' onClick={() => handleAmountClick(5000)}>
              5,000
            </button>
            <button type='button' onClick={() => handleAmountClick(0)}>
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
              <p>x{betdata.value}%</p>
              <p>{betloinhuan.toFixed(2)}</p>
              <p>{betffe.toFixed(2)}</p>
              <p>{betloinhuanrong.toFixed(2)}</p>
            </div>
          </div>
          <div className='btnmodal'>
            <button className='btnhuy' type='button' onClick={closeModal}>
              Hủy bỏ
            </button>
            <button  className='place-bet' onClick={handeldatcuoc}>
              Đặt cược
            </button>
          </div>
      </div>
    </div>
  )
}

export default MatchDetails
