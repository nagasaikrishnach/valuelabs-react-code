import React, { createContext, useEffect, useState } from 'react';
import { Grid, Paper, makeStyles, Button} from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker, } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import TimeSheet from './../timesheet/timesheet';
import GridServices from './../services/grid2services';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import './secondarygrid.scss';

const useStyles = makeStyles((theme) => {
    return ({
        root: {
            flexGrow: 1,
            marginTop: '20px',
            backgroundColor: '#FFFBEE',
        },
        paper: {
            textAlign: 'center',
            backgroundColor: '#FFFBEE',
        }
    })
});

const SecondaryGrid = () => {

    const classes = useStyles();
    const [selectedDate, setSelectedDate] = useState(new Date('2014-08-18T21:11:54'));
    const [timesheetDetails, setSheetDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const handleDateChange = (date, weekStatus) => {

        getWeekDetails(weekStatus);    
    };
    
    const getWeekDetails = (week) => {
        setLoading(true);
        GridServices.getWeekDetails(week).then(res=>{
            setSheetDetails(res.data);
            setTimeout(()=>{
                setLoading(false);
            }, 1000);
        });
    };

    useEffect(()=>{
        getWeekDetails();
    }, []);
    
    return (
        <div>
            <div className={classes.root}>

                <Grid container >
                    <Grid item xs={12}>
                        <div style={{"display": "inline-flex"}}><h3>Sai Krishna</h3></div>
                        <Paper className={classes.paper} style={{float: 'right'}}>
                            <ArrowBackIosIcon className={"arrow-icon"}  onClick={() => handleDateChange(null, 'PREV')}/>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    value={selectedDate}
                                    onChange={(date) => handleDateChange(date, 'CURRENT')}
                                />
                                <ArrowForwardIosIcon className={"arrow-icon"} onClick={() => handleDateChange(null, 'FORWARD')}/>
                            </MuiPickersUtilsProvider>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <Grid item xs={12}>
                { (!loading ? <TimeSheet data={timesheetDetails}/> : <h3>Loading...</h3>) }
            </Grid>
        </div>
    );
}

export default SecondaryGrid;