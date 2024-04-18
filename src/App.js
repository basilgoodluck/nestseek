import './App.css';
import Featured from './components/featured';
import Hero from './components/hero';
import Tour from './components/tour'
import ReviewCard from './components/reviewCard';

function App() {
  return (
    <div className="App">
      <Hero />
      <Featured />
      <Tour />
      <ReviewCard />
    </div>
  );
}

export default App;
