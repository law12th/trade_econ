import { useEffect, useState } from "react";
import { axios } from "../../lib/axios";
import PropTypes from "prop-types";

const CountryDropDown = ({ onSelectCountry }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("countries")
      .then((res) => res.data)
      .then((data) => setCountries(data));
  }, []);

  const handleCountryChange = (event) => {
    onSelectCountry(event.target.value);
  };

  return (
    <div className="col">
      <label>Select a country: </label>
      <select className="form-select" onChange={handleCountryChange}>
        <option value=""></option>
        {countries.map((country) => (
          <option key={country.code} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

CountryDropDown.propTypes = {
  onSelectCountry: PropTypes.any,
};

export default CountryDropDown;
