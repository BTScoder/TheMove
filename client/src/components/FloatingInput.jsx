import { useState } from "react";
const FloatingInput = ({ label, type, id, name, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
  };

  const isFloating = isFocused || hasValue;
  return (
    <>
      <div className="relative mb-6">
        <input
          type={type}
          id={id}
          name={name}
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="peer w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:border-black focus:outline-none"
        />
        <label
          htmlFor={id}
          className={`pointer-events-none absolute left-3 bg-white px-1 transition-all duration-200 ${
            isFloating
              ? "-top-3 text-sm text-black"
              : "top-3 text-sm text-gray-500"
          }`}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default FloatingInput;
