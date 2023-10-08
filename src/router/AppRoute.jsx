import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/main/Main";
import AboutUs from "../pages/about/AboutUs";
import AppLayout from "../layout/AppLayout";
import Events from "../pages/event/Events";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Main />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="events" element={<Events />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
