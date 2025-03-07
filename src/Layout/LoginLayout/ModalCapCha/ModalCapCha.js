import React, { useState, useEffect } from 'react'
import './ModalCapCha.scss'

const ModalCapCha = ({ isOpen, onClose }) => {
  const [images, setimages] = useState([])

  const fetchImages = async () => {
    try {
      const response = await fetch('http://localhost:8080/getimagecapcha')
      const data = await response.json()
      if (response.ok) {
        setimages(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (isOpen) {
      fetchImages()
    }
  }, [isOpen])

  if (!isOpen) return null
  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <h3>Chọn hình ảnh giống nhau</h3>
        <div className='captcha-grid'>
          {images.map((src, index) => (
            <img
              key={index}
              src={src.url}
              alt={`captcha-${index}`}
              className='captcha-image'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ModalCapCha
