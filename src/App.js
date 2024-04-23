import './App.css';
import Featured from './components/featured';
import Hero from './components/hero';
import Tour from './components/tour'
import Review from './components/review';
import Blog from './components/blog';
import Form from './components/form'

function App() {
  return (
    <div className="App overflow-x-hidden text-sm" style={{fontFamily: "lexend"}}>
      <Hero />
      <Featured />
      <Tour />
      <Review />
      <Blog />
      <Form />
    </div>
  );
}

export default App;