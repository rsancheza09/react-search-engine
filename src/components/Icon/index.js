import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types';

const Icon = ({ icon, className }) => {
    return (
        <FontAwesomeIcon icon={Icons[icon]} className={className} />
    );
};

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
};

export default Icon;