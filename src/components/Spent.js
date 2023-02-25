import React,{useContext} from 'react';
import { AppContext } from '../context/Appcontext';
const Spent= () => {
     const {expenses} = useContext(AppContext);
     
     const totalExpenses = expenses.reduce((totalCost, item) => {
          return (totalCost = totalCost + item.cost)
     }, 0)
     return (
          <div className='alert alert-success'>
               <span>Spent so far: $ {totalExpenses}</span>
          </div>
     );
}
export default Spent;