import React from 'react'
import { useRef } from 'react'

export default function MessageForm({handlePostMessage}) {

  // nytt koncept
  const messageInputField = useRef()

  function handleOnClick() {
    const message = messageInputField.current.value
    handlePostMessage(message)
  }

  return (
    <div>
      <h2>Message form</h2>
      <input type="text" ref={messageInputField} />
      <button className="btn btn-dark btn-sm" onClick={handleOnClick}>Send Message</button>
    </div>
  )
}
