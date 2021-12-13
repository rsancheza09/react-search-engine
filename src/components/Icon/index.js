import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

const Icon = ({ icon }) => {
    return (
        <FontAwesomeIcon icon={Icons[icon]} />
    );
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
};

export default Icon;