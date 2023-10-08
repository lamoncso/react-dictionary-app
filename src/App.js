import logo from './logo_with_text.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className='container'>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="happiness"/>
      </main>
      <footer><small>
        Coded by Monika Lauko.
      </small></footer>
    </div>
    </div>
  );
}

