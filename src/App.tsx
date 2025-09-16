import Home from "./pages/user/Home";
import { Route, Routes, Navigate } from "react-router-dom";
import PrivateLayout from "./templates/privateLayout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/admin/Dashboard";
import HandoverRecordDetail from "./pages/user/HandoverRecordDetail";
import CreateHandoverRecord from "./pages/user/CreateHandoverRecord";
import HandoverRecordList from "./pages/user/HandoverRecordList";
import Department from "../src/pages/user/Department";
import { PATH } from "./utils/paths";
import ProtectedRoute from "./templates/header/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Các trang công khai */}
      <Route path={PATH.LOGIN} element={<Login />} />
      <Route path={PATH.REGISTER} element={<Register />} />
      <Route
        path="/unauthorized"
        element={
          <div className="flex justify-center items-center h-screen text-center">
            <div>
              <h1 className="text-3xl font-bold text-red-600">
                Truy cập bị từ chối
              </h1>
              <p className="mt-2">Bạn không có quyền truy cập vào trang này.</p>
            </div>
          </div>
        }
      />

      {/* Bọc các trang riêng tư bằng PrivateLayout để có Header và Footer */}
      <Route element={<PrivateLayout />}>
        {/* Các trang riêng tư - cần đăng nhập */}
        <Route
          element={
            <ProtectedRoute
              allowedRoles={["admin", "representative", "employee"]}
            />
          }
        >
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/danh-sach-bien-ban" element={<HandoverRecordList />} />
          <Route path="/tao-bien-ban" element={<CreateHandoverRecord />} />
          <Route
            path={PATH.HANDOVERRECORD_DETAIL}
            element={<HandoverRecordDetail />}
          />
          <Route path={PATH.PROFILE} element={<Profile />} />
        </Route>

        {/* Các trang chỉ dành cho representative và admin */}
        <Route
          element={
            <ProtectedRoute allowedRoles={["admin", "representative"]} />
          }
        >
          <Route path="/phong-ban" element={<Department />} />
        </Route>

        {/* Các trang chỉ dành cho admin */}
        <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
          <Route path={PATH.DASHBOARD} element={<Dashboard />} />
        </Route>
      </Route>

      {/* Chuyển hướng nếu không khớp route nào */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
