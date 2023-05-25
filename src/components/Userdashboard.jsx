import React from 'react'
import Sidebar from './Sidebar'
import Donarlist from './Donarlist'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Requestform from './Requestform'

const Userdashboard = () => {
  return (
    <div>
  <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/Donarlist' element={<Donarlist />}></Route>
        <Route path='/Requestform' element={<Requestform />}></Route>
  </Routes>
  </BrowserRouter>
  
    </div>
  )
}

export default Userdashboard