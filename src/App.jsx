import Dress from './components/Dress'
import './Dress.css'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Dress></Dress>
       
      </div>
    </>
  )
}

export default App
