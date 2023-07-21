import React from "react";
import { Tabs as TabWrapper, Tab, TabList, TabPanel } from "react-tabs";
import Profile from "../../components/admin/profile/Profile";
import Password from "../../components/admin/profile/Password";
import Breadcrumb from "../../components/common/BreadCrumb";

const ProfileSettings = () => {
  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Profile</h1>
        <Breadcrumb />
      </div>
      <div className="mt-5 card">
        {/* Settings Tabs */}
        <TabWrapper>
          <TabList>
            <Tab>Profile</Tab>
            <Tab>Password</Tab>
          </TabList>
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>
            <Password />
          </TabPanel>
        </TabWrapper>
      </div>
    </div>
  );
};

export default ProfileSettings;
