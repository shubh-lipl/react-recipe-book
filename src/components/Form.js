import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context'

function Form() {
 const [imgValid, setImgValid] = useState(false)
 const { addRecipe, selectedRecipe, isEdit, updateRecipe, putIndex } = useGlobalContext()
 const { id } = useParams()
 const regEx = new RegExp(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g)
 console.log(id);

 useEffect(() => {
  if (id) {
   putIndex(id)
  }
 }, [id])

 const [singleRecipe, setSingleRecipe] = useState({
  id: '',
  name: '',
  imgPath: '',
  detail: ''
 })

 const handlerSubmit = (e) => {
  e.preventDefault();
  const id = new Date().getTime().toString();
  addRecipe({ ...singleRecipe, id });
  setSingleRecipe({
   id: '',
   name: '',
   imgPath: '',
   detail: ''
  })
 }

 useEffect(() => {
  if (regEx.test(singleRecipe.imgPath)) {
   setImgValid(true)
  } else {
   setImgValid(false)
  }
 }, [singleRecipe.imgPath])

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
      (!singleRecipe.imgPath && !imgValid) && <small style={{ color: 'red' }}>Required*</small>
     }
     {
      (singleRecipe.imgPath && !imgValid) && <small style={{ color: 'red' }}>Enter valid image path*</small>
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
     <textarea onChange={(e) => setSingleRecipe({ ...singleRecipe, detail: e.target.value })} value={singleRecipe.detail} name="ecipename" id="ecipename" placeholder="Enter recipe detail" rows="6"></textarea>
     {
      !singleRecipe.detail && <small style={{ color: 'red' }}>Required*</small>
     }
    </label>
    {
     !isEdit && <div>
      <button type="submit" disabled={(singleRecipe.name && singleRecipe.imgPath && singleRecipe.detail && imgValid) ? false : true}>Add</button>
     </div>
    }
   </form>

   {
    isEdit && <Link to={`/recipe/${id}`}>
     <button type="button" onClick={() => updateRecipe({ ...singleRecipe })}>Update</button>
    </Link>
   }

  </div>
 );
}

export default Form;
