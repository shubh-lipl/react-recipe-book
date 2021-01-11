import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

function Navbar() {
 const { newRecipe } = useGlobalContext()
 return (
  <div className="Navbar">
   <Link to="/new">
    <button type="button" onClick={newRecipe}>
     New Recipe
    </button>
   </Link>
  </div>
 );
}

export default Navbar;
