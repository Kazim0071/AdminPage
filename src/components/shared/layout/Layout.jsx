import Navbar from "../NavBar";
import Sidebar from "../SideBAr";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-[100vh]">
      <Sidebar className="flex-shrink-0" />
      <div className="flex flex-col flex-1">
        <Navbar className="flex-shrink-0" />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
