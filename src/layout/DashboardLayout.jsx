import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

const DashboardLayout = ({
  children,
  sidebarOpen,
  setSidebarOpen,
  sidebarCollapsed,
  setSidebarCollapsed,
  navigationItems,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const mainContentRef = useRef(null);

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

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Sidebar
        sidebarOpen={sidebarOpen}
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        toggleSidebar={toggleSidebar}
        handleNavClick={handleNavClick}
        navigationItems={navigationItems}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          toggleSidebar={toggleSidebar}
          getCurrentPageTitle={getCurrentPageTitle}
          sidebarCollapsed={sidebarCollapsed}
        />

        <main
          ref={mainContentRef}
          className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-blue-50/50 via-indigo-50/50 to-purple-50/50 p-6"
        >
          {children}
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-opacity-50 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default DashboardLayout;
