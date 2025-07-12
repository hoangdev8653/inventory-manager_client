import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type RecordItem = {
  id: string;
  soKyHieu: string;
  date: string;
  benA: string;
  benB: string;
  status: "Đã ký" | "Chưa ký";
};

type Summary = {
  totalRecords: number;
  pendingSignatures: number;
  totalUsers: number;
  totalDepartments: number;
  recentRecords: RecordItem[];
};

export default function Home() {
  const [summary, setSummary] = useState<Summary>({
    totalRecords: 0,
    pendingSignatures: 0,
    totalUsers: 0,
    totalDepartments: 0,
    recentRecords: [],
  });

  useEffect(() => {
    setSummary({
      totalRecords: 48,
      pendingSignatures: 7,
      totalUsers: 15,
      totalDepartments: 5,
      recentRecords: [
        {
          id: "1",
          soKyHieu: "BBBG-HCM-20250708",
          date: "2025-07-08",
          benA: "Phòng Kế toán",
          benB: "Phòng CNTT",
          status: "Chưa ký",
        },
        {
          id: "2",
          soKyHieu: "BBBG-DN-20250707",
          date: "2025-07-07",
          benA: "Kho tổng",
          benB: "Phòng Vật tư",
          status: "Đã ký",
        },
      ],
    });
  }, []);

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <StatCard title="Tổng biên bản" value={summary.totalRecords} />
        <StatCard
          title="Chờ ký"
          value={summary.pendingSignatures}
          color="yellow"
        />
        <StatCard title="Người dùng" value={summary.totalUsers} color="green" />
        <StatCard
          title="Phòng ban"
          value={summary.totalDepartments}
          color="blue"
        />
      </div>
      <div className="flex flex-wrap gap-4 mb-6">
        <Link
          to="/handover-records/create"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
        >
          ➕ Tạo biên bản
        </Link>
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
        <h2 className="text-xl font-semibold mb-2">Biên bản gần đây</h2>
        <div className="bg-white rounded-xl shadow p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left border-b">
                <th className="py-2">Số ký hiệu</th>
                <th>Ngày</th>
                <th>Bên A</th>
                <th>Bên B</th>
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {summary.recentRecords.length > 0 ? (
                summary.recentRecords.map((record) => (
                  <tr key={record.id} className="border-b hover:bg-gray-100">
                    <td className="py-2">{record.soKyHieu}</td>
                    <td>{record.date}</td>
                    <td>{record.benA}</td>
                    <td>{record.benB}</td>
                    <td>
                      <span
                        className={`text-sm font-semibold ${
                          record.status === "Đã ký"
                            ? "text-green-600"
                            : "text-yellow-600"
                        }`}
                      >
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-gray-500">
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
  const bgColor = `bg-${color}-100`;
  const textColor = `text-${color}-800`;

  return (
    <div className={`${bgColor} ${textColor} p-4 rounded-xl shadow`}>
      <div className="text-sm">{title}</div>
      <div className="text-xl font-bold">{value}</div>
    </div>
  );
}
