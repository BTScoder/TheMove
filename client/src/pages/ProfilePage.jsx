import { Mars, Venus } from "lucide-react";
const ProfilePage = () => {
  return (
    <>
      <div className="min-h-screen pb-20">
        {/* Profile pic div */}
        <div className="flex flex-col items-center gap-8 bg-black pt-8 pb-10">
          <div className="flex h-30 w-30 items-center justify-center rounded-full bg-gray-300 text-5xl font-bold">
            <span>U</span>
          </div>
          <div className="flex flex-col items-center gap-5 text-center text-white">
            <p className="text-3xl">Benedict Umeozor</p>
            <p className="z-50 text-gray-700 uppercase">Member</p>
          </div>
        </div>

        {/* Content Div  */}
        <div className="relative">
          {/* svg tilt div  */}
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute top-0 left-0 block h-24 w-full -translate-y-full"
          >
            <path
              d="M0,120 L0,60 L1200,20 L1200,120 Z"
              className="fill-white"
            />
          </svg>

          {/* white below */}
          <div className="max-w-4xl bg-white px-6 py-10 lg:mx-auto lg:grid lg:grid-cols-2 lg:gap-10">
            <div className="relative rounded-2xl border px-4 py-3">
              <p className="absolute -top-3 bg-white px-2">Name</p>
              <p>Benedict Umeozor</p>
            </div>
            <div className="relative rounded-2xl border px-4 py-2">
              <p className="absolute -top-3 bg-white px-2">Email</p>
              <p>benedict.umeozor@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
