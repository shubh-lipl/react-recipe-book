import Recipe from './Recipe';
// import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'

function Recipes() {

 // const { id } = useParams()
 // console.log(id);
 const { recipeList } = useGlobalContext()

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
