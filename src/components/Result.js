import './Result.css';
import React from 'react';
import PropTypes from 'prop-types';

Text.propTypes = {
  value: PropTypes.node.isRequired,
};
function Result({value}) {
  return (
    <div className="Result-container">
      <h1 className="result">{value.next || value.total}</h1>
    </div>
  );
}

export default Result;
