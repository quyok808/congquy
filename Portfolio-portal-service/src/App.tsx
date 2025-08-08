import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./components/Exceptions/not-found";
import ProjectDetailPage from "./components/project/project-detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/congquy" element={<Home />} />
        <Route path="/congquy/project/:slug" element={<ProjectDetailPage />} />
        {/* Error Routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
