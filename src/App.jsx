import React, { useState, useEffect, useRef } from "react"; // useRef ko import kiya gaya hai
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import {
  BarChart3,
  FileText,
  Shield,
  Users,
  TrendingUp,
  Calendar,
  AlertTriangle,
  Activity,
} from "lucide-react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import InsurancePage from "./pages/InsurancePage";
import UnremittedPage from "./pages/UnremittedPage";
import ServiceClassPage from "./pages/ServiceClassPage";
import ServiceDistributionPage from "./pages/ServiceDistributionPage";
import SubAgingPage from "./pages/SubAgingPage";
import RejectionAnalysisPage from "./pages/RejectionAnalysisPage";
import PendingResubPage from "./pages/PendingResubPage";
import ClaimAveragePage from "./pages/ClaimAveragePage";
import SettlementReportPage from "./pages/SettlementReportPage";
import "./App.css";

// Navigation items configuration
const navigationItems = [
  { text: "Dashboard", icon: BarChart3, path: "/", badge: null },
  { text: "Insurance", icon: Shield, path: "/insurance", badge: "12" },
  { text: "Unremitted", icon: AlertTriangle, path: "/unremitted", badge: "5" },
  { text: "Service Class", icon: Users, path: "/service-class", badge: null },
  {
    text: "Service Distribution",
    icon: Activity,
    path: "/service-distribution",
    badge: null,
  },
  { text: "Sub Aging", icon: Calendar, path: "/sub-aging", badge: "3" },
  {
    text: "Rejection Analysis",
    icon: FileText,
    path: "/rejection-analysis",
    badge: null,
  },
  {
    text: "Pending Resub",
    icon: AlertTriangle,
    path: "/pending-resub",
    badge: "8",
  },
  {
    text: "Claim Average",
    icon: TrendingUp,
    path: "/claim-average",
    badge: null,
  },
  {
    text: "Settlement Report",
    icon: FileText,
    path: "/settlement-report",
    badge: null,
  },
];

// Loading skeleton component
const LoadingSkeleton = ({ className }) => (
  <div className={`loading-skeleton ${className}`}></div>
);

// Main App Content Component
const AppContent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const mainContentRef = useRef(null); // Main content ke liye ek ref banaya gaya hai

  // Loading state ke liye useEffect
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Path badalne par main content ko top par scroll karne ke liye useEffect
  useEffect(() => {
    if (mainContentRef.current) {
      mainContentRef.current.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const handleNavClick = (item) => {
    navigate(item.path);
    setSidebarOpen(false);
  };

  const getCurrentPageTitle = () =>
    navigationItems.find((item) => item.path === location.pathname)?.text ||
    "Dashboard";

  if (loading) {
    return (
      <div className="flex h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="w-64 bg-white shadow-lg p-4">
          <LoadingSkeleton className="h-12 mb-4" />
          {[...Array(8)].map((_, i) => (
            <LoadingSkeleton key={i} className="h-10 mb-2" />
          ))}
        </div>
        <div className="flex-1 p-6">
          <LoadingSkeleton className="h-8 w-64 mb-6" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            {[...Array(4)].map((_, i) => (
              <LoadingSkeleton key={i} className="h-32" />
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <LoadingSkeleton key={i} className="h-64" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Sidebar Component */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        toggleSidebar={toggleSidebar}
        handleNavClick={handleNavClick}
        navigationItems={navigationItems}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header Component */}
        <Header
          toggleSidebar={toggleSidebar}
          getCurrentPageTitle={getCurrentPageTitle}
          sidebarCollapsed={sidebarCollapsed}
        />

        {/* Page Content */}
        <main
          ref={mainContentRef} // Ref ko yahan main element se joda gaya hai
          className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50 p-6"
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/insurance" element={<InsurancePage />} />
            <Route path="/unremitted" element={<UnremittedPage />} />
            <Route path="/service-class" element={<ServiceClassPage />} />
            <Route
              path="/service-distribution"
              element={<ServiceDistributionPage />}
            />
            <Route path="/sub-aging" element={<SubAgingPage />} />
            <Route
              path="/rejection-analysis"
              element={<RejectionAnalysisPage />}
            />
            <Route path="/pending-resub" element={<PendingResubPage />} />
            <Route path="/claim-average" element={<ClaimAveragePage />} />
            <Route
              path="/settlement-report"
              element={<SettlementReportPage />}
            />
          </Routes>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40  bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      {/* ScrollToTop component ko yahan se hata diya gaya hai */}
      <AppContent />
    </Router>
  );
};

export default App;
