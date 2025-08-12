export interface User {
  id: string;
  email: string;
  name?: string;
}

export interface Message {
  id: string;
  text: string;
  timestamp: string;
  userId: string;
}

export interface Plan {
  name: string;
  description: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonAction: () => void;
}

export interface SuperHero {
  name: string;
  power: string;
  color: string;
  className?: string;
}
