
import React, {  useState } from 'react'
import { inject, observer } from 'mobx-react'

// the "messages" prop is provided with "inject"
const Messages = ({ messages: messagesStore }) => {
  const { messages } = messagesStore
  const [messageValue, setMessageValue] = useState('')

  // Keep track of our new message value
  const handleInputChange = event => {
    setMessageValue(event.target.value)
  }

  // Add the new message
  const handleNewMessage = () => {
    messagesStore.addMessage(messageValue)
    setMessageValue("")
    // clear the input field
  }

  return (
    <div>
      <input onChange={handleInputChange} value= {messageValue} />
      <button onClick={handleNewMessage}>
        Add Message
      </button>
      <button onClick={messagesStore.clearMessages}>
        Clear Messages
      </button>
      <ul>
        {messages.map((message, m) => (
          <li key={m}>{message}</li>
        ))}
      </ul>
    </div>
  )
}

export default inject('messages')(observer(Messages))