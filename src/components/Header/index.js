import React from 'react';
import { Link } from 'gatsby';
import { css } from 'react-emotion';
import { Box, Flex } from 'grid-styled/emotion';

const mr = css`
	margin-right: 1rem;
`;

const ListLink = props => (
	<li className={mr}>
		<Link to={props.to}>{props.children}</Link>
	</li>
);

const Header = Flex.withComponent('header');

export default () => (
	<Box mb={50}>
		<Header display="flex">
			<Link
				to="/"
				className={css`
					text-shadow: none;
					background-image: none;
					position: static;
					top: 10px;
					left: 20px;
					flex-grow: 1;
				`}
			>
				<h3>Spacebar</h3>
			</Link>
			<ul
				className={css`
					display: flex;
					list-style: none;
					justify-content: center;
				`}
			>
				<ListLink to="/contact/">Contact</ListLink>
				<li className={mr}>
					<a href="https://medium.com/@jishaal">Blog</a>
				</li>
				<li>
					<a href="https://github.com/jishaal" rel="noopener">
						Github
					</a>
				</li>
			</ul>
		</Header>
	</Box>
);
