import { createContext, useContext, useReducer } from 'react'
import data from './data'
import { reducer } from './reducer'

const AppContext = createContext()

let initialState = {
 recipeList: data,
 selectedRecipe: data[1]
}

export const AppProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initialState)

 const selectRecipe = (id) => {
  dispatch({ type: 'SELECT_RECIPE', payload: { id } })
 }


 return (
  <AppContext.Provider value={{
   state,
   selectRecipe
  }}>
   {children}
  </AppContext.Provider>
 )
}

export const useGlobalContext = () => {
 return useContext(AppContext);
}
