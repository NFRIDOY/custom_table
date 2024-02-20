{/* Static Custome table */ }
import TableRow from './../TableRow/TableRow';
import './tableStyle.css'

export default function Table() {
    return (
        <div className='table'>
            {/* Table Header */}
            <section className='th'>
                <div>Title</div>
                <div>Date</div>
                <div>Author</div>
                <div>Status</div>
                <div>Action</div>
            </section>
            {/* Table body */}
            <section>
                <TableRow />
                <TableRow />
            </section>
        </div>
    )
}
