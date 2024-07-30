const Table = () => {
  return (
    <div>
      <section className="mt-4">
        <div className="">
          <div className="inline-block w-full max-w-[1240px] py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
              <table className=" min-w-full divide-y divide-gray-200">
                <thead className="bg-[#1D174D]">
                  <tr>
                    <th className="px-6 py-3.5 text-left text-sm font-normal text-white">
                      <span>Client</span>
                    </th>
                    <th className="px-12 py-3.5 text-left text-sm font-normal text-white">
                      Due By
                    </th>
                    <th className="px-14 py-3.5 text-left text-sm font-normal text-white">
                      Assigned to
                    </th>
                    <th className="px-6 py-3.5 text-left text-sm font-normal text-white">
                      Status
                    </th>
                    <th className="px-4 py-3.5 text-left text-sm font-normal text-white">
                      Action
                    </th>
                    <th className="relative px-4 py-3.5">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr>
                    <td className="whitespace-nowrap px-1 py-4">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            HKRL Consultancy
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">15/08/17</div>
                    </td>

                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">Ralph Edward</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full text-white bg-[#FFA928] px-2 text-xs font-semibold leading-5 text-green-800">
                        Information Received
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-3xl font-bold text-gray-900">
                        ...
                      </div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium"></td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            Start Bucks
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">15/08/17</div>
                    </td>

                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">Guy Hawkins</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full bg-[#FFA928] text-white px-2 text-xs font-semibold leading-5 text-green-800">
                        Sent for Approval
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-3xl font-bold text-gray-900">
                        ...
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap px-4 py-4">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            eBay
                          </div>
                        </div>
                      </div>
                    </td>

                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">15/08/17</div>
                    </td>

                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-sm text-gray-900">Guy Hawkins</div>
                    </td>
                    <td className="whitespace-nowrap px-4 py-4">
                      <span className="inline-flex rounded-full bg-[#FFA928] text-white px-2 text-xs font-semibold leading-5 text-green-800">
                        Book keeping Completed
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-12 py-4">
                      <div className="text-3xl font-bold text-gray-900">
                        ...
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Table;
