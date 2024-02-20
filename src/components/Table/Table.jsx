{/* Static Custome table */ }
import TableRow from './../TableRow/TableRow';
import './tableStyle.css'

export default function Table() {
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
                <TableRow />
                <TableRow />
            </section>
        </div>
    )
}
