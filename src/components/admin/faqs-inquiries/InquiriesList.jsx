import { useState } from "react";
import { FiEdit, FiPrinter, FiTrash } from "react-icons/fi";
import Tooltip from "../../common/Tooltip";
import useDataTables from "../../common/useDataTables";
import toast from "react-hot-toast";
import { BiSolidFileExport } from "react-icons/bi";

const InquiriesList = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const inquiries = [
    {
      id: 1,
      images: ["/images/screen.png", "/images/photo (57).jpg"],
      subject: "Transaction error",
      inquiry:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perspiciatis libero quo vero natus eveniet placeat id dolorem unde sed autem, vel deserunt illum ea nemo praesentium eius eligendi. Modi voluptatem, ipsa odio pariatur, enim sequi consequuntur obcaecati nisi aliquam quisquam cupiditate repudiandae recusandae quaerat, commodi ratione animi beatae officiis.",
    },
    {
      id: 2,
      images: [
        "/images/photo (57).jpg",
        "/images/screen.png",
        "/images/photo (92).jpg",
      ],
      subject: "Transaction error",
      inquiry:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perspiciatis libero quo vero natus eveniet placeat id dolorem unde sed autem, vel deserunt illum ea nemo praesentium eius eligendi. Modi voluptatem, ipsa odio pariatur, enim sequi consequuntur obcaecati nisi aliquam quisquam cupiditate repudiandae recusandae quaerat, commodi ratione animi beatae officiis.",
    },
    {
      id: 3,
      subject: "Transaction error",
      inquiry:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perspiciatis libero quo vero natus eveniet placeat id dolorem unde sed autem, vel deserunt illum ea nemo praesentium eius eligendi. Modi voluptatem, ipsa odio pariatur, enim sequi consequuntur obcaecati nisi aliquam quisquam cupiditate repudiandae recusandae quaerat, commodi ratione animi beatae officiis.",
    },
  ];

  useDataTables();

  const handleRowSelection = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      const allIds = inquiries.map((inquiry) => inquiry.id);
      setSelectedRows(allIds);
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteSelected = async () => {
    if (!confirm("Are you sure you want to delete selected rows?")) return;
    toast.success("Selected rows deleted");
  };

  return (
    <>
      <div className="flex-align-center flex-wrap gap-2 pb-2 border-b mt-4">
        <button className="btn border border-primary shadow shadow-primary/20 text-primary flex-align-center gap-x-2">
          <FiPrinter />
          <span>Print</span>
        </button>
        <button className="btn border border-primary shadow shadow-primary/20 text-primary flex-align-center gap-x-2">
          <BiSolidFileExport />
          <span>Excel</span>
        </button>
        {selectedRows.length > 0 && (
          <button
            className="btn !bg-red-600 hover:!bg-red-600/80 text-white"
            onClick={handleDeleteSelected}
          >
            Delete Selected
          </button>
        )}
      </div>
      <div className="p-4 overflow-auto table-wrapper">
        <table id="my-table" className="w-full table-striped rounded-lg">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th>ID</th>
              <th>Images</th>
              <th className="!whitespace-pre-wrap">Question</th>
              <th className="!whitespace-pre-wrap">Answer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {inquiries.map((inquiry) => (
              <tr key={inquiry.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(inquiry.id)}
                    onChange={() => handleRowSelection(inquiry.id)}
                  />
                </td>
                <td>{inquiry.id}</td>
                <td>
                  {inquiry?.images ? (
                    <>
                      {inquiry?.images?.slice(0, 1)?.map((image, i) => (
                        <div className="relative cursor-pointer" key={i}>
                          <img
                            src={image}
                            alt={inquiry.subject}
                            className="w-20 h-20 object-contain"
                          />
                          {inquiry.images.length > 1 && (
                            <div className="absolute w-full h-full top-0 left-0 bg-black/40 flex-center-center text-white">
                              + {inquiry.images.length - 1}
                            </div>
                          )}
                        </div>
                      ))}
                    </>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="!whitespace-pre-wrap">{inquiry.subject}</td>
                <td className="!whitespace-pre-wrap">{inquiry.inquiry}</td>
                <td>
                  {/* Delete */}
                  <Tooltip text="Delete">
                    <button className="icon-box text-white !bg-red-600 hover:!bg-red-600/80 ml-2">
                      <FiTrash />
                    </button>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InquiriesList;
