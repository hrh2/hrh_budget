import React from 'react';
import Budget from './components/budget';
import ExpenseList from './components/ExpenseList';
import Remaining from './components/Remaining';
import Spent  from './components/Spent';
import AddExpense from './components/AddExpense'; 
import { AppProvider } from './context/Appcontext'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
function App() {
  return(
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My account</h1>
        <div className='row mt-3'>
          <div className='col-sm'>
            <Budget />
          </div>
          <div className='col-sm'>
            <Remaining />
          </div>
          <div className='col-sm'>
            <Spent />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className='row mt-3'>
          <div className='col-sm'>
            <ExpenseList />
          </div>
        </div>
        <h3 className='mt-3'>Add Expense</h3>
        <div className='mt-3'>
          <div className='col-sm'>
            <AddExpense />
          </div>
        </div>
      </div>
    </AppProvider>
  )
}

export default App;
