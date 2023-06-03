import React from 'react';


import { GiBigWave, GiSpeedometer, GiMove, GiPowerLightning } from 'react-icons/gi';

function SurfBoardProperties() {
  return (
    <div className="surfboard-properties">
      <div className="property">
        <GiBigWave className="property-icon" />
        <span className="property-value">Wave Height: 2-6ft</span>
      </div>
      <div className="property">
        <GiSpeedometer className="property-icon" />
        <span className="property-value">Drive and Speed: 5/5</span>
      </div>
      <div className="property">
        <GiMove className="property-icon" />
        <span className="property-value">Maneuverability: 5/5</span>
      </div>
      <div className="property">
        <GiPowerLightning className="property-icon" />
        <span className="property-value">Paddle Power: 5/5</span>
      </div>
    </div>
  );
}

export default SurfBoardProperties;





