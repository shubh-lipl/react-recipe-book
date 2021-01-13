import { createContext, useContext, useReducer } from 'react'
import { reducer } from './reducer'

const AppContext = createContext()

let initialState = {
 recipeList: [],
 selectedRecipe: { id: '', imgPath: '', name: '', detail: '' },
 isEdit: false,
 selectIndex: null
}

export const AppProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initialState)

 const selectRecipe = (id) => {
  dispatch({ type: 'SELECT_RECIPE', payload: id })
 }

 const putIndex = (id) => {
  dispatch({ type: 'PUT_INDEX', payload: id })
 }

 const addRecipe = ({ id, name, imgPath, detail }) => {
  dispatch({ type: 'ADD_RECIPE', payload: { id, name, imgPath, detail } })
 }

 const editRecipe = () => {
  dispatch({ type: 'EDIT_RECIPE' })
 }

 const newRecipe = () => {
  dispatch({ type: 'NEW_RECIPE' })
 }
 const updateRecipe = ({ id, name, imgPath, detail }) => {
  dispatch({ type: 'UPDATE_RECIPE', payload: { id, name, imgPath, detail } })
 }

 const deleteRecipe = (id) => {
  dispatch({ type: 'DELETE_RECIPE', payload: id })
 }
 return (
  <AppContext.Provider value={{
   ...state,
   selectRecipe,
   addRecipe,
   editRecipe,
   newRecipe,
   updateRecipe,
   putIndex,
   deleteRecipe
  }}>
   {children}
  </AppContext.Provider>
 )
}

export const useGlobalContext = () => {
 return useContext(AppContext);
}
