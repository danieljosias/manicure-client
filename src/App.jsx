import './App.css'
import { Router } from './routes/routes'
import { createStandaloneToast } from '@chakra-ui/react'
const { ToastContainer } = createStandaloneToast()

function App() {
  return (
    <>
      <Router/>
      <ToastContainer/>
    </>
  )
}

export default App
