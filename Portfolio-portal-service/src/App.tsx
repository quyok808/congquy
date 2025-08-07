import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Protected Routes */}
        <Route path="/congquy" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
