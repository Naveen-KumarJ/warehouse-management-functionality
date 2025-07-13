import { useState, useEffect } from "react";
import warehouseDetails from "../../warehouse";
import InfoCard from "../../components/InfoCard/InfoCard";
import Filters from "../../components/Filters/Filters";

const Home = () => {
  const [warehouseData, setWarehouseData] = useState(
    JSON.parse(localStorage.getItem("warehouseDetails")) || warehouseDetails
  );
  const [filters, setFilters] = useState({
    search: "",
    city: "",
    cluster: "",
    space: "",
  });

  useEffect(() => {
    localStorage.setItem("warehouseDetails", JSON.stringify(warehouseData));
  }, [warehouseData]);

  const filteredData = warehouseData.filter((item) => {
    return (
      item.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      item.city.toLowerCase().includes(filters.city.toLowerCase()) &&
      item.cluster.toLowerCase().includes(filters.cluster.toLowerCase()) &&
      (filters.space === "" || item.space_available >= Number(filters.space))
    );
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Warehouse List</h1>
      <Filters filters={filters} setFilters={setFilters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map((element) => (
            <InfoCard element={element} key={element.id} />
          ))
        ) : (
          <p>No warehouses match your filters.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
