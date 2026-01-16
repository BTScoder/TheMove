import FloatingInput from "./FloatingInput";
import FloatingSelect from "./FloatingSelect";
const PersonalDetails = ({ handleChange, form, setStep, step }) => {
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
    { value: "prefer not to say", label: "Prefer not to say" },
  ];
  return (
    <>
      <FloatingInput
        type="text"
        label="First Name"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={form.firstName}
      />
      <FloatingInput
        type="text"
        label="Last Name"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        value={form.lastName}
      />
      <FloatingInput
        type="email"
        label="email"
        id="email"
        name="email"
        onChange={handleChange}
        value={form.email}
      />
      <FloatingInput
        type="number"
        label="Phone Number"
        id="phone"
        name="phone"
        onChange={handleChange}
        value={form.phone}
      />
      <FloatingInput
        type="password"
        label="Password"
        id="password"
        name="password"
        onChange={handleChange}
        value={form.password}
      />
      <FloatingInput
        type="password"
        label="Confirm Password"
        id="confirmPassword"
        name="confirmPassword"
        onChange={handleChange}
        value={form.confirmPassword}
      />
      <FloatingSelect
        label="Gender"
        id="gender"
        name="gender"
        options={genderOptions}
        onChange={handleChange}
        value={form.gender}
      />
      <FloatingInput
        type="text"
        label="Profession"
        id="profession"
        name="profession"
        onChange={handleChange}
        value={form.profession}
      />
      <FloatingInput
        type="text"
        label="Location"
        id="location"
        name="location"
        onChange={handleChange}
        value={form.location}
      />

      <div className="col-span-2">
        <button
          type="button"
          className="bg-black px-4 py-2 text-white"
          onClick={() => setStep(2)}
        >
          Save and Continue
        </button>
      </div>
    </>
  );
};

export default PersonalDetails;
