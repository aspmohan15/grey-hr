import React from "react";
import { AppBar, Toolbar, CssBaseline, makeStyles, Typography, useTheme, useMediaQuery, Button } from "@material-ui/core";
import { Notifications, PowerSettingsNew } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    navlinks: { marginLeft: theme.spacing(10), display: "flex", alignItems: "center", justifyContent: "center" },
    logo: { flexGrow: "1", cursor: "pointer" },
    link: {
        textDecoration: "none",
        color: "black",
        fontSize: "20px",
        marginLeft: theme.spacing(2),
        "&:hover": { color: "grey", borderBottom: "1px solid grey" }
    }
}));

function Navbar() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logout = () => {
        dispatch({ type: "LOGOUT" })
        navigate('/auth')
    }

    return (
        <AppBar position="static" style={{ display: "flex", width: "85%", backgroundColor: "white", color: "black", boxShadow: "none", }} >
            <CssBaseline />
            <Toolbar>
                <Typography variant="h4" className={classes.logo}>
                    Employee Information
                </Typography>
                <div className={classes.navlinks}>
                    <Link to="/about" className={classes.link}>
                        Quick links
                    </Link>

                    <Link to="" className={classes.link}>
                        <Notifications sx={{ fontSize: 40 }} />
                    </Link>
                    <Button onClick={logout}>
                        <PowerSettingsNew sx={{ fontSize: 40 }} />
                    </Button>
                </div>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
