import React, { useState, useEffect, useRef } from "react";
import "./Chatbot.css";

// Import FontAwesome React components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegram } from "@fortawesome/free-brands-svg-icons";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  const chatbot = (input) => {
    input = input.toLowerCase();
    if (input.includes("hello") || input.includes("hi")) return "Hello, nice to meet you!";
    if (input.includes("how are you")) return "I'm doing fine, thank you for asking.";
    if (input.includes("i am so sad")) return "Oh no, tell me what happened.";
    if (input.includes("i feel lonely")) return "Hey, don't feel like that. Just take a break and refresh yourself.";
    if (input.includes("stress") || input.includes("anxiety")) return "I'm sorry you're feeling this way. You're not alone—let's talk about it.";
    if (input.includes("why do i feel so sad")) return "It's okay to feel this way. You're not alone. Want to talk more about it?";
    if (input.includes("i feel empty")) return "That feeling can be really heavy. You're not broken—I'm here for you.";
    if (input.includes("what’s the point of life")) return "That’s a deep question. You're here for a reason, even if it doesn’t feel like it right now.";
    if (input.includes("no one cares about me")) return "I care about you. You matter, even if it’s hard to see right now.";
    if (input.includes("i want to give up")) return "I'm really sorry you're feeling this way. Please talk to someone you trust or a professional.";
    if (input.includes("i hate myself")) return "It’s tough feeling that way. But you are worthy of love and kindness.";
    if (input.includes("i’m tired of everything")) return "It’s okay to feel tired. Take a breath. You're not alone in this.";
    if (input.includes("will i ever get better")) return "Yes. Healing takes time, but it’s possible—and you're already on the way.";
    if (input.includes("i feel so alone")) return "You may feel alone, but you're not. I'm here with you.";

    return "Please consider talking to a mental health professional or someone you trust. You deserve support.";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, type: "user" };
    const botMessage = { text: chatbot(input), type: "bot" };

    setMessages((prev) => [...prev, userMessage]);
    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);

    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSend();
  };

  useEffect(() => {
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="container">
      <div className="title">Express yourself</div>
      <div className="chat" ref={chatRef}>
        {messages.map((msg, idx) => (
          <div className={`message ${msg.type}`} key={idx}>
            <div className="avatar" />
            <div className="text">{msg.text}</div>
          </div>
        ))}
      </div>
      <input
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type your message here..."
      />
      <button className="button" onClick={handleSend}>
        <FontAwesomeIcon icon={faTelegram} size="2x" />
      </button>
    </div>
  );
};

export default Chatbot;
