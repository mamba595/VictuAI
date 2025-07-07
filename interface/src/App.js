import logo from './logo.svg';
import './App.css';
import './normal.css'

function App() {
  return (
    <div className="App">
    <aside className="SideMenu">
      <div className="SideMenuButton">
        <span>
          +
        </span>
        New Chat
      </div>
    </aside>
    <section className="Chatbox">
      <div className="ChatLog">
        <div className="ChatMessage">
          <div className="avatar">
            Me
          </div>
          <div className="message">
            Hello
          </div>
        </div>
      </div>
      <div className="ChatInputHolder">
        <textarea 
          rows="1"
          className="ChatInputTextArea">

        </textarea>
      </div>
    </section>
    </div>
  );
}

export default App;
