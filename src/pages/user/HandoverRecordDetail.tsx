import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import handoverItemStore from "../../store/handoverItem";
import formatDate from "../../utils/formatDate";

function HandoverRecordDetail() {
  const { slug } = useParams();
  const recordItem = handoverItemStore();
  const [record, setRecord] = useState<any>(null);

  console.log("slug", slug);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await recordItem.getByHandoverRecordId(slug);
        setRecord(response?.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Chi tiết biên bản bàn giao</h2>

      <div className="mb-6 border p-4 rounded shadow">
        <p>
          <strong>Số ký hiệu:</strong>{" "}
          {record?.content[0]?.handover_record?.so_ky_hieu}
        </p>
        <p>
          <strong>Căn cứ:</strong> {record?.content[0]?.handover_record?.cancu}
        </p>
        <p>
          <strong>Ngày bàn giao:</strong>{" "}
          {formatDate(record?.content[0]?.handover_record?.handover_date) ||
            "Chưa có ngày bàn giao"}
        </p>
        <p>
          <strong>Ghi chú:</strong> {record?.content[0]?.handover_record?.note}
        </p>
      </div>

      <h2 className="text-xl font-semibold mb-2">Danh sách sản phẩm:</h2>
      <table className="table-auto w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">STT</th>
            <th className="border px-4 py-2">Số Serial</th>
            <th className="border px-4 py-2">Tên sản phẩm</th>
            <th className="border px-4 py-2">Số lượng</th>
            <th className="border px-4 py-2">Ghi chú</th>
            <th className="border px-4 py-2">Xuất file PDF</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 text-center">
          {record?.content?.map((product: any, index: number) => (
            <tr key={index}>
              <td className="border px-4 py-2">{product?.stt}</td>
              <td className="border px-4 py-2">{product?.so_serial}</td>
              <td className="border px-4 py-2">{product?.ten_thiet_bi}</td>
              <td className="border px-4 py-2">{product?.so_luong}</td>
              <td className="border px-4 py-2">{product?.ghi_chu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default HandoverRecordDetail;
