import { useState } from 'react'
import './App.css'
import Choto from './Choto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <h1>PUTO!</h1>
       <Choto />
      </div>
     
    </>
  )
}

export default App
