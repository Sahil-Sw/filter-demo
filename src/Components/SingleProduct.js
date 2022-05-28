import styled from "styled-components";

const ProductContainer = styled.div`
  background-color: #fff;
  background: #eee;
  display: flex;
  /* justify-content: space-between; */
  padding: 7px 20px;
  margin: 18px;
  height: 50px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const ProductDetails = styled.div`
  width: 22%;
  text-transform: capitalize;

  display: flex;
  align-items: center;
`;

const SingleProduct = (props) => {
  return (
    <ProductContainer>
      <ProductDetails>{props.product.product}</ProductDetails>
      <ProductDetails>Type: {props.product.type}</ProductDetails>
      <ProductDetails>{props.product.gender}</ProductDetails>
      <ProductDetails>Straps: {props.product.straps}</ProductDetails>
      <ProductDetails>${props.product.price}</ProductDetails>
    </ProductContainer>
  );
};

export default SingleProduct;
