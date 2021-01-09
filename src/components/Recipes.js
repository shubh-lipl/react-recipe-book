import Recipe from './Recipe';
import data from '../data'

function Recipes() {
 return (
  <div className="Recipes">
   <h2>Recipes Component</h2>
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
