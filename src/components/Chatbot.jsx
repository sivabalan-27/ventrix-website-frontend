
import { useEffect, useRef, useState } from "react";
import {
  Bot,
  MessageCircle,
  X,
  Send,
  Sparkles,
  User,
  LoaderCircle,
  Trash2,
} from "lucide-react";

import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const suggestions = [
  "What services do you offer?",
  "Tell me about your products",
  "How can I contact Ventrix?",
];

const initialMessage = {
  role: "assistant",
  content:
    "Hello! Welcome to Ventrix Technologies. I'm your AI assistant. How can I help you today?",
};

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([initialMessage]);

  // Stores successful conversation messages for Gemini
  const [conversationHistory, setConversationHistory] = useState([]);

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, isLoading]);

  const sendMessage = async (text) => {
    const message = text.trim();

    if (!message || isLoading) return;

    setInput("");

    setMessages((prev) => [
      ...prev,
      { role: "user", content: message },
    ]);

    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          history: conversationHistory.slice(-10),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Unable to get a response. Please try again."
        );
      }

      if (!data.reply || typeof data.reply !== "string") {
        throw new Error("Invalid response received from the AI.");
      }

      // Save successful user and assistant messages
      setConversationHistory((prev) =>
        [
          ...prev,
          { role: "user", text: message },
          { role: "model", text: data.reply },
        ].slice(-10)
      );

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm unable to connect right now. Please try again in a moment.",
        },
      ]);

      console.error("Chatbot error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  const clearConversation = () => {
    if (isLoading) return;

    setMessages([initialMessage]);
    setConversationHistory([]);
    setInput("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        aria-expanded={isOpen}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/30 bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.45)]"
      >
        {isOpen ? (
          <X size={25} />
        ) : (
          <MessageCircle size={25} />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 z-50 flex h-[min(500px,calc(100dvh-130px))] w-[calc(100%-32px)] max-w-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#080F1E] shadow-[0_20px_80px_rgba(0,0,0,0.55)] sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-[#0D192B] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
                  <Bot size={23} />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Ventrix AI Assistant
                  </h3>

                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-xs text-slate-400">
                      Here to help you
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={clearConversation}
                  disabled={isLoading || messages.length === 1}
                  aria-label="Clear conversation"
                  title="Clear conversation"
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <Trash2 size={17} />
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                  className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                >
                  <X size={19} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-5 overflow-y-auto px-4 py-5">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-2.5 ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-cyan-400">
                      <Bot size={17} />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] break-words rounded-2xl px-4 py-3 text-sm leading-6 ${
                      message.role === "user"
                        ? "whitespace-pre-wrap rounded-br-sm bg-gradient-to-br from-blue-600 to-blue-500 text-white"
                        : "rounded-bl-sm border border-white/10 bg-[#111E31] text-slate-200"
                    }`}
                  >
                    {message.role === "assistant" ? (
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ ...props }) => (
                            <p className="mb-2 last:mb-0" {...props} />
                          ),

                          strong: ({ ...props }) => (
                            <strong
                              className="font-semibold text-white"
                              {...props}
                            />
                          ),

                          ul: ({ ...props }) => (
                            <ul
                              className="my-2 list-disc space-y-1 pl-5"
                              {...props}
                            />
                          ),

                          ol: ({ ...props }) => (
                            <ol
                              className="my-2 list-decimal space-y-1 pl-5"
                              {...props}
                            />
                          ),

                          li: ({ ...props }) => (
                            <li className="pl-1" {...props} />
                          ),

                          h1: ({ ...props }) => (
                            <h1
                              className="mb-2 text-base font-bold text-white"
                              {...props}
                            />
                          ),

                          h2: ({ ...props }) => (
                            <h2
                              className="mb-2 text-sm font-bold text-white"
                              {...props}
                            />
                          ),

                          h3: ({ ...props }) => (
                            <h3
                              className="mb-2 text-sm font-semibold text-white"
                              {...props}
                            />
                          ),

                          a: ({ ...props }) => (
                            <a
                              {...props}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-cyan-400 underline hover:text-cyan-300"
                            />
                          ),

                          code: ({ ...props }) => (
                            <code
                              className="rounded bg-black/30 px-1.5 py-0.5 text-cyan-300"
                              {...props}
                            />
                          ),
                        }}
                      >
                        {message.content}
                      </ReactMarkdown>
                    ) : (
                      message.content
                    )}
                  </div>

                  {message.role === "user" && (
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-400">
                      <User size={17} />
                    </div>
                  )}
                </div>
              ))}

              {/* Loading Indicator */}
              {isLoading && (
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/15 text-cyan-400">
                    <Bot size={17} />
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl rounded-bl-sm border border-white/10 bg-[#111E31] px-4 py-3 text-sm text-slate-400">
                    <LoaderCircle
                      size={15}
                      className="animate-spin text-cyan-400"
                    />
                    Thinking...
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {messages.length === 1 && (
              <div className="space-y-2 px-4 pb-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Sparkles size={13} className="text-cyan-400" />
                  Suggested questions
                </div>

                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => sendMessage(suggestion)}
                    disabled={isLoading}
                    className="block w-full rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2.5 text-left text-xs text-slate-300 transition hover:border-cyan-400/40 hover:bg-cyan-400/5 hover:text-cyan-300 disabled:opacity-50"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className="border-t border-white/10 bg-[#0B1525] p-4"
            >
              <div className="flex items-end gap-2 rounded-xl border border-white/10 bg-[#111E31] p-2 transition focus-within:border-cyan-400/50">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSubmit(e);
                    }
                  }}
                  placeholder="Ask me anything..."
                  rows={1}
                  maxLength={1000}
                  disabled={isLoading}
                  className="max-h-24 min-h-[38px] flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white outline-none placeholder:text-slate-500 disabled:opacity-50"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <Send size={16} />
                </button>
              </div>

              <p className="mt-2 text-center text-[10px] text-slate-500">
                Powered by Gemini AI · Ventrix Technologies
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Chatbot;

