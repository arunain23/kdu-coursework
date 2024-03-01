// import { useSelector } from "react-redux";
// import { useNavigate, useParams } from "react-router-dom";
// import { RootState } from "../redux/store";
// import "./ProductDetailsMain.css";

// export function ProductDetailsMain() {
//   const { productId } = useParams<{ productId: string }>();

//   const allProductsList = useSelector((state: RootState) => state.productsLoad.allProductsList);

//   const navigate = useNavigate();

//   const product = allProductsList.find((product) => product.id.toString() === productId);

//   const handleGoBack = () => {
//     navigate(-1);
//   }

//   return (
//     <div className="product-details-container">
//       <h1 className="product-title">{product?.title}</h1>
//       <div className="product-details-content">
//         <img src={product?.image} alt="" className="product-image" />
//         <div className="product-info">
//           <p className="product-price">Price: $ {product?.price}</p>
//           <p className="product-rating">Rating: {product?.rating.rate} ({product?.rating.count})</p>
//           <h3 className="product-description-heading">Product Description:</h3>
//           <p className="product-description">{product?.description}</p>
//           <button className="back-button" onClick={handleGoBack}>Back To Products</button>
//         </div>
//       </div>
//     </div>
//   );
// }
