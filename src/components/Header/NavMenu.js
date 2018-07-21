import React, { Component, Fragment } from 'react';
import { Link } from 'gatsby';
import styled, { css } from 'react-emotion';
import { withTheme } from 'emotion-theming';
import FaBars from 'react-icons/lib/fa/bars';

const ListItem = styled('li')`
	margin: 0.25rem;

	@media (min-width: 40em) {
		margin-right: 1em;

		&:last-child {
			margin-right: 0;
		}
	}
`;

const ListLink = props => (
	<ListItem>
		<Link to={props.to}>{props.children}</Link>
	</ListItem>
);

const ListExternalLink = props => (
	<ListItem>
		<a href={props.to} rel="noopener">
			{props.children}
		</a>
	</ListItem>
);

const MobileMenuButton = styled('button')`
	width: 100%;
	height: 3rem;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 4;
	border: none;
	box-shadow: 0px -2px 14px -3px #b7b3b3;
	background: white;
	color: ${props => props.theme.colors.blue};

	@media (min-width: 40em) {
		display: none;
	}
`;

const Mask = styled('div')`
	width: 100%;
	height: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	top: 0;
	right: 0;
	z-index: 2;
	background: ${props => props.theme.colors.blue};
	opacity: 0.5;

	@media (min-width: 40em) {
		display: none;
	}
`;

class NavMenu extends Component {
	state = { isOpen: false };
	toggleMenu = () => {
		this.setState(prevState => ({ isOpen: !prevState.isOpen }));
	};
	render() {
		return (
			<Fragment>
				{this.state.isOpen && <Mask onClick={this.toggleMenu} />}
				<MobileMenuButton onClick={this.toggleMenu}>
					<FaBars />
				</MobileMenuButton>
				<ul
					className={css`
						font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto',
							'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
							'Helvetica Neue', sans-serif;
						display: flex;
						list-style: none;
						flex-direction: column;
						position: fixed;
						left: 0;
						bottom: 0;
						right: 0;
						margin: 0;
						height: 50vh;
						background: ${this.props.theme.colors.white};
						border-top-left-radius: 0.75rem;
						border-top-right-radius: 0.75rem;
						padding: 1rem 0.75rem;
						z-index: 3;

						transform: translate(0, ${!this.state.isOpen ? '100vh' : 0});
						transition: transform 0.3s cubic-bezier(0.17, 0.67, 0.16, 0.99),
							color 0.3s ease;

						@media (min-width: 40em) {
							flex-direction: row;
							height: auto;
							width: auto;
							position: inherit;
							transform: none;
							background: white;
							padding: 0;
						}

						a {
							display: block;
							border: 2px solid ${this.props.theme.colors.blue};
							color: ${this.props.theme.colors.blue};
							text-decoration: none;
							padding: 0.25rem 0.5rem;
							font-weight: 500;
							transition: background-color 0.3s ease, color 0.3s ease;
						}

						a:hover {
							background-color: ${this.props.theme.colors.blue};
							color: white;
						}
					`}
				>
					<ListLink to="/about-me/">About Me</ListLink>
					<ListExternalLink to="https://medium.com/@jishaal/latest">
						Medium
					</ListExternalLink>
					<ListExternalLink to="https://github.com/jishaal">Github</ListExternalLink>
				</ul>
			</Fragment>
		);
	}
}

export default withTheme(NavMenu);
