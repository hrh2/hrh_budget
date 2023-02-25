import React,{useContext} from 'react';
import { AppContext } from '../context/Appcontext';

const Budget=()=>{
     const { budget } = useContext(AppContext);
     return(
       <div className='alert alert-secondary'>
          <span>Budget: $ {budget}</span>
       </div>
          );
}
export default Budget;