import React from 'react';
import './App.css';
import Uploader from './uploader';

const fetchTestDatas = function () {
  fetch('/api/v1/tests')
    .then(res => res.json())
    .then((response) => { console.log("Test datas response", response); })
    .catch((error) => { console.log("Error while fetching test datas", error); })
}

function App() {
  return (
    <div className="App">
      <button onClick={fetchTestDatas}>
        Fetch Test Datas
      </button>
      <Uploader />
    </div>
  );
}

export default App;
