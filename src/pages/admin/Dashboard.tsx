import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Menu, Search, Bell, Mail } from "lucide-react";
import { FaFileAlt, FaPlusCircle, FaSearch, FaUser } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import user_deafaute from "../../assets/images/user_deafaute.jpg";
import User from "./User";

const userMenus = [
  {
    title: "Tạo biên bản",
    to: "/tao-bien-ban",
    icon: <FaPlusCircle className="text-blue-500" />,
  },
  {
    title: "Danh sách biên bản",
    to: "/bien-ban",
    icon: <FaFileAlt className="text-green-500" />,
  },
  {
    title: "Tìm kiếm biên bản",
    to: "/tim-kiem",
    icon: <FaSearch className="text-yellow-500" />,
  },
  {
    title: "Thông tin người dùng",
    to: "/thong-tin",
    icon: <FaUser className="text-purple-500" />,
  },
  {
    title: "Người đại diện",
    to: "/nguoi-dai-dien",
    icon: <FaUser className="text-red-500" />,
  },
];

const DashboardPage: React.FC = () => {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

  // const renderContent = () => {
  //   switch (activeTab) {
  //     case "Article":
  //       return <Article />;
  //     case "User":
  //       return <User />;
  //     case "Category":
  //       return <Category />;
  //     case "Postcard":
  //       return <Postcard />;
  //     case "Help":
  //       return <Help />;
  //     default:
  //       return <Dashboard />;
  //   }
  // };

  return (
    <div className="flex h-screen text-gray-700">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "block" : "hidden"
        } md:block w-64 bg-white border-r z-10 absolute md:relative`}
      >
        <div className="px-6 py-4 flex items-center space-x-2 font-bold text-lg">
          <img src={Logo} alt="Logo" className="h-6" />
          <span>NiceAdmin</span>
        </div>
        <nav className="flex-1 overflow-y-auto py-6">
          {userMenus.map((menu) => (
            <Link
              key={menu.to}
              to={menu.to}
              className={`relative flex items-center gap-3 py-3 pl-6 pr-4 text-gray-700 hover:bg-indigo-50 transition ${
                location.pathname === menu.to
                  ? "bg-indigo-100 font-semibold"
                  : ""
              }`}
            >
              <span className="text-lg">{menu.icon}</span>
              <span className="text-base font-medium truncate">
                {menu.title}
              </span>
            </Link>
          ))}
        </nav>
        <div className="bottom-[30px] absolute mx-2 flex">
          <div>
            <img
              src={user_deafaute}
              alt="avatar"
              className="w-16 h-16 object-cover rounded-full my-2 "
            />
          </div>
          <div className="my-3">
            <a href="/profile" className="font-bold">
              Huy Hoàng
            </a>
            <p className="opacity-60 text-xs my-1">Profile Manager</p>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-14 bg-white border-b flex items-center justify-between px-4 md:px-8">
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded hover:bg-gray-100"
            >
              1 <Menu size={20} />
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

          <div className="flex items-center space-x-4">
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full px-1">
                4
              </span>
            </button>
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Mail size={18} />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full px-1">
                3
              </span>
            </button>

            {/* Dropdown */}
            <div className="relative group">
              <div className="flex items-center space-x-2 cursor-pointer">
                <img
                  src="https://i.pravatar.cc/32"
                  alt="avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="hidden md:block text-sm font-medium">
                  K. Anderson
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

        <div className="bg-gray-50 border-b px-4 md:px-8 py-3 text-sm">
          Home / <span className="text-indigo-600">Dashboard</span>
        </div>
        <div className="flex-1  overflow-y-auto">
          <div className="m-8">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
