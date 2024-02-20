import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableRow from './components/TableRow/TableRow'
import Table from './components/Table/Table'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Table />
    </>
  )
}

export default App
