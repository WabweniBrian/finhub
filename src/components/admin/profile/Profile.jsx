import { useRef, useState } from "react";
import { BiStreetView } from "react-icons/bi";
import { FiPhone, FiHome } from "react-icons/fi";

const Profile = () => {
  const [user, setUser] = useState({
    username: "John Doe",
    email: "wabwenib66@gmail.com",
    phone: "0732783782",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  const imageInput = useRef(null);
  const [profileImage, setProfileImage] = useState("");

  return (
    <div className="mt-8">
      <div className="pb-3 border-b">
        <h1 className="font-semibold">Profile</h1>
        <p>Update your photo and personal details here </p>
      </div>
      <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
        <div className="flex-1 w-full sm:w-fit">
          <p>Username</p>
          <div className="mt-2 relative">
            <FiHome className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              value={user.username}
              name="username"
              onChange={handleChange}
              className="pl-8 border-gray-300"
            />
          </div>
        </div>

        <div className="flex-1 w-full sm:w-fit">
          <p>Email Address</p>
          <div className="mt-2 relative">
            <BiStreetView className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              value={user.email}
              name="email"
              onChange={handleChange}
              className="pl-8 border-gray-300"
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p>Phone Number</p>
        <div className="mt-2 relative">
          <FiPhone className="absolute top-1/2 -translate-y-1/2 left-2" />
          <input
            type="number"
            value={user.phone}
            name="phone"
            onChange={handleChange}
            className="pl-8 border-gray-300"
          />
        </div>
      </div>

      <div className="mt-8 flex-align-center gap-6 pt-3 border-t dark:border-t-dark">
        <div>
          <h1 className="font-semibold">Profile Photo</h1>
          <p>Upload your profile photo</p>
        </div>
        <div className="flex-shrink-0">
          <input
            type="file"
            hidden
            ref={imageInput}
            onChange={(e) => setProfileImage(e.target.files[0])}
          />
          <img
            src={`${
              profileImage
                ? URL.createObjectURL(profileImage)
                : "/images/placeholder.png"
            }`}
            alt="Profile Image"
            className="w-12 h-12 rounded-full object-cover sm:cursor-pointer"
            onClick={() => imageInput.current.click()}
          />
        </div>
        <div className="flex-align-center gap-x-4">
          <p
            className="text-red-500 sm:cursor-pointer"
            onClick={() => setProfileImage("")}
          >
            Delete
          </p>
        </div>
      </div>
      <div className="flex-center-center mt-4">
        <button className="btn btn-primary">update</button>
      </div>
    </div>
  );
};

export default Profile;
