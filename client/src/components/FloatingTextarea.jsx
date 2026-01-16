import { useState } from "react";
const FloatingLabelTextarea = ({ label, id, rows = 4, ...props }) => {
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
      <textarea
        id={id}
        rows={rows}
        className="peer w-full resize-none rounded-lg border-2 border-gray-300 px-4 py-3 transition-colors focus:border-black focus:outline-none"
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder=" "
        {...props}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute left-3 bg-white px-1 transition-all duration-200 ${
          isFloating
            ? "-top-3 text-sm text-black"
            : "top-3 text-base text-gray-500"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelTextarea;
