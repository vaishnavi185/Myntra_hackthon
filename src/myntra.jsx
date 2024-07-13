import React, { useState, useEffect } from 'react';
import './myntra.css';
import img1 from './assets/myntra-logo.png';
import img2 from './assets/chat.png';
import imgFeedback from './assets/feedback.png';
import imgHistory from './assets/history.png';
import imgVirtual from './assets/dress.png';
import img3 from './assets/birthday/img1.png';
import img4 from './assets/birthday/img2.png';
import img5 from './assets/birthday/img3.png';
import img6 from './assets/wedding/img1.png';
import img7 from './assets/wedding/img2.png';
import img8 from './assets/wedding/img3.png';
import img9 from './assets/budget/img1.png';
import img10 from './assets/budget/img2.png';
import img11 from './assets/budget/img3.png';
import img12 from './assets/footer/foot1.png';
import img13 from './assets/footer/foot2.png';
import img14 from './assets/footer/foot3.png';
import img15 from './assets/footer/foot4.png';
import { FaSun, FaMoon } from 'react-icons/fa';

function Myntra() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const storedMode = localStorage.getItem("isDarkMode");
    return storedMode ? JSON.parse(storedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className='ui'>
    <div className={`outer ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="border">
        <div className={`myntra ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
          <div className="myntra-container">
            <div className="sidebar">
              <div className="logo">
                <img src={img1} alt="Myntra" /> Myntra
              </div>
              <button className="chat-generator"><img src={img2} alt="Chat" /> Chat Generator</button>
              <div className="menu">
                <div className="menu-item">
                  <img src={imgFeedback} alt="Feedback" /> Feedback
                </div>
                <div className="menu-item1">
                  <img src={imgHistory} alt="History" /> History
                </div>
                <div className="menu-item2">
                  <img src={imgVirtual} alt="Virtual Dress Up" /> Virtual Dress Up
                </div>
              </div>
            </div>
            <div className="chat-section">
              <div className="chat-history">
                <div className="search-bar">
                  <h2>Chat history</h2>
                  <input type="text" placeholder="Search" />
                </div>
                <div className="chats">
                  <div className="chat-item">
                    <p>Birthday party dress plan</p>
                    <p>birthday party dress for girls under 3000 rupees</p>
                    <div className="images">
                      <img src={img3} alt="img1" />
                      <img src={img4} alt="img2" />
                      <img src={img5} alt="img3" />
                    </div>
                  </div>
                  <div className="chat-item">
                    <p>Wedding dress plan and budget</p>
                    <p>trending wedding lehenga for haldi</p>
                    <div className="images">
                      <img src={img6} alt="img1" />
                      <img src={img7} alt="img2" />
                      <img src={img8} alt="img3" />
                    </div>
                  </div>
                  <div className="chat-item">
                    <p>Budget dresses</p>
                    <p>show me some budget camping dress for girl</p>
                    <div className="images">
                      <img src={img9} alt="img1" />
                      <img src={img10} alt="img2" />
                      <img src={img11} alt="img3" />
                    </div>
                  </div>
                </div>
                <button className="add-chat">Add New Chat</button>
              </div>
            </div>
            <div className='box3'>
              <h2 className='chatb'>New Chat</h2>
              <div className='box4'>
                <div className='b1'></div>
                <div className='b2'></div>
                <div className='b3'></div>
                <div className='b4'></div>
                <div className='b5'></div>
              </div>
              <div className="chat-box">
                <div className="new-chat">
                  <div className="chat-inputs">
                    <div>
                      <img src={img12} alt="img1" />
                      <img src={img13} alt="img2" />
                      <img src={img14} alt="img3" />
                      <img src={img15} alt="img4" />
                    </div>
                    <div className="input-box">
                    <input type="text" placeholder="Ask me anything.." />
                    <button>Send</button>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="toggle-theme" onClick={toggleDarkMode}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Myntra;
