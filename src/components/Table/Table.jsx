{/* Static Custome table */ }
import TableRow from './../TableRow/TableRow';
import './tableStyle.css'

export default function Table({ filterOptions }) {
    const { isTitle, isDate, isAuthor, isStatus, isAction } = filterOptions;
    const tableRowData1 = ["Avater", "Feb 23, 2023", "Michael", true, true];
    const tableRowData2 = ["Avater2", "Feb 23, 2024", " DiMartino", false, true];


    return (
        <div className='table'>
            
            {/* Table Header */}
            <section className='tHead'>
                <div className={isTitle ? "show" : "hide"} >Title </div>
                <div className={isDate ? "show date" : "hide date"} >Date </div>
                <div className={isAuthor ? "show author" : "hide author"} >Author</div>
                <div className={isStatus ? "show" : "hide"} >Status</div>
                <div className={isAction ? "show" : "hide"} >Action</div>
            </section>
            {/* Table body */}
            <section className='tBody'>
                <TableRow tableRowData={tableRowData1} filterOptions={filterOptions} />
                <TableRow tableRowData={tableRowData2} filterOptions={filterOptions} />
            </section>
        </div>
    )
}
