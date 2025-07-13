import { HiArrowUpTray } from "react-icons/hi2";

function FileInput({ label, className, name, type, value, onChange }) {
  return (
    <>
      <label
        htmlFor="file-input"
        className={`cursor-pointer gap-x-3 p-2 text-primary-900 border-primary-900 border-2 rounded-lg flex ${className} justify-center`}
      >
        {label}
        <HiArrowUpTray className="w-5 h-5" />
        <input
          name={name}
          id="file-input"
          onChange={onChange}
          className="sr-only"
          type={type}
          value={value}
        />
      </label>
    </>
  );
}
export default FileInput;
