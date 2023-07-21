import React from 'react';
import Chatbot from './chatbot';
import './App.css'; // Import your main application CSS file if you have one
import './chatbot.css'; // Import the chatbot CSS file

const App = () => {
  return (
    <div className="app-container">
      {/* Your other components and content */}
      <Chatbot />
    </div>
  );
};

export default App;
