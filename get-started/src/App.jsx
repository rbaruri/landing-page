import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hero1 from './components/Hero1';
import Hero2 from './components/Hero2';
import Footer from './components/Footer';

function App() {
  return (
    <div className="transparent-scrollbar"> {/* Apply the custom class */}
      <Navbar />
      <Hero />
      <br></br>
      <Hero1 />
      <br></br>
      <Hero2 />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
