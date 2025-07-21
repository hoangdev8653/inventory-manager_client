import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, Bell } from "lucide-react";
import { FaFileAlt, FaPlusCircle, FaUser } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import User from "./User";
import Representative from "./Representative";
import Department from "./Department";
import HandoverItem from "./HandoverItem";
import HandoverRecord from "./HandoverRecord";
import { getLocalStorage } from "../../utils/localStorage";

const Dashboard: React.FC = () => {
  const tabs = [
    {
      key: "HandoverRecord",
      title: "Danh sách biên bản",
      icon: <FaFileAlt className="text-green-500" />,
    },
    {
      key: "User",
      title: "Thông tin người dùng",
      icon: <FaUser className="text-purple-500" />,
    },
    {
      key: "Representative",
      title: "Người đại diện",
      icon: <FaUser className="text-red-500" />,
    },
    {
      key: "HandoverItem",
      title: "Thiết bị trong biên bản",
      icon: <FaPlusCircle className="text-blue-500" />,
    },
    {
      key: "Department",
      title: "Phòng ban",
      icon: <FaFileAlt className="text-orange-500" />,
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState({
    key: "User",
    title: "Thông tin người dùng",
  });
  const user = getLocalStorage("user");

  const renderContent = () => {
    switch (activeTab.key) {
      case "Department":
        return <Department />;
      case "User":
        return <User />;
      case "HandoverItem":
        return <HandoverItem />;
      case "HandoverRecord":
        return <HandoverRecord />;
      case "Representative":
        return <Representative />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen text-gray-700">
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-64 bg-white border-r z-10 absolute md:relative`}
      >
        <div className="px-6 py-4 flex items-center space-x-2 font-bold text-lg">
          <img src={Logo} alt="Logo" className="h-6" />
          <span>Inventory Manager</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-6">
          {tabs.map((tab: any, index) => (
            <div
              key={index}
              onClick={() => setActiveTab({ key: tab.key, title: tab.title })}
              className={`relative flex items-center gap-3 py-3 pl-6 pr-4 text-gray-700 hover:bg-indigo-50 transition cursor-pointer
    ${activeTab.key === tab.key ? "bg-indigo-100 font-semibold" : ""}`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="text-base font-medium truncate">
                {tab.title}
              </span>
            </div>
          ))}
        </nav>
        <div className="bottom-[30px] absolute mx-2 flex gap-2">
          <div>
            <img
              src="https://i.pravatar.cc/32"
              alt="avatar"
              className="w-12 h-12 object-cover rounded-full my-2 "
            />
          </div>
          <div className="my-3">
            <a href="/profile" className="font-bold">
              {user?.full_name}
            </a>
            <p className="opacity-60 text-xs my-1">Profile Manager</p>
          </div>
        </div>
      </aside>
      <div className="flex-1 flex flex-col">
        <header className="h-14 bg-white border-b flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded hover:bg-gray-100"
            >
              <Menu size={20} />
            </button>
            <h1 className="font-semibold text-lg hidden md:block">Dashboard</h1>
          </div>

          <div className="relative flex items-center space-x-2 w-full max-w-xs">
            <Search size={16} className="absolute ml-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-9 pr-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center space-x-4 mx-8">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell size={24} />
              <span className="absolute top-1 right-1 bg-blue-600 text-white text-xs rounded-full px-1">
                4
              </span>
            </button>

            <div className="relative group">
              <div className="flex items-center space-x-2 cursor-pointer">
                <img
                  src="https://i.pravatar.cc/32"
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="hidden md:block text-sm font-medium">
                  {user?.full_name}
                </span>
              </div>
              <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-150 z-50">
                <Link
                  to="/thong-tin"
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Thông tin cá nhân
                </Link>
                <button
                  onClick={() => alert("Đăng xuất")}
                  className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                >
                  Đăng xuất
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="bg-gray-50 border-b px-4 md:px-8 py-3 text-sm font-bold">
          Dashboard / <span>{activeTab.title}</span>
        </div>
        <div className="flex-1 overflow-y-auto">
          <div className="mx-8">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
