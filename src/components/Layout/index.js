import React from 'react';
import { Box } from 'grid-styled/emotion';
import { css } from 'react-emotion';

import Header from '../Header/';

export const Container = ({ children }) => (
	<Box
		m="0 auto"
		p="1.5rem 2rem"
		className={css`
			max-width: 63rem;
		`}
	>
		{children}
	</Box>
);

export default ({ children }) => (
	<Box mb="2.75rem">
		<Container>
			<Header />
		</Container>
		{children}
	</Box>
);
