import { useState } from "react";
import { Mars, Venus, Pen, Mail, Phone, MapPin, Briefcase, User } from "lucide-react";
import UpdateInfo from "../../components/UpdateInfo.jsx";
import Modal from "../../components/Modal.jsx";
import { useUser } from "../../context/UserContext";

const UserProfile = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();

  return (
    <>
      <Modal show={open} onClose={() => setOpen(false)}>
        <UpdateInfo onClose={() => setOpen(false)} />
      </Modal>

      {/* Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="font-heading text-4xl uppercase">Personal Information</h2>
          <p className="mt-2 text-sm text-gray-500">
            Manage and update your personal details
          </p>
        </div>
        <button
          className="flex items-center gap-2 rounded-lg bg-button px-6 py-3 text-white transition-colors hover:bg-button/90"
          onClick={() => setOpen(true)}
        >
          <Pen className="h-4 w-4" />
          Edit Profile
        </button>
      </div>

      {/* Profile Card */}
      <div className="rounded-2xl bg-white p-8 shadow-md">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          
          {/* First Name */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <User className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">First Name</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">{user?.firstName || "Benedict"}</p>
            </div>
          </div>

          {/* Last Name */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
              <User className="h-6 w-6 text-purple-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Last Name</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">{user?.lastName || "Umeozor"}</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Email</p>
              <p className="mt-1 text-lg font-semibold text-gray-900 break-all">{user?.email || "benedict.umeozor@example.com"}</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
              <Phone className="h-6 w-6 text-orange-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Phone Number</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">{user?.phone || "+1 (555) 123-4567"}</p>
            </div>
          </div>

          {/* Gender */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
              {user?.gender === "Male" ? (
                <Mars className="h-6 w-6 text-blue-500" />
              ) : (
                <Venus className="h-6 w-6 text-pink-500" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Gender</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">{user?.gender || "Male"}</p>
            </div>
          </div>

          {/* Profession */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
              <Briefcase className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Profession</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">{user?.profession || "Student"}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4 lg:col-span-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
              <MapPin className="h-6 w-6 text-red-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Location</p>
              <p className="mt-1 text-lg font-semibold text-gray-900">{user?.location || "Lagos"}</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default UserProfile;
