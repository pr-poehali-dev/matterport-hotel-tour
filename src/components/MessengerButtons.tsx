import { useState } from "react";
import Icon from "@/components/ui/icon";

const MessengerButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const messengers = [
    {
      name: "WhatsApp",
      icon: "MessageCircle",
      color: "bg-green-500 hover:bg-green-600",
      href: "https://wa.me/79190223316",
    },
    {
      name: "Telegram",
      icon: "Send",
      color: "bg-blue-500 hover:bg-blue-600",
      href: "https://t.me/Cap_Rizo",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end space-y-3">
        {/* Messenger buttons */}
        {isOpen && (
          <div className="flex flex-col space-y-2 animate-scale-in">
            {messengers.map((messenger, index) => (
              <a
                key={messenger.name}
                href={messenger.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${messenger.color} text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
                title={messenger.name}
              >
                <Icon name={messenger.icon} size={20} />
              </a>
            ))}
          </div>
        )}

        {/* Main toggle button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-gold hover:bg-amber-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            isOpen ? "rotate-45" : ""
          }`}
          aria-label="Открыть мессенджеры"
        >
          <Icon name={isOpen ? "X" : "MessageSquare"} size={24} />
        </button>
      </div>
    </div>
  );
};

export default MessengerButtons;
