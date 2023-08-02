import Breadcrumb from "../../components/common/Breadcrumb";
import ContactForm from "../../components/admin/contact/ContactForm";

const Contact = () => {
  return (
    <div>
      <div className="flex-center-center sm:flex-center-between flex-col sm:flex-row gap-y-3 sm:gap-y-0">
        <h1 className="text-2xl font-semibold">Contact Details</h1>
        <Breadcrumb />
      </div>
      <div className="mt-4 card">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
