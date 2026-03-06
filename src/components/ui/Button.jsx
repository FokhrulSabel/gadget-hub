"use client";

export default function Button({
  children,
  type = "button",
  onClick,
  className = "",
  variant = "primary",
  disabled = false,
}) {
  const base =
    "inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 focus:outline-none";

  const variants = {
    primary: `
      bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#90E0EF]
      text-white
      shadow-md
      hover:-translate-y-0.5
      hover:shadow-[0_0_20px_rgba(0,180,216,0.6)]
    `,

    secondary: `
      bg-[#03045E]
      text-white
      hover:bg-[#0077B6]
      hover:-translate-y-0.5
      shadow-md
    `,

    outline: `
      border border-[#90E0EF]
      text-[#0077B6]
      hover:bg-[#CAF0F8]
      hover:-translate-y-0.5
    `,

    ghost: `
      text-[#0077B6]
      hover:bg-[#CAF0F8]
    `,

    danger: `
      bg-red-600
      text-white
      hover:bg-red-700
      hover:-translate-y-0.5
    `,
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}
