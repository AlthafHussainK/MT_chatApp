import { ChatEngine } from 'react-chat-engine'
import ChatFeed  from './components/ChatFeed'

import './App.css'

const App = () => {
  return (
    <ChatEngine 
      height="100vh"
      projectID="03909482-1eb0-4002-b228-aa47adf1bf72"
      userName="alt"
      userSecret="123321"
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  )
}

export default App