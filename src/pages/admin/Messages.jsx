import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FiVideo, FiPhone, FiMoreVertical } from "react-icons/fi";
import AllMessages from "../../components/admin/messages/AllMessages";
import MessageChats from "../../components/admin/messages/MessageChats";
import MessageInput from "../../components/admin/messages/MessageInput";
import Breadcrumb from "../../components/common/Breadcrumb";

const Messages = () => {
  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Messages</h1>
        <Breadcrumb />
      </div>
      <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-3">
        <div className="md:col-span-1">
          <div className="relative">
            <BiSearchAlt className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input type="text" placeholder="Search.." className="pl-8" />
          </div>
          <div className="h-[70vh] overflow-auto mt-4">
            <AllMessages />
          </div>
        </div>
        <div className="md:col-span-2 border rounded-lg">
          <div className="p-4 flex-center-between border-b">
            <div className="flex-align-center gap-x-2">
              <div className="avatar">
                <img src="/images/avatar.png" alt="" className="rounded-full" />
              </div>
              <div>
                <h1 className="font-semibold">Wabz Braize</h1>
                <p className="text-sm">Active Now</p>
              </div>
            </div>
            <div className="flex-align-center gap-x-2">
              <div className="icon-box">
                <FiVideo />
              </div>
              <div className="icon-box">
                <FiPhone />
              </div>
              <div className="icon-box">
                <FiMoreVertical />
              </div>
            </div>
          </div>
          <div className="p-4">
            <MessageChats />
            <MessageInput />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
