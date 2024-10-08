import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import { createRoot } from "react-dom/client";
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('DarkMode Enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('LightMode Enabled','success');
    }
  }
  return (
    <>
    
    {/* <Router> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path='/about' element={<About/>}/> */}
          {/* <Route path='/' element={ */}
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
             {/* }/> */}
        {/* </Routes> */}
      </div>
    {/* </Router> */}
    </> 
  );
}

export default App;