import React from 'react';
import styled, { css } from 'react-emotion';
import { Box, Flex } from 'grid-styled/emotion';

import Layout, { Container } from '../components/Layout';
import Medium from '../components/Medium';
import SocialMediaBlock from '../components/SocialMediaBlock';

import me from '../../assets/me.png';

const Anchor = styled('a')`
	color: ${props => props.theme.colors.blue};
	&:hover {
		text-decoration: none;
	}
`;

export default () => (
	<Layout>
		<Box color="blue">
			<Container>
				<Flex flexWrap="wrap" alignItems="center">
					<Box width={[1, 2 / 3, 1 / 2]} py={[1, 2, 5]}>
						<h1>
							Hi, I'm Jishaal{' '}
							<span role="img" aria-label="waving-hand">
								👋
							</span>{' '}
						</h1>
						<h3>
							Frontend Developer, currently @<Anchor href="https://www.xero.com">
								Xero
							</Anchor>
						</h3>
						<p>
							I work with technologies such as <strong>React</strong>,{' '}
							<strong>Redux</strong> and <strong>Node.js</strong>, writing performant
							and maintainable <strong>JavaScript</strong> code.
						</p>
					</Box>
					<Box ml="auto">
						<img
							src={me}
							alt="image of jishaal"
							className={css`
								max-width: 13rem;
								margin-bottom: 0;
								display: block;
							`}
						/>
					</Box>
				</Flex>
			</Container>
		</Box>
		<Box bg="blue" color="white">
			<Container>
				<Medium />
			</Container>
		</Box>
		<Container>
			<Flex justifyContent="center">
				<SocialMediaBlock />
			</Flex>
		</Container>
	</Layout>
);
