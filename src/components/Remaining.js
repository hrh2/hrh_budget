import React, { useContext } from 'react';
import { AppContext } from '../context/Appcontext';

const Remaining = () => {
     const { expenses, budget } = useContext(AppContext);
     const totalExpenses = expenses.reduce((totalCost, item) => {
          return totalCost + item.cost;
     }, 0);
     const alertType = totalExpenses > budget ? 'alert alert-danger' : 'alert alert-success';

     return (
          <div className={alertType}>
               <span>Remaining: $ {budget - totalExpenses}</span>
          </div>
     );
};

export default Remaining;
