import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import SheetDetail, { SheetDefault } from './sheetdetail';
import './timesheet.scss';
  
const TimeSheet = ({data}) => {
    return (
        <div>
            <table className={"meta-table"} style={{"width":"100%", marginTop: '20px'}}>
                <tbody>
                    <SheetDetail mainHeading={"Weekly Timesheet"} type={SheetDefault.META} data={data.metaDetails}/>
                </tbody>
            </table>
            <table className={"sheet-table"} style={{"width":"100%"}}>
                <tbody>
                    <tr> <SheetDetail type={SheetDefault.DD} data={data.timeDetails}/> </tr>
                    <tr> <SheetDetail mainHeading={"OTHA"} type={SheetDefault.INOUT} data={data.othaDetails}/> </tr>
                    <tr className={"tr-grey-heading"}> <SheetDetail mainHeading={"OTHA Hours"} type={SheetDefault.HOURS} data={data.othaHours}/> </tr>
                    <tr> <SheetDetail mainHeading={"CLA"} type={SheetDefault.INOUT} data={data.claDetails}/> </tr>
                    <tr className={"tr-grey-heading"}> <SheetDetail mainHeading={"CLA Hours"} type={SheetDefault.HOURS} data={data.claHours}/> </tr>
                    <tr> <SheetDetail mainHeading={"Holiday"} type={SheetDefault.HOURS} data={data.holidays}/> </tr>
                    <tr> <SheetDetail mainHeading={"PTO"} type={SheetDefault.HOURS} data={data.ptoDetails}/> </tr>
                    <tr className={"tr-grey-heading"}> <SheetDetail mainHeading={"Total Hours"} type={SheetDefault.HOURS} data={data.totalHours}/> </tr>
                </tbody>
            </table>
            <div className={"tr-footer"}>Timesheet Changes</div>
        </div>
    );
};

export default TimeSheet;