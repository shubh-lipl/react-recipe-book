import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

function Recipe({ id, name, imgPath, detail }) {
 const { selectRecipe } = useGlobalContext()
 return (
  <Link to={`/recipe/${id}`}>
   <div className="Recipe" onClick={() => selectRecipe(id)}>
    <img src={imgPath} alt={name} />
    <div>
     <h4>{name}</h4>
     <p>{
      `${detail.substring(0, 60)}${detail.length > 50 ? '...' : ''}`
     }</p>
    </div>
   </div>
  </Link>
 );
}

export default Recipe;
