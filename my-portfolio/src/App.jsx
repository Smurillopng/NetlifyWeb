import Header from './components/Header';
import Scene3D from './components/Scene3D';
import ProjectSection from './components/ProjectSection';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      
      {/* Hero section with 3D background */}
      <section className="hero">
        <Scene3D />
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Creating amazing web experiences</p>
        </div>
      </section>
      
      {/* Projects with scroll animations */}
      <ProjectSection />
      
      {/* Add more sections as needed */}
    </div>
  );
}

export default App;