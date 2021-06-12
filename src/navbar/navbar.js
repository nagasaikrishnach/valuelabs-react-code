import React, { createContext } from 'react';
import { AppBar, Toolbar, Avatar, IconButton, Button} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import './navbar.scss';

const NavbarContext = createContext();

const NavBar = ({children, ...rest}) => {
    const [sidebarStatus, setSidebarStatus] = React.useState(false);
    const toggleDrawer = (open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        setSidebarStatus(open);
    };
    return (
        // <NavbarContext.provider value={{sidebarStatus, setSidebarStatus, toggleDrawer}}>
            <AppBar position="static">
                <Toolbar>
                    <div>
                        <h2 color="inherit">WizDepot</h2>
                    </div>
                    <div className="nav-timesheet">
                        <h3>My Timesheet</h3>
                    </div>
                    <div className="profile-img">
                        <Avatar alt="Profile image" src="./src/assets/img/profile.jpg" />
                    </div>
                    <div> <ExpandMoreIcon /> </div>
                </Toolbar>
                { children }
            </AppBar>
        // </NavbarContext.provider>
    );
}

export default NavBar;
// export { NavbarContext };