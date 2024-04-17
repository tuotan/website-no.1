import React from 'react';

import { Blog, Features, Footer, GPT, Header, Possibility } from './containers';
import { Brand, CTA, Navigationbar } from './components';
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