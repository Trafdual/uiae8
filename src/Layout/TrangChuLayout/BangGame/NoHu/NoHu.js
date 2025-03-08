import React from 'react'
import './NoHu.scss'
import { getFromsessionstorage } from '../../../../component/MaHoaDuLieu'
import { getApiUrl } from '../../../../api'

const NoHuGames = [
  {
    img: '/assets/images/pg.png',

    portfolio: 'SeamlessGame',
    gameproviderid: '35',
    gameid: '0'
  },
  {
    img: '/assets/images/jl.png',
    portfolio: 'SeamlessGame',
    gameproviderid: '1020',
    gameid: '0'
  },
  {
    img: '/assets/images/jdb.png',
    portfolio: 'SeamlessGame',
    gameproviderid: '1058',
    gameid: '0'
  }
]

const NoHu = () => {
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
      {NoHuGames.map((game, index) => (
        <div
          className='item-nohu'
          key={index}
          onClick={() =>
            hanldePostWidthdraw(
              game.portfolio,
              device,
              game.gameproviderid,
              game.gameid
            )
          }
        >
          <img src={game.img} alt='' />
        </div>
      ))}
    </>
  )
}

export default NoHu
