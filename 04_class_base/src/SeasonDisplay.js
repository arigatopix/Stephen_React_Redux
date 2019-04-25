import './SeasonDisplay.css' // webpack จัดการให้ ถึง import เข้ามาได้
import React from 'react';

const configSeason = {
  // implement แทนที่จะใช้ if/eles tenary state ก็ใช้ object แทน 
  summer : {
    text : 'Let\'s hit the beach',
    iconName : 'sun' // Show icon
  },
  winter : {
    text : 'Burr, it is chilly',
    iconName : 'snowflake'  
  }
};

const getSeason = (lat, mouth) => {
  if (mouth > 2 && mouth < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = configSeason[season];  // Destructuring

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;

/* จำว่าใน JSX ถ้าจะแทรก JavaScript จะต้องใส่ {} แล้วสามารถใช้ template string ได้ตามปรกติ */