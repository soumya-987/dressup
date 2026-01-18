import Dress from './components/Dress'
import './Dress.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ color: "red", fontSize: "32px" }}>
    </div>
      <div>
        <Dress></Dress>
       
      </div>
    </>
  )
}

export default App
