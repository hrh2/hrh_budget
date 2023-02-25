import React,{useContext} from 'react';
import { AppContext } from '../context/Appcontext';
const Remaining = () => {
     const {expenses,budget} = useContext(AppContext);
     const totalExpenses = expenses.reduce((totalCost,item) => {
          return (totalCost=totalCost+item.cost)},0)
          const alterType=totalExpenses>budget? 'alter-danger':'alter-success'


     return (
          <div className={`alter ${alterType}`}>
               <span>Remaining: $ {budget-totalExpenses}</span>
          </div>
     );
}
export default Remaining;