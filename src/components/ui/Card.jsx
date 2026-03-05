"use client";

export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white dark:bg-slate-800 shadow-md rounded-xl border border-gray-100 dark:border-slate-700 hover:shadow-lg transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
