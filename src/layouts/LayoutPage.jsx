import { Outlet } from "react-router";
import Navbar from "../components/Navbar.jsx";

function LayoutPage() {
  return (
    <>
      <div className="wrapper">
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default LayoutPage;