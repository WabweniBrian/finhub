import React, { useState } from "react";
import Modal from "../../common/Modal";
import { BiLockOpen } from "react-icons/bi";
import { FiPhone, FiBriefcase, FiMail, FiUser } from "react-icons/fi";

const UserFormModal = ({ isModalOpen, handleCloseModal, title }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    role: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseModal();
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} scroll>
        <h2 className="text-xl text-center mt-4 font-semibold  pb-2 mb-4">
          {title}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="my-2">
            <div className="flex-align-center flex-col sm:flex-row gap-3">
              {/* Username */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Username</p>
                <div className="mt-2 relative">
                  <FiUser className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <input
                    type="text"
                    value={user.username}
                    name="username"
                    onChange={handleChange}
                    className="pl-8"
                    placeholder="Username"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Email Address</p>
                <div className="mt-2 relative">
                  <FiMail className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <input
                    type="text"
                    value={user.email}
                    name="email"
                    onChange={handleChange}
                    className="pl-8"
                    placeholder="Email Address"
                  />
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="mt-4">
              <p>Phone Number</p>
              <div className="mt-2 relative">
                <FiPhone className="absolute top-1/2 -translate-y-1/2 left-2" />
                <input
                  type="number"
                  value={user.phone}
                  name="phone"
                  onChange={handleChange}
                  className="pl-8"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            {/* Role */}
            <div className="mt-4">
              <p>Role</p>
              <div className="mt-2 relative">
                <FiBriefcase className="absolute top-1/2 -translate-y-1/2 left-2" />
                <select
                  value={user.role}
                  name="role"
                  onChange={handleChange}
                  className="pl-8"
                >
                  <option value="">Select</option>
                  <option value="Administrator">Administrator</option>
                  <option value="Conductor">Conductor</option>
                  <option value="Bus Admin">Bus Admin</option>
                  <option value="Operator">Operator</option>
                  <option value="User">User</option>
                </select>
              </div>
            </div>
            <div className="flex-align-center flex-col sm:flex-row gap-3 mt-4">
              {/* Password */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Password</p>
                <div className="relative mt-2">
                  <BiLockOpen className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <input
                    type="password"
                    value={user.password}
                    name="password"
                    onChange={handleChange}
                    className="pl-8"
                    placeholder="Password"
                  />
                </div>
              </div>

              {/* Password Confirmation */}
              <div className="flex-1 w-full sm:w-fit">
                <p>Confirm Password</p>
                <div className="relative mt-2">
                  <BiLockOpen className="absolute top-1/2 -translate-y-1/2 left-2" />
                  <input
                    type="password"
                    value={user.confirm}
                    name="confirm"
                    onChange={handleChange}
                    className="pl-8"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-align-center justify-end gap-x-3 mt-6">
            <button
              className="btn bg-slate-200 hover:bg-slate-300"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default UserFormModal;
