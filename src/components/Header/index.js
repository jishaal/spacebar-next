import React from 'react';
import { Link } from 'gatsby';
import { css } from 'react-emotion';
import { Flex } from 'grid-styled/emotion';
import { withTheme } from 'emotion-theming';

import logo from '../../../assets/svgs/logo.svg';

const ListLink = props => (
	<li>
		<Link to={props.to}>{props.children}</Link>
	</li>
);

const ListExternalLink = props => (
	<li>
		<a href={props.to} rel="noopener">
			{props.children}
		</a>
	</li>
);

const Header = Flex.withComponent('header');

const NavHeader = props => (
	<Header
		display="flex"
		className={css`
			font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
				'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
			align-items: center;
		`}
	>
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
				margin-bottom: 0;
				li {
					margin-right: 1em;
					margin-bottom: 0;
					&:last-child {
						margin-right: 0;
					}
				}
				a {
					display: block;
					border: 2px solid ${props.theme.colors.blue};
					color: ${props.theme.colors.blue};
					text-decoration: none;
					padding: 0.25rem 0.5rem;
					font-weight: 500;
					transition: background-color 0.3s ease, color 0.3s ease;
				}

				a:hover {
					background-color: ${props.theme.colors.blue};
					color: white;
				}
			`}
		>
			<ListLink to="/about-me/">About Me</ListLink>
			<ListExternalLink to="https://medium.com/@jishaal/latest">Medium</ListExternalLink>
			<ListExternalLink to="https://github.com/jishaal">Github</ListExternalLink>
		</ul>
	</Header>
);

export default withTheme(NavHeader);
