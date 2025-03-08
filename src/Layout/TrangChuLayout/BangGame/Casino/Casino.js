import React from 'react'
import './Casino.scss'
import { getFromsessionstorage } from '../../../../component/MaHoaDuLieu'
import { getApiUrl } from '../../../../api'

const casinoGames = [
  {
    id: 'WM',
    logo: 'https://img.alltocon.com/img/static/gplogo/h-primary/wm.png',
    cover: 'https://img.alltocon.com/img/static/col_cover/live_wm.png',
    img: '/assets/images/anhwm.webp',
    logoBg: '/assets/images/logowm.webp',
    portfolio: 'SeamlessGame',
    gameproviderid: '0',
    gameid: '0'
  },
  {
    id: 'sexy',
    logo: 'https://img.alltocon.com/img/static/gplogo/h-primary/wm.png',
    cover: 'https://img.alltocon.com/img/static/col_cover/live_wm.png',
    img: '/assets/images/anhsexy.png',
    logoBg: '/assets/images/logosexy.webp',
    portfolio: 'SeamlessGame',
    gameproviderid: '7',
    gameid: '0'
  },
  {
    id: 'AG',
    logo: 'https://img.alltocon.com/img/static/gplogo/h-primary/wm.png',
    cover: 'https://img.alltocon.com/img/static/col_cover/live_wm.png',
    img: '/assets/images/anhag.png',
    logoBg: '/assets/images/logoag.webp',
    portfolio: 'SeamlessGame',
    gameproviderid: '1035',
    gameid: '0'
  },
  {
    id: 'DG',
    logo: 'https://img.alltocon.com/img/static/gplogo/h-primary/wm.png',
    cover: 'https://img.alltocon.com/img/static/col_cover/live_wm.png',
    img: '/assets/images/anhdg.webp',
    logoBg: '/assets/images/logodg.webp',
    portfolio: 'SeamlessGame',
    gameproviderid: '1030',
    gameid: '0'
  },
  {
    id: 'EV',
    logo: 'https://img.alltocon.com/img/static/gplogo/h-primary/wm.png',
    cover: 'https://img.alltocon.com/img/static/col_cover/live_wm.png',
    img: '/assets/images/anhevolution.png',
    logoBg: '/assets/images/logoevolution.webp',
    portfolio: 'SeamlessGame',
    gameproviderid: '20',
    gameid: '0'
  }
]

const Casino = () => {
  const device = window.innerWidth > 540 ? 'd' : 'm'
  const userdata = JSON.parse(getFromsessionstorage('data_u'))

  const hanldePostWidthdraw = async (
    portfolio,
    device,
    gameProviderId,
    gameId
  ) => {
    try {
      const response = await fetch(getApiUrl('withdraw'), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          portfolio,
          device,
          gameProviderId,
          gameId,
          userData: userdata,
          productId: null
        })
      })
      const data = await response.json()
      if (data.message) {
        alert(data.message)
      } else {
        if (data.link) {
          window.location.href = data.link
        }
        console.log(data)
      }
    } catch (error) {
      console.error('Failed to fetch API: ', error)
    }
  }

  return (
    <>
      {casinoGames.map(game => (
        <div
          className='item-casino'
          key={game.id}
          onClick={() =>
            hanldePostWidthdraw(
              game.portfolio,
              device,
              game.gameproviderid,
              game.gameid
            )
          }
        >
          <div className='game-content'>
            <div
              className='game-logo'
              style={{ backgroundImage: `url(${game.logo})` }}
            ></div>
            <div
              className='game-col-cover'
              style={{ backgroundImage: `url(${game.cover})` }}
            ></div>
            <img
              className='customized-content'
              src={game.img}
              alt={`Live Casino ${game.id}`}
              loading='eager'
            />
          </div>
          <div className='game-info'>
            <h3 gp={game.id} style={{ backgroundImage: `url(${game.logoBg})` }}>
              {game.id}
            </h3>
            <div className='pd-name' data-type='LIVE'>
              {game.id}
            </div>
            <button>Bắt đầu</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Casino
