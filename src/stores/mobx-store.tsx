import { action, decorate, observable } from 'mobx'
import { Provider } from 'mobx-react'
import React from 'react'

export class MessagesStore {
  messages: Array<string> = []

  addMessage = (message: string) => {
    this.messages.push(message)
  }

  clearMessages = () => {
    this.messages.clear()
  }
}

decorate(MessagesStore, {
  messages: observable,
  addMessage: action,
  clearMessages: action,
})

export default ({ element }: { element: string }) => (
  <Provider messages={new MessagesStore()}>{element}</Provider>
)
