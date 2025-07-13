import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2
        onClick={() => navigate("/")}
        className="font-semibold text-2xl text-center my-2 cursor-pointer bg-neutral-200 py-2 hover:bg-slate-100"
      >
        Warehouse Management
      </h2>
    </div>
  );
};

export default Header;
