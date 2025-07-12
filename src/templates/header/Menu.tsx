import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Tạo biên bản", to: "/tao-bien-ban" },
  { label: "Danh sách biên bản", to: "/bien-ban" },
  { label: "Tìm kiếm", to: "/tim-kiem" },
  { label: "Phòng ban", to: "/phong-ban" },
  { label: "Người đại diện", to: "/nguoi-dai-dien" },
];

function Menu() {
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
