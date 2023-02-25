import React,{useContext} from 'react';
import { AppContext } from '../context/Appcontext';
import {v4 as uuidv4} from 'uuid';

const AddExpense = () => {
     const {dispatch}=useContext(AppContext);
     const [name, setName] = React.useState('');
     const [cost, setCost] = React.useState('');

     const onSubmit = (e) => {
          e.preventDefault();
          const expense={
               id: uuidv4(),//Math.floor(Math.random()*1000000000
               name:name,
               cost:parseInt(cost)
          } 
          dispatch({type:'ADD_EXPENSE',payload:expense});
     };

     return (
          <form onSubmit={onSubmit}>
               <div className='row'>
                    <div className='col-sm'>
                         <label htmlFor='name'>Name</label>
                         <input
                              required
                              type='text'
                              className='form-control'
                              id='name'
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                         />
                    </div>
                    <div className='col-sm'>
                         <label htmlFor='cost'>Cost</label>
                         <input
                              required
                              type='number'
                              className='form-control'
                              id='cost'
                              value={cost}
                              onChange={(e) => setCost(e.target.value)}
                         />
                    </div>
                    <div className='col-sm'>
                         <button type='submit' className='btn btn-primary'>
                              Save
                         </button>
                    </div>
               </div>
          </form>
     );
};

export default AddExpense;
