import { useNavigate, Link } from "react-router-dom";
import { getLocalStorage, clearLocalStorage } from "../../utils/localStorage";
import Notification from "./Notification";

function Avarta() {
  const user = getLocalStorage("user");
  const navigate = useNavigate();

  const handleLogout = () => {
    clearLocalStorage("user");
    navigate("/login");
  };

  return (
    <div className="relative flex items-center gap-4">
      <Notification />
      <div className="flex items-center space-x-2 cursor-pointer group relative">
        <img
          src="https://i.pravatar.cc/32"
          alt="avatar"
          className="w-12 h-12 rounded-full"
        />
        <span className="hidden md:block text-sm font-medium">
          {user?.full_name}
        </span>
        <div className="absolute left-0 mt-32 w-40 bg-white border rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-150 z-50">
          <Link
            to="/thong-tin"
            className="block px-4 py-2 text-sm hover:bg-gray-100"
          >
            Thông tin cá nhân
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
}

export default Avarta;
