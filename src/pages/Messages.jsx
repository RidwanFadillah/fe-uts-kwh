import { useState } from "react";
import { getToken } from "../services/auth";
import { showToast } from "../utils/sweetalert";

export default function Messages() {
  const token = getToken();
  const [selectedChat, setSelectedChat] = useState(1);
  const [message, setMessage] = useState("");

  if (!token) {
    window.location.href = "/login";
    return null;
  }

  const chats = [
    {
      id: 1,
      name: "Admin ZeroWaste",
      lastMessage: "Terima kasih sudah berbelanja!",
      time: "10:30",
      unread: 2,
      online: true,
    },
    {
      id: 2,
      name: "Customer Service",
      lastMessage: "Ada yang bisa kami bantu?",
      time: "Kemarin",
      unread: 0,
      online: true,
    },
    {
      id: 3,
      name: "Pengrajin Local",
      lastMessage: "Produk sudah dikirim ya",
      time: "2 hari lalu",
      unread: 0,
      online: false,
    },
  ];

  const messages = [
    { id: 1, sender: "them", text: "Halo! Selamat datang di ZeroWaste", time: "09:00" },
    { id: 2, sender: "me", text: "Hai, saya mau tanya tentang produk tas daur ulang", time: "09:15" },
    { id: 3, sender: "them", text: "Tentu! Silakan, ada yang ingin ditanyakan?", time: "09:16" },
    { id: 4, sender: "me", text: "Apakah produknya tahan air?", time: "09:18" },
    { id: 5, sender: "them", text: "Ya, produk kami sudah dilapisi coating anti air jadi aman untuk digunakan saat hujan", time: "09:20" },
    { id: 6, sender: "me", text: "Oke sip, terima kasih infonya!", time: "09:25" },
    { id: 7, sender: "them", text: "Terima kasih sudah berbelanja!", time: "10:30" },
  ];

  const handleSend = () => {
    if (message.trim()) {
      showToast("Pesan terkirim", "success");
      setMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-6 py-12 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-space text-3xl font-bold text-warm-gray-900 mb-2">
            Pesan
          </h1>
          <p className="font-inter text-sm text-warm-gray-600">
            Chat dengan admin dan customer service
          </p>
        </div>

        {/* Chat Interface */}
        <div className="bg-white rounded-xl border border-warm-gray-200 overflow-hidden" style={{height: "600px"}}>
          <div className="grid grid-cols-1 md:grid-cols-3 h-full">
            {/* Chat List */}
            <div className="md:col-span-1 border-r border-warm-gray-200 overflow-y-auto">
              {/* Search */}
              <div className="p-4 border-b border-warm-gray-200">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari pesan..."
                    className="font-inter w-full pl-10 pr-4 py-2.5 border border-warm-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-600/20 focus:border-forest-600 transition-all text-sm"
                  />
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-warm-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Chats */}
              <div className="divide-y divide-warm-gray-200">
                {chats.map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => setSelectedChat(chat.id)}
                    className={`w-full p-4 hover:bg-warm-gray-50 transition-colors text-left ${
                      selectedChat === chat.id ? "bg-forest-50" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative flex-shrink-0">
                        <div className="w-12 h-12 bg-forest-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                        {chat.online && (
                          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full"></div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-inter text-sm font-medium text-warm-gray-900 truncate">
                            {chat.name}
                          </h3>
                          <span className="font-inter text-xs text-warm-gray-500 flex-shrink-0 ml-2">
                            {chat.time}
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="font-inter text-xs text-warm-gray-600 truncate">
                            {chat.lastMessage}
                          </p>
                          {chat.unread > 0 && (
                            <span className="flex-shrink-0 ml-2 w-5 h-5 bg-forest-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
                              {chat.unread}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Chat Messages */}
            <div className="md:col-span-2 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-warm-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-forest-600 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-inter text-sm font-medium text-warm-gray-900">
                      {chats.find(c => c.id === selectedChat)?.name}
                    </h3>
                    <p className="font-inter text-xs text-green-600">Online</p>
                  </div>
                </div>
                <button className="text-warm-gray-600 hover:text-warm-gray-900">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 p-6 overflow-y-auto space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`max-w-xs lg:max-w-md ${msg.sender === "me" ? "order-2" : "order-1"}`}>
                      <div className={`font-inter text-sm px-4 py-2.5 rounded-2xl ${
                        msg.sender === "me"
                          ? "bg-forest-600 text-white rounded-br-sm"
                          : "bg-warm-gray-100 text-warm-gray-900 rounded-bl-sm"
                      }`}>
                        {msg.text}
                      </div>
                      <div className={`font-inter text-xs text-warm-gray-500 mt-1 ${
                        msg.sender === "me" ? "text-right" : "text-left"
                      }`}>
                        {msg.time}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 border-t border-warm-gray-200">
                <div className="flex gap-3">
                  <button className="flex-shrink-0 w-10 h-10 text-warm-gray-600 hover:text-forest-600 transition-colors flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                    placeholder="Tulis pesan..."
                    className="flex-1 font-inter px-4 py-2.5 border border-warm-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-600/20 focus:border-forest-600 transition-all text-sm"
                  />
                  <button className="flex-shrink-0 w-10 h-10 text-warm-gray-600 hover:text-forest-600 transition-colors flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <button
                    onClick={handleSend}
                    className="flex-shrink-0 w-10 h-10 bg-forest-600 hover:bg-forest-700 text-white rounded-lg transition-colors flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
