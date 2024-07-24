import { useState } from "react";
import NavBar from "./NavBar";
import { FaSearch } from "react-icons/fa";
import Table from "./Table";

const options = [
  { label: "Due within 9 months", value: 1 },
  { label: "Due within 10 months", value: 2 },
  { label: "Due within 11 months", value: 3 },
];

const Dashboard = () => {
  const [value, setValue] = useState("");

  function handleSelect(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <div className="flex-1">
        <NavBar />

        <div className="border border-solid rounded-md px-4 m-4">
          <div className="px-4 py-3">
            <a
              href="#"
              className="font-medium leading-6 underline-animation hover:text-[#5D4CF7]"
            >
              Account
            </a>
            <a
              href="#"
              className="ms-4 font-medium leading-6 underline-animation hover:text-[#5D4CF7]"
            >
              VAT Returns
            </a>
          </div>
        </div>
        {/* Second header  */}
        <div className="border mx-4 h-[570px] pt-4 m-2 flex flex-col border-solid rounded-md border-[#DBD8F0]">
          <div className="flex px-6 items-center gap-3">
            <div className="w-[1056px] h-[52px]">
              <div className="flex flex-col">
                <h4 className="font-medium leading-6 text-base">Accounts</h4>
                <span className="font-normal text-base leading-[19.71px] text-[#6A6A72] mt-2">
                  Manage and review accounts
                </span>
              </div>
            </div>
            <div className="w-[124px] h-12 border border-solid border-[#DBD8F0] rounded-md bg-[#FBFAFF] px-[20px] py-3">
              <button>Expot CSV</button>
            </div>
          </div>

          <div className="mt-[32px]">
            <div className="px-6 flex items-center">
              <h2 className="font-normal text-base leading-6">Sortedby:</h2>
              <select
                className="form-select border border-[#DBD8F0] rounded-md mt-2 mx-4 px-3 py-2"
                onChange={handleSelect}
              >
                {options.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                    className="font-normal text-sm leading-6"
                  >
                    {option.label}
                  </option>
                ))}
              </select>

              <div className="flex justify-end w-full">
                <div className="relative flex border border-solid w-[218px] text-gray-400 focus-within:text-gray-600">
                  <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                  <input
                    type="text"
                    className="border h-8 w-full rounded-lg pl-10 pr-3"
                    placeholder="Search Tasks"
                  />
                </div>
              </div>
            </div>
          </div>

          <Table />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
