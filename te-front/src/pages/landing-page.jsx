import { useState } from "react";
import { CategoryGroupDropDown, CountryDropDown, Stats } from "../components";

const LandingPage = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCategoryGroup, setSelectedCategoryGroup] = useState("");

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
  };

  const handleCategoryGroupChange = (categoryGroup) => {
    setSelectedCategoryGroup(categoryGroup);
  };
  return (
    <div className="container">
      <div className="row align-items-start">
        <CountryDropDown onSelectCountry={handleCountryChange} />
        <CategoryGroupDropDown
          onCategoryGroupSelect={handleCategoryGroupChange}
        />
      </div>
      <Stats
        selectedCountry={selectedCountry}
        selectedCategoryGroup={selectedCategoryGroup}
      />
    </div>
  );
};

export default LandingPage;
