import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-6">
      <p className="text-center  text-muted pb-2">
        Copyright &copy;{new Date().getFullYear()} | Brought To You by{" "}
        <Link to="/" className="text-primary !opacity-100">
          STL
        </Link>
      </p>
    </div>
  );
};

export default Footer;
