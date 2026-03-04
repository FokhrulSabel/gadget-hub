"use client";

export default function Input({
  label,
  type = "text",
  placeholder,
  register,
  name,
  required,
}) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        {...(register && register(name, { required }))}
        className="px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-cyan-500 outline-none"
      />
    </div>
  );
}
