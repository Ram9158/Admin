import TopBar from "./Components/topbar/TopBar";
import Sidebar from "./Components/Sidebar/Sidebar";
// import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container">
        <Sidebar />

        <div className="other">Home</div>
      </div>
    </div>
  );
}

export default App;
