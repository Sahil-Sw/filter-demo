import { DUMMY_DATA } from "./DUMMY_DATA";
import { useState } from "react";
import FilterSidebar from "./FilterSidebar";
import Card from "./Card";
import styled from "styled-components";
import SingleProduct from "./SingleProduct";

const MainContentContainer = styled.div`
  background-color: #fff;
  width: 70%;
  height: 100%;
  padding: 20px 0;
`;

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 30px;
`;

const SortLabel = styled.label`
  margin-right: 5px;
`;

const ProductContainer = styled.div`
  width: 100%;
  height: 100%;
  /* background: #333; */
  overflow-y: auto;
`;

const NotFoundText = styled.h2`
  font-size: 24px;
  text-align: center;
`;

const Products = () => {
  const [filterProduct, setFilterProduct] = useState({
    brand: "all",
    type: "all",
    straps: "all",
    gender: "all",
    sortByPrice: "all",
  });

  const onSortHandler = (e) => {
    setFilterProduct((prev) => {
      return { ...prev, sortByPrice: e.target.value };
    });
  };

  const filteredProducts = DUMMY_DATA.filter((product) => {
    if (filterProduct.brand === "all") return product;

    if (product.brand === filterProduct.brand) {
      return product;
    }
  })
    .filter((product) => {
      if (filterProduct.type === "all") return product;

      if (product.type === filterProduct.type) {
        return product;
      }
    })
    .filter((product) => {
      if (filterProduct.gender === "all") return product;

      if (product.gender === filterProduct.gender) {
        return product;
      }
    })
    .filter((product) => {
      if (filterProduct.straps === "all") return product;

      if (product.straps === filterProduct.straps) {
        return product;
      }
    })
    .sort((a, b) => {
      if (filterProduct.sortByPrice === "asc") {
        return a.price - b.price;
      } else if (filterProduct.sortByPrice === "des") {
        return b.price - a.price;
      } else {
        return a.price === b.price;
      }
    })
    .map((product, i, arr) => {
      console.log(arr);
      return <SingleProduct key={i} product={product}></SingleProduct>;
    });

  //   console.log(filteredProducts);

  return (
    <div>
      <Card>
        <FilterSidebar setFilterProduct={setFilterProduct}></FilterSidebar>
        <MainContentContainer>
          <SortContainer>
            <div>
              <SortLabel>Sort by Price</SortLabel>
              <select defaultValue="all" onChange={onSortHandler}>
                <option value="all">None</option>
                <option value="asc">Ascending</option>
                <option value="des">Descending</option>
              </select>
            </div>
          </SortContainer>
          <ProductContainer>
            {filteredProducts.length > 0 ? (
              filteredProducts
            ) : (
              <NotFoundText>No Product Found</NotFoundText>
            )}
          </ProductContainer>
        </MainContentContainer>
      </Card>
    </div>
  );
};

export default Products;
