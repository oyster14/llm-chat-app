import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [waiting, setWaiting] = useState(false);
  const messagesEndRef = useRef(null);

  const prevInputRef = useRef([]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessages([...messages, { text: input, isUser: true }]);
    setInput("");
    setWaiting(true);

    // console.log(prevInputRef.current);

    const text_input = JSON.stringify([
      "[start of prompt:]",
      "<s>[INST] <<SYS>>",
      "You are a helpful, respectful and honest assistant. Always answer as helpfully as possible, while being safe.  Your answers should not include any harmful, unethical, racist, sexist, toxic, dangerous, or illegal content. Please ensure that your responses are socially unbiased and positive in nature.",
      "If a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.",
      "Please converse with me in a conversational tone, because we're chatting.",
      // "You may use previous conversation to answer current conversation",
      "<</SYS>>",
      // "[start of previous conversation:]",
      // ...prevInputRef.current,
      // "[end of previous conversation]",
      "[start of current conversation:]",
      input,
      "[end of current conversation]",
      "[/INST]",
      "[end of prompt]",
    ]);

    const payload = {
      text_input: text_input,
      max_tokens: 1000,
      bad_words: [],
      stop_words: [],
      pad_id: 2,
      end_id: 2,
    };

    const startTime = Date.now();
    const response = await axios.post(
      `${process.env.REACT_APP_LLM_SERVICE_URL}`,
      // "/v2/models/ensemble/generate"
      payload
    );

    prevInputRef.current.push(input);

    const endTime = Date.now();
    const responseTime = endTime - startTime;
    console.log(`response time: ${responseTime}ms`);

    // console.log(response.data.text_output);
    // console.log(JSON.stringify(response.data.text_output, null, 2));

    // prevInputRef.current.push(response.data.text_output);

    setMessages([
      ...messages,
      { text: input, isUser: true },
      { text: response.data.text_output, isUser: false },
    ]);
    setWaiting(false);
  };

  return (
    <div className="chat-container">
      <div className="chat-header">LLM Chatbot Demo</div>
      <div className="chat-window">
        <div className="message-list">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.isUser ? "user" : "bot"}`}
              style={{ whiteSpace: "pre-wrap" }}
            >
              {message.text.trimStart()}
            </div>
          ))}
          {waiting && (
            <div className="waiting-message">Waiting for response...</div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <form className="input-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="input-field"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit" className="send-button">
            <svg className="send-icon" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
