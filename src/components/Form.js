import { Link, useParams } from 'react-router-dom';

function Form() {
 const { id } = useParams()
 console.log(id);
 const handlerSubmit = (e) => {
  e.preventDefault();
  console.log('Submitted!!!');
 }

 return (
  <div className="Form">
   <img src="" alt="" />
   <form onSubmit={handlerSubmit}>
    <label htmlFor="image">
     Image
     <input type="text" placeholder="Enter image path" name="image" id="image" />
    </label>
    <label htmlFor="recipename">
     Recipe Name
     <input type="text" placeholder="Vanila Ice Cream..." name="recipename" id="recipename" />
    </label>
    <label htmlFor="recipename">
     Recipe Detail
     <textarea name="ecipename" id="ecipename" placeholder="Enter recipe detail"></textarea>
    </label>
   </form>
  </div>
 );
}

export default Form;
