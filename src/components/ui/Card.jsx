"use client";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
      backdrop-blur-lg
      bg-white/70
      border border-white/40
      shadow-md
      rounded-2xl
      p-5
      transition-all
      duration-300
      hover:-translate-y-1
      hover:shadow-xl
      ${className}
    `}
    >
      {children}
    </div>
  );
}
