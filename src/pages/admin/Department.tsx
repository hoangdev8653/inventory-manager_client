import { useEffect } from "react";
import departmentStore from "../../store/department";
import { MdDeleteForever, MdEdit } from "react-icons/md";

function Department() {
  const { data, getAllDepartment } = departmentStore();

  useEffect(() => {
    getAllDepartment();
  }, []);

  return (
    <div className="relative shadow-md sm:rounded-lg w-full my-2">
      <div className="flex justify-end">
        <a href="/post">
          <button className="bg-blue-500 hover:bg-blue-600 rounded-2xl text-white font-semibold my-2 px-5 py-2 shadow-md transition">
            New Article
          </button>
        </a>
      </div>

      <div className="overflow-y-auto max-h-[500px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-100 bg-[#232c3b] relative">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                #
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Tên phòng ban
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Địa chỉ
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                ACTION
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
                  <td className="px-6 py-4 text-center">{index + 1}</td>
                  <td className="px-6 py-4 text-center">{item?.name}</td>
                  <td className="px-6 py-4 text-center">{item.address}</td>
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

export default Department;
