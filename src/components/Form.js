import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context'

function Form() {
 const { addRecipe, selectedRecipe, isEdit, updateRecipe } = useGlobalContext()

 const [singleRecipe, setSingleRecipe] = useState({
  id: new Date().getTime().toString(),
  name: '',
  imgPath: '',
  detail: ''
 })

 const handlerSubmit = (e) => {
  e.preventDefault();
  setSingleRecipe({
   ...singleRecipe,
   name: '',
   imgPath: '',
   detail: ''
  })
  addRecipe({ ...singleRecipe });
 }

 useEffect(() => {
  setSingleRecipe({ ...selectedRecipe })
 }, [isEdit, selectedRecipe])

 return (
  <div className="Form">
   <img src={singleRecipe.imgPath} alt={singleRecipe.name} />
   <form onSubmit={handlerSubmit}>
    <label htmlFor="image">
     <span>Image</span>
     <input onChange={(e) => setSingleRecipe({ ...singleRecipe, imgPath: e.target.value })} value={singleRecipe.imgPath} type="text" placeholder="Enter image path" name="image" id="image" />
     {
      !singleRecipe.imgPath && <small style={{ color: 'red' }}>Required*</small>
     }
    </label>
    <label htmlFor="recipename">
     <span>Recipe Name</span>
     <input onChange={(e) => setSingleRecipe({ ...singleRecipe, name: e.target.value })} value={singleRecipe.name} type="text" placeholder="Vanila Ice Cream..." name="recipename" id="recipename" />
     {
      !singleRecipe.name && <small style={{ color: 'red' }}>Required*</small>
     }
    </label>
    <label htmlFor="recipename">
     <span>Recipe Detail</span>
     <textarea onChange={(e) => setSingleRecipe({ ...singleRecipe, detail: e.target.value })} value={singleRecipe.detail} name="ecipename" id="ecipename" placeholder="Enter recipe detail"></textarea>
     {
      !singleRecipe.detail && <small style={{ color: 'red' }}>Required*</small>
     }
    </label>
    {
     !isEdit && <div>
      <button type="submit" disabled={singleRecipe.imgPath && singleRecipe.name && singleRecipe.detail ? false : true}>Add</button>
     </div>
    }
   </form>

   {
    isEdit && <Link to="/new">
     <button type="button" onClick={() => updateRecipe({ ...singleRecipe })}>Update</button>
    </Link>
   }

  </div>
 );
}

export default Form;
