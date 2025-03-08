import React from 'react'
import { getFromsessionstorage } from '../../../../component/MaHoaDuLieu'
import { getApiUrl } from '../../../../api'

const DaGaGames = [
  {
    img: '/assets/images/daga.png',
    portfolio: 'ThirdPartySportsBook',
    gameproviderid: '1070',
    gameid: '0'
  }
]

const DaGa = () => {
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
      {DaGaGames.map((game, index) => (
        <div
          className='item-daga'
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

export default DaGa
