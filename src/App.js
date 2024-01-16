import "./App.css";
import Menu from "./Components/Menu";
import Sabores from "./Components/Sabores";
import UilReact from "@iconscout/react-unicons/icons/uil-react";

function App() {
  return (
    <div className="bg-green-300 m-2 h-screen overflow-hidden rounded-2xl">
      <Menu />

      <Sabores />
    </div>
  );
}

export default App;
