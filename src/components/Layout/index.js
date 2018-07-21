import React from 'react';
import { Box } from 'grid-styled/emotion';
import styled from 'react-emotion';

import Header from '../Header/';

export const Container = styled(Box)`
	max-width: 63rem;
`;

Container.defaultProps = {
	mx: 'auto',
	p: '1.5rem 2rem'
};

export default ({ children }) => (
	<Box mb="2.75rem">
		<Container>
			<Header />
		</Container>
		{children}
	</Box>
);
