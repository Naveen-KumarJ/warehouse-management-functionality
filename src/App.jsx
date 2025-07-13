import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
