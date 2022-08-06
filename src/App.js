import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('dark');

  const toggleMode=()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }else{
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(0, 17, 17)';
      document.body.style.color = 'rgb(99, 99, 100)';
    } 

  }
  return (
    <>
      <Navbar title="Textiles" mode={mode} toggleMode={toggleMode}/><br />
      <div className="container" >
        <TextForm area="Enter Your text" mode={mode}/>
      </div>
      <About aboutUs="About Us"/>
    </>
  );
}

export default App;
