function InfoRow({ label, value, children }) {
  return (
    <div className={`flex items-start `}>
      <span className="font-semibold text-secondary-700  ml-2">{label}:</span>
      <div className={`text-secondary-700 text-sm`}>
        <span className={"truncate"}>{value}</span>
        {children}
      </div>
    </div>
  );
}

export default InfoRow;
