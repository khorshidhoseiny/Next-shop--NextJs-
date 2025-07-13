"use client";
function InfoRow({ label, value, children, className = "" }) {
  return (
    <div className={`flex items-start`}>
      <span className="font-semibold flex text-secondary-700">{label}:</span>
      <div
        className={`text-secondary-700 w-72 truncate whitespace-nowrap overflow-hidden text-sm `}
      >
        <span className={className}>{value}</span>
        {children}
      </div>
    </div>
  );
}

export default InfoRow;
