import React from "react";
import { FilterWrapper, CustomLabel, CustomNumInput } from "./style";

function Filter(props) {
  return (
    <FilterWrapper>
      <CustomLabel htmlFor="minFilter">Valor mínimo</CustomLabel>
      <CustomNumInput
        type="number"
        id="minFilter"
        min="0"
        value={props.minFilter}
      />

      <CustomLabel htmlFor="maxFilter">Valor máximo</CustomLabel>
      <CustomNumInput
        type="number"
        id="maxFilter"
        min="0"
        value={props.maxFilter}
      />
    </FilterWrapper>
  );
};

export default Filter;