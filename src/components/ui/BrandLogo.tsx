import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  theme?: "light" | "dark";
  href?: string;
}

export default function BrandLogo({ theme = "light", href = "/" }: BrandLogoProps) {
  const nameColor = theme === "dark" ? "text-white" : "text-[#2563EB]";
  const tagColor = theme === "dark" ? "text-blue-300/60" : "text-gray-400";

  return (
    <Link href={href} className="inline-flex items-center gap-3">
      <Image
        src="/logo.svg"
        alt="Escuela De Costos"
        width={40}
        height={40}
        className={theme === "dark" ? "brightness-0 invert" : ""}
      />
      <div className="flex flex-col leading-tight">
        <span className={`text-lg font-extrabold tracking-tight leading-none ${nameColor}`}>
          Escuela De Costos
        </span>
        <span className={`text-[11px] font-semibold ${tagColor}`}>by Costea®</span>
      </div>
    </Link>
  );
}
