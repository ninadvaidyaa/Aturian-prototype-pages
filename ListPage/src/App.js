import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ListPage from './components/ListPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Header />
        <ListPage />
        <Footer />
      </div>
    </div>
  );
}

export default App;
