"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { useAuth } from "@/hooks/Auth/useAuth/useAuth";
import { Message } from "@/types";

export default function Dashboard() {
  const { user, signOut, loading: authLoading } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
      return;
    }

    if (user) {
      const savedMessages = localStorage.getItem(`messages_${user.id}`);
      if (savedMessages) {
        setMessages(JSON.parse(savedMessages));
      }
      setLoading(false);
    }
  }, [user, authLoading, router]);

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || newMessage.trim() === "") return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      timestamp: new Date().toISOString(),
      userId: user.id,
    };

    const updatedMessages = [...messages, message];
    setMessages(updatedMessages);
    localStorage.setItem(
      `messages_${user.id}`,
      JSON.stringify(updatedMessages)
    );
    setNewMessage("");
  };

  if (authLoading || loading) {
    return (
      <div className="d-flex justify-content-center align-items-center bg-dark-custom text-teal">
        <div className="text-center">
          <div className="spinner-border text-teal mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h3>A carregar dashboard...</h3>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />

      <main
        className="bg-dark-custom text-light"
        style={{ paddingTop: "80px", minHeight: "100vh" }}
      >
        <div className="container py-5">
          <div className="card bg-dark-secondary border-0 shadow-lg">
            <div className="card-body p-5">
              <h1 className="display-4 fw-bold text-teal mb-4">
                Bem-vindo ao seu Dashboard!
              </h1>
              <p className="fs-5 text-light">
                Olá,{" "}
                <span className="fw-bold text-white">
                  {user.name || user.email}
                </span>
                !
              </p>
              <p className="text-muted">
                Este é o espaço onde a magia acontece. Aqui poderá fazer upload
                dos seus dados e iniciar a análise com a nossa equipa de
                agentes.
              </p>

              {/* Stats Cards */}
              <div className="row g-4 my-4">
                <div className="col-lg-4">
                  <div className="card bg-dark-tertiary border-0 border-start border-info">
                    <div className="card-body">
                      <h5 className="card-title text-white">
                        Análises Realizadas
                      </h5>
                      <h2 className="display-4 fw-bold text-info">0</h2>
                      <small className="text-muted">Este mês</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card bg-dark-tertiary border-0 border-start border-primary">
                    <div className="card-body">
                      <h5 className="card-title text-white">
                        Datasets Carregados
                      </h5>
                      <h2 className="display-4 fw-bold text-primary">0</h2>
                      <small className="text-muted">Total</small>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card bg-dark-tertiary border-start border-4 border-warning">
                    <div className="card-body">
                      <h5 className="card-title text-white">
                        Relatórios Gerados
                      </h5>
                      <h2 className="display-4 fw-bold text-warning">0</h2>
                      <small className="text-muted">Últimos 30 dias</small>
                    </div>
                  </div>
                </div>
              </div>

              {/* Messages Section */}
              <div className="mt-5">
                <h3 className="fw-bold text-white mb-4">Centro de Mensagens</h3>
                <div
                  className="card bg-dark-tertiary border-0 mb-3"
                  style={{ height: "300px", overflowY: "auto" }}
                >
                  <div className="card-body">
                    {messages.length === 0 ? (
                      <div className="d-flex align-items-center justify-content-center h-100">
                        <p className="text-muted fst-italic text-center">
                          Ainda não tem mensagens. Envie uma para começar!
                        </p>
                      </div>
                    ) : (
                      messages.map((msg) => (
                        <div
                          key={msg.id}
                          className="card bg-dark mb-3 border-start border-4 border-info"
                        >
                          <div className="card-body">
                            <p className="card-text text-light">{msg.text}</p>
                            <small className="text-muted">
                              {new Date(msg.timestamp).toLocaleString("pt-PT")}
                            </small>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                <form onSubmit={handleSendMessage}>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-dark-tertiary border-0 text-light"
                      placeholder="Escreva uma mensagem..."
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button className="btn btn-teal" type="submit">
                      <i className="bi bi-send"></i> Enviar
                    </button>
                  </div>
                </form>
              </div>

              {/* Quick Actions */}
              <div className="mt-5">
                <h3 className="fw-bold text-white mb-4">Acções Rápidas</h3>
                <div className="row g-3">
                  <div className="col-lg-3 col-md-6">
                    <div className="card bg-dark-tertiary border-0 h-100 text-center">
                      <div className="card-body d-flex flex-column justify-content-center">
                        <div className="fs-1 mb-3">📊</div>
                        <h6 className="card-title text-white">Nova Análise</h6>
                        <p className="card-text text-muted small">
                          Carregar dados
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="card bg-dark-tertiary border-0 h-100 text-center">
                      <div className="card-body d-flex flex-column justify-content-center">
                        <div className="fs-1 mb-3">📈</div>
                        <h6 className="card-title text-white">Relatórios</h6>
                        <p className="card-text text-muted small">
                          Ver histórico
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="card bg-dark-tertiary border-0 h-100 text-center">
                      <div className="card-body d-flex flex-column justify-content-center">
                        <div className="fs-1 mb-3">🤖</div>
                        <h6 className="card-title text-white">Agentes IA</h6>
                        <p className="card-text text-muted small">Configurar</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                    <div className="card bg-dark-tertiary border-0 h-100 text-center">
                      <div className="card-body d-flex flex-column justify-content-center">
                        <div className="fs-1 mb-3">⚙️</div>
                        <h6 className="card-title text-white">Configurações</h6>
                        <p className="card-text text-muted small">
                          Perfil & conta
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
