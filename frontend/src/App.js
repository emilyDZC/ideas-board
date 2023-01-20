import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import IdeasBoard from "./pages/IdeasBoard";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Router>
        <div class="container">
          <Header />
          <Routes>
            <Route path="/" element={<IdeasBoard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
