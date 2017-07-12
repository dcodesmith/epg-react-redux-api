import React from 'react';
import PropTypes from 'prop-types';

import Grid from './Grid';
// import LogoImg from '../images/art.jpg';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const ProgrammeDetails = ({ data: programme }) => {
  const { show, genre, startTime, endTime, synopsis } = programme;
  const LogoImg = require('../images/art.jpg');

  return (
    <section className="programme-details">
      <img className="programme-details__img" src={ LogoImg } alt="Art" />
      <div className="programme-details__body">
        <h3 className="programme-details__title"> { show } </h3>
        <p>
          <span className="programme-details__time">
            { startTime } - { endTime }
          </span>
          <span className="programme-details__genre">
            Genre: { capitalizeFirstLetter(genre) }
          </span>
        </p>
        <p>{ synopsis }</p>
      </div>
    </section>
  );
};

ProgrammeDetails.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProgrammeDetails;
