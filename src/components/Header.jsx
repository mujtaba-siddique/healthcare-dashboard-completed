import React from "react";
import { Menu, Bell, ChevronDown } from "lucide-react";

const Header = ({ toggleSidebar, getCurrentPageTitle }) => {
  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm border-b border-gray-200/50">
      <div className="flex items-center justify-between h-16 px-6">
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="ml-4">
            <h1 className="text-xl font-semibold text-gray-900">
              {getCurrentPageTitle()}
            </h1>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <div className="relative">
            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* User Menu */}
          <div className="relative">
            <button className="flex items-center space-x-2 p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
                J
              </div>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
