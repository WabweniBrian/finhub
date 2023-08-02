import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import AdminLayout from "./components/common/AdminLayout";
import {
  Dashboard,
  Messages,
  Notifications,
  ProfileSettings,
  Users,
  Contact,
  Transactions,
  SocialLinks,
  About,
  NewUser,
  RolesPermissions,
  Loans,
  LoanApplications,
  LoanRepayments,
  LoanPackages,
  Savings,
  FinancialStudyMaterials,
  FaqsInquiries,
  LoanReports,
  StudyMaterialReports,
  Logs,
  EditUser,
  NewRole,
  EditRole,
  LoanApplicationFormWizard,
  NewStudyMaterial,
  EditStudyMaterial,
  SavingsReports,
} from "./pages/admin";
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

  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="users" element={<Users />} />
          <Route path="users/new" element={<NewUser />} />
          <Route path="users/:id" element={<EditUser />} />
          <Route path="social-links" element={<SocialLinks />} />
          <Route path="roles-permissions" element={<RolesPermissions />} />
          <Route path="roles-permissions/new" element={<NewRole />} />
          <Route path="roles-permissions/:id" element={<EditRole />} />
          <Route path="loans" element={<Loans />} />
          <Route path="loans/applications" element={<LoanApplications />} />
          <Route path="loans/repayments" element={<LoanRepayments />} />
          <Route path="loans/packages" element={<LoanPackages />} />
          <Route path="loans/new" element={<LoanApplicationFormWizard />} />
          <Route path="savings" element={<Savings />} />
          <Route path="study-materials" element={<FinancialStudyMaterials />} />
          <Route path="study-materials/new" element={<NewStudyMaterial />} />
          <Route path="study-materials/:slug" element={<EditStudyMaterial />} />
          <Route path="reports/loan" element={<LoanReports />} />
          <Route path="reports/savings" element={<SavingsReports />} />
          <Route
            path="reports/study-materials"
            element={<StudyMaterialReports />}
          />
          <Route path="reports/logs" element={<Logs />} />
          <Route path="faq-inquiries" element={<FaqsInquiries />} />
          <Route path="profile" element={<ProfileSettings />} />
          <Route path="messages" element={<Messages />} />
          <Route path="about" element={<About />} />
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
