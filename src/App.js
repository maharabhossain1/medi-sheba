import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Header/Navigation/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
      </BrowserRouter>
    </>
  );
}

export default App;
