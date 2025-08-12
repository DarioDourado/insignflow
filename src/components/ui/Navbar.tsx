"use client";

import { useState } from "react";
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

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark-custom fixed-top shadow">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold text-teal fs-3">
          InsightFlow
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link text-light">
                Sobre Nós
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/plans" className="nav-link text-light">
                Planos
              </Link>
            </li>

            {user ? (
              <>
                <li className="nav-item">
                  <Link href="/dashboard" className="nav-link text-light">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item ms-2">
                  <button
                    onClick={handleLogout}
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
