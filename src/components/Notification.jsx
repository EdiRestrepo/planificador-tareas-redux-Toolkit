import React from 'react'

export const Notification = ({type, message}) => {
  return (
    <div style={{border: `1px solid ${type === 'warning' ? 'red': 'blue' }`, padding: '10px'}}>
        <p>{message}</p>
    </div>
  )
}

export default Notification
