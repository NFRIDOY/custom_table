

// eslint-disable-next-line react/prop-types
export default function InputCheckBox({ label, handleCheckboxChange, state, setState }) {
    return (
        <div>
            <input
                type="checkbox"
                checked={state}
                onChange={() => handleCheckboxChange(state, setState)}
            />
            <label>{label}</label>
        </div>
    )
}
