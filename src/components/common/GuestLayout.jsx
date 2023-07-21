import { Outlet } from "react-router-dom";

const GuestLayout = () => {
  return (
    <div className="relative">
      <div className="absolute w-2/3 md:w-1/2 h-full -z-10 -skew-x-12 -left-20">
        <div className="skew-x-0 w-full h-full">
          <img src="/images/Background1.png" alt="" className="w-full h-full" />
        </div>
      </div>
      <div className="min-h-screen flex-center-center pt-20 pb-10 flex-col">
        <div className="max-w-[450px] w-[95%] mx-auto">
          <div className="mt-4 card !bg-white/80 backdrop-blur-xl">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestLayout;
