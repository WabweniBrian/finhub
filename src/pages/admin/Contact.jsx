import Breadcrumb from "../../components/common/BreadCrumb";
import { useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: [e.target.value] });
  };

  return (
    <div>
      <div className="flex-center-between">
        <h1 className="text-2xl font-semibold">Contact STL Support</h1>
        <Breadcrumb />
      </div>
      <div className="mt-4 card">
        <form>
          {/* Name */}
          <div>
            <p>Full Name</p>
            <div className="mt-2">
              <input
                type="text"
                value={contact.name}
                name="name"
                onChange={handleChange}
                placeholder="Name.."
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <p>Email Address</p>
            <div className="mt-2">
              <input
                type="email"
                value={contact.email}
                name="email"
                onChange={handleChange}
                placeholder="Email.."
              />
            </div>
          </div>
          {/* Email */}
          <div>
            <p>Message</p>
            <div className="mt-2">
              <textarea
                value={contact.message}
                name="message"
                onChange={handleChange}
                placeholder="Message.."
              />
            </div>
          </div>
          <button className="btn btn-primary mt-4">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
