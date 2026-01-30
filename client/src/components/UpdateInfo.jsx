import { useState } from "react";
import FloatingInput from "./FloatingInput";
import { useUser } from "../context/UserContext";
const UpdateInfo = ({ onClose, currentData }) => {
  const { user } = useUser();
  const [form, setForm] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    profession: user?.profession || "",
    location: user?.location || "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your update logic here
    console.log("Updated form:", form);
    onClose();
  };

  return (
    <>
      <h2 className="font-heading mb-10 text-2xl uppercase">
        Update Information
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {/* First Name */}
        <FloatingInput
          type="text"
          label="First Name"
          id="firstName"
          name="firstName"
          onChange={handleChange}
          value={form.firstName}
        />

        {/* Last Name */}
        <FloatingInput
          type="text"
          label="Last Name"
          id="lastName"
          name="lastName"
          onChange={handleChange}
          value={form.lastName}
        />

        {/* Email */}
        <FloatingInput
          type="email"
          label="Email"
          id="email"
          name="email"
          onChange={handleChange}
          value={form.email}
        />

        {/* Phone Number */}
        <FloatingInput
          type="tel"
          label="Phone Number"
          id="phone"
          name="phone"
          onChange={handleChange}
          value={form.phone}
        />

        {/* Profession */}
        <FloatingInput
          type="text"
          label="Profession"
          id="profession"
          name="profession"
          onChange={handleChange}
          value={form.profession}
        />

        {/* Location */}
        <FloatingInput
          type="text"
          label="Location"
          id="location"
          name="location"
          onChange={handleChange}
          value={form.location}
        />

        {/* Buttons */}
        <div className="col-span-2 mt-6 flex justify-end gap-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-md border border-gray-300 px-6 py-2 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-button hover:bg-button/25 rounded-md px-6 py-2 text-white"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateInfo;
