import React from 'react';
import PropTypes from 'prop-types';

export default function Team({ obj }) {
  return (
    <h1>{obj.name}</h1>
  );
}

Team.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    public: PropTypes.bool,
    firebaseKey: PropTypes.string,
  }),
};

Team.defaultProps = {
  obj: {},
};
