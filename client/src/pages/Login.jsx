import { useState } from "react";
import FloatingInput from "../components/FloatingInput";
import api from "../api.js";
import { useUser } from "../context/UserContext.jsx";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const isValid = Object.values(form).every((value) => value !== "");
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid) {
      return toast.error("Please fill in all fields");
    }
    try {
      const response = await api.post("/auth/login", form);
      console.log(response.data);

      // ✅ Save token to localStorage
      localStorage.setItem("token", response.data.token);

      // ✅ Update user context
      setUser(response.data.user);

      // ✅ Redirect or show success
      toast.success("Login successful", {
        style: {
          background: "#4BB543",
          color: "#fff",
          fontWeight: "600",
        },
      });
      navigate("/");
      console.log("Login successful!");
    } catch (err) {
      console.error("Error logging in user:", err);
    }
  };
  return (
    <>
      <div className="mt-10 mb-20 flex h-full w-full flex-col items-center justify-center px-10">
        <div className="space-y-4 text-center">
          <h2 className="text-4xl text-black/90 uppercase">Welcome Back</h2>
          <p className="text-sm font-light text-gray-400">
            Sign into your The Move Global account
          </p>
        </div>
        <form
          className="mt-10 w-full max-w-md space-y-6"
          onSubmit={handleSubmit}
        >
          <FloatingInput
            type="email"
            label="Email"
            id="email"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
          <FloatingInput
            type="password"
            label="Password"
            id="password"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
          <div>
            <button type="submit" className="bg-black px-4 py-2 text-white">
              Login
            </button>
          </div>
        </form>
        <p className="mt-10 text-sm text-gray-500">
          Dont have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register Here
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
