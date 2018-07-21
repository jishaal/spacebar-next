import React from 'react';
import { Box } from 'grid-styled/emotion';
import styled from 'react-emotion';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../Header/';

export const Container = styled(Box)`
	max-width: 63rem;
`;

Container.defaultProps = {
	mx: 'auto',
	p: '1.5rem 2rem'
};

export default ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Helmet
					title={data.site.siteMetadata.title}
					meta={[
						{
							name: 'description',
							content:
								'Jishaal Kalyan is a software developer from Auckland, New Zealand. He specialises in frontend engineering, with a focus on the user experience.'
						},
						{
							name: 'keywords',
							content:
								'jishaal, kalyan, developer, engineer, frontend, react, redux, javascript'
						}
					]}
				>
					<meta
						name="google-site-verification"
						content="eCbHLmj08tnfeqtRyBwrBgLmD-f_j2T-BfXzO9xU6FI"
					/>
				</Helmet>
				<Box mb={[4, 0]}>
					<Container>
						<Header />
					</Container>
					{children}
				</Box>
			</>
		)}
	/>
);
