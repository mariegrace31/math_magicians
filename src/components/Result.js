import './Result.css';
import React from 'react';
import PropTypes from 'prop-types';

// Text.propTypes = {
//   show: PropTypes.node.isRequired,
// };
function Result({ show }) {
  const display = `${show.total || ''} ${show.operation || ''} ${show.next || ''}`;
  return (
    <div className="Result-container">
      <h1 className="result">{display.trim()}</h1>
    </div>
  );
}
Result.propTypes = {
  show: PropTypes.shape({
    next: PropTypes.node,
    total: PropTypes.node,
    operation: PropTypes.string,
  }).isRequired,
};
export default Result;
