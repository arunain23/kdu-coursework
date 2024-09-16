import { CSSProperties, useEffect } from "react"

import { Main } from "./components/HomePage/Main"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProductDetailsMain } from "./components/ProductDetailsMain"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "./redux/store"
import { getProducts } from "./thunks/getProducts"

import { setProductList } from "./redux/productsLoadSlice"
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
  
interface Rating {
  rate: number;
  count: number;
}

export function App() {
  const style: CSSProperties = {
    width: "100%"
  }

  const reduxDispatch: AppDispatch = useDispatch();
  const allProductsList = useSelector((state: RootState) => state.productsLoad.allProductsList);

  useEffect(() => {
    reduxDispatch(getProducts())
  }, [reduxDispatch])
  
  

  return (
      <BrowserRouter>
        <div style={style}>
       
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path='/product/:productId' element={<ProductDetailsMain /> } />
           
          </Routes>
        </div>
      </BrowserRouter>
  )
}
export default App;