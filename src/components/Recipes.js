import Recipe from './Recipe';
import data from '../data'

function Recipes() {


 return (
  <div className="Recipes">
   {
    data.map((item) => {
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
