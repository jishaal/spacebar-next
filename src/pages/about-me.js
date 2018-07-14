import React from 'react';
import { Box } from 'grid-styled/emotion';

import Layout, { Container } from '../components/Layout';

export default () => (
	<Layout>
		<Box color="blue">
			<Container>
				<h1> About me </h1>
				<Box width={[1, 1, 1 / 2]} py={[1, 2, 3]}>
					<p>I’m a Senior Frontend Engineer at Xero.</p>
					<p>
						Nulla nec lacus massa. In suscipit malesuada quam, et vulputate mi sodales
						ut. Nullam orci libero, ultricies tempus metus sed, consectetur semper
						ipsum. Suspendisse dapibus diam et mauris interdum scelerisque. Nullam
						bibendum nisi neque, a consectetur mi commodo sed. Ut ut lorem auctor,
						rutrum orci at, tincidunt nisl. Etiam interdum molestie dignissim. Donec
						viverra nisi quis sem interdum suscipit. Sed quis sem maximus, placerat sem
						ac, condimentum magna.
					</p>
				</Box>
			</Container>
		</Box>
	</Layout>
);
