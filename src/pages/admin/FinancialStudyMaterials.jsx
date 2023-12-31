import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import StudyMaterialList from "../../components/admin/study-materials/StudyMaterialList";

const FinancialStudyMaterials = () => {
  return (
    <div>
      <div className="flex-center-center sm:flex-center-between flex-col sm:flex-row gap-y-3 sm:gap-y-0">
        <h1 className="text-2xl font-semibold">Financial Study Materials</h1>
        <Breadcrumb />
      </div>
      <div className="mt-4 card">
        <StudyMaterialList />
      </div>
    </div>
  );
};

export default FinancialStudyMaterials;
