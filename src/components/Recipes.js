import Recipe from './Recipe';
import { useGlobalContext } from '../context'

function Recipes() {
 const { recipeList } = useGlobalContext()

 return (
  <div className="Recipes">
   {
    recipeList.map((item) => {
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
