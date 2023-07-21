import React from "react";
import LocationDetails from "../../components/home/contact/LocationDetails";
import ContactForm from "../../components/home/contact/ContactForm";

const ContactUs = () => {
  return (
    <div className="pt-28 max-w-6xl w-full mx-auto">
      <div className="my-10 sm:flex-align-center flex-wrap gap-y-10 sm:gap-10  max-w-7xl mx-auto px-4">
        <div className="flex-1 basis-80">
          <LocationDetails />
        </div>
        <div className="flex-1 basis-80 mt-10 sm:m-0">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
