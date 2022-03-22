import React from 'react'
import EmployeeInformation from '../components/employeeInformation/EmployeeInformation'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/SideBar'
import './main.css'
const Main = () => {
    return (
        <div style={{ display: 'flex', }}>
            <Sidebar className="sidebar" />
            <Navbar className="navbar" />
            <div className='EmployeeInformation'>
                <EmployeeInformation />
            </div>
        </div>
    )
}

export default Main