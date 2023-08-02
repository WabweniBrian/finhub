import React, { useState } from "react";
import { Tabs as TabWrapper, Tab, TabList, TabPanel } from "react-tabs";
import Breadcrumb from "../../components/common/Breadcrumb";
import FaqsList from "../../components/admin/faqs-inquiries/FaqsList";
import InquiriesList from "../../components/admin/faqs-inquiries/InquiriesList";
import AddFaqsFormModal from "../../components/admin/faqs-inquiries/AddFaqsFormModal";

const FaqsInquiries = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <div className="flex-center-center sm:flex-center-between flex-col sm:flex-row gap-y-3 sm:gap-y-0">
        <h1 className="text-2xl font-semibold">Faqs & Inquiries</h1>
        <Breadcrumb />
      </div>
      <div className="mt-5 card">
        {/* Settings Tabs */}
        <TabWrapper>
          <TabList>
            <Tab>Faqs</Tab>
            <Tab>Inquiries</Tab>
          </TabList>
          <TabPanel>
            <FaqsList handleOpenModal={handleOpenModal} />
          </TabPanel>
          <TabPanel>
            <InquiriesList />
          </TabPanel>
        </TabWrapper>
      </div>
      {/* AddFaqsForm Modal */}
      <AddFaqsFormModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </div>
  );
};

export default FaqsInquiries;
