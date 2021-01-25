import Recipe from './Recipe';
// import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'

function Recipes() {

 // const { id } = useParams()
 // console.log(id);
 const { recipeList } = useGlobalContext()

 if (recipeList.length === 0) {
  return <div className="Recipes">
   <h2>
    No recipe in your list. Please add new recipe.
  </h2>
  </div>
 }

 return (
  <div className="Recipes">
   {
    recipeList && recipeList.map((item) => {
     let { id } = item
     return (
      <Recipe key={id} {...item} />
     )
    })
   }
  </div>
 );
}

export default Recipes;
