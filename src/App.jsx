import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
