import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Menu } from './components/Menu';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import TemplateView from './pages/TemplateView';
import CategoryView from './pages/TemplateView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu Page={Home} />} />
        <Route path="/SearchResults" element={<Menu Page={SearchResults} />} />
        <Route path="/TemplateView" element={<Menu Page={TemplateView} />} />
        <Route path="/CategoryView" element={<Menu Page={CategoryView} />} />
      </Routes>
    </Router>
  );
}
export default App;
