import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import departmentStore from "../../store/department";
import userStore from "../../store/userStore";
import handoverRecordStore from "../../store/handoverRecord";

// Định nghĩa interfaces để code an toàn và dễ đọc hơn
interface Department {
  id: string;
  name: string;
  representative: User;
}

interface User {
  id: string;
  username: string;
  full_name: string;
  departmentId?: {
    // Based on User.tsx and your question
    id: string;
    name: string;
  };
}

const validationSchema = Yup.object({
  so_ky_hieu: Yup.string().required("Số ký hiệu là bắt buộc"),
  can_cu: Yup.string().required("Căn cứ là bắt buộc"),
  handover_date: Yup.date().required("Ngày bàn giao là bắt buộc"),
  department_a_id: Yup.string().required("Phòng ban bên A là bắt buộc"),
  department_b_id: Yup.string().required("Phòng ban bên B là bắt buộc"),
  user_a_id: Yup.string().required("Người giao bên A là bắt buộc"),
  user_b_id: Yup.string().required("Người nhận bên B là bắt buộc"),
});

export default function CreateHandoverRecord() {
  const navigate = useNavigate();
  const { data: departments, getAllDepartment } = departmentStore();
  const { data: users, getAllUser } = userStore();
  const { createHandoverRecord, loading } = handoverRecordStore();

  const [usersInDeptA, setUsersInDeptA] = useState<User[]>([]);
  const [usersInDeptB, setUsersInDeptB] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const allDepartments = await getAllDepartment();
      await getAllUser();
      console.log("Tất cả phòng ban:", allDepartments);
    };

    fetchData();
  }, [getAllDepartment, getAllUser]);
  console.log(users);

  const formik = useFormik({
    initialValues: {
      so_ky_hieu: "",
      can_cu: "",
      handover_date: "",
      department_b_id: "",
      user_b_id: "",
      note: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const deptB = departments?.content.find(
          (d: Department) => d.id === values.department_b_id
        );

        const payload = {
          ...values,
          representative_b_id: deptB?.representative?.id,
        };

        const result = await createHandoverRecord(payload);
        if (result.status === 201) {
          toast.success("Tạo biên bản thành công!");
          navigate(`/handover-record/${result.data.content._id}`);
        } else {
          toast.error("Tạo biên bản thất bại. Vui lòng thử lại.");
        }
      } catch (error: any) {
        toast.error(error.response?.data?.message || "Đã có lỗi xảy ra");
      }
    },
  });

  // Lọc danh sách người dùng khi phòng ban thay đổi
  useEffect(() => {
    if (formik.values.department_a_id && users?.content) {
      const filteredUsers = users.content.filter(
        (u: User) => u.departmentId?.id === formik.values.department_a_id
      );
      setUsersInDeptA(filteredUsers);
    } else {
      setUsersInDeptA([]);
    }
    formik.setFieldValue("user_a_id", ""); // Reset lại lựa chọn người dùng
  }, [formik.values.department_a_id, users]);

  useEffect(() => {
    if (formik.values.department_b_id && users?.content) {
      const filteredUsers = users.content.filter(
        (u: User) => u.departmentId?.id === formik.values.department_b_id
      );
      setUsersInDeptB(filteredUsers);
    } else {
      setUsersInDeptB([]);
    }
    formik.setFieldValue("user_b_id", "");
  }, [formik.values.department_b_id, users]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Tạo Biên bản Bàn giao
        </h1>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="so_ky_hieu"
                className="block text-sm font-medium text-gray-700"
              >
                Số ký hiệu
              </label>
              <input
                type="text"
                id="so_ky_hieu"
                {...formik.getFieldProps("so_ky_hieu")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {formik.touched.so_ky_hieu && formik.errors.so_ky_hieu && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.so_ky_hieu}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="handover_date"
                className="block text-sm font-medium text-gray-700"
              >
                Ngày bàn giao
              </label>
              <input
                type="date"
                id="handover_date"
                {...formik.getFieldProps("handover_date")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {formik.touched.handover_date && formik.errors.handover_date && (
                <p className="text-red-500 text-xs mt-1">
                  {formik.errors.handover_date}
                </p>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor="can_cu"
              className="block text-sm font-medium text-gray-700"
            >
              Căn cứ
            </label>
            <textarea
              id="can_cu"
              {...formik.getFieldProps("can_cu")}
              rows={3}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            {formik.touched.can_cu && formik.errors.can_cu && (
              <p className="text-red-500 text-xs mt-1">
                {formik.errors.can_cu}
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t">
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Bên B (Nhận)
              </h2>
              <div>
                <label
                  htmlFor="department_b_id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phòng ban
                </label>
                <select
                  id="department_b_id"
                  {...formik.getFieldProps("department_b_id")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="">Chọn phòng ban</option>
                  {departments?.content?.map((dept: Department) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
                {formik.touched.department_b_id &&
                  formik.errors.department_b_id && (
                    <p className="text-red-500 text-xs mt-1">
                      {formik.errors.department_b_id}
                    </p>
                  )}
              </div>
              <div>
                <label
                  htmlFor="user_b_id"
                  className="block text-sm font-medium text-gray-700"
                >
                  Người nhận
                </label>
                <select
                  id="user_b_id"
                  {...formik.getFieldProps("user_b_id")}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  disabled={!formik.values.department_b_id}
                >
                  <option value="">Chọn người nhận</option>
                  {usersInDeptB.map((user: User) => (
                    <option key={user.id} value={user.id}>
                      {user.full_name || user.username}
                    </option>
                  ))}
                </select>
                {formik.touched.user_b_id && formik.errors.user_b_id && (
                  <p className="text-red-500 text-xs mt-1">
                    {formik.errors.user_b_id}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="pt-4 border-t">
            <label
              htmlFor="note"
              className="block text-sm font-medium text-gray-700"
            >
              Ghi chú
            </label>
            <textarea
              id="note"
              {...formik.getFieldProps("note")}
              rows={4}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-md mr-4 hover:bg-gray-300"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-300"
            >
              {loading ? "Đang tạo..." : "Tạo biên bản"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
