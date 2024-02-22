
// eslint-disable-next-line react/prop-types
export default function TableCol({children, display}) {
  return (
    <div style={{"minWidth": "10px", "maxWidth": "150px"}}>{children}</div>
  )
}
