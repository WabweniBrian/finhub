import { useState } from "react";
import Breadcrumb from "../../components/common/Breadcrumb";
import ContactForm from "../../components/admin/contact/ContactForm";
import ContactDetails from "../../components/admin/contact/ContactDetails";

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
      <div className="flex-center-center sm:flex-center-between flex-col sm:flex-row gap-y-3 sm:gap-y-0">
        <h1 className="text-2xl font-semibold">Contact STL Support</h1>
        <Breadcrumb />
      </div>
      <div className="mt-4 card">
        <ContactForm />
        <ContactDetails />
      </div>
    </div>
  );
};

export default Contact;
