import React, { useState } from 'react'
import { inject, observer } from 'mobx-react'

// the "messages" prop is provided with "inject"
function Message({ messages: messagesStore }: any) {
  const { messages } = messagesStore
  const [messageValue, setMessageValue] = useState('')

  // Keep track of our new message value
  const handleInputChange = (event: any) => {
    setMessageValue(event.target.value)
  }

  // Add the new message
  const handleNewMessage = () => {
    messagesStore.addMessage(messageValue)
    setMessageValue('')
    // clear the input field
  }

  return (
    <div>
      <input onChange={handleInputChange} value={messageValue} />
      <button type="button" onClick={handleNewMessage}>
        Add Message
      </button>
      <button type="button" onClick={messagesStore.clearMessages}>
        Clear Messages
      </button>
      <ul>
        {messages.map((message: string, m: number) => (
          <li key={m}>{message}</li>
        ))}
      </ul>
    </div>
  )
}

export default inject('messages')(observer(Message))
