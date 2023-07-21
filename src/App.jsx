import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import HomeLayout from "./components/common/HomeLayout";
import AdminLayout from "./components/common/AdminLayout";
import {
  AdminDashboard,
  BusAdminDashboard,
  ConductorDashboard,
  BusRoutes,
  BusOperators,
  BusTypes,
  Messages,
  Reports,
  Schedule,
  Notifications,
  Reservations,
  ProfileSettings,
  Users,
  ManageSeats,
  Contact,
  Buses,
} from "./pages/admin";
import {
  Home,
  BookingWizard,
  MyBookings,
  ContactUs,
  Search,
  Services,
  Track,
} from "./pages/public";
import NotFound from "./pages/NotFound";
import BackToTopButton from "./components/common/BackToTopButton";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { Login, Register } from "./pages/auth";
import GuestLayout from "./components/common/GuestLayout";

function App() {
  const [showButton, setShowButton] = useState(false);
  const route = useLocation();

  // Show/Hide scroll to top button
  window.addEventListener("scroll", () => {
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  });

  //NProgress
  useEffect(() => {
    NProgress.start();
    NProgress.done();
  }, [route]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  const role = "admin";

  const dashboard = () => {
    if (role === "admin") {
      return <AdminDashboard />;
    } else if (role === "bus-admin") {
      return <BusAdminDashboard />;
    } else {
      return <ConductorDashboard />;
    }
  };

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="book" element={<BookingWizard />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="search" element={<Search />} />
          <Route path="services" element={<Services />} />
          <Route path="track" element={<Track />} />
        </Route>
        <Route path="/admin/" element={<AdminLayout />}>
          <Route index element={dashboard()} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="users" element={<Users />} />
          <Route path="bus-routes" element={<BusRoutes />} />
          <Route path="bus-operators" element={<BusOperators />} />
          <Route path="buses" element={<Buses />} />
          <Route path="buses/manage" element={<ManageSeats />} />
          <Route path="bus-types" element={<BusTypes />} />
          <Route path="profile" element={<ProfileSettings />} />
          <Route path="messages" element={<Messages />} />
          <Route path="reports" element={<Reports />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BackToTopButton showButton={showButton} />
    </>
  );
}

export default App;
