import styled from "styled-components";

const CardContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  /* background-color: #1e0f47; */
  /* padding: 10px 0; */
  height: 100vh;
`;

const Card = (props) => {
  return <CardContainer>{props.children}</CardContainer>;
};

export default Card;
