"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import type { User } from "@/types";
import { useTranslations, useLocale } from "@/lib/i18n";

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
        router.push("/");
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
        <Link
          href={`/${locale}`}
          className="navbar-brand fw-bold text-teal fs-3"
        >
          InsightFlow
        </Link>

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

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto d-flex justify-content-end align-items-center">
            <li className="nav-item">
              <Link
                href={`/${locale}`}
                className="nav-link text-light"
                onClick={closeMenu}
              >
                {t("home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/${locale}/about`}
                className="nav-link text-light"
                onClick={closeMenu}
              >
                {t("about")}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href={`/${locale}/plans`}
                className="nav-link text-light"
                onClick={closeMenu}
              >
                {t("plans")}
              </Link>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <Link
                    href={`/${locale}/dashboard`}
                    className="nav-link text-light"
                    onClick={closeMenu}
                  >
                    {t("dashboard")}
                  </Link>
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
                <Link
                  href={`/${locale}/login`}
                  className="btn btn-teal btn-sm rounded-pill"
                  onClick={closeMenu}
                >
                  {t("login")}
                </Link>
              </li>
            )}
            <li className="nav-item ms-3">
              <div
                className="btn-group"
                role="group"
                aria-label="Language switcher"
              >
                <button
                  className={`btn btn-sm ${
                    locale === "pt" ? "btn-teal" : "btn-outline-secondary"
                  }`}
                  onClick={() => router.push("/pt")}
                  type="button"
                >
                  PT
                </button>
                <button
                  className={`btn btn-sm ${
                    locale === "en" ? "btn-teal" : "btn-outline-secondary"
                  }`}
                  onClick={() => router.push("/en")}
                  type="button"
                >
                  EN
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
