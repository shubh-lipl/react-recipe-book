import { createContext, useContext, useEffect, useReducer, useCallback } from 'react'
import { reducer } from './reducer'

const AppContext = createContext()

const getLocalStorage = () => {
 let recipe = localStorage.getItem('recipe');
 if (recipe !== undefined) {
  try {
   return JSON.parse(recipe)
  }
  catch (errror) {
   console.log(errror)
   console.clear();
  }
 }
}


let initialState = {
 recipeList: getLocalStorage(),
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

 const saveOnServer = useCallback(() => {
  localStorage.setItem('recipe', JSON.stringify(state.recipeList))
 }, [state.recipeList])

 useEffect(() => {
  saveOnServer()
 }, [state.recipeList, saveOnServer])

 return (
  <AppContext.Provider value={{
   ...state,
   selectRecipe,
   addRecipe,
   editRecipe,
   newRecipe,
   updateRecipe,
   putIndex,
   deleteRecipe,
   saveOnServer
  }}>
   {children}
  </AppContext.Provider>
 )
}

export const useGlobalContext = () => {
 return useContext(AppContext);
}
