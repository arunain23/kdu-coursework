import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./ProductList.scss"

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductListProps {
    products: Product[];
    setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductList: React.FC<ProductListProps> = ({ products,setProducts }) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterBrand, setFilterBrand] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<string>('ASC');
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    axios.get<Product[]>('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(error => console.error(error));
  }, [setProducts]);

  useEffect(() => {
    const filtered = products.filter(product => {
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    if (filterBrand !== 'All') {
      setFilteredProducts(filtered.filter(product => product.category === filterBrand));
    } else {
      setFilteredProducts(filtered);
    }
  }, [searchQuery, filterBrand, products]);

  const handleSearch = () => {
    setSearchQuery(searchInputRef.current!.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterBrand(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (sortOrder === 'ASC') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
    setFilteredProducts(sortedProducts);
  };

  return (
    <div className="ProductList">
      <div className="ProductList-header">
        
        <input type="text" placeholder="Search products" ref={searchInputRef} onChange={handleSearch} />
        <h4>Filter: </h4>
        <select value={filterBrand} onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          
          
          {/* Add more options as needed */}
        </select>
        <h4>Sort by: </h4>
        <select value={sortOrder} onChange={handleSortChange}>
          <option value="ASC">Descending</option>
          <option value="DESC">Ascending</option>
        </select>
      </div>
      <center><h1 style={{padding:"12px", color:'darkblue'}}>KDU Marketplace</h1></center>
      <div className='itemList'>
      {filteredProducts.map(product => (
        <div key={product.id} className="Product">
          <Link to={`/product/${product.id}`} style={{textDecoration:"none", color:"black"}}>
            <img src={product.image} alt={product.title} />
            <div className="product-detailsI">
      <h3>{product.title}</h3>
      <span >${product.price}</span>
    </div>
            
            
          </Link>
        </div>
      ))}
       </div>
    </div>
  );
};

export default ProductList;
