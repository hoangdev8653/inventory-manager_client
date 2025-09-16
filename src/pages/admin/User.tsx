import userStore from "../../store/userStore";
import { useEffect } from "react";
import { MdEdit, MdDeleteForever } from "react-icons/md";

function User() {
  const { data, getAllUser } = userStore();

  useEffect(() => {
    getAllUser();
  }, []);

  console.log(data);

  return (
    <div className="w-full">
      <div className="flex justify-end"></div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full  overflow-y-auto max-h-[500px]">
        <table className="w-full text-sm text-left rtl:text-right text-gray-100 bg-[#232c3b]">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Full Name
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Email
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Role
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                Phòng Ban
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
                  <td className="px-6 py-4 text-center">{item?.username}</td>
                  <td className="px-6 py-4 text-center">{item?.email}</td>
                  <td className="px-6 py-4 text-center">{item?.role}</td>
                  <td className="px-6 py-4 text-center">
                    {item?.departmentId?.name || "Chưa có phòng ban"}
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

export default User;
