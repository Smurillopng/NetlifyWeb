import { Suspense } from 'react';
import Header from './components/Header';
//import Scene3D from './components/Scene3D';
import './App.css';
import Introduction from './components/Introduction';
import GamesSection from './components/GamesSection';

function App() {
  return (
    <div className="App">
      
      <Header />
      
      <Introduction />
  
      <Suspense fallback={<div>Loading...</div>}>
        <GamesSection />
      </Suspense>
    
    </div>
  );
}

export default App;