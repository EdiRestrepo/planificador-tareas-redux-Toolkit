import React from 'react'
import { useDispatch } from 'react-redux'
import { clearNotification } from '../redux/notifications/slice';

export const Notification = ({ type, message }) => {
  const dispatch = useDispatch();

  
  const handleClose = () => {
    dispatch(clearNotification())
  }
  return (
    <div style={{
      border: `1px solid ${type === 'warning' ? 'red' : 'blue'}`,
      padding: '10px',
      position: "relative",
    }}>
      <span style={{ position: 'absolute', top: 7, right: 10, cursor: 'pointer' }}
      onClick={handleClose}>x</span>
        <p>{message}</p>
    </div>
  )
}

export default Notification
