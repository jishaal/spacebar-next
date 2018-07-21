import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Box } from 'grid-styled/emotion';
import format from 'date-fns/format';

const roundUp = time => `${Math.ceil(time)} min read`;
const formatDate = date => format(date, 'MMM D YYYY');

const Anchor = styled('a')`
	color: ${props => props.theme.colors.white};
	&:hover {
		text-decoration: none;
	}
`;

const ArticleBlock = props => (
	<Box width={[1, 1, 1 / 2]} py={[2, 3]} pr={[2, 4]} mb={[3, 2]}>
		<h3>
			<Anchor href={`https://medium.com/@jishaal/${props.slug}`}>{props.title}</Anchor>
		</h3>
		<p>{props.subtitle}</p>
		<span>{formatDate(props.date)}</span>
		{' · '}
		<span>{roundUp(props.readingTime)}</span>
	</Box>
);

ArticleBlock.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	readingTime: PropTypes.number.isRequired,
	slug: PropTypes.string.isRequired
};

export default ArticleBlock;
