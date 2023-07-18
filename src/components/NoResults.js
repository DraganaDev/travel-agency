import React from "react";

const NoResults = () => {
  return (
    <div className="no-results-bg">
      <h3 className="no-results-h3"> No results were found</h3>
      <p>
        Your search returned no results. Choose other options or clear some
        filters.{" "}
        <button
          className="refresh-btn"
          onClick={() => window.location.reload(true)}
        >
          Refresh the page.
        </button>
      </p>
    </div>
  );
};

export default NoResults;
