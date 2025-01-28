import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import Social from "../components/Shared/Social";
import Snowfall from "react-snowfall";
import { ToastContainer } from "react-toastify";

const MainLayouts = () => {
  return (
    <div className="relative max-w-[1366px] mx-auto bg-[#282C33]">
    <Snowfall
      color="#ffffff" // Cyan snowflakes
      snowflakeCount={10} // Increase the number of snowflakes
      style={{
        position: 'fixed',
        width: '1366px', // Full width relative to the container
        height: '100vh',
        left: 0, // Ensure it's aligned to the container's bounds
        right: 0,
        margin: '0 auto',
      }}
    />
      <div className="sticky top-0 left-0 z-50">
        <Social />
      </div>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default MainLayouts;
