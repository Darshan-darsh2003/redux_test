import { Outlet, Link } from "react-router-dom";
import Header from "./components/header";

const Layout = () => {
  return (
    <>
      <div className="h-screen">
        <Header />
        <div className="h-[90vh] overflow-y-scroll no-scrollbar overflow-x-hidden mt-[10vh]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
