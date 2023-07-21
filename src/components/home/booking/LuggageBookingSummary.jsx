const LuggageBookingSummary = () => {
  return (
    <div className="mt-6 max-w-sm w-full mx-auto">
      <div className="border rounded-lg p-4">
        <h1 className="text-2xl font-semibold text-center">
          SIMBULA TUGENDE LIMITED
        </h1>
        <div className="flex justify-end mt-2">
          <p className="font-bold">
            <span className="text-red-600">Ref_No:</span>
            <span className="text-green-600">0026</span>
          </p>
        </div>
        <div className="mt-3 flex-center-between">
          <h1>Sender's Name</h1>
          <h1 className="text-muted font-medium">John Doe</h1>
        </div>
        <div className="mt-3 flex-center-between">
          <h1>Receiver's Name</h1>
          <h1 className="text-muted font-medium">Jane Doe</h1>
        </div>
        <div className="mt-3 flex-center-between">
          <h1>Email</h1>
          <h1 className="text-muted font-medium">johndoe@gmail.com</h1>
        </div>
        <div className="mt-3 flex-center-between">
          <h1>Phone Number</h1>
          <h1 className="text-muted font-medium">07572673628</h1>
        </div>
        <div className="mt-3 flex-center-between">
          <h1>Entry Point</h1>
          <h1 className="text-muted font-medium">Kampala</h1>
        </div>
        <div className="mt-3 flex-center-between">
          <h1>Stop Point</h1>
          <h1 className="text-muted font-medium">Mbarara</h1>
        </div>
        <div className="mt-3 flex-center-between">
          <h1>Bus Operator</h1>
          <h1 className="text-muted font-medium">Jaguar</h1>
        </div>
        <div className="mt-3 flex-center-between">
          <h1>Total Fare</h1>
          <h1 className="text-primary font-medium">Ugx 5,500</h1>
        </div>
        <div className="mt-3 flex-center-between">
          <h1>Journey Date</h1>
          <h1 className="text-muted font-medium">12/08/2023</h1>
        </div>
        <div className="mt-3 flex-center-between">
          <h1>Journey Time</h1>
          <h1 className="text-muted font-medium">02:00pm - 6:00pm (4hrs)</h1>
        </div>
        <div className="mt-3 flex-center-between">
          <h1>Transaction status</h1>
          <h1 className="text-secondary font-medium">Paid</h1>
        </div>
        <div className="mt-3 flex-center-between">
          <h1>Booking ID</h1>
          <h1 className="text-blue-600 font-medium">92h27842g</h1>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm italic text-muted">
            Thaks for choosing STL. Have a safe journey!
          </p>
        </div>
      </div>
      <div className="mt-3 bg-primary/20 text-primary border-l-4 border-l-primary p-4">
        <p className="text-sm">
          Ticket details have been sent to both your phone number and email
          provided
        </p>
      </div>
    </div>
  );
};

export default LuggageBookingSummary;
