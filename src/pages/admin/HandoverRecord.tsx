import { useEffect } from "react";
import handoverRecordStore from "../../store/handoverRecord";
import formatDate from "../../utils/formatDate";
import { MdEdit, MdDeleteForever } from "react-icons/md";

function HandoverRecord() {
  const { data, getAllHandoverRecord } = handoverRecordStore();

  useEffect(() => {
    getAllHandoverRecord();
  }, []);

  console.log(data);

  return (
    <div className="w-full">
      <div className="flex justify-end">
        <a href="/post">
          <button className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-white font-semibold my-2 px-5 py-2 shadow-md transition">
            New Article
          </button>
        </a>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full  overflow-y-auto max-h-[500px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-100 bg-[#232c3b]">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Số ký hiệu
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Ghi chú
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Phòng ban A
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Phòng ban B
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Người kí bên A
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Người kí bên B
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Ngày Tạo
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Trạng thái
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data?.content) &&
              data?.content?.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 text-gray-700 dark:text-gray-400"
                >
                  <td className="px-6 py-4 text-center">{item?.so_ky_hieu}</td>
                  <td className="px-6 py-4 text-center">{item?.note}</td>
                  <td className="px-6 py-4 text-center">{item.ben_a?.name}</td>
                  <td className="px-6 py-4 text-center">{item.ben_b?.name}</td>
                  <td className="px-6 py-4 text-center">
                    {item?.signed_a_by?.full_name}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {item?.signed_b_by?.full_name}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {formatDate(item?.created_at)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="flex gap-2 justify-center">
                      <MdEdit className="text-xl cursor-pointer hover:opacity-60" />
                      <MdDeleteForever className="text-xl cursor-pointer hover:opacity-70" />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HandoverRecord;
