
import './App.css';
import Weather from"./Weather"

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <Weather defaultCity="Palermo" />
        
      </header>
      <footer><a href="https://github.com/edriophthalma/weather-react.git" alt="Giulia's code">Open-source code by Giulia D'Angelo</a></footer>
      </div>
    </div>
  );
}

export default App;
