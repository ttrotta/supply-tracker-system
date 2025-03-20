import { useState, useEffect } from 'react'
import './App.css'
import API from "./axios"

function App() {
  const [message, setMessage] = useState("")
  
  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await API.get("/test")
        setMessage(response.data)
      } catch (error) {
        console.error("Error fetching data: ", error)
      }
    }
    fetchMessage()
  }, [])

  return (
    <>
      <div>
        <h1>Supply Tracker System</h1>
        <p>Backend says: <strong>{message}</strong></p>
      </div>
    </>
  )
}

export default App
