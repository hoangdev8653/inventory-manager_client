function HandoverItem() {
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
                Địa chỉ phòng ban
              </th>
              <th scope="col" className="px-6 py-3 text-center font-semibold">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {Array.isArray(data?.content) &&
                data?.content?.map((item: any, index: number) => (
                  <tr
                    key={index}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-100 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200 text-gray-700 dark:text-gray-400"
                  >
                    <td className="px-6 py-4 text-center">{item.full_name}</td>
                    <td className="px-6 py-4 text-center">{item.email}</td>
                    <td className="px-6 py-4 text-center">{item.role}</td>
                    <td className="px-6 py-4 text-center">
                      {item.department?.name || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {item.department?.address || "N/A"}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-md">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default HandoverItem;
