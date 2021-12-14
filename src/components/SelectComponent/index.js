import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';
import '../../styles/select.scss';

const Select = ({ selectClassName, options, getOptionSelected, defaultValue }) => {
    const handleSelectChange = option => getOptionSelected(option);
    return (
        <ReactSelect
            isMulti
            className={selectClassName}
            options={options}
            onChange={handleSelectChange}
            defaultValue={defaultValue}
        />
    )
};

Select.propTypes = {
    selectClassName: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.any.isRequired,
        label: PropTypes.string.isRequired
    })),
    getOptionSelected: PropTypes.func.isRequired,
    defaultValue: PropTypes.array
};

export default Select;