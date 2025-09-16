import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DepartmentStore from "../../store/department";
import handoverRecordStore from "../../store/handoverRecord";
import userStore from "../../store/userStore";
import { getLocalStorage } from "../../utils/localStorage";
import formatDate from "../../utils/formatDate";

export default function Home() {
  const [dataDepartment, setDataDepartment] = useState<any>(null);
  const [dataHandoverRecord, setDataHandoverRecord] = useState<any>(null);
  const [userData, setUserData] = useState<any>(null);
  const department = DepartmentStore();
  const handoverRecord = handoverRecordStore();
  const user = userStore();
  const userLocal = getLocalStorage("user");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Chỉ admin mới lấy dữ liệu tổng quan về người dùng và phòng ban
        if (userLocal?.role === "admin") {
          const dataDepartment = await department.getAllDepartment();
          const dataUser = await user.getAllUser();
          setDataDepartment(dataDepartment);
          setUserData(dataUser);
        }

        const yourHandoverRecords = await handoverRecord.getRecordByRole();
        setDataHandoverRecord(yourHandoverRecords);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Kiểm tra dữ liệu trước khi filter
  const unsignedRecords =
    dataHandoverRecord?.data?.content?.filter((record: any) => {
      if (record.roleInRecord === "representative_a")
        return !record.representative_a_signed;
      if (record.roleInRecord === "representative_b")
        return !record.representative_b_signed;
      if (record.roleInRecord === "user_a") return !record.user_a_signed;
      if (record.roleInRecord === "user_b") return !record.user_b_signed;
      return false;
    }) || [];

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Tổng biên bản"
          value={dataHandoverRecord?.data?.content?.length || 0}
        />
        <StatCard
          title="Chờ ký"
          value={unsignedRecords.length}
          color="yellow"
        />
        {/* Chỉ admin mới thấy thống kê người dùng và phòng ban */}
        {userLocal?.role === "admin" && (
          <>
            <StatCard
              title="Người dùng"
              value={userData?.data?.content?.length || 0}
              color="green"
            />
            <StatCard
              title="Phòng ban"
              value={dataDepartment?.data?.content?.length || 0}
              color="blue"
            />
          </>
        )}
      </div>
      <div className="flex flex-wrap gap-4 mb-6">
        {["admin", "representative"].includes(userLocal?.role) && (
          <Link
            to="/handover-records/create"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
          >
            ➕ Tạo biên bản
          </Link>
        )}

        <Link
          to="/handover-records"
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"
        >
          📄 Danh sách biên bản
        </Link>
        <Link
          to="/search"
          className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg shadow"
        >
          🔍 Tìm kiếm
        </Link>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Tất cả biên bản</h2>
        <div className="bg-white rounded-xl shadow p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2 text-center">Số ký hiệu</th>
                <th className="text-center">Căn cứ</th>
                <th className="text-center">Ghi chú</th>
                <th className="text-center">Ngày tạo biên bản</th>
                <th className="text-center">Phòng ban bên A</th>
                <th className="text-center">Phòng ban bên B</th>
                <th className="text-center">Trạng thái ký</th>
                <th className="text-center">Người giao bên A</th>
                <th className="text-center">Người giao bên B</th>
                <th className="text-center">Đại diện bên A</th>
                <th className="text-center">Đại diện bên B</th>
                <th className="text-center">Hoạt động</th>
              </tr>
            </thead>
            <tbody>
              {dataHandoverRecord?.data?.content?.length > 0 ? (
                dataHandoverRecord.data.content.map(
                  (record: any, index: number) => {
                    return (
                      <tr key={index} className="border-b hover:bg-gray-100">
                        <td className="py-2 px-2 text-center whitespace-normal break-words w-40">
                          {record.so_ky_hieu}
                        </td>
                        <td className="py-2 px-2 text-center whitespace-normal break-words w-56">
                          {record.can_cu}
                        </td>
                        <td className="py-2 px-2 text-center whitespace-normal break-words w-56">
                          {record.note}
                        </td>
                        <td className="py-2 px-2 text-center whitespace-normal break-words w-28">
                          {formatDate(record.handover_date)}
                        </td>
                        <td className="py-2 px-2 text-center whitespace-normal break-words w-32">
                          {record.department_a?.name}
                        </td>
                        <td className="py-2 px-2 text-center whitespace-normal break-words w-32">
                          {record.department_b?.name}
                        </td>
                        <td className="py-2 px-2 text-center whitespace-normal break-words w-40">
                          {record.status}
                        </td>
                        <td className="py-2 px-2 text-center whitespace-normal break-words w-40">
                          {record.user_a?.username}
                        </td>
                        <td className="py-2 px-2 text-center whitespace-normal break-words w-40">
                          {record.user_b?.username}
                        </td>
                        <td className="py-2 px-2 text-center whitespace-normal break-words w-40">
                          {record.representative_a?.username}
                        </td>
                        <td className="py-2 px-2 text-center whitespace-normal break-words w-40">
                          {record.representative_b?.username}
                        </td>
                        <td className="text-center">
                          <Link to={`/handover-record/${record._id}`}>
                            <button className="text-blue-600 hover:underline flex items-center gap-1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                              Xem
                            </button>
                          </Link>
                        </td>
                      </tr>
                    );
                  }
                )
              ) : (
                <tr>
                  <td colSpan={12} className="text-center py-4 text-gray-500">
                    Không có biên bản gần đây.
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

type StatCardProps = {
  title: string;
  value: number;
  color?: "indigo" | "green" | "yellow" | "blue";
};

function StatCard({ title, value, color = "indigo" }: StatCardProps) {
  // Ánh xạ màu sang class của Tailwind để trình biên dịch JIT có thể nhận diện
  const colorClasses = {
    indigo: "bg-indigo-100 text-indigo-800",
    green: "bg-green-100 text-green-800",
    yellow: "bg-yellow-100 text-yellow-800",
    blue: "bg-blue-100 text-blue-800",
  };
  const classes = colorClasses[color] || colorClasses.indigo;

  return (
    <div className={`${classes} p-4 rounded-xl shadow`}>
      <div className="text-sm">{title}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}
