import React from 'react';
import ReactDOM from 'react-dom';
import Songs from './components/Songs';
import './app.css' 

const App = () => {
  return (
    <div>
      <Songs/>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById('root'));