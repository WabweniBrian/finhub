import React from "react";
const AnalyticsCards = ({ cardsData }) => {
  return (
    <div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {cardsData.map(
          ({ id, value, title, icon, classes, isMoney, border }) => (
            <div key={id} className={`card flex-center-between ${border}`}>
              <div className={`icon-box ${classes}`}>{icon}</div>

              <div>
                <h1 className="font-semibold text-2xl mt-2 capitalize">
                  {isMoney ? "Ugx" : ""}
                  {value}
                </h1>
                <p className="text-sm uppercase text-muted mt-2">{title}</p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default AnalyticsCards;
