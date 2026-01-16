import { useUser } from "../context/UserContext";
const ProfileComp = ({ isHomePage = true }) => {
  const { user } = useUser();
  const initials =
    `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`.toUpperCase();
  return (
    <>
      <div
        className={`flex items-center justify-center rounded-full font-semibold transition-all duration-200 ${
          isHomePage
            ? "h-10 w-10 bg-gray-500 text-white"
            : "h-12 w-12 bg-gradient-to-br from-gray-700 to-gray-900 text-white shadow-md"
        }`}
      >
        {initials}
      </div>
    </>
  );
};

export default ProfileComp;
