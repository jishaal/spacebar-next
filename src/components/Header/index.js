import React from 'react';
import { Link } from 'gatsby';
import { css } from 'react-emotion';
import { Flex } from 'grid-styled/emotion';

import logo from '../../../assets/svgs/logo.svg';

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
	<Header display="flex">
		<Link
			to="/"
			className={css`
				text-shadow: none;
				background-image: none;
				flex-grow: 1;
			`}
		>
			<img
				src={logo}
				className={css`
					max-width: 200px;
					margin-bottom: 0;
				`}
			/>
		</Link>
		<ul
			className={css`
				display: flex;
				list-style: none;
			`}
		>
			<ListLink to="/contact/">Contact</ListLink>
			<ListLink to="/blog/">Blog</ListLink>
			<li>
				<a href="https://github.com/jishaal" rel="noopener">
					Github
				</a>
			</li>
		</ul>
	</Header>
);
