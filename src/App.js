import "./App.css";
import "./index.scss";
import "./layout.scss";

import Navbar from "./components/navbar/Navbar.jsx";
import HomePage from "./routes/homePage/homePage.jsx";


function App() {
  return <div className="layout">
    <Navbar></Navbar>

    <div className="content">
      <HomePage></HomePage>
    </div>
  </div>;
}

export default App;
