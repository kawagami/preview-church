import { useState } from 'react'
import indeximage from './assets/indeximage.webp'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://maps.app.goo.gl/x2pVr4bz9rTPgHXo9" target="_blank">
          <img src={indeximage} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + Church</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          純 github action 的測試
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
