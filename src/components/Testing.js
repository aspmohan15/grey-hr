import React, { useEffect } from 'react'
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { Backdrop, Box, Container, LinearProgress, Paper, Toolbar, Typography } from '@material-ui/core';
import AppBar from '@mui/material/AppBar';


const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));


function Testing() {


    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <div>
            <Box sx={{ bgcolor: 'error.main', color: 'primary.contrastText', p: 5 }}>Mohan</Box>
            <LinearProgress variant="determinate" value={progress} />
        </div >

    )
}

export default Testing