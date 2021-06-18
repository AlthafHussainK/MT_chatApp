import axios from "axios"
import { useState } from "react"

const projectID = '03909482-1eb0-4002-b228-aa47adf1bf72'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password }

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject })

      localStorage.setItem('username', username)
      localStorage.setItem('password', password)

      window.location.reload()
      setError('')
    } catch (err) {
      setError('Oops! Incorrect Credentials.')
    }
  }


  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat App</h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
        </form>
        <h1 className="error">{error}</h1>
      </div>
    </div>
  )
}

export default LoginForm