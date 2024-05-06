import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Getstarted from "./pages/Getstarted";
import Form from "./businessRegistration/Form";
import Services from "./pages/Dashboard/Services";
import Booking from "./pages/Dashboard/Booking";
import Messages from "./pages/Dashboard/Messages";
import Logout from "./pages/Dashboard/Logout";
import Settings from "./pages/Dashboard/Settings";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/getstarted" element={<Getstarted />} />
        <Route path="/business-form" element={<Form />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="services" element={<Services />} />
          <Route path="booking" element={<Booking />} />
          <Route path="messages" element={<Messages />} />
          <Route path="settings" element={<Settings />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
