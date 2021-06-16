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
    return (
        <div>
            <React.Fragment>
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