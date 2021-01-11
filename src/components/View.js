import { useGlobalContext } from "../context";

function View() {
 const { state } = useGlobalContext()
 const { selectedRecipe } = state
 return (
  <div className="View">
   <img src={selectedRecipe.imgPath} alt={selectedRecipe.name} />
   <h2>{selectedRecipe.name}</h2>
   <p>{selectedRecipe.detail}</p>
  </div>
 );
}

export default View;
