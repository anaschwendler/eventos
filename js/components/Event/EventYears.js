import React from 'react';
import ReactDOM from 'react-dom';

let EventYears = ({events, selectedYear, selectYear}) => {
  let getYears = (events) => {
    // uniq
    let obj = {};
    events.map(event => event.formattedYear).forEach(year => obj[year] = year);
    let years = [];
    for (var i in obj) {
      years.push(obj[i]);
    }
    return years.sort((e1, e2) => parseInt(e2) - parseInt(e1));
  }

  let yearsButtons = getYears(events).map((year, index) => {
    return (
      <div key={index}>
        <button className={"pure-button " + (selectedYear === year ? 'pure-button-disabled' : '')} type="button" onClick={() => selectYear(year)}>{year}</button>
      </div>
    )
  });

  return (
    <div className="year-list">
      {yearsButtons}
    </div>
  );
}

export default EventYears;
