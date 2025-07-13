import React from "react";

const Filters = ({ filters, setFilters }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      <input
        type="text"
        placeholder="Search by Name"
        className="p-2 border rounded w-60"
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
      />
      <input
        type="text"
        placeholder="City"
        className="p-2 border rounded w-40"
        value={filters.city}
        onChange={(e) => setFilters({ ...filters, city: e.target.value })}
      />
      <input
        type="text"
        placeholder="Cluster"
        className="p-2 border rounded w-40"
        value={filters.cluster}
        onChange={(e) => setFilters({ ...filters, cluster: e.target.value })}
      />
      <input
        type="number"
        placeholder="Min Space"
        className="p-2 border rounded w-40"
        value={filters.space}
        onChange={(e) => setFilters({ ...filters, space: e.target.value })}
      />
    </div>
  );
};

export default Filters;
