function RHFTextField({
  label,
  name,
  register,
  validationSchema = {},
  type = "text",
  required,
  errors,
}) {
  return (
    <div>
      <label className="mb-2 block text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        {...register(name, validationSchema)}
        id={name}
        className="textField__input"
        type={type}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error">{errors[name]?.message}</span>
      )}
    </div>
  );
}
export default RHFTextField;
