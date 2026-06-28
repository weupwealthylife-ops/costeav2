import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  theme?: "light" | "dark";
  href?: string;
}

export default function BrandLogo({ theme = "light", href = "/" }: BrandLogoProps) {
  const nameColor = theme === "dark" ? "text-white" : "text-gray-900";
  const tagColor = theme === "dark" ? "text-blue-300" : "text-gray-400";

  return (
    <Link href={href} className="inline-flex flex-col items-center gap-2">
      <Image src="/logo.svg" alt="Escuela de Costos logo" width={48} height={48} />
      <div className="flex flex-col items-center leading-tight">
        <span className={`text-xl font-extrabold tracking-tight ${nameColor}`}>
          Escuela de Costos
        </span>
        <span className={`text-xs font-medium ${tagColor}`}>by Costea®</span>
      </div>
    </Link>
  );
}
