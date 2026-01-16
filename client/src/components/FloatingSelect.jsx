import { useState } from "react";
const FloatingSelect = ({ label, id, options, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleFocus = () => setIsFocused(true);

  const handleBlur = (e) => {
    setIsFocused(false);
    setHasValue(e.target.value !== "");
  };

  const isFloating = isFocused || hasValue;

  return (
    <div className="relative">
      <select
        id={id}
        className="peer w-full cursor-pointer appearance-none rounded-lg border border-gray-300 bg-white px-4 py-5 transition-colors focus:border-black focus:outline-none"
        onFocus={handleFocus}
        onBlur={handleBlur}
        // defaultValue=""
        {...props}
      >
        <option value="" disabled hidden></option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="text-sm text-black"
          >
            {option.label}
          </option>
        ))}
      </select>

      {/* Dropdown arrow icon */}
      <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-gray-400">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
        </svg>
      </div>

      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-3 bg-white px-1 transition-all duration-200 ${
          isFloating
            ? "-top-5 text-sm text-black"
            : "top-3 text-sm text-gray-500"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingSelect;
