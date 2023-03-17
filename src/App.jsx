import React from 'react';

//Components
import Counter from './components/Counter';

import reactLogo from './assets/images/react.svg';
import reduxLogo from './assets/images/redux.svg';

import './style.css';

export default function App() {
  return (
    <div id="app">
      <div className="logo-wrapper">
        <img src={reactLogo} alt="React" />
        <img src={reduxLogo} alt="Redux" />
      </div>

      <h1>
        React + Redux <span className="title-lesson">Lesson</span>
      </h1>

      <Counter />
    </div>
  )
}
