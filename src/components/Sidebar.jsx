import React from "react";
import { useLocation } from "react-router-dom";
import {
  X,
  Activity,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";

const Sidebar = ({
  sidebarOpen,
  sidebarCollapsed,
  setSidebarCollapsed,
  toggleSidebar,
  handleNavClick,
  navigationItems,
}) => {
  const location = useLocation();

  return (
    <div
      className={`
        fixed inset-y-0 left-0 z-50 bg-white/95 backdrop-blur-sm shadow-xl 
        border-r border-gray-200/50 flex flex-col
        custom-scrollbar overflow-y-auto
        
        {/* --- TRANSITION CLASSES - More Specific and Optimized --- */}
        transition-[width,transform] duration-300 ease-in-out
        
        {/* --- WIDTH CLASSES (for lg screens and up) --- */}
        ${sidebarCollapsed ? "lg:w-16" : "lg:w-64"}
        
        {/* --- TRANSFORM CLASSES (for screens smaller than lg) --- */}
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        
        {/* --- STATIC CLASSES for lg screens (overriding transform) --- */}
        lg:translate-x-0 lg:static
      `}
    >
      {/* Sidebar Header */}
      <div className={`flex items-center h-16 px-4 border-b border-gray-300 bg-gradient-to-r from-blue-200 to-purple-400 flex-shrink-0 ${sidebarCollapsed ? 'justify-center' : 'justify-between'}`}>
        {!sidebarCollapsed && (
          <div className="flex items-center overflow-hidden">
            <Activity className="h-6 w-6 text-blue-600" />
            <div className="ml-2">
              <p className="text-lg font-bold whitespace-nowrap">
                <span className="text-white">Practice</span>{' '}
                <span className="text-white">Health</span>
              </p>
              <p className="text-xs text-gray-500 whitespace-nowrap">Dashboard</p>
            </div>
          </div>
        )}
        <div className="flex items-center">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden lg:flex p-2 rounded-lg text-gray-700 hover:bg-gray-300 transition-colors"
            title={sidebarCollapsed ? "Expand" : "Collapse"}
          >
            {sidebarCollapsed ? (
              <ChevronsRight className="h-5 w-5" />
            ) : (
              <ChevronsLeft className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-300"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* User Profile */}
      <div className={`p-4 border-b border-gray-200/50 flex-shrink-0 ${sidebarCollapsed ? 'py-4 px-0' : ''}`}>
        <div className={`flex items-center ${sidebarCollapsed ? 'justify-center' : ''}`}>
          <div className="w-10 h-10 bg-gradient-to-br from-blue-200 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold flex-shrink-0">
            J
          </div>
          {!sidebarCollapsed && (
            <div className="ml-3 overflow-hidden">
              <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">John Doe</p>
              <p className="text-xs text-gray-500 whitespace-nowrap">Billing Manager</p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-1 flex-1">
        {navigationItems.map((item, index) => {
          const IconComponent = item.icon;
          const isActive = item.path === location.pathname;
          return (
            <button
              key={index}
              onClick={() => handleNavClick(item)}
              title={sidebarCollapsed ? item.text : ''}
              className={`sidebar-item w-full flex items-center transition duration-200 ease-in-out rounded-md px-3 py-2 ${
                isActive
                  ? "bg-gradient-to-r from-blue-200 to-purple-400 text-black shadow-md"
                  : "hover:bg-gray-100 text-gray-700"
              } ${sidebarCollapsed ? 'justify-center' : ''}`}
            >
              <IconComponent
                className={`h-5 w-5 flex-shrink-0 ${
                  isActive ? "text-white" : "text-gray-600"
                } ${!sidebarCollapsed ? "mr-3" : ""}`}
              />
              {!sidebarCollapsed && (
                <span className="flex-1 text-left text-sm font-medium">
                  {item.text}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;