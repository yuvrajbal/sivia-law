import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1D2B53] text-white font-bold shadow-lg hover:bg-[#2E8B57] transition">
        <MessageCircle className="w-5 h-5" />
        <span>Chat with us</span>
      </button>
    </div>
  );
} 