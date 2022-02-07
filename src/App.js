import TopBar from "./Components/topbar/TopBar";
import Sidebar from "./Components/Sidebar/Sidebar";
// import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import "./App.css";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
