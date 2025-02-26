import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";
import "@copilotkit/react-ui/styles.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <CopilotKit publicApiKey="ck_pub_7cd8774cb7264979bbdfdc94cf0f1c3f">
          <CopilotSidebar
            labels={{
              title: "Sidebar Assistant",
              initial: "How can I help you today?"
            }}
            instructions="Your product deserves an AI sidekick"
          />
        </CopilotKit>
    </div>
  );
}

export default App;
