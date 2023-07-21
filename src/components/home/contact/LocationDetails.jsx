import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const LocationDetails = () => {
  return (
    <>
      <div className="flex-center-center p-4 shadow border rounded-lg">
        <div>
          <div className="w-12 h-12 flex-center-center rounded-full border border-dotted border-green-600 mx-auto">
            <FaMapMarkerAlt className="text-lg text-green-600" />
          </div>
          <h1 className="mt-3 text-2xl font-semibold text-center">
            Our Address
          </h1>
          <p className="mt-3 text-muted text-lg">
            Luwumu Street Plaza XYZ, Kampala (Ug)
          </p>
        </div>
      </div>
      <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
        <div className="flex-1 w-full !md:w-fit flex-center-center p-4 shadow border rounded-lg">
          <div>
            <div className="w-12 h-12 flex-center-center rounded-full border border-dotted border-green-600 mx-auto">
              <FaEnvelope className="text-lg text-green-600" />
            </div>
            <h1 className="mt-3 text-2xl font-semibold text-center">
              Email Us
            </h1>
            <p className="mt-3 text-muted text-lg">simbulatugende@gmail.com</p>
          </div>
        </div>
        <div className="flex-1 w-full !md:w-fit flex-center-center p-4 shadow border rounded-lg">
          <div>
            <div className="w-12 h-12 flex-center-center rounded-full border border-dotted border-green-600 mx-auto">
              <FaPhone className="text-lg text-green-600" />
            </div>
            <h1 className="mt-3 text-2xl font-semibold text-center">Call Us</h1>
            <p className="mt-3 text-muted text-lg">0392-280431</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationDetails;
