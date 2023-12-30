import './App.css'
import { Router } from './routes/routes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router/>
      <ToastContainer autoClose={2000}/>
    </>
  )
}

export default App
