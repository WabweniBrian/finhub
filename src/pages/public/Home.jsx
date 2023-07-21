import React from "react";
import HeroSlider from "../../components/home/home-page/HeroSlider";
import Offers from "../../components/home/home-page/Offers";
import TopRoutes from "../../components/home/home-page/TopRoutes";
import PopularDestinations from "../../components/home/home-page/PopularDestinations";
import OnlineBookingBenefits from "../../components/home/home-page/OnlineBookingBenefits";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <section className="pt-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold">
          Featured Promotions and Offers
        </h1>
        <div className="mt-4">
          <Offers />
        </div>
      </section>
      <section
        className="mt-6 py-20 !bg-no-repeat !bg-cover text-center text-white"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/Background1.png')",
        }}
      >
        <h1 className="text-3xl font-semibold">Top Bus Routes</h1>
        <div className="mt-4">
          <TopRoutes />
        </div>
      </section>
      <section className="pt-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold">Popular Destinations</h1>
        <div className="mt-4">
          <PopularDestinations />
        </div>
      </section>
      <section className="pt-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold">Why Book with STL</h1>
        <div className="mt-4">
          <OnlineBookingBenefits />
        </div>
      </section>
    </div>
  );
};

export default Home;
