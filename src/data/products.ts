export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Noise-Cancelling Headphones",
    description: "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
    price: 299.99,
    category: "Electronics",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    name: "4K Smart TV - 55\"",
    description: "Ultra HD Smart TV with HDR and built-in streaming apps.",
    price: 699.99,
    category: "Electronics",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    name: "Professional Camera Kit",
    description: "24MP mirrorless camera with two lenses and carrying case.",
    price: 1299.99,
    category: "Electronics",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    name: "Gaming Laptop",
    description: "High-performance gaming laptop with RTX graphics and 144Hz display.",
    price: 1499.99,
    category: "Electronics",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    name: "Smartwatch",
    description: "Fitness tracking smartwatch with heart rate monitor and GPS.",
    price: 199.99,
    category: "Electronics",
    image: "/placeholder.svg",
  },
];