import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorage } from "../../utils/localStorage";

interface ProtectedRouteProps {
  allowedRoles: string[];
}

const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
  const user = getLocalStorage("user");

  if (!user) {
    // Nếu chưa đăng nhập, chuyển hướng về trang login
    return <Navigate to="/login" replace />;
  }

  // Nếu vai trò của user có trong danh sách được phép thì cho phép truy cập
  return allowedRoles.includes(user.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" replace />
  );
};

export default ProtectedRoute;
