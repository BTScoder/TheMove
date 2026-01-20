import { Mars, Venus, Pen } from "lucide-react";
const UserProfile = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-4xl uppercase">Personal Information</h2>
          <p className="mt-4 text-sm text-gray-400">
            This is the user profile page where personal information is
            displayed.
          </p>
        </div>
        <div>
          <button className="flex cursor-pointer items-center rounded-xl border px-6 py-2">
            <span className="me-4 inline-block">
              <Pen className="h-4 w-4 text-black" />
            </span>
            Edit
          </button>
        </div>
      </div>
      <section className="mt-10 grid grid-cols-1 space-y-10 lg:grid-cols-2">
        <div className="flex items-center gap-6">
          <p className="w-32 text-sm">First Name:</p>
          <p className="w-[60%] rounded-xl border bg-gray-200 px-5 py-3">
            Benedict{" "}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <p className="w-32 text-sm">Last Name:</p>
          <p className="w-[60%] rounded-xl border bg-gray-200 px-5 py-3">
            {" "}
            Umeozor
          </p>
        </div>
        <div className="flex items-center gap-6">
          <p className="w-32 text-sm">Email:</p>
          <p className="w-[60%] rounded-xl border bg-gray-200 px-5 py-3 text-sm wrap-normal">
            {" "}
            benedict.umeozor@example.com
          </p>
        </div>
        <div className="flex items-center gap-6">
          <p className="w-32 text-sm">Phone Number:</p>
          <p className="w-[60%] rounded-xl border bg-gray-200 px-5 py-3">
            {" "}
            +1 (555) 123-4567
          </p>
        </div>
        <div className="flex items-center gap-6">
          <p className="w-32 text-sm">Gender:</p>
          <p className="w-[60%] rounded-xl">
            {" "}
            <span className="me-10 inline-block rounded-full bg-black/10 p-4">
              <Mars className="h-6 w-6 text-blue-500" />
            </span>
            <span className="inline-block rounded-full bg-black/10 p-4">
              <Venus className="h-6 w-6 text-pink-500" />
            </span>
          </p>
        </div>
        <div className="flex items-center gap-6">
          <p className="w-32 text-sm">Profession:</p>
          <p className="w-[60%] rounded-xl border bg-gray-200 px-5 py-3">
            {" "}
            Student
          </p>
        </div>
        <div className="flex items-center gap-6">
          <p className="w-32 text-sm">Location:</p>
          <p className="w-[60%] rounded-xl border bg-gray-200 px-5 py-3">
            {" "}
            Lagos
          </p>
        </div>
      </section>
    </>
  );
};

export default UserProfile;
