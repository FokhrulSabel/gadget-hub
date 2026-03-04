"use client";

import { useState } from "react";

export default function Dropdown({ trigger, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div onClick={() => setOpen(!open)} className="cursor-pointer">
        {trigger}
      </div>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 shadow-lg rounded-xl border dark:border-slate-700">
          {children}
        </div>
      )}
    </div>
  );
}
