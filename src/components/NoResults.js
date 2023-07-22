import React from "react";

const NoResults = ({ resetFilters }) => {
  return (
    <div className="no-results-bg">
      <h3 className="no-results-h3"> No results were found</h3>
      <p>
        Your search returned no results. Choose other options or{" "}
        <button className="reset-btn" onClick={resetFilters}>
          reset filters.
        </button>
      </p>
    </div>
  );
};

export default NoResults;
