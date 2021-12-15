import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/PageHome';
import Canal from './pages/PageCanal';
import ContentProvider from './context/content/ContentProvider';
import CanalProvider from './context/canal/CanalProvider';

function App() {

  

  return (
    <ContentProvider>
      <CanalProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="canal" element={<Canal />} />
        </Routes>
      </Router>
      </CanalProvider>
    </ContentProvider>
  );
}

export default App;
