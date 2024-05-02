import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Getstarted from "./pages/Getstarted";
import Form from "./businessRegistration/Form";
import Dashboard from "./pages/Dashboard/Dashboard";
import Services from "./pages/Dashboard/Services";
import DashboardIndex from "./pages/Dashboard/DashboardIndex";
import Booking from "./pages/Dashboard/Booking";
import Messages from "./pages/Dashboard/Messages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/getstarted" element={<Getstarted />} />
        <Route path="/business-form" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardIndex />} />
          <Route path="services" element={<Services />} />
          <Route path="booking" element={<Booking />} />
          <Route path="messages" element={<Messages />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
