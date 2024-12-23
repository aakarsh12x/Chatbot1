import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: Date;
}

export const ChatMessage = ({ message, isBot, timestamp }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full mb-4 animate-slideIn",
        isBot ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] rounded-lg p-4",
          isBot
            ? "bg-secondary text-secondary-foreground"
            : "bg-primary text-primary-foreground"
        )}
      >
        <p className="text-sm md:text-base">{message}</p>
        <span className="text-xs opacity-70 mt-1 block">
          {timestamp.toLocaleTimeString()}
        </span>
      </div>
    </div>
  );
};