import React from "react";

const Banner = () => {
  return (
    <section
      className="mt-6 py-20 !bg-no-repeat !bg-cover !bg-center text-center text-white"
      style={{
        background:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/images/Background1.png')",
      }}
    >
      <h1 className="text-4xl md:text-6xl font-semibold">/Services</h1>
    </section>
  );
};

export default Banner;
