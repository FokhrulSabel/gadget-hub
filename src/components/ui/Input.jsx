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
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-semibold text-[#03045E]">{label}</label>
      )}

      <input
        type={type}
        placeholder={placeholder}
        {...(register && register(name, { required }))}
        className="
        px-4 py-2.5
        rounded-xl
        border border-[#CAF0F8]
        bg-white/80
        backdrop-blur-md
        outline-none
        transition-all
        duration-200
        focus:border-[#00B4D8]
        focus:ring-2
        focus:ring-[#90E0EF]
        placeholder:text-gray-400
      "
      />
    </div>
  );
}
