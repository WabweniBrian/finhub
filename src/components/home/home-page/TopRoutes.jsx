import React from "react";

const TopRoutes = () => {
  const routes = [
    {
      id: 1,
      name: "Kampala to Soroti",
    },
    {
      id: 2,
      name: "Soroti to Kampala",
    },
    {
      id: 3,
      name: "Kampala to Gulu",
    },
    {
      id: 4,
      name: "Gulu to kampala",
    },
    {
      id: 5,
      name: "Kampala to Kabale",
    },
    {
      id: 6,
      name: "Kabala to Kampala",
    },
    {
      id: 7,
      name: "Kampala to Mbarara",
    },
    {
      id: 8,
      name: "Mbarara to Kampala",
    },
  ];
  return (
    <div>
      <div className="max-w-6xl mx-auto !w-[85%]">
        <div className="mx-auto my-6 flex-center-center">
          <div className="relative h-auto before:absolute before:h-full before:w-[2px] before:bg-red-500 before:left-1/2 before:-translate-x-1/2">
            <ul>
              {routes.map(({ id, name }) => (
                <li
                  key={id}
                  className="flex-align-center max-w-[200px] w-full my-2 gap-2 shadow-sm border p-2 rounded-lg route"
                >
                  <span>{name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRoutes;
