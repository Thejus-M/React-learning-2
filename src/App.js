import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="Textiles"/><br />
      {/* <div className="container" >
        <TextForm area="Enter Your text"/>
      </div> */}
      <About aboutUs="About Us"/>
    </>
  );
}

export default App;
