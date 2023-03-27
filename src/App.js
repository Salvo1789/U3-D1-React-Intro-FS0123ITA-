import logo from './logo.svg';
import './App.css';
import React from 'react';
import lama from './lama.jpg'

function ButtonComponent(props) {
  return <button>Click here for {props.name}</button>;
}

class ImageComponent extends React.Component {
  render() {
    return <img src={this.props.url} alt ={this.props.name}></img>;
  }
}




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lama} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       <ImageComponent url = 'https://i.redd.it/j2ex7z8tyqf21.jpg' alt="random image"/>
       <ButtonComponent name="Random"/>
      </header>
    </div>
  );
}


export default App;
