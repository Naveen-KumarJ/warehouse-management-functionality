import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const InfoCard = ({ element }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/detail/${element.id}`)}
      className="bg-white shadow-md rounded-xl p-6 border hover:border-red-500 hover:border-2 hover:shadow-lg transition duration-200 cursor-pointer"
    >
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{element.name}</h3>
        <p className="text-sm text-gray-500">Code: {element.code}</p>
      </div>
      <hr className="mb-4 border-t-1 border-t-slate-400" />
      <div className="space-y-2 text-gray-700">
        <p>
          <span className="font-medium">City:</span> {element.city}
        </p>
        <p>
          <span className="font-medium">Space Available:</span>{" "}
          {element.space_available}
        </p>
        <p>
          <span className="font-medium">Type:</span> {element.type}
        </p>
        <p>
          <span className="font-medium">Cluster:</span> {element.cluster}
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium">Registered:</span>
          {element.is_registered ? (
            <FaCheckCircle className="text-green-500" />
          ) : (
            <FaTimesCircle className="text-red-500" />
          )}
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium">Live:</span>
          {element.is_live ? (
            <FaCheckCircle className="text-green-500" />
          ) : (
            <FaTimesCircle className="text-red-500" />
          )}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
