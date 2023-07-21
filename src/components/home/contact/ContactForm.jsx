import React, { useState } from "react";

const ContactForm = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  return (
    <div className="bg-white rounded-lg shadow border p-4">
      <form onSubmit={handleSubmit}>
        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
          {/* First Name */}
          <div className="flex-1 w-full sm:w-fit">
            <p>First Name</p>
            <input
              type="text"
              value={user.firstName}
              name="firstName"
              onChange={handleChange}
              placeholder="First Name"
            />
          </div>

          {/* Last Name  */}
          <div className="flex-1 w-full sm:w-fit">
            <p>Last Name</p>
            <input
              type="text"
              value={user.lastName}
              name="lastName"
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
          {/* First Name */}
          <div className="flex-1 w-full sm:w-fit">
            <p>Email</p>
            <input
              type="text"
              value={user.email}
              name="email"
              onChange={handleChange}
              placeholder="Email address"
            />
          </div>

          {/* Last Name  */}
          <div className="flex-1 w-full sm:w-fit">
            <p>Phone</p>
            <input
              type="text"
              value={user.phone}
              name="phone"
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
          {/* Message */}
        </div>
        <div>
          <p>Message</p>
          <textarea
            type="text"
            value={user.message}
            name="message"
            onChange={handleChange}
            placeholder="Your message..."
          />
        </div>
        <button className="mt-4 btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
