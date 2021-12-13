import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import '../../styles/select.scss';

const SelectComponent = ({ selectClassName, options, getOptionSelected }) => {
    return (
        <Select isMulti className={selectClassName} options={options} onChange={(option) => getOptionSelected(option.value)}  />
    )
};

SelectComponent.propTypes = {
    selectClassName: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired
    })),
    getOptionSelected: PropTypes.func.isRequired,
};

export default SelectComponent;