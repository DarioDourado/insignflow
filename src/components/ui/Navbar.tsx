"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/Auth/useAuth/useAuth";
import type { User } from "@/types";
import { useTranslations, useLocale } from "@/lib/i18n";
import Links from "./Links";
import LangSwitcher from "./LangSwitcher"; // Importa o novo componente

interface NavbarProps {
  user?: User | null;
  onLogout?: () => void;
}

export default function Navbar({ user, onLogout }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { signOut } = useAuth();
  const router = useRouter();
  const t = useTranslations("Navbar");
  const locale = useLocale();

  const handleLogout = async () => {
    try {
      await signOut();
      if (onLogout) {
        onLogout();
      } else {
        router.push(`/${locale}/`);
      }
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark-custom fixed-top shadow">
      <div className="container">
        <Links href="/" className="navbar-brand fw-bold text-teal fs-3">
          InsightFlow
        </Links>

        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto d-flex justify-content-end align-items-center">
            <li className="nav-item">
              <Links
                href="/"
                className="nav-link text-light"
                onClick={closeMenu}
              >
                {t("home")}
              </Links>
            </li>
            <li className="nav-item">
              <Links
                href="/about"
                className="nav-link text-light"
                onClick={closeMenu}
              >
                {t("about")}
              </Links>
            </li>
            <li className="nav-item">
              <Links
                href="/plans"
                className="nav-link text-light"
                onClick={closeMenu}
              >
                {t("plans")}
              </Links>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <Links
                    href="/dashboard"
                    className="nav-link text-light"
                    onClick={closeMenu}
                  >
                    {t("dashboard")}
                  </Links>
                </li>
                <li className="nav-item ms-2">
                  <button
                    onClick={() => {
                      closeMenu();
                      handleLogout();
                    }}
                    className="btn btn-danger btn-sm rounded-pill"
                  >
                    {t("logout")}
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item ms-2">
                <Links
                  href="/login"
                  className="btn btn-teal btn-sm rounded-pill"
                  onClick={closeMenu}
                >
                  {t("login")}
                </Links>
              </li>
            )}

            {/* Substitui os botões de idioma pelo componente LangSwitcher */}
            <li className="nav-item ms-3">
              <LangSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
