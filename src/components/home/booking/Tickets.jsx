import { FiDownload } from "react-icons/fi";

const Tickets = () => {
  const tickets = [
    {
      id: 1,
      type: "Luggage",
      downloadLink: "https://localhost:3000/ticket.pdf",
      previewImage: "/images/ticket.png",
    },
    {
      id: 2,
      type: "Passenger",
      downloadLink: "/ticket.pdf",
      previewImage: "/images/ticket.png",
    },
  ];
  return (
    <>
      {tickets.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {tickets.map((ticket) => (
            <div
              className="mt-4 rounded-lg relative group overflow-hidden cursor-pointer h-[350px] border"
              key={ticket.id}
            >
              <img
                src={ticket.previewImage}
                alt={ticket.type}
                className="w-full h-full object-cover group-hover:scale-125 transition-a"
              />
              <div className="absolute w-full h-full bg-black/20 top-0 left-0"></div>
              <div className="absolute top-0 left-0 rounded-br-lg text-white px-5 py-1 text-sm bg-secondary">
                {ticket.type}
              </div>
              <div className="flex-center-center absolute bottom-2 left-1/2 -translate-x-1/2">
                <a
                  href={ticket.downloadLink}
                  target="_blank"
                  className="btn btn-primary flex-align-center gap-2"
                >
                  <FiDownload />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-center-center py-6 text-center">
          <h1 className="text-2xl font-semibold opacity-50">No Tickets</h1>
        </div>
      )}
    </>
  );
};

export default Tickets;
