import { Route, Routes, useLocation } from "react-router-dom";
import ScheduleMeeting from "../Pages/ScheduleMeeting";
import PeriodTracker from "../Pages/PeriodTracker";
import AppointmentForm from "../Pages/AppointmentForm";
import { AnimatePresence } from "framer-motion";
import Home from "../Pages/Home";
import React from 'react';

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/> 
        <Route path="/AppointmentForm" element={<AppointmentForm/>} />
        <Route path="/ScheduleMeeting" element={<ScheduleMeeting/>} />
        <Route path="/PeriodTracker" element={<PeriodTracker/>} />
  
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;