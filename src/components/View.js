import React, { useEffect } from 'react'
import { useGlobalContext } from "../context";
import { Link, useParams } from "react-router-dom";

function View() {
 const { selectedRecipe, editRecipe } = useGlobalContext()
 const { id } = useParams()

 useEffect(() => {
  // console.log(selectedRecipe);
 }, [selectedRecipe])

 return (
  <div className="View">
   <div>
    <Link to={`/edit/${id}`}>
     <button type="button" onClick={editRecipe}>Edit
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
