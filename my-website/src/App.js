import React, { Component } from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar} from './components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
    );
  }
}

export default App;
