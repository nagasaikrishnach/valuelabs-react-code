import React, {memo} from 'react';
import './timesheet.scss';

export const SheetDefault = Object.freeze({
    DATE: 'DATE',
    DD: 'DD',
    HOURS: 'HOURS',
    INOUT: 'INOUT',
    META: 'META'
});

const InOutTile = () => {
    return ( <>
            <div className={"in-out-tile"}>In</div>
            <div className={"in-out-tile"}>Out</div>
    </> );
};

const SheetDetail = ({mainHeading, type=SheetDefault.HOURS, data, tagStyles}) => {
    let returnJSX;
    switch(type){
        case SheetDefault.HOURS: {
            returnJSX = (<>
                <th scope="row">{mainHeading}</th>
                { data && data.length && data.map((detail, index) => (
                    (detail>0) ? (<td key={index}>{detail}</td>) : (<td></td>)
                ))}
            </>)
            break;
        }
        case SheetDefault.INOUT: {
            returnJSX = ( <>
                <th scope="row">
                    <div style={{"display": "inline-flex"}}>
                        <div style={{"padding": "30px 20px"}}>
                            {mainHeading}
                        </div>
                        <div>
                            <InOutTile /><InOutTile />
                        </div>
                    </div>
                </th>
                { data && data.length && data.map((detail, index) => (
                    <td key={index}>
                        <table className={"internal-sheet-table"} style={{width: '100%'}}>
                            <tr><td>{detail.firstHalfDetails.inTime}</td></tr>
                            <tr><td>{detail.firstHalfDetails.outTime}</td></tr>
                            <tr><td>{detail.secondHalfDetails.inTime}</td></tr>
                            <tr><td>{detail.secondHalfDetails.outTime}</td></tr>
                        </table>
                    </td>
                ))} </>
            )
            break;
        }
        case SheetDefault.DD: {
            returnJSX = ( <>
                <td></td>
                { data && data.length && data.map((detail, index) => (
                    <th scope="col" className={"tr-grey-heading"} key={index}>{detail.day}<br /> {detail.date}</th>
                ))} </>
            )
            break;
        }
        case SheetDefault.META: {
            returnJSX = ( <>
                <tr className={'tr-heading'}> <th colSpan={2}>{mainHeading}</th> </tr>
                { data && data.length && data.map((detail, index) => (
                    <tr key={index}>
                        <th style={{ width: "21%", textAlign: "right", paddingRight: "10px"}}>{detail.name}:</th>
                        <td style={{padding: "0px 15px"}}>{detail.value}</td>
                    </tr>
                ))} </>
            )
            break;
        }
        default : {
            <td>{mainHeading}</td>
        }
    }
    return returnJSX;
};

export default memo(SheetDetail);