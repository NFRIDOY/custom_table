{/* Static Custome table */ }
import TableRow from './../TableRow/TableRow';
import './tableStyle.css'

export default function Table() {
    const tableRowData1 = ["Avater", "Feb 23, 2023", "Michael", "true", "true" ];
    const tableRowData2 = ["Avater2", "Feb 23, 2024", " DiMartino", "false", "false" ];
    return (
        <div className='table'>
            {/* Table Header */}
            <section className='tHead'>
                <div>Title</div>
                <div>Date</div>
                <div>Author</div>
                <div>Status</div>
                <div>Action</div>
            </section>
            {/* Table body */}
            <section className='tBody'>
                <TableRow tableRowData={tableRowData1} />
                <TableRow tableRowData={tableRowData2}/>
            </section>
        </div>
    )
}
