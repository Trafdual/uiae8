import React from 'react'
import { getFromsessionstorage } from '../../../../component/MaHoaDuLieu'
import { getApiUrl } from '../../../../api'

const TheThaoGames = [
  {
    id: 'SaBa',
    logo: 'https://img.alltocon.com/img/static/gplogo/h-primary/wm.png',
    cover: 'https://img.alltocon.com/img/static/col_cover/live_wm.png',
    img: '/assets/images/anhsaba.webp',
    logoBg: '/assets/images/logosaba.webp',
    portfolio: 'ThirdPartySportsBook',
    gameproviderid: '44',
    gameid: '0'
  },
  {
    id: 'BTI',
    logo: 'https://img.alltocon.com/img/static/gplogo/h-primary/wm.png',
    cover: 'https://img.alltocon.com/img/static/col_cover/live_wm.png',
    img: '/assets/images/anhbti.png',
    logoBg: '/assets/images/logobti.webp',
    portfolio: 'ThirdPartySportsBook',
    gameproviderid: '1022',
    gameid: '0'
  },
  {
    id: 'AG',
    logo: 'https://img.alltocon.com/img/static/gplogo/h-primary/wm.png',
    cover: 'https://img.alltocon.com/img/static/col_cover/live_wm.png',
    img: '/assets/images/anhsbobet.png',
    logoBg: '/assets/images/logosbobet.webp',
    portfolio: 'SportsBook',
    gameproviderid: null,
    gameid: null
  }
]

const TheThao = () => {
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
      {TheThaoGames.map(game => (
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

export default TheThao
