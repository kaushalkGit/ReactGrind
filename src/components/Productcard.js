import { Productlist } from "../utils/constant";
import Product from "./Product";
//Named Export
export const Productcard=()=>{
  return <div className="product-card">
 {
 Productlist.map((itsMyChoice, id) => {
  return <Product key={id} itsMyChoice={itsMyChoice} />;
})}

  </div>
}
