import React from "react";

const PopularDestinations = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
      <div className="card group overflow-hidden">
        <div className="overflow-hidden rounded-lg group h-[250px]">
          <img
            src="/images/kampala.jpg"
            alt=""
            className="group-hover:scale-125 transition-a h-full"
          />
        </div>
        <div className="p-3">
          <h1 className="text-2xl font-medium">Kampala</h1>
        </div>
      </div>
      <div className="card group overflow-hidden">
        <div className="overflow-hidden rounded-lg group h-[250px]">
          <img
            src="/images/gulu.jpg"
            alt=""
            className="group-hover:scale-125 transition-a h-full"
          />
        </div>
        <div className="p-3">
          <h1 className="text-2xl font-medium">Gulu</h1>
        </div>
      </div>
      <div className="card group overflow-hidden">
        <div className="overflow-hidden rounded-lg group h-[250px]">
          <img
            src="/images/Background1.png"
            alt=""
            className="group-hover:scale-125 transition-a h-full"
          />
        </div>
        <div className="p-3">
          <h1 className="text-2xl font-medium">Mbarara</h1>
        </div>
      </div>
      <div className="card group overflow-hidden">
        <div className="overflow-hidden rounded-lg group h-[250px]">
          <img
            src="/images/kabale.jpg"
            alt=""
            className="group-hover:scale-125 transition-a h-full"
          />
        </div>
        <div className="p-3">
          <h1 className="text-2xl font-medium">Kabale</h1>
        </div>
      </div>
    </div>
  );
};

export default PopularDestinations;
