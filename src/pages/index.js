import React from 'react';
import { Box } from 'grid-styled/emotion';

import Layout from '../components/Layout';

export default () => (
	<Layout>
		<Box color="blue" width={[1, 1, 1 / 2]}>
			<h1>
				<span role="img" aria-label="waving-hand">
					👋
				</span>{' '}
				Hello, I'm Jishaal
			</h1>
			<p>
				Frontend Developer, currently at <a href="https://www.xero.com">Xero</a>
			</p>
		</Box>
	</Layout>
);
