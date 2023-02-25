import {createContext,useReducer} from 'react';

const AppReducer=(state,action)=>{
     switch(action.type){
          case'ADD_EXPENSE':
          return{
               ...state,
               expenses:[...state.expenses.concat(action.payload)]             
}
          case'REMOVE_EXPENSE':
          return{
               ...state,
               expenses:state.expenses.filter(expense=>expense.id!==action.payload)

          }

     default:
          return state;
     }
}

const initialState ={
     budget:4000,
     expenses:[
          // {id:1,nme:'shopping',cost:760},
          // { id: 2, name: 'Holiday', cost: 200 },
          // { id: 3, name: 'Transportation', cost: 400 },
          // { id: 4, name: 'Fuel', cost: 90 },
          // { id: 5, name: 'Child Care', cost: 100 }
     ]
}

export const AppContext=createContext();

//a function which hold a state and passes it to our components (and by using reducer hook)

export const AppProvider=(props)=>{
     const [state,dispatch]=useReducer(AppReducer,initialState);   
     return(<AppContext.Provider value={{
               budget: state.budget,
               expenses: state.expenses,
               dispatch
}}>
          {props.children}
</AppContext.Provider>);
     
};//the reducer is in charge of creating the new state based on actions received from the parent component
