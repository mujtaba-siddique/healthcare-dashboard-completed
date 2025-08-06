import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
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

import Loader from "./components/Loader.jsx";
import DashboardLayout from "./layout/DashboardLayout.jsx";
import Dashboard from "./pages/Dashboard";
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

const navigationItems = [
  { text: "Dashboard", icon: BarChart3, path: "/", badge: null },
  { text: "Insurance", icon: Shield, path: "/insurance", badge: "12" },
  { text: "Unremitted", icon: AlertTriangle, path: "/unremitted", badge: "5" },
  { text: "Service Class", icon: Users, path: "/service-class", badge: null },
  { text: "Service Distribution", icon: Activity, path: "/service-distribution", badge: null },
  { text: "Sub Aging", icon: Calendar, path: "/sub-aging", badge: "3" },
  { text: "Rejection Analysis", icon: FileText, path: "/rejection-analysis", badge: null },
  { text: "Pending Resub", icon: AlertTriangle, path: "/pending-resub", badge: "8" },
  { text: "Claim Average", icon: TrendingUp, path: "/claim-average", badge: null },
  { text: "Settlement Report", icon: FileText, path: "/settlement-report", badge: null },
];

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <DashboardLayout
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        navigationItems={navigationItems}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/unremitted" element={<UnremittedPage />} />
          <Route path="/service-class" element={<ServiceClassPage />} />
          <Route path="/service-distribution" element={<ServiceDistributionPage />} />
          <Route path="/sub-aging" element={<SubAgingPage />} />
          <Route path="/rejection-analysis" element={<RejectionAnalysisPage />} />
          <Route path="/pending-resub" element={<PendingResubPage />} />
          <Route path="/claim-average" element={<ClaimAveragePage />} />
          <Route path="/settlement-report" element={<SettlementReportPage />} />
        </Routes>
      </DashboardLayout>
    </Router>
  );
};

export default App;
