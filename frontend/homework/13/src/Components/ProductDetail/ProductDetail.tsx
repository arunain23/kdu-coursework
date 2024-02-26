import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom'; // Added the Link import
import { ProductContext } from '../../App';
import "./ProductDetail.scss";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products } = useContext(ProductContext);
  const product = products.find(p => p.id === parseInt(productId ?? "", 10));

  return (
    <div className="product-detail">
      {product && (
        <div>
          <h3>{product.title}</h3>
          <div className="product-image" >
            <img  style={{ width: '300px', height: 'auto' }} src={product.image} alt={product.title} />
          </div>
          <div className="product-info" >
            <h2>Product Detail</h2>
            <div>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <p>Description: {product.description}</p>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <button>Back to Products</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
