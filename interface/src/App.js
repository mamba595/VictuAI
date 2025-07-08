import logo from './logo.svg';
import './App.css';
import './normal.css'
import { useState } from 'react';

function App() {

  const [input, setInput] = useState("");
  const [chatLog, setChatLog] = useState([{
    user: "VictuAI",
    message: "Discover the best diet for you."
  },{
    user: "me",
    message: "Give me a diet buddy"
  }]);

  function clearChat(){
    setChatLog([]);
  }

  async function handleSubmit(e) {
  e.preventDefault();

  if (!input.trim()) return; // Don't send empty messages

  // Add user's message immediately
  setChatLog(prev => [...prev, { user: "me", message: input }]);
  setInput("");

  try {
    const response = await fetch(
      "https://3b7ebe751b8f.ngrok-free.app/chat?prompt=" + encodeURIComponent(input),
      {
        method: "POST",
      }
    );

    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();

    setChatLog(prev => [
      ...prev,
      { user: "VictuAI", message: data.response || JSON.stringify(data) },
    ]);
  } catch (error) {
    console.error("API Error:", error);
    setChatLog(prev => [
      ...prev,
      { user: "VictuAI", message: "Error connecting to the API." },
    ]);
  }
}



  return (
    <div className="App">
    <aside className="SideMenu">
      <div className="SideMenuButton"
           onClick={clearChat}>
        <span>
          +
        </span>
        New Chat
      </div>
    </aside>
    <section className="Chatbox">
      <div className="ChatLog">
        {chatLog.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        <div className="ChatMessage Interface">
          <div className="ChatMessageCenter">  
            <div className="avatar Interface"></div>
            <div className="message">
            </div>
          </div>
        </div>
      </div>
      <div className="ChatInputHolder">
        <form onSubmit={handleSubmit}>
          <input 
          rows="1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="ChatInputTextArea">

          </input>
        </form>
      </div>
    </section>
    </div>
  );
}

const ChatMessage = ({message}) => {
  return (
    <div className="ChatMessage">
      <div className="ChatMessageCenter">  
        <div className={`avatar ${message.user == "VictuAI" &&
             "Interface" 
        }`}>

        </div>
        <div className="message">
              {message.message}
        </div>
      </div>
    </div>
  )
}

export default App;
