import styled from "styled-components";

const FilterSidebarContainer = styled.div`
  background-color: #eee;
  width: 30%;
  height: 100%;
  padding: 20px 0;
`;

const FilterLabel = styled.label`
  font-size: 24px;
  font-weight: bold;
  display: block;
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 5px 3px;
  font-size: 18px;
  font-weight: 600;
`;

const FilterComponent = styled.div`
  margin: 20px auto;
  width: 90%;
`;

const FilterSidebar = (props) => {
  const onBrandChange = (e) => {
    console.log(e.target.value);
    props.setFilterProduct((prev) => {
      return { ...prev, brand: e.target.value };
    });
  };
  const onTypeChange = (e) => {
    console.log(e.target.value);
    props.setFilterProduct((prev) => {
      return { ...prev, type: e.target.value };
    });
  };
  const onStrapsChange = (e) => {
    console.log(e.target.value);
    props.setFilterProduct((prev) => {
      return { ...prev, straps: e.target.value };
    });
  };
  const onGenderChange = (e) => {
    console.log(e.target.value);
    props.setFilterProduct((prev) => {
      return { ...prev, gender: e.target.value };
    });
  };
  return (
    <FilterSidebarContainer>
      <FilterComponent>
        <FilterLabel htmlFor="brand">Brand</FilterLabel>
        <FilterSelect id="brand" defaultValue="all" onChange={onBrandChange}>
          <option value="all">All</option>
          <option value="titan">Titan</option>
          <option value="casio">Casio</option>
          <option value="seiko">Seiko</option>
          <option value="cartier">Cartier</option>
          <option value="rolex">Rolex</option>
        </FilterSelect>
      </FilterComponent>
      <FilterComponent>
        <FilterLabel htmlFor="type">Type</FilterLabel>
        <FilterSelect id="type" defaultValue="all" onChange={onTypeChange}>
          <option value="all">All</option>
          <option value="analog">Analog</option>
          <option value="digital">Digital</option>
        </FilterSelect>
      </FilterComponent>
      <FilterComponent>
        <FilterLabel htmlFor="straps">Straps</FilterLabel>
        <FilterSelect id="straps" defaultValue="all" onChange={onStrapsChange}>
          <option value="all">All</option>
          <option value="leather">Leather</option>
          <option value="metal">Metal</option>
        </FilterSelect>
      </FilterComponent>
      <FilterComponent>
        <FilterLabel htmlFor="gender">Gender</FilterLabel>
        <FilterSelect id="gender" defaultValue="all" onChange={onGenderChange}>
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </FilterSelect>
      </FilterComponent>
    </FilterSidebarContainer>
  );
};

export default FilterSidebar;
