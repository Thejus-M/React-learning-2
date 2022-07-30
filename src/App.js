import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
      <Navbar title="Textiles"/><br />
      <div className="container" >
        <TextForm area="Enter Your text"/>
      </div>
    </>
  );
}

export default App;
