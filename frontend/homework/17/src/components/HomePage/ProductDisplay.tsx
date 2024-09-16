import { RootState } from "../../redux/store";
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";


export function ProductGrid() {
  const productsList = useSelector((state: RootState) => state.productsLoad.productsList);
  console.log("NEW" + productsList);
  
  
 
  return (
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr", margin: "40px"}}>
      {
        productsList.map((product) => {
          return (
            <Link to={`/product/${product.id}`} style={{textDecoration:"none", color:"black"}}>
      <div style={{display:"flex",flexDirection:"column", alignItems:"center", height:"350px",padding:"10px", backgroundColor:"#ffffff", margin:"15px", justifyContent:"space-around"}}>
      <img src={product.image} alt={product.title} style={{ maxWidth: "100%", maxHeight: "100%", width: "100px", height: "100px" }} />
        <h2 style={{ fontSize: "1.5rem", textAlign: "center" }}>{product.title}</h2>
      
        <div style={{display:"flex", justifyContent:"space-around", width:"100%"}}>
          
          <span style={{fontSize:"1.5rem", padding:"5px", color:"#474483", fontWeight:"600"}}>$ {product.price}</span>
        </div>
      </div>
    </Link>
          )
        })
      }
    </div>
  )
}