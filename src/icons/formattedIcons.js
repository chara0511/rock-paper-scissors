import React from 'react';
import PropTypes from 'prop-types';
import IconPaper from './iconPaper';
import IconScissor from './iconScissor';
import IconRock from './iconRock';

const FormattedIcons = ({ name }) => {
  switch (name) {
    case 'paper':
      return <IconPaper />;

    case 'scissor':
      return <IconScissor />;

    case 'rock':
      return <IconRock />;

    default:
      return null;
  }
};

FormattedIcons.propTypes = {
  name: PropTypes.string.isRequired,
};

export default FormattedIcons;
