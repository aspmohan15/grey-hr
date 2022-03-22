import { Box, Paper } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './employeeInformation.css'
import { useNavigate } from 'react-router-dom';

function EmployeeInformation() {
    const navigate = useNavigate()
    const [details, setDetails] = useState([])
    const [information, setInformation] = useState({})
    //wait for data until the data gefrom local sotrage
    console.log(details);
    setTimeout(() => {
        const { employeeInformation } = details;

        if (employeeInformation)
            setInformation(employeeInformation)
    }, 1000)
    // get the datafrom Local storage
    useEffect(() => {
        const localData = localStorage.getItem('employeeDetails')
        if (localData) {
            try {
                setDetails(JSON.parse(localData))
            } catch (e) {
                console.log(e);
            }
        }
    }, [])

    // const localData = localStorage.getItem('employeeDetails')
    // const { contact, email, employees_id, location, name } = details?.employeeInformation;
    return (
        <>
            <div className='EmployeeInformation_container'>
                <Paper variant="outlined" className='profile'>
                    <h3>Profile</h3>
                    <div className='Profile_container'>
                        <section>
                            <AccountCircleIcon sx={{ fontSize: 130 }} />
                            <p>Location</p>
                            {/* <p>{information.location ? information.location : "Loading..."}</p> */}
                            <p>{information.location ? information.location : details.location}</p>
                        </section>
                        <section style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                            <div>
                                <p>name</p>
                                {/* <p>{information.name ? information.name : "Loading..."}</p> */}
                                <p>{information.name ? information.name : details.name}</p>
                            </div>
                            <div>
                                <p>Emloyee ID</p>
                                {/* <p>{!information.employees_id ? "Loading..." : "kumar"}</p> */}
                                <p>{information.employees_id ? information.employees_id : details.employees_id}</p>
                            </div>
                            <div>
                                <p>Primary Contact No</p>
                                {/* <p>{!information.contact ? "Loading..." : "kumar"}</p> */}
                                <p>{information.contact ? information.contact : details.contact}</p>
                            </div>
                        </section>
                        <section>
                            <p>Company Email</p>
                            {/* <p>{information.email ? information.email : "Loading..."}</p> */}
                            <p>{information.email ? information.email: details.email}</p>
                        </section>
                    </div>
                </Paper>
            </div>
        </>
    )
}

export default EmployeeInformation