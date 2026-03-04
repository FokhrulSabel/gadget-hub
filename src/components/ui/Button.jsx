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
    "px-4 py-2 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-cyan-600 hover:bg-cyan-700 text-white focus:ring-cyan-500",
    secondary:
      "bg-purple-600 hover:bg-purple-700 text-white focus:ring-purple-500",
    outline:
      "border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-slate-700",
    danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
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
