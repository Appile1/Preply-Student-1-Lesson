import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import CardSection from "../components/CardSection";
import type { CardProps } from "../components/Card";

// Product type from Fake Store API
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
const foodProducts: Product[] = [
  {
    id: 1,
    title: "Fresh Baguette",
    price: 2.5,
    description: "Crispy golden baguette baked fresh this morning.",
    category: "Bread",
    image: "https://picsum.photos/200/200?random=101",
  },
  {
    id: 2,
    title: "Whole Milk 1L",
    price: 1.2,
    description: "Creamy whole milk from local dairy farms.",
    category: "Dairy",
    image: "https://picsum.photos/200/200?random=102",
  },
  {
    id: 3,
    title: "Cheddar Cheese Block",
    price: 4.5,
    description: "Aged cheddar cheese with a sharp flavor.",
    category: "Dairy",
    image: "https://picsum.photos/200/200?random=103",
  },
  {
    id: 4,
    title: "Fresh Tomatoes (1kg)",
    price: 3.0,
    description: "Juicy red tomatoes perfect for salads and cooking.",
    category: "Vegetables",
    image: "https://picsum.photos/200/200?random=104",
  },
  {
    id: 5,
    title: "Organic Apples (1kg)",
    price: 3.8,
    description: "Crisp and sweet organic red apples.",
    category: "Fruits",
    image: "https://picsum.photos/200/200?random=105",
  },
  {
    id: 6,
    title: "Orange Juice 1L",
    price: 2.9,
    description: "Freshly squeezed orange juice, no added sugar.",
    category: "Beverages",
    image: "https://picsum.photos/200/200?random=106",
  },
  {
    id: 7,
    title: "Whole Wheat Bread",
    price: 2.0,
    description: "Soft and healthy whole wheat bread loaf.",
    category: "Bread",
    image: "https://picsum.photos/200/200?random=107",
  },
  {
    id: 8,
    title: "Yogurt (Pack of 4)",
    price: 3.2,
    description: "Creamy plain yogurt, probiotic-rich and healthy.",
    category: "Dairy",
    image: "https://picsum.photos/200/200?random=108",
  },
];

export default function Home() {
  const [products, setProducts] = useState<CardProps[]>([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((data: Product[]) => {
  //       // Transform API products into CardProps
  //       const items: CardProps[] = data.map((p) => ({
  //         image: p.image,
  //         title: p.title,
  //         subtitle: `$${p.price}`, // show price instead of artist
  //       }));
  //       setProducts(items);
  //     })
  //     .catch((err) => console.error("Error fetching products:", err));
  // }, []);

  return (
    <Box sx={{ flex: 1, overflowY: "auto", p: 3 }}>
      <Header />
      <Box sx={{ mt: "64px" }}>
        <CardSection title="Products" items={foodProducts} />
      </Box>
    </Box>
  );
}
