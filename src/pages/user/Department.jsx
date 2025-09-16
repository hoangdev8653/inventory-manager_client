

// Mock user local (người đại diện đang đăng nhập)
const userLocal = {
  _id: "68bd199e03395b41b2dcd7e4",
  username: "Nguyễn Văn C",
  role: "representative",
  department: {
    _id: "68bd095e03395b41b2dcd7bd",
    name: "Phòng Kế Toán",
  },
};

// Mock danh sách nhân viên (cùng phòng ban của đại diện)
const employees = [
  {
    _id: "1",
    username: "Nguyễn Văn A",
    email: "nva@gmail.com",
    phone: "0905504097",
    role: "employee",
  },
  {
    _id: "2",
    username: "Trần Thị B",
    email: "ttb@gmail.com",
    phone: "0905123456",
    role: "employee",
  },
  {
    _id: "3",
    username: "Lê Văn C",
    email: "lvc@gmail.com",
    phone: "0905789123",
    role: "employee",
  },
];

export default function Department() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          👥 Danh sách nhân viên thuộc phòng ban:{" "}
          <span className="text-blue-600">{userLocal.department.name}</span>
        </h1>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="py-3 px-4 font-semibold text-gray-600">
                  Họ và tên
                </th>
                <th className="py-3 px-4 font-semibold text-gray-600">Email</th>
                <th className="py-3 px-4 font-semibold text-gray-600">
                  Số điện thoại
                </th>
                <th className="py-3 px-4 font-semibold text-gray-600">
                  Chức vụ
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {employees.length > 0 ? (
                employees.map((emp) => (
                  <tr key={emp._id} className="hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-800">
                      {emp.username}
                    </td>
                    <td className="py-3 px-4 text-gray-600">{emp.email}</td>
                    <td className="py-3 px-4 text-gray-600">{emp.phone}</td>
                    <td className="py-3 px-4 text-gray-600 capitalize">
                      {emp.role}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-10 text-gray-500">
                    Không có nhân viên nào trong phòng ban này.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
