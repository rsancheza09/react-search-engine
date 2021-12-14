import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Select from '.';

const initialProps = {
    selectClassName: 'class',
    options: [{label: 'Option1', value: 'Option1'}, {label: 'Option2', value: 'Option2'}],
    onChange: jest.fn(),
    defaultValue: [{label: 'Option1', value: 'Option1'}]
};

test('select component - rendered', () => {
    const { getByText } = render(<Select isMulti className={initialProps.selectClassName} options={initialProps.options} getOptionSelected={initialProps.onChange} />);

    expect(getByText('Select...')).toBeInTheDocument()
});

test('select component - set default value', () => {
    const { getByText } = render(<Select isMulti className={initialProps.selectClassName} options={initialProps.options} getOptionSelected={initialProps.onChange} defaultValue={initialProps.defaultValue} />);

    expect(getByText(initialProps.defaultValue[0].label)).toBeInTheDocument()
});
