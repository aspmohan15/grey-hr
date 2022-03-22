import React, { useState } from 'react'
import useStyle from '../AuthStyles'
import { Paper, Avatar, Button, Grid, Typography, Container, TextField, Divider } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../../../actions/auth'
import Input from '../Input'

const initialState = { name: "", location: "", contact: "", email: "", employee_id: "" }

const Register = () => {
    const navigate = useNavigate()
    const classes = useStyle()
    const [formData, SetFormData] = useState(initialState)
    const dispatch = useDispatch()

    // for form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(register(formData, navigate))
    }

    // set the value from input 
    const handleChange = (e) => {
        SetFormData({ ...formData, [e.target.name]: e.target.value })
    }
    return (
        <>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper}>
                    <Typography variant="h5">
                        {"Enter Your Details"}
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit} method="poas" action='#'>
                        <Grid container spacing={2}>
                            <Input
                                name="employee_id"
                                label="Employee Id"
                                handleChange={handleChange}
                            />
                            <Input
                                name="name"
                                label="Name"
                                handleChange={handleChange}
                                autoFocus
                            />
                            <Input
                                name="location"
                                label="Location"
                                handleChange={handleChange}
                            />
                            <Input
                                name="email"
                                label="Email"
                                handleChange={handleChange}
                                type="email"
                            />
                            <Input
                                name="contact"
                                label="Contact Number"
                                handleChange={handleChange}
                            />
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            color="secondary"
                        >
                            {"Register"}
                        </Button>
                    </form>
                </Paper>
            </Container>
        </>
    );
}

export default Register;








