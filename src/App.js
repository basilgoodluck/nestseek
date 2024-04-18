import './App.css';
import Featured from './components/featured';
import Hero from './components/hero';
import Tour from './components/tour'
import Review from './components/review';
import Blog from './components/blog';

function App() {
  return (
    <div className="App">
      <Hero />
      <Featured />
      <Tour />
      <Review />
      <Blog />
    </div>
  );
}

export default App;
