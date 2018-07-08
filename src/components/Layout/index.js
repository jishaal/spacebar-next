import React from 'react';
import { Box } from 'grid-styled/emotion';

import Header from '../Header/';

export default ({ children }) => (
	<Box margin="0 auto" p="1.5rem 2rem">
		<Header />
		{children}
	</Box>
);
