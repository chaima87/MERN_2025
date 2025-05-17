import React from 'react';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="layout">
        <Navigation />
        <MainContent />
      </div>
    </div>
  );
};

export default App;

