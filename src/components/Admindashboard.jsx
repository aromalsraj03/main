import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Requestform from './Requestform'
import Sidebar2 from './Sidebar2'
import Donarlist from './Donarlist2';
import Requests from './Requests';

const Admindashboard = () => {
  return (
    <div>
      <BrowserRouter>
      <Sidebar2 />
      <Routes>
        <Route path='/Requests' element={<Requests />}></Route>
        <Route path='/Donarlist' element={<Donarlist />}></Route>
        <Route path='/Requestform' element={<Requestform />}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  )
}

export default Admindashboard