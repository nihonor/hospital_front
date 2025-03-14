import React from 'react'
import Sidebar from '../dashboard/global/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../../pages/Dashboard'
import Body from './dashPages/Body'
import Appointment from './dashPages/Appointment'

const Index = () => {
  return (
    <div className='flex'>
<Sidebar/>
{/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/appointment" element={<Appointment/>}></Route>
        </Routes>
      </BrowserRouter> */}
     
      
    </div>
  )
}

export default Index
