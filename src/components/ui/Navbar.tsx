"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import type { User } from "@/types";

interface NavbarProps {
  user?: User | null;
  onLogout?: () => void;
}

export default function Navbar({ user, onLogout }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { signOut } = useAuth();
  const router = useRouter();

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
        <Link href="/" className="navbar-brand fw-bold text-teal fs-3">
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
                href="/"
                className="nav-link text-light"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/about"
                className="nav-link text-light"
                onClick={closeMenu}
              >
                Sobre Nós
              </Link>
            </li>
            <li className="nav-item">
              <Link
                href="/plans"
                className="nav-link text-light"
                onClick={closeMenu}
              >
                Planos
              </Link>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <Link
                    href="/dashboard"
                    className="nav-link text-light"
                    onClick={closeMenu}
                  >
                    Dashboard
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
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className="nav-item ms-2">
                <Link
                  href="/login"
                  className="btn btn-teal btn-sm rounded-pill"
                  onClick={closeMenu}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
