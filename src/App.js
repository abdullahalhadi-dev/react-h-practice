import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import NavBar from './components/Navbar';

import TextForm from './components/TextForm';
import {
Routes,
Route
} from "react-router-dom";
import Contact from './components/Contact';


function App() {

 const [mode, setMode] = useState('light');

 const [alert, setAlert] = useState(null);
 const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 3000)
 }

 const toggleMode = () => {
  if(mode === 'light') {
    setMode('dark');
    document.body.style.backgroundColor = 'gray';
    showAlert('Dark Mode has been enabled', 'success');
    document.title = 'Pranto - Dark Mode';
    setInterval(() => {
      document.title = 'Pranto is Showing'
    }, 2000)
    setInterval(() => {
      document.title = 'Pranto is in the Dark Mode'
    }, 4000)
  }else {
    setMode('light')
    document.body.style.backgroundColor = 'white'
    showAlert('Light Mode has been enabled', 'success')
    document.title = 'Pranto - Light Mode';
  }
 }



  return (
    <>
      <NavBar title="Pranto" toggleMode={toggleMode} search_label = "search here" mode={mode}/>
     
      <Alert alert={alert}/>

      
      
      

<Routes>

  <Route path='/' element={<TextForm />} />

  <Route path='/about' element={<About/>} />
  <Route path='/contact' element={<Contact/>} />

</Routes>
      

        
    
      




  
    </>
  );
}

export default App;

