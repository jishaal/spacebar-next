import React from 'react';
import { Link } from 'gatsby';
import { css } from 'react-emotion';
import { Flex } from 'grid-styled/emotion';

import logo from '../../../assets/svgs/logo.svg';

import NavMenu from './NavMenu';

const Header = Flex.withComponent('header');

export default () => (
	<Header
		display="flex"
		className={css`
			align-items: center;
		`}
	>
		<Link
			to="/"
			aria-label="Spacebar"
			className={css`
				flex-grow: 1;
			`}
		>
			<img
				src={logo}
				alt="Spacebar site logo"
				className={css`
					max-width: 12rem;
					margin-bottom: 0;
					display: block;
				`}
			/>
		</Link>
		<NavMenu />
	</Header>
);
