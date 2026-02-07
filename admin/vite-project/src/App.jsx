import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Add from './pages/Add'
import Orders from './pages/Orders'
import List from './pages/List'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import AdminLayout from './layouts/AdminLayout'

export const backendUrl = import.meta.env.VITE_BACKEND_URL;

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(()=>{
    localStorage.setItem("token",token);
  },[token])

  return (
    <div>
      <ToastContainer />
    {token === '' ? <Login setToken={setToken}/> :
    <>
      <BrowserRouter>
        <Routes>
          {/* <Login /> */}
          <Route path='/add' element={<AdminLayout setToken={setToken}><Add token={token}/></AdminLayout>}/>
          <Route path='/orders' element={<AdminLayout setToken={setToken}><Orders token={token}/></AdminLayout>}/>
          <Route path='/list' element={<AdminLayout setToken={setToken}><List  token={token}/></AdminLayout>}/>
        </Routes>
      </BrowserRouter>
    </>
    }
    </div>
  )
}

export default App
