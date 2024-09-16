// Main.tsx
import { useSelector } from "react-redux";
import { ProductGrid } from "./ProductDisplay";
import { SnackbarCompo } from "../Snackbar";
import { RootState } from "../../redux/store";
import { CircularProgress } from "@mui/material";
import "./Main.css";

export function Main() {
  const productStates = useSelector((state: RootState) => state.productsLoad.state);
  
  return (
    <div className="main-container">
      <h1 className="main-title">
        <span className="main-title-text">KDU</span> MARKETPLACE
      </h1>
      {productStates === 'pending' ? (
        <div className="loading-container">
          <CircularProgress />
        </div>
      ) : (
        <>
          <ProductGrid />
          <SnackbarCompo />
        </>
      )}
    </div>
  );
}
