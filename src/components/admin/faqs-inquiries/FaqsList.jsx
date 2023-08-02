import { useState } from "react";
import { FiEdit, FiPlusCircle, FiTrash } from "react-icons/fi";
import Tooltip from "../../common/Tooltip";
import useDataTables from "../../common/useDataTables";
import toast from "react-hot-toast";
import EditFaqsFormModal from "./EditFaqsFormModal";

const FaqsList = ({ handleOpenModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const faqs = [
    {
      id: 1,
      question: "What is FinHub?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perspiciatis libero quo vero natus eveniet placeat id dolorem unde sed autem, vel deserunt illum ea nemo praesentium eius eligendi. Modi voluptatem, ipsa odio pariatur, enim sequi consequuntur obcaecati nisi aliquam quisquam cupiditate repudiandae recusandae quaerat, commodi ratione animi beatae officiis. Voluptatibus unde quae accusantium, voluptatem voluptate quod magnam explicabo quos.",
    },
    {
      id: 2,
      question: "When was FinHub founded?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perspiciatis libero quo vero natus eveniet placeat id dolorem unde sed autem, vel deserunt illum ea nemo praesentium eius eligendi. Modi voluptatem, ipsa odio pariatur, enim sequi consequuntur obcaecati nisi aliquam quisquam cupiditate repudiandae recusandae quaerat, commodi ratione animi beatae officiis. Voluptatibus unde quae accusantium, voluptatem voluptate quod magnam explicabo quos.",
    },
    {
      id: 3,
      question: "How is FinHub different from other fintech companies?",
      answer:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae perspiciatis libero quo vero natus eveniet placeat id dolorem unde sed autem, vel deserunt illum ea nemo praesentium eius eligendi. Modi voluptatem, ipsa odio pariatur, enim sequi consequuntur obcaecati nisi aliquam quisquam cupiditate repudiandae recusandae quaerat, commodi ratione animi beatae officiis. Voluptatibus unde quae accusantium, voluptatem voluptate quod magnam explicabo quos.",
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
      const allIds = faqs.map((faq) => faq.id);
      setSelectedRows(allIds);
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteSelected = async () => {
    if (!confirm("Are you sure you want to delete selected rows?")) return;
    toast.success("Selected rows deleted");
  };

  const handleOpenEditModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex-align-center flex-wrap gap-2 pb-2 border-b mt-4">
        <button
          className="btn border border-primary shadow shadow-primary/20 text-primary flex-align-center gap-x-2"
          onClick={handleOpenModal}
        >
          <FiPlusCircle />
          <span>New</span>
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
              <th className="!whitespace-pre-wrap">Question</th>
              <th className="!whitespace-pre-wrap">Answer</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {faqs.map((faq) => (
              <tr key={faq.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(faq.id)}
                    onChange={() => handleRowSelection(faq.id)}
                  />
                </td>
                <td>{faq.id}</td>
                <td className="!whitespace-pre-wrap">{faq.question}</td>
                <td className="!whitespace-pre-wrap">{faq.answer}</td>
                <td>
                  {/* Edit */}
                  <Tooltip text="Edit">
                    <button
                      className="icon-box text-white !bg-green-600 hover:!bg-green-600/80 ml-2"
                      onClick={handleOpenEditModal}
                    >
                      <FiEdit />
                    </button>
                  </Tooltip>
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
      {/* EditFaqsForm Modal */}
      <EditFaqsFormModal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
};

export default FaqsList;
