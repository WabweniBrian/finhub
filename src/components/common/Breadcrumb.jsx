import { Link } from "react-router-dom";
import { FiHome, FiChevronRight } from "react-icons/fi";

const BreadCrumb = () => {
  const paths = location.pathname.split("/").filter((path) => path !== "");

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="list-none flex items-center !text-sm">
        <li className="flex items-center">
          <Link
            to="/admin"
            className="text-primary hover:underline flex-align-center gap-x-2"
          >
            <FiHome className="mr-1" />
            Home
          </Link>
          {paths.length > 0 && (
            <span className="mx-1">
              <FiChevronRight className="text-gray-500" />
            </span>
          )}
        </li>
        {paths.map((path, index) => {
          if (path !== "admin") {
            return (
              <li key={index} className="flex items-center">
                {index !== paths.length - 1 ? (
                  <>
                    <Link
                      to={`/${paths.slice(0, index + 1).join("/")}`}
                      className="text-primary hover:underline capitalize"
                    >
                      {path}
                    </Link>
                    <span className="mx-1">
                      <FiChevronRight className="text-gray-500" />
                    </span>
                  </>
                ) : (
                  <span className="text-gray-600 capitalize">{path}</span>
                )}
              </li>
            );
          }
          return null;
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumb;
