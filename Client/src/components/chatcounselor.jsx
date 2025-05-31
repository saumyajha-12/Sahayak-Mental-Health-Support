// // import React, { useState, useRef, useEffect } from "react";

// const ChatWithCounselor = () => {
//   const [messages, setMessages] = useState([
//     {
//       text: "Hello! I'm here to support you. How are you feeling today?",
//       sender: "counselor",
//     },
//   ]);
//   const [message, setMessage] = useState("");
//   const messagesEndRef = useRef(null);

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSend = () => {
//     if (!message.trim()) return;

//     const newMessages = [
//       ...messages,
//       { text: message, sender: "user" },
//     ];
//     setMessages(newMessages);
//     setMessage("");

//     // Simulate counselor reply after 1.5s
//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         {
//           text: "Thank you for sharing. Would you like to talk about it more?",
//           sender: "counselor",
//         },
//       ]);
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
//       <div className="w-full max-w-2xl h-[90vh] flex flex-col border rounded-2xl shadow-lg bg-white overflow-hidden">
//         {/* Header */}
//         <div className="bg-violet-600 text-white px-6 py-4 text-xl font-semibold">
//           Chat with Counselor
//         </div>

//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 bg-gray-50">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`flex ${
//                 msg.sender === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
//                   msg.sender === "user"
//                     ? "bg-blue-600 text-white rounded-br-none"
//                     : "bg-gray-200 text-black rounded-bl-none"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             </div>
//           ))}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Input */}
//         <div className="p-3 border-t bg-white flex items-center">
//           <input
//             type="text"
//             className="flex-1 px-4 py-2 border rounded-full text-sm outline-none focus:ring-2 focus:ring-violet-400"
//             placeholder="Type your message..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           />
//           <button
//             onClick={handleSend}
//             className="ml-3 bg-violet-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatWithCounselor;


// import React, { useState, useEffect, useRef } from "react";
// // import { database } from "./firebase"; 
// // // import your firebase database

// import { database } from "../firebase";

// import { ref, push, onValue } from "firebase/database";

// const [message, setMessage] = useState("");

// <input
//   type="text"
//   value={message}
//   onChange={(e) => setMessage(e.target.value)}
//   placeholder="Type your message..."
// />

// const ChatWithCounselor = () => {
//   const [messages, setMessages] = useState([]);
//   const [message, setMessage] = useState("");
//   const messagesEndRef = useRef(null);

//   // Scroll to bottom when messages update
//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   // Listen for messages in Firebase realtime database
//   useEffect(() => {
//     const messagesRef = ref(database, "messages");
//     const unsubscribe = onValue(messagesRef, (snapshot) => {
//       const data = snapshot.val();
//       if (data) {
//         const loadedMessages = Object.values(data);
//         setMessages(loadedMessages);
//       } else {
//         setMessages([]);
//       }
//     });

//     // Cleanup listener on unmount
//     return () => unsubscribe();
//   }, []);

//   // Handle sending message
//   const handleSend = () => {
//     if (!message.trim()) return;

//     const messagesRef = ref(database, "messages");

//     // Push new user message
//     push(messagesRef, {
//       text: message,
//       sender: "user",
//       timestamp: Date.now(),
//     });

//     setMessage("");

//     // Simulate counselor reply after 1.5s and push to DB
//     setTimeout(() => {
//       push(messagesRef, {
//         text: "Thank you for sharing. Would you like to talk about it more?",
//         sender: "counselor",
//         timestamp: Date.now(),
//       });
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
//       <div className="w-full max-w-2xl h-[90vh] flex flex-col border rounded-2xl shadow-lg bg-white overflow-hidden">
//         {/* Header */}
//         <div className="bg-violet-600 text-white px-6 py-4 text-xl font-semibold">
//           Chat with Counselor
//         </div>

//         {/* Messages */}
//         <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 bg-gray-50">
//           {messages.map((msg, index) => (
//             <div
//               key={index}
//               className={`flex ${
//                 msg.sender === "user" ? "justify-end" : "justify-start"
//               }`}
//             >
//               <div
//                 className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
//                   msg.sender === "user"
//                     ? "bg-blue-600 text-white rounded-br-none"
//                     : "bg-gray-800 text-black rounded-bl-none"
//                 }`}
//               >
//                 {msg.text}
//               </div>
//             </div>
//           ))}
//           <div ref={messagesEndRef} />
//         </div>

//         {/* Input */}
//         <div className="p-3 border-t bg-white flex items-center">
//           {/* <input
//             type="text"
//             className="flex-1 px-4 py-2 border rounded-full text-sm outline-none focus:ring-2 focus:ring-violet-400"
//             placeholder="Type your message..."
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSend()}
//           /> */}

//             <input
//              type="text"
//              className="flex-1 px-4 py-2 border rounded-full text-sm outline-none focus:ring-2 focus:ring-violet-400 text-black"
//              placeholder="Type your message..."
//              value={message}
//              onChange={(e) => setMessage(e.target.value)}
//              onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             />

//           <button
//             onClick={handleSend}
//             // onChange={(e) => {
//             // console.log("Typing:", e.target.value);
//             // setMessage(e.target.value);
//             // }}

//             className="ml-3 bg-violet-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm"
//           >
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ChatWithCounselor;


import React, { useState, useEffect, useRef } from "react";
import { database } from "../firebase";
import { ref, push, onValue } from "firebase/database";

const ChatWithCounselor = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState(""); // ✅ MOVE HERE
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    const messagesRef = ref(database, "messages");
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedMessages = Object.values(data);
        setMessages(loadedMessages);
      } else {
        setMessages([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;

    const messagesRef = ref(database, "messages");

    push(messagesRef, {
      text: message,
      sender: "user",
      timestamp: Date.now(),
    });

    setMessage("");

    setTimeout(() => {
      push(messagesRef, {
        text: "Thank you for sharing. Would you like to talk about it more?",
        sender: "counselor",
        timestamp: Date.now(),
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-purple-100 flex justify-center items-center px-4">
      <div className="w-full max-w-2xl h-[90vh] flex flex-col border rounded-2xl shadow-lg bg-white overflow-hidden">
        <div className="bg-violet-600 text-white px-6 py-4 text-xl font-semibold">
          Chat with Counselor
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-gray-200 text-black rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 border-t bg-white flex items-center">
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-full text-sm outline-none focus:ring-2 focus:ring-violet-400 text-black"
            placeholder="Type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />

          <button
            onClick={handleSend}
            className="ml-3 bg-violet-600 hover:bg-pink-700 text-white px-4 py-2 rounded-full text-sm"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWithCounselor;
