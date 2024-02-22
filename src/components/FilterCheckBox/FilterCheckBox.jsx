import InputCheckBox from "./InputCheckBox";
import "./checkboxStyle.css";

// eslint-disable-next-line react/prop-types
export default function FilterCheckBox({ handleCheckboxChange, filterOptions }) {

    // eslint-disable-next-line react/prop-types
    const { isTitle, setIsTitle, isDate, setIsDate, isAuthor, setIsAuthor, isStatus, setIsStatus, isAction, setIsAction } = filterOptions;
    return (
        <section className='filter'>
            <InputCheckBox label={"Title"} state={isTitle} setState={setIsTitle} handleCheckboxChange={handleCheckboxChange} />
            <InputCheckBox label={"Date"} state={isDate} setState={setIsDate} handleCheckboxChange={handleCheckboxChange} />
            <InputCheckBox label={"Author"} state={isAuthor} setState={setIsAuthor} handleCheckboxChange={handleCheckboxChange} />
            <InputCheckBox label={"Status"} state={isStatus} setState={setIsStatus} handleCheckboxChange={handleCheckboxChange} />
            <InputCheckBox label={"Action"} state={isAction} setState={setIsAction} handleCheckboxChange={handleCheckboxChange} />
        </section >
    )
}
