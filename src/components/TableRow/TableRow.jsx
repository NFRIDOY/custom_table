import TableCol from "../TableCol/TableCol";
import './tableRowStyle.css'
import './../Table/tableStyle.css'

// eslint-disable-next-line react/prop-types
export default function TableRow({ tableRowData, filterOptions }) {
    const { isTitle, isDate, isAuthor, isStatus, isAction } = filterOptions;
    return (
        <div className="tableRow">
            {/* TableRow */}
            <div className={isTitle ? "show" : "hide"} ><TableCol > {tableRowData[0]} </TableCol> </div>
            <div className={isDate ? "show" : "hide"} ><TableCol > {tableRowData[1]} </TableCol> </div>
            <div className={isAuthor ? "show" : "hide"} ><TableCol > {tableRowData[2]} </TableCol> </div>
            <div className={isStatus ? "show" : "hide"} ><TableCol > {tableRowData[3]} </TableCol> </div>
            <div className={isAction ? "show" : "hide"} ><TableCol > {tableRowData[4]} </TableCol> </div>
        </div>
    )
}
