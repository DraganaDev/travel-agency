import React from "react";

const NoResults = ({ handleRefreshClick }) => {
  return (
    <div className="no-results-bg">
      <h3 className="no-results-h3"> No results were found</h3>
      <p>
        Your search returned no results. Choose other options or clear some
        filters.{" "}
        <button className="refresh-btn" onClick={handleRefreshClick}>
          Refresh the page.
        </button>{" "}
      </p>
    </div>
  );
};

export default NoResults;
