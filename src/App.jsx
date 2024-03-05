import React from 'react';
import './App.css';

function App() {

  return (
    <div className="outer_container">
      <main className="card_container">
        <img src="/qr-code/image-qr-code.png" alt="QR code" className="qr_code_container"/>

        <h1 className="main_heading">Improve your front-end skills by building projects</h1>

        <p className="description">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </main>
    </div>
  )
}

export default App;
