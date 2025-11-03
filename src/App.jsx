import { Navbar } from "./Components/Navbar";
import { Home } from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { New } from "./pages/New";
import { Men } from "./pages/Men";
import { Women } from "./pages/Women";
import { Kids } from "./pages/Kids";
import FullView from "./pages/full_view";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/New" element={<New />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/full_view" element={<FullView />} />
      </Routes>
    </>
  );
}

export default App;