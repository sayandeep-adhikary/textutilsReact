import React, {useState} from 'react'
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message)=>{
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = "#343A40";
      document.body.classList.add("text-light");
      showAlert("success", "Dark mode has been applied");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      document.body.classList.remove("text-light");
      showAlert("success", "Light mode has been applied");
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Textform mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;