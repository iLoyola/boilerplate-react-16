import React from 'react';
import { shallow } from 'enzyme';

import DashboardPage from '../../pages/DashboardPage';

test( 'Should render the Expense Dashboard Page', () => {
	const wrapper = shallow( <DashboardPage /> );
	expect( wrapper ).toMatchSnapshot();
});