import React, { useEffect, useMemo, useState } from 'react'
import useStyle from './AuthStyles'
import { Paper, Avatar, Button, Grid, Typography, Container, TextField, Divider, Snackbar } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons'
import { GoogleLogin } from 'react-google-login'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FacebookLogin } from 'react-facebook-login'
import { signin, signup, googleSignIn } from '../../actions/auth'
import Input from './Input'
import Icon from './Icon'
import { Alert } from '@mui/material'

const initialState = { firstName: "", lastName: "", email: "", password: "", confrimPassword: "" }

const Auth = () => {
    const navigate = useNavigate()
    const classes = useStyle()
    const [showPassword, setShowPassword] = useState(false)
    const [formData, SetFormData] = useState(initialState)
    const [isSignUp, setIsSignUp] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)
    const dispatch = useDispatch()

    //reavel or hide Password Character
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    //form Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signup(formData, navigate))
            return;
        } else {
            dispatch(signin(formData, navigate))
            return;
        }
    }

    //Get value form
    const handleChange = (e) => {
        SetFormData({ ...formData, [e.target.name]: e.target.value })
    }

    //google handle 
    const googleSucess = (res) => {
        const userEmail = res?.profileObj.email;
        const token = res?.tokenId;
        try {
            dispatch(googleSignIn(token, navigate))
        } catch (error) {
            console.log(error);
        }
    }
    const googleFailure = () => {
        console.log("Google Sign in was Unsucess full");
    }

    // signin signup Switcher
    const switchMode = () => {
        setIsSignUp((previsSignUp) => !previsSignUp)
        handleShowPassword(false)
    }
    return (
        <>
            <Container component="main" maxWidth="xs">
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant="h5">
                        {isSignUp ? "Sign Up" : "sign In"}
                    </Typography>
                    {errorMessage && <Alert severity="error">This is an error message!</Alert>}
                    <form className={classes.form} onSubmit={handleSubmit} method="poas" action='#'>
                        <Grid container spacing={2}>
                            {isSignUp && (
                                <>
                                    <Input
                                        name="firstName"
                                        label="First Name"
                                        handleChange={handleChange}
                                        autoFocus
                                        half
                                    />
                                    <Input
                                        name="lastName"
                                        label="Last Name"
                                        handleChange={handleChange}
                                        half
                                    />
                                </>
                            )}
                            <Input
                                name="email"
                                label="email"
                                handleChange={handleChange}
                                half
                                type="email"
                            />
                            <Input
                                name="password"
                                label="password"
                                handleChange={handleChange}
                                half
                                type={showPassword ? "text" : "password"}
                                handleShowPassword={handleShowPassword}
                            />
                            {isSignUp && (
                                <Input
                                    name="confrimPassword"
                                    label="Reapeat Password"
                                    handleChange={handleChange}
                                    type="password"
                                />
                            )}
                        </Grid>
                        <div style={{ margin: "20px" }} />
                        <div style={{ margin: "20px" }} />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={classes.submit}
                            color="secondary"
                        >
                            {isSignUp ? "sign Up" : "Sign In"}
                        </Button>
                        <div style={{ margin: "20px" }} />
                        <GoogleLogin
                            clientId="979904057678-fmqqaj59nbf93glui3c2scaa3uaj17aa.apps.googleusercontent.com"
                            render={(renderProps) => (
                                <Button
                                    className={classes.googleButton}
                                    fullWidth
                                    onClick={renderProps.onClick}
                                    disabled={renderProps.disabled}
                                    variant="contained"
                                    style={{ color: "green" }}
                                    startIcon={<Icon />}
                                > Google SIgn In</Button>
                            )}
                            onSuccess={googleSucess}
                            onFailure={googleFailure}
                            cookiePolicy="single_host_origin"
                        ></GoogleLogin>
                        <Grid
                            container
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Grid item>
                                <Button onClick={switchMode}>
                                    {isSignUp
                                        ? "Already have an account? Sign In"
                                        : "Dont have a Account? sign in"}
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Container>
        </>
    );
}

export default Auth