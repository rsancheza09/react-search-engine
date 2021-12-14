import { render } from "../../setupTests";
import Search from './';

test('SearchComponent - render test', () => {
    const { getByText } = render(<Search />);
    expect(getByText('Search')).toBeInTheDocument();
});
