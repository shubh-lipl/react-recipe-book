export const reducer = (state, action) => {
 if (action.type === 'SELECT_RECIPE') {
  const selectRec = state.recipeList.filter(item => item.id === action.payload)
  return {
   ...state,
   selectedRecipe: selectRec[0],
   selectIndex: parseInt(selectRec[0].id)
  }
 }
 if (action.type === 'ADD_RECIPE') {
  let newRecipes = [...state.recipeList, action.payload]
  return {
   ...state,
   recipeList: newRecipes
  }
 }
 if (action.type === 'EDIT_RECIPE') {
  return {
   ...state,
   isEdit: true
  }
 }
 if (action.type === 'NEW_RECIPE') {
  return {
   ...state,
   isEdit: false,
   selectedRecipe: { id: '', imgPath: '', name: '', detail: '' },
   selectIndex: null
  }
 }
 if (action.type === 'UPDATE_RECIPE') {
  const newList = state.recipeList.map((item) => {
   if (item.id === action.payload.id) {
    let { ...item } = { ...action.payload }
    return item;
   }
   return item;
  })
  return {
   ...state,
   isEdit: false,
   recipeList: newList,
   selectedRecipe: { id: '', imgPath: '', name: '', detail: '' }
  }
 }

 if (action.type === 'PUT_INDEX') {
  const tempRecipe = state.recipeList.filter(item => item.id === parseInt(action.payload))
  return {
   ...state,
   selectIndex: action.payload,
   selectedRecipe: { ...tempRecipe[0] }
  }
 }
 if (action.type === 'DELETE_RECIPE') {
  const tempRecipe = state.recipeList.filter(item => item.id !== parseInt(action.payload))
  return {
   ...state,
   recipeList: tempRecipe,
   selectedRecipe: { id: '', imgPath: '', name: '', detail: '' },
   selectIndex: null
  }
 }



 return state;
}