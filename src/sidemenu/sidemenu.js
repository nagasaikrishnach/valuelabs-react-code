import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { SwipeableDrawer, Button, List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { NavbarContext } from './../navbar/navbar';

const SideMenu = () => {
    const useStyles = makeStyles({
        list: {
          width: 250,
        },
        fullList: {
          width: 'auto',
        },
    });
    const classes = useStyles();
    // const [state, setState] = React.useState({
    //     top: false,
    //     left: false,
    //     bottom: false,
    //     right: false,
    // });
    // const toggleDrawer = (anchor, open) => (event) => {
    //     if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
    //       return;
    //     }
    //     setState({ ...state, [anchor]: open });
    // };
    // const list = (anchor) => (
        
    // );
    return (
        <div>
            <React.Fragment>
                {/* <Button onClick={toggleDrawer('left', true)}>{'OPEN'}</Button> */}
                <SwipeableDrawer
                    anchor={'left'}
                    open={state['left']}
                    onClose={toggleDrawer('left', false)}
                    onOpen={toggleDrawer('left', true)}
                    >
                    <div role="presentation" onClick={toggleDrawer('left', false)} onKeyDown={toggleDrawer('left', false)} className={ classes.list } >
                        <List>
                            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                                <ListItem button key={text}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                </SwipeableDrawer>
            </React.Fragment>
        </div>
    )
}
export default SideMenu;