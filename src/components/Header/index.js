import React from 'react';
import { Link } from 'gatsby';

import styled, { css } from 'react-emotion';

const ListLink = props => (
	<li
		className={css`
			margin-right: 1rem;
		`}
	>
		<Link to={props.to}>{props.children}</Link>
	</li>
);

const Header = styled.header`
	display: flex;
`;

export default () => (
	<Header>
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
			<li
				className={css`
					margin-right: 1rem;
				`}
			>
				<a href="https://medium.com/@jishaal">Blog</a>
			</li>
			<li
				className={css`
					margin-right: 1rem;
				`}
			>
				<a href="https://github.com/jishaal" rel="noopener">
					Github
				</a>
			</li>
		</ul>
	</Header>
);
