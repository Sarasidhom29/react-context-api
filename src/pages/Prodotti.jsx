import ProductList from "../components/ProductList";
import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext.jsx";

function Prodotti({ productList }) {
  const { budgetMode } = useContext(BudgetContext);

  // Se budgetMode === true, mostro solo prodotti con price <= 30
  const filteredProducts = budgetMode
    ? productList.filter((p) => p.price <= 30)
    : productList;

  console.log("prodotti", productList);
  if (!productList) {
    return (
      <h2 className="text-center text-light">
        Caricamento prodotti in corso...
      </h2>
    );
  }

  return <ProductList products={filteredProducts} />;
}

export default Prodotti;