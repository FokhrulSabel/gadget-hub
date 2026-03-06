"use client";

import { useState } from "react";

export default function Dropdown({ trigger, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer select-none"
      >
        {trigger}
      </div>

      {open && (
        <div
          className="
          absolute right-0 mt-3 w-52
          rounded-xl
          backdrop-blur-xl
          bg-white/80
          border border-white/40
          shadow-lg
          animate-in fade-in zoom-in-95
        "
        >
          {children}
        </div>
      )}
    </div>
  );
}
