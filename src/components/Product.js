const Product=(props)=>{
  const {title,rating,price,image}=props.itsMyChoice;
  return <div className="product">
   <img className="product-img" src={image}/>
   <h1>{title}</h1>
   <p>{rating.rate}</p>
   <p>{price}</p>
  </div>
}
export default Product