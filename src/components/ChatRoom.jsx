import React from 'react'
import { useState, useEffect } from 'react'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

export default function ChatRoom() {
  const MESSAGE_LIST_URL = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json"

  const CHAT_ROOM_URL = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json"
  // endpoint för flera rum: https://mock-data-api.firebaseio.com/chatrooms.json
  let [chatRoom, setChatRoom] = useState({})

  function handleGetChatRoom() {
    const url = CHAT_ROOM_URL
    fetch(url)
    .then(res => res.json())
    .then(data => setChatRoom(data))
  }

  useEffect(() => {
    handleGetChatRoom()
  }, [])

    // när vi klickar på knappen ska man skicka tillbaka meddelandet till backend
    function handlePostMessage(message){
      const url = MESSAGE_LIST_URL
      const data = {
        message: message
      }
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => {
        handleGetChatRoom()
      })
    }

  return (
    <div>
      <h1>{chatRoom.name}</h1>
      <ul>
        {
          // Object.entries - gör om från key value till en array
          // gör det lättare att loopa igenom det fast man har blaj-iden
          // tar alla keys och sätter som första index och vales som obj 2
          <div>
            <MessageForm handlePostMessage={handlePostMessage}/>
            <MessageList chatRoom={chatRoom} />

          </div>
        }
      </ul>
    </div>
  )
}
