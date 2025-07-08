import { X, MessageCircle, MessageSquareText } from "lucide-react";
import { useState } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: '¡Hola! ¿Como puedo ayudarte?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:11434/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'llama3', 
          messages: [...messages, userMessage],
          stream: false,
        }),
      });

      const data = await response.json();
      const assistantMessage = {
        role: 'assistant',
        content: data.message.content,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error('Error contactando Ollama:', err);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div>
      {/* Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full shadow-lg z-40"
          title="Chat with Assistant"
        >
          <MessageCircle size={20} />
        </button>
    )}

      {/* Right Sidebar Panel */}
      {isOpen && (
        <aside className="w-96 h-full bg-white border-l z-50 shadow-lg flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <MessageSquareText />
            <h2 className="text-lg font-semibold">Asistente virtual</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-black transition"
            >
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          
            {/* TODO: Render more messages here */}
            <div className="flex-1 p-4 overflow-y-auto text-sm text-gray-700 space-y-2">
              {messages.map((msg, index) => (
                <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block px-3 py-2 w-fit rounded p-2 self-start max-w-[80%] ${msg.role === 'user' ? 'bg-green-600 text-white' : 'bg-gray-100 text-black'}`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && <div className="text-gray-500">Pensando...</div>}
            </div>

          {/* Chat Input */}
          <div className="border-t p-3 flex gap-2">
            <input
              type="text"
              value={input}
              placeholder="Escribe tu mensaje aqui..."
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
              onClick={sendMessage}>
              Send
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}
export default Chatbot;