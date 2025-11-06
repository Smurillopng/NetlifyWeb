import { lazy, Suspense } from 'react';
import Header from './components/Header';
import Scene3D from './components/Scene3D';
import './App.css';

const ProjectSection = lazy(() => import('./components/ProjectSection'));

function App() {
  return (
    <div className="App">
      <Header />
      
      <section className="hero">
        <Scene3D />
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Creating amazing web experiences</p>
        </div>
      </section>
      
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectSection />
      </Suspense>
    </div>
  );
}

export default App;