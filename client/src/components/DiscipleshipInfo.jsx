import FloatingSelect from "./FloatingSelect";
import FloatingInput from "./FloatingInput";
import FloatingTextarea from "./FloatingTextarea";

const DiscipleshipInfo = ({ handleChange, form, step, setStep }) => {
  const yesNoValues = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
  ];

  const learnAboutUs = [
    { value: "Instagram", label: "Instagram" },
    { value: "Facebook", label: "Facebook" },
    { value: "Twitter", label: "Twitter" },
    { value: "Friend", label: "Friend" },
    { value: "Other", label: "Other" },
  ];
  return (
    <>
      <FloatingSelect
        label="Do you currently have a Pastor/Discipler that you are directly submitted to?"
        id="hasDiscipleship"
        name="hasDiscipleship"
        options={yesNoValues}
        onChange={handleChange}
        value={form.hasDiscipleship}
      />
      <FloatingSelect
        label="Are you a worker/leader in a Fellowship or Church?"
        id="isWorker"
        name="isWorker"
        options={yesNoValues}
        onChange={handleChange}
        value={form.isWorker}
      />
      <FloatingInput
        type="text"
        label="If Yes, please state your church and position"
        id="position"
        name="position"
        onChange={handleChange}
        value={form.position}
      />
      <FloatingSelect
        label="Can you commit to our meetings"
        id="canCommit"
        name="canCommit"
        options={yesNoValues}
        onChange={handleChange}
        value={form.canCommit}
      />
      <FloatingTextarea
        label="What's the most important reason you want to join this community?"
        id="reason"
        name="reason"
        rows={5}
        onChange={handleChange}
        value={form.reason}
      />
      <FloatingSelect
        label="How did you learn about us?"
        id="learnAboutUs"
        name="learnAboutUs"
        options={learnAboutUs}
        onChange={handleChange}
        value={form.learnAboutUs}
      />

      <div className="mt-6 flex items-center gap-4">
        <button
          type="button"
          className="border border-black px-6 py-2 text-black transition-colors hover:bg-gray-100"
          onClick={() => setStep(1)}
        >
          Previous
        </button>
        <button
          type="submit"
          className="bg-black px-6 py-2 text-white transition-colors hover:bg-gray-800"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default DiscipleshipInfo;
