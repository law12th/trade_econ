import { useEffect, useState } from "react";
import { axios } from "../../lib/axios";
import PropTypes from "prop-types";

const CategoryGroupDropDown = ({ onCategoryGroupSelect }) => {
  const [categoryGroups, setCategoryGroups] = useState([]);

  useEffect(() => {
    axios
      .get("indicators")
      .then((res) => res.data)
      .then((data) => setCategoryGroups(data));
  });

  const handleCategoryGroupChange = (event) => {
    onCategoryGroupSelect(event.target.value);
  };

  return (
    <div className="col">
      <label>Select a category group: </label>
      <select className="form-select" onChange={handleCategoryGroupChange}>
        <option value=""></option>
        {categoryGroups
          .map(cg => cg.CategoryGroup)
          .filter((value, index, self) => self.indexOf(value) === index)
          .map((categoryGroup, index) => (
            <option key={index} value={categoryGroup}>
              {categoryGroup}
            </option>
          ))}
      </select>
    </div>
  );
};

CategoryGroupDropDown.propTypes = {
  onCategoryGroupSelect: PropTypes.any,
};

export default CategoryGroupDropDown;
