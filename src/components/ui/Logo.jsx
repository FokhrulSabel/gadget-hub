import Image from "next/image";
import Link from "next/link";

export default function Logo({ size = 60 }) {
  return (
    <Link href="/" className="flex items-center gap-3 group select-none">
      <Image
        src="/logogh.png"
        alt="GadgetHub Logo"
        width={size}
        height={size}
        priority
        className="
        transition-all
        duration-300
        group-hover:scale-105
        group-hover:rotate-2
        "
      />

      <span className="text-xl font-bold tracking-tight">
        <span className="text-[#03045E]">Gadget</span>
        <span className="bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">
          Hub
        </span>
      </span>
    </Link>
  );
}
