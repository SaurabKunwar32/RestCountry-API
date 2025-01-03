import "./App.css";
import Header from "./Component/Header";
import { Outlet } from "react-router";
import { ModesProvider } from "./Contexts/modes";

const App = () => {
  return (
    <ModesProvider>
      <Header />
      <Outlet />
    </ModesProvider>
  );
};

export default App;
