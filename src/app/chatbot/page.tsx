"use client";

import React, { useState } from "react";
import { X } from "lucide-react";
import { AiOutlineRobot } from "react-icons/ai";

export default function FloatingBotpressChat() {
  const [open, setOpen] = useState(false);

  const toggleChat = () => setOpen(!open);

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-24 right-6 z-[9999]">
        <button
          onClick={toggleChat}
          className="w-16 h-16 rounded-full bg-emerald-600 dark:bg-emerald-400 shadow-2xl flex items-center justify-center text-white text-2xl hover:scale-110 transition-transform duration-300"
          aria-label="Open AI Chat"
        >
          {open ? <X className="w-7 h-7" /> : <AiOutlineRobot className="w-8 h-8" />}
        </button>
      </div>

      {/* Chat Window Modal */}
      <div
        className={`fixed bottom-24 right-6 z-[9998] w-80 h-[500px] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col transform transition-all duration-500 ${
          open ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
        }`}
      >
        {/* Header */}
        <div className="bg-emerald-600 dark:bg-emerald-400 text-white dark:text-slate-900 px-4 py-3 flex items-center justify-between">
          <h4 className="font-semibold text-sm">Chat with AI</h4>
          <button
            onClick={toggleChat}
            className="p-1 rounded-full hover:bg-white/20 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Iframe Chat */}
        <iframe
          src="https://cdn.botpress.cloud/webchat/v3.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/11/01/07/20251101074033-ZZCR98GI.json"
          title="Botpress AI Chat"
          className="w-full h-full border-0"
        />
      </div>
    </>
  );
}
