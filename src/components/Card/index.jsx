// react libraries
import * as React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// styles
import './Card.scss';

const Card = ({ classes, children }) => {
  const getClasses = classes ? `card card__${classes}` : 'card';
  return (
    <div
      className={getClasses}
    >
      { children }
    </div>
)}

Card.propTypes = {
  classes: PropTypes.string,
  children: PropTypes.array,
}

export default Card;
