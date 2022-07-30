import './App.css';

let name = "js"
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="blank">
      This is a div <br />
      This is a {name} variable
    </div>
    </>
  );
}

export default App;
