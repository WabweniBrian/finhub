import React from "react";
import Tooltip from "../../common/Tooltip";
import { FiEdit, FiTrash } from "react-icons/fi";

const Links = () => {
  const links = [
    {
      id: 1,
      linkText: "Website",
      linkUrl: "https://www.finhub.com",
    },
    {
      id: 2,
      linkText: "Facebook",
      linkUrl: "https://www.facebook.com/finhub",
    },
    {
      id: 3,
      linkText: "Instagram",
      linkUrl: "https://www.instagram.com/finhub",
    },
  ];
  return (
    <div>
      <div className="mt-3">
        {links.map((link) => (
          <div
            className="border p-3 rounded-lg my-3 flex-center-between"
            key={link.id}
          >
            <div>
              <p className="text-muted text-sm">{link.linkText}</p>
              <a
                href={link.linkUrl}
                target="_blank"
                className="text-primary underline"
              >
                {link.linkUrl}
              </a>
            </div>
            <div>
              <Tooltip text="Edit">
                <FiEdit className="text-green-600" />
              </Tooltip>
              <Tooltip text="Delete">
                <FiTrash className="text-red-600 ml-2" />
              </Tooltip>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
