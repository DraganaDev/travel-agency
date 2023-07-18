import React from "react";

const Select = ({ id, label, filters, onChange, onKeyDown }) => {
  return (
    <div>
      <label className="label-select" htmlFor={id}>
        Choose {label}:
      </label>
      <select name={id} id={id} onChange={onChange} onKeyDown={onKeyDown}>
        <option value="">All</option>
        {filters.map((filter) => (
          <option key={filter} value={filter}>
            {filter}
            {id === "select-stars" && "*"}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
