import './App.css';
import { Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div>
        <Link to="/"></Link>
        <Link to="/home"></Link>
        <Link to="/about"></Link>
        <Link to="/contact"></Link>
      </div>
    </div >
  );
}

export default App;
