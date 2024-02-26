import React, { useState } from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import ProductList from './Components/ProductList/ProductList';
import ProductDetail from './Components/ProductDetail/ProductDetail';

// Define product interface
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

// Create a context to manage the selected product state
interface ProductContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const ProductContext = React.createContext<ProductContextType>({
  products: [],
  setProducts: () => {},
});



const App: React.FC = () => {
 
    const [products, setProducts] = useState<Product[]>([]);

    return (
      <Router>
        <ProductContext.Provider value={{ products, setProducts }}>
          <Routes>
          <Route path="/" element={ <ProductList products={products} setProducts={setProducts} />}>
           
          </Route>
          <Route path="/product/:productId" element={   <ProductDetail />}>
         
          </Route>

          </Routes>
          
        </ProductContext.Provider>
      </Router>
    );
  
};

export default App;

