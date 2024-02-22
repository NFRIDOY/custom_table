import { useState } from 'react';
import './App.css'
import { MdOutlineMenu } from "react-icons/md";
import Table from './components/Table/Table'
import FilterCheckBox from './components/FilterCheckBox/FilterCheckBox';
import "./styles/showHide.css";

function App() {
  // State for the Filter Menu Button
  const [isFilterBtn, setIsFilterBtn] = useState(false);

  // States for the colum toggle 
  const [isTitle, setIsTitle] = useState(true);
  const [isDate, setIsDate] = useState(true);
  const [isAuthor, setIsAuthor] = useState(true);
  const [isStatus, setIsStatus] = useState(true);
  const [isAction, setIsAction] = useState(true);


  // function for the changeing checkbox 
  const handleCheckboxChange = (state, setState) => {
    setState(!state);
  };

  const filterOptions = {
    isTitle, setIsTitle, isDate, setIsDate, isAuthor, setIsAuthor, isStatus, setIsStatus, isAction, setIsAction
  }
  return (
    <>

      <div >
        <button className='menuBtn  ' onClick={() => setIsFilterBtn(!isFilterBtn)}>
          <MdOutlineMenu />
        </button>
        {
          isFilterBtn ? <div className='styled-element show'>
            <FilterCheckBox handleCheckboxChange={handleCheckboxChange} filterOptions={filterOptions} />
          </div> : <div className='styled-element hide'>
            <FilterCheckBox handleCheckboxChange={handleCheckboxChange} filterOptions={filterOptions} />
          </div>
        }
      </div>
      <div>
        <header className='tTitle'>Table Title</header>
        <Table filterOptions={filterOptions} />
      </div>
    </>
  )
}

export default App
