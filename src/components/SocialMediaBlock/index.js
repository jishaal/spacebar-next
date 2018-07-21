import React from 'react';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaInstagram from 'react-icons/lib/fa/instagram';
import styled from 'react-emotion';
import { Flex } from 'grid-styled/emotion';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

const Linked = styled(OutboundLink)`
	color: ${props => props.theme.colors.blue};
	padding: 0.25rem;
	display: block;
	transition: opacity 0.2s ease-in;
	&:hover {
		text-decoration: none;
		opacity: 0.6;
	}
	margin: 0.5rem;
`;

const SocialMediaBlock = () => (
	<Flex>
		<Linked href="https://twitter.com/jishaal" aria-label="Twitter">
			<FaTwitter size={36} />
		</Linked>
		<Linked href="https://linkedin.com/in/jishaal" aria-label="LinkedIn">
			<FaLinkedIn size={36} />
		</Linked>
		<Linked href="https://www.instagram.com/jishaal/" aria-label="Instagram">
			<FaInstagram size={36} />
		</Linked>
	</Flex>
);

export default SocialMediaBlock;
