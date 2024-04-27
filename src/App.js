import React from 'react';

import { Footer, Blog, Possibility, Features, GPT, Header } from './containers';
import { CTA, Brand, Navigationbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navigationbar />
        <Header />
      </div>
      <Brand />
      <GPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App