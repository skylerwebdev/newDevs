import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRouter from './config/AppRouter'
import Header from './components/reuseable/Header';
import Footer from './components/reuseable/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}

export default App;
