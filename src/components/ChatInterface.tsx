import { useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { ChatInput } from "./ChatInput";
import { ProductCard } from "./ProductCard";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your shopping assistant. What kind of electronics are you looking for today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);

  const handleSend = (message: string) => {
    // Add user message
    setMessages((prev) => [
      ...prev,
      { text: message, isBot: false, timestamp: new Date() },
    ]);

    // Simulate bot response
    setTimeout(() => {
      const searchResults = products.filter((product) =>
        product.name.toLowerCase().includes(message.toLowerCase())
      );

      const botResponse = searchResults.length
        ? `I found ${searchResults.length} products that might interest you:`
        : "I couldn't find any products matching your search. Try different keywords or browse our categories.";

      setMessages((prev) => [
        ...prev,
        { text: botResponse, isBot: true, timestamp: new Date() },
      ]);

      // If products found, show them
      if (searchResults.length) {
        setMessages((prev) => [
          ...prev,
          {
            text: JSON.stringify(searchResults),
            isBot: true,
            timestamp: new Date(),
          },
        ]);
      }
    }, 1000);
  };

  const handleReset = () => {
    setMessages([
      {
        text: "Hello! I'm your shopping assistant. What kind of electronics are you looking for today?",
        isBot: true,
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <div className="flex flex-col h-screen max-w-3xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Shopping Assistant</h1>
        <Button variant="outline" size="icon" onClick={handleReset}>
          <RefreshCw className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto mb-4 space-y-4">
        {messages.map((message, index) => {
          if (message.text.startsWith("[")) {
            // This is a product list
            const products = JSON.parse(message.text);
            return (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {products.map((product: any) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            );
          }
          return (
            <ChatMessage
              key={index}
              message={message.text}
              isBot={message.isBot}
              timestamp={message.timestamp}
            />
          );
        })}
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
};