function Recipe({ id, name, imgPath, detail }) {
 return (
  <div className="Recipe">
   <img src={imgPath} alt={name} />
   <div>
    <h4>{name}</h4>
    <p>{detail}</p>
   </div>
  </div>
 );
}

export default Recipe;
