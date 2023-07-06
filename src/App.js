import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage'; 
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
