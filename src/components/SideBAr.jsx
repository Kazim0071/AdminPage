import { MdDashboard } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaNotesMedical } from "react-icons/fa";
import { PiNotebookFill } from "react-icons/pi";
import { MdPeopleAlt } from "react-icons/md";
import { HiClipboardDocument } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";
import { IoLogOut } from "react-icons/io5";
import { MdArrowBackIos } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

import { useState } from "react";

export default function Sidebar() {
  const [expand, setExpand] = useState(true);
  return (
    <div
      className={`${
        expand ? "max-w-[240px]" : "max-w-[100px]"
      } w-full flex flex-col h-screen border border-solid transition-all duration-300`}
    >
      {/* Upper Sidebar */}
      <div className="flex px-4 justify-between items-center h-20 border border-b border-solid">
        <div className="w-full max-w-[165px] h-6 overflow-hidden">
          <span
            className={`${
              expand ? "w-32 opacity-100" : "w-0 opacity-0"
            } transition-all duration-300 font-medium text-[18px] leading-6`}
          >
            My Company
          </span>
        </div>

        <div className="border border-solid flex justify-center items-center border-gray-600 rounded-md w-7 h-[27px]">
          <button
            onClick={() => setExpand((curr) => !curr)}
            className="w-[18px] h-[18px] flex justify-center"
          >
            {expand ? <MdArrowBackIos /> : <IoIosArrowForward />}
          </button>
        </div>
      </div>

      {/* Middle Sidebar */}
      <div className="flex-1 mt-4">
        <ul className="flex items-center flex-col gap-[16px]">
          <li className="flex items-center gap-[10px] px-4 h-10 w-[208px] hover:border hover:rounded-lg hover:border-[#DBD8F0] hover:bg-[#EFEEFF] hover:text-[#5D4CF7]">
            <div className="w-[20px]">
              <MdDashboard />
            </div>
            <div>
              <span
                className={`${
                  expand ? "opacity-100" : "opacity-0"
                } transition-all duration-300`}
              >
                Dashboard
              </span>
            </div>
          </li>
          <li className="flex items-center gap-[10px] px-4 h-10 w-[208px] hover:border hover:rounded-lg hover:border-[#DBD8F0] hover:bg-[#EFEEFF] hover:text-[#5D4CF7]">
            <div className="w-[20px]">
              <IoPerson />
            </div>
            <div>
              <span
                className={`${
                  expand ? "opacity-100" : "opacity-0"
                } transition-all duration-300`}
              >
                Clients
              </span>
            </div>
          </li>
          <li className="flex items-center gap-[10px] px-4 h-10 w-[208px] hover:border hover:rounded-lg hover:border-[#DBD8F0] hover:bg-[#EFEEFF] hover:text-[#5D4CF7]">
            <div className="w-[20px]">
              <FaNotesMedical />
            </div>
            <div>
              <span
                className={`${
                  expand ? "opacity-100" : "opacity-0"
                } transition-all duration-300`}
              >
                Task Management
              </span>
            </div>
          </li>
          <li className="flex items-center gap-[10px] px-4 h-10 w-[208px] hover:border hover:rounded-lg hover:border-[#DBD8F0] hover:bg-[#EFEEFF] hover:text-[#5D4CF7]">
            <div className="w-[20px]">
              <MdPeopleAlt />
            </div>
            <div>
              <span
                className={`${
                  expand ? "opacity-100" : "opacity-0"
                } transition-all duration-300`}
              >
                Staff Management
              </span>
            </div>
          </li>
          <li className="flex items-center gap-[10px] px-4 h-10 w-[208px] hover:border hover:rounded-lg hover:border-[#DBD8F0] hover:bg-[#EFEEFF] hover:text-[#5D4CF7]">
            <div className="w-[20px]">
              <PiNotebookFill />
            </div>
            <div>
              <span
                className={`${
                  expand ? "opacity-100" : "opacity-0"
                } transition-all duration-300`}
              >
                Training
              </span>
            </div>
          </li>
          <li className="flex items-center gap-[10px] px-4 h-10 w-[208px] hover:border hover:rounded-lg hover:border-[#DBD8F0] hover:bg-[#EFEEFF] hover:text-[#5D4CF7]">
            <div className="w-[20px]">
              <HiClipboardDocument />
            </div>
            <div>
              <span
                className={`${
                  expand ? "opacity-100" : "opacity-0"
                } transition-all duration-300`}
              >
                AML Resources
              </span>
            </div>
          </li>
        </ul>
      </div>

      {/* Bottom Sidebar */}
      <div className="border border-t h-[144px] flex px-4 py-6 flex-col justify-center gap-4 items-center">
        <div className="w-full max-w-[208px] h-10">
          <div className="flex items-center py-2 gap-[10px] px-6">
            <IoMdSettings className="w-5 h-5 " />
            <span
              className={`${
                expand ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300 font-normal text-base leading-6`}
            >
              Settings
            </span>
          </div>
        </div>

        <div className="w-full max-w-[208px] h-10">
          <div className="flex items-center py-2 gap-[10px] px-6">
            <IoLogOut className="w-5 h-5 " />
            <span
              className={`${
                expand ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300 font-normal text-base leading-6`}
            >
              Log Out
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
