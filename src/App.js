import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  let isLogged = useSelector((state) => state.auth.isLogged);
  return (
    <React.Fragment>
      <div className="App" style={{ background: "ghostwhite" }}>
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route
              exact
              path="/login"
              element={!isLogged ? <Login /> : <Landing />}
            />
            <Route
              exact
              path="/register"
              element={!isLogged ? <Register /> : <Landing />}
            />
            {/* Add more routes for other pages */}
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
