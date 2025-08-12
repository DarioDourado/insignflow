"use client";

import { AuthProvider as AuthProviderHook } from "@/hooks/useAuth";
import { ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  return <AuthProviderHook>{children}</AuthProviderHook>;
}
