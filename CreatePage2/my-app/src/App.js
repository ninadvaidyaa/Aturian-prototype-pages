import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import Footer from './Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="content-wrapper">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-content">
          <MainContent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
