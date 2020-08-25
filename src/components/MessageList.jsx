import React from 'react'

export default function MessageList( {chatRoom } ) {

  return (
    <div>
      <h1>Heading</h1>
      {
        chatRoom && chatRoom.messages && Object.entries(chatRoom.messages).reverse().map(item =>{
            const key = item[0]
            const payload = item[1]
            return <li key={key}>{payload.message}</li>
          })
      }
    </div>
  )
}
