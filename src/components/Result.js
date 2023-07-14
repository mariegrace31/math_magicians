import './Result.css';
import React from 'react';
import PropTypes from 'prop-types';

// Text.propTypes = {
//   show: PropTypes.node.isRequired,
// };
function Result({ show }) {
  return (
    <div className="Result-container">
      <h1 className="result">{show.next || show.total}</h1>
    </div>
  );
}
Result.propTypes = {
  show: PropTypes.shape({
    next: PropTypes.node,
    total: PropTypes.node,
  }).isRequired,
};
export default Result;
