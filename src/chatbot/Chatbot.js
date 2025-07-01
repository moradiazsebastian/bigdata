import React, { useState } from 'react';

export default function ChatBot() {
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
          model: 'llama3', // Change this to your model name
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
    <div className="w-full max-w-md mx-auto rounded-lg p-4 bg-white">
      <h2 className="text-xl font-bold mb-4">Ayudante en línea</h2>
      <div className="h-[40vw] overflow-y-auto border p-2 mb-2 bg-gray-50 rounded">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block px-3 py-2 rounded w-fit ${msg.role === 'user' ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}>
              {msg.content}
            </div>
          </div>
        ))}
        {loading && <div className="text-gray-500">Pensando...</div>}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          className="flex-1 border rounded-l px-3 py-2"
          placeholder="Escribe tu mensaje aqui..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-green-600 text-white px-4 py-2 rounded-r">
          Enviar
        </button>
      </div>
    </div>
  );
}