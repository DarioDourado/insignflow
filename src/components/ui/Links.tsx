import Link from "next/link";
import { useLocale } from "@/lib/i18n";

interface LinksProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  [key: string]: any;
}

export default function Links({
  href,
  children,
  className,
  onClick,
  ...props
}: LinksProps) {
  const locale = useLocale();

  const localizedHref = `/${locale}${href}`;

  return (
    <Link
      href={localizedHref}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
}
