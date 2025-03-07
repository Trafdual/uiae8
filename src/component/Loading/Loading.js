import React from 'react'
import './Loading.scss'
const Loading = ({ isLoading }) => {
  if (!isLoading) return null
  return (
    <div id='loadingOverlay' class='loading-overlay'>
      <div class='spinner'></div>
    </div>
  )
}

export default Loading
