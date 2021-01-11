export const reducer = (state, action) => {
 if (action.type === 'SELECT_RECIPE') {
  const selectRec = state.recipeList.filter(item => item.id === action.payload.id)
  return {
   ...state,
   selectedRecipe: selectRec[0]
  }
 }
 return state;
}