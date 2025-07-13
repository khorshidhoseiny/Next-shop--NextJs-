import React from "react";

function RecordData({ icon, color, label, value }) {
  return (
    <div className="bg-white/95 mt-5 rounded-xl col-span-4 hover:shadow-md  transition-all duration-300 ease-in-out lg:col-span-1 md:col-span-2">
      <div className="flex gap-x-3 p-3 items-center">
        <div
          className={`flex items-center justify-center text-white p-3 rounded-xl 
  ${color}`}
        >
          {icon}
        </div>
        <div className="flex flex-col gap-y-3">
          <span className="text-secondary-500  text-sm font-light">
            {label}
          </span>
          <span className="font-semibold text-secondary-700">{value}</span>
        </div>
      </div>
    </div>
  );
}

export default RecordData;
