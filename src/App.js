import React from 'react';
import Nav from './components/nav';
import './App.css';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
        <div className="container">
          <Nav />
          <br/>
          <Footer />
        </div>
    </div>
  );
}

export default App;
