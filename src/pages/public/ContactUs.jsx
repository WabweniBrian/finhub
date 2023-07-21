import React from "react";
import LocationDetails from "../../components/home/contact/LocationDetails";
import ContactForm from "../../components/home/contact/ContactForm";

const ContactUs = () => {
  return (
    <div className="pt-28 px-4 max-w-6xl mx-auto">
      <div className="my-10 flex-align-center flex-wrap gap-10 max-w-7xl mx-auto px-4">
        <div className="flex-1 basis-[25rem]">
          <LocationDetails />
        </div>
        <div className="flex-1 basis-[25rem]">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
