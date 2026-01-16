import { useState } from "react";
import clsx from "clsx";
import PersonalDetails from "../components/PersonalDetails";
import DiscipleshipInfo from "../components/DiscipleshipInfo";
import SideBar from "../components/SideBar";
import api from "../api.js";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    gender: "",
    profession: "",
    location: "",
    hasDiscipleship: "",
    isWorker: "",
    position: "",
    canCommit: "",
    reason: "",
    learnAboutUs: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("form submitted", form);

    try {
      const response = await api.post("/auth/register", form);
      // console.log(response.data.message);
      toast.success("Registration successful!", {
        style: {
          background: "#4BB543",
          color: "#FFFFFF",
        },
      });
      navigate("/login");
    } catch (error) {
      // console.error("Error registering user:", error);
      toast.error("Registration failed. Please try again.");
    }
  };
  // console.log(form);
  return (
    <>
      <div className="lg:mx-auto lg:mt-10 lg:grid lg:max-w-6xl lg:grid-cols-3">
        {/* Side bar */}
        {/* <div className="lg:col-span-1">
          <SideBar />
        </div> */}

        {/* Register div */}
        <div className="lg:col-span-2 lg:px-10 lg:py-5">
          <div className="p-8">
            {/* Steps div  */}
            <div className="mb-10 flex items-center justify-center gap-6">
              <p
                className={clsx(
                  "flex h-10 w-10 items-center justify-center rounded-full border p-4 text-xl font-bold",
                  { "bg-black text-white": step === 1 },
                )}
              >
                1
              </p>
              <p
                className={clsx(
                  "flex h-10 w-10 items-center justify-center rounded-full border p-4 text-xl font-bold",
                  { "bg-black text-white": step === 2 },
                )}
              >
                2
              </p>
            </div>

            <h2 className="text-2xl uppercase">Personal details</h2>
            <form
              className={clsx("mt-10", {
                "grid grid-cols-2 gap-2": step === 1,
                "block space-y-10": step === 2,
              })}
              onSubmit={handleSubmit}
            >
              {step === 1 ? (
                <PersonalDetails
                  handleChange={handleChange}
                  form={form}
                  setStep={setStep}
                  step={step}
                />
              ) : (
                <DiscipleshipInfo
                  handleChange={handleChange}
                  form={form}
                  setStep={setStep}
                  step={step}
                />
              )}
            </form>
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
        {/* svg side */}
        <div
          style={{ backgroundImage: 'url("/registerpic.svg")' }}
          className="hidden lg:col-span-1 lg:block lg:h-auto lg:bg-contain lg:bg-right lg:bg-no-repeat"
        ></div>
      </div>
    </>
  );
};

export default Register;
