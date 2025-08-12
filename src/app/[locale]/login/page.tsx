"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useAuth } from "@/hooks/useAuth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { signIn, signUp } = useAuth();
  const router = useRouter();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      if (isSigningUp) {
        await signUp(email, password);
        alert("Conta criada com sucesso! Faça login para continuar.");
        setIsSigningUp(false);
      } else {
        await signIn(email, password);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Erro de autenticação:", error);
      setErrorMessage("Erro de autenticação: " + (error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main className="text-gray-200 bg-gray-900 min-h-screen flex items-center justify-center pt-20">
        <div className="w-full max-w-md p-8 m-4 bg-gray-950 rounded-lg shadow-xl">
          <h1 className="text-3xl font-bold text-center text-teal-400 mb-6">
            {isSigningUp ? "Criar Conta" : "Bem-vindo de volta!"}
          </h1>

          <form onSubmit={handleAuth} className="space-y-4">
            {errorMessage && (
              <div className="bg-red-900 text-red-300 p-3 rounded-md text-sm">
                {errorMessage}
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-white"
                placeholder="seu.email@exemplo.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400"
              >
                Palavra-passe
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-white"
                placeholder="**********"
                required
              />
            </div>

            {!isSigningUp && (
              <div className="flex justify-between items-center text-sm">
                <a href="#" className="text-teal-400 hover:underline">
                  Esqueceu-se da palavra-passe?
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-4 py-2 bg-teal-500 hover:bg-teal-600 disabled:bg-gray-600 text-gray-900 font-bold rounded-md transition-colors duration-300"
            >
              {loading
                ? "A processar..."
                : isSigningUp
                ? "Criar Conta"
                : "Entrar"}
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-gray-400">
            {isSigningUp ? "Já tem uma conta? " : "Não tem uma conta? "}
            <button
              onClick={() => setIsSigningUp(!isSigningUp)}
              className="text-teal-400 hover:underline"
            >
              {isSigningUp ? "Entrar" : "Criar uma conta"}
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
