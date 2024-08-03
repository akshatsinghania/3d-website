import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Home, About, Projects, Contact } from "./pages";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/3d-website" element={<Home />} />
          <Route path="/3d-website/about" element={<About />} />
          <Route path="/3d-website/projects" element={<Projects />} />
          <Route path="/3d-website/contact" element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
