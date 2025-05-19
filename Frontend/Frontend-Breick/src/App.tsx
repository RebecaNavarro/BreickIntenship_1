import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./HomePage";
import Login from "./dashboard/auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard/counter" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;