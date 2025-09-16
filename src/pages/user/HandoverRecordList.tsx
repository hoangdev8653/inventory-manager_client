import { useEffect } from "react";
import { Link } from "react-router-dom";
import handoverRecordStore from "../../store/handoverRecord";
import { getLocalStorage } from "../../utils/localStorage";
import formatDate from "../../utils/formatDate";

// Định nghĩa interface cho một biên bản
interface HandoverRecord {
  _id: string;
  so_ky_hieu: string;
  handover_date: string;
  department_a: { name: string };
  department_b: { name: string };
  status: string;
  roleInRecord: string;
  representative_a_signed: boolean;
  representative_b_signed: boolean;
  user_a_signed: boolean;
  user_b_signed: boolean;
}

export default function HandoverRecordList() {
  const { data: recordsData, getRecordByRole, loading } = handoverRecordStore();
  const userLocal = getLocalStorage("user");

  useEffect(() => {
    getRecordByRole();
  }, [getRecordByRole]);

  const getSignStatus = (record: HandoverRecord) => {
    switch (record.roleInRecord) {
      case "representative_a":
        return record.representative_a_signed;
      case "representative_b":
        return record.representative_b_signed;
      case "user_a":
        return record.user_a_signed;
      case "user_b":
        return record.user_b_signed;
      default:
        return null;
    }
  };

  // Hàm ký (mock demo, chỉ alert ra, bạn có thể thay API sau này)
  const handleSign = (record: HandoverRecord) => {
    alert(`Bạn đã ký biên bản: ${record.so_ky_hieu}`);
    // TODO: gọi API cập nhật trạng thái ký ở đây
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Danh sách Biên bản Bàn giao
          </h1>
          {["admin", "representative"].includes(userLocal?.role) && (
            <Link
              to="/handover-records/create"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
            >
              ➕ Tạo biên bản mới
            </Link>
          )}
        </div>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-100">
              <tr className="text-left">
                <th className="py-3 px-4 font-semibold text-gray-600">
                  Số ký hiệu
                </th>
                <th className="py-3 px-4 font-semibold text-gray-600">
                  Ngày bàn giao
                </th>
                <th className="py-3 px-4 font-semibold text-gray-600">
                  Bên giao
                </th>
                <th className="py-3 px-4 font-semibold text-gray-600">
                  Bên nhận
                </th>
                <th className="py-3 px-4 font-semibold text-gray-600 text-center">
                  Trạng thái chung
                </th>
                <th className="py-3 px-4 font-semibold text-gray-600 text-center">
                  Trạng thái ký của bạn
                </th>
                <th className="py-3 px-4 font-semibold text-gray-600 text-center">
                  Hành động
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan={7} className="text-center py-10 text-gray-500">
                    Đang tải dữ liệu...
                  </td>
                </tr>
              ) : recordsData?.content?.length > 0 ? (
                recordsData.content.map((record: HandoverRecord) => {
                  const hasSigned = getSignStatus(record);
                  return (
                    <tr key={record._id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 whitespace-nowrap font-medium text-gray-800">
                        {record.so_ky_hieu}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-gray-600">
                        {formatDate(record.handover_date)}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-gray-600">
                        {record.department_a?.name}
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap text-gray-600">
                        {record.department_b?.name}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span
                          className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            record.status === "Đã hoàn thành"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {record.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        {hasSigned === null ? (
                          <span className="text-gray-400">-</span>
                        ) : hasSigned ? (
                          <span className="text-green-600 font-semibold">
                            Đã ký
                          </span>
                        ) : (
                          <button
                            onClick={() => handleSign(record)}
                            className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-lg shadow"
                          >
                            Ký biên bản
                          </button>
                        )}
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Link
                          to={`/handover-record/${record._id}`}
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          Xem chi tiết
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={7} className="text-center py-10 text-gray-500">
                    Không có biên bản nào.
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
