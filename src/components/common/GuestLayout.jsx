import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <>
      <div className="flex-center-center md:flex-none md:grid grid-cols-2 min-h-screen place-items-center max-w-6xl mx-auto px-4 gap-20">
        <div className="max-w-sm mx-auto md:max-w-none w-full">
          <Outlet />
        </div>
        <div className="w-full hidden md:block">
          <img
            src="/images/savings.png"
            alt="Illustartion"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
};

export default GuestLayout;
