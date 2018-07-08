import React from 'react';
import styled from 'react-emotion';
import { Box } from 'grid-styled/emotion';

import Layout from '../components/Layout';

const Anchor = styled('a')`
	color: ${props => props.theme.colors.blue};
	&:hover {
		text-decoration: none;
	}
`;

export default () => (
	<Layout>
		<Box color="blue" width={[1, 1, 1 / 2]}>
			<h1>
				<span role="img" aria-label="waving-hand">
					👋
				</span>{' '}
				Hi, I'm Jishaal
			</h1>
			<h3>
				Frontend Engineer, currently at <Anchor href="https://www.xero.com">Xero</Anchor>
			</h3>
			<p>
				My passion is in the space of frontend engineering and how to manage this at scale.
				I work with technologies such as React, Redux and Node.js, writing performant and maintainable JavaScript code.
			</p>
		</Box>
	</Layout>
);
