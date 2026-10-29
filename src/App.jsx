import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import TeamMatches from "./components/TeamMatches";
import NotFound from "./components/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team-matches/:id" element={<TeamMatches />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;