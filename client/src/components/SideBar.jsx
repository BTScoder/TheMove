import { CheckCircle2, Users, Calendar, Shield } from "lucide-react";

const SideBar = () => {
  return (
    <>
      <div className="relative mt-3 h-full w-full overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] px-5 py-10 text-gray-100 shadow-2xl lg:mt-0 lg:rounded-lg lg:rounded-r-2xl lg:px-8 lg:py-14">
        {/* Subtle texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v6h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        {/* Drop shadow edge */}
        <div className="pointer-events-none absolute top-0 right-0 h-full w-1 bg-gradient-to-l from-black/30 to-transparent"></div>

        <h2 className="relative mb-10 text-2xl font-bold tracking-wide text-gray-50 uppercase lg:mb-14 lg:text-4xl">
          Why Join Us?
        </h2>

        <ul className="relative space-y-5 lg:space-y-6">
          <li className="group flex items-start gap-4 rounded-lg border-l-4 border-transparent px-3 py-3 capitalize transition-all duration-300 hover:border-blue-500 hover:bg-white/5">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-blue-400 transition-transform duration-300 group-hover:scale-110 lg:h-6 lg:w-6" />
            <span className="text-base leading-7 font-light text-gray-200 lg:text-lg">
              Christ centered growth
            </span>
          </li>
          <li className="group flex items-start gap-4 rounded-lg border-l-4 border-transparent px-3 py-3 capitalize transition-all duration-300 hover:border-green-500 hover:bg-white/5">
            <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-green-400 transition-transform duration-300 group-hover:scale-110 lg:h-6 lg:w-6" />
            <span className="text-base leading-7 font-light text-gray-200 lg:text-lg">
              Weekly online meetings
            </span>
          </li>
          <li className="group flex items-start gap-4 rounded-lg border-l-4 border-transparent px-3 py-3 capitalize transition-all duration-300 hover:border-purple-500 hover:bg-white/5">
            <Users className="mt-0.5 h-5 w-5 shrink-0 text-purple-400 transition-transform duration-300 group-hover:scale-110 lg:h-6 lg:w-6" />
            <span className="text-base leading-7 font-light text-gray-200 lg:text-lg">
              Prayer and accountability
            </span>
          </li>
          <li className="group flex items-start gap-4 rounded-lg border-l-4 border-transparent px-3 py-3 capitalize transition-all duration-300 hover:border-orange-500 hover:bg-white/5">
            <Shield className="mt-0.5 h-5 w-5 shrink-0 text-orange-400 transition-transform duration-300 group-hover:scale-110 lg:h-6 lg:w-6" />
            <span className="text-base leading-7 font-light text-gray-200 lg:text-lg">
              Flexible Participation
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
