import { useState } from 'react';
import './App.css'
import Table from './components/Table/Table'
import FilterCheckBox from './components/FilterCheckBox/FilterCheckBox';

function App() {
  // Step 2: Define state variable
  const [isTitle, setIsTitle] = useState(true);
  const [isDate, setIsDate] = useState(true);
  const [isAuthor, setIsAuthor] = useState(true);
  const [isStatus, setIsStatus] = useState(true);
  const [isAction, setIsAction] = useState(true);

  // Step 3: Event handler to toggle checkbox status
  const handleCheckboxChange = (state, setState) => {
    setState(!state);
  };

  const filterOptions = {
    isTitle, setIsTitle, isDate, setIsDate, isAuthor, setIsAuthor, isStatus, setIsStatus, isAction, setIsAction
  }
  return (
    <>
      {/* <section className='filter'>
        <div>
          <input
            type="checkbox"
            checked={isTitle}
            onChange={() => handleCheckboxChange(isTitle, setIsTitle)} 
          />
          <label>Title</label>
        </div>
        <div>
          
          <input
            type="checkbox"
            checked={isDate}
            onChange={() => handleCheckboxChange(isDate, setIsDate)} 
          />
          <label>Date</label>
        </div>
        <div>
          
          <input
            type="checkbox"
            checked={isAuthor}
            onChange={() => handleCheckboxChange(isAuthor, setIsDate)} 
          />
          <label>Author</label>
        </div>
        <div>
          
          <input
            type="checkbox"
            checked={isStatus}
            onChange={() => handleCheckboxChange(isStatus, setIsDate)} 
          />
          <label>Status</label>
        </div>
        <div>
          
          <input
            type="checkbox"
            checked={isDate}
            onChange={() => handleCheckboxChange(isDate, setIsDate)} 
          />
          <label>Action</label>
        </div>
      </section> */}

      <FilterCheckBox handleCheckboxChange={handleCheckboxChange} filterOptions={filterOptions} />
      <Table filterOptions={filterOptions} />
    </>
  )
}

export default App
