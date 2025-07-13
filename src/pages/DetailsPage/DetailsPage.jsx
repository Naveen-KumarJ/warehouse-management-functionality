import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [warehouseData, setWarehouseData] = useState([]);
  const [form, setForm] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("warehouseDetails")) || [];
    setWarehouseData(stored);
    const found = stored.find((w) => w.id === parseInt(id));
    if (found) setForm(found);
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSave = () => {
    const updated = warehouseData.map((w) =>
      w.id === form.id ? form : w
    );
    localStorage.setItem("warehouseDetails", JSON.stringify(updated));
    navigate("/");
  };

  if (!form) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Edit Warehouse</h2>
      <label className="block mb-2">Name</label>
      <input name="name" value={form.name} onChange={handleChange} className="w-full p-2 border mb-4 rounded" />
      
      <label className="block mb-2">City</label>
      <input name="city" value={form.city} onChange={handleChange} className="w-full p-2 border mb-4 rounded" />
      
      <label className="block mb-2">Cluster</label>
      <input name="cluster" value={form.cluster} onChange={handleChange} className="w-full p-2 border mb-4 rounded" />
      
      <label className="block mb-2">Space Available</label>
      <input name="space_available" value={form.space_available} type="number" onChange={handleChange} className="w-full p-2 border mb-4 rounded" />

      <label className="block mb-2">Live</label>
      <input type="checkbox" name="is_live" checked={form.is_live} onChange={handleChange} className="mr-2" /> Is Live
      
      <div className="mt-6 flex gap-4">
        <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
        <button onClick={() => navigate("/")} className="bg-gray-300 px-4 py-2 rounded">Cancel</button>
      </div>
    </div>
  );
};

export default DetailsPage;
