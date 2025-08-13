"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "@/lib/i18n";

export default function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLanguage = (lang: string) => {
    const cleanPathname = pathname?.replace(/^\/(pt|en)/, "") || "";
    router.replace(`/${lang}${cleanPathname}`);
  };

  return (
    <div className="btn-group">
      <button
        className={`btn btn-sm ${
          locale === "pt" ? "btn-teal" : "btn-outline-secondary"
        }`}
        onClick={() => switchLanguage("pt")}
        type="button"
      >
        PT
      </button>
      <button
        className={`btn btn-sm ${
          locale === "en" ? "btn-teal" : "btn-outline-secondary"
        }`}
        onClick={() => switchLanguage("en")}
        type="button"
      >
        EN
      </button>
    </div>
  );
}
