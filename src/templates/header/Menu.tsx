import { NavLink } from "react-router-dom";
import { getLocalStorage } from "../../utils/localStorage";

// Định nghĩa các mục menu cho từng vai trò
const menuConfig = {
  admin: [
    { label: "Dashboard", to: "/admin" },
    { label: "Trang chủ", to: "/home" },
  ],
  representative: [
    { label: "Trang chủ", to: "/home" },
    { label: "Nhân viên phòng ban", to: "/phong-ban" },
    { label: "Danh sách biên bản", to: "/danh-sach-bien-ban" },
  ],
  employee: [
    { label: "Trang chủ", to: "/home" },
    { label: "Biên bản của tôi", to: "/danh-sach-bien-ban" },
    { label: "Tạo biên bản", to: "/tao-bien-ban" },
  ],
};

function Menu() {
  const user = getLocalStorage("user");
  const userRole = user?.role || "employee"; // Mặc định là employee nếu không có vai trò

  // Lấy danh sách menu dựa trên vai trò của người dùng
  const menuItems =
    menuConfig[userRole as keyof typeof menuConfig] || menuConfig.employee;

  return (
    <nav className="flex gap-6 items-center text-base font-medium">
      {menuItems.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          className={({ isActive }) =>
            `hover:text-blue-500 transition-colors duration-300 ${
              isActive
                ? "text-blue-600 font-semibold underline"
                : "text-gray-700"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
