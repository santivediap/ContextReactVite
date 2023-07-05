import { useState } from 'react'
import './App.css'
import { UserContext } from './context/userContext'
import Head from './components/Head'
import Form from './components/Form'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  const [user, setUserData] = useState("")

  const userData = {
    user,
    setUserData
  }

  return (
    <>
        <Head user={user}/>
      <UserContext.Provider value={userData}>
        <Form />
        <Card />
      </UserContext.Provider>
    </>
  )
}

export default App
