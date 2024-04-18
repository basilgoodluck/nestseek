import './App.css';
import Featured from './components/featured';
import FeaturedCard from './components/featuredCard';
import Hero from './components/hero';

function App() {
  return (
    <div className="App">
      <Hero />
      <Featured />
      <FeaturedCard />
    </div>
  );
}

export default App;
