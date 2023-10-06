import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { axios } from "../../lib/axios";
import { toDate } from "../../utils/format";

const Stats = ({ selectedCountry, selectedCategoryGroup }) => {
  const [statsData, setStatsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedCountry && selectedCategoryGroup) {
      axios
        .post("indicators", {
          country: selectedCountry,
          group: selectedCategoryGroup,
        })
        .then((res) => res.data)
        .then((data) => {
          setStatsData(data);
          setLoading(false);
        });
    } else {
      setStatsData([]);
      setLoading(true);
    }
  }, [selectedCategoryGroup, selectedCountry]);

  return (
    <div className="container">
      {loading ? (
        <div className="d-flex align-items-center justify-content-center vh-100">
          <div className="text-center">
            <h1 className="display-1">
              Display table
            </h1>
          </div>
        </div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Title</th>
              <th scope="col">Latest Value</th>
              <th scope="col">Unit</th>
              <th scope="col">Date</th>
              <th scope="col">Source</th>
              <th scope="col">Frequency</th>
            </tr>
          </thead>
          <tbody>
            {statsData.map((data, index) => (
              <tr key={index}>
                <td>{data.Category}</td>
                <td>{data.Title}</td>
                <td>{data.LatestValue}</td>
                <td>{data.Unit}</td>
                <td>{toDate(data.LatestValueDate)}</td>
                <td>
                  <a>{data.SourceURL}</a>
                </td>
                <td>{data.Frequency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

Stats.propTypes = {
  selectedCountry: PropTypes.any,
  selectedCategoryGroup: PropTypes.any,
};

export default Stats;
