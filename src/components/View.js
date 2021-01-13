import React, { useEffect } from 'react'
import { useGlobalContext } from "../context";
import { Link, useParams } from "react-router-dom";

function View() {
 const { selectedRecipe, editRecipe, putIndex, deleteRecipe } = useGlobalContext()
 const { id } = useParams()

 useEffect(() => {
  putIndex(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])

 return (
  <div className="View">
   <div>
    <Link to={`/edit/${id}`}>
     <button type="button" onClick={editRecipe}>Edit
     </button>
    </Link>
    <Link to={`/recipe`}>
     <button type="button" onClick={() => deleteRecipe(id)}>Delete
     </button>
    </Link>
   </div>
   <img src={selectedRecipe.imgPath} alt={selectedRecipe.name} />
   <h2>{selectedRecipe.name}</h2>
   <p>{selectedRecipe.detail}</p>
  </div>

 );
}

export default View;
