import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";

export interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const MOCK_USERS = [
  {
    id: "1",
    email: "admin@insightflow.com",
    password: "admin123",
    name: "Administrador",
  },
  {
    id: "2",
    email: "demo@insightflow.com",
    password: "demo123",
    name: "Utilizador Demo",
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("insightflow_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Erro ao carregar utilizador:", error);
        localStorage.removeItem("insightflow_user");
      }
    }
    setLoading(false);
  }, []);

  const signIn = async (email: string, password: string): Promise<void> => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const foundUser = MOCK_USERS.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      setLoading(false);
      throw new Error("Credenciais inválidas");
    }

    const userToStore: User = {
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
    };

    setUser(userToStore);
    localStorage.setItem("insightflow_user", JSON.stringify(userToStore));
    setLoading(false);
  };

  const signUp = async (email: string, password: string): Promise<void> => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const existingUser = MOCK_USERS.find((u) => u.email === email);
    if (existingUser) {
      setLoading(false);
      throw new Error("Este email já está registado");
    }

    if (password.length < 6) {
      setLoading(false);
      throw new Error("A palavra-passe deve ter pelo menos 6 caracteres");
    }

    const newUser = {
      id: Date.now().toString(),
      email,
      password,
      name: email.split("@")[0],
    };

    MOCK_USERS.push(newUser);
    setLoading(false);
  };

  const signOut = async (): Promise<void> => {
    setUser(null);
    localStorage.removeItem("insightflow_user");
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
}
