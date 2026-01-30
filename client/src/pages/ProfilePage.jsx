import { useState } from "react";
import { User, Heart, ChartBar, Calendar, Bell, Shield } from "lucide-react";
import { NavLink, Link, Routes, Route, Navigate } from "react-router-dom";

// Page components
import UserProfile from "./dashboard/UserProfile.jsx";
import Community from "./dashboard/Community.jsx";
import Participation from "./dashboard/Participation.jsx";
import Growth from "./dashboard/Growth.jsx";
import Preference from "./dashboard/Preference.jsx";
import Security from "./dashboard/Security.jsx";

const ProfilePage = () => {
  return (
    <>
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[300px_1fr]">
        {/* Side bar */}
        <div className="flex h-full w-full flex-col items-center py-10">
          <div className="flex flex-col items-center gap-4">
            <div className="h-50 w-50 rounded-full bg-[url('/prayer1.jpeg')] bg-cover bg-center shadow-lg">
              {/* Profile image  */}
            </div>
            <p className="text-lg uppercase">Benedict</p>
            <p className="text-sm text-gray-600">Member</p>
          </div>

          <ul className="mt-10 flex w-full gap-6 overflow-x-scroll px-10 text-gray-700 lg:flex-col">
            <NavLink
              to="/profile/user"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center gap-3 rounded-md bg-gray-200 px-3 py-2 text-lg transition-all duration-150 hover:bg-gray-200"
                  : "flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-lg transition-all duration-150 hover:bg-gray-200"
              }
            >
              <li className="group flex items-center gap-3">
                <span>
                  <User className="mb-1 h-6 w-6 text-black" />
                </span>
                Profile
              </li>
            </NavLink>

            <NavLink
              to="/profile/community"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center gap-3 rounded-md bg-gray-200 px-3 py-2 text-lg transition-all duration-150 hover:bg-gray-200"
                  : "flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-lg transition-all duration-150 hover:bg-gray-200"
              }
            >
              <li className="group flex items-center gap-3">
                <span>
                  <Heart className="mb-1 h-6 w-6 text-black group-hover:text-pink-500" />
                </span>
                Community
              </li>
            </NavLink>

            <NavLink
              to="/profile/participation"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center gap-3 rounded-md bg-gray-200 px-3 py-2 text-lg transition-all duration-150 hover:bg-gray-200"
                  : "flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-lg transition-all duration-150 hover:bg-gray-200"
              }
            >
              <li className="group flex items-center gap-3">
                <span>
                  <ChartBar className="mb-1 h-6 w-6 text-black group-hover:text-orange-500" />
                </span>
                Participation
              </li>
            </NavLink>

            <NavLink
              to="/profile/growth"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center gap-3 rounded-md bg-gray-200 px-3 py-2 text-lg transition-all duration-150 hover:bg-gray-200"
                  : "flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-lg transition-all duration-150 hover:bg-gray-200"
              }
            >
              <li className="group flex items-center gap-3">
                <span>
                  <Calendar className="mb-1 h-6 w-6 text-black group-hover:text-blue-500" />
                </span>
                Growth
              </li>
            </NavLink>

            <NavLink
              to="/profile/preference"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center gap-3 rounded-md bg-gray-200 px-3 py-2 text-lg transition-all duration-150 hover:bg-gray-200"
                  : "flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-lg transition-all duration-150 hover:bg-gray-200"
              }
            >
              <li className="group flex items-center gap-3">
                <span>
                  <Bell className="mb-1 h-6 w-6 text-black group-hover:text-yellow-500" />
                </span>
                Preference
              </li>
            </NavLink>

            <NavLink
              to="/profile/security"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center gap-3 rounded-md bg-gray-200 px-3 py-2 text-lg transition-all duration-150 hover:bg-gray-200"
                  : "flex cursor-pointer items-center gap-3 rounded-md px-3 py-2 text-lg transition-all duration-150 hover:bg-gray-200"
              }
            >
              <li className="group flex items-center gap-3">
                <span>
                  <Shield className="mb-1 h-6 w-6 text-black group-hover:text-red-500" />
                </span>
                Security
              </li>
            </NavLink>
          </ul>
        </div>

        {/* Main content */}
        <section className="px-5 py-10 lg:px-20 lg:py-20">
          <Routes>
            <Route index element={<Navigate to="user" replace />} />
            <Route path="user" element={<UserProfile />} />
            <Route path="community" element={<Community />} />
            <Route path="participation" element={<Participation />} />
            <Route path="growth" element={<Growth />} />
            <Route path="preference" element={<Preference />} />
            <Route path="security" element={<Security />} />
          </Routes>
        </section>
      </div>
    </>
  );
};

export default ProfilePage;
