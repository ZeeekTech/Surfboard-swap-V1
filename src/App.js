import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import PyzelPhantom from './images/PyzelPhantom.jpg';
import DHD3DV from './images/DHD3DV.jpg';
import Cohort1 from './images/Cohort1.jpg';
import SurfBoardProperties from './SurfBoardProperties';

const surfboards = [
  {
    name: 'Pyzel Phantom',
    image: PyzelPhantom,
    dimensions: '5\'11", 19.75", 2.5", 31L',
    rocker: 'Medium entry, Medium exit',
    concave: 'Single',
    tail: 'Squash',
    material: 'PU foam and fiberglass',
    wave: '2-6ft',
    price: '$999',
    driveAndSpeed: '5/5',
    maneuverability: '5/5',
    paddlePower: '5/5',
  },
  {
    name: 'DHD 3DV',
    image: DHD3DV,
    dimensions: '5\'11", 19.75", 2.5", 31L',
    rocker: 'Low entry, Moderate exit',
    concave: 'Single to Double',
    tail: 'Squash',
    material: 'PU foam and fiberglass',
    wave: '2-6ft',
    price: '$850',
    driveAndSpeed: '5/5',
    maneuverability: '5/5',
    paddlePower: '5/5',
  },
  
    {
    name: "Cohort I",
    image: Cohort1,
    dimensions: '5\'11" , 19.5 , 2.5 , 31L',
    rocker: 'Relaxed with flips in nose and tail',
    concave: 'M/ single to D/ concave',
    tail: 'Squash',
    material: 'PU + FutureFlex heel & toe',
    wave: '2-6ft',
    price: '$950',
    driveAndSpeed: '5/5',
    maneuverability: '5/5',
    paddlePower: '5/5',

    }
];

function App() {
  const [leftSurfboard, setLeftSurfboard] = useState(surfboards[0]);
  const [rightSurfboard, setRightSurfboard] = useState(surfboards[1]);

  function handleLeftSelectChange(event) {
    const surfboardIndex = event.target.value;
    const surfboard = surfboards[surfboardIndex];
    setLeftSurfboard(surfboard);
  }

  function handleRightSelectChange(event) {
    const surfboardIndex = event.target.value;
    const surfboard = surfboards[surfboardIndex];
    setRightSurfboard(surfboard);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">SELECT-A-SLED</h1>
      </header>
      <div className="board-selection">
        <div className="board-selection-left">
        <div className="board-container"> 
        <img className="surfboard-image" src={rightSurfboard.image} alt={rightSurfboard.name} />
        <SurfBoardProperties 
              waveHeight={rightSurfboard.wave}
              driveAndSpeed={rightSurfboard.driveAndSpeed} 
              maneuverability={rightSurfboard.maneuverability}  
              paddlePower={rightSurfboard.paddlePower} 
            />
            <div className="board-properties">
            <ul>
              <li><strong>Dimensions:</strong> {rightSurfboard.dimensions}</li>
              <li><strong>Rocker:</strong> {rightSurfboard.rocker}</li>
              <li><strong>Concave:</strong> {rightSurfboard.concave}</li>
              <li><strong>Tail:</strong> {rightSurfboard.tail}</li>
              <li><strong>Material:</strong> {rightSurfboard.material}</li>
              <li><strong>Wave:</strong> {rightSurfboard.wave}</li>
              <li><strong>Price:</strong> {rightSurfboard.price}</li>
            </ul>
            </div>
          </div>
          <div className="board-selection-controls">
            <select value={surfboards.indexOf(rightSurfboard)} onChange={handleRightSelectChange}>
              {surfboards.map((surfboard, index) => (
                <option key={index} value={index}>{surfboard.name}</option>
              ))}
            </select>
          </div>
        </div>
  
        <div className="vs-container">
          <div className="vs">VS</div>
        </div>
  
        <div className="board-selection-right">
        <div className="board-container"> 
        <img className="surfboard-image" src={leftSurfboard.image} alt={leftSurfboard.name} />
        <SurfBoardProperties 
              waveHeight={leftSurfboard.wave}
              driveAndSpeed={leftSurfboard.driveAndSpeed} 
              maneuverability={leftSurfboard.maneuverability} 
              paddlePower={leftSurfboard.paddlePower} 
            />
            <div className="board-properties">
            <ul>         
              <li><strong>Dimensions:</strong> {leftSurfboard.dimensions}</li>
              <li><strong>Rocker:</strong> {leftSurfboard.rocker}</li>
              <li><strong>Concave:</strong> {leftSurfboard.concave}</li>
              <li><strong>Tail:</strong> {leftSurfboard.tail}</li>
              <li><strong>Material:</strong> {leftSurfboard.material}</li>
              <li><strong>Wave:</strong> {leftSurfboard.wave}</li>
              <li><strong>Price:</strong> {leftSurfboard.price}</li>
            </ul>         
            </div>
          </div>
          <div className="board-selection-controls">
            <select value={surfboards.indexOf(leftSurfboard)} onChange={handleLeftSelectChange}>
              {surfboards.map((surfboard, index) => (
                <option key={index} value={index}>{surfboard.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );}


ReactDOM.render(<App />, document.getElementById('root'));
export default App;
