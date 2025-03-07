import { useEffect, useState } from 'react'
import './Notifition.scss'

const Notification = ({ message, isVisible, onClose }) => {
  const [progress, setProgress] = useState(0)
  const duration = 5000

  const handelclose = () => {
    setProgress(0)
    onClose()
  }
  useEffect(() => {
    if (isVisible) {
      setProgress(0)
      let startTime = Date.now()

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime
        const progressValue = Math.min((elapsed / duration) * 100, 100)
        setProgress(progressValue)

        if (progressValue >= 100) {
          clearInterval(interval)
          setProgress(0)
          onClose()
        }
      }, 50)

      return () => clearInterval(interval)
    }
  }, [isVisible, duration, onClose])

  return (
    <div className='notification-container'>
      <div className={`notification ${isVisible ? 'show' : 'hidden'}`}>
        <img src='/assets/images/daily/iconinfor.png' alt='Info Icon' />
        <div className='divndnotification'>
          <h3>Thông báo</h3>
          <p className='ndnotification'>{message}</p>
        </div>
        <div className='close-notifi' onClick={handelclose}>
          x
        </div>
        <div className='thanhthoigian'>
          <div className='progress-bar' style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  )
}

export default Notification
