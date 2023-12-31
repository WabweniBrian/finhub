import React from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import AddLinksForm from "../../components/admin/social-links/AddLinksForm";
import Links from "../../components/admin/social-links/Links";

const SocialLinks = () => {
  return (
    <div>
      <div className="flex-center-center sm:flex-center-between flex-col sm:flex-row gap-y-3 sm:gap-y-0">
        <h1 className="text-2xl font-semibold">Social Links</h1>
        <Breadcrumb />
      </div>
      <div className="mt-4 card">
        <h1 className="text-2xl">
          These will be used to reach you by your customers
        </h1>
        <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
          <AddLinksForm />
          <Links />
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
