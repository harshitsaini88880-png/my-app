import React, { useState } from 'react';
import Navbar from './Navbar';
import Alert from './Alert';
import Textform from './TextForm';
// import About from './About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container my-3">
            <Textform showAlert ={showAlert}heading="Enter text" mode={mode} />
            {/* <Router>  
              <Route path="/about" element={<About />} />
              <Route path="/" element=/>} />
            {/* </Router> */}
          </div> 
        {/* </Router> */}
    </>
      // <Router>
        
  );
}

export default App;