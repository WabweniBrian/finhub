import { FiLink, FiSend } from "react-icons/fi";

const MessageInput = () => {
  return (
    <div className="relative mt-4">
      <FiLink className="absolute top-1/2 -translate-y-1/2 left-2" />
      <input
        type="text"
        name="message"
        placeholder="Type Something"
        className="px-8 border-gray-300"
      />
      <FiSend className="icon-send absolute right-2 top-1/2 -translate-y-1/2 text-primary" />
    </div>
  );
};

export default MessageInput;
