import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveDown';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Home from '@mui/icons-material/Home';
import Feeds from '@mui/icons-material/Feed';
import Task from '@mui/icons-material/Task';
import Salary from '@mui/icons-material/Paid';
import Calendar from '@mui/icons-material/CalendarMonth';
import Document from '@mui/icons-material/Assignment';
import People from '@mui/icons-material/People';
import Help from '@mui/icons-material/CoPresent';
import Work from '@mui/icons-material/DesktopMac';
import Avathar from '@mui/icons-material/ManageAccounts';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';

import Logo from '../../images/logo.jpeg'
import './sidebar.css'

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <List>
                <ListItem button >
                    <div >
                        <img src={Logo} style={{ width: "200px" }} className="sidebar_logo"></img>
                    </div>
                </ListItem>
            </List>

            <List>
                <div style={{ display: "flex", gap: "30px", alignItems: 'center', justifyContent: "center" }}>
                    <Avathar />
                    <h3>Hi <br></br> mohan</h3>
                </div>
            </List>

            <Divider />
            <List>

                <ListItem button >
                    <ListItemIcon><Home /></ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemIcon><Feeds /></ListItemIcon>
                    <ListItemText>Feeds</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemIcon><Task /></ListItemIcon>
                    <ListItemText>Tasks</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemIcon><Salary /></ListItemIcon>
                    <ListItemText>Salary</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemIcon><Home /></ListItemIcon>
                    <ListItemText>Leave</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemIcon><Document /></ListItemIcon>
                    <ListItemText>Document center</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemIcon><People /></ListItemIcon>
                    <ListItemText>People center</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemIcon><Help /></ListItemIcon>
                    <ListItemText>Help Desk</ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemIcon><Work /></ListItemIcon>
                    <ListItemText>Workflow Delegates</ListItemText>
                </ListItem>

            </List>
            <Divider />
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>

        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
