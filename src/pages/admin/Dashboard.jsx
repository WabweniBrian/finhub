import React, { useState } from "react";
import Input from "../../components/common/Input";
import { FiBriefcase, FiUser } from "react-icons/fi";
import Select from "../../components/common/Select";
import { Button } from "antd";

const AdminDashboard = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });
  const handleChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const options = [
    {
      value: "react.js",
      label: "React.js",
    },
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "vue",
      label: "Vue",
    },
    {
      value: "nuxt",
      label: "Nuxt",
    },
    {
      value: "sveltkit",
      label: "Sveltkit",
    },
    {
      value: "solid.js",
      label: "Solid.js",
    },
    {
      value: "angular",
      label: "Angular",
    },
  ];

  const handleSelect = (selectedValue) => {
    console.log(selectedValue);
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
      <div className="mt-5 card"></div>
    </div>
  );
};

export default AdminDashboard;
