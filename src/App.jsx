import { useState } from 'react'
import poslogo from './assets/pos.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
        POS-System
      </h1>
      <p>A Point of Sale (POS) system is a combination of hardware and software used by businesses—especially in retail, hospitality, and restaurants—to process sales transactions and manage various operational aspects.</p>
      <div>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
        <a href="">
          <img src={poslogo} className="logo" alt="Vite logo" />
        </a>
      </div>


      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App
