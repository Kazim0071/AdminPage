import { MdDashboard } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaNotesMedical } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";
import { HiClipboardDocument } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";

const SideBAr = () => {
  return (
    <>
      <div className="w-full max-w-[240px] border border-solid flex flex-col justify-between">
        {/* My Company */}
        <div className="flex justify-between gap-4 px-4 py-[26px] h-[80px] border-b border-solid border-[#DBD8F0]">
          <div>
            <h4 className="text-[18px] leading-[24px] font-medium text-[#29292E]">
              My Company
            </h4>
          </div>
          <div>
            <button
              type="type"
              className="border border-solid border-[#DBD8F0] bg-white rounded-lg w-[28px] h-[28px] flex items-center justify-center"
            >
              <IoIosArrowBack />
            </button>
          </div>
        </div>

        {/* SidebarList */}
        <div className="h-full overflow-y-auto mt-4">
          <ul className=" flex items-center flex-col gap-[16px]">
            <li className="flex items-center gap-[10px] px-4 h-10 w-[208px] hover:border hover:rounded-lg hover:border-[#DBD8F0] hover:bg-[#EFEEFF] hover:text-[#5D4CF7]">
              <div className="w-[20px]">
                <MdDashboard />
              </div>
              <div>
                <span>Dashboard</span>
              </div>
            </li>
            <li className="flex items-center gap-[10px] px-4 h-10 w-[208px] hover:border hover:rounded-lg hover:border-[#DBD8F0] hover:bg-[#EFEEFF] hover:text-[#5D4CF7]">
              <div className="w-[20px]">
                <IoPerson />
              </div>
              <div>
                <span>Clients</span>
              </div>
            </li>
            <li className="flex items-center gap-[10px] px-4 h-10 w-[208px] hover:border hover:rounded-lg hover:border-[#DBD8F0] hover:bg-[#EFEEFF] hover:text-[#5D4CF7]">
              <div className="w-[20px]">
                <FaNotesMedical />
              </div>
              <div>
                <span>Task Management</span>
              </div>
            </li>
            <li className="flex items-center gap-[10px] px-4 h-10 w-[208px] hover:border hover:rounded-lg hover:border-[#DBD8F0] hover:bg-[#EFEEFF] hover:text-[#5D4CF7]">
              <div className="w-[20px]">
                <MdPeopleAlt />
              </div>
              <div>
                <span>Staff Management</span>
              </div>
            </li>
            <li className="flex items-center gap-[10px] px-4 h-10 w-[208px] hover:border hover:rounded-lg hover:border-[#DBD8F0] hover:bg-[#EFEEFF] hover:text-[#5D4CF7]">
              <div className="w-[20px]">
                <PiNotebookFill />
              </div>
              <div>
                <span>Training</span>
              </div>
            </li>
            <li className="flex items-center gap-[10px] px-4 h-10 w-[208px] hover:border hover:rounded-lg hover:border-[#DBD8F0] hover:bg-[#EFEEFF] hover:text-[#5D4CF7]">
              <div className="w-[20px]">
                <HiClipboardDocument />
              </div>
              <div>
                <span>AML Resources</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Sidebar BottomList */}
        <div className="px-4 py-6 border-t border-solid border-[#DBD8F0]">
          <ul>
            <li className="flex items-center gap-[10px] px-4 py-2.5 w-[208px] hover:border hover:rounded-lg hover:border-[#DBD8F0] hover:bg-[#EFEEFF] hover:text-[#5D4CF7]">
              <div className="w-[20px]">
                <IoMdSettings />
              </div>
              <div className="w-full">Settings</div>
            </li>

            <li className="flex items-center gap-[10px] px-4 py-2.5 hover:border hover:rounded-lg hover:border-[#DBD8F0] hover:bg-[#EFEEFF] hover:text-[#5D4CF7]">
              <div className="w-[20px]">
                <IoLogOut />
              </div>
              <div className="w-full">Log Out</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBAr;
