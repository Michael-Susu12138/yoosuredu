import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Test from "./Pages/Test/Test";
// import Teachers from "./Pages/Teachers/Teachers";

// import Nav from "./Components/Nav/Nav";
// import Sidebar from "./Components/Sidebar/Sidebar";

// import "bootstrap/dist/css/bootstrap.min.css";

// import React from "react";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default App;
