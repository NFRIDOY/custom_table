import TableCol from "../TableCol/TableCol";
import './tableRowStyle.css'

// eslint-disable-next-line react/prop-types
export default function TableRow({tableRowData}) {
    return (
        <div className="tableRow">
            {/* TableRow */}
            <TableCol > {tableRowData[0]} </TableCol>
            <TableCol > {tableRowData[1]} </TableCol>
            <TableCol > {tableRowData[2]} </TableCol>
            <TableCol > {tableRowData[3]} </TableCol>
            <TableCol > {tableRowData[4]} </TableCol>
        </div>
    )
}
