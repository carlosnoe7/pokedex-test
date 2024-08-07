import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import HomeView from "../pages/Home.views";
import DetailsView from "../pages/Details.view";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <React.Fragment>
          <Route path="/home" element={<HomeView />} />
          <Route path="/pokemon/:id" element={<DetailsView />} />
          <Route path="*" element={<Navigate redirect to="/home" />} />
        </React.Fragment>
      </Routes>
    </Router>
  );
}

export default AppRouter;